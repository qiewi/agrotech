# apps/api/app/main.py

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pathlib import Path
from pydantic import BaseModel
from PIL import Image
import pandas as pd
import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
import re

# =========================
# FastAPI App Initialization
# =========================

app = FastAPI()

# Allow CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ganti sesuai kebutuhan
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# Root & Example Endpoints
# =========================

@app.get("/")
async def root():
    return {"message": "Hello from FastAPI"}

@app.get("/api/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

# =========================
# Data Pangan Endpoints
# =========================

DATA_DIR = Path(__file__).parent / "dataPangan"

def normalize_filename(name: str) -> str:
    """Lowercase, ganti spasi dengan strip, hapus tanda kurung dan titik"""
    name = name.lower()
    name = re.sub(r"[()]", "", name)
    name = name.replace(".", "")
    name = name.replace(" ", "-")
    return name

def read_all_commodities():
    result = {}
    for file in DATA_DIR.glob("*.csv"):
        komoditas = file.stem
        df = pd.read_csv(file)
        if "Date" not in df.columns:
            continue
        per_tanggal = {}
        for _, row in df.iterrows():
            tanggal = str(row["Date"])[:10]
            harga = {}
            for prov in df.columns:
                if prov == "Date":
                    continue
                val = row[prov]
                harga[prov] = float(val) if pd.notnull(val) else None
            per_tanggal[tanggal] = harga
        result[komoditas] = per_tanggal
    return result

@app.get("/api/pangan")
def get_all_pangan():
    """
    Return:
    {
      "Beras Premium": {
        "2022-01-01": {"Aceh": 12345, ...},
        ...
      },
      ...
    }
    """
    return read_all_commodities()

@app.get("/api/pangan/{komoditas}")
def get_pangan(komoditas: str):
    target = normalize_filename(komoditas)
    found_file = None
    for file in DATA_DIR.glob("*.csv"):
        fname = normalize_filename(file.stem)
        if fname == target:
            found_file = file
            break
    if not found_file:
        return {"error": "Komoditas tidak ditemukan"}

    df = pd.read_csv(found_file)
    if "Date" not in df.columns:
        return {"error": "Data tidak valid"}

    per_tanggal = {}
    for _, row in df.iterrows():
        tanggal = str(row["Date"])[:10]
        harga = {}
        for prov in df.columns:
            if prov == "Date":
                continue
            val = row[prov]
            harga[prov] = float(val) if pd.notnull(val) else None
        per_tanggal[tanggal] = harga

    return per_tanggal

# =========================
# Sensor Data Endpoints
# =========================

class SensorData(BaseModel):
    temperature: float
    humidity: float

data_store = []

@app.post("/sensor")
async def receive_sensor(data: SensorData):
    data_store.append(data.dict())
    return {"message": "Data received"}

@app.get("/sensor")
async def get_sensor():
    return data_store[-1] if data_store else {}

# =========================
# Plant Disease Classifier
# =========================

import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from PIL import Image

# -------------------------
# Label Definitions (URUTAN HARUS SAMA DENGAN class_to_idx DI TRAINING)
# -------------------------

LABELS = [
    "Apple___Apple_scab",
    "Apple___Black_rot",
    "Apple___Cedar_apple_rust",
    "Apple___healthy",
    "Blueberry___healthy",
    "Cherry_(including_sour)___Powdery_mildew",
    "Cherry_(including_sour)___healthy",
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot",
    "Corn_(maize)___Common_rust_",
    "Corn_(maize)___Northern_Leaf_Blight",
    "Corn_(maize)___healthy",
    "Grape___Black_rot",
    "Grape___Esca_(Black_Measles)",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)",
    "Grape___healthy",
    "Orange___Haunglongbing_(Citrus_greening)",
    "Peach___Bacterial_spot",
    "Peach___healthy",
    "Pepper,_bell___Bacterial_spot",
    "Pepper,_bell___healthy",
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy",
    "Raspberry___healthy",
    "Soybean___healthy",
    "Squash___Powdery_mildew",
    "Strawberry___Leaf_scorch",
    "Strawberry___healthy",
    "Tomato___Bacterial_spot",
    "Tomato___Early_blight",
    "Tomato___Late_blight",
    "Tomato___Leaf_Mold",
    "Tomato___Septoria_leaf_spot",
    "Tomato___Spider_mites Two-spotted_spider_mite",
    "Tomato___Target_Spot",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus",
    "Tomato___Tomato_mosaic_virus",
    "Tomato___healthy",
]

# -------------------------
# Clean Label Mapping
# -------------------------

LABEL_CLEAN_MAP = {
    "Apple___Apple_scab": "apple_apple_scab",
    "Apple___Black_rot": "apple_black_rot",
    "Apple___Cedar_apple_rust": "apple_cedar_apple_rust",
    "Apple___healthy": "apple_healthy",
    "Blueberry___healthy": "blueberry_healthy",
    "Cherry_(including_sour)___Powdery_mildew": "cherry_including_sour_powdery_mildew",
    "Cherry_(including_sour)___healthy": "cherry_including_sour_healthy",
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": "corn_maize_cercospora_leaf_spot_gray_leaf_spot",
    "Corn_(maize)___Common_rust_": "corn_maize_common_rust",
    "Corn_(maize)___Northern_Leaf_Blight": "corn_maize_northern_leaf_blight",
    "Corn_(maize)___healthy": "corn_maize_healthy",
    "Grape___Black_rot": "grape_black_rot",
    "Grape___Esca_(Black_Measles)": "grape_esca_black_measles",
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": "grape_leaf_blight_isariopsis_leaf_spot",
    "Grape___healthy": "grape_healthy",
    "Orange___Haunglongbing_(Citrus_greening)": "orange_haunglongbing_citrus_greening",
    "Peach___Bacterial_spot": "peach_bacterial_spot",
    "Peach___healthy": "peach_healthy",
    "Pepper,_bell___Bacterial_spot": "pepper_bell_bacterial_spot",
    "Pepper,_bell___healthy": "pepper_bell_healthy",
    "Potato___Early_blight": "potato_early_blight",
    "Potato___Late_blight": "potato_late_blight",
    "Potato___healthy": "potato_healthy",
    "Raspberry___healthy": "raspberry_healthy",
    "Soybean___healthy": "soybean_healthy",
    "Squash___Powdery_mildew": "squash_powdery_mildew",
    "Strawberry___Leaf_scorch": "strawberry_leaf_scorch",
    "Strawberry___healthy": "strawberry_healthy",
    "Tomato___Bacterial_spot": "tomato_bacterial_spot",
    "Tomato___Early_blight": "tomato_early_blight",
    "Tomato___Late_blight": "tomato_late_blight",
    "Tomato___Leaf_Mold": "tomato_leaf_mold",
    "Tomato___Septoria_leaf_spot": "tomato_septoria_leaf_spot",
    "Tomato___Spider_mites Two-spotted_spider_mite": "tomato_spider_mites_two_spotted_spider_mite",
    "Tomato___Target_Spot": "tomato_target_spot",
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": "tomato_tomato_yellow_leaf_curl_virus",
    "Tomato___Tomato_mosaic_virus": "tomato_tomato_mosaic_virus",
    "Tomato___healthy": "tomato_healthy",
}

# Map index to clean label
LABEL_MAP = {i: LABEL_CLEAN_MAP[label] for i, label in enumerate(LABELS)}
# Map index to original label (if needed)
LABEL_ORIGINAL_MAP = {i: label for i, label in enumerate(LABELS)}

# -------------------------
# Model Definition
# -------------------------

class PlantDiseaseClassifier(nn.Module):
    def __init__(self, num_classes, pretrained=True):
        super().__init__()
        self.model = models.mobilenet_v2(
            weights=models.MobileNet_V2_Weights.IMAGENET1K_V1 if pretrained else None
        )
        in_features = self.model.classifier[1].in_features
        self.model.classifier = nn.Sequential(
            nn.Linear(in_features, num_classes)
        )

    def forward(self, x):
        return self.model(x)

# -------------------------
# Model Loading
# -------------------------

NUM_CLASSES = len(LABEL_MAP)
MODEL_PATH = "best_model_mobilenetv2.pth"

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = PlantDiseaseClassifier(num_classes=NUM_CLASSES, pretrained=False)
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.eval()
model.to(device)

# -------------------------
# Image Preprocessing
# -------------------------

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    ),
])

# -------------------------
# FastAPI Endpoint
# -------------------------

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = Image.open(file.file).convert("RGB")
    img_tensor = transform(image).unsqueeze(0).to(device)
    with torch.no_grad():
        outputs = model(img_tensor)
        _, predicted = torch.max(outputs, 1)
        class_idx = predicted.item()
        class_name = LABEL_MAP[class_idx]
        confidence = torch.softmax(outputs, 1)[0, class_idx].item()
        print(f"Predicted class_idx: {class_idx}, class: {class_name}, confidence: {confidence:.4f}")
    return JSONResponse({
        "class": class_name,
        "confidence": confidence
    })

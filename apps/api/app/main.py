# apps/api/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import pandas as pd
import uvicorn
import re

app = FastAPI()

# Allow CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ganti sesuai kebutuhan
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello from FastAPI"}

@app.get("/api/items/{item_id}")
async def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

DATA_DIR = Path(__file__).parent / "dataPangan"

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

def normalize_filename(name: str) -> str:
    # Lowercase, ganti spasi dengan strip, hapus tanda kurung dan titik
    name = name.lower()
    name = re.sub(r"[()]", "", name)
    name = name.replace(".", "")
    name = name.replace(" ", "-")
    return name

@app.get("/api/pangan/{komoditas}")
def get_pangan(komoditas: str):
    # Cari file yang cocok dengan normalisasi
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
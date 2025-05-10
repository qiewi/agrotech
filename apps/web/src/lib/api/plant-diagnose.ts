// lib/api.ts
export async function predictPlantDisease(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  // Ganti URL sesuai backend FastAPI kamu
  const response = await fetch("http://localhost:8000/predict", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Gagal memproses gambar");
  }

  return response.json();
}
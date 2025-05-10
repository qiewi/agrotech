// data/diagnosisData.ts

import type { DiagnosisResult } from "@/components/pages/plant-diagnosis/DiagnosisDetails"

export const diagnosisData: Record<string, DiagnosisResult> = {
  orange_haunglongbing_citrus_greening: {
    diseaseName: "Haunglongbing (Citrus Greening)",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      {
        title: "Pengendalian Vektor",
        description: "Gunakan insektisida untuk mengendalikan serangga vektor penyebar penyakit."
      },
      {
        title: "Pemusnahan Tanaman Terinfeksi",
        description: "Segera musnahkan tanaman yang terinfeksi berat untuk mencegah penyebaran."
      }
    ],
    imageUrl: "/dummy/orange_hlb.jpg"
  },
  tomato_tomato_yellow_leaf_curl_virus: {
    diseaseName: "Tomato Yellow Leaf Curl Virus",
    category: "Virus",
    type: "Infeksi",
    solutions: [
      {
        title: "Pengendalian Kutu Kebul",
        description: "Gunakan insektisida untuk mengendalikan kutu kebul sebagai vektor virus."
      },
      {
        title: "Penggunaan Varietas Tahan",
        description: "Tanam varietas tomat yang tahan terhadap virus ini."
      }
    ],
    imageUrl: "/dummy/tomato_yellow_leaf_curl.jpg"
  },
  soybean_healthy: {
    diseaseName: "Kedelai Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lanjutkan perawatan dan pemupukan secara rutin."
      }
    ],
    imageUrl: "/dummy/soybean_healthy.jpg"
  },
  peach_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Persik",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      {
        title: "Penyemprotan Bakterisida",
        description: "Gunakan bakterisida sesuai dosis anjuran."
      }
    ],
    imageUrl: "/dummy/peach_bacterial_spot.jpg"
  },
  tomato_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Tomat",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      {
        title: "Penyemprotan Bakterisida",
        description: "Gunakan bakterisida berbahan aktif tembaga."
      }
    ],
    imageUrl: "/dummy/tomato_bacterial_spot.jpg"
  },
  tomato_late_blight: {
    diseaseName: "Busuk Daun Tomat (Late Blight)",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Fungisida Kontak",
        description: "Semprotkan fungisida kontak secara berkala."
      }
    ],
    imageUrl: "/dummy/tomato_late_blight.jpg"
  },
  // ... lanjutkan untuk label lain sesuai kebutuhan
}

// data/diagnosisData.ts

import type { DiagnosisResult } from "@/components/pages/plant-diagnosis/DiagnosisDetails"

export const diagnosisData: Record<string, DiagnosisResult> = {
  apple_apple_scab: {
    diseaseName: "Apple Scab",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Fungisida", description: "Gunakan fungisida berbahan aktif yang direkomendasikan untuk mengendalikan scab." }
    ],
    imageUrl: "/dummy/apple_scab.jpg"
  },
  apple_black_rot: {
    diseaseName: "Black Rot pada Apel",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi Kebun", description: "Buang buah dan daun yang terinfeksi." }
    ],
    imageUrl: "/dummy/apple_black_rot.jpg"
  },
  apple_cedar_apple_rust: {
    diseaseName: "Cedar Apple Rust",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Pengendalian Inang", description: "Jauhkan pohon cedar dari kebun apel." }
    ],
    imageUrl: "/dummy/apple_cedar_apple_rust.jpg"
  },
  apple_healthy: {
    diseaseName: "Apel Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/apple_healthy.jpg"
  },
  blueberry_healthy: {
    diseaseName: "Blueberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/blueberry_healthy.jpg"
  },
  cherry_including_sour_powdery_mildew: {
    diseaseName: "Powdery Mildew pada Cherry",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida sesuai anjuran." }
    ],
    imageUrl: "/dummy/cherry_powdery_mildew.jpg"
  },
  cherry_including_sour_healthy: {
    diseaseName: "Cherry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/cherry_healthy.jpg"
  },
  corn_maize_cercospora_leaf_spot_gray_leaf_spot: {
    diseaseName: "Cercospora Leaf Spot pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Rotasi Tanaman", description: "Lakukan rotasi tanaman dan gunakan varietas tahan." }
    ],
    imageUrl: "/dummy/corn_cercospora_leaf_spot.jpg"
  },
  corn_maize_common_rust: {
    diseaseName: "Common Rust pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida jika serangan berat." }
    ],
    imageUrl: "/dummy/corn_common_rust.jpg"
  },
  corn_maize_northern_leaf_blight: {
    diseaseName: "Northern Leaf Blight pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Varietas Tahan", description: "Gunakan varietas jagung yang tahan penyakit." }
    ],
    imageUrl: "/dummy/corn_northern_leaf_blight.jpg"
  },
  corn_maize_healthy: {
    diseaseName: "Jagung Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/corn_healthy.jpg"
  },
  grape_black_rot: {
    diseaseName: "Black Rot pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Pangkas Bagian Terinfeksi", description: "Buang bagian tanaman yang terinfeksi." }
    ],
    imageUrl: "/dummy/grape_black_rot.jpg"
  },
  grape_esca_black_measles: {
    diseaseName: "Esca (Black Measles) pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi", description: "Buang kayu yang terinfeksi dan gunakan fungisida." }
    ],
    imageUrl: "/dummy/grape_esca.jpg"
  },
  grape_leaf_blight_isariopsis_leaf_spot: {
    diseaseName: "Leaf Blight (Isariopsis Leaf Spot) pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida sesuai anjuran." }
    ],
    imageUrl: "/dummy/grape_leaf_blight.jpg"
  },
  grape_healthy: {
    diseaseName: "Anggur Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/grape_healthy.jpg"
  },
  orange_haunglongbing_citrus_greening: {
    diseaseName: "Haunglongbing (Citrus Greening)",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Pengendalian Vektor", description: "Gunakan insektisida untuk mengendalikan serangga vektor penyebar penyakit." },
      { title: "Pemusnahan Tanaman Terinfeksi", description: "Segera musnahkan tanaman yang terinfeksi berat untuk mencegah penyebaran." }
    ],
    imageUrl: "/dummy/orange_hlb.jpg"
  },
  peach_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Persik",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Bakterisida", description: "Gunakan bakterisida sesuai dosis anjuran." }
    ],
    imageUrl: "/dummy/peach_bacterial_spot.jpg"
  },
  peach_healthy: {
    diseaseName: "Persik Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/peach_healthy.jpg"
  },
  pepper_bell_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Paprika",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Bakterisida", description: "Gunakan bakterisida berbahan aktif tembaga." }
    ],
    imageUrl: "/dummy/pepper_bacterial_spot.jpg"
  },
  pepper_bell_healthy: {
    diseaseName: "Paprika Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/pepper_healthy.jpg"
  },
  potato_early_blight: {
    diseaseName: "Early Blight pada Kentang",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil atau mankozeb." }
    ],
    imageUrl: "/dummy/potato_early_blight.jpg"
  },
  potato_late_blight: {
    diseaseName: "Late Blight pada Kentang",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida Sistemik", description: "Gunakan fungisida sistemik sesuai anjuran." }
    ],
    imageUrl: "/dummy/potato_late_blight.jpg"
  },
  potato_healthy: {
    diseaseName: "Kentang Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/potato_healthy.jpg"
  },
  raspberry_healthy: {
    diseaseName: "Raspberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/raspberry_healthy.jpg"
  },
  soybean_healthy: {
    diseaseName: "Kedelai Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/soybean_healthy.jpg"
  },
  squash_powdery_mildew: {
    diseaseName: "Powdery Mildew pada Squash",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif sulfur." }
    ],
    imageUrl: "/dummy/squash_powdery_mildew.jpg"
  },
  strawberry_leaf_scorch: {
    diseaseName: "Leaf Scorch pada Strawberry",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi", description: "Buang daun yang terinfeksi dan gunakan fungisida." }
    ],
    imageUrl: "/dummy/strawberry_leaf_scorch.jpg"
  },
  strawberry_healthy: {
    diseaseName: "Strawberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/strawberry_healthy.jpg"
  },
  tomato_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Tomat",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Bakterisida", description: "Gunakan bakterisida berbahan aktif tembaga." }
    ],
    imageUrl: "/dummy/tomato_bacterial_spot.jpg"
  },
  tomato_early_blight: {
    diseaseName: "Early Blight pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil atau mankozeb." }
    ],
    imageUrl: "/dummy/tomato_early_blight.jpg"
  },
  tomato_late_blight: {
    diseaseName: "Late Blight pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida Sistemik", description: "Gunakan fungisida sistemik sesuai anjuran." }
    ],
    imageUrl: "/images/disease/leaf-rust.jpg"
  },
  tomato_leaf_mold: {
    diseaseName: "Leaf Mold pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil." }
    ],
    imageUrl: "/dummy/tomato_leaf_mold.jpg"
  },
  tomato_septoria_leaf_spot: {
    diseaseName: "Septoria Leaf Spot pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif mankozeb." }
    ],
    imageUrl: "/dummy/tomato_septoria_leaf_spot.jpg"
  },
  tomato_spider_mites_two_spotted_spider_mite: {
    diseaseName: "Spider Mites pada Tomat",
    category: "Hama",
    type: "Infestasi",
    solutions: [
      { title: "Akarisida", description: "Gunakan akarisida untuk mengendalikan tungau." }
    ],
    imageUrl: "/dummy/tomato_spider_mites.jpg"
  },
  tomato_target_spot: {
    diseaseName: "Target Spot pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil." }
    ],
    imageUrl: "/dummy/tomato_target_spot.jpg"
  },
  tomato_tomato_yellow_leaf_curl_virus: {
    diseaseName: "Tomato Yellow Leaf Curl Virus",
    category: "Virus",
    type: "Infeksi",
    solutions: [
      { title: "Pengendalian Kutu Kebul", description: "Gunakan insektisida untuk mengendalikan kutu kebul sebagai vektor virus." },
      { title: "Penggunaan Varietas Tahan", description: "Tanam varietas tomat yang tahan terhadap virus ini." }
    ],
    imageUrl: "/dummy/tomato_yellow_leaf_curl.jpg"
  },
  tomato_tomato_mosaic_virus: {
    diseaseName: "Tomato Mosaic Virus",
    category: "Virus",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi", description: "Bersihkan alat dan tangan sebelum menangani tanaman." }
    ],
    imageUrl: "/dummy/tomato_mosaic_virus.jpg"
  },
  tomato_healthy: {
    diseaseName: "Tomat Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/dummy/tomato_healthy.jpg"
  }
}
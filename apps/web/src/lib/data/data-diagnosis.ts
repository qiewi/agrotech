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
    imageUrl: "/images/disease/apple-scab.webp"
  },
  apple_black_rot: {
    diseaseName: "Black Rot pada Apel",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi Kebun", description: "Buang buah dan daun yang terinfeksi." }
    ],
    imageUrl: "/images/disease/black-rot.webp"
  },
  apple_cedar_apple_rust: {
    diseaseName: "Cedar Apple Rust",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Pengendalian Inang", description: "Jauhkan pohon cedar dari kebun apel." }
    ],
    imageUrl: "/images/disease/cedar-apple-rust.webp"
  },
  apple_healthy: {
    diseaseName: "Apel Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/apple-healthy.webp"
  },
  blueberry_healthy: {
    diseaseName: "Blueberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/blueberry-healthy.webp"
  },
  cherry_including_sour_powdery_mildew: {
    diseaseName: "Powdery Mildew pada Cherry",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida sesuai anjuran." }
    ],
    imageUrl: "/images/disease/cherry-powdery-mildew.webp"
  },
  cherry_including_sour_healthy: {
    diseaseName: "Cherry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/cherry-healthy.webp"
  },
  corn_maize_cercospora_leaf_spot_gray_leaf_spot: {
    diseaseName: "Cercospora Leaf Spot pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Rotasi Tanaman", description: "Lakukan rotasi tanaman dan gunakan varietas tahan." }
    ],
    imageUrl: "/images/disease/corn-cercospora-leaf-spot.webp"
  },
  corn_maize_common_rust: {
    diseaseName: "Common Rust pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida jika serangan berat." }
    ],
    imageUrl: "/images/disease/corn-common-rust.webp"
  },
  corn_maize_northern_leaf_blight: {
    diseaseName: "Northern Leaf Blight pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Varietas Tahan", description: "Gunakan varietas jagung yang tahan penyakit." }
    ],
    imageUrl: "/images/disease/corn-northern-leaf-blight.webp"
  },
  corn_maize_healthy: {
    diseaseName: "Jagung Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/corn-healthy.webp"
  },
  grape_black_rot: {
    diseaseName: "Black Rot pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Pangkas Bagian Terinfeksi", description: "Buang bagian tanaman yang terinfeksi." }
    ],
    imageUrl: "/images/disease/grape-black-rot.webp"
  },
  grape_esca_black_measles: {
    diseaseName: "Esca (Black Measles) pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi", description: "Buang kayu yang terinfeksi dan gunakan fungisida." }
    ],
    imageUrl: "/images/disease/grape-esca.webp"
  },
  grape_leaf_blight_isariopsis_leaf_spot: {
    diseaseName: "Leaf Blight (Isariopsis Leaf Spot) pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida sesuai anjuran." }
    ],
    imageUrl: "/images/disease/grape-leaf-blight.webp"
  },
  grape_healthy: {
    diseaseName: "Anggur Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/grape-healthy.webp"
  },
  orange_haunglongbing_citrus_greening: {
    diseaseName: "Haunglongbing (Citrus Greening)",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Pengendalian Vektor", description: "Gunakan insektisida untuk mengendalikan serangga vektor penyebar penyakit." },
      { title: "Pemusnahan Tanaman Terinfeksi", description: "Segera musnahkan tanaman yang terinfeksi berat untuk mencegah penyebaran." }
    ],
    imageUrl: "/images/disease/orange-hlb.webp"
  },
  peach_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Persik",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Bakterisida", description: "Gunakan bakterisida sesuai dosis anjuran." }
    ],
    imageUrl: "/images/disease/peach-bacterial-spot.webp"
  },
  peach_healthy: {
    diseaseName: "Persik Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/peach-healthy.webp"
  },
  pepper_bell_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Paprika",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Bakterisida", description: "Gunakan bakterisida berbahan aktif tembaga." }
    ],
    imageUrl: "/images/disease/pepper-bacterial-spot.webp"
  },
  pepper_bell_healthy: {
    diseaseName: "Paprika Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/pepper-healthy.webp"
  },
  potato_early_blight: {
    diseaseName: "Early Blight pada Kentang",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil atau mankozeb." }
    ],
    imageUrl: "/images/disease/potato-early-blight.webp"
  },
  potato_late_blight: {
    diseaseName: "Late Blight pada Kentang",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida Sistemik", description: "Gunakan fungisida sistemik sesuai anjuran." }
    ],
    imageUrl: "/images/disease/potato-late-blight.webp"
  },
  potato_healthy: {
    diseaseName: "Kentang Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/potato-healthy.webp"
  },
  raspberry_healthy: {
    diseaseName: "Raspberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/raspberry-healthy.webp"
  },
  soybean_healthy: {
    diseaseName: "Kedelai Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/soybean-healthy.webp"
  },
  squash_powdery_mildew: {
    diseaseName: "Powdery Mildew pada Squash",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif sulfur." }
    ],
    imageUrl: "/images/disease/squash-powdery-mildew.webp"
  },
  strawberry_leaf_scorch: {
    diseaseName: "Leaf Scorch pada Strawberry",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi", description: "Buang daun yang terinfeksi dan gunakan fungisida." }
    ],
    imageUrl: "/images/disease/strawberry-leaf-scorch.webp"
  },
  strawberry_healthy: {
    diseaseName: "Strawberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/strawberry-healthy.webp"
  },
  tomato_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Tomat",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Bakterisida", description: "Gunakan bakterisida berbahan aktif tembaga." }
    ],
    imageUrl: "/images/disease/tomato-bacterial-spot.webp"
  },
  tomato_early_blight: {
    diseaseName: "Early Blight pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil atau mankozeb." }
    ],
    imageUrl: "/images/disease/tomato-early-blight.webp"
  },
  tomato_late_blight: {
    diseaseName: "Late Blight pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida Sistemik", description: "Gunakan fungisida sistemik sesuai anjuran." }
    ],
    imageUrl: "/images/disease/tomato-late-blight.webp"
  },
  tomato_leaf_mold: {
    diseaseName: "Leaf Mold pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil." }
    ],
    imageUrl: "/images/disease/tomato-leaf-mold.webp"
  },
  tomato_septoria_leaf_spot: {
    diseaseName: "Septoria Leaf Spot pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif mankozeb." }
    ],
    imageUrl: "/images/disease/tomato-septoria-leaf-spot.webp"
  },
  tomato_spider_mites_two_spotted_spider_mite: {
    diseaseName: "Spider Mites pada Tomat",
    category: "Hama",
    type: "Infestasi",
    solutions: [
      { title: "Akarisida", description: "Gunakan akarisida untuk mengendalikan tungau." }
    ],
    imageUrl: "/images/disease/tomato-spider-mites.webp"
  },
  tomato_target_spot: {
    diseaseName: "Target Spot pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil." }
    ],
    imageUrl: "/images/disease/tomato-target-spot.webp"
  },
  tomato_tomato_yellow_leaf_curl_virus: {
    diseaseName: "Tomato Yellow Leaf Curl Virus",
    category: "Virus",
    type: "Infeksi",
    solutions: [
      { title: "Pengendalian Kutu Kebul", description: "Gunakan insektisida untuk mengendalikan kutu kebul sebagai vektor virus." },
      { title: "Penggunaan Varietas Tahan", description: "Tanam varietas tomat yang tahan terhadap virus ini." }
    ],
    imageUrl: "/images/disease/tomato-yellow-leaf-curl.webp"
  },
  tomato_tomato_mosaic_virus: {
    diseaseName: "Tomato Mosaic Virus",
    category: "Virus",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi", description: "Bersihkan alat dan tangan sebelum menangani tanaman." }
    ],
    imageUrl: "/images/disease/tomato-mosaic-virus.webp"
  },
  tomato_healthy: {
    diseaseName: "Tomat Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." }
    ],
    imageUrl: "/images/disease/tomato-healthy.webp"
  }
}
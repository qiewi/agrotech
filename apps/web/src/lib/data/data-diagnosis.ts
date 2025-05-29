// data/diagnosisData.ts

import type { DiagnosisResult } from "@/components/pages/plant-diagnosis/DiagnosisDetails"

export const diagnosisData: Record<string, DiagnosisResult> = {
  apple_apple_scab: {
    diseaseName: "Apple Scab",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Semprot Fungisida",
        description: "Gunakan difenokonazol, mankozeb, atau captan dari awal pertumbuhan hingga setelah panen."
      },
      {
        title: "Bersihkan Area",
        description: "Buang daun dan buah yang terinfeksi di sekitar pohon untuk mencegah penyebaran spora."
      },
      {
        title: "Pangkas Cabang",
        description: "Pangkas untuk meningkatkan sirkulasi udara dan mengurangi kelembapan."
      },
      {
        title: "Gunakan Varietas Tahan",
        description: "Tanam varietas apel tahan scab seperti Liberty, Enterprise, atau Freedom."
      },
      {
        title: "Rotasi Tanam",
        description: "Hindari penanaman apel terus-menerus di lokasi yang sama."
      },
      {
        title: "Pantau Rutin",
        description: "Lakukan pengecekan rutin saat kondisi lembap karena risiko infeksi lebih tinggi."
      }
    ],
    imageUrl: "/images/disease/apple-scab.webp"
  }, 
  apple_black_rot: {
    diseaseName: "Black Rot pada Apel",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Sanitasi Kebun",
        description: "Buang daun, ranting, dan buah terinfeksi untuk mencegah penyebaran jamur."
      },
      {
        title: "Pemangkasan",
        description: "Pangkas bagian pohon yang rusak untuk memperbaiki sirkulasi udara dan mengurangi kelembapan."
      },
      {
        title: "Fungisida Preventif",
        description: "Gunakan fungisida seperti captan atau thiophanate-methyl saat awal musim tanam."
      },
      {
        title: "Rotasi Tanaman",
        description: "Hindari menanam apel di area bekas pohon yang pernah terinfeksi."
      }
    ],
    imageUrl: "/images/disease/black-rot.webp"
  },
  apple_cedar_apple_rust: {
    diseaseName: "Cedar Apple Rust",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Jauhkan Inang",
        description: "Hindari menanam apel di dekat pohon cedar atau juniper."
      },
      {
        title: "Gunakan Fungisida",
        description: "Semprotkan fungisida seperti myclobutanil pada fase awal pertumbuhan daun."
      },
      {
        title: "Pangkas dan Bersihkan",
        description: "Pangkas bagian yang terinfeksi dan bersihkan area sekitar pohon."
      },
      {
        title: "Tanam Varietas Tahan",
        description: "Gunakan varietas apel yang tahan terhadap cedar apple rust."
      }
    ],
    imageUrl: "/images/disease/cedar-apple-rust.webp"
  },
  apple_healthy: {
    diseaseName: "Apel Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lanjutkan penyiraman, pemupukan, dan pemangkasan secara berkala."
      },
      {
        title: "Monitoring Berkala",
        description: "Periksa kondisi pohon secara rutin untuk mendeteksi gejala penyakit lebih awal."
      },
      {
        title: "Pengendalian Hama",
        description: "Lakukan pengendalian hama sejak dini agar tidak berkembang menjadi penyakit."
      }
    ],
    imageUrl: "/images/disease/apple-healthy.webp"
  }, 
  blueberry_healthy: {
    diseaseName: "Blueberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Teruskan penyiraman, pemangkasan, dan pemupukan sesuai kebutuhan tanaman."
      },
      {
        title: "Pantau Rutin",
        description: "Cek daun dan buah secara berkala untuk mendeteksi gangguan sejak dini."
      },
      {
        title: "Pengendalian Gulma",
        description: "Bersihkan gulma di sekitar tanaman agar nutrisi tidak bersaing."
      }
    ],
    imageUrl: "/images/disease/blueberry-healthy.webp"
  },
  cherry_including_sour_powdery_mildew: {
    diseaseName: "Powdery Mildew pada Cherry",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Gunakan Fungisida",
        description: "Aplikasikan fungisida seperti sulfur atau kalium bikarbonat saat gejala awal muncul."
      },
      {
        title: "Pemangkasan",
        description: "Pangkas ranting untuk meningkatkan sirkulasi udara dan mengurangi kelembapan."
      },
      {
        title: "Hindari Penyiraman Daun",
        description: "Siram langsung ke tanah, bukan ke daun, untuk mencegah kelembapan berlebih."
      },
      {
        title: "Tanam di Tempat Terbuka",
        description: "Pastikan tanaman mendapat cukup sinar matahari dan tidak terlalu rapat."
      }
    ],
    imageUrl: "/images/disease/cherry-powdery-mildew.webp"
  },
  cherry_including_sour_healthy: {
    diseaseName: "Cherry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lakukan penyiraman, pemupukan, dan pemangkasan teratur."
      },
      {
        title: "Pemantauan Hama",
        description: "Periksa kemungkinan hama seperti kutu daun atau ulat secara berkala."
      },
      {
        title: "Pengelolaan Tanah",
        description: "Jaga pH tanah dan drainase agar akar cherry tumbuh optimal."
      }
    ],
    imageUrl: "/images/disease/cherry-healthy.webp"
  }, 
  corn_maize_cercospora_leaf_spot_gray_leaf_spot: {
    diseaseName: "Cercospora Leaf Spot pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Rotasi Tanaman",
        description: "Hindari menanam jagung di lokasi yang sama terus-menerus untuk mengurangi sumber inokulum jamur."
      },
      {
        title: "Gunakan Varietas Tahan",
        description: "Pilih varietas jagung yang memiliki ketahanan terhadap cercospora leaf spot."
      },
      {
        title: "Buang Sisa Tanaman",
        description: "Bersihkan sisa-sisa tanaman terinfeksi untuk mencegah penyebaran penyakit di musim berikutnya."
      },
      {
        title: "Aplikasi Fungisida",
        description: "Semprotkan fungisida bila gejala parah muncul, terutama pada fase vegetatif akhir."
      }
    ],
    imageUrl: "/images/disease/corn-cercospora-leaf-spot.webp"
  },
  corn_maize_common_rust: {
    diseaseName: "Common Rust pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Gunakan Fungisida",
        description: "Aplikasikan fungisida berbahan aktif seperti azoksistrobin saat pustula mulai terlihat."
      },
      {
        title: "Pemantauan Dini",
        description: "Cek daun secara rutin, terutama di musim lembap dan hangat."
      },
      {
        title: "Pilih Varietas Toleran",
        description: "Gunakan varietas jagung dengan ketahanan alami terhadap common rust."
      },
      {
        title: "Tingkatkan Sirkulasi Udara",
        description: "Atur jarak tanam agar tanaman tidak terlalu rapat dan udara dapat bersirkulasi dengan baik."
      }
    ],
    imageUrl: "/images/disease/corn-common-rust.webp"
  },
  corn_maize_northern_leaf_blight: {
    diseaseName: "Northern Leaf Blight pada Jagung",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Gunakan Varietas Tahan",
        description: "Pilih varietas yang memiliki ketahanan terhadap Exserohilum turcicum."
      },
      {
        title: "Rotasi Tanaman",
        description: "Hindari penanaman jagung secara terus-menerus di lahan yang sama."
      },
      {
        title: "Fungisida Saat Diperlukan",
        description: "Gunakan fungisida bila gejala parah atau serangan meluas."
      },
      {
        title: "Buang Tanaman Terinfeksi",
        description: "Musnahkan sisa tanaman yang terinfeksi untuk menekan sumber infeksi."
      }
    ],
    imageUrl: "/images/disease/corn-northern-leaf-blight.webp"
  },
  corn_maize_healthy: {
    diseaseName: "Jagung Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lakukan penyiraman, pemupukan, dan pengamatan tanaman secara berkala."
      },
      {
        title: "Pantau Hama & Penyakit",
        description: "Cek rutin untuk mencegah serangan awal dari jamur atau hama."
      },
      {
        title: "Pengelolaan Lahan",
        description: "Pastikan drainase dan struktur tanah mendukung pertumbuhan optimal."
      }
    ],
    imageUrl: "/images/disease/corn-healthy.webp"
  }, 
  grape_black_rot: {
    diseaseName: "Black Rot pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Pangkas Bagian Terinfeksi",
        description: "Pangkas dan buang bagian tanaman seperti daun, ranting, atau buah yang menunjukkan gejala black rot."
      },
      {
        title: "Sanitasi Kebun",
        description: "Bersihkan sisa tanaman dan buah yang gugur agar tidak menjadi sumber infeksi."
      },
      {
        title: "Aplikasi Fungisida",
        description: "Gunakan fungisida berbahan aktif seperti mankozeb atau myclobutanil secara berkala saat musim hujan."
      },
      {
        title: "Perbaiki Sirkulasi Udara",
        description: "Atur jarak tanam dan lakukan pemangkasan rutin agar kelembapan tidak terlalu tinggi di sekitar tanaman."
      }
    ],
    imageUrl: "/images/disease/grape-black-rot.webp"
  },
  grape_esca_black_measles: {
    diseaseName: "Esca (Black Measles) pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Sanitasi Tanaman",
        description: "Pangkas dan buang bagian kayu yang menunjukkan gejala nekrosis atau bercak gelap."
      },
      {
        title: "Fungisida Sistemik",
        description: "Gunakan fungisida sistemik berbahan aktif seperti fosetil-aluminium untuk menghambat perkembangan jamur."
      },
      {
        title: "Hindari Luka",
        description: "Jaga agar tidak terjadi luka pada batang saat pemangkasan karena bisa menjadi pintu masuk patogen."
      },
      {
        title: "Pengawasan Jangka Panjang",
        description: "Pantau kondisi batang dan daun setiap musim untuk deteksi dini penyakit Esca."
      }
    ],
    imageUrl: "/images/disease/grape-esca.webp"
  },    
  grape_leaf_blight_isariopsis_leaf_spot: {
    diseaseName: "Leaf Blight (Isariopsis Leaf Spot) pada Anggur",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Aplikasi Fungisida",
        description: "Semprotkan fungisida seperti klorotalonil atau tembaga hidroksida saat gejala mulai terlihat."
      },
      {
        title: "Pemangkasan Daun Terinfeksi",
        description: "Buang daun yang terinfeksi untuk menghentikan penyebaran spora."
      },
      {
        title: "Jarak Tanam Ideal",
        description: "Atur jarak tanam agar tanaman tidak terlalu rapat dan sirkulasi udara tetap baik."
      },
      {
        title: "Pengairan Tepat",
        description: "Hindari penyiraman dari atas yang dapat mempercepat penyebaran jamur dari daun ke daun."
      }
    ],
    imageUrl: "/images/disease/grape-leaf-blight.webp"
  },
  grape_healthy: {
    diseaseName: "Anggur Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lakukan penyiraman dan pemupukan secara teratur untuk mendukung pertumbuhan optimal."
      },
      {
        title: "Pantau Gejala Dini",
        description: "Lakukan inspeksi rutin untuk mendeteksi gejala penyakit sejak awal."
      },
      {
        title: "Pemangkasan Sehat",
        description: "Lakukan pemangkasan teratur untuk menghindari kelembapan berlebih dan mencegah infeksi."
      }
    ],
    imageUrl: "/images/disease/grape-healthy.webp"
  },  
  orange_haunglongbing_citrus_greening: {
    diseaseName: "Haunglongbing (Citrus Greening)",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      {
        title: "Pengendalian Vektor",
        description: "Gunakan insektisida berbahan aktif imidakloprid atau tiametoksam untuk mengendalikan serangga vektor seperti *Diaphorina citri*."
      },
      {
        title: "Pemusnahan Tanaman Terinfeksi",
        description: "Cabut dan musnahkan tanaman yang terinfeksi berat untuk menghindari penyebaran ke pohon lain."
      },
      {
        title: "Gunakan Bibit Bebas Penyakit",
        description: "Pastikan bibit berasal dari sumber terpercaya yang telah tersertifikasi bebas HLB."
      },
      {
        title: "Monitoring dan Inspeksi Rutin",
        description: "Lakukan inspeksi rutin terhadap daun dan tunas muda untuk mendeteksi gejala dini."
      }
    ],
    imageUrl: "/images/disease/orange-hlb.webp"
  },
  peach_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Persik",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      {
        title: "Penyemprotan Bakterisida",
        description: "Gunakan bakterisida berbahan tembaga (copper-based bactericide) saat awal musim untuk mencegah penyebaran."
      },
      {
        title: "Pemangkasan Cabang Terinfeksi",
        description: "Buang bagian tanaman yang menunjukkan gejala untuk mengurangi sumber infeksi."
      },
      {
        title: "Hindari Irigasi Bertekanan Tinggi",
        description: "Penyemprotan air bertekanan tinggi dapat menyebarkan bakteri dari daun ke daun lain."
      },
      {
        title: "Gunakan Varietas Tahan",
        description: "Pilih varietas persik yang diketahui lebih tahan terhadap bercak bakteri."
      }
    ],
    imageUrl: "/images/disease/peach-bacterial-spot.webp"
  }, 
  peach_healthy: {
    diseaseName: "Persik Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lanjutkan penyiraman dan pemupukan sesuai kebutuhan tanaman."
      },
      {
        title: "Pemangkasan Musiman",
        description: "Lakukan pemangkasan di awal musim tanam untuk merangsang pertumbuhan sehat dan mencegah penyakit."
      },
      {
        title: "Pantau Perubahan Daun",
        description: "Amati perubahan warna dan bentuk daun untuk deteksi dini penyakit."
      }
    ],
    imageUrl: "/images/disease/peach-healthy.webp"
  }, 
  pepper_bell_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Paprika",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      {
        title: "Penyemprotan Bakterisida",
        description: "Gunakan bakterisida berbahan aktif tembaga untuk membasmi bakteri penyebab infeksi."
      },
      {
        title: "Sanitasi Kebun",
        description: "Buang dan hancurkan bagian tanaman yang terinfeksi agar penyakit tidak menyebar."
      },
      {
        title: "Rotasi Tanaman",
        description: "Ganti tanaman paprika dengan tanaman lain secara bergantian untuk mencegah penumpukan bakteri."
      },
      {
        title: "Pengaturan Penyiraman",
        description: "Sirami tanaman di pagi hari agar daun cepat kering dan tidak lembap."
      },
      {
        title: "Pemupukan Seimbang",
        description: "Berikan pupuk sesuai kebutuhan untuk memperkuat daya tahan tanaman."
      }
    ],
    imageUrl: "/images/disease/pepper-bacterial-spot.webp"
  },
  pepper_bell_healthy: {
    diseaseName: "Paprika Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lanjutkan perawatan dan pemupukan sesuai kebutuhan tanaman."
      },
      {
        title: "Pemantauan Berkala",
        description: "Periksa tanaman secara rutin untuk mendeteksi tanda-tanda penyakit atau hama."
      },
      {
        title: "Pengairan Teratur",
        description: "Sirami tanaman secara teratur agar kebutuhan air terpenuhi tanpa berlebihan."
      }
    ],
    imageUrl: "/images/disease/pepper-healthy.webp"
  },
  potato_early_blight: {
    diseaseName: "Early Blight pada Kentang",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Pemberian Fungisida",
        description: "Gunakan fungisida dengan bahan aktif klorotalonil atau mankozeb secara rutin."
      },
      {
        title: "Pembuangan Daun Terinfeksi",
        description: "Buang daun yang menunjukkan gejala penyakit untuk mencegah penyebaran."
      },
      {
        title: "Rotasi Tanaman",
        description: "Hindari menanam kentang di tempat yang sama secara terus-menerus."
      }
    ],
    imageUrl: "/images/disease/potato-early-blight.webp"
  },
  potato_late_blight: {
    diseaseName: "Late Blight pada Kentang",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Fungisida Sistemik",
        description: "Semprot fungisida sistemik sesuai anjuran untuk mengendalikan jamur."
      },
      {
        title: "Pemantauan Harian",
        description: "Periksa tanaman setiap hari agar dapat mengambil tindakan cepat."
      },
      {
        title: "Pengaturan Penyiraman",
        description: "Sirami tanaman di pagi hari agar daun cepat kering."
      },
      {
        title: "Pembersihan Kebun",
        description: "Buang sisa tanaman yang terinfeksi setelah panen."
      },
      {
        title: "Penggunaan Varietas Tahan",
        description: "Pilih varietas kentang yang tahan terhadap penyakit late blight."
      }
    ],
    imageUrl: "/images/disease/potato-late-blight.webp"
  },
  potato_healthy: {
    diseaseName: "Kentang Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lanjutkan pemupukan dan perawatan sesuai kebutuhan tanaman."
      },
      {
        title: "Pengendalian Hama",
        description: "Cegah serangan hama dengan pengawasan dan tindakan tepat waktu."
      },
      {
        title: "Pengairan Teratur",
        description: "Berikan air secara cukup agar tanaman tumbuh optimal."
      },
      {
        title: "Pemilihan Benih Unggul",
        description: "Gunakan benih kentang yang sehat dan berkualitas."
      }
    ],
    imageUrl: "/images/disease/potato-healthy.webp"
  },
  raspberry_healthy: {
    diseaseName: "Raspberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lanjutkan perawatan dan pemupukan secara rutin untuk menjaga kesehatan tanaman."
      },
      {
        title: "Pemantauan Berkala",
        description: "Periksa tanaman secara teratur untuk mendeteksi tanda-tanda awal penyakit atau hama."
      },
      {
        title: "Pengairan yang Tepat",
        description: "Pastikan tanaman mendapatkan air cukup tanpa genangan yang dapat merusak akar."
      }
    ],
    imageUrl: "/images/disease/raspberry-healthy.webp"
  },
  soybean_healthy: {
    diseaseName: "Kedelai Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lakukan penyiraman dan pemupukan secara teratur agar tanaman tumbuh optimal."
      },
      {
        title: "Pengendalian Hama",
        description: "Cegah serangan hama dengan pengawasan rutin dan penggunaan pestisida yang sesuai."
      }
    ],
    imageUrl: "/images/disease/soybean-healthy.webp"
  },
  squash_powdery_mildew: {
    diseaseName: "Powdery Mildew pada Squash",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Pemberian Fungisida",
        description: "Semprot fungisida berbahan aktif sulfur secara rutin untuk mencegah penyebaran jamur."
      },
      {
        title: "Pembuangan Daun Terinfeksi",
        description: "Buang daun yang menunjukkan tanda infeksi agar penyakit tidak menyebar."
      },
      {
        title: "Peningkatan Sirkulasi Udara",
        description: "Atur jarak tanam dan lakukan pemangkasan untuk meningkatkan sirkulasi udara."
      }
    ],
    imageUrl: "/images/disease/squash-powdery-mildew.webp"
  },
  strawberry_leaf_scorch: {
    diseaseName: "Leaf Scorch pada Strawberry",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Sanitasi Kebun",
        description: "Buang daun yang terinfeksi untuk menghambat penyebaran penyakit."
      },
      {
        title: "Penyemprotan Fungisida",
        description: "Gunakan fungisida yang direkomendasikan untuk mengendalikan jamur penyebab leaf scorch."
      },
      {
        title: "Pengaturan Penyiraman",
        description: "Sirami tanaman di pagi hari agar daun cepat kering dan jamur sulit berkembang."
      }
    ],
    imageUrl: "/images/disease/strawberry-leaf-scorch.webp"
  },
  strawberry_healthy: {
    diseaseName: "Strawberry Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      {
        title: "Perawatan Rutin",
        description: "Lakukan penyiraman dan pemupukan secara teratur untuk menjaga tanaman tetap sehat."
      },
      {
        title: "Pemantauan Tanaman",
        description: "Periksa tanaman secara berkala agar segera terdeteksi gejala penyakit atau hama."
      }
    ],
    imageUrl: "/images/disease/strawberry-healthy.webp"
  },
  tomato_bacterial_spot: {
    diseaseName: "Bercak Bakteri pada Tomat",
    category: "Bakteri",
    type: "Infeksi",
    solutions: [
      { title: "Penyemprotan Bakterisida", description: "Gunakan bakterisida berbahan aktif tembaga." },
      { title: "Penggunaan Benih Sehat", description: "Gunakan benih bebas penyakit untuk mencegah infeksi awal." },
      { title: "Sanitasi Kebun", description: "Bersihkan sisa tanaman dan gulma yang dapat menjadi sumber bakteri." },
      { title: "Pengaturan Jarak Tanam", description: "Jaga jarak tanam agar sirkulasi udara baik dan kelembaban terkontrol." },
      { title: "Penghindaran Penyiraman Daun", description: "Hindari menyiram tanaman dari atas agar daun tidak basah lama." }
    ],
    imageUrl: "/images/disease/tomato-bacterial-spot.webp"
  },
  tomato_early_blight: {
    diseaseName: "Early Blight pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif klorotalonil atau mankozeb." },
      { title: "Pemangkasan Daun", description: "Buang daun bawah yang sudah terinfeksi untuk mencegah penyebaran." },
      { title: "Rotasi Tanaman", description: "Hindari menanam tomat di lokasi yang sama berturut-turut." },
      { title: "Pengelolaan Air", description: "Jangan genangi tanaman dan siram di pagi hari agar cepat kering." }
    ],
    imageUrl: "/images/disease/tomato-early-blight.webp"
  },
  tomato_late_blight: {
    diseaseName: "Late Blight pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida Sistemik", description: "Gunakan fungisida sistemik sesuai anjuran untuk hasil optimal." },
      { title: "Sanitasi Tanah", description: "Bersihkan dan buang sisa tanaman terinfeksi agar spora tidak menyebar." },
      { title: "Pemangkasan", description: "Potong bagian tanaman yang terinfeksi secara cepat dan tepat." },
      { title: "Pengawasan Rutin", description: "Periksa tanaman setiap minggu untuk deteksi dini." }
    ],
    imageUrl: "/images/disease/tomato-late-blight.webp"
  },
  tomato_leaf_mold: {
    diseaseName: "Leaf Mold pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Semprot fungisida berbahan aktif klorotalonil secara berkala." },
      { title: "Pengurangan Kelembaban", description: "Hindari penyiraman di malam hari agar daun tidak lembab." },
      { title: "Ventilasi Baik", description: "Atur jarak tanam agar sirkulasi udara lancar dan jamur sulit berkembang." },
      { title: "Buang Daun Terinfeksi", description: "Singkirkan daun yang sudah menunjukkan gejala infeksi." }
    ],
    imageUrl: "/images/disease/tomato-leaf-mold.webp"
  },
  tomato_septoria_leaf_spot: {
    diseaseName: "Septoria Leaf Spot pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Gunakan fungisida berbahan aktif mankozeb untuk mengendalikan penyakit." },
      { title: "Pembersihan Sisa Tanaman", description: "Buang sisa tanaman yang terinfeksi sebagai sumber infeksi." },
      { title: "Pengaturan Jarak Tanam", description: "Jaga jarak tanam agar tanaman tidak terlalu rapat." },
      { title: "Pengendalian Gulma", description: "Hilangkan gulma yang bisa menjadi inang alternatif penyakit." }
    ],
    imageUrl: "/images/disease/tomato-septoria-leaf-spot.webp"
  },
  tomato_spider_mites_two_spotted_spider_mite: {
    diseaseName: "Spider Mites pada Tomat",
    category: "Hama",
    type: "Infestasi",
    solutions: [
      { title: "Akarisida", description: "Gunakan akarisida untuk membasmi tungau secara efektif." },
      { title: "Pembersihan Tanaman", description: "Bersihkan daun dan batang yang terinfestasi berat." },
      { title: "Penyiraman Intensif", description: "Semprot tanaman dengan air untuk menurunkan populasi tungau." },
      { title: "Penggunaan Predator Alami", description: "Lepaskan predator alami seperti kepik yang memakan tungau." }
    ],
    imageUrl: "/images/disease/tomato-spider-mites.webp"
  },
  tomato_target_spot: {
    diseaseName: "Target Spot pada Tomat",
    category: "Jamur",
    type: "Infeksi",
    solutions: [
      { title: "Fungisida", description: "Semprot fungisida berbahan aktif klorotalonil untuk mengatasi target spot." },
      { title: "Buang Daun Terinfeksi", description: "Singkirkan daun yang sudah terinfeksi agar tidak menyebar." },
      { title: "Rotasi Tanaman", description: "Lakukan rotasi tanaman untuk mengurangi akumulasi patogen." },
      { title: "Pengendalian Kelembaban", description: "Kurangi kelembaban di sekitar tanaman dengan ventilasi yang baik." }
    ],
    imageUrl: "/images/disease/tomato-target-spot.webp"
  },
  tomato_tomato_yellow_leaf_curl_virus: {
    diseaseName: "Tomato Yellow Leaf Curl Virus",
    category: "Virus",
    type: "Infeksi",
    solutions: [
      { title: "Pengendalian Kutu Kebul", description: "Gunakan insektisida untuk mengendalikan kutu kebul sebagai vektor virus." },
      { title: "Penggunaan Varietas Tahan", description: "Tanam varietas tomat yang tahan terhadap virus ini." },
      { title: "Sanitasi Kebun", description: "Bersihkan gulma dan sisa tanaman untuk memutus rantai penyebaran virus." },
      { title: "Pemantauan Rutin", description: "Periksa tanaman secara berkala untuk deteksi dan penanganan dini." }
    ],
    imageUrl: "/images/disease/tomato-yellow-leaf-curl.webp"
  },
  tomato_tomato_mosaic_virus: {
    diseaseName: "Tomato Mosaic Virus",
    category: "Virus",
    type: "Infeksi",
    solutions: [
      { title: "Sanitasi", description: "Bersihkan alat dan tangan sebelum dan sesudah menangani tanaman." },
      { title: "Penggantian Benih", description: "Gunakan benih bebas virus untuk mencegah infeksi awal." },
      { title: "Pengendalian Vektor", description: "Atasi hama yang dapat menyebarkan virus seperti kutu." },
      { title: "Pengaturan Lingkungan", description: "Jaga kebersihan dan ventilasi kebun agar tanaman tidak stres." }
    ],
    imageUrl: "/images/disease/tomato-mosaic-virus.webp"
  },
  tomato_healthy: {
    diseaseName: "Tomat Sehat",
    category: "Sehat",
    type: "Tidak ada infeksi",
    solutions: [
      { title: "Perawatan Rutin", description: "Lanjutkan perawatan dan pemupukan secara rutin." },
      { title: "Pemantauan Berkala", description: "Periksa tanaman secara rutin untuk memastikan kondisi tetap sehat." },
      { title: "Pengendalian Hama dan Penyakit", description: "Lakukan pencegahan dini terhadap hama dan penyakit." },
      { title: "Penyiraman Teratur", description: "Berikan air sesuai kebutuhan agar tanaman tidak stres." }
    ],
    imageUrl: "/images/disease/tomato-healthy.webp"
  }
}
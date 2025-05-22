// export const KOMODITAS = [
//     "Bawang Merah",
//     "Bawang Putih Bonggol",
//     "Beras Medium",
//     "Beras Premium",
//     "Cabai Merah Keriting",
//     "Cabai Rawit Merah",
//   ];

export type KomoditasKategori = "Tanaman Pangan" | "Holtikultura" | "Perkebunan" | "Peternakan";

export interface KomoditasItem {
  nama: string;
  kategori: KomoditasKategori;
  kode: string; // untuk url/file/gambar
}

export const KOMODITAS: KomoditasItem[] = [
  // Tanaman Pangan
  { nama: "Gabah Kering Panen", kategori: "Tanaman Pangan", kode: "gabah-kering-panen" },
  { nama: "Gabah Kering Giling", kategori: "Tanaman Pangan", kode: "gabah-kering-giling" },
  { nama: "Beras Medium", kategori: "Tanaman Pangan", kode: "beras-medium" },
  { nama: "Beras Premium", kategori: "Tanaman Pangan", kode: "beras-premium" },
  { nama: "Jagung Pipil Kuning", kategori: "Tanaman Pangan", kode: "jagung-pipil-kuning" },
  { nama: "Kedelai", kategori: "Tanaman Pangan", kode: "kedelai" },

  // Holtikultura
  { nama: "Bawang Merah", kategori: "Holtikultura", kode: "bawang-merah" },
  { nama: "Bawang Putih Bonggol", kategori: "Holtikultura", kode: "bawang-putih-bonggol" },
  { nama: "Cabai Rawit Merah", kategori: "Holtikultura", kode: "cabe-rawit-merah" },
  { nama: "Cabai Merah Keriting", kategori: "Holtikultura", kode: "cabe-merah-keriting" },
  { nama: "Krisan", kategori: "Holtikultura", kode: "krisan" },
  { nama: "Durian", kategori: "Holtikultura", kode: "durian" },
  { nama: "Manggis", kategori: "Holtikultura", kode: "manggis" },
  { nama: "Semangka", kategori: "Holtikultura", kode: "semangka" },
  { nama: "Melon", kategori: "Holtikultura", kode: "melon" },
  { nama: "Jahe", kategori: "Holtikultura", kode: "jahe" },

  // Perkebunan
  { nama: "Bunga Cengkeh Kering", kategori: "Perkebunan", kode: "bunga-cengkeh-kering" },
  { nama: "Kakao Fermentasi", kategori: "Perkebunan", kode: "kakao-fermentasi" },
  { nama: "Kakao Non Fermentasi", kategori: "Perkebunan", kode: "kakao-non-fermentasi" },
  { nama: "Kelapa Bulat", kategori: "Perkebunan", kode: "kelapa-bulat" },
  { nama: "Kopra", kategori: "Perkebunan", kode: "kopra" },
  { nama: "Gula Merah Kelapa", kategori: "Perkebunan", kode: "gula-merah-kelapa" },
  { nama: "Kopi Arabika Berasan", kategori: "Perkebunan", kode: "kopi-arabika-berasan" },
  { nama: "Kopi Robusta Berasan", kategori: "Perkebunan", kode: "kopi-robusta-berasan" },
  { nama: "Minyak Nilam", kategori: "Perkebunan", kode: "minyak-nilam" },
  { nama: "Nilam Daun Kering", kategori: "Perkebunan", kode: "nilam-daun-kering" },
  { nama: "Minyak Sereh Wangi", kategori: "Perkebunan", kode: "minyak-sereh-wangi" },
  { nama: "Teh Pucuk Basah", kategori: "Perkebunan", kode: "teh-pucuk-basah" },

  // Peternakan
  { nama: "Daging Sapi", kategori: "Peternakan", kode: "daging-sapi" },
  { nama: "Daging Kambing", kategori: "Peternakan", kode: "daging-kambing" },
  { nama: "Telur Ayam Ras", kategori: "Peternakan", kode: "telur-ayam-ras" },
  { nama: "Telur Ayam Kampung", kategori: "Peternakan", kode: "telur-ayam-kampung" },
  { nama: "Daging Ayam Boiler", kategori: "Peternakan", kode: "daging-ayam-boiler" },
  { nama: "Daging Ayam Kampung", kategori: "Peternakan", kode: "daging-ayam-kampung" },
  { nama: "Bebek Jantan", kategori: "Peternakan", kode: "bebek-jantan" },
  { nama: "Bebek Betina", kategori: "Peternakan", kode: "bebek-betina" },
  { nama: "Menthok Jantan", kategori: "Peternakan", kode: "menthok-jantan" },
  { nama: "Menthok Betina", kategori: "Peternakan", kode: "menthok-betina" },
];

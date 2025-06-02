export type KomoditasKategori =
  | "Tanaman Pangan"
  | "Holtikultura"
  | "Perkebunan"
  | "Peternakan";

export interface KomoditasItem {
  nama: string;
  kategori: KomoditasKategori;
  kode: string; // untuk url/file/gambar
}

export const KOMODITAS: KomoditasItem[] = [
  // Holtikutura
  { nama: "Bawang Merah", kategori: "Holtikultura", kode: "bawang-merah" },
  { nama: "Bawang Putih Bonggol", kategori: "Holtikultura", kode: "bawang-putih-bonggol" },
  { nama: "Cabai Merah Keriting", kategori: "Holtikultura", kode: "cabai-merah-keriting" },
  { nama: "Cabai Rawit Merah", kategori: "Holtikultura", kode: "cabai-rawit-merah" },

  // Tanaman Pangan
  { nama: "Beras Medium", kategori: "Tanaman Pangan", kode: "beras-medium" },
  { nama: "Beras Premium", kategori: "Tanaman Pangan", kode: "beras-premium" },
  { nama: "Tepung Terigu (Curah)", kategori: "Tanaman Pangan", kode: "tepung-terigu-curah" },

  // Peternakan
  { nama: "Daging Ayam Ras", kategori: "Peternakan", kode: "daging-ayam-ras" },
  { nama: "Daging Sapi Murni", kategori: "Peternakan", kode: "daging-sapi-murni" },
  { nama: "Telur Ayam Ras", kategori: "Peternakan", kode: "telur-ayam-ras" },

  // Perkebunan (asumsi gula dan minyak dari perkebunan)
  { nama: "Gula Konsumsi", kategori: "Perkebunan", kode: "gula-konsumsi" },
  { nama: "Minyak Goreng Curah", kategori: "Perkebunan", kode: "minyak-goreng-curah" },
  { nama: "Minyak Goreng Kemasan Sederhana", kategori: "Perkebunan", kode: "minyak-goreng-kemasan-sederhana" },
];
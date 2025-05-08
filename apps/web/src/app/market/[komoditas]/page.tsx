"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Dummy deskripsi, bisa fetch dari API jika ada
const DESKRIPSI: Record<string, string> = {
  "beras-premium":
    "Beras Premium adalah beras dengan kualitas terbaik, kadar air rendah, dan butir utuh. Cocok untuk konsumsi sehari-hari.",
  "bawang-merah":
    "Bawang Merah adalah salah satu bumbu dapur utama di Indonesia, digunakan untuk berbagai masakan.",
  // ... tambahkan sesuai kebutuhan
};

const PROVINSI = [
  "Nasional",
  "Aceh",
  "Bali",
  "Banten",
  "Bengkulu",
  "DI Yogyakarta",
  "DKI Jakarta",
  "Gorontalo",
  "Jambi",
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "Kalimantan Barat",
  "Kalimantan Selatan",
  "Kalimantan Tengah",
  "Kalimantan Timur",
  "Kalimantan Utara",
  "Kepulauan Bangka Belitung",
  "Kepulauan Riau",
  "Lampung",
  "Maluku",
  "Maluku Utara",
  "Nusa Tenggara Barat",
  "Nusa Tenggara Timur",
  "Papua",
  "Papua Barat",
  "Riau",
  "Sulawesi Barat",
  "Sulawesi Selatan",
  "Sulawesi Tengah",
  "Sulawesi Tenggara",
  "Sulawesi Utara",
  "Sumatera Barat",
  "Sumatera Selatan",
  "Sumatera Utara",
];

type KomoditasData = {
  [tanggal: string]: {
    [provinsi: string]: number | null;
  };
};

import { useParams } from "next/navigation";

export default function DetailPage() {
  const params = useParams();
  const komoditasParam = Array.isArray(params.komoditas)
    ? params.komoditas[0]
    : params.komoditas;

  // Normalisasi nama komoditas
  const komoditas = (komoditasParam ?? "").replace(/-/g, " ");
  const imageSrc = `/${komoditasParam}.png`;
  const deskripsi = DESKRIPSI[komoditasParam ?? ""] || "Deskripsi belum tersedia.";

  // State
  const [data, setData] = useState<KomoditasData>({});
  const [selectedProvinsi, setSelectedProvinsi] = useState<string>("Nasional");
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fetch data komoditas
  useEffect(() => {
    fetch("http://localhost:8000/api/pangan")
      .then((res) => res.json())
      .then((json) => {
        setData(json[komoditas] || {});
      });
  }, [komoditas]);

  // Ambil tahun-tahun yang tersedia
  const years = Array.from(
    new Set(Object.keys(data).map((tgl) => tgl.slice(0, 4)))
  ).sort();

  // Data grafik: ambil semua bulan di tahun terpilih
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData = months.map((_, idx) => {
    const month = (idx + 1).toString().padStart(2, "0");
    // Cari tanggal di tahun dan bulan ini
    const tgl = Object.keys(data).find(
      (d) => d.startsWith(selectedYear + "-") && d.slice(5, 7) === month
    );
    if (!tgl) return null;
    if (selectedProvinsi === "Nasional") {
      // Rata-rata nasional
      const all = Object.values(data[tgl]).filter((v) => v !== null) as number[];
      if (all.length > 0) {
        return Math.round(all.reduce((a, b) => a + b, 0) / all.length);
      }
      return null;
    } else {
      const val = data[tgl][selectedProvinsi];
      return val !== null && val !== undefined ? val : null;
    }
  });

  // AVG Nasional (rata-rata dari semua data)
  const avgNasional = (() => {
    const all = Object.values(data)
      .map((d) =>
        Object.values(d).filter((v) => v !== null) as number[]
      )
      .flat();
    if (all.length > 0) {
      return `Rp${Math.round(
        all.reduce((a, b) => a + b, 0) / all.length
      ).toLocaleString()} / Kg`;
    }
    return "-";
  })();

  // Render grafik
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 320;
    canvas.height = 150;

    // Chart margins
    const margin = { top: 10, right: 10, bottom: 30, left: 40 };
    const chartWidth = canvas.width - margin.left - margin.right;
    const chartHeight = canvas.height - margin.top - margin.bottom;

    // Price range (otomatis dari data)
    const validData = chartData.filter((v) => v !== null) as number[];
    const minPrice = validData.length
      ? Math.min(...validData) - 500
      : 10000;
    const maxPrice = validData.length
      ? Math.max(...validData) + 500
      : 20000;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw y-axis labels
    ctx.font = "10px Arial";
    ctx.fillStyle = "#666";
    ctx.textAlign = "right";
    const yLabels = 6;
    for (let i = 0; i < yLabels; i++) {
      const price =
        maxPrice - ((maxPrice - minPrice) * i) / (yLabels - 1);
      const y = margin.top + (i * chartHeight) / (yLabels - 1);
      ctx.fillText(Math.round(price).toString(), margin.left - 5, y + 3);
      // Grid line
      ctx.strokeStyle = "#eee";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(margin.left, y);
      ctx.lineTo(canvas.width - margin.right, y);
      ctx.stroke();
    }

    // Draw x-axis labels (months)
    ctx.textAlign = "center";
    months.forEach((month, i) => {
      const x = margin.left + (i * chartWidth) / (months.length - 1);
      ctx.fillText(month, x, canvas.height - margin.bottom + 15);
    });

    // Draw line
    ctx.strokeStyle = "#36AE7C";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    chartData.forEach((price, i) => {
      if (price === null) return;
      const x = margin.left + (i * chartWidth) / (months.length - 1);
      const y =
        margin.top +
        chartHeight -
        ((price - minPrice) / (maxPrice - minPrice)) * chartHeight;
      if (i === 0 || chartData[i - 1] === null) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
  }, [chartData, months]);

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col">

      {/* Header with back button */}
      <div className="bg-white p-4 flex items-center">
        <Link href="/market" className="flex items-center text-black">
          <ArrowLeft size={20} />
          <span className="ml-2 font-medium">Kembali</span>
        </Link>
      </div>

      {/* Title, image, deskripsi */}
      <div className="p-4 flex items-center gap-4">
        <div className="flex items-center justify-center bg-white rounded-lg">
          <Image
            src={imageSrc}
            alt={komoditas}
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-green-700 capitalize">
          {komoditas}
        </h1>
      </div>
      <div className="px-4 pb-2 text-gray-700 text-sm">{deskripsi}</div>

      <div className="border-t border-gray-200 my-2"></div>

      {/* AVG Nasional */}
      <div className="px-4 py-2">
        <div className="flex">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-green-700 mb-2">AVG</h2>
            <div className="space-y-1 text-sm">
              <div className="grid grid-cols-2">
                <span>Nasional</span>
                <span>{avgNasional}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grafik */}
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Grafik Harga</h2>
        {/* Filter */}
        <div className="flex gap-2 mb-2">
          <select
            className="border rounded px-2 py-1 text-sm"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={selectedProvinsi}
            onChange={(e) => setSelectedProvinsi(e.target.value)}
          >
            {PROVINSI.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>
        {/* Chart */}
        <div className="bg-white p-2 rounded">
          <canvas ref={canvasRef} className="w-full h-[150px]"></canvas>
        </div>
      </div>
    </div>
  );
}

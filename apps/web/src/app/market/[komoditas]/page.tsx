"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { PROVINSI } from "@/lib/data/data-provinsi";
import { DESKRIPSI } from "@/lib/data/komoditas-deskripsi";

type KomoditasData = {
  [tanggal: string]: {
    [provinsi: string]: number | null;
  };
};

function normalizeKomoditasParam(name: string) {
  return name
    .toLowerCase()
    .replace(/[().]/g, "")
    .replace(/ /g, "-");
}

export default function DetailPage() {
  const params = useParams();
  const komoditasParam = Array.isArray(params.komoditas)
    ? params.komoditas[0]
    : params.komoditas;

  const komoditasFile = normalizeKomoditasParam(komoditasParam ?? "");
  const komoditas = (komoditasParam ?? "").replace(/-/g, " ");
  const imageSrc = `/images/commodity/${komoditasFile}.png`;
  const deskripsi = DESKRIPSI[komoditasFile] || "Deskripsi belum tersedia.";

  // State
  const [data, setData] = useState<KomoditasData>({});
  const [selectedProvinsi, setSelectedProvinsi] = useState<string>("Nasional");
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fetch data komoditas
  useEffect(() => {
    if (!komoditasFile) return;
    fetch(`http://localhost:8000/api/pangan/${komoditasFile}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json && !json.error ? json : {});
      });
  }, [komoditasFile]);

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
    canvas.width = 640;
    canvas.height = 280;

    // Chart margins
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };
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
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

      {/* Header with back button */}
      <div className="flex items-center gap-2 p-4">
        <Link href="/market" className="flex items-center text-black">
          <ArrowLeft size={24} />
        </Link>
        <span className="text-lg font-semibold ml-2 ">Details</span>
      </div>

      {/* Gambar besar dengan judul overlay */}
      <div className="relative w-full h-40 mb-2">
        <Image
          src={imageSrc}
          alt={komoditas}
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent ">
          <h1 className="text-2xl md:text-3xl font-bold text-white p-4 drop-shadow">
            {komoditas.replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>
        </div>
      </div>

      {/* Deskripsi */}
      <div className="px-4 pb-2 text-gray-700 text-base">{deskripsi}</div>

      {/* Price Detail */}
      <div className="px-4 pt-4">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Price Detail</h2>
        <p className="text-gray-500 mb-3 text-sm">Details of the crop price</p>
        <div className="flex flex-col gap-2">
          {/* Hapus HET Nasional, hanya rata-rata nasional */}
          <div className="flex justify-between items-center border rounded-lg px-4 py-2 font-semibold text-base">
            <span>Rata-Rata Nasional</span>
            <span className="text-green-700">{avgNasional}</span>
          </div>
        </div>
      </div>

      {/* Price Graph */}
      <div className="px-4 py-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Price Graph</h2>
        <p className="text-gray-500 mb-3 text-sm">
          Check how the price fluctuates
        </p>
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
        <div className="bg-white p-2 rounded shadow mb-20">
          <canvas ref={canvasRef} className="w-full h-[300px]"></canvas>
        </div>
      </div>
    </div>
  );
}

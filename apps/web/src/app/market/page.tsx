"use client";

import React, { useEffect, useState } from "react";
import FoodPriceCard from "@/components/market/FoodPriceCard";
import CustomDatePicker from "@/components/market/CustomDatePicker";


const KOMODITAS = [
  "Bawang Merah",
  "Bawang Putih Bonggol",
  "Beras Medium",
  "Beras Premium",
  "Cabai Merah Keriting",
  "Cabai Rawit Merah",
];

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
  [komoditas: string]: {
    [tanggal: string]: {
      [provinsi: string]: number | null;
    };
  };
};

export default function FoodPriceInfo() {
  const [data, setData] = useState<KomoditasData>({});
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedProvinsi, setSelectedProvinsi] = useState<string>("Nasional");

  useEffect(() => {
    fetch("http://localhost:8000/api/pangan")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        const firstKomoditas = KOMODITAS.find((k) => json[k]);
        if (firstKomoditas) {
          const allDates = Object.keys(json[firstKomoditas]);
          if (allDates.length > 0) setSelectedDate(allDates[0]);
        }
      });
  }, []);

  // Ambil tanggal-tanggal yang tersedia (dari komoditas pertama yang ada)
  const availableDates =
    data && KOMODITAS.find((k) => data[k])
      ? Object.keys(data[KOMODITAS.find((k) => data[k])!])
      : [];

  // Fungsi ambil harga sesuai provinsi
  function getPrice(prices: { [prov: string]: number | null }) {
    if (selectedProvinsi === "Nasional") {
      const all = Object.values(prices).filter((v) => v !== null) as number[];
      if (all.length > 0) {
        return `Rp${Math.round(
          all.reduce((a, b) => a + b, 0) / all.length
        ).toLocaleString()} / kg`;
      }
      return "-";
    } else {
      const val = prices[selectedProvinsi];
      if (val !== null && val !== undefined) {
        return `Rp${val.toLocaleString()} / kg`;
      }
      return "-";
    }
  }

  return (
    <div className="max-w-[390px] mx-auto bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-green-700">
          Info Harga Pangan
        </h1>
        <p className="text-gray-600">Berdasarkan Nasional & Wilayah</p>
      </div>

      {/* Filter */}
      <div className="p-4 flex flex-col gap-2">
        {/* Date Picker */}
        {availableDates.length > 0 && (
          <CustomDatePicker
            availableDates={availableDates}
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        )}
        {/* Provinsi Picker */}
        <select
          className="border rounded px-3 py-2 w-full"
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

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {KOMODITAS.map((komoditas) => {
          const komoditasData = data[komoditas]?.[selectedDate];
          if (!komoditasData) return null;
          const price = getPrice(komoditasData);
          return (
            <FoodPriceCard
              key={komoditas}
              title={komoditas}
              price={price}
              imageSrc={`/${komoditas.toLowerCase().replace(/ /g, "-")}.png`}
              imageAlt={komoditas}
            />
          );
        })}
      </div>
    </div>
  );
}

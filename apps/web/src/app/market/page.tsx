"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import FoodPriceGridCard from "@/components/pages/market/FoodPriceCard";
import CustomDatePicker from "@/components/pages/market/CustomDatePicker";
import { KOMODITAS, KomoditasKategori } from "@/lib/data/data-komoditas";
import { PROVINSI } from "@/lib/data/data-provinsi";
import KategoriCircleFilter from "@/components/pages/market/KategoriCircleFilter";
import Header from "@/components/layout/Header";

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
  const [search, setSearch] = useState("");
  const [selectedProvinsi, setSelectedProvinsi] = useState<string>("Nasional");
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedKategori, setSelectedKategori] = useState<KomoditasKategori | "Semua">("Semua");
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/pangan")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        const firstKomoditas = KOMODITAS.find((k) => json[k.nama]);
        if (firstKomoditas) {
          const allDates = Object.keys(json[firstKomoditas.nama]);
          if (allDates.length > 0) setSelectedDate(allDates[0]);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const availableDates =
    data && KOMODITAS.find((k) => data[k.nama])
      ? Object.keys(data[KOMODITAS.find((k) => data[k.nama])!.nama])
      : [];

  function getPrice(prices: { [prov: string]: number | null }) {
    if (selectedProvinsi === "Nasional") {
      const all = Object.values(prices).filter((v) => v !== null) as number[];
      if (all.length > 0) {
        return `Rp${Math.round(
          all.reduce((a, b) => a + b, 0) / all.length
        ).toLocaleString()} / Kg`;
      }
      return "-";
    } else {
      const val = prices[selectedProvinsi];
      if (val !== null && val !== undefined) {
        return `Rp${val.toLocaleString()} / Kg`;
      }
      return "-";
    }
  }

  // Filter komoditas by kategori & search
  const filteredKomoditas = KOMODITAS.filter(
    (item) =>
      (selectedKategori === "Semua" || item.kategori === selectedKategori) &&
      item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
      <Header />

      {/* Search */}
      <div className="px-4 pt-4">
        <div className="flex items-center border rounded-lg px-3 py-2.5 bg-gray-50">
          <svg
            className="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="kokoa premium"
            className="bg-transparent outline-none flex-1 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="text-sm font-medium text-gray-800">Find</span>
        </div>
      </div>

      {/* Filter Kategori Lingkaran */}
      <div className="px-4 pt-4">
        <KategoriCircleFilter
          selected={selectedKategori}
          onSelect={(value) => setSelectedKategori(value as KomoditasKategori | "Semua")}
        />
      </div>

      {/* Filter Provinsi */}
      <div className="px-4 pt-2">
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

      {/* Calendar Picker Toggle Button */}
      {availableDates.length > 0 && (
        <div className="px-4 pt-2">
          <button
            className="w-full py-2 bg-greenish text-white rounded-lg shadow-lg font-medium mb-2"
            onClick={() => setShowCalendar((prev) => !prev)}
          >
            {showCalendar ? "Hide Calendar" : "Pick Date"}
          </button>
          {showCalendar && (
            <CustomDatePicker
              availableDates={availableDates}
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          )}
        </div>
      )}

      {/* Crop Price Title & Subheader */}
      <div className="px-4 pt-4 flex flex-col gap-1">
        <h1 className="text-xl font-bold text-green-700">Crop Price</h1>
        <p className="text-gray-600 text-sm">Check the current price of crops</p>
      </div>

      {/* Grid Content */}
      <div className="px-4 py-4">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <svg
              className="animate-spin h-8 w-8 text-green-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            <span className="ml-2 text-green-700 font-medium">Loading...</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredKomoditas.map((item) => {
              const komoditasData = data[item.nama]?.[selectedDate];
              if (!komoditasData) return null;
              const price = getPrice(komoditasData);
              return (
                <FoodPriceGridCard
                  key={item.kode}
                  title={item.nama}
                  price={price}
                  imageSrc={`/images/commodity/${item.kode}.png`}
                  imageAlt={item.nama}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

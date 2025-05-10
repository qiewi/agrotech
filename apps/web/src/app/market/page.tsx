"use client";

import React, { useEffect, useState } from "react";
import FoodPriceCard from "@/components/pages/market/FoodPriceCard";
import CustomDatePicker from "@/components/pages/market/CustomDatePicker";
import { PROVINSI } from "@/lib/data/data-provinsi";
import { KOMODITAS } from "@/lib/data/data-komoditas";

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/pangan")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        const firstKomoditas = KOMODITAS.find((k) => json[k]);
        if (firstKomoditas) {
          const allDates = Object.keys(json[firstKomoditas]);
          if (allDates.length > 0) setSelectedDate(allDates[0]);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const availableDates =
    data && KOMODITAS.find((k) => data[k])
      ? Object.keys(data[KOMODITAS.find((k) => data[k])!])
      : [];

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
        {availableDates.length > 0 && (
          <CustomDatePicker
            availableDates={availableDates}
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        )}
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
          KOMODITAS.map((komoditas) => {
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
          })
        )}
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { Bell, MapPin } from "lucide-react";
import WeatherCard from "@/components/pages/home/WeatherCard";
import AiInsightCard from "@/components/pages/home/AiInsightCard";
import FieldCard from "@/components/pages/home/FieldCard";
import BottomNav from "@/components/layout/Navbar";
import { useEffect, useState, useRef } from "react";

// Mapping ID lahan ke nama dan gambar
const FIELD_MAPPER: Record<string, { name: string; imageUrl: string }> = {
  lahan_1: { name: "Jagung", imageUrl: "/images/lahan_jagung.jpg" },
  lahan_2: { name: "Tomat", imageUrl: "/images/lahan_tomat.jpg" },
  // lahan_3: { name: "Padi", imageUrl: "/images/lahan.webp" },
  // lahan_4: { name: "Cabai", imageUrl: "/images/lahan.webp" },
  // Tambahkan sesuai kebutuhan
};

type SensorData = {
  temperature?: number;
  humidity?: number;
};

type AllSensorData = {
  [id: string]: SensorData;
};

export default function Home() {
  const [allSensors, setAllSensors] = useState<AllSensorData>({});
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch("http://192.168.31.235:8000/sensor");
        if (!res.ok) throw new Error("Gagal fetch data sensor");
        const data: AllSensorData = await res.json();
        if (isMounted) setAllSensors(data);
      } catch (err) {
        if (isMounted) setAllSensors({});
      }
    };

    fetchData();
    intervalRef.current = setInterval(fetchData, 5000);

    return () => {
      isMounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Gabungkan data sensor dengan mapping field
  const fields = Object.entries(FIELD_MAPPER).map(([id, meta]) => ({
    id,
    name: meta.name,
    imageUrl: meta.imageUrl,
    temperature:
      allSensors[id]?.temperature !== undefined
        ? allSensors[id]?.temperature
        : 0,
    humidity:
      allSensors[id]?.humidity !== undefined ? allSensors[id]?.humidity : 0,
  }));

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
      <div className="w-full flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-1 bg-gray-200 rounded-full px-3 py-1.5">
          <MapPin className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">
            Canggu, Bali
          </span>
        </div>
        <Link href="/notifications">
          <Bell className="w-5 h-5 text-gray-700" />
        </Link>
      </div>

      <div className="px-4 py-3">
        <WeatherCard
          temperature={24}
          condition={"Today is partly sunny day!"}
          humidity={77}
          precipitation={"< 0.01 in"}
          windSpeed={"6 mph/s"}
        />
      </div>

      <div className="px-4 py-3">
        <AiInsightCard />
      </div>

      <div className="px-4 py-3">
        <h2 className="text-xl font-bold mb-3">My Fields</h2>
        <div className="grid grid-cols-2 gap-3">
          {fields.map((field) => (
            <FieldCard
              key={field.id}
              name={field.name}
              temperature={field.temperature}
              humidity={field.humidity}
              imageUrl={field.imageUrl}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

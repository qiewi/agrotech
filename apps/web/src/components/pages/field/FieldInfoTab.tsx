import React from "react";
import Image from "next/image";
import AiInsightCard from "@/components/pages/home/AiInsightCard";
import { getStage } from "@/lib/data/data-care";

export function getFieldDay(dateCreated?: string | Date): number {
  if (!dateCreated) return 1; // jika tidak ada, anggap hari ini = 1
  const created = new Date(dateCreated);
  const now = new Date();

  // Set jam, menit, detik ke 0 agar hanya hitung hari
  created.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diffMs = now.getTime() - created.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return diffDays + 1; // Hari ke-1 = hari dibuat
}

type FieldInfoTabProps = {
  field: {
    field_id: number;
    field_name: string;
    image_url?: string;
    area_size?: number;
    location?: string;
    crop_type?: string;
    date_created?: Date;
  };
  sensor: {
    temperature?: number;
    humidity?: number;
    soil?:number;
    light?:number
  } | null;
};

export default function FieldInfoTab({ field, sensor }: FieldInfoTabProps) {
  const hariKe = field ? getFieldDay(field.date_created ?? "") : 100;
  const stage = getStage(field.crop_type ?? "Tomato", hariKe);
  const getFieldImage = () => {
    if (field.image_url) return field.image_url;
    if (field.crop_type) {
      return `/images/field/${field.crop_type.toLowerCase()}-field.jpg`;
    }
    return "/images/field/default-field.jpg";
  };

  return (
    <div className="h-full overflow-y-auto flex flex-col bg-gray-100 -mx-4 mb-16">
      {/* Field Image Container */}
      <div className="relative h-48">
        <div className="absolute inset-0 z-0">
          <img
            src={getFieldImage()}
            alt={field.field_name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/80" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative px-8 -mt-20">
        {/* Weather Card */}
        <div className="bg-white rounded-xl p-4 shadow-lg mb-4">
          <div className="mb-2">
            <p className="text-sm text-black">{field.location || "Bandung, Jawa Barat"}</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-black">Temp {sensor?.temperature ?? 25}°C</p>
              <p className="text-sm text-black">Humidity {sensor?.humidity ?? 76}%</p>
              <p className="text-sm text-black">Soil Mois {sensor?.soil ?? 30}°C</p>
              <p className="text-sm text-black">Light {sensor?.light ?? 20}°C</p>

            </div>
            <div className="w-15 h-15 mr-3">
              <Image 
                src="/emojis/sunny.png"
                alt="Sunny weather"
                width={80}
                height={80}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="h-px bg-gray-300 -mx-1" />
          <p className="mt-2 text-sm text-black">Today is a good day to apply pesticides.</p>
        </div>

        {/* AI Insight Card */}
        <div className="mb-4">
          <AiInsightCard />
        </div>

        {/* Field Statistics */}
        <div className="bg-white rounded-xl shadow-lg mb-4">
          <div className="grid grid-cols-3">
            <div className="py-4 px-3 text-center relative">
              <p className="text-lg font-bold mb-0.5">
                {field.area_size ?? 10}
              </p>
              <p className="text-xs text-gray-500">Hectares</p>
              <div className="absolute right-0 top-3 bottom-3 w-px bg-gray-300" />
            </div>
            <div className="py-4 px-3 text-center relative">
              <p className="text-lg font-bold mb-0.5">
                {hariKe ?? 100}
              </p>
              <p className="text-xs text-gray-500">Days</p>
              <div className="absolute right-0 top-3 bottom-3 w-px bg-gray-300" />
            </div>
            <div className="py-4 px-3 text-center">
              <p className="text-lg font-bold mb-0.5">
                {stage?.stage ?? "Nursery"}
              </p>
              <p className="text-xs text-gray-500">{stage?.stage ?? "Nursery"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
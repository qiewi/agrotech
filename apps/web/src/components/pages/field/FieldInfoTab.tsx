import React from "react";
import Image from "next/image";
import AiInsightCard from "@/components/pages/home/AiInsightCard";

type FieldInfoTabProps = {
  field: {
    field_name: string;
    image_url?: string;
    area_size?: number;
    days?: number;
    stage?: string;
    location?: string;
    crop_type?: string;
  };
  sensor: {
    temperature?: number;
    humidity?: number;
  } | null;
};

export default function FieldInfoTab({ field, sensor }: FieldInfoTabProps) {
  const getWeatherCondition = () => {
    return "Sunny";
  };

  const getFieldImage = () => {
    if (field.image_url) return field.image_url;
    if (field.crop_type) {
      return `/images/field/${field.crop_type.toLowerCase()}-field.jpg`;
    }
    return "/images/field/default-field.jpg";
  };

  return (
    <div className="-mx-6">
      {/* Field Image Container */}
      <div className="relative mb-24">
        <div className="h-48">
          <img
            src={getFieldImage()}
            alt={field.field_name}
            className="w-full h-full object-cover"
          />
          <button className="absolute top-4 right-4 text-sm bg-white text-greenish rounded-sm px-5 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-shadow duration-200">
            Edit
          </button>
        </div>

        {/* Weather Card */}
        <div className="absolute -bottom-20 left-4 right-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="mb-2">
              <p className="text-sm text-black">{field.location || "Bandung, Jawa Barat"}</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-4xl font-bold mb-1">{sensor?.temperature ?? 25}°C</p>
                <p className="text-sm text-black">Humidity {sensor?.humidity ?? 76}%</p>
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
        </div>
      </div>

      {/* Content wrapper to restore padding */}
      <div className="px-4">
        {/* AI Insight Card */}
        <div className="mb-4">
          <AiInsightCard />
        </div>

        {/* Field Statistics */}
        <div className="bg-white rounded-xl shadow-sm">
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
                {field.days ?? 100}
              </p>
              <p className="text-xs text-gray-500">Days</p>
              <div className="absolute right-0 top-3 bottom-3 w-px bg-gray-300" />
            </div>
            <div className="py-4 px-3 text-center">
              <p className="text-lg font-bold mb-0.5">
                {field.stage ?? "Nursery"}
              </p>
              <p className="text-xs text-gray-500">Nurture Phase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
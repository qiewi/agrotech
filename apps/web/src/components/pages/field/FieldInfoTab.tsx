import React from "react";
import Image from "next/image";
import AiInsightCard from "@/components/pages/home/AiInsightCard";

type FieldInfoTabProps = {
  field: {
    field_name: string;
    image_url?: string;
    area_size?: number;
    plants?: number;
    stage?: string;
  };
  sensor: {
    temperature?: number;
    humidity?: number;
  } | null;
};

export default function FieldInfoTab({ field, sensor }: FieldInfoTabProps) {
  return (
    <div className="py-4">
      <div className="rounded-xl overflow-hidden mb-6">
        <img
          src={field.image_url || "/placeholder.svg"}
          alt={field.field_name}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-2">☀️</span>
          <div>
            <p className="text-2xl font-bold">
              {sensor?.temperature ?? "--"}°C
            </p>
            <p className="text-gray-500 text-sm">
              Humidity {sensor?.humidity ?? "--"}%
            </p>
          </div>
        </div>
        <p className="text-gray-600">
          Today is a good day to apply pesticides.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold">
            {field.area_size ?? "--"}
          </p>
          <p className="text-gray-500 text-xs">Hectares</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold">
            {field.plants ?? "--"}
          </p>
          <p className="text-gray-500 text-xs">Plants</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold">
            {field.stage ?? "--"}
          </p>
          <p className="text-gray-500 text-xs">Growth Stage</p>
        </div>
      </div>

      <AiInsightCard />
    </div>
  );
} 
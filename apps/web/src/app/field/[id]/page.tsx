"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import FertilizationCalculator from "@/components/pages/field/FieldFertilizationTab";
import { careStages } from "@/lib/data/data-care";
import { fertilizationSchedule } from "@/lib/data/data-fertilization";
import Image from "next/image";
import FieldInfoTab from "@/components/pages/field/FieldInfoTab";
import FieldCareTab from "@/components/pages/field/FieldCareTab";

// Add material icons in head
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

function getCropEmoji(cropType: string) {
    const crops = [
        { id: "Tomato", image: "/emojis/tomato.png" },
        { id: "Eggplant", image: "/emojis/eggplant.png" },
        { id: "Corn", image: "/emojis/corn.png" },
        { id: "Potato", image: "/emojis/potato.png" },
        { id: "Chili", image: "/emojis/redchilli.png" },
        { id: "Bellpepper", image: "/emojis/bellpepper.png" },
        { id: "Cucumber", image: "/emojis/cucumber.png" },
        { id: "Ginger", image: "/emojis/ginger.png" },
        { id: "Broccoli", image: "/emojis/broccoli.png" },
        { id: "Peas", image: "/emojis/peas.png" },
        { id: "Lettuce", image: "/emojis/lettuce.png" },
        { id: "Beans", image: "/emojis/beans.png" },
    ];
    const crop = crops.find((c) => c.id === cropType);
    return crop ? crop.image : "/emojis/seedling.png";
}

type Field = {
    field_id: number;
    field_code?: string;
    field_name: string;
    image_url?: string;
    location: string;
    crop_type?: string;
    area_size?: number;
    plants?: number;
    stage?: string;
};

type SensorData = {
  temperature?: number;
  humidity?: number;
};

type AllSensorData = {
  [id: string]: SensorData;
};

export default function FieldDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = useState("info");
  const [field, setField] = useState<Field | null>(null);
  const [sensor, setSensor] = useState<SensorData | null>(null);

  // Fetch field data from DB
  useEffect(() => {
    fetch(`/api/fields/${id}`)
      .then((res) => res.json())
      .then((data) => setField(data.field));
  }, [id]);

  // Fetch sensor data from FastAPI
  useEffect(() => {
    if (!field?.field_code) return;
    fetch(`http://0.0.0.0:8000/sensor/${field.field_code}`)
      .then((res) => res.json())
      .then((data) => setSensor(data));
  }, [field?.field_code]);

  // Get care & fertilization data based on crop_type
  const cropType = field?.crop_type || "Tomato";
  const careData = careStages[cropType] || [];
  const fertData = fertilizationSchedule[cropType] || [];

  if (!field) return <div className="p-6">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/home" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-gray-800" />
          </Link>
          <h1 className="text-xl font-medium">{field.field_name}</h1>
        </div>
        {/* <Link
          href={`/change-crop/${field.field_id}`}
          className="bg-green-700 text-white px-3 py-1 rounded-md text-sm"
        >
          Change Crop
        </Link> */}
      </header>

      {/* Crop Info */}
      <div className="px-6 mb-4 flex items-center">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
            <Image 
              src={getCropEmoji(field.crop_type || "")}
              alt={field.crop_type || "Crop"}
              width={24}
              height={24}
              className="w-6 h-6"
            />
        </div>
        <span className="font-medium">{field.crop_type}</span>
      </div>

      {/* Tabs */}
      <div className="px-6 border-b border-gray-200">
        <div className="flex justify-between">
          <button
            onClick={() => setActiveTab("info")}
            className={`py-3 px-4 font-small ${
              activeTab === "info"
                ? "text-green-700 border-b-2 border-green-700 font-bold"
                : "text-gray-500"
            }`}
          >
            Crop Info
          </button>
          <button
            onClick={() => setActiveTab("care")}
            className={`py-3 px-4 font-small ${
              activeTab === "care"
                ? "text-green-700 border-b-2 border-green-700 font-bold"
                : "text-gray-500"
            }`}
          >
            Crop Care
          </button>
          <button
            onClick={() => setActiveTab("fertilization")}
            className={`py-3 px-4 font-small ${
              activeTab === "fertilization"
                ? "text-green-700 border-b-2 border-green-700 font-bold"
                : "text-gray-500"
            }`}
          >
            Fertilization
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-24">
        {activeTab === "info" && (
          <FieldInfoTab field={field} sensor={sensor} />
        )}

        {activeTab === "care" && (
          <FieldCareTab careData={careData} />
        )}

        {activeTab === "fertilization" && (
          <FertilizationCalculator onClose={() => setActiveTab("info")}/>
        )}
      </main>
    </div>
  );
}

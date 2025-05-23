"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageSquare } from "lucide-react";
import FertilizationCalculator from "@/components/pages/field/fertilization-calculator";
import { careStages } from "@/lib/data/data-care";
import { fertilizationSchedule } from "@/lib/data/data-fertilization";

function getCropEmoji(cropType: string) {
    const crops = [
        { id: "Tomato", emoji: "🍅" },
        { id: "Eggplant", emoji: "🍆" },
        { id: "Corn", emoji: "🌽" },
        { id: "Potato", emoji: "🥔" },
        { id: "Chili", emoji: "🌶️" },
        { id: "Bellpepper", emoji: "🫑" },
        { id: "Cucumber", emoji: "🥒" },
        { id: "Ginger", emoji: "🫚" },
        { id: "Broccoli", emoji: "🥦" },
        { id: "Peas", emoji: "🫛" },
        { id: "Lettuce", emoji: "🥬" },
        { id: "Beans", emoji: "🫘" },
    ];
    const crop = crops.find((c) => c.id === cropType);
    return crop ? crop.emoji : "";
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
  const [showFertilizerModal, setShowFertilizerModal] = useState(false);
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
    fetch(`http://192.168.1.17:8000/sensor/${field.field_code}`)
      .then((res) => res.json())
      .then((data) => setSensor(data));
  }, [field?.field_code]);

  // Ambil data care & fertilization sesuai crop_type
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
            <span className="text-2xl">{getCropEmoji(field.crop_type || "") || "🌱"}</span>
        </div>
        <span className="font-medium">{field.crop_type}</span>
      </div>

      {/* Tabs */}
      <div className="px-6 border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab("info")}
            className={`py-3 px-4 font-small ${
              activeTab === "info"
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-500"
            }`}
          >
            Crop Info
          </button>
          <button
            onClick={() => setActiveTab("care")}
            className={`py-3 px-4 font-small ${
              activeTab === "care"
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-500"
            }`}
          >
            Crop Care
          </button>
          <button
            onClick={() => setActiveTab("fertilization")}
            className={`py-3 px-4 font-small ${
              activeTab === "fertilization"
                ? "text-green-700 border-b-2 border-green-700"
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
                {/* Bisa tambahkan insight dari AI atau rules */}
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

            <div className="bg-green-700 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-3">
                    <MessageSquare className="h-5 w-5 text-green-700" />
                  </div>
                  <p className="text-white">
                    Talk to our AI and get insights on your field
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "care" && (
          <div className="py-4">
            {careData.length === 0 && (
              <div className="text-gray-400 text-center py-8">
                No care data for this crop.
              </div>
            )}
            {careData.map((stage) => (
              <div key={stage.stage} className="mb-6">
                <div
                  className={`${
                    stage.stage === "Pre Nursery"
                      ? "bg-green-700 text-white"
                      : "bg-green-100 text-green-800"
                  } p-4 rounded-t-xl`}
                >
                  <h2 className="font-medium">{stage.stage}</h2>
                </div>
                <div className="bg-gray-50 p-4 rounded-b-xl">
                  <p className="text-sm text-gray-600 mb-4">
                    {stage.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {stage.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-xl text-center"
                      >
                        <div className="bg-gray-100 rounded-full p-2 mx-auto mb-2 w-12 h-12 flex items-center justify-center">
                          <span>{step.icon}</span>
                        </div>
                        <p className="text-xs text-gray-600">{step.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "fertilization" && (
          <div className="py-4">
            <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
              <h2 className="text-lg font-medium mb-4">
                Fertilizer Calculator
              </h2>
              <button
                onClick={() => setShowFertilizerModal(true)}
                className="w-full py-3 bg-green-700 text-white rounded-lg font-medium"
              >
                Calculate Fertilizer Needs
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-medium mb-3">
                Recommended Fertilization Schedule
              </h3>
              <div className="space-y-3">
                {fertData.length === 0 && (
                  <div className="text-gray-400 text-center py-8">
                    No fertilization data for this crop.
                  </div>
                )}
                {fertData.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{item.stage}</span>
                      <span className="text-green-700">{item.amount}</span>
                    </div>
                    <p className="text-xs text-gray-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Fertilizer Calculator Modal */}
      {showFertilizerModal && (
        <FertilizationCalculator
          onClose={() => setShowFertilizerModal(false)}
        />
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

const crops = [
  { id: "tomato", name: "Tomato", emoji: "🍅" },
  { id: "eggplant", name: "Eggplant", emoji: "🍆" },
  { id: "corn", name: "Corn", emoji: "🌽" },
  { id: "potato", name: "Potato", emoji: "🥔" },
  { id: "chili", name: "Red Chilli", emoji: "🌶️" },
  { id: "bellpepper", name: "Bell Pepper", emoji: "🫑" },
  { id: "cucumber", name: "Cucumber", emoji: "🥒" },
  { id: "ginger", name: "Ginger", emoji: "🫚" },
  { id: "broccoli", name: "Broccoli", emoji: "🥦" },
  { id: "peas", name: "Peas", emoji: "🫛" },
  { id: "lettuce", name: "Lettuce", emoji: "🥬" },
  { id: "beans", name: "Beans", emoji: "🫘" },
];

interface CropTypePickerModalProps {
  value: string;
  onClose: () => void;
  onSelect: (cropId: string) => void;
}

export default function CropTypePickerModal({
  value,
  onClose,
  onSelect,
}: CropTypePickerModalProps) {
  const [selected, setSelected] = useState(value);

  return (  
      <div className="fixed inset-0 z-50 bg-transparent bg-opacity-20 flex flex-col">
        <div className="flex-1 flex flex-col bg-white rounded-none overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-800" />
          </button>
          <h1 className="text-xl font-medium">Change Crop</h1>
          <button
            onClick={() => {
              onSelect(selected);
              onClose();
            }}
            className="bg-green-700 text-white w-9 h-9 rounded-full flex items-center justify-center"
          >
            <Check className="h-6 w-6" />
          </button>
        </div>
        <h2 className="text-green-700 font-semibold mb-4 text-center">Your Crops</h2>
        <div className="flex-1 px-6 pb-6">
        <div className="grid grid-cols-3 gap-4">
          {crops.map((crop) => (
            <button
              key={crop.id}
              type="button"
              onClick={() => setSelected(crop.id)}
              className={`bg-white border transition rounded-xl p-3 flex flex-col items-center ${
                selected === crop.id
                  ? "border-green-700 ring-2 ring-green-100 shadow"
                  : "border-gray-200"
              }`}
            >
              <span className="text-3xl mb-1">{crop.emoji}</span>
              <span className="text-sm font-medium">{crop.name}</span>
            </button>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

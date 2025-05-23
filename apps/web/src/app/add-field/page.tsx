"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Camera, UploadCloud } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import CropTypePicker from "@/components/pages/home/CropTypePicker"; // Pastikan path sesuai


export default function AddFieldPage() {
  const [fieldName, setFieldName] = useState("");
  const [fieldCode, setFieldCode] = useState("");
  const [location, setLocation] = useState("");
  const [fieldSize, setFieldSize] = useState("");
  const [cropType, setCropType] = useState("Tomato");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showCropPicker, setShowCropPicker] = useState(false);

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

const selectedCrop = crops.find((c) => c.id === cropType);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in to add a field.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/fields", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.user_id,
        field_name: fieldName,
        location,
        crop_type: cropType,
        area_size: fieldSize,
        field_code: fieldCode,
        // image_url: image ? URL.createObjectURL(image) : null, // jika ingin upload gambar ke server
        // image_url: ... (jika sudah upload ke storage)
      }),
    });

      if (!res.ok) throw new Error("Failed to add field");
      setSuccess(true);
      setFieldName("");
      setFieldCode("");
      setLocation("");
      setFieldSize("");
      setImage(null);
      setImagePreview(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <header className="p-6 flex items-center">
          <Link href="/home" className="mr-4">
            <ArrowLeft className="h-6 w-6 text-gray-800" />
          </Link>
          <h1 className="text-xl font-medium">New Field</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 pb-24">
          {/* Upload Image */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="bg-gray-100 rounded-xl w-32 h-32 flex flex-col justify-center items-center cursor-pointer mb-3 border-2 border-dashed border-gray-300"
              onClick={handleImageClick}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <>
                  <UploadCloud className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-gray-500 text-xs">Upload field image</p>
                </>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* Crop Type Section */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">{selectedCrop?.emoji || "🌱"}</span>
            <span className="font-semibold text-lg">{selectedCrop?.name || "Select Crop"}</span>
            <button
              type="button"
              className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium shadow"
              onClick={() => setShowCropPicker(true)}
            >
              Change Crop
            </button>
          </div>

          {/* Modal Crop Picker */}
          {showCropPicker && (
            <CropTypePicker
              value={cropType}
              onClose={() => setShowCropPicker(false)}
              onSelect={setCropType}
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fieldName" className="block text-gray-700 font-medium mb-1">
                Field Name
              </label>
              <input
                type="text"
                id="fieldName"
                value={fieldName}
                onChange={(e) => setFieldName(e.target.value)}
                placeholder="Jagung Field"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label htmlFor="fieldCode" className="block text-gray-700 font-medium mb-1">
                Field Code
              </label>
              <input
                type="text"
                id="fieldCode"
                value={fieldCode}
                onChange={(e) => setFieldCode(e.target.value)}
                placeholder="F001"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            

            <div>
              <label htmlFor="location" className="block text-gray-700 font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Bandung"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label htmlFor="fieldSize" className="block text-gray-700 font-medium mb-1">
                Field Size (Hectares)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="fieldSize"
                  value={fieldSize}
                  onChange={(e) => setFieldSize(e.target.value)}
                  placeholder="10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 pr-12"
                  required
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">ha</span>
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Field added successfully!</p>}

            <button
              type="submit"
              className="w-full py-4 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors text-lg flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Adding..." : (
                <>
                  <span className="text-xl">+</span> Add Field
                </>
              )}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}

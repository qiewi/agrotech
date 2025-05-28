"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Camera, UploadCloud } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import CropTypePicker from "@/components/pages/home/CropTypePicker";
import Image from "next/image";


export default function AddFieldPage() {
  const [fieldName, setFieldName] = useState("");
  const [location, setLocation] = useState("");
  const [fieldSize, setFieldSize] = useState("");
  const [cropType, setCropType] = useState("Tomato");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState({
    fieldName: false,
    location: false,
    fieldSize: false,
    image: false,
    cropType: false,
  });
  const { user } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showCropPicker, setShowCropPicker] = useState(false);

  const crops = [
    { id: "Tomato", name: "Tomato", image: "/emojis/tomato.png" },
    { id: "Eggplant", name: "Eggplant", image: "/emojis/eggplant.png" },
    { id: "Corn", name: "Corn", image: "/emojis/corn.png" },
    { id: "Potato", name: "Potato", image: "/emojis/potato.png" },
    { id: "Chili", name: "Red Chilli", image: "/emojis/redchilli.png" },
    { id: "Bellpepper", name: "Bell Pepper", image: "/emojis/bellpepper.png" },
    { id: "Cucumber", name: "Cucumber", image: "/emojis/cucumber.png" },
    { id: "Ginger", name: "Ginger", image: "/emojis/ginger.png" },
    { id: "Broccoli", name: "Broccoli", image: "/emojis/broccoli.png" },
    { id: "Peas", name: "Peas", image: "/emojis/peas.png" },
    { id: "Lettuce", name: "Lettuce", image: "/emojis/lettuce.png" },
    { id: "Beans", name: "Beans", image: "/emojis/beans.png" },
  ];

  const selectedCrop = crops.find((c) => c.id === cropType);

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!image) errors.push("Please upload a field image");
    if (!cropType) errors.push("Please select a crop type");
    if (!fieldName.trim()) errors.push("Field name is required");
    if (!location.trim()) errors.push("Location is required");
    if (!fieldSize) errors.push("Field size is required");

    return errors;
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setTouched(prev => ({ ...prev, image: true }));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fieldName: true,
      location: true,
      fieldSize: true,
      image: true,
      cropType: true,
    });

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join(", "));
      return;
    }

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
        }),
      });

      if (!res.ok) throw new Error("Failed to add field");
      setSuccess(true);
      // Reset form
      setFieldName("");
      setLocation("");
      setFieldSize("");
      setCropType("Tomato");
      setImage(null);
      setImagePreview(null);
      setTouched({
        fieldName: false,
        location: false,
        fieldSize: false,
        image: false,
        cropType: false,
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to show error state
  const showError = (field: keyof typeof touched) => {
    return touched[field] && (
      field === 'fieldName' && !fieldName.trim() ||
      field === 'location' && !location.trim() ||
      field === 'fieldSize' && !fieldSize ||
      field === 'image' && !image ||
      field === 'cropType' && !cropType
    );
  };

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <header className="p-6 flex items-center relative">
          <Link href="/home" className="absolute left-6">
            <ArrowLeft className="h-6 w-6 text-gray-800" />
          </Link>
          <h1 className="text-xl font-medium w-full text-center">New Field</h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 pb-6">
          {/* Upload Image */}
          <div 
            className={`w-full bg-gray-100 rounded-lg mb-6 overflow-hidden ${showError('image') ? 'ring-2 ring-red-500' : ''}`}
            onClick={handleImageClick}
          >
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="Field preview" 
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="p-5">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-full bg-white flex items-center justify-center cursor-pointer mb-2 border ${showError('image') ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <UploadCloud className={`h-6 w-6 ${showError('image') ? 'text-red-500' : 'text-gray-600'}`} />
                  </div>
                  <p className={`text-sm ${showError('image') ? 'text-red-500' : 'text-gray-600'} mb-2`}>
                    {showError('image') ? 'Image is required' : 'Upload field image'}
                  </p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                    >
                      Take Photo
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            )}
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
          <div className={`flex items-center gap-3 mb-8 ${showError('cropType') ? 'ring-2 ring-red-500 rounded-lg p-2' : ''}`}>
            {selectedCrop?.image ? (
              <div className="w-8 h-8 relative">
                <Image
                  src={selectedCrop.image}
                  alt={selectedCrop.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="text-2xl">🌱</span>
            )}
            <span className={`font-semibold text-lg ${!cropType && touched.cropType ? 'text-red-500' : ''}`}>
              {selectedCrop?.name || "Select Crop"}
            </span>
            <button
              type="button"
              className={`ml-auto px-4 py-2 ${showError('cropType') ? 'bg-red-100 text-red-500' : 'bg-greenish text-white'} rounded-lg text-sm font-medium shadow`}
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
                onBlur={() => handleBlur('fieldName')}
                placeholder="Jagung Field"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  showError('fieldName') 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-green-600'
                }`}
                required
              />
              {showError('fieldName') && (
                <p className="text-red-500 text-sm mt-1">Field name is required</p>
              )}
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
                onBlur={() => handleBlur('location')}
                placeholder="Bandung"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  showError('location') 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:ring-green-600'
                }`}
                required
              />
              {showError('location') && (
                <p className="text-red-500 text-sm mt-1">Location is required</p>
              )}
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
                  onBlur={() => handleBlur('fieldSize')}
                  placeholder="10"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 pr-12 ${
                    showError('fieldSize') 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-green-600'
                  }`}
                  required
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">ha</span>
              </div>
              {showError('fieldSize') && (
                <p className="text-red-500 text-sm mt-1">Field size is required</p>
              )}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">Field added successfully!</p>}

            <button
              type="submit"
              className="w-full py-4 bg-greenish text-white rounded-lg font-medium hover:bg-green-800 transition-colors text-lg flex items-center justify-center gap-2"
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

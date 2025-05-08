"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function UploadSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // Create a URL for the selected image
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)

      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false)
      }, 1500)
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      {selectedImage ? (
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full h-64 mb-4">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Uploaded plant image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <Button
            variant="outline"
            className="bg-greenish text-white hover:bg-green-800"
            onClick={() => setSelectedImage(null)}
          >
            Upload Another Image
          </Button>
          {/* Here you would add the diagnosis results */}
        </div>
      ) : (
        <Button
          className="bg-greenish hover:bg-green-800 text-white w-full max-w-[200px] lg:max-w-full flex items-center gap-2 py-8 shadow-lg rounded-xl"
          onClick={() => document.getElementById("image-upload")?.click()}
          disabled={isUploading}
        >
          <ArrowUp className="h-5 w-5" />
          {isUploading ? "Uploading..." : "Unggah Gambar"}
        </Button>
      )}
      <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
    </div>
  )
}

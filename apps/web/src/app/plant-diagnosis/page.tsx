"use client"

import { useState, useRef, useEffect } from "react"
import { Camera, UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { predictPlantDisease } from "@/app/api/plant-diagnose"
import { mapDiagnosisLabel } from "@/lib/data/diagnosis-mapper"
import { DiagnosisDetails, DiagnosisResult } from "@/components/pages/plant-diagnosis/DiagnosisDetails"
import { IdentifyingPage } from "@/components/pages/plant-diagnosis/IdentifyingPage"
import Image from "next/image"

import { diagnosisData } from "@/lib/data/data-diagnosis"

export const cropDiseases = [
  {
    key: "tomato_late_blight",
    name: diagnosisData.tomato_late_blight.diseaseName,
    img: diagnosisData.tomato_late_blight.imageUrl,
  },
  {
    key: "peach_bacterial_spot",
    name: diagnosisData.peach_bacterial_spot.diseaseName,
    img: diagnosisData.peach_bacterial_spot.imageUrl,
  },
  {
    key: "squash_powdery_mildew",
    name: diagnosisData.squash_powdery_mildew.diseaseName,
    img: diagnosisData.squash_powdery_mildew.imageUrl,
  },
  {
    key: "apple_apple_scab",
    name: diagnosisData.apple_apple_scab.diseaseName,
    img: diagnosisData.apple_apple_scab.imageUrl,
  },
  {
    key: "grape_black_rot",
    name: diagnosisData.grape_black_rot.diseaseName,
    img: diagnosisData.grape_black_rot.imageUrl,
  },
]


export default function PlantDiagnosisPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isIdentifying, setIsIdentifying] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)
  const [scanPosition, setScanPosition] = useState(0)
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const scanRef = useRef<NodeJS.Timeout | null>(null)
  const scanDirection = useRef(1)

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        setSelectedImage(dataUrl)
        setError(null)
        setTimeout(() => {
          setIsUploading(false)
          setIsIdentifying(true)
          startScanAnimation()
          simulateIdentification(file, dataUrl)
        }, 1000)
      }
      reader.readAsDataURL(file)
    }
  }

  // Scan animation
  const startScanAnimation = () => {
    setScanPosition(20)
    scanRef.current = setInterval(() => {
      setScanPosition((prev) => {
        if (prev >= 60) scanDirection.current = -1
        if (prev <= 20) scanDirection.current = 1
        return prev + scanDirection.current * 2
      })
    }, 100)
  }

  // Simulate identification
  const simulateIdentification = async (file: File, imageDataUrl: string) => {
    setProgress(0)
    let localProgress = 0
    const interval = setInterval(() => {
      localProgress += 2
      setProgress(localProgress)
      if (localProgress >= 100) clearInterval(interval)
    }, 200)

    try {
      const res = await predictPlantDisease(file)
      let result = mapDiagnosisLabel(res.class)
      result = {
        ...result,
        imageUrl: imageDataUrl,
        confidence: res.confidence,
      }
      setTimeout(() => {
        if (scanRef.current) clearInterval(scanRef.current)
        setIsIdentifying(false)
        setDiagnosisResult(result)
        setShowResults(true)
      }, 500)
    } catch (err: any) {
      setError("Gagal melakukan diagnosis. Coba lagi.")
      setIsIdentifying(false)
      if (scanRef.current) clearInterval(scanRef.current)
    }
  }

  // Reset all state
  const resetAll = () => {
    setSelectedImage(null)
    setIsIdentifying(false)
    setShowResults(false)
    setProgress(0)
    setDiagnosisResult(null)
    setError(null)
    if (scanRef.current) clearInterval(scanRef.current)
  }

  useEffect(() => {
    return () => {
      if (scanRef.current) clearInterval(scanRef.current)
    }
  }, [])

  // Render
  if (isIdentifying && selectedImage) {
    return (
      <IdentifyingPage
        imageUrl={selectedImage}
        progress={progress}
        scanPosition={scanPosition}
      />
    )
  }

  if (showResults && diagnosisResult) {
    return (
      <DiagnosisDetails result={diagnosisResult} onBack={resetAll} />
    )
  }

  // Default: Upload page (redesigned)
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#F8FAF9] pb-8">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 pt-6 pb-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Agrotech" width={36} height={36} />
          <span className="text-green-700 font-bold text-2xl">Agrotech</span>
        </div>
        <div className="bg-gray-100 px-4 py-1 rounded-full text-gray-600 text-sm font-medium">
          Jatinangor
        </div>
      </div>

      {/* Crop Disease Section */}
      <div className="w-full px-4 mt-2">
        <h2 className="font-bold text-lg">Crop Disease</h2>
        <p className="text-gray-500 text-sm mb-2">Explore diseases that crops may suffer</p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {cropDiseases.map((disease) => (
            <div
              key={disease.name}
              className="min-w-[120px] bg-white rounded-xl shadow flex flex-col items-center"
            >
              <Image
                src={disease.img ?? "/placeholder.png"}
                alt={disease.name}
                width={120}
                height={80}
                className="object-cover rounded-t-xl"
              />
              <span className="text-xs font-medium py-2">{disease.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Check Your Crop Section */}
      <div className="w-full px-4 mt-6">
        <h2 className="font-bold text-lg">Check Your Crop</h2>
        <p className="text-gray-500 text-sm mb-3">
          Diagnose your plant disease and the solution
        </p>
        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
          {/* Stepper */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
              <span className="text-xs mt-1 text-gray-600">Take a Picture</span>
            </div>
            <span className="text-2xl text-gray-400">{'>'}</span>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <span className="text-xs mt-1 text-gray-600">See Diagnosis</span>
            </div>
            <span className="text-2xl text-gray-400">{'>'}</span>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <span className="text-xs mt-1 text-gray-600">Get Solutions</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <Button
              className="bg-green-700 hover:bg-green-800 text-white w-full flex items-center gap-2 py-4 rounded-xl text-base font-semibold shadow"
              onClick={() => document.getElementById("image-upload")?.click()}
              disabled={isUploading}
            >
              <Camera className="h-5 w-5" />
              Take a Picture
            </Button>
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-white w-full flex items-center gap-2 py-4 rounded-xl text-base font-semibold shadow"
              onClick={() => document.getElementById("image-upload")?.click()}
              disabled={isUploading}
            >
              <UploadCloud className="h-5 w-5" />
              Upload Image
            </Button>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>
      </div>
    </div>
  )
}

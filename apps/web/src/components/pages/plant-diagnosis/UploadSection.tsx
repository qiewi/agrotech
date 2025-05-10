"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import type { DiagnosisResult } from "./DiagnosisDetails"
import { DiagnosisDetails } from "./DiagnosisDetails"
import { predictPlantDisease } from "@/lib/api/plant-diagnose"
import { mapDiagnosisLabel } from "@/lib/data/diagnosis-mapper"

interface UploadSectionProps {
  onResultsChange: (showResults: boolean) => void
}

export function UploadSection({ onResultsChange }: UploadSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isIdentifying, setIsIdentifying] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)
  const [scanPosition, setScanPosition] = useState(0)
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const scanRef = useRef<NodeJS.Timeout | null>(null)
  const scanDirection = useRef(1)

  useEffect(() => {
    onResultsChange(showResults)
  }, [showResults, onResultsChange])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      setSelectedFile(file)
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
      setError(null)

      setTimeout(() => {
        setIsUploading(false)
        setIsIdentifying(true)
        startScanAnimation()
        simulateIdentification(file)
      }, 1000)
    }
  }

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

  const simulateIdentification = async (file: File) => {
    setProgress(0)
    let localProgress = 0
    const interval = setInterval(() => {
      localProgress += 2
      setProgress(localProgress)
      if (localProgress >= 100) {
        clearInterval(interval)
      }
    }, 200)
  
    try {
      const res = await predictPlantDisease(file)
      // Gunakan mapper
      let result = mapDiagnosisLabel(res.class)
      result = {
        ...result,
        imageUrl: selectedImage || result.imageUrl,
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
  
  const resetUpload = () => {
    setSelectedImage(null)
    setSelectedFile(null)
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

  if (showResults && selectedImage && diagnosisResult) {
    return (
      <DiagnosisDetails result={diagnosisResult} onBack={resetUpload} />
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      {selectedImage && isIdentifying ? (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <div className="relative w-full h-full">
            <Image src={selectedImage || "/placeholder.svg"} alt="Uploaded plant image" fill className="object-cover" />
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white"></div>
            <div className="absolute bottom-24 left-4 w-8 h-8 border-b-2 border-l-2 border-white"></div>
            <div className="absolute bottom-24 right-4 w-8 h-8 border-b-2 border-r-2 border-white"></div>
            {/* Animated scanning overlay */}
            <div
              className="absolute left-0 right-0 h-24 bg-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out"
              style={{ top: `${scanPosition}%` }}
            ></div>
            {/* Progress indicator */}
            <div className="absolute bottom-12 left-0 right-0 px-6">
              <div className="bg-white rounded-xl p-4 mx-auto max-w-xs">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-black font-medium">Mengidentifikasi..</p>
                  <span className="text-black">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          </div>
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
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  )
}

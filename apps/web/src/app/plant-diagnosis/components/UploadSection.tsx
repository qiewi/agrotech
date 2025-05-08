"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ArrowUp, ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export interface DiagnosisResult {
    diseaseName: string
    category: string
    type: string
    solutions: {
      title: string
      description: string
    }[]
    imageUrl?: string
  }
  
// Placeholder diagnosis data
export const MOCK_DIAGNOSIS_RESULTS: DiagnosisResult = {
    diseaseName: "Karat Daun",
    category: "Penyakit Jamur",
    type: "Infeksi",
    solutions: [
      {
        title: "Pemangkasan Daun Terinfeksi",
        description:
          "Langkah pertama yang penting adalah memangkas daun-daun yang sudah terinfeksi. Daun yang terkena leaf rust sebaiknya segera dipotong dan dibuang agar jamur tidak menyebar ke bagian tanaman lainnya atau ke tanaman di sekitarnya. Pastikan alat pemangkas yang digunakan bersih dan disterilkan sebelum dan sesudah digunakan agar tidak menjadi media penyebaran penyakit.",
      },
      {
        title: "Aplikasi Fungisida",
        description:
          "Gunakan fungisida yang sesuai untuk mengendalikan penyakit karat daun. Aplikasikan sesuai petunjuk pada kemasan dan lakukan secara berkala untuk mencegah infeksi berulang.",
      },
    ],
}
  

interface UploadSectionProps {
  onResultsChange: (showResults: boolean) => void
}

export function UploadSection({ onResultsChange }: UploadSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isIdentifying, setIsIdentifying] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [progress, setProgress] = useState(0)
  const [scanPosition, setScanPosition] = useState(0)
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null)
  const scanRef = useRef<NodeJS.Timeout | null>(null)
  const scanDirection = useRef(1) // 1 for down, -1 for up

  // Update parent component when showResults changes
  useEffect(() => {
    onResultsChange(showResults)
  }, [showResults, onResultsChange])

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
        setIsIdentifying(true)
        simulateIdentification()
        startScanAnimation()
      }, 1000)
    }
  }

  const startScanAnimation = () => {
    setScanPosition(20) // Start position (from top)

    scanRef.current = setInterval(() => {
      setScanPosition((prev) => {
        // Change direction when reaching top or bottom
        if (prev >= 60) scanDirection.current = -1
        if (prev <= 20) scanDirection.current = 1

        return prev + scanDirection.current * 2
      })
    }, 100)
  }

  const simulateIdentification = () => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          // After identification is complete, show results
          setTimeout(() => {
            if (scanRef.current) clearInterval(scanRef.current)
            setIsIdentifying(false)

            // Use the mock diagnosis data and add the image URL
            const result = {
              ...MOCK_DIAGNOSIS_RESULTS,
              imageUrl: selectedImage || undefined,
            }
            setDiagnosisResult(result)
            setShowResults(true)
          }, 500)
          return 100
        }
        return prevProgress + 2
      })
    }, 200)
  }

  const resetUpload = () => {
    setSelectedImage(null)
    setIsIdentifying(false)
    setShowResults(false)
    setProgress(0)
    setDiagnosisResult(null)
    if (scanRef.current) clearInterval(scanRef.current)
  }

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (scanRef.current) clearInterval(scanRef.current)
    }
  }, [])

  if (showResults && selectedImage && diagnosisResult) {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg px-2">
          {/* Back button */}
          <div className="py-4">
            <Button
              variant="ghost"
              className="flex items-center text-black p-0 hover:bg-transparent"
              onClick={resetUpload}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Kembali</span>
            </Button>
          </div>

          {/* Plant image */}
          <div className="px-4">
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Diagnosed plant"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Diagnosis results */}
          <div className="p-4">
            <h2 className="text-3xl font-bold text-greenish mb-4">{diagnosisResult.diseaseName}</h2>

            <div className="flex justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm">Kategori:</p>
                <p className="font-medium">{diagnosisResult.category}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Tipe:</p>
                <p className="font-medium">{diagnosisResult.type}</p>
              </div>
            </div>

            <div className="mt-6 mb-2">
              <h3 className="text-2xl font-bold text-greenish flex items-center">
                Solusi <Lightbulb className="h-5 w-5 ml-2 text-yellow-400" />
              </h3>
            </div>

            {diagnosisResult.solutions.map((solution, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-bold mb-2">{solution.title}</h4>
                <p className="text-sm text-gray-700">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    </div>
  )
}

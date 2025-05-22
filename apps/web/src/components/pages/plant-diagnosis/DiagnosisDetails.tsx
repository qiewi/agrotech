"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export interface DiagnosisResult {
  diseaseName: string
  latinName?: string
  category: string
  type: string
  solutions: { title: string; description: string }[]
  imageUrl?: string
  confidence?: number
}

export function DiagnosisDetails({
  result,
  onBack,
}: {
  result: DiagnosisResult
  onBack: () => void
}) {
  return (
    <div className="w-full min-h-screen bg-[#F8FAF9] flex flex-col items-center">
      {/* Back & Title */}
      <div className="w-full flex items-center px-4 pt-6 pb-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white shadow mr-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="flex-1 text-center text-xl font-bold">Diagnosis</h1>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Image with overlay title */}
      <div className="w-full relative">
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
          {result.imageUrl && (result.imageUrl.startsWith('data:') || result.imageUrl.startsWith('blob:')) ? (
            <img
              src={result.imageUrl}
              alt="Diagnosed plant"
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={result.imageUrl || "/placeholder.svg"}
              alt="Diagnosed plant"
              fill
              className="object-cover"
            />
          )}
          {/* Overlay text */}
          <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
            <h2 className="text-2xl font-bold">{result.diseaseName}</h2>
            {result.latinName && (
              <p className="text-sm italic">{result.latinName}</p>
            )}
          </div>
        </div>
      </div>

      {/* Category & Type */}
      <div className="w-full flex justify-between px-6 mt-4 mb-2">
        <div>
          <p className="text-gray-500 text-xs font-medium">Category:</p>
          <p className="font-semibold text-sm">{result.category}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-medium">Type:</p>
          <p className="font-semibold text-sm">{result.type}</p>
        </div>
      </div>

      {/* How to Handle */}
      <div className="w-full px-4 mt-2">
        <div className="bg-[#F3F4F6] rounded-xl p-4">
          <h3 className="text-lg font-bold mb-3">How to Handle</h3>
          <ol className="list-decimal list-inside text-gray-700 text-sm space-y-2">
            {result.solutions.map((solution, idx) => (
              <li key={idx}>{solution.description}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Confidence (optional) */}
      {result.confidence !== undefined && (
        <div className="w-full px-4 mt-4">
          <div className="text-center text-xs text-gray-400">
            Confidence: {(result.confidence * 100).toFixed(2)}%
          </div>
        </div>
      )}
    </div>
  )
}

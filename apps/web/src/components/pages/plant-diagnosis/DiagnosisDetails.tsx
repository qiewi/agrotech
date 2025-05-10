"use client"

import { ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  confidence?: number
}

interface DiagnosisDetailsProps {
  result: DiagnosisResult
  onBack: () => void
}

export function DiagnosisDetails({ result, onBack }: DiagnosisDetailsProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg px-2">
        {/* Back button */}
        <div className="py-4">
          <Button
            variant="ghost"
            className="flex items-center text-black p-0 hover:bg-transparent"
            onClick={onBack}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Kembali</span>
          </Button>
        </div>

        {/* Plant image */}
        <div className="px-4">
          <div className="relative w-full h-48 rounded-xl overflow-hidden">
            <Image
              src={result.imageUrl || "/placeholder.svg"}
              alt="Diagnosed plant"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Diagnosis results */}
        <div className="p-4">
          <h2 className="text-3xl font-bold text-greenish mb-4">{result.diseaseName}</h2>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">Kategori:</p>
              <p className="font-medium">{result.category}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Tipe:</p>
              <p className="font-medium">{result.type}</p>
            </div>
          </div>
          <div className="mt-6 mb-2">
            <h3 className="text-2xl font-bold text-greenish flex items-center">
              Solusi <Lightbulb className="h-5 w-5 ml-2 text-yellow-400" />
            </h3>
          </div>
          {result.solutions.map((solution, index) => (
            <div key={index} className="mb-6">
              <h4 className="font-bold mb-2">{solution.title}</h4>
              <p className="text-sm text-gray-700">{solution.description}</p>
            </div>
          ))}
          {result.confidence !== undefined && (
            <div className="mt-4 text-sm text-gray-500">
              Confidence: {(result.confidence * 100).toFixed(2)}%
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

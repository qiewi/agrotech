// data/diagnosisMapper.ts

import { diagnosisData } from "./data-diagnosis"
import type { DiagnosisResult } from "@/components/pages/plant-diagnosis/DiagnosisDetails"

export function mapDiagnosisLabel(label: string): DiagnosisResult {
  return (
    diagnosisData[label] || {
      diseaseName: label,
      category: "Unknown",
      type: "Unknown",
      solutions: [
        {
          title: "Belum ada solusi otomatis",
          description: "Silakan konsultasi dengan ahli pertanian atau cek referensi penyakit tanaman."
        }
      ]
    }
  )
}

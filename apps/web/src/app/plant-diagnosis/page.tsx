import { DiagnosisContainer } from "@/components/pages/plant-diagnosis/DiagnosisContainer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diagnosis Tumbuhan | Agrotech",
  description: "Diagnosa cepat dan akurat untuk tanamanmu, langsung dari Agrotech!",
}

export default function PlantDiagnosisPage() {
  return <DiagnosisContainer />
}

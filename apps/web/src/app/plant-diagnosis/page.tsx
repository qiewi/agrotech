import { UploadSection } from "./components/UploadSection"

export default function PlantDiagnosisPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 pt-12 pb-24">
      <div className="flex flex-col w-full text-center items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-regular mb-2">Diagnosis</h1>
        <h2 className="text-5xl md:text-6xl font-bold text-greenish mb-4">Tumbuhan</h2>
        <p className="text-center text-sm max-w-[200px] mx-auto">
          Diagnosa <span className="font-bold">cepat dan akurat</span> untuk tanamanmu, langsung dari Agrotech!
        </p>
      </div>

      <div className="w-full mt-8">
        <UploadSection />
      </div>
    </div>
  )
}

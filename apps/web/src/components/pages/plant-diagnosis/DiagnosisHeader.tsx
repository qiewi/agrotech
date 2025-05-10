"use client"

interface DiagnosisHeaderProps {
  showResults: boolean
}

export function DiagnosisHeader({ showResults }: DiagnosisHeaderProps) {
  if (showResults) return null

  return (
    <div className="flex flex-col w-full text-center items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-regular mb-2">Diagnosis</h1>
      <h2 className="text-5xl md:text-6xl font-bold text-greenish mb-4">Tumbuhan</h2>
      <p className="text-center text-sm max-w-[200px] mx-auto">
        Diagnosa <span className="font-bold">cepat dan akurat</span> untuk tanamanmu, langsung dari Agrotech!
      </p>
    </div>
  )
}

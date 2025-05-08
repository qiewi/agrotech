"use client"

import { useState } from "react"
import { UploadSection } from "./UploadSection"
import { DiagnosisHeader } from "./DiagnosisHeader"

export function DiagnosisContainer() {
  const [showResults, setShowResults] = useState(false)

  const handleResultsChange = (isShowingResults: boolean) => {
    setShowResults(isShowingResults)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 pt-12 pb-24">
      <DiagnosisHeader showResults={showResults} />
      <div className={`w-full ${!showResults ? "mt-8" : "mt-0"}`}>
        <UploadSection onResultsChange={handleResultsChange} />
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"
import Image from "next/image"

type NPKValues = {
  N: number
  P: number
  K: number
}

type Props = {
  onClose: () => void
}

export default function FertilizationCalculator({ onClose }: Props) {
  const [npkValues, setNpkValues] = useState<NPKValues>({ N: 0, P: 0, K: 0 })
  const [area, setArea] = useState(0)
  const [unit, setUnit] = useState<"Acre" | "Hectare">("Acre")
  const [result, setResult] = useState<number | null>(null)

  const handleNPKChange = (key: keyof NPKValues, value: string) => {
    const numValue = value === "" ? 0 : Number.parseInt(value)
    setNpkValues((prev) => ({ ...prev, [key]: numValue }))
  }

  const handleAreaChange = (value: string) => {
    const numValue = value === "" ? 0 : Number.parseInt(value)
    setArea(numValue)
  }

  const handleAreaButton = (operation: "increment" | "decrement") => {
    setArea((prev) => operation === "increment" ? prev + 1 : Math.max(0, prev - 1))
  }

  const calculateFertilizerNeeds = () => {
    const totalNutrients = npkValues.N + npkValues.P + npkValues.K
    const areaMultiplier = unit === "Hectare" ? 2.47105 : 1
    const baseRequirement = 50

    const calculatedValue = Math.round((totalNutrients * area * areaMultiplier * baseRequirement) / 100)
    setResult(calculatedValue)
  }

  return (
    <div className="py-4">
      <h2 className="text-xl text-greenish font-semibold mb-6">Fertilizer Calculator</h2>

      <div className="space-y-6">
        {/* NPK Values Section */}
        <div className="border border-gray-200 rounded-xl p-4">
          <p className="text-sm text-greenish font-medium mb-3">Add NPK Values</p>
          <div className="flex gap-2">
            {/* N Input */}
            <div className="flex-1 flex items-center gap-1">
              <div className="w-10 h-10 bg-greenish rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                N
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg min-w-[45px]">
                <input
                  type="number"
                  value={npkValues.N === 0 ? "" : npkValues.N}
                  onChange={(e) => handleNPKChange("N", e.target.value)}
                  className="w-full h-10 bg-transparent outline-none text-lg font-medium text-center px-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>

            {/* P Input */}
            <div className="flex-1 flex items-center gap-1">
              <div className="w-10 h-10 bg-greenish rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                P
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg min-w-[45px]">
                <input
                  type="number"
                  value={npkValues.P === 0 ? "" : npkValues.P}
                  onChange={(e) => handleNPKChange("P", e.target.value)}
                  className="w-full h-10 bg-transparent outline-none text-lg font-medium text-center px-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>

            {/* K Input */}
            <div className="flex-1 flex items-center gap-1">
              <div className="w-10 h-10 bg-greenish rounded-lg flex items-center justify-center text-white font-semibold text-lg">
                K
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg min-w-[45px]">
                <input
                  type="number"
                  value={npkValues.K === 0 ? "" : npkValues.K}
                  onChange={(e) => handleNPKChange("K", e.target.value)}
                  className="w-full h-10 bg-transparent outline-none text-lg font-medium text-center px-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Area Selection */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleAreaButton("decrement")}
              className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              -
            </button>
            <div className="text-center flex-1 mx-4">
              <input
                type="number"
                value={area === 0 ? "" : area}
                onChange={(e) => handleAreaChange(e.target.value)}
                className="w-20 bg-transparent outline-none text-3xl font-light text-gray-800 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="0"
                min="0"
              />
              <p className="text-sm text-gray-600 mt-1">{unit}</p>
            </div>
            <button
              onClick={() => handleAreaButton("increment")}
              className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Plot Size Unit Selection */}
        <div className="bg-greenish rounded-lg p-4">
          <p className="text-sm font-medium mb-2 text-white">Plot Size</p>
          <div className="bg-greenish rounded-lg">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setUnit("Acre")}
                className={`py-2 px-4 rounded text-sm font-medium transition-colors ${
                  unit === "Acre" ? "bg-yellow-400 text-white" : "text-gray-400 bg-white  "
                }`}
              >
                Acre
              </button>
              <button
                onClick={() => setUnit("Hectare")}
                className={`py-2 px-4 rounded text-sm font-medium transition-colors ${
                  unit === "Hectare" ? "bg-yellow-400 text-white" : "text-gray-400 bg-white"
                }`}
              >
                Hectare
              </button>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateFertilizerNeeds}
          className="w-full py-3 bg-greenish text-white rounded-lg shadow-xl flex items-center justify-center gap-2 font-medium hover:bg-green-700 transition-colors"
        >
          <Calculator className="w-5 h-5" />
          Calculate
        </button>
      </div>

      {/* Result Modal */}
      {result !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-hidden">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 text-center">
            <div className="mb-4 relative w-[120px] h-[120px] mx-auto">
              <Image 
                src="/emojis/flower-pot.png" 
                alt="Fertilizer" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <h3 className="text-3xl font-bold text-greenish mb-2">You Need</h3>
            <p className="text-3xl font-bold mb-4">{result} Kg</p>
            <button
              onClick={() => setResult(null)}
              className="w-full py-3 bg-greenish text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Great, Okay
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

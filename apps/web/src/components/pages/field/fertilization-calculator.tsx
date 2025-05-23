"use client"

import { useState } from "react"
import { X, Plus, Minus } from "lucide-react"

interface FertilizationCalculatorProps {
  onClose: () => void
}

export default function FertilizationCalculator({ onClose }: FertilizationCalculatorProps) {
  const [npkValues, setNpkValues] = useState({
    n: 0,
    p: 0,
    k: 0,
  })

  const [plotSize, setPlotSize] = useState(1)
  const [unit, setUnit] = useState<"Acre" | "Hectare">("Acre")
  const [result, setResult] = useState<number | null>(null)

  const handleIncrement = (nutrient: "n" | "p" | "k") => {
    setNpkValues((prev) => ({
      ...prev,
      [nutrient]: prev[nutrient] + 1,
    }))
  }

  const handleDecrement = (nutrient: "n" | "p" | "k") => {
    setNpkValues((prev) => ({
      ...prev,
      [nutrient]: Math.max(0, prev[nutrient] - 1),
    }))
  }

  const handleCalculate = () => {
    // Simple mock calculation
    const totalNutrients = npkValues.n + npkValues.p + npkValues.k
    const multiplier = unit === "Hectare" ? 10 : 4
    const calculatedResult = totalNutrients * plotSize * multiplier
    setResult(calculatedResult > 0 ? calculatedResult : 40)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Fertilizer Calculator</h2>
          <button onClick={onClose} className="text-gray-500">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <h3 className="font-medium mb-3">Add NPK Values</h3>

          <div className="grid grid-cols-5 gap-2 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold mb-1">
                N
              </div>
              <span className="text-xs text-gray-500">Nitrogen</span>
            </div>

            <div className="col-span-4 flex items-center">
              <button
                onClick={() => handleDecrement("n")}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex-1 text-center font-medium">{npkValues.n}</span>
              <button
                onClick={() => handleIncrement("n")}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold mb-1">
                P
              </div>
              <span className="text-xs text-gray-500">Phosphorus</span>
            </div>

            <div className="col-span-4 flex items-center">
              <button
                onClick={() => handleDecrement("p")}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex-1 text-center font-medium">{npkValues.p}</span>
              <button
                onClick={() => handleIncrement("p")}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-bold mb-1">
                K
              </div>
              <span className="text-xs text-gray-500">Potassium</span>
            </div>

            <div className="col-span-4 flex items-center">
              <button
                onClick={() => handleDecrement("k")}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="flex-1 text-center font-medium">{npkValues.k}</span>
              <button
                onClick={() => handleIncrement("k")}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <h3 className="font-medium mb-3">Plot Size</h3>

          <div className="bg-gray-100 p-3 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setPlotSize(Math.max(0.1, plotSize - 0.1))}
                className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center"
              >
                <Minus className="h-4 w-4" />
              </button>

              <div className="text-center">
                <span className="text-xl font-bold">{plotSize.toFixed(1)}</span>
                <p className="text-xs text-gray-500">Acre</p>
              </div>

              <button
                onClick={() => setPlotSize(plotSize + 0.1)}
                className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="flex mt-3 gap-2">
              <button
                onClick={() => setUnit("Acre")}
                className={`flex-1 py-2 rounded-md text-sm font-medium ${
                  unit === "Acre" ? "bg-green-700 text-white" : "bg-white text-gray-700"
                }`}
              >
                Acre
              </button>
              <button
                onClick={() => setUnit("Hectare")}
                className={`flex-1 py-2 rounded-md text-sm font-medium ${
                  unit === "Hectare" ? "bg-green-700 text-white" : "bg-white text-gray-700"
                }`}
              >
                Hectare
              </button>
            </div>
          </div>

          <button onClick={handleCalculate} className="w-full py-3 bg-green-700 text-white rounded-lg font-medium mb-4">
            Calculate
          </button>

          {result !== null && (
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-medium mb-2">You Need</h3>
              <p className="text-3xl font-bold text-green-700 mb-2">{result} kg</p>
              <button onClick={onClose} className="w-full py-2 bg-green-700 text-white rounded-lg font-medium">
                Great, Okay
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Cloud, Sun, CloudRain } from "lucide-react"

export default function WeatherPage() {
  const [forecast, setForecast] = useState([
    { day: "Fri", icon: <Cloud className="h-5 w-5" />, temp: "24°", low: "18°" },
    { day: "Sat", icon: <Sun className="h-5 w-5" />, temp: "26°", low: "19°" },
    { day: "Sun", icon: <CloudRain className="h-5 w-5" />, temp: "25°", low: "17°" },
    { day: "Mon", icon: <Sun className="h-5 w-5" />, temp: "24°", low: "18°" },
    { day: "Tue", icon: <CloudRain className="h-5 w-5" />, temp: "25°", low: "17°" },
  ])

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
          {/* Header */}
      <header className="p-6 flex items-center">
        <Link href="/home" className="mr-4">
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </Link>
        <h1 className="text-xl font-medium">Weather</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-24">
        {/* Current Weather */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Cloud className="h-16 w-16 text-gray-600" />
            </div>
            <h2 className="text-4xl font-bold mb-1">24°C</h2>
            <p className="text-gray-500">Today is partly sunny day</p>
            <div className="flex justify-center space-x-8 mt-4">
              <div className="text-center">
                <p className="text-lg font-bold">77%</p>
                <p className="text-gray-500 text-xs">Humidity</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">6 mph/s</p>
                <p className="text-gray-500 text-xs">Wind Speed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Forecast */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {forecast.map((day, index) => (
            <div
              key={day.day}
              className={`flex items-center justify-between p-4 ${
                index < forecast.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <span className="font-medium">{day.day}</span>
              <div className="flex items-center">{day.icon}</div>
              <div className="flex space-x-4">
                <span className="font-bold">{day.temp}</span>
                <span className="text-gray-400">{day.low}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

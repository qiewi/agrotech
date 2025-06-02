"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Cloud, Sun, CloudRain } from "lucide-react";

function getIcon(code: number) {
  // Open-Meteo weathercode: 0=clear, 1/2=partly, 3=cloudy, 61+=rain
  if (code === 0) return <Sun className="h-5 w-5" />;
  if (code === 3) return <Cloud className="h-5 w-5" />;
  if (code >= 61) return <CloudRain className="h-5 w-5" />;
  return <Cloud className="h-5 w-5" />;
}

export default function WeatherPage() {
  const [current, setCurrent] = useState<any>(null);
  const [forecast, setForecast] = useState<
    { day: string; icon: React.ReactElement; temp: string; low: string }[]
  >([]);

  useEffect(() => {
    const lat = -6.9;
    const lon = 107.6;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia%2FBangkok`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrent(data.current_weather);
        const days = data.daily.time.map((t: string, i: number) => ({
          day: new Date(t).toLocaleDateString("en-US", { weekday: "short" }),
          icon: getIcon(data.daily.weathercode[i]),
          temp: `${Math.round(data.daily.temperature_2m_max[i])}°`,
          low: `${Math.round(data.daily.temperature_2m_min[i])}°`,
        }));
        setForecast(days);
      });
  }, []);

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
            <h2 className="text-4xl font-bold mb-1">
              {current ? `${current.temperature}°C` : "--"}
            </h2>
            <p className="text-gray-500">
              {current
                ? current.weathercode === 0
                  ? "Clear"
                  : current.weathercode === 3
                  ? "Cloudy"
                  : "Partly Cloudy"
                : "Loading..."}
            </p>
            <div className="flex justify-center space-x-8 mt-4">
              <div className="text-center">
                <p className="text-lg font-bold">
                  {current ? `${current.windspeed} km/h` : "--"}
                </p>
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
  );
}
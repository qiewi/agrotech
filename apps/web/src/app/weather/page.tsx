"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import WeatherCard from "@/components/pages/home/WeatherCard";

function getIcon(code: number) {
  // Open-Meteo weathercode: 0=clear, 1/2=partly, 3=cloudy, 61+=rain
  if (code === 0) return "/emojis/clear.png";
  if (code === 3) return "/emojis/cloudy.png";
  return "/emojis/partly-cloudy.png";
}

export default function WeatherPage() {
  const [current, setCurrent] = useState<any>(null);
  const [forecast, setForecast] = useState<
    { day: string; weathercode: number; temp: string; low: string }[]
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
          weathercode: data.daily.weathercode[i],
          temp: `${Math.round(data.daily.temperature_2m_max[i])}°`,
          low: `${Math.round(data.daily.temperature_2m_min[i])}°`,
        }));
        setForecast(days);
      });
  }, []);

  const getCondition = (weathercode: number) => {
    if (weathercode === 0) return "Today is Clear!";
    if (weathercode === 3) return "Today is Cloudy!";
    return "Today is Partly Cloudy!";
  };

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
        <div className="mb-8">
          <WeatherCard
            temperature={current ? current.temperature : 24}
            condition={current ? getCondition(current.weathercode) : "Loading..."}
            humidity={77}
            precipitation="--"
            windSpeed={current ? `${current.windspeed} km/h` : "--"}
          />
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
              <div className="min-w-10">
                <span className="font-medium">{day.day}</span>
              </div>

              <div className="flex items-center">
                <Image 
                  src={getIcon(day.weathercode)}
                  alt="Weather condition"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex space-x-4 min-w-16">
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
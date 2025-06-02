"use client"

import Link from "next/link"
import Image from "next/image"
import { Bell, MapPin, Plus } from "lucide-react"
import WeatherCard from "@/components/pages/home/WeatherCard"
import AiInsightCard from "@/components/pages/home/AiInsightCard"
import FieldCard from "@/components/pages/home/FieldCard"
import { useEffect, useState, useRef } from "react"
import { useAuth } from "@/app/context/AuthContext"
import Header from "@/components/layout/Header"

type Field = {
  field_id: number
  field_code?: string
  field_name: string
  image_url?: string
  location: string
  crop_type?: string
  area_size?: number
  date_created?: Date;
}

type SensorData = {
  temperature?: number
  humidity?: number
}

type AllSensorData = {
  [id: string]: SensorData
}

const cropTypeImageMap: Record<string, string> = {
  Tomato: "/images/field/tomato-field.jpg",
  Eggplant: "/images/field/eggplant-field.jpg",
  Corn: "/images/field/corn-field.jpg",
  Potato: "/images/field/potato-field.jpg",
  Chili: "/images/field/chili-field.jpg",
  Bellpepper: "/images/field/bellpepper-field.jpg",
  Cucumber: "/images/field/cucumber-field.jpg",
  Ginger: "/images/field/ginger-field.jpg",
  Broccoli: "/images/field/broccoli-field.jpg",
  Peas: "/images/field/peas-field.jpg",
  Lettuce: "/images/field/lettuce-field.jpg",
  Beans: "/images/field/beans-field.jpg",
};

export default function Home() {
  const { user } = useAuth()
  const [fields, setFields] = useState<Field[]>([])
  const [allSensors, setAllSensors] = useState<AllSensorData>({})
  const intervalRef = useRef<NodeJS.Timeout | null>(null)


  const [weather, setWeather] = useState<{
    temperature: number;
    condition: string;
    humidity: number;
    precipitation: string;
    windSpeed: string;
  } | null>(null);

  // Fetch fields from DB
  useEffect(() => {
    if (!user) return
    fetch(`/api/fields?user_id=${user.user_id}`)
      .then((res) => res.json())
      .then((data) => setFields(data.fields || []))
  }, [user])

  useEffect(() => {
    // Contoh: Bandung
    const lat = -6.9;
    const lon = 107.6;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=precipitation,relativehumidity_2m`
    )
      .then((res) => res.json())
      .then((data) => {
        const current = data.current_weather;
        // Ambil humidity dari hourly (karena current_weather tidak ada humidity)
        const nowHour = new Date(current.time).getHours();
        const humidityIndex = data.hourly.time.findIndex((t: string) =>
          t.startsWith(current.time.slice(0, 13))
        );
        const humidity =
          data.hourly.relativehumidity_2m[humidityIndex] ?? "--";
        const precipitation =
          data.hourly.precipitation[humidityIndex] !== undefined
            ? `${data.hourly.precipitation[humidityIndex]} mm`
            : "--";
        setWeather({
          temperature: current.temperature,
          condition: current.weathercode === 0
            ? "Clear"
            : current.weathercode === 3
            ? "Cloudy"
            : "Partly Cloudy",
          humidity,
          precipitation,
          windSpeed: `${current.windspeed} km/h`,
        });
      });
  }, []);

  // Fetch sensor data
  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const res = await fetch("http://192.168.1.20:8000/sensor")
        if (!res.ok) throw new Error("Gagal fetch data sensor")
        const data: AllSensorData = await res.json()
        if (isMounted) setAllSensors(data)
      } catch (err) {
        if (isMounted) setAllSensors({})
      }
    }
    fetchData()
    intervalRef.current = setInterval(fetchData, 1000)
    return () => {
      isMounted = false
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Gabungkan data field dari DB dengan data sensor dari FastAPI
  const fieldsWithSensor = fields.map((field) => {
    const sensor = field.field_code ? allSensors[field.field_code] : undefined
    let imageUrl = field.image_url || "/images/lahan_default.jpg";
    if (field.crop_type && cropTypeImageMap[field.crop_type]) {
      imageUrl = cropTypeImageMap[field.crop_type];
    }
    return {
      ...field,
      temperature: sensor?.temperature ?? 0,
      humidity: sensor?.humidity ?? 0,
      imageUrl,
    }
  })

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
      <Header />

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24">
        {/* Weather Widget (klik ke /weather) */}
      <Link href="/weather" className="block mb-6">
              <WeatherCard
                temperature={weather?.temperature ?? 24}
                condition={weather?.condition ?? "Loading..."}
                humidity={weather?.humidity ?? 77}
                precipitation={weather?.precipitation ?? "< 0.01 in"}
                windSpeed={weather?.windSpeed ?? "6 mph/s"}
              />
            </Link>

        {/* AI Chat Widget */}
        <div className="mb-6">
          <AiInsightCard />
        </div>

        {/* My Fields Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">My Fields</h2>
            <Link
              href="/add-field"
              className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              <Plus className="h-4 w-4 mr-1" />
              <span>Add</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {fieldsWithSensor.map((field) => (
              <Link key={field.field_id} href={`/field/${field.field_id}`}>
                <FieldCard
                  name={field.field_name}
                  temperature={field.temperature}
                  humidity={field.humidity}
                  imageUrl={field.imageUrl}
                  // cropType={field.crop_type}
                  // location={field.location}
                  // tambahkan prop lain jika perlu
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

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
}

type SensorData = {
  temperature?: number
  humidity?: number
}

type AllSensorData = {
  [id: string]: SensorData
}

export default function Home() {
  const { user } = useAuth()
  const [fields, setFields] = useState<Field[]>([])
  const [allSensors, setAllSensors] = useState<AllSensorData>({})
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Fetch fields from DB
  useEffect(() => {
    if (!user) return
    fetch(`/api/fields?user_id=${user.user_id}`)
      .then((res) => res.json())
      .then((data) => setFields(data.fields || []))
  }, [user])

  // Fetch sensor data
  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const res = await fetch("http://192.168.31.235:8000/sensor")
        if (!res.ok) throw new Error("Gagal fetch data sensor")
        const data: AllSensorData = await res.json()
        if (isMounted) setAllSensors(data)
      } catch (err) {
        if (isMounted) setAllSensors({})
      }
    }
    fetchData()
    intervalRef.current = setInterval(fetchData, 5000)
    return () => {
      isMounted = false
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Gabungkan data field dari DB dengan data sensor dari FastAPI
  const fieldsWithSensor = fields.map((field) => {
    const sensor = field.field_code ? allSensors[field.field_code] : undefined
    return {
      ...field,
      temperature: sensor?.temperature ?? 0,
      humidity: sensor?.humidity ?? 0,
      imageUrl: field.image_url || "/images/lahan_default.jpg",
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
            temperature={24}
            condition={"Today is partly sunny day!"}
            humidity={77}
            precipitation={"< 0.01 in"}
            windSpeed={"6 mph/s"}
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

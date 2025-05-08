import Link from "next/link"
import { Bell, MapPin } from "lucide-react"
import WeatherCard from "@/components/hero/WeatherCard"
import AiInsightCard from "@/components/hero/AiInsightCard"
import FieldCard from "@/components/hero/FieldCard"
import BottomNav from "@/components/hero/BottomNav"

export default function Home() {
  const fields = [
    {
      id: 1,
      name: "Jagung",
      temperature: 24,
      humidity: 67,
      imageUrl: "/images/lahan.webp",
      href: "/fields/jagung",
    },
    {
      id: 2,
      name: "Tomat",
      temperature: 24,
      humidity: 67,
      imageUrl: "/images/lahan.webp",
      href: "/fields/tomat",
    },
    {
      id: 3,
      name: "Padi",
      temperature: 25,
      humidity: 70,
      imageUrl: "/images/lahan.webp",
      href: "/fields/padi",
    },
    {
      id: 4,
      name: "Cabai",
      temperature: 26,
      humidity: 65,
      imageUrl: "/images/lahan.webp",
      href: "/fields/cabai",
    },
  ]

  return (
    <div className="flex flex-col w-full pb-20 px-2 bg-white">
      <div className="w-full flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-1 bg-gray-200 rounded-full px-3 py-1.5">
          <MapPin className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Canggu, Bali</span>
        </div>
        <Link href="/notifications">
          <Bell className="w-5 h-5 text-gray-700" />
        </Link>
      </div>

      <div className="px-4 py-3">
        <WeatherCard temperature={24} condition={"Today is partly sunny day!"} humidity={77} precipitation={"< 0.01 in"} windSpeed={"6 mph/s"} />
      </div>

      <div className="px-4 py-3">
        <AiInsightCard />
      </div>

      <div className="px-4 py-3">
        <h2 className="text-xl font-bold mb-3">My Fields</h2>
        <div className="grid grid-cols-2 gap-3">
          {fields.map((field) => (
            <FieldCard
              key={field.id}
              name={field.name}
              temperature={field.temperature}
              humidity={field.humidity}
              imageUrl={field.imageUrl}
              href={field.href}
            />
          ))}
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  )
}

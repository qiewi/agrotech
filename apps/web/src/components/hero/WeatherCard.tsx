import { Cloud, Sun } from "lucide-react"

interface WeatherCardProps {
  temperature: number
  condition: string
  humidity: number
  precipitation: string
  windSpeed: string
}

const WeatherCard = ({
  temperature = 24,
  condition = "Today is partly sunny day!",
  humidity = 77,
  precipitation = "< 0.01 in",
  windSpeed = "6 mph/s",
}: WeatherCardProps) => {
  return (
    <div
      className="w-full rounded-xl p-5 bg-opacity-60"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%)"
      }}
    >
      <div className="flex flex-col items-center mb-6 opacity-100">
        <div className="relative mb-2">
          <Cloud className="text-gray-200 w-16 h-16" />
          <Sun className="text-yellow-400 w-6 h-6 absolute -top-1 -left-1" />
        </div>
        <h1 className="text-4xl font-bold text-black">{temperature}°C</h1>
        <p className="text-black text-sm mt-1">{condition}</p>
      </div>

      <div className="bg-white rounded-xl py-4 px-1">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-semibold text-black">{humidity}%</p>
            <p className="text-xs text-gray-500">Humidity</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-black">{precipitation}</p>
            <p className="text-xs text-gray-500">Precipitation</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-black">{windSpeed}</p>
            <p className="text-xs text-gray-500">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
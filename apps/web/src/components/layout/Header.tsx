import Image from "next/image"
import { MapPin } from "lucide-react"

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src="/logo/agrotech.svg" alt="Agrotech Logo" width={32} height={32} className="w-8 h-8" />
        <span className="text-xl font-semibold text-gray-800"><span className="text-greenish">Agro</span>tech</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
          <MapPin className="h-4 w-4 text-gray-600 mr-1" />
          <span className="text-sm font-medium text-gray-700">Jatinangor</span>
        </div>
      </div>  
    </header>
  )
} 
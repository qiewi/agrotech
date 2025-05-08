import Image from "next/image"
import Link from "next/link"

interface FieldCardProps {
  name: string
  temperature: number
  humidity: number
  imageUrl: string
  href: string
}

export default function FieldCard({ name, temperature, humidity, imageUrl, href }: FieldCardProps) {
  return (
    <Link href={href} className="block">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${name} field`}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-1 ml-2">
        <h3 className="font-semibold text-base text-black">{name}</h3>
          <p className="text-xs font-medium text-gray-400">
            {temperature}°C • {humidity}%
          </p>
      </div>
    </Link>
  )
}

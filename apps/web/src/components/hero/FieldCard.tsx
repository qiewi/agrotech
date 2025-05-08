import Image from "next/image"

interface FieldCardProps {
  name: string
  temperature: number
  humidity: number
  imageUrl: string
}

const FieldCard = ({
  name,
  temperature,
  humidity,
  imageUrl,
}: FieldCardProps) => {
  return (
    <div className="block">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`${name} field`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-1 ml-2">
        <h3 className="font-semibold text-base text-black">{name}</h3>
        <p className="text-xs font-medium text-gray-400">
          {temperature}°C • {humidity}%
        </p>
      </div>
    </div>
  )
}

export default FieldCard
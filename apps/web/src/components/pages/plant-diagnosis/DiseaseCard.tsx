import Image from "next/image"
import React from "react"

interface DiseaseCardProps {
  name: string
  image: string
  onClick?: () => void
}

export default function DiseaseCard({ name, image, onClick }: DiseaseCardProps) {
  return (
    <div
      onClick={onClick}
      className="min-w-[140px] max-w-[160px] w-[150px] bg-transparent rounded-[20px] shadow-md flex flex-col items-stretch p-0 m-0 border-0 overflow-hidden cursor-pointer transition"
    >
      <Image
        src={image}
        alt={name}
        width={150}
        height={80}
        className="object-cover w-full h-[80px] rounded-t-[20px]"
      />
      <div className="bg-[#F6F6F6] w-full rounded-b-[20px] flex items-center justify-left min-h-[48px]">
        <span className="text-xs text-left font-semibold text-gray-400 px-4 line-clamp-2">
          {name}
        </span>
      </div>
    </div>
  )
} 
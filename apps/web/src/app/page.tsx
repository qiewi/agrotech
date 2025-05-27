"use client"

import { useState } from "react"
import { Leaf, Link } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "Farm Smarter",
      image: "/emojis/farmer.png" as string,
      description: "Your One and Only Crop Monitoring System",
      subDescription: "Integrated with IoT and AI System",
    },
    {
      title: "Monitor Quicker",
      image: "/emojis/leaves.png" as string,
      description: "Your One and Only Crop Monitoring System",
      subDescription: "Integrated with IoT and AI System",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white text-black">
      <div className="w-full max-w-md mx-auto h-screen flex flex-col p-6">
        {/* Logo */}
        <div className="flex items-center justify-center mt-2 mb-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <h1 className="text-2xl font-medium">
            <span className="text-green-600">Agro</span>
            <span className="text-gray-800">tech</span>
          </h1>
        </div>

        {/* Slider */}
        <div className="flex-1 flex items-center justify-center">
          {activeSlide === 0 ? (
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Image
                  src={slides[0].image}
                  alt="Farm"
                  width={240}
                  height={240}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl mb-2">{slides[0].title}</h2>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <Image
                  src={slides[1].image}
                  alt="Leaves"
                  width={240}
                  height={240}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl mb-2">{slides[1].title}</h2>
            </div>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveSlide(0)}
            className={`w-3 h-3 rounded-full ${activeSlide === 0 ? "bg-green-700" : "bg-gray-300"}`}
            aria-label="Slide 1"
          />
          <button
            onClick={() => setActiveSlide(1)}
            className={`w-3 h-3 rounded-full ${activeSlide === 1 ? "bg-green-700" : "bg-gray-300"}`}
            aria-label="Slide 2"
          />
        </div>

        {/* Description */}
        <div className="text-center mb-6">
          <h3 className="text-gray-600 font-medium mb-1">{slides[activeSlide].description}</h3>
          <p className="text-gray-500 text-sm">{slides[activeSlide].subDescription}</p>
        </div>

        {/* Sign In Button */}
        <a
          href="/login"
          className="w-full py-4 bg-green-700 text-white rounded-lg font-medium text-center block mt-2"
        >
          Sign In
        </a>
        
      </div>
    </main>
  )
}

function LeafAnimation() {
  return (
    <div className="relative h-24 w-24">
      <div className="absolute animate-[wiggle_3s_ease-in-out_infinite]">
        <Leaf className="h-12 w-12 text-green-500 transform -rotate-45" />
      </div>
      <div className="absolute top-6 left-6 animate-[wiggle_3s_ease-in-out_infinite_0.5s]">
        <Leaf className="h-16 w-16 text-green-600 transform rotate-15" />
      </div>
    </div>
  )
}

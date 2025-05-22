"use client"

import { Progress } from "@/components/ui/progress"

export function IdentifyingPage({
  imageUrl,
  progress,
  scanPosition,
}: {
  imageUrl: string
  progress: number
  scanPosition: number
}) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        <img
          src={imageUrl}
          alt="Uploaded plant image"
          className="w-full h-full object-cover"
        />
        {/* Corner brackets */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-24 left-4 w-8 h-8 border-b-2 border-l-2 border-white"></div>
        <div className="absolute bottom-24 right-4 w-8 h-8 border-b-2 border-r-2 border-white"></div>
        {/* Animated scanning overlay */}
        <div
          className="absolute left-0 right-0 h-24 bg-white/20 backdrop-blur-sm transition-all duration-300 ease-in-out"
          style={{ top: `${scanPosition}%` }}
        ></div>
        {/* Progress indicator */}
        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="bg-white rounded-xl p-4 mx-auto max-w-xs">
            <div className="flex justify-between items-center mb-2">
              <p className="text-black font-medium">Mengidentifikasi..</p>
              <span className="text-black">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

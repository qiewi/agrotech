import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import { AuthProvider } from "./context/AuthContext"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Agrotech",
  description: "Smart Agriculture Solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen w-full flex justify-center bg-white ${dmSans.className}`}>
        <AuthProvider>{children}</AuthProvider>
        <Navbar />
      </body>
    </html>
  )
}

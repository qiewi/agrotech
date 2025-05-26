import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import NavbarWrapper from "@/components/layout/NavbarWrapper"
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
      <body
        className={`min-h-screen w-full flex justify-center bg-white ${dmSans.className}`}
      >
        <AuthProvider>
          <main className="w-full max-w-[390px] flex flex-col items-center">
            {children}
          </main>
        </AuthProvider>
        <NavbarWrapper />
      </body>
    </html>
  );
}


"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"

export default function NavbarWrapper() {
  const pathname = usePathname()
  const isHomePage = pathname === "/" || pathname === "/login"

  if (isHomePage) return null
  return <Navbar />
}
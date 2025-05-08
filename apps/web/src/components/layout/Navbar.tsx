"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Leaf, ShoppingBag, User } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Diagnosis",
      href: "/plant-diagnosis",
      icon: Leaf,
    },
    {
      name: "Market",
      href: "/market",
      icon: ShoppingBag,
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center bg-white">
      <div className="w-full max-w-[390px] border-t border-gray-200">
        <nav className="flex justify-between">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-1 flex-col items-center py-3 text-xs ${
                  isActive ? "text-green-700 font-medium" : "text-gray-500"
                }`}
              >
                <item.icon className="mb-1 h-5 w-5" />
                <span>{item.name}</span>
                {isActive && <div className="absolute bottom-0 h-1 w-16 bg-green-700 rounded-t-md" />}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

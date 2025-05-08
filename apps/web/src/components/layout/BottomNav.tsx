"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HomeIcon, ShopIcon, ProfileIcon, SearchStatusIcon, MessageIcon } from "@/components/icons/VuesaxIcons"

interface NavItem {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
  isChat?: boolean
}

export default function BottomNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      icon: <HomeIcon className="w-6 h-6" />,
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      icon: <SearchStatusIcon className="w-6 h-6" />,
      label: "Diagnosis",
      href: "/plant-diagnosis",
      active: pathname === "/plant-diagnosis",
    },
    {
      icon: <MessageIcon className="w-6 h-6" />,
      label: "",
      href: "/chat",
      active: pathname === "/chat",
      isChat: true,
    },
    {
      icon: <ShopIcon className="w-6 h-6" />,
      label: "Market",
      href: "/market",
      active: pathname === "/market",
    },
    {
      icon: <ProfileIcon className="w-6 h-6" />,
      label: "Profile",
      href: "/profile",
      active: pathname === "/profile",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-[#F2F6F9] py-2 max-w-[390px] mx-auto">
      {navItems.map((item) => (
        <Link key={item.label || "chat"} href={item.href} className="flex flex-col items-center">
          {item.isChat ? (
            <div className="p-[2px] rounded-lg border border-gray-400">
              <div className="bg-greenish p-2 rounded-md">
                <div className="text-white">{item.icon}</div>
              </div>
            </div>
          ) : (
            <>
              <div className="p-2">
                <div className={item.active ? "text-black" : "text-gray-400"}>{item.icon}</div>
              </div>
              <span className={`text-xs mt-1 ${item.active ? "text-black" : "text-gray-400"}`}>{item.label}</span>
            </>
          )}
        </Link>
      ))}
    </div>
  )
}
"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  HomeIcon,
  ShopIcon,
  ProfileIcon,
  SearchStatusIcon,
  MessageIcon,
} from "@/components/icons/VuesaxIcons"

interface NavItem {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
  isChat?: boolean
}

export default function Navbar() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      icon: <HomeIcon className="w-6 h-6" />,
      label: "Home",
      href: "/home",
      active: pathname === "/home",
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
    <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center bg-[#F2F6F9] py-2 max-w-[390px] mx-auto border-t border-gray-200">
      {navItems.map((item) => (
        <Link
          key={item.label || "chat"}
          href={item.href}
          className="flex flex-col items-center group transition-all"
        >
          {item.isChat ? (
            <div
              className={`p-[2px] rounded-lg border transition ${
                item.active
                  ? "border-black"
                  : "border-gray-400 group-hover:border-black"
              }`}
            >
              <div
                className={`p-2 rounded-md transition ${
                  item.active
                    ? "bg-green-700"
                    : "bg-greenish group-hover:bg-green-700"
                }`}
              >
                <div className="text-white">{item.icon}</div>
              </div>
            </div>
          ) : (
            <>
              <div className="p-2">
                <div
                  className={`transition duration-200 ${
                    item.active
                      ? "text-black"
                      : "text-gray-400 group-hover:text-black"
                  }`}
                >
                  {item.icon}
                </div>
              </div>
              <span
                className={`text-xs mt-1 transition duration-200 ${
                  item.active
                    ? "text-black"
                    : "text-gray-400 group-hover:text-black"
                }`}
              >
                {item.label}
              </span>
            </>
          )}
        </Link>
      ))}
    </div>
  )
}
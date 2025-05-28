"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/navigation"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useAuth();
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        alert("Login sukses!");
        router.push("/home");
      } else {
        alert(data.error || "Login gagal");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan server");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black">
      <div className="w-full max-w-md mx-auto h-screen flex flex-col p-6">
        {/* Logo */}
        <div className="flex justify-center mt-10 mb-12 gap-3">
          <Image src="/logo/agrotech.svg" alt="Agrotech Logo" width={32} height={32} className="w-8 h-8" />
          <span className="text-xl font-semibold text-gray-800"><span className="text-greenish">Agro</span>tech</span>
        </div>

        {/* Greeting with Emoji */}
        <div className="flex items-center mb-10">
          <div className="text-5xl mr-4">
            <Image
              src={"/emojis/farmer.png"}
              alt="Profile"
              className="rounded-full object-cover"
              width={120}
              height={120}
            />
          </div>
          <div>
            <p className="text-lg font-medium">
              Ready to Manage Your Farm with <span className="text-xl font-semibold text-gray-800"><span className="text-greenish">Agro</span>tech</span>?
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-greenish font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="block text-greenish font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-greenish text-white rounded-lg font-medium hover:bg-green-800 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}

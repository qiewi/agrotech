"use client"

import type React from "react"

import { useState } from "react"
import { Leaf, Eye, EyeOff } from "lucide-react"
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
        setUser(data.user); // Set user in context
        alert("Login sukses!");
        router.push("/home"); // Redirect to dashboard
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
        <div className="flex items-center justify-center mt-10 mb-12">
          <Leaf className="h-8 w-8 text-green-600" />
          <h1 className="text-2xl font-medium">
            <span className="text-green-600">Agro</span>
            <span className="text-gray-800">tech</span>
          </h1>
        </div>

        {/* Greeting with Emoji */}
        <div className="flex items-center mb-10">
          <div className="text-5xl mr-4">👨‍🌾</div>
          <div>
            <p className="text-lg font-medium">
              Ready to Manage Your Farm with <span className="text-green-600 font-semibold">Agrotech</span>?
            </p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-700 font-medium mb-2">
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
            <label htmlFor="password" className="block text-green-700 font-medium mb-2">
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
            className="w-full py-4 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}

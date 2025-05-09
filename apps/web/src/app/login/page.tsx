"use client"

import { LoginHeader } from "./components/LoginHeader"
import { LoginForm } from "./components/LoginForm"

export const loginText = {
  greeting: "Halo!",
  instruction: "Silakan masuk",
  emailLabel: "Email",
  emailPlaceholder: "Masukkan email",
  passwordLabel: "Password",
  passwordPlaceholder: "Masukkan password",
  submitButton: "Masuk",
  headerAltText: "AgroTech Header",
  errors: {
    email: {
      required: "Email harus diisi",
      invalid: "Format email tidak valid",
    },
    password: {
      required: "Password harus diisi",
      minLength: "Password minimal 8 karakter",
    },
  },
}


export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LoginHeader imageSrc="/bg-login.png" altText={loginText.headerAltText} />
      <LoginForm texts={loginText} />
    </div>
  )
}

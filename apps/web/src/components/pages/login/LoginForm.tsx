"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputField } from "./InputField"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email harus diisi" }).email({ message: "Format email tidak valid" }),
  password: z.string().min(1, { message: "Password harus diisi" }).min(8, { message: "Password minimal 8 karakter" }),
})

export type LoginFormValues = z.infer<typeof loginSchema>


interface LoginFormProps {
  texts: {
    greeting: string
    instruction: string
    emailLabel: string
    emailPlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
    submitButton: string
    errors: {
      email: {
        required: string
        invalid: string
      }
      password: {
        required: string
        minLength: string
      }
    }
  }
}

export function LoginForm({ texts }: LoginFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setIsSubmitting(true)

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demonstration purposes, log the values
      console.log("Form submitted with:", values)

      // Simulate successful login and redirect
      // In a real app, this would be after API authentication
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 px-6 w-full space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-green-700">
          {texts.greeting} <br />
          {texts.instruction}
        </h2>
      </div>

      <InputField
        id="email"
        type="email"
        label={texts.emailLabel}
        placeholder={texts.emailPlaceholder}
        error={errors.email?.message}
        disabled={isSubmitting}
        autoComplete="email"
        {...register("email")}
      />

      <InputField
        id="password"
        type="password"
        label={texts.passwordLabel}
        placeholder={texts.passwordPlaceholder}
        error={errors.password?.message}
        disabled={isSubmitting}
        autoComplete="current-password"
        {...register("password")}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md shadow font-semibold text-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Memproses...
          </>
        ) : (
          texts.submitButton
        )}
      </button>
    </form>
  )
}

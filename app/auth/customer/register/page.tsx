"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Building2 } from "lucide-react"

export default function CustomerRegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    companyName: "",
    phone: "",
    businessStage: "",
    industry: "",
    fundingRequirements: "",
    businessDescription: "",
    growthPlanPackage: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    const supabase = createClient()

    try {
      // Sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo:
            process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
            `${window.location.origin}/auth/customer/magic-link`,
          data: {
            full_name: formData.fullName,
            user_type: "customer",
          },
        },
      })

      if (authError) throw authError

      // Save formData temporarily in localStorage to use after email confirmation
      localStorage.setItem("customerFormData", JSON.stringify(formData))

      // Redirect user to check email page
      router.push("/auth/check-email")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-amber-400 mr-2" />
              <span className="text-2xl font-bold text-white">StartupRunway</span>
            </div>
            <CardTitle className="text-2xl text-white">Customer Registration</CardTitle>
            <CardDescription className="text-slate-300">
              Join StartupRunway and accelerate your startup journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Form fields (fullName, email, password, companyName, etc.) */}
              {/* ...keep your existing inputs and selects here... */}

              {error && (
                <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-800">{error}</div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-300 text-sm">
                Already have an account?{" "}
                <Link href="/auth/customer/login" className="text-amber-400 hover:text-amber-300 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

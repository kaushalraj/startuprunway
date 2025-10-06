"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function VerifyPage() {
  const router = useRouter()

  useEffect(() => {
    const handleVerify = async () => {
      const supabase = createClient()

      try {
        const { data, error } = await supabase.auth.getSessionFromUrl({
          storeSession: true, // saves session to localStorage
        })

        if (error) throw error

        // After session is set, redirect
        router.push("/dashboard/customer")
      } catch (err) {
        console.error("Verification error:", err)
        router.push("/auth/customer/login") // fallback
      }
    }

    handleVerify()
  }, [router])

  return <p className="text-white">Verifying your email...</p>
}

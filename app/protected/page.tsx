import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function ProtectedPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/auth/login")
  }

  // Get user profile to determine redirect
  const { data: profile } = await supabase.from("profiles").select("user_type").eq("id", data.user.id).single()

  // Redirect based on user type
  if (profile?.user_type === "customer") {
    redirect("/dashboard/customer")
  } else if (profile?.user_type === "partner") {
    redirect("/dashboard/partner")
  } else if (profile?.user_type === "admin") {
    redirect("/dashboard/admin")
  }

  // Default redirect if no profile found
  redirect("/auth/login")
}

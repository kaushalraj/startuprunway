"use client"

import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export function SignOutButton() {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleSignOut}
      className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
    >
      Sign Out
    </Button>
  )
}

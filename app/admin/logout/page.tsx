"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogoutPage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const logout = async () => {
      try {
        await supabase.auth.signOut(); // Clear session
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        router.push("/admin/login"); // Redirect to login page
      }
    };

    logout();
  }, [router, supabase]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <p className="text-lg">Logging out...</p>
    </div>
  );
}


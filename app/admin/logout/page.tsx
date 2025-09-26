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
        // Sign out the current session
        await supabase.auth.signOut();
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        // Redirect to admin login page
        router.push("/admin/login");
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


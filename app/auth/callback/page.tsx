"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient"; // adjust path if needed

export default function AuthCallback() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      supabase.auth.exchangeCodeForSession(hash).then(({ error }) => {
        if (error) {
          console.error("Auth error:", error.message);
          router.push("/auth/error"); // you already have this route
        } else {
          router.push("/auth/protected"); // or /dashboard if that’s your app entry
        }
      });
    }
  }, [router, supabase]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <p className="text-lg">Finishing sign-in...</p>
    </div>
  );
}


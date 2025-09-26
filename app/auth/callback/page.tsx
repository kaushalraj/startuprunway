"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client"; // ✅ fixed

export default function AuthCallback() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      supabase.auth.exchangeCodeForSession(hash).then(({ error }) => {
        if (error) {
          console.error("Auth error:", error.message);
          router.push("/auth/error");
        } else {
          router.push("/auth/protected");
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


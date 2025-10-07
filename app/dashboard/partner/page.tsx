"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface PartnerProfile {
  id: string;
  email: string;
  full_name: string | null;
  company_name: string | null;
  partner_type: string | null;
  expertise_areas: string | null;
  phone: string | null;
}

export default function PartnerDashboardPage() {
  const [profile, setProfile] = useState<PartnerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/auth/partner/login");
        return;
      }

      const { data, error } = await supabase
        .from("partners")
        .select("id, company_name, partner_type, expertise_areas, phone")
        .eq("id", user.id)
        .single();

      const { data: profileData } = await supabase
        .from("profiles")
        .select("email, full_name")
        .eq("id", user.id)
        .single();

      if (error) console.error(error);

      setProfile({
        id: user.id,
        email: profileData?.email ?? "",
        full_name: profileData?.full_name ?? "",
        company_name: data?.company_name ?? "",
        partner_type: data?.partner_type ?? "",
        expertise_areas: data?.expertise_areas ?? "",
        phone: data?.phone ?? "",
      });
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/partner/login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Partner Dashboard</h1>

      {/* Partner Info */}
      <Card className="mb-6 bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle>Your Profile - It's a temporary Dashboard for all partners</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p><strong>Name:</strong> {profile?.full_name}</p>
          <p><strong>Email:</strong> {profile?.email}</p>
          <p><strong>Company:</strong> {profile?.company_name}</p>
          <p><strong>Partner Type:</strong> {profile?.partner_type}</p>
          <p><strong>Expertise Areas:</strong> {profile?.expertise_areas}</p>
          <p><strong>Phone:</strong> {profile?.phone}</p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">View startups assigned to you</p>
            <Button
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600"
              onClick={() => router.push("/dashboard/partner/customers")}
            >
              View Customers
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-green-400" /> Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Explore business opportunities</p>
            <Button
              className="mt-4 w-full bg-green-500 hover:bg-green-600"
              onClick={() => router.push("/dashboard/partner/opportunities")}
            >
              Explore
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-yellow-400" /> Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">Manage your account preferences</p>
            <Button
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600"
              onClick={() => router.push("/dashboard/partner/settings")}
            >
              Manage Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Logout */}
      <div className="mt-6 text-right">
        <Button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Logout
        </Button>
      </div>
    </div>
  );
}


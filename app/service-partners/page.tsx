"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Rocket,
  Building,
  Layers,
  FileText,
  Cloud,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ServicePartnerPage from "./ServicePartnerPage";

export const dynamic = "force-dynamic";

// Header
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 py-4 bg-transparent">
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image
          src="/images/startuprunway-logo.png"
          alt="StartupRunway Logo"
          width={32}
          height={32}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          StartupRunway
        </h1>
      </Link>
    </header>
  );
}

// Particle Background
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      color: ["#ff6b35", "#4a90e2", "#8b5cf6", "#10b981"][
        Math.floor(Math.random() * 4)
      ],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}

export default function Page() {
  return <ServicePartnerPage />;
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen py-16 flex items-center justify-center px-4 text-center">
      <div className="max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a90e2]/10 border border-[#4a90e2]/30 mb-6"
        >
          <HeartHandshake className="w-4 h-4 text-[#4a90e2]" />
          <span className="text-gray-300">For Business Enablers & Experts</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent"
        >
          StartupRunway Service Partners Network
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          <p>Collaborate. Empower. Grow. </p>
          <p>
            Join India's most vibrant ecosystem empowering startups with
            real-world expertise.
          </p>
        </motion.p>

        <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-6 rounded-full group">
          <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
          Join as Service Partner
        </Button>
      </div>
    </section>
  );
}

// Service Partner Types
function PartnerCategories() {
  const categories = [
    {
      icon: Briefcase,
      title: "CA & Accounting Firms",
      message:
        "Empower startups with financial structure, compliance, and growth advisory — become their trusted financial backbone.",
      color: "#ff6b35",
    },
    {
      icon: FileText,
      title: "Legal & Compliance Experts",
      message:
        "Help founders navigate business laws, IPs, and contracts — be the guiding force of ethical startup growth.",
      color: "#4a90e2",
    },
    {
      icon: Building,
      title: "Incubators & Accelerators",
      message:
        "Collaborate with StartupRunway to discover, mentor, and nurture promising early-stage ventures together.",
      color: "#8b5cf6",
    },
    {
      icon: Layers,
      title: "Marketing & Branding Agencies",
      message:
        "Shape the identity of emerging startups — from logo to launch, turn vision into brand power.",
      color: "#10b981",
    },
    {
      icon: Users,
      title: "HR & Recruitment Partners",
      message:
        "Build the founding teams of India’s next unicorns — match passion with purpose.",
      color: "#f59e0b",
    },
    {
      icon: Cloud,
      title: "Cloud & SaaS Providers",
      message:
        "Enable digital transformation — offer tools, infrastructure, and credits that scale startups faster.",
      color: "#4a90e2",
    },
    {
      icon: Rocket,
      title: "Startup Consultants",
      message:
        "Guide founders with business models, GTM strategy, and execution frameworks — shape startup success stories.",
      color: "#8b5cf6",
    },
    {
      icon: Lightbulb,
      title: "Innovation & R&D Hubs",
      message:
        "Partner with StartupRunway to foster product innovation, prototype labs, and co-creation opportunities.",
      color: "#10b981",
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#ff6b35] to-[#4a90e2] bg-clip-text text-transparent"
        >
          Become a StartupRunway Service Partner
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${cat.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: cat.color }} />
                </div>
                <h3 className="text-2xl mb-3 text-white">{cat.title}</h3>
                <p className="text-gray-400">{cat.message}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA
function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] opacity-20" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-6 text-white"
        >
          Let’s Empower India’s Startup Revolution
        </motion.h2>
        <p className="text-lg text-gray-300 mb-8">
          Partner with StartupRunway to connect your expertise with thousands of
          founders shaping tomorrow.
        </p>
        <Button className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/90 px-8 py-6 rounded-full group">
          Join Partner Network
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
}

// Main
export default function ServiceProvidersPage() {
  return (
    <div className="relative bg-[#0f1233] text-white overflow-hidden pt-20">
      <ParticleBackground />
      <Header />
      <ServicePartnerPage />
      <div className="relative z-10">
        <HeroSection />
        <PartnerCategories />
        <CTASection />
      </div>
    </div>
  );
}

"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Users,
  Target,
  Layers,
  Globe,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ------------------------------ HEADER ------------------------------ */
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

/* -------------------- DYNAMIC NEURAL RAYS BACKGROUND -------------------- */
function NeuralRaysBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let time = 0;

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      gradient.addColorStop(0, "#1db95410");
      gradient.addColorStop(1, "#4892db10");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 8; i++) {
        const y = canvas.height / 2 + Math.sin(time + i) * 100;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < canvas.width; x += 5) {
          const offset = Math.sin(x * 0.01 + time + i) * 40;
          ctx.lineTo(x, y + offset);
        }
        ctx.strokeStyle = `hsla(${180 + i * 20}, 70%, 60%, 0.08)`;
        ctx.lineWidth = 4.0;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: "radial-gradient(circle at 30% 30%, #0f1233, #090b20 70%)",
      }}
    />
  );
}

/* ------------------------------ HERO SECTION ------------------------------ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-32 text-center">
      <div className="max-w-5xl mx-auto text-center relative z-10 pb-2 overflow-visible ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/30 mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#ff6b35]" />
          <span className="text-gray-300">For Student Entrepreneurs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl leading-[1.2] md:leading-[1.3] mb-6 bg-gradient-to-r from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent"
        >
          Studentpreneur Program
        </motion.h1>
      </div>
      <div className="max-w-5xl mx-auto z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1db954] via-[#4892db] to-[#8b5cf6] bg-clip-text text-transparent leading-tight"
        >
          Empowering Founders to Build, Automate & Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          StartupRunway is not just another consultancy — it’s India’s Startup
          Innovation Hub. We combine business strategy, SaaS automation, and AI
          cloud infrastructure to help founders execute faster and smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button className="bg-[#1db954] hover:bg-[#1db954]/90 text-white px-8 py-6 rounded-full">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-[#4892db] text-[#4892db] hover:bg-[#4892db]/10 px-8 py-6 rounded-full"
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ VALUE PROPOSITION ------------------------------ */
function ValueProposition() {
  const values = [
    {
      icon: Lightbulb,
      title: "AI Startup Empowerment",
      desc: "Partnering with Neev Cloud and SaaS giants like Zoho, we provide scalable, AI-ready infrastructure and automation for Indian founders.",
    },
    {
      icon: Layers,
      title: "SaaS Platform Integration",
      desc: "StartupRunway’s SaaS Platform delivers seamless business automation — from CRM to HR, accounting, and compliance workflows.",
    },
    {
      icon: TrendingUp,
      title: "Smart Cloud Partnerships",
      desc: "Our future collaborations with GCP, AWS, Azure, and Neev Cloud ensure startups leverage the most cost-efficient, secure AI cloud infrastructure.",
    },
    {
      icon: Users,
      title: "Comprehensive Consulting",
      desc: "Unlike typical consultancies, StartupRunway merges strategy, execution, and automation — providing one ecosystem to build and scale.",
    },
    {
      icon: Target,
      title: "Accelerating AI Innovation",
      desc: "AI-driven startups gain mentorship, compute credits, data infrastructure, and automated business tools to grow without friction.",
    },
    {
      icon: Globe,
      title: "Global Expansion Ready",
      desc: "We enable founders to think beyond borders — with international branding, franchise systems, and scalable digital presence.",
    },
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#4892db] to-[#1db954] bg-clip-text text-transparent"
        >
          How StartupRunway Adds Value to Founders
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#11163b] border border-white/10 hover:border-[#1db954]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1db954]/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1db954]/20">
                    <Icon className="w-6 h-6 text-[#1db954]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA SECTION ------------------------------ */
function CTASection() {
  return (
    <section className="py-24 px-4 relative text-center">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1db954]/10 blur-3xl rounded-full"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Build Smarter. Scale Faster.{" "}
          <span className="text-[#1db954]">With StartupRunway</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Join India’s most connected innovation hub — where business strategy
          meets automation and cloud technology.
        </p>
        <Button className="bg-[#1db954] hover:bg-[#1db954]/90 text-white px-8 py-6 rounded-full">
          Connect With Our Team
        </Button>
      </div>
    </section>
  );
}

/* ------------------------------ MAIN COMPONENT ------------------------------ */
export default function FoundersPage() {
  return (
    <div className="relative min-h-screen bg-[#0f1233] overflow-hidden text-white">
      <NeuralRaysBackground />
      <Header />
      <div className="relative z-10">
        <HeroSection />
        <ValueProposition />
        <CTASection />
      </div>
    </div>
  );
}

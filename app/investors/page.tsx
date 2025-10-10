'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import { Lightbulb, TrendingUp, Users, Target, CheckCircle2, ArrowRight, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

/* ------------------------------ HEADER ------------------------------ */
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center py-4 bg-transparent backdrop-blur-md">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/images/startuprunway-logo.png" alt="StartupRunway Logo" width={32} height={32} />
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          StartupRunway
        </h1>
      </Link>
    </header>
  );
}

/* ------------------------------ BACKGROUND ANIMATION ------------------------------ */
function NeuralPulseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pulseLines = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.5 + Math.random() * 1.2,
      opacity: 0.2 + Math.random() * 0.4,
      length: 200 + Math.random() * 250,
      direction: Math.random() * 360
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pulseLines.forEach(line => {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(line.x, line.y, line.x + Math.cos(line.direction) * line.length, line.y + Math.sin(line.direction) * line.length);
        grad.addColorStop(0, 'rgba(29,185,84,0.0)');
        grad.addColorStop(0.5, 'rgba(72,146,219,0.35)');
        grad.addColorStop(1, 'rgba(139,92,246,0.0)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + Math.cos(line.direction) * line.length, line.y + Math.sin(line.direction) * line.length);
        ctx.stroke();

        line.y += line.speed;
        if (line.y > canvas.height) line.y = -line.length;
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}

/* ------------------------------ HERO SECTION ------------------------------ */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/30 mb-6"
      >
        <span className="text-gray-300">For Founders</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1DB954] via-[#4892DB] to-[#8b5cf6] bg-clip-text text-transparent"
      >
        Empowering Investors to Discover, Fund & Scale the Next Generation of Startups
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
      >
        StartupRunway isn’t just a consultancy — it’s India’s Innovation Hub for Founders.
        Build confidently with our integrated ecosystem combining strategy, SaaS automation, AI cloud infrastructure, and investor access.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white px-8 py-6 rounded-full">
          Join as Founder
        </Button>
        <Button variant="outline" className="border-[#4892DB] text-[#4892DB] hover:bg-[#4892DB]/10 px-8 py-6 rounded-full">
          Explore Platform
        </Button>
      </div>
    </section>
  );
}

/* ------------------------------ VALUE PROPOSITIONS ------------------------------ */
function FounderValueSections() {
  const sections = [
    {
      title: "1. Strategic & Business Consulting",
      icon: Lightbulb,
      points: [
        "Market Research & Go-to-Market Strategy",
        "Business Model Design & Financial Planning",
        "Investor-Ready Pitch Decks & Valuation Reports",
        "Product Roadmaps aligned with scalability"
      ],
      color: "#1DB954"
    },
    {
      title: "2. Seamless SaaS Platform for Founders",
      icon: Target,
      points: [
        "Manage all startup workflows in one dashboard",
        "Integrated Legal, HR, Finance, and Marketing modules",
        "Automated investor tracking & performance analytics"
      ],
      color: "#4892DB"
    },
    {
      title: "3. AI Cloud Infrastructure Partnership",
      icon: TrendingUp,
      points: [
        "Powered by Neev Cloud for Indian AI startups",
        "GPU-based compute for model training & deployment",
        "Future partnerships with AWS, Azure, and Google Cloud"
      ],
      color: "#8b5cf6"
    },
    {
      title: "4. Funding & Investor Network",
      icon: Users,
      points: [
        "Direct investor access via StartupRunway network",
        "Investor-ready profiles and SaaS-backed transparency",
        "Due diligence and funding round facilitation"
      ],
      color: "#1DB954"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl text-center mb-12 bg-gradient-to-r from-[#1DB954] to-[#4892DB] bg-clip-text text-transparent"
        >
          StartupRunway: Built for Founders, by Founders
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#131a3a] border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${s.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                </div>
                <ul className="space-y-2">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: s.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOUNDERS–INVESTOR INTERACTION SECTION ------------------------------ */
function FoundersInvestorConnect() {
  const startups = [
    {
      name: "AIHealth Diagnostics",
      sector: "Healthcare AI",
      description: "Predictive diagnostics platform using GPU-powered models for early disease detection.",
      status: "Open for Investment"
    },
    {
      name: "AgriNeural Systems",
      sector: "AgriTech AI",
      description: "Precision farming platform using computer vision for yield forecasting and irrigation control.",
      status: "Active"
    },
    {
      name: "FinPulse Analytics",
      sector: "FinTech",
      description: "AI-based financial behavior analytics for micro-lending institutions.",
      status: "Funded"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#10142e]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-12 bg-gradient-to-r from-[#4892DB] to-[#8b5cf6] bg-clip-text text-transparent"
        >
          Founders–Investor Connect
        </motion.h2>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          StartupRunway bridges Founders and Investors through real-time SaaS transparency.
          Our AI-driven dashboards empower investors to analyze metrics, monitor progress from dayone, view MVP progress, and invest confidently.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {startups.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#131a3a] p-8 border border-white/10 rounded-2xl hover:border-[#1DB954]/30 transition-all"
            >
              <LineChart className="w-10 h-10 text-[#1DB954] mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">{s.name}</h3>
              <p className="text-[#4892DB] mb-2">{s.sector}</p>
              <p className="text-gray-400 text-sm mb-4">{s.description}</p>
              <p className="text-sm text-gray-300 mb-1"><strong>Funding:</strong> {s.funding}</p>
              <p className={`text-sm ${s.status === "Open for Investment" ? "text-[#1DB954]" : "text-gray-400"}`}>
                {s.status}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#1DB954] text-white px-8 py-6 rounded-full hover:bg-[#1DB954]/90">
            List Your Startup
          </Button>
          <Button variant="outline" className="border-[#4892DB] text-[#4892DB] hover:bg-[#4892DB]/10 px-8 py-6 rounded-full">
            Join as Investor
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHY CHOOSE US + CTA ------------------------------ */
function WhyChooseUs() {
  const comparisons = [
    ["Scope", "Project-specific", "End-to-end lifecycle"],
    ["Technology", "Minimal involvement", "SaaS + AI-driven execution"],
    ["Collaboration", "Transactional", "Strategic Co-building"],
    ["Investor Access", "Rare", "Integrated in SaaS Network"],
    ["Cost Efficiency", "High retainers", "Modular, pay-per-growth"],
  ];

  return (
    <section className="py-24 px-4 text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl mb-10 bg-gradient-to-r from-[#4892DB] to-[#8b5cf6] bg-clip-text text-transparent"
      >
        Why Founders Choose StartupRunway
      </motion.h2>

      <div className="overflow-x-auto max-w-5xl mx-auto bg-[#131a3a]/70 border border-white/10 rounded-xl">
        <table className="w-full text-left text-gray-300 border-collapse">
          <thead>
            <tr className="bg-[#1DB954]/10 text-white">
              <th className="p-4">Feature</th>
              <th className="p-4">Agencies/Consultants</th>
              <th className="p-4">StartupRunway</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((c, i) => (
              <tr key={i} className="border-t border-white/10">
                <td className="p-4 font-semibold text-white">{c[0]}</td>
                <td className="p-4">{c[1]}</td>
                <td className="p-4 text-[#1DB954] font-medium">{c[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ------------------------------ MAIN EXPORT ------------------------------ */
export default function FoundersPage() {
  return (
    <div className="relative bg-[#0f1233] text-white overflow-hidden">
      <Header />
      <NeuralPulseBackground />
      <div className="relative z-10">
        <HeroSection />
        <FounderValueSections />
        <FoundersInvestorConnect />
        <WhyChooseUs />
      </div>
    </div>
  );
}

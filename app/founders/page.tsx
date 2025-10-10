'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Lightbulb, Users, TrendingUp, Cloud, Briefcase, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button'; // replace with <a> if not using shadcn

/* --------------------------------
   Header — Centered Logo & Name
---------------------------------- */
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 py-4 bg-transparent">
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image
          src="/images/startuprunway-logo.png"
          alt="StartupRunway Logo"
          width={40}
          height={40}
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
          StartupRunway
        </h1>
      </Link>
    </header>
  );
}

/* --------------------------------
   Subtle Neural Light Rays Background
---------------------------------- */
function LightRaysBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let raf: number;

    const rays = Array.from({ length: 16 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: 300 + Math.random() * 400,
      hue: [145, 210, 265][i % 3],
      speed: 0.2 + Math.random() * 0.3,
      angle: Math.random() * Math.PI * 2,
      blur: 60 + Math.random() * 100,
      alpha: 0.08 + Math.random() * 0.12,
    }));

    const draw = (t: number) => {
      ctx.fillStyle = 'rgba(10,14,39,0.3)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';

      rays.forEach((r, i) => {
        const x = r.x + Math.sin(t * 0.0005 + i) * 150;
        const y = r.y + Math.cos(t * 0.0003 + i) * 150;
        const g = ctx.createLinearGradient(x - r.len / 2, y, x + r.len / 2, y);
        g.addColorStop(0, `hsla(${r.hue}, 75%, 55%, 0)`);
        g.addColorStop(0.5, `hsla(${r.hue}, 75%, 65%, ${r.alpha})`);
        g.addColorStop(1, `hsla(${r.hue}, 75%, 55%, 0)`);

        ctx.strokeStyle = g;
        ctx.lineWidth = 80;
        ctx.shadowColor = `hsla(${r.hue}, 75%, 65%, ${r.alpha})`;
        ctx.shadowBlur = r.blur;
        ctx.beginPath();
        ctx.moveTo(x - r.len / 2, y);
        ctx.lineTo(x + r.len / 2, y);
        ctx.stroke();
      });

      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(draw);
    };

    draw(0);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}

/* --------------------------------
   Hero Section
---------------------------------- */
function Hero() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <p className="inline-block bg-white/10 text-gray-200 text-sm px-4 py-2 rounded-full mb-6">
          For Startup Founders & Visionary Leaders
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#1DB954] via-[#4892DB] to-[#8B5CF6] bg-clip-text text-transparent">
          StartupRunway — Empowering Startups to Grow
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          From idea to execution — we provide founders with strategic advisory, automation tools, and AI-ready cloud
          infrastructure through Neev Cloud to scale faster, smarter, and more affordably.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-[#1DB954] text-black font-semibold rounded-full px-8 py-4 hover:bg-[#17a44d]">
              Schedule Consultation
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="border-[#4892DB] text-[#4892DB] rounded-full px-8 py-4">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* --------------------------------
   Core Value Sections
---------------------------------- */
function ValueSections() {
  const sections = [
    {
      icon: Lightbulb,
      title: 'Strategic Business Consulting',
      desc: 'From business model validation to investor-ready roadmaps, StartupRunway helps founders shape strategies that work in the Indian and global markets.',
      color: '#1DB954',
    },
    {
      icon: Briefcase,
      title: 'Seamless Business Automation',
      desc: 'Our StartupRunway SaaS platform connects your CRM, HR, operations, and finance with automated workflows for maximum efficiency.',
      color: '#4892DB',
    },
    {
      icon: Cloud,
      title: 'AI Cloud Partnership with Neev Cloud',
      desc: 'High-performance GPU computing, India data residency, and scalable AI deployment — empowering India’s next generation of AI startups.',
      color: '#8B5CF6',
    },
    {
      icon: Users,
      title: 'Collaborations with Zoho & SaaS Partners',
      desc: 'Through technology partnerships, we provide access to Zoho tools, CRMs, and productivity apps customized for Indian startups.',
      color: '#1DB954',
    },
    {
      icon: TrendingUp,
      title: 'Funding & Growth Acceleration',
      desc: 'Pitch decks, fundraising strategy, investor networking, and mentorship for scalable startup growth.',
      color: '#4892DB',
    },
    {
      icon: CheckCircle2,
      title: 'Comprehensive Startup Ecosystem',
      desc: 'From legal compliance to team building and branding — we bring all startup services into one connected innovation hub.',
      color: '#8B5CF6',
    },
  ];

  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#1DB954] to-[#4892DB] bg-clip-text text-transparent">
          Founders’ Growth Ecosystem
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#131a3a]/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:shadow-lg hover:shadow-[#1DB954]/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${s.color}20` }}>
                  <Icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   CTA Section
---------------------------------- */
function CTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/10 via-[#4892DB]/10 to-[#8B5CF6]/10" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Ready to Build the Future?
        </motion.h2>
        <p className="text-gray-300 mb-8">
          Let’s turn your idea into a scalable business. StartupRunway combines SaaS automation, AI infrastructure, and expert strategy for modern founders.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-[#1DB954] text-black rounded-full px-8 py-4 font-semibold hover:bg-[#17a44d]">
              Book a Strategy Call
            </Button>
          </Link>
          <Link href="/partners">
            <Button variant="outline" className="border-[#4892DB] text-[#4892DB] rounded-full px-8 py-4">
              Explore Partnerships
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------
   Main Page Export
---------------------------------- */
export default function FoundersPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0e27] text-white overflow-hidden">
      <LightRaysBackground />
      <Header />
      <div className="relative z-10 pt-20">
        <Hero />
        <ValueSections />
        <CTA />
      </div>
    </main>
  );
}

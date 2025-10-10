'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, TrendingUp, CheckCircle2, Briefcase, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button'; // if missing, replace with <a> or <button>

/**
 * app/entrepreneurs/page.tsx
 * Entrepreneurs landing page — premium style with subtle moving light rays background.
 *
 * Color palette used:
 *  - primary: #1DB954 (green)
 *  - accent: #4892DB (blue)
 *  - highlight: #8B5CF6 (violet)
 *  - background: #0a0e27 / #0f1233
 *
 * Keep in same file for simplicity. All components are Client Components to use hooks/animation.
 */

/* -------------------------
   Header (centered, fixed)
   ------------------------- */
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 pointer-events-auto">
      <div className="w-full flex justify-center">
        <Link href="/" className="flex items-center gap-3 bg-transparent px-3 py-1 rounded-md hover:opacity-90 transition-opacity">
          <Image src="/images/startuprunway-logo.png" alt="StartupRunway Logo" width={40} height={40} />
          <span className="text-white text-xl md:text-2xl font-semibold tracking-tight">StartupRunway</span>
        </Link>
      </div>
    </header>
  );
}

/* -----------------------------------------
   Subtle Moving Light Rays Background (Canvas)
   - soft blurred streaks that slowly move
   - layered radial glows for depth
   ----------------------------------------- */
function LightRaysBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;

    // Light ray elements
    type Ray = {
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      thickness: number;
      hue: number;
      alpha: number;
      blur: number;
    };

    let rays: Ray[] = [];

    const palette = [
      { hue: 145, sat: 70, light: 50 }, // green ~ #1DB954
      { hue: 210, sat: 70, light: 55 }, // blue ~ #4892DB
      { hue: 265, sat: 60, light: 60 }, // violet ~ #8B5CF6
    ];

    const setup = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
      const count = Math.max(12, Math.round((width * height) / 200000)); // responsive density
      rays = [];
      for (let i = 0; i < count; i++) {
        const p = palette[i % palette.length];
        rays.push({
          x: Math.random() * width,
          y: Math.random() * height,
          length: Math.random() * Math.max(width, height) * 0.25 + 150,
          angle: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.12,
          thickness: 60 + Math.random() * 140,
          hue: p.hue,
          alpha: 0.05 + Math.random() * 0.12,
          blur: 30 + Math.random() * 80,
        });
      }
    };

    const draw = (t: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // subtle base gradient to give depth
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, 'rgba(10,14,39,1)');
      g.addColorStop(1, 'rgba(6,10,25,1)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // draw rays
      rays.forEach((r, i) => {
        // gently move ray positions in a loop
        r.x += Math.cos(t * 0.0003 + i) * r.speed * 6;
        r.y += Math.sin(t * 0.00025 + i) * r.speed * 6;
        r.angle += 0.0003 * (r.speed * 4);

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.translate(r.x, r.y);
        ctx.rotate(r.angle);

        // gradient for ray
        const grad = ctx.createLinearGradient(-r.length / 2, 0, r.length / 2, 0);
        // subtle multi-stop with palette hue
        const hue = r.hue;
        grad.addColorStop(0, `hsla(${hue}, 75%, 45%, 0)`);
        grad.addColorStop(0.25, `hsla(${hue}, 75%, 55%, ${r.alpha * 0.25})`);
        grad.addColorStop(0.5, `hsla(${hue}, 85%, 65%, ${r.alpha})`);
        grad.addColorStop(0.75, `hsla(${hue}, 75%, 55%, ${r.alpha * 0.25})`);
        grad.addColorStop(1, `hsla(${hue}, 75%, 45%, 0)`);

        ctx.fillStyle = grad;
        // create a rounded rectangle path for softer edges
        const halfH = r.thickness / 2;
        ctx.beginPath();
        ctx.moveTo(-r.length / 2, -halfH);
        ctx.quadraticCurveTo(-r.length / 2 + 40, -halfH, -r.length / 2 + 80, -halfH + 8);
        ctx.lineTo(r.length / 2 - 80, halfH - 8);
        ctx.quadraticCurveTo(r.length / 2 - 40, halfH, r.length / 2, halfH);
        ctx.lineTo(r.length / 2, -halfH);
        ctx.closePath();

        // shadow/blur for glow
        ctx.shadowColor = `hsla(${hue}, 75%, 60%, ${r.alpha * 0.8})`;
        ctx.shadowBlur = r.blur;
        ctx.fill();
        ctx.restore();
      });

      // soft foreground glows (random pulses)
      if (Math.random() < 0.02) {
        const gx = Math.random() * width;
        const gy = Math.random() * height;
        const gr = Math.min(width, height) * (0.08 + Math.random() * 0.18);
        const gp = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        const pick = palette[Math.floor(Math.random() * palette.length)];
        gp.addColorStop(0, `hsla(${pick.hue}, ${pick.sat}%, ${pick.light}%, 0.18)`);
        gp.addColorStop(1, `hsla(${pick.hue}, ${pick.sat}%, ${pick.light}%, 0)`);
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = gp;
        ctx.fillRect(gx - gr, gy - gr, gr * 2, gr * 2);
        ctx.globalCompositeOperation = 'source-over';
      }

      raf = requestAnimationFrame(draw);
    };

    setup();
    raf = requestAnimationFrame(draw);

    const onResize = () => {
      setup();
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}

/* -------------------------
   Hero Section
   ------------------------- */
function HeroSection() {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center text-center px-6 pt-24 pb-12">
      <div className="max-w-4xl mx-auto z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-white/6 text-gray-200 mb-4">
            For Founders & Entrepreneurs
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            Empowering Entrepreneurs to Build, Automate & Scale
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            StartupRunway combines strategic advisory, SaaS-driven automation, and AI-ready cloud infrastructure to
            accelerate startup growth — from MVP to market leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services" className="w-full sm:w-auto">
              <Button className="bg-[#1DB954] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#17a44d]">
                Explore Startup Packages
              </Button>
            </Link>

            <Link href="/partners" className="w-full sm:w-auto">
              <Button variant="outline" className="border-[#4892DB] text-[#4892DB] px-6 py-3 rounded-full">
                Partner with StartupRunway
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------
   Services Grid
   ------------------------- */
function ServicesGrid() {
  const services = [
    {
      icon: Lightbulb,
      title: 'Business Strategy & GTM',
      desc: 'Market validation, financial planning, pricing and investor-ready strategy.',
      color: '#1DB954',
    },
    {
      icon: Briefcase,
      title: 'Seamless Business Automation',
      desc: 'StartupRunway SaaS workflows (CRM, finance, HR, projects) integrated & automated.',
      color: '#4892DB',
    },
    {
      icon: Cloud,
      title: 'AI Cloud Infrastructure (Neev Cloud)',
      desc: 'GPU compute for training, India data residency, model deployment pipelines.',
      color: '#8B5CF6',
    },
    {
      icon: Target,
      title: 'Growth & Marketing',
      desc: 'Data-driven acquisition, brand & community building, event-based campaigns.',
      color: '#1DB954',
    },
    {
      icon: Users,
      title: 'Team & Culture',
      desc: 'Talent acquisition, org design, leadership coaching and culture workshops.',
      color: '#4892DB',
    },
    {
      icon: TrendingUp,
      title: 'Funding Support',
      desc: 'Pitch decks, investor relations, fundraising strategy & connections.',
      color: '#8B5CF6',
    },
  ];

  return (
    <section className="py-16 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-6">
          Tailored Services for Entrepreneurs
        </motion.h2>

        <p className="text-gray-400 mb-8 max-w-3xl">Integrated services that combine strategy, execution and automation.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white/3 p-6 rounded-2xl border border-white/6 hover:translate-y-[-6px] transform transition"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: `${s.color}20` }}>
                  <Icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------
   Why Choose Us
   ------------------------- */
function WhyChooseUs() {
  const reasons = [
    {
      title: 'SaaS-first Automation',
      desc: 'Operate efficiently using pre-built workflows on the StartupRunway SaaS platform — CRM, finance, HR, and projects connected.',
      color: '#1DB954',
    },
    {
      title: 'AI-Ready Infrastructure',
      desc: 'Neev Cloud partnership provides GPU infra, model hosting and India-compliant data residency for AI founders.',
      color: '#4892DB',
    },
    {
      title: 'End-to-End Execution',
      desc: 'Strategy, product, legal, growth and funding — all delivered as an integrated engagement.',
      color: '#8B5CF6',
    },
  ];

  return (
    <section className="py-16 px-6 z-10 bg-[#081026]/30">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Entrepreneurs Partner With StartupRunway
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">A unified partner for growth — combining automation, cloud, and execution expertise.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-[#0f1233] border border-white/6">
              <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-gray-300">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------
   Call to Action
   ------------------------- */
function CTA() {
  return (
    <section className="py-20 px-6 z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to accelerate your startup?
        </motion.h2>

        <p className="text-gray-300 mb-8">Book a free consultation and let’s build a tailored plan for your growth journey.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-[#1DB954] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#17a44d]">Book Consultation</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="border-white/10 text-white px-6 py-3 rounded-full">Explore Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------
   Page Export
   ------------------------- */
export default function EntrepreneursPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0e27] text-white overflow-hidden">
      <LightRaysBackground />
      <Header />
      <div className="relative z-10 pt-20">
        <HeroSection />
        <ServicesGrid />
        <WhyChooseUs />
        <CTA />
      </div>
    </main>
  );
}

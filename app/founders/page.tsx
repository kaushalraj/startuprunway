'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Rocket,
  Users,
  Lightbulb,
  Target,
  CheckCircle2,
  TrendingUp,
  Briefcase,
  Calendar,
} from 'lucide-react';
import { Button } from '@/components/ui/button'; // keep if exists; fallback to <a> if not

/**
 * founders/page.tsx
 * Founders landing page for StartupRunway
 *
 * Features:
 * - Animated subtle background (soft gradient + orbs)
 * - Hero section with CTAs
 * - "Why StartupRunway" value cards
 * - Services grid with pricing highlights
 * - Comparison table vs typical agencies
 * - CTA section (book consultation)
 *
 * Colors used (StartupRunway palette):
 * - primary: #1DB954
 * - havelock blue: #4892DB
 * - blue bayoux: #536F85
 * - deep background: #0a0e27 / #0f1233
 *
 * Note: keep the file in `app/founders/page.tsx` (App Router).
 */

/* ---------------------------
   Animated Background
   --------------------------- */
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let particles: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = ['rgba(29,185,84,0.9)', 'rgba(72,146,219,0.9)', 'rgba(83,111,133,0.9)'];

    const setSizeAndInit = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = Math.max(40, Math.floor((canvas.width * canvas.height) / 120000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 3 + 1.5,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15 - 0.02, // slight upward bias
          alpha: Math.random() * 0.5 + 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    setSizeAndInit();
    window.addEventListener('resize', setSizeAndInit);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // soft gradient overlay
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, 'rgba(10,14,39,0.55)'); // deep navy
      grad.addColorStop(0.5, 'rgba(5,12,40,0.55)');
      grad.addColorStop(1, 'rgba(6,10,25,0.55)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // draw particles (orbs)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // wrap around vertically for gentle flow
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // draw glow
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.9;
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // subtle connecting lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const pa = particles[a];
          const pb = particles[b];
          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            const alpha = (120 - dist) / 120 * 0.06;
            ctx.strokeStyle = pa.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', setSizeAndInit);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(180deg,#0a0e27 0%, #0f1233 100%)' }}
    />
  );
}

/* ---------------------------
   Small shared UI helpers
   --------------------------- */
const SectionContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">{children}</div>
);

/* ---------------------------
   Hero Section
   --------------------------- */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center py-24">
      <SectionContainer>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/30 mb-6">
            <Users className="w-4 h-4 text-[#1DB954]" />
            <span className="text-sm text-gray-300">For Startup Founders</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#1DB954] via-[#4892DB] to-[#536F85] bg-clip-text text-transparent">
            StartupRunway — Empowering Startups to Grow
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From Idea to Execution — We make startups succeed. An innovation hub + SaaS-powered network delivering
            strategy, product, funding and execution services end-to-end.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-[#1DB954] hover:bg-[#17a44d] text-black px-6 py-3 rounded-full font-semibold">
                Get Consultation
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button variant="outline" className="border-[#4892DB] text-[#4892DB] px-6 py-3 rounded-full">
                Explore Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}

/* ---------------------------
   Why StartupRunway (advantages)
   --------------------------- */
function WhyStartupRunway() {
  const items = [
    {
      title: 'Not just Consultancy — an Innovation Hub',
      icon: Lightbulb,
      desc: 'We combine advisory expertise with a SaaS-powered platform to connect services, vendors and partners seamlessly.',
      color: '#1DB954',
    },
    {
      title: 'End-to-End Execution',
      icon: Briefcase,
      desc: 'Strategy, product, legal, people and growth — delivered as an integrated service package across stages.',
      color: '#4892DB',
    },
    {
      title: 'Trusted Network & Local Delivery',
      icon: Users,
      desc: 'Bengaluru-rooted partners and pan-India collaborators ensure speed, quality and predictable costs.',
      color: '#536F85',
    },
  ];

  return (
    <section className="py-16">
      <SectionContainer>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why StartupRunway?</h2>
          <p className="text-gray-400 max-w-2xl mb-8">
            We’re built for founders — not as a vendor but as a partner. Our SaaS backbone, curated partner network,
            and end-to-end delivery model make the difference.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="bg-[#0f1233] rounded-2xl p-6 border border-white/6 hover:border-white/10 transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: `${it.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: it.color }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
                  <p className="text-gray-400">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}

/* ---------------------------
   Services Grid (with pricing highlights)
   --------------------------- */
function ServicesGrid() {
  const services = [
    {
      id: 'strategy',
      icon: Target,
      title: 'Business Strategy Consulting',
      bullets: ['Market research & analysis', 'Business model validation', 'Go-to-market strategy', 'Financial planning'],
      pricing: [
        { name: 'Starter', price: '₹50,000 – ₹75,000', note: 'Quick validation for founders' },
        { name: 'Professional', price: '₹1,50,000 – ₹2,50,000', note: 'In-depth advisory' },
        { name: 'Premium', price: '₹3,50,000 – ₹5,00,000', note: 'Investor-ready roadmap' },
      ],
      color: '#1DB954',
    },
    {
      id: 'office',
      icon: Briefcase,
      title: 'Office Setup',
      bullets: ['End-to-end interiors & furniture', 'Equipment & IT setup', 'Branding & workspace design'],
      pricing: [
        { name: 'Starter', price: '₹75,000 – ₹1,25,000', note: '1–5 people' },
        { name: 'Professional', price: '₹2,00,000 – ₹5,00,000', note: '5–15 people' },
        { name: 'Premium', price: '₹7,00,000 – ₹15,00,000', note: 'Turnkey setup' },
      ],
      color: '#4892DB',
    },
    {
      id: 'talent',
      icon: Users,
      title: 'Team Building',
      bullets: ['Talent acquisition & recruitment', 'Team structure optimization', 'Culture development workshops'],
      pricing: [
        { name: 'Talent Acquisition', price: '6% of CTC' },
        { name: 'Structure Optimization', price: '₹50,000 – ₹1,50,000' },
        { name: 'Culture Workshops', price: '₹30,000 – ₹1,00,000/session' },
      ],
      color: '#536F85',
    },
    {
      id: 'growth',
      icon: TrendingUp,
      title: 'Growth Marketing',
      bullets: ['Data-driven marketing', 'Customer acquisition', 'Event & offline campaigns'],
      pricing: [
        { name: 'Digital Marketing', price: '₹6,000 – ₹15,000/month' },
        { name: 'Growth Marketing', price: '₹20,000 – ₹50,000/month' },
        { name: 'Events', price: '₹50,000 – ₹1,50,000/event' },
      ],
      color: '#10b981',
    },
    {
      id: 'franchise',
      icon: Calendar,
      title: 'Franchise Model Designing',
      bullets: ['Operations manuals', 'Franchisee systems', 'Scalability design'],
      pricing: [{ name: 'Franchise Model', price: '₹6,00,000 – ₹15,00,000' }],
      color: '#1DB954',
    },
    {
      id: 'legal',
      icon: CheckCircle2,
      title: 'Legal & Compliance',
      bullets: ['Company registration', 'IP protection', 'Regulatory guidance'],
      pricing: [
        { name: 'Legal Setup', price: '₹15,000 – ₹25,000' },
        { name: 'IP Protection', price: '₹15,000 – ₹30,000/asset' },
        { name: 'Compliance Guidance', price: '₹20,000 – ₹40,000/year' },
      ],
      color: '#4892DB',
    },
    {
      id: 'product',
      icon: Lightbulb,
      title: 'Product Development',
      bullets: ['MVP development', 'Product strategy & roadmap', 'Technical architecture'],
      pricing: [
        { name: 'MVP Development', price: '₹1,50,000 – ₹8,00,000' },
        { name: 'Product Strategy', price: '₹2,00,000 – ₹7,00,000' },
        { name: 'Architecture', price: '₹3,00,000 – ₹12,00,000' },
      ],
      color: '#536F85',
    },
    {
      id: 'funding',
      icon: Rocket,
      title: 'Funding Support',
      bullets: ['Pitch deck development', 'Investor relations', 'Fundraising strategy'],
      pricing: [
        { name: 'Pitch Deck', price: '₹25,000 – ₹50,000' },
        { name: 'Investor Relations', price: '₹7,000 – ₹30,000/day' },
        { name: 'Strategy', price: 'Custom' },
      ],
      color: '#ff6b35',
    },
  ];

  return (
    <section className="py-16">
      <SectionContainer>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white mb-6">
          Services & Pricing (Bengaluru)
        </motion.h2>

        <p className="text-gray-400 mb-8 max-w-3xl">
          End-to-end solutions designed for startups: from strategy and product to people, operations and funding.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-[#0f1233] p-6 rounded-2xl border border-white/6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `${s.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>

                <ul className="text-gray-300 mb-4 space-y-2 ml-4 list-disc">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="space-y-2">
                  {s.pricing.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white/3 p-3 rounded-lg">
                      <div>
                        <div className="text-sm font-medium">{p.name}</div>
                        {p.note && <div className="text-xs text-gray-300">{p.note}</div>}
                      </div>
                      <div className="text-sm font-semibold">{p.price}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <Link href={`/services/${s.id}`}>
                    <a className="text-sm text-[#4892DB] font-medium hover:underline">Learn more</a>
                  </Link>
                  <Link href="/contact">
                    <a className="ml-auto text-sm bg-[#1DB954] text-black px-3 py-2 rounded-full font-semibold">Request Quote</a>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}

/* ---------------------------
   Comparison Table
   --------------------------- */
function Comparison() {
  const rows = [
    { feature: 'Approach', agency: 'Project-based', us: 'End-to-end lifecycle partner' },
    { feature: 'Tech Integration', agency: 'Minimal', us: 'SaaS-powered service platform' },
    { feature: 'Network', agency: 'Limited vendors', us: 'Curated nationwide partners' },
    { feature: 'Pricing', agency: 'Hidden margins', us: 'Transparent packages' },
    { feature: 'Scalability', agency: 'Static', us: 'Growth-ready & modular' },
  ];

  return (
    <section className="py-12">
      <SectionContainer>
        <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold text-white mb-4">
          How we compare vs typical agencies
        </motion.h3>

        <div className="overflow-auto rounded-xl border border-white/6">
          <table className="min-w-full text-left">
            <thead className="bg-[#0f1233]">
              <tr>
                <th className="p-4 text-sm text-gray-400">Feature</th>
                <th className="p-4 text-sm text-gray-400">Typical Agency</th>
                <th className="p-4 text-sm text-gray-400">StartupRunway</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white/2' : 'bg-transparent'}>
                  <td className="p-4 text-gray-200">{r.feature}</td>
                  <td className="p-4 text-gray-400">{r.agency}</td>
                  <td className="p-4 text-gray-100">{r.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>
    </section>
  );
}

/* ---------------------------
   Final CTA
   --------------------------- */
function FinalCTA() {
  return (
    <section className="py-20">
      <SectionContainer>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Next steps</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Schedule a consultation call, select the services you need, and get a customized proposal and timeline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="inline-flex items-center gap-3 bg-[#1DB954] text-black font-semibold px-6 py-3 rounded-full">Schedule a Call</a>
            </Link>
            <Link href="/services">
              <a className="inline-flex items-center gap-3 border border-white/8 text-white px-6 py-3 rounded-full">Select Services</a>
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-6">We partner with founders at every stage — from validation to scale.</p>
        </motion.div>
      </SectionContainer>
    </section>
  );
}

/* ---------------------------
   Page Export
   --------------------------- */
export default function FoundersPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0e27] text-white overflow-x-hidden">
      <AnimatedBackground />
      {/* Centered header/logo should be in your site layout - not included here */}
      <Hero />
      <WhyStartupRunway />
      <ServicesGrid />
      <Comparison />
      <FinalCTA />
      <footer className="py-10 text-center text-gray-500 text-sm">© {new Date().getFullYear()} StartupRunway — All rights reserved</footer>
    </main>
  );
}

// app/entrepreneurs/page.tsx
'use client';
import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Sparkles,
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Entrepreneurs Page
 * - Glassmorphism animated background (framer-motion)
 * - Hero, Packages, Timeline, Why Choose Us, CTA
 * - Uses same components/icons/animations as your other pages
 */

/* -------------------- Header -------------------- */
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 py-4 pointer-events-auto">
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image
          src="/images/startuprunway-logo.png"
          alt="StartupRunway Logo"
          width={30}
          height={30}
          priority
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white">StartupRunway</h1>
      </Link>
    </header>
  );
}

/* -------------------- Glass Background -------------------- */
/* Lightweight glassmorphism overlay using animated gradients + blur */
function GlassBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-[#071033] opacity-95" />

      {/* animated gradient blobs */}
      <motion.div
        aria-hidden
        initial={{ scale: 1, rotate: 0, x: '-10%', y: '-10%', opacity: 0.12 }}
        animate={{ x: ['-12%', '-6%', '-10%'], y: ['-10%', '-6%', '-10%'], rotate: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-5%] w-[46rem] h-[46rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), rgba(56,189,248,0.08) 30%, transparent 50%)'
        }}
      />

      <motion.div
        aria-hidden
        initial={{ scale: 1, rotate: 0, x: '60%', y: '40%', opacity: 0.12 }}
        animate={{ x: ['60%', '50%', '65%'], y: ['40%', '30%', '40%'], rotate: [0, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-8%] right-[-6%] w-[48rem] h-[48rem] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 70% 70%, rgba(139,92,246,0.16), rgba(16,185,129,0.06) 30%, transparent 50%)'
        }}
      />

      {/* Glass overlay with subtle shine animation */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0.06 }}
        animate={{ opacity: [0.06, 0.12, 0.06], rotate: [0, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{
          // backdrop filter + tiny border to create glass effect
          backdropFilter: 'blur(12px) saturate(110%)',
          WebkitBackdropFilter: 'blur(12px) saturate(110%)'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.00) 40%, rgba(255,255,255,0.01) 100%)',
            border: '1px solid rgba(255,255,255,0.03)'
          }}
        />
      </motion.div>

      {/* subtle diagonal shine move */}
      <motion.div
        aria-hidden
        initial={{ x: '-120%' }}
        animate={{ x: ['-120%', '120%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 top-0 w-80 h-full transform rotate-12 opacity-5"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.00) 60%)',
          mixBlendMode: 'overlay',
          filter: 'blur(20px)'
        }}
      />
    </div>
  );
}

/* -------------------- Hero Section -------------------- */
function HeroSection() {
  return (
    <section className="relative min-h-[78vh] flex items-center justify-center px-4 py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 pb-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/8 border border-[#ff6b35]/30 mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#ff6b35]" />
          <span className="text-gray-300">For Entrepreneurs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="text-4xl md:text-6xl lg:text-7xl leading-tight font-extrabold mb-6 bg-clip-text text-transparent"
          style={{
            background:
              'linear-gradient(90deg, #ff6b35 0%, #4a90e2 45%, #8b5cf6 100%)'
          }}
        >
          StartupRunway for Entrepreneurs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto"
        >
          The runway that helps startups take off faster — expert support from idea validation to market launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-4 rounded-full group">
            <Rocket className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Apply Now
          </Button>

          <Button variant="outline" className="border-[#4a90e2] text-[#4a90e2] hover:bg-[#4a90e2]/10 px-6 py-4 rounded-full">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- Packages Section -------------------- */
/* Replace package items with the exact package info from your site when ready */
function PackagesSection() {
  const packages = [
    {
      id: 'pkg-idea',
      title: 'Idea Validation & Research',
      desc: 'Market validation, competitor scan and product-market-fit insights.'
    },
    {
      id: 'pkg-setup',
      title: 'Company Setup & Compliance',
      desc: 'Registration, GST, compliance and legal basics handled for you.'
    },
    {
      id: 'pkg-brand',
      title: 'Branding & Digital Presence',
      desc: 'Name, logo, website and go-to-market marketing strategy.'
    },
    {
      id: 'pkg-mvp',
      title: 'MVP & Product Development',
      desc: 'Build, test and iterate an initial product for early users.'
    },
    {
      id: 'pkg-scale',
      title: 'Operations & Scaling',
      desc: 'From hiring to processes — operational readiness to scale.'
    },
    {
      id: 'pkg-franchise',
      title: 'Franchise Model Design',
      desc: 'Design a repeatable and scalable franchise model (if applicable).'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl mb-3" style={{ background: 'linear-gradient(90deg,#ff6b35,#4a90e2)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Our Packages
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Choose the package that best fits your startup stage. (Full package details available on startuprunway.in)</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-[rgba(255,255,255,0.02)] border border-white/6 rounded-2xl p-6 backdrop-blur-md"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <div className="text-sm text-gray-400">Package</div>
            </div>
            <p className="text-gray-300 mb-5">{p.desc}</p>
            <div className="flex gap-3">
              <Button className="bg-[#ff6b35] px-4 py-2 rounded-full text-sm">Select Package</Button>
              <Button variant="outline" className="px-4 py-2 rounded-full text-sm">Learn More</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- How It Works (Timeline) -------------------- */
function HowItWorks() {
  const steps = [
    { icon: Lightbulb, title: 'Validate Idea', desc: 'Idea refinement, market fit & research' },
    { icon: Target, title: 'Plan & Pitch', desc: 'Business plan, pitch decks & investor readiness' },
    { icon: Users, title: 'Build Team', desc: 'Hiring, operations setup, and process design' },
    { icon: TrendingUp, title: 'Launch & Scale', desc: 'Go-to-market, growth & scaling support' }
  ];

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl mb-3">How We Work</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A simple, step-by-step partnership to launch and scale your startup.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="bg-[rgba(255,255,255,0.02)] border border-white/6 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <div className="mx-auto w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <Icon className="w-7 h-7 text-[#ff6b35]" />
              </div>
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------- Why Choose Us -------------------- */
function WhyChooseUs() {
  const benefits = [
    { icon: Users, title: 'End-to-end Execution', desc: 'We don’t only advise — we design and implement.' },
    { icon: Target, title: 'Franchise Expertise', desc: 'Franchise design & scaling knowledge.' },
    { icon: Lightbulb, title: 'Sector Agnostic', desc: 'IT, non-IT, pharma, food and more.' },
    { icon: CheckCircle2, title: 'Trusted Partners', desc: 'Network of CAs, lawyers, developers & mentors.' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl mb-3">Why Choose StartupRunway?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">One-stop support to build, launch and scale — with implementation focus.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2">
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 items-start bg-[rgba(255,255,255,0.02)] border border-white/6 rounded-xl p-5 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <Icon className="w-6 h-6 text-[#4a90e2]" />
              </div>
              <div>
                <h4 className="text-white font-semibold">{b.title}</h4>
                <p className="text-gray-300">{b.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------- CTA Section (homepage style) -------------------- */
function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] opacity-6 -z-10" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="inline-block mb-6">
            <Rocket className="w-14 h-14 text-[#ff6b35]" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl mb-4 text-white">Ready to Launch Your Startup?</h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">Don’t let your idea stay just an idea. Apply now and let StartupRunway guide you to success.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/90 px-6 py-3 rounded-full group">
              Apply to StartupRunway
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- Page Export -------------------- */
export default function EntrepreneursPage() {
  return (
    <main className="relative bg-[#071033] text-white min-h-screen pt-20 overflow-x-hidden">
      <GlassBackground />
      <Header />

      <div className="relative z-10">
        <HeroSection />
        <PackagesSection />
        <HowItWorks />
        <WhyChooseUs />
        <CTASection />
      </div>
    </main>
  );
}

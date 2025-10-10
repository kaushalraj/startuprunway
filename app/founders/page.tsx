'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Cpu, Cloud, Zap, Users, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Smooth Particle Background
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvas();
    window.addEventListener('resize', setCanvas);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1,
      color: ['#1DB954', '#4892DB', '#8B5CF6'][Math.floor(Math.random() * 3)]
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };
    draw();
    return () => window.removeEventListener('resize', setCanvas);
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 text-center">
      <div className="z-10 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#1DB954] via-[#4892DB] to-[#8B5CF6] bg-clip-text text-transparent"
        >
          Empowering Founders to Build, Automate & Scale
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-xl md:text-2xl text-gray-300"
        >
          StartupRunway isn’t just consultancy — it’s an innovation hub driving India’s next-gen startups.
        </motion.p>
        <Link
          href="/contact"
          className="inline-block mt-10 bg-[#1DB954] text-white px-8 py-4 rounded-full hover:bg-[#17a44d] transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

// Core Services
function CoreServices() {
  const services = [
    {
      icon: Layers,
      title: 'Business Strategy & Consulting',
      description:
        'From validation to go-to-market plans, we design strategies that attract investors and accelerate growth.'
    },
    {
      icon: Cpu,
      title: 'Product & Technology Development',
      description:
        'End-to-end SaaS, AI & MVP development with automation, scalability, and rapid deployment in mind.'
    },
    {
      icon: Settings,
      title: 'Seamless Business Automation Workflows',
      description:
        'Operate your startup with the StartupRunway SaaS Platform — automating HR, CRM, finance & project workflows.'
    },
    {
      icon: Cloud,
      title: 'AI Cloud Infrastructure with Neev Cloud',
      description:
        'Access GPU-powered AI compute, pay-per-use scalability, and India-based data compliance through Neev Cloud.'
    },
    {
      icon: Users,
      title: 'Partnership Ecosystem',
      description:
        'Integrated with Zoho, AWS, Azure, and GCP — providing credits, tools, and automation support to every founder.'
    }
  ];

  return (
    <section className="relative py-20 px-6 z-10 bg-[#0A0E27]/70">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-white">
          End-to-End Solutions for Visionary Founders
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#131a3a] border border-white/10 p-8 rounded-2xl hover:border-[#1DB954]/40 hover:shadow-xl hover:shadow-[#1DB954]/10 transition-all"
              >
                <Icon className="w-10 h-10 text-[#1DB954] mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-3">{srv.title}</h3>
                <p className="text-gray-400 text-sm">{srv.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// AI Startup Growth
function AIStartups() {
  return (
    <section className="relative py-24 px-6 bg-[#0A0E27] z-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-[#1DB954] to-[#4892DB] bg-clip-text text-transparent"
        >
          Powering India’s AI Startup Revolution
        </motion.h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Through our partnership with Neev Cloud, StartupRunway provides an integrated ecosystem for AI founders —
          from infrastructure to funding, with automation and compliance built-in.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            'GPU-powered compute for AI/ML model training',
            'Localized data compliance & privacy within India',
            'Cloud credits & advisory support',
            'Seamless AI model deployment pipelines',
            'Cost-optimized infra — up to 40% savings',
            'StartupRunway SaaS integration for automated workflows'
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#1DB954] mt-1" />
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="relative py-24 text-center z-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl text-white font-bold mb-6"
        >
          Partner. Automate. Scale.
        </motion.h2>
        <p className="text-gray-300 text-lg mb-10">
          Join StartupRunway and Neev Cloud to accelerate your AI-powered startup journey — with automation, innovation, and collaboration.
        </p>
        <Link
          href="/contact"
          className="bg-[#1DB954] text-white px-10 py-4 rounded-full text-lg hover:bg-[#17a44d] transition"
        >
          Join StartupRunway
        </Link>
      </div>
    </section>
  );
}

// Main Page Component
export default function FoundersPage() {
  return (
    <main className="relative min-h-screen bg-[#0A0E27] overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <CoreServices />
        <AIStartups />
        <CTA />
      </div>
    </main>
  );
}

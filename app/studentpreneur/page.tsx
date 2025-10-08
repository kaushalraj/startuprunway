'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Target, Users, TrendingUp, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Particle Background
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 100;
    const colors = ['#ff6b35', '#4a90e2', '#8b5cf6', '#10b981'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();

        // Connections
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = ((150 - dist) / 150) * 0.3;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: 'transparent' }} />;
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10">
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
          className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent"
        >
          Welcome to StartupRunway
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto"
        >
          Your Launchpad to Startup Success
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Transform your software idea into reality with guidance every step of the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-6 rounded-full group">
            <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
            Apply Now
          </Button>
          <Button variant="outline" className="border-[#4a90e2] text-[#4a90e2] hover:bg-[#4a90e2]/10 px-8 py-6 rounded-full">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Program Timeline
function ProgramTimeline() {
  const year1Quarters = [
    {
      quarter: 'Q1',
      title: 'Ideation & Validation',
      items: ['Refine idea', 'Market research', 'Develop MVP'],
      icon: Lightbulb,
      color: '#ff6b35',
    },
    {
      quarter: 'Q2',
      title: 'Legal & Compliance',
      items: ['Register company', 'Set legal structures', 'Ensure compliance'],
      icon: CheckCircle2,
      color: '#4a90e2',
    },
    {
      quarter: 'Q3',
      title: 'Branding & Marketing',
      items: ['Brand identity', 'Marketing strategy', 'Launch campaigns'],
      icon: Target,
      color: '#8b5cf6',
    },
    {
      quarter: 'Q4',
      title: 'Funding & Networking',
      items: ['Pitch decks', 'Connect investors', 'Secure funding'],
      icon: TrendingUp,
      color: '#10b981',
    },
  ];

  const year2Quarters = [
    {
      quarter: 'Q5',
      title: 'Product Development',
      items: ['Enhance MVP', 'Develop features', 'Test & iterate'],
      icon: Lightbulb,
      color: '#4a90e2',
    },
    {
      quarter: 'Q6',
      title: 'Sales & Customer Acquisition',
      items: ['Sales strategy', 'Acquire customers', 'Optimize channels'],
      icon: Users,
      color: '#8b5cf6',
    },
    {
      quarter: 'Q7',
      title: 'Operations & Team Building',
      items: ['Streamline operations', 'Build team', 'Company culture'],
      icon: CheckCircle2,
      color: '#10b981',
    },
    {
      quarter: 'Q8',
      title: 'Expansion & Growth',
      items: ['Explore markets', 'Scale operations', 'Prepare funding rounds'],
      icon: TrendingUp,
      color: '#ff6b35',
    },
  ];

  const renderQuarter = (quarter: any, index: number) => {
    const Icon = quarter.icon;
    return (
      <motion.div
        key={quarter.quarter}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#ff6b35]/10 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${quarter.color}20` }}>
            <Icon className="w-6 h-6" style={{ color: quarter.color }} />
          </div>
          <div>
            <div className="text-sm" style={{ color: quarter.color }}>
              {quarter.quarter}
            </div>
            <h4 className="text-white">{quarter.title}</h4>
          </div>
        </div>
        <ul className="space-y-2">
          {quarter.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: quarter.color }} />
              <span className="text-gray-400">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Studentpreneur Program Timeline</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Two-year program designed to take your idea from concept to successful startup.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {year1Quarters.map(renderQuarter)}
          {year2Quarters.map(renderQuarter)}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us
function WhyChooseUs() {
  const features = [
    { title: 'Mentorship by Experts', icon: Users, color: '#ff6b35' },
    { title: 'Hands-on Experience', icon: Sparkles, color: '#4a90e2' },
    { title: 'Funding Opportunities', icon: TrendingUp, color: '#8b5cf6' },
  ];

  return (
    <section className="py-20 px-4 relative z-10 bg-[#0f1223]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Why Choose StartupRunway?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">We equip student entrepreneurs with the skills, network, and resources needed to succeed.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#131a3a] rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-[#ff6b35]/10 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: `${f.color}20` }}>
                <Icon className="w-8 h-8" style={{ color: f.color }} />
              </div>
              <h4 className="text-white text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-400">Get guided mentorship and real-world experience to turn ideas into revenue-generating startups.</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// CTA
function CTASection() {
  return (
    <section className="py-20 px-4 relative z-10 text-center">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold text-white mb-4">
        Ready to Launch Your Startup?
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gray-400 mb-8">
        Join the Studentpreneur Program and transform your idea into a successful venture.
      </motion.p>
      <Button className="bg-[#ff6b35] text-white px-8 py-6 rounded-full hover:bg-[#ff6b35]/90">
        Apply Now <ArrowRight className="w-5 h-5 ml-2 inline-block" />
      </Button>
    </section>
  );
}

// Page Export
export default function StudentpreneurPage() {
  return (
    <div className="relative bg-[#0f1223] min-h-screen overflow-hidden">
      <ParticleBackground />
      <HeroSection />
      <ProgramTimeline />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Target, Users, TrendingUp, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ===== Background Animation =====
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; }[] = [];
    const colors = ['#ff6b35', '#4a90e2', '#8b5cf6', '#10b981'];
    const particleCount = 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize particles
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: Math.random() * 2.5 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      if (!ctx) return;
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

        // connect close particles
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (120 - dist) / 120 * 0.3;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: 'transparent' }} />;
}

// ===== Hero Section =====
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
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
          StartupRunway
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
        >
          Transform your software idea into a real startup. Guided, structured, and student-first.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-6 rounded-full group flex items-center justify-center gap-2">
            <Rocket className="w-5 h-5" /> Apply Now
          </Button>
          <Button variant="outline" className="border-[#4a90e2] text-[#4a90e2] hover:bg-[#4a90e2]/10 px-8 py-6 rounded-full">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ===== Program Timeline =====
function ProgramTimeline() {
  const quarters = [
    { quarter: 'Q1', title: 'Ideation & Validation', items: ['Refine idea', 'Market research', 'Build MVP'], color: '#ff6b35', icon: Lightbulb },
    { quarter: 'Q2', title: 'Legal & Compliance', items: ['Register company', 'Compliance checks'], color: '#4a90e2', icon: CheckCircle2 },
    { quarter: 'Q3', title: 'Branding & Marketing', items: ['Brand identity', 'Marketing strategy'], color: '#8b5cf6', icon: Target },
    { quarter: 'Q4', title: 'Funding & Networking', items: ['Pitch decks', 'Connect investors'], color: '#10b981', icon: TrendingUp },
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl mb-12 text-center bg-gradient-to-r from-[#ff6b35] to-[#4a90e2] bg-clip-text text-transparent">
          2-Year Student Acceleration Program
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {quarters.map((q, i) => {
            const Icon = q.icon;
            return (
              <motion.div key={q.quarter} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${q.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: q.color }} />
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: q.color }}>{q.quarter}</div>
                    <h4 className="text-white">{q.title}</h4>
                  </div>
                </div>
                <ul className="space-y-2">
                  {q.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 mt-1 text-[#4a90e2]" />
                      {item}
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

// ===== CTA Section =====
function CTASection() {
  return (
    <section className="py-20 px-4 bg-[#0f1233] relative z-10 text-center">
      <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl mb-6 text-white font-semibold">
        Ready to Launch Your Startup?
      </motion.h3>
      <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-10 py-6 rounded-full inline-flex items-center justify-center gap-2">
        <Rocket className="w-5 h-5" /> Apply Now
      </Button>
    </section>
  );
}

// ===== Full Page =====
export default function StudentpreneurPage() {
  return (
    <main className="relative bg-[#0f1233] text-white overflow-hidden">
      <AnimatedBackground />
      <HeroSection />
      <ProgramTimeline />
      <CTASection />
    </main>
  );
}

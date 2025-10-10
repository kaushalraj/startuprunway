'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Target, Users, TrendingUp, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const dynamic = "force-dynamic";
export const revalidate = 0;


// ---------- Header ----------
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 py-4 bg-transparent">
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image src="/images/startuprunway-logo.png" alt="StartupRunway Logo" width={30} height={30} />
        <h1 className="text-2xl md:text-3xl font-bold text-white">StartupRunway</h1>
      </Link>
    </header>
  );
}

// ---------- Particle Background ----------
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
      x: number; y: number; vx: number; vy: number; size: number; color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 80;
    const colors = ['#ff6b35', '#4a90e2', '#8b5cf6', '#10b981'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();

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
            ctx.globalAlpha = (150 - dist) / 150 * 0.3;
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

// ---------- Hero Section ----------
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 pb-2 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6b35]/10 border border-[#ff6b35]/30 mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#ff6b35]" />
          <span className="text-gray-300">For Entrepreneurs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl leading-[1.2] md:leading-[1.3] mb-6 bg-gradient-to-r from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent"
        >
          StartupRunway for Entrepreneurs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto"
        >
          The runway that helps startups take off faster, from idea to launch.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Are you an aspiring entrepreneur or professional with a bold idea? StartupRunway provides end-to-end support to launch, scale, and succeed in India’s startup ecosystem.
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

// ---------- Packages Section ----------
function PackagesSection() {
  const packages = [
    { name: 'Idea Validation & Market Research', description: 'Validate your startup idea with market insights.' },
    { name: 'Company Registration & Compliance', description: 'Set up legally compliant companies hassle-free.' },
    { name: 'Branding & Digital Presence', description: 'Logo, website, and marketing support for your brand.' },
    { name: 'Business Planning & Investor Pitch', description: 'Business plans and pitch decks for investors.' },
    { name: 'Product Development & MVP Launch', description: 'Turn your concept into a working MVP.' },
    { name: 'Operations & Team Building', description: 'Build strong teams and scale operations efficiently.' }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#ff6b35] to-[#4a90e2] bg-clip-text text-transparent">Our Packages</h2>
        <p className="text-lg text-gray-400">Select the package that fits your startup journey</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#131a3a] p-6 rounded-2xl border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#ff6b35]/10 transition-all duration-300"
          >
            <h3 className="text-xl text-white mb-2">{pkg.name}</h3>
            <p className="text-gray-400">{pkg.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- How It Works Section ----------
function HowItWorksSection() {
  const steps = [
    { icon: Lightbulb, title: 'Idea Validation', description: 'We help refine your idea and define market fit.' },
    { icon: Target, title: 'Business Planning', description: 'Create actionable plans and strategies.' },
    { icon: Users, title: 'Team & Operations', description: 'Build your team and organize operations.' },
    { icon: TrendingUp, title: 'Scale & Growth', description: 'Support for scaling your business efficiently.' }
  ];

  return (
    <section className="py-20 px-4 bg-[#0f1233] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-4">How It Works</h2>
        <p className="text-lg text-gray-400">Step-by-step support to turn your idea into a successful startup.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#131a3a] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
            >
              <Icon className="w-10 h-10 mx-auto text-[#ff6b35] mb-4" />
              <h3 className="text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ---------- Why Choose Us Section ----------
function WhyChooseUsSection() {
  const points = [
    'End-to-end execution: Idea to launch',
    'Franchise model expertise',
    'One-stop solution: Branding, legal, marketing, compliance',
    'Expert network of CAs, lawyers, and developers',
    'PAN India support with virtual consulting'
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#ff6b35] to-[#4a90e2] bg-clip-text text-transparent">Why Choose Us</h2>
        <p className="text-lg text-gray-400">We’re not just consultants, we help you build businesses.</p>
      </div>
      <div className="max-w-3xl mx-auto grid gap-6">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-3 bg-[#131a3a] p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <CheckCircle2 className="w-6 h-6 text-[#ff6b35]" />
            <p className="text-gray-200">{point}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ---------- CTA Section ----------
function CTASectionEntrepreneurs() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#0f1233]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] opacity-10" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <Rocket className="w-16 h-16 text-[#ff6b35]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">Ready to Launch Your Startup?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Don’t let your idea stay just an idea. Apply now and let StartupRunway guide you to success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/90 px-8 py-6 rounded-full group">
              Apply to StartupRunway
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full">
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- Page ----------
export default function EntrepreneursPage() {
  return (
    <main className="relative bg-[#0f1233]">
      <Header />
      <ParticleBackground />
      <HeroSection />
      <PackagesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <CTASectionEntrepreneurs />
    </main>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Target, Users, TrendingUp, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ----------------------------
// Soft Floating Orbs Background
// ----------------------------
function OrbsBackground() {
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

    interface Orb {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }

    const orbs: Orb[] = [];
    const orbCount = 60;

    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29, 185, 84, ${orb.alpha})`; // primary green
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: '#0a0e27' }} />;
}

// ----------------------------
// Hero Section
// ----------------------------
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DB954]/20 border border-[#1DB954]/40 mb-6"
      >
        <Sparkles className="w-4 h-4 text-[#1DB954]" />
        <span className="text-gray-300">For Student Entrepreneurs</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#1DB954] via-[#4892DB] to-[#536F85] bg-clip-text text-transparent font-bold"
      >
        Welcome to StartupRunway
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto"
      >
        Your Launchpad to Startup Success. Transform your software idea into reality with expert guidance every step of the way.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Button className="bg-[#1DB954] hover:bg-[#1DB954]/90 text-white px-8 py-6 rounded-full group flex items-center justify-center">
          <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
          Apply Now
        </Button>
        <Button variant="outline" className="border-[#4892DB] text-[#4892DB] hover:bg-[#4892DB]/10 px-8 py-6 rounded-full">
          Learn More
        </Button>
      </motion.div>
    </section>
  );
}

// ----------------------------
// Program Timeline
// ----------------------------
function ProgramTimeline() {
  const year1Quarters = [
    {
      quarter: 'Q1',
      title: 'Ideation & Validation',
      items: ['Refine your software idea', 'Conduct market research', 'Develop a Minimum Viable Product (MVP)'],
      icon: Lightbulb,
      color: '#1DB954'
    },
    {
      quarter: 'Q2',
      title: 'Legal & Compliance',
      items: ['Register your company', 'Set up legal structures', 'Ensure compliance with regulations'],
      icon: CheckCircle2,
      color: '#4892DB'
    },
    {
      quarter: 'Q3',
      title: 'Branding & Marketing',
      items: ['Create a compelling brand identity', 'Develop a marketing strategy', 'Launch initial marketing campaigns'],
      icon: Target,
      color: '#536F85'
    },
    {
      quarter: 'Q4',
      title: 'Funding & Networking',
      items: ['Prepare pitch decks', 'Connect with investors', 'Secure initial funding'],
      icon: TrendingUp,
      color: '#10b981'
    }
  ];

  const year2Quarters = [
    {
      quarter: 'Q5',
      title: 'Product Development',
      items: ['Enhance your MVP based on feedback', 'Develop additional features', 'Test and iterate'],
      icon: Lightbulb,
      color: '#4892DB'
    },
    {
      quarter: 'Q6',
      title: 'Sales & Customer Acquisition',
      items: ['Develop a sales strategy', 'Acquire initial customers', 'Optimize customer acquisition channels'],
      icon: Users,
      color: '#536F85'
    },
    {
      quarter: 'Q7',
      title: 'Operations & Team Building',
      items: ['Streamline operations', 'Build a strong team', 'Establish company culture'],
      icon: CheckCircle2,
      color: '#10b981'
    },
    {
      quarter: 'Q8',
      title: 'Expansion & Growth',
      items: ['Explore new markets', 'Scale operations', 'Prepare for future funding rounds'],
      icon: TrendingUp,
      color: '#1DB954'
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#1DB954] to-[#4892DB] bg-clip-text text-transparent font-bold">
            Our 2-Year Startup Acceleration Program
          </h2>
          <p className="text-lg text-gray-400">A comprehensive journey from idea to market leader</p>
        </motion.div>

        {/* Year 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-3xl text-white">Year 1: Laying the Foundation</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {year1Quarters.map((quarter, index) => {
              const Icon = quarter.icon;
              return (
                <motion.div
                  key={quarter.quarter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#1DB954]/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${quarter.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: quarter.color }} />
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: quarter.color }}>{quarter.quarter}</div>
                      <h4 className="text-white">{quarter.title}</h4>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {quarter.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: quarter.color }} />
                        <span className="text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Year 2 */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#4892DB] flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-3xl text-white">Year 2: Scaling Up</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {year2Quarters.map((quarter, index) => {
              const Icon = quarter.icon;
              return (
                <motion.div
                  key={quarter.quarter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#4892DB]/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${quarter.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: quarter.color }} />
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: quarter.color }}>{quarter.quarter}</div>
                      <h4 className="text-white">{quarter.title}</h4>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {quarter.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4

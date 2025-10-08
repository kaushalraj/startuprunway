'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Target, Users, TrendingUp, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Header
function Header() {
  return (
    <header className="flex items-center gap-3 px-6 py-4">
      <Image src="/images/startuprunway-logo.png" alt="StartupRunway Logo" width={50} height={50} />
      <h1 className="text-2xl md:text-3xl font-bold text-white">StartupRunway</h1>
    </header>
  );
}




// Particle Background Component
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

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();

        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (150 - distance) / 150 * 0.3;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10 pb-2 overflow-visible ">
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
          className="text-5xl md:text-7xl leading-[1.2] md:leading-[1.3] mb-6 bg-gradient-to-r from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent"
        >
          Studentpreneur Program
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto"
        >
         StartupRunway - Transforming Students Into Startup Founders
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Are you a passionate student with a groundbreaking idea? It's time to transform that idea into reality. StartupRunway is here to guide you every step of the way.
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-12"
        >
          <div className="text-center">
            <div className="text-4xl text-[#ff6b35] mb-2">2</div>
            <div className="text-sm text-gray-400">Years Program</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#4a90e2] mb-2">8</div>
            <div className="text-sm text-gray-400">Quarters</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-[#8b5cf6] mb-2">∞</div>
            <div className="text-sm text-gray-400">Possibilities</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#ff6b35]/20 to-[#4a90e2]/20 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#4a90e2]/20 to-[#8b5cf6]/20 blur-xl"
      />
    </section>
  );
}

// Program Timeline Component
function ProgramTimeline() {
  const year1Quarters = [
    {
      quarter: 'Q1',
      title: 'Ideation & Validation',
      items: [
        'Refine your software idea',
        'Conduct market research',
        'Develop a Minimum Viable Product (MVP)'
      ],
      icon: Lightbulb,
      color: '#ff6b35'
    },
    {
      quarter: 'Q2',
      title: 'Legal & Compliance',
      items: [
        'Register your company',
        'Set up legal structures',
        'Ensure compliance with regulations'
      ],
      icon: CheckCircle2,
      color: '#4a90e2'
    },
    {
      quarter: 'Q3',
      title: 'Branding & Marketing',
      items: [
        'Create a compelling brand identity',
        'Develop a marketing strategy',
        'Launch initial marketing campaigns'
      ],
      icon: Target,
      color: '#8b5cf6'
    },
    {
      quarter: 'Q4',
      title: 'Funding & Networking',
      items: [
        'Prepare pitch decks',
        'Connect with potential investors',
        'Secure initial funding'
      ],
      icon: TrendingUp,
      color: '#10b981'
    }
  ];

  const year2Quarters = [
    {
      quarter: 'Q5',
      title: 'Product Development',
      items: [
        'Enhance your MVP based on feedback',
        'Develop additional features',
        'Test and iterate'
      ],
      icon: Lightbulb,
      color: '#4a90e2'
    },
    {
      quarter: 'Q6',
      title: 'Sales & Customer Acquisition',
      items: [
        'Develop a sales strategy',
        'Acquire initial customers',
        'Optimize customer acquisition channels'
      ],
      icon: Users,
      color: '#8b5cf6'
    },
    {
      quarter: 'Q7',
      title: 'Operations & Team Building',
      items: [
        'Streamline operations',
        'Build a strong team',
        'Establish company culture'
      ],
      icon: CheckCircle2,
      color: '#10b981'
    },
    {
      quarter: 'Q8',
      title: 'Expansion & Growth',
      items: [
        'Explore new markets',
        'Scale operations',
        'Prepare for future funding rounds'
      ],
      icon: TrendingUp,
      color: '#ff6b35'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#ff6b35] to-[#4a90e2] bg-clip-text text-transparent">
            Our 2-Year Startup Acceleration Program
          </h2>
          <p className="text-lg text-gray-400">A comprehensive journey from idea to market leader</p>
        </motion.div>

        {/* Year 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#ff6b35] flex items-center justify-center text-white">1</div>
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
                  className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#ff6b35]/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${quarter.color}20` }}
                    >
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
        </motion.div>

        {/* Year 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#4a90e2] flex items-center justify-center text-white">2</div>
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
                  className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-[#4a90e2]/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${quarter.color}20` }}
                    >
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
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Component
function WhyChooseUs() {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Receive mentorship from industry leaders who have been there and done that.',
      color: '#ff6b35'
    },
    {
      icon: Target,
      title: 'Comprehensive Support',
      description: 'From ideation to scaling, we provide end-to-end support for your startup journey.',
      color: '#4a90e2'
    },
    {
      icon: TrendingUp,
      title: 'Access to Investors',
      description: 'Connect with investors who believe in your vision and are ready to back you.',
      color: '#8b5cf6'
    },
    {
      icon: Lightbulb,
      title: 'Tailored Solutions',
      description: 'Customized strategies designed specifically for your unique startup needs.',
      color: '#10b981'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent">
            Why Choose StartupRunway?
          </h2>
          <p className="text-lg text-gray-400">Everything you need to succeed, all in one place</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-[#131a3a] border border-white/10 hover:border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <Icon className="w-8 h-8" style={{ color: benefit.color }} />
                </div>
                <h3 className="text-2xl mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] opacity-20" />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b35] rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#4a90e2] rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <Rocket className="w-16 h-16 text-[#ff6b35]" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Ready to Take Off?
          </h2>
          
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Don't let your idea stay just an idea. Apply now and let's build the future together.
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

          <p className="mt-8 text-gray-400 text-sm">
            Join hundreds of student entrepreneurs who are already building the future
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0e27] overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <div className="relative z-10">
        <HeroSection />
        <ProgramTimeline />
        <WhyChooseUs />
        <CTASection />
      </div>
    </div>
  );
}

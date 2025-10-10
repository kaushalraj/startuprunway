'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StartupRunwayLogo from '@/public/startuprunway-logo.png'; // Update path accordingly

export default function EntrepreneursPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Neural Pulse Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const nodeCount = 100;

    const colors = ['#1DB954', '#4892DB', '#8B5CF6'];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );
        gradient.addColorStop(0, colors[Math.floor(Math.random() * colors.length)]);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(137, 92, 246, ${1 - distance / 150})`; // Violet accent with fading
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Framer Motion Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full h-full text-white font-sans overflow-x-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />

      {/* Header */}
      <header className="flex flex-col items-center justify-center py-8">
        <Image src={StartupRunwayLogo} alt="StartupRunway Logo" className="w-36 h-auto" />
        <h1 className="text-4xl md:text-5xl font-bold mt-4 text-center">
          Empowering Entrepreneurs to Innovate & Scale
        </h1>
      </header>

      {/* Hero Section */}
      <motion.section
        className="text-center px-4 md:px-20 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          StartupRunway isn’t just another consultancy — we combine business strategy, SaaS automation, AI
          infrastructure, and growth consulting to help entrepreneurs turn ideas into scalable startups.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          <button className="bg-[#1DB954] hover:bg-[#17a44a] text-white px-6 py-3 rounded-lg font-medium transition">
            Schedule a Strategy Call
          </button>
          <button className="bg-[#4892DB] hover:bg-[#3b7cc9] text-white px-6 py-3 rounded-lg font-medium transition">
            Explore Partnership Programs
          </button>
        </div>
      </motion.section>

      {/* Value Sections */}
      <section className="px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Business Strategy */}
        <motion.div
          className="bg-gradient-to-r from-[#1DB954]/30 via-[#1DB954]/20 to-[#1DB954]/10 p-6 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4">Business Strategy & Consulting</h2>
          <p>Market validation, GTM roadmap, investor strategy, and funding prep for entrepreneurs.</p>
        </motion.div>

        {/* AI & Cloud */}
        <motion.div
          className="bg-gradient-to-r from-[#4892DB]/30 via-[#4892DB]/20 to-[#4892DB]/10 p-6 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4">AI & Cloud Empowerment</h2>
          <p>
            GPU-powered AI infrastructure with Neev Cloud + StartupRunway AI Labs to accelerate product and
            model deployment.
          </p>
        </motion.div>

        {/* SaaS Automation */}
        <motion.div
          className="bg-gradient-to-r from-[#8B5CF6]/30 via-[#8B5CF6]/20 to-[#8B5CF6]/10 p-6 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4">Seamless Business Automation</h2>
          <p>
            Automate operations, CRM, HR, finance, and projects with StartupRunway SaaS Platform — no coding
            required.
          </p>
        </motion.div>

        {/* Product & Legal */}
        <motion.div
          className="bg-gradient-to-r from-[#1DB954]/20 via-[#4892DB]/20 to-[#8B5CF6]/20 p-6 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold mb-4">Product & Legal Support</h2>
          <p>
            End-to-end product lifecycle, compliance, and funding support to ensure smooth entrepreneurial
            growth.
          </p>
        </motion.div>
      </section>

      {/* CTA Footer */}
      <motion.section
        className="bg-gradient-to-r from-[#1DB954]/20 via-[#4892DB]/20 to-[#8B5CF6]/20 p-12 text-center rounded-xl mx-6 md:mx-20 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partner. Automate. Scale.
        </h2>
        <p className="mb-6">
          StartupRunway unites business consulting, SaaS automation, and AI infrastructure to help entrepreneurs launch smarter and scale faster.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          <button className="bg-[#1DB954] hover:bg-[#17a44a] text-white px-6 py-3 rounded-lg font-medium transition">
            Join as Entrepreneur Partner
          </button>
          <button className="bg-[#4892DB] hover:bg-[#3b7cc9] text-white px-6 py-3 rounded-lg font-medium transition">
            Launch Your Startup
          </button>
        </div>
      </motion.section>
    </div>
  );
}

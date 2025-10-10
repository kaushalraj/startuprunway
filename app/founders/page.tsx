'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StartupRunwayLogo from '@/public/images/startuprunway-logo.png'; // replace with actual path

export default function EntrepreneursPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Neural Pulse Network Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const nodeCount = 80;
    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const colors = ['#1DB954', '#4892DB', '#8B5CF6'];

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Draw lines
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 150})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full bg-black"
      />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-center py-4 bg-black bg-opacity-40 backdrop-blur-md">
        <Image
          src={StartupRunwayLogo}
          alt="StartupRunway Logo"
          className="h-12 w-auto cursor-pointer"
        />
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-36">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Empowering Founders to Build the Future
        </h1>
        <p className="max-w-3xl text-lg md:text-xl mb-8">
          StartupRunway isn’t just a consultancy — it’s an innovation hub combining business, technology, and automation.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Strategy Call
          </motion.a>
          <motion.a
            href="#partnerships"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Partnership Programs
          </motion.a>
        </div>
      </section>

      {/* Value / Services Section */}
      <section id="services" className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Business Strategy */}
          <motion.div
            className="bg-white bg-opacity-10 rounded-2xl p-8 text-center backdrop-blur-md shadow-lg hover:scale-105 transition-transform border-l-4 border-green-400"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Business Strategy & Startup Consulting</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Market research & startup validation</li>
              <li>Go-to-market & investor strategy</li>
              <li>Business model & financial planning</li>
              <li>Pitch deck & funding preparation</li>
            </ul>
          </motion.div>

          {/* AI & Cloud */}
          <motion.div
            className="bg-white bg-opacity-10 rounded-2xl p-8 text-center backdrop-blur-md shadow-lg hover:scale-105 transition-transform border-l-4 border-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4">AI & Cloud Empowerment</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>GPU-powered AI compute via Neev Cloud</li>
              <li>AI model hosting & fine-tuning</li>
              <li>Pay-per-use scalable cloud infrastructure</li>
              <li>Data compliance & privacy within India</li>
            </ul>
          </motion.div>

          {/* Automation */}
          <motion.div
            className="bg-white bg-opacity-10 rounded-2xl p-8 text-center backdrop-blur-md shadow-lg hover:scale-105 transition-transform border-l-4 border-purple-400"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Seamless Business Automation</h3>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>StartupRunway SaaS automation workflows</li>
              <li>Zoho pre-integrated CRM, Books, Projects</li>
              <li>Custom business process flows</li>
              <li>Operations, HR, CRM & finance automation</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 text-center py-24 bg-gradient-to-r from-green-700 via-blue-700 to-purple-700">
        <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Startup?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join StartupRunway and Neev Cloud to experience the future of AI-powered startup execution in India.
        </p>
        <motion.a
          href="#contact"
          className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join as Founder Partner
        </motion.a>
      </section>
    </div>
  );
}

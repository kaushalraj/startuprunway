// app/HeroSection.tsx
"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const menuItems = [
    { label: "Founders", href: "/founders" },
    { label: "Entrepreneurs", href: "/entrepreneurs" },
    { label: "Studentpreneurs", href: "/studentpreneur" },
    { label: "Service Partners", href: "/service-partners" },
    { label: "Investors", href: "/investors" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-8"
      >
        Welcome to Startup Runway
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4">
        {menuItems.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              text-sm md:text-sm font-medium text-gray-100
              px-5 py-2 rounded-full
              border border-white/20
              bg-gradient-to-b from-white/15 to-white/5
              backdrop-blur-xl
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.25)]
              hover:from-white/25 hover:to-white/10
              hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_6px_16px_rgba(0,0,0,0.35)]
              hover:scale-105
              transition-all duration-300
            "
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </section>
  );
}


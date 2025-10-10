'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ActiveNeuralBackground from '@/components/ActiveNeuralBackground';

// Header Component
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 py-4 bg-transparent backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image
          src="/images/startuprunway-logo.png"
          alt="StartupRunway Logo"
          width={35}
          height={35}
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
          StartupRunway
        </h1>
      </Link>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto z-10"
      >
        <div className="inline-block mb-6 px-5 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-gray-300">
          Empowering India’s Founders
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00C2FF] via-[#7C3AED] to-[#10B981] bg-clip-text text-transparent">
          Empowering Startups to Grow
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          StartupRunway helps founders turn ideas into scalable companies — with business consulting, AI cloud partnerships, SaaS automation, and growth strategy — all under one platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#00C2FF] hover:bg-[#00C2FF]/90 text-white px-8 py-6 rounded-full text-lg">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 px-8 py-6 rounded-full text-lg"
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

// Value Proposition Section
function ValueProposition() {
  const values = [
    {
      title: 'Business Strategy Consulting',
      description:
        'From market validation to financial planning — StartupRunway guides founders with structured strategies to turn ideas into investor-ready businesses.',
    },
    {
      title: 'Office Setup & Team Building',
      description:
        'Seamless workspace creation, recruitment, and cultural alignment — helping startups scale efficiently from day one.',
    },
    {
      title: 'AI & Cloud Infrastructure',
      description:
        'Partnering with Neev Cloud — a new-age AI Cloud PaaS provider — StartupRunway empowers Indian AI startups with secure, cost-effective cloud infrastructure.',
    },
    {
      title: 'Automation through SaaS',
      description:
        'StartupRunway’s SaaS platform integrates tools for CRM, HR, accounting, and workflow automation — reducing manual work and accelerating execution.',
    },
    {
      title: 'Funding & Legal Support',
      description:
        'Investor relations, pitch deck creation, legal structuring, and compliance — all in one ecosystem built for founders.',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-[#00C2FF] via-[#7C3AED] to-[#10B981] bg-clip-text text-transparent font-semibold">
          StartupRunway: Innovation + Execution Hub
        </h2>
        <p className="text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
          Unlike traditional consultancies, StartupRunway integrates advisory, cloud infrastructure, and SaaS tools into one connected ecosystem for startup growth.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// AI Cloud + SaaS Partnerships
function Partnerships() {
  return (
    <section className="relative py-24 px-6 text-center bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#00C2FF] via-[#7C3AED] to-[#10B981] bg-clip-text text-transparent"
        >
          Powering the Next Generation of AI Startups
        </motion.h2>

        <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
          As a channel partner for <strong>Neev Cloud</strong>, StartupRunway enables Indian AI startups to deploy and scale quickly with local, affordable cloud infrastructure. Our integration with
          SaaS platforms like <strong>Zoho</strong>, and planned partnerships with <strong>Google Cloud</strong>, <strong>AWS</strong>, and <strong>Azure</strong>, ensure founders access the world’s best technologies seamlessly.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10 opacity-80">
          <Image src="/images/neevcloud-logo.png" alt="Neev Cloud" width={120} height={50} />
          <Image src="/images/zoho-logo.png" alt="Zoho" width={120} height={50} />
          <Image src="/images/aws-logo.png" alt="AWS" width={90} height={50} />
          <Image src="/images/google-cloud-logo.png" alt="GCP" width={100} height={50} />
          <Image src="/images/azure-logo.png" alt="Azure" width={100} height={50} />
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C2FF]/10 via-[#7C3AED]/10 to-[#10B981]/10" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-white font-semibold">
          Join India’s Most Connected Startup Ecosystem
        </h2>
        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
          Access strategy, technology, automation, and infrastructure — all from StartupRunway’s integrated SaaS platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#00C2FF] text-white hover:bg-[#00C2FF]/90 px-8 py-6 rounded-full text-lg">
            Schedule Consultation
          </Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
            Explore Platform
          </Button>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function EntrepreneursPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0e27] text-white overflow-hidden">
      {/* Animated Neural Background */}
      <ActiveNeuralBackground interactive={true} density={0.00008} maxNodes={180} />

      <Header />

      <div className="relative z-10 pt-24">
        <HeroSection />
        <ValueProposition />
        <Partnerships />
        <CTASection />
      </div>
    </div>
  );
}

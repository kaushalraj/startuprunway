'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


import {
  Users,
  Briefcase,
  Rocket,
  Building,
  Layers,
  FileText,
  Cloud,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

// Particle Background
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      color: ["#ff6b35", "#4a90e2", "#8b5cf6", "#10b981"][
        Math.floor(Math.random() * 4)
      ],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}


export default function ServicePartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          StartupRunway Service Partner Program
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Join our ecosystem and provide essential services to startups while growing your business.
        </p>
        <Button className="mt-6 px-8 py-3 bg-indigo-600 text-white hover:bg-indigo-700">
          Join as Partner
        </Button>
      </section>

      {/* Who Can Join */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Who Can Join?</h2>
        <p className="text-gray-700 mb-4">
          Any firm providing professional services relevant to startups can join:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Digital Marketing Agencies – SEO, branding, campaigns, social media</li>
          <li>CA / Accounting Firms – GST filing, bookkeeping, audits, tax advisory</li>
          <li>Legal Firms / Lawyers – Company registration, contracts, IP, compliance</li>
          <li>HR & Recruitment Firms – Hiring, payroll, HR policies, training</li>
          <li>IT / Tech Service Providers – Web/app development, SaaS solutions, IT support</li>
          <li>Educational / Training Providers – Workshops, certifications, incubation programs</li>
        </ul>
      </section>

      {/* Program Participation Steps */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How to Participate</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4 mb-8">
          <li>
            <strong>Registration:</strong> Fill out the Partner Registration Form on our website with firm details, services offered, experience, and certifications.
          </li>
          <li>
            <strong>Onboarding:</strong> Attend orientation to understand platform processes, client engagement, and revenue models.
          </li>
          <li>
            <strong>Service Alignment:</strong> Identify which startup stage your services fit: Ideation, Growth, Scale, or Investor Readiness.
          </li>
          <li>
            <strong>Program Participation:</strong> Engage with startups in Startup Onboarding, Growth Acceleration, Investor Readiness, and Workshops/Mentorship programs.
          </li>
          <li>
            <strong>Revenue Models:</strong> Offer services via fixed fees, retainers, or referral/commission.
          </li>
        </ol>

        {/* Flow Diagram */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Partner Program Flow</h3>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-lg shadow-sm">
              <span className="font-bold mb-2">1. Register</span>
              <span className="text-gray-600 text-center">Submit your firm details & services</span>
            </div>
            <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-lg shadow-sm">
              <span className="font-bold mb-2">2. Onboard</span>
              <span className="text-gray-600 text-center">Attend orientation and get aligned</span>
            </div>
            <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-lg shadow-sm">
              <span className="font-bold mb-2">3. Align Services</span>
              <span className="text-gray-600 text-center">Match services with startup needs</span>
            </div>
            <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-lg shadow-sm">
              <span className="font-bold mb-2">4. Engage Startups</span>
              <span className="text-gray-600 text-center">Provide services and track projects</span>
            </div>
            <div className="flex flex-col items-center bg-indigo-50 p-4 rounded-lg shadow-sm">
              <span className="font-bold mb-2">5. Earn Revenue</span>
              <span className="text-gray-600 text-center">Fixed fees, retainer, or commission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Revenue Models for Service Partners</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left border-b border-gray-200">Revenue Model</th>
                <th className="py-3 px-6 text-left border-b border-gray-200">Description</th>
                <th className="py-3 px-6 text-left border-b border-gray-200">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Fixed Fee per Startup</td>
                <td className="py-3 px-6">One-time charge for providing a specific service to a startup.</td>
                <td className="py-3 px-6">Company registration, GST setup, branding package</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="py-3 px-6">Retainer / Subscription</td>
                <td className="py-3 px-6">Recurring monthly or quarterly support for ongoing startup needs.</td>
                <td className="py-3 px-6">Payroll management, bookkeeping, marketing campaigns</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 px-6">Commission / Referral</td>
                <td className="py-3 px-6">Earn a percentage of project value or service fee for referred startups.</td>
                <td className="py-3 px-6">Referral for funding assistance, legal services, or IT solutions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Benefits for Service Partners</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Access to curated startup clients at all stages</li>
          <li>Recurring revenue opportunities through ongoing services</li>
          <li>Brand visibility as a trusted partner in the startup ecosystem</li>
          <li>Participation in workshops, webinars, and startup events</li>
          <li>Networking with other service partners, investors, and mentors</li>
        </ul>
      </section>

      {/* Final Call-to-Action */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="text-gray-700 mb-6">
          Become a part of our growing ecosystem and help startups succeed while expanding your business opportunities.
        </p>
        <Button className="px-8 py-3 bg-indigo-600 text-white hover:bg-indigo-700">
          Join as Partner
        </Button>
      </section>

    </div>
  );
}

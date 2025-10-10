'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import StartupRunwayLogo from '@/public/startuprunway-logo.png';
import { ChevronDown, ChevronUp } from 'lucide-react';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const CollapsibleSection = ({ title, children }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-50 relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-center py-4 bg-black bg-opacity-40 backdrop-blur-md">
        <Image src={StartupRunwayLogo} alt="StartupRunway Logo" className="h-12 w-auto mr-2" />
        <span className="text-white text-2xl font-bold">StartupRunway</span>
      </header>

      {/* Page Content */}
      <main className="pt-24 max-w-5xl mx-auto px-4 space-y-6">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-indigo-900">Empowering Founders to Build, Automate & Scale</h1>
          <p className="text-lg text-gray-700">
            From Idea to Execution — We Make Startups Succeed. StartupRunway is India’s Startup Innovation Hub,
            built for founders, by founders. We combine business strategy, SaaS automation, AI cloud infrastructure,
            and growth consulting to help startups scale smarter and faster.
          </p>
        </section>

        {/* Founder Offerings */}
        <section>
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Founder Offerings</h2>

          <CollapsibleSection title="Business Strategy & Startup Consulting">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Market Research & Validation</li>
              <li>Business Model & Financial Planning</li>
              <li>Go-to-Market Strategy & Brand Positioning</li>
              <li>Investor Pitch & Fundraising Preparation</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Product & Technology Development">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>MVP & Prototype Development</li>
              <li>AI, SaaS & Cloud-based Product Design</li>
              <li>Architecture, Automation & Cloud Integration</li>
              <li>Product Lifecycle Management & Scaling</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Seamless Business Automation Workflows">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Zoho Integration: CRM, Books, Projects, Recruit, People</li>
              <li>StartupRunway Automation Suite: Teams, Leads, Clients, Projects, Investors</li>
              <li>Custom Workflow Automations for founders & startup teams</li>
            </ul>
            <p className="mt-2 italic text-gray-600">“Operate your startup like a scaled company — right from day one.”</p>
          </CollapsibleSection>

          <CollapsibleSection title="AI & Cloud Infrastructure">
            <table className="w-full border border-gray-300 text-left text-gray-700 mb-2">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border-b">Partner</th>
                  <th className="p-2 border-b">Offerings for Founders</th>
                  <th className="p-2 border-b">Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-semibold">Neev Cloud</td>
                  <td className="p-2">GPU-powered AI compute, AI/ML model hosting, India-compliant data residency</td>
                  <td className="p-2">Cost-efficient, pay-per-use, AI-ready</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-semibold">AWS / GCP / Azure</td>
                  <td className="p-2">Cloud credits, hybrid & multi-cloud deployment, AI/ML accelerator programs</td>
                  <td className="p-2">Global scalability, enterprise-grade reliability</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">StartupRunway Tech Team</td>
                  <td className="p-2">Migration, deployment, architecture guidance</td>
                  <td className="p-2">End-to-end AI & cloud support for startups</td>
                </tr>
              </tbody>
            </table>
          </CollapsibleSection>

          <CollapsibleSection title="SaaS & Technology Partnerships">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Zoho: Pre-configured modules for CRM, HR, Finance, Projects</li>
              <li>StartupRunway SaaS Platform: Connected workflows for operations, finance, HR, marketing, investor relations</li>
              <li>Future Partners: AWS, GCP, Azure, AI accelerators</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Joint Ventures & Partner Ecosystem">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Co-creation opportunities for AI, SaaS, and cloud-based products</li>
              <li>Mentorship, technical support, and business advisory</li>
              <li>Localized pricing & operational support for Indian startups</li>
              <li>Collaboration with global cloud providers and SaaS platforms</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="AI & Founder Empowerment Programs">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>AI Infrastructure Accelerator — Subsidized compute + mentoring via Neev Cloud</li>
              <li>Startup Cloud Credit Program — Cloud + SaaS bundled credits for new founders</li>
              <li>AI Product LaunchPad — MVP + AI model integration bootcamp</li>
              <li>Automation Ready Program — Business workflow setup on StartupRunway SaaS platform</li>
              <li>Hybrid Cloud Enablement — Multi-cloud deployment across AWS, Azure, GCP, and Neev</li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="Premium Services & Value Additions">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>End-to-End Execution: Strategy → MVP → fundraising → AI deployment → scaling</li>
              <li>Joint Ventures & Co-creation with SaaS, AI, and cloud partners</li>
              <li>Localized AI Cloud PaaS: Low latency, India-compliant data, cost-effective infra</li>
              <li>Business Automation: Workflow automation for finance, HR, CRM, operations</li>
              <li>Credits & Subsidies: AI/Cloud credits, mentoring, accelerator programs</li>
            </ul>
          </CollapsibleSection>
        </section>
      </main>
    </div>
  );
}

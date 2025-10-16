"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ServicePartnerPage from "./ServicePartnerPage";

export const dynamic = "force-dynamic";

// Header
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50 py-4 bg-transparent">
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image
          src="/images/startuprunway-logo.png"
          alt="StartupRunway Logo"
          width={32}
          height={32}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          StartupRunway
        </h1>
      </Link>
    </header>
  );
}

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

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen py-16 flex items-center justify-center px-4 text-center">
      <div className="max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a90e2]/10 border border-[#4a90e2]/30 mb-6"
        >
          <HeartHandshake className="w-4 h-4 text-[#4a90e2]" />
          <span className="text-gray-300">For Business Enablers & Experts</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent"
        >
          StartupRunway Service Partners Network
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          <p>Collaborate. Empower. Grow. </p>
          <p>
            Join India's most vibrant ecosystem empowering startups with
            real-world expertise.
          </p>
        </motion.p>
        <Link href="/auth/partner/register/" passHref>
          <Button className="bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white px-8 py-6 rounded-full group">
            <Rocket className="w-5 h-5 mr-2 group-hover:translate-y-[-2px] transition-transform" />
            Join as Service Partner
          </Button>
        </Link>
      </div>
    </section>
  );
}

// Service Partners Example Type

type Firm = {
  category: string;
  subcategory: string;
  name: string;
  city: string;
};

function PartnerExamples() {
  const [showExamples, setShowExamples] = useState(false);

  const partnerExamples: Firm[] = [
    // 1. Software & IT Services
    {
      category: "Software & IT Services",
      subcategory: "Custom Development",
      name: "CodeCraft Technologies",
      city: "Bangalore",
    },
    {
      category: "Software & IT Services",
      subcategory: "Web & Mobile",
      name: "TechVedika Software",
      city: "Hyderabad",
    },
    {
      category: "Software & IT Services",
      subcategory: "SaaS Product Engineering",
      name: "Inflexion Analytics",
      city: "Chennai",
    },
    {
      category: "Software & IT Services",
      subcategory: "Full Stack",
      name: "SreeTech Digital",
      city: "Vijayawada, Andhra Pradesh",
    },
    {
      category: "Software & IT Services",
      subcategory: "API & Integrations",
      name: "CloudWeave Systems",
      city: "Warangal, Telangana",
    },

    // 2. Cloud, DevOps & Infrastructure
    {
      category: "Cloud, DevOps & Infrastructure",
      subcategory: "Cloud Providers & Resellers",
      name: "NeevCloud Technologies",
      city: "Bangalore",
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      subcategory: "Managed DevOps",
      name: "CloudZenix Solutions",
      city: "Hyderabad",
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      subcategory: "Infra Automation",
      name: "InfraScale Labs",
      city: "Chennai",
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      subcategory: "Kubernetes & Containers",
      name: "BlueWave CloudOps",
      city: "Hyderabad, Telangana",
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      subcategory: "Backup & DR",
      name: "SkyReach IT",
      city: "Visakhapatnam, Andhra Pradesh",
    },

    // 3. AI, ML & Data Science
    {
      category: "AI, ML & Data Science",
      subcategory: "Machine Learning",
      name: "Tredence Analytics",
      city: "Bangalore",
    },
    {
      category: "AI, ML & Data Science",
      subcategory: "Data Engineering",
      name: "Innominds Software",
      city: "Hyderabad",
    },
    {
      category: "AI, ML & Data Science",
      subcategory: "Business Analytics",
      name: "LatentView Analytics",
      city: "Chennai",
    },
    {
      category: "AI, ML & Data Science",
      subcategory: "Computer Vision",
      name: "Aibridge Technologies",
      city: "Hyderabad, Telangana",
    },
    {
      category: "AI, ML & Data Science",
      subcategory: "NLP & Automation",
      name: "DataLyse AI Labs",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 4. UI/UX & Creative
    {
      category: "UI/UX & Creative",
      subcategory: "Product Design",
      name: "Pixel6 Studio",
      city: "Bangalore",
    },
    {
      category: "UI/UX & Creative",
      subcategory: "UX Research",
      name: "DesignQube",
      city: "Chennai",
    },
    {
      category: "UI/UX & Creative",
      subcategory: "Branding",
      name: "BrandStory",
      city: "Hyderabad",
    },
    {
      category: "UI/UX & Creative",
      subcategory: "Prototyping",
      name: "CreativeCurve Labs",
      city: "Warangal, Telangana",
    },
    {
      category: "UI/UX & Creative",
      subcategory: "Motion & Video",
      name: "DoodleHaus",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 5. Digital Marketing & Growth
    {
      category: "Digital Marketing & Growth",
      subcategory: "Performance Marketing",
      name: "GrowthHack Digital",
      city: "Bangalore",
    },
    {
      category: "Digital Marketing & Growth",
      subcategory: "Content & SEO",
      name: "EchoVibe Media",
      city: "Chennai",
    },
    {
      category: "Digital Marketing & Growth",
      subcategory: "Social Media",
      name: "DigitalOz Media",
      city: "Hyderabad",
    },
    {
      category: "Digital Marketing & Growth",
      subcategory: "Growth Hacking",
      name: "SocialNest Marketing",
      city: "Hyderabad, Telangana",
    },
    {
      category: "Digital Marketing & Growth",
      subcategory: "Performance Analytics",
      name: "BrandNova360",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 6. Cybersecurity & Compliance
    {
      category: "Cybersecurity & Compliance",
      subcategory: "Security Audits",
      name: "SecuraNova",
      city: "Bangalore",
    },
    {
      category: "Cybersecurity & Compliance",
      subcategory: "Managed Security",
      name: "Krish TechnoLabs",
      city: "Hyderabad",
    },
    {
      category: "Cybersecurity & Compliance",
      subcategory: "Pen Testing",
      name: "FortiEdge Consulting",
      city: "Chennai",
    },
    {
      category: "Cybersecurity & Compliance",
      subcategory: "Compliance (ISO/SOC2)",
      name: "CyberSentinel Systems",
      city: "Warangal, Telangana",
    },
    {
      category: "Cybersecurity & Compliance",
      subcategory: "App Security",
      name: "SecureLayer Infotech",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 7. ERP, CRM & Business Automation
    {
      category: "ERP, CRM & Business Automation",
      subcategory: "CRM Implementation",
      name: "CRMNext Solutions",
      city: "Bangalore",
    },
    {
      category: "ERP, CRM & Business Automation",
      subcategory: "ERP Customization",
      name: "SmartEdge ERP",
      city: "Vijayawada, Andhra Pradesh",
    },
    {
      category: "ERP, CRM & Business Automation",
      subcategory: "Workflow Automation",
      name: "Techforce360",
      city: "Hyderabad",
    },
    {
      category: "ERP, CRM & Business Automation",
      subcategory: "RPA",
      name: "Infodream Systems",
      city: "Chennai",
    },
    {
      category: "ERP, CRM & Business Automation",
      subcategory: "Integration Services",
      name: "BizSpring Automations",
      city: "Hyderabad, Telangana",
    },

    // 8. Startup Consulting & Strategy
    {
      category: "Startup Consulting & Strategy",
      subcategory: "Go-to-market",
      name: "StartIQ Consulting",
      city: "Bangalore",
    },
    {
      category: "Startup Consulting & Strategy",
      subcategory: "Fundraising Advisory",
      name: "LaunchYard Partners",
      city: "Hyderabad",
    },
    {
      category: "Startup Consulting & Strategy",
      subcategory: "Business Modeling",
      name: "ScaleEdge Advisors",
      city: "Chennai",
    },
    {
      category: "Startup Consulting & Strategy",
      subcategory: "Scaling Ops",
      name: "NextLeap Advisors",
      city: "Vijayawada, Andhra Pradesh",
    },
    {
      category: "Startup Consulting & Strategy",
      subcategory: "Market Research",
      name: "BizSpring Innovations",
      city: "Warangal, Telangana",
    },

    // 9. Accounting, Taxation & Virtual CFO
    {
      category: "Accounting, Taxation & Virtual CFO",
      subcategory: "Virtual CFO",
      name: "FinPoint Advisors",
      city: "Bangalore",
    },
    {
      category: "Accounting, Taxation & Virtual CFO",
      subcategory: "Startup CA Firms",
      name: "Accufin Experts",
      city: "Hyderabad",
    },
    {
      category: "Accounting, Taxation & Virtual CFO",
      subcategory: "Tax & GST",
      name: "LedgerWorks Consulting",
      city: "Chennai",
    },
    {
      category: "Accounting, Taxation & Virtual CFO",
      subcategory: "Bookkeeping Outsource",
      name: "BlueBook Finance",
      city: "Warangal, Telangana",
    },
    {
      category: "Accounting, Taxation & Virtual CFO",
      subcategory: "Financial Modeling",
      name: "BalanceEdge Partners",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 10. Legal & IP Advisory (non-competitor)
    {
      category: "Legal & IP Advisory",
      subcategory: "Startup Legal",
      name: "StartSafe Attorneys",
      city: "Hyderabad",
    },
    {
      category: "Legal & IP Advisory",
      subcategory: "IP & Patents",
      name: "IPVista Law Partners",
      city: "Vijayawada, Andhra Pradesh",
    },
    {
      category: "Legal & IP Advisory",
      subcategory: "Corporate & Contracts",
      name: "LexEdge Associates",
      city: "Chennai",
    },
    {
      category: "Legal & IP Advisory",
      subcategory: "Company Incorporation",
      name: "IncorpZone Legal",
      city: "Warangal, Telangana",
    },
    {
      category: "Legal & IP Advisory",
      subcategory: "Regulatory",
      name: "IPX LegalTech",
      city: "Bangalore",
    },

    // 11. HR, Payroll & Recruitment
    {
      category: "HR, Payroll & Recruitment",
      subcategory: "Recruitment",
      name: "TalentOne HR",
      city: "Bangalore",
    },
    {
      category: "HR, Payroll & Recruitment",
      subcategory: "Payroll",
      name: "HireXpert Consulting",
      city: "Hyderabad",
    },
    {
      category: "HR, Payroll & Recruitment",
      subcategory: "HR Tech Integrations",
      name: "PeopleLogic",
      city: "Chennai",
    },
    {
      category: "HR, Payroll & Recruitment",
      subcategory: "Employer Branding",
      name: "StaffHub Services",
      city: "Warangal, Telangana",
    },
    {
      category: "HR, Payroll & Recruitment",
      subcategory: "Contract Staffing",
      name: "NextHire Consultancy",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 12. Education, Training & Incubation
    {
      category: "Education, Training & Incubation",
      subcategory: "Incubators",
      name: "T-Hub Incubator",
      city: "Hyderabad",
    },
    {
      category: "Education, Training & Incubation",
      subcategory: "Corporate Training",
      name: "NASSCOM FutureSkills",
      city: "Bangalore",
    },
    {
      category: "Education, Training & Incubation",
      subcategory: "University Incubation",
      name: "IITM Incubation Cell",
      city: "Chennai",
    },
    {
      category: "Education, Training & Incubation",
      subcategory: "Regional Innovation",
      name: "SR Innovation Exchange",
      city: "Warangal, Telangana",
    },
    {
      category: "Education, Training & Incubation",
      subcategory: "State Incubator",
      name: "Andhra Innovation Society",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 13. SaaS, Tools & Productivity
    {
      category: "SaaS, Tools & Productivity",
      subcategory: "CRM & Sales Tools",
      name: "Zoho Channel Partners",
      city: "Chennai",
    },
    {
      category: "SaaS, Tools & Productivity",
      subcategory: "PM & Collaboration",
      name: "ClickUp Resellers India",
      city: "Bangalore",
    },
    {
      category: "SaaS, Tools & Productivity",
      subcategory: "No-code Integrations",
      name: "Notion API Integrators",
      city: "Hyderabad",
    },
    {
      category: "SaaS, Tools & Productivity",
      subcategory: "Internal Tools",
      name: "WorklyHQ Partners",
      city: "Warangal, Telangana",
    },
    {
      category: "SaaS, Tools & Productivity",
      subcategory: "Automation Tools",
      name: "FlowSoft Tools",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 14. Engineering & Hardware Firms
    {
      category: "Engineering & Hardware Firms",
      subcategory: "IoT & Embedded",
      name: "IoTrix Systems",
      city: "Warangal, Telangana",
    },
    {
      category: "Engineering & Hardware Firms",
      subcategory: "Robotics",
      name: "RoboticX Labs",
      city: "Hyderabad",
    },
    {
      category: "Engineering & Hardware Firms",
      subcategory: "Mechanical Design",
      name: "Mekatron Innovations",
      city: "Chennai",
    },
    {
      category: "Engineering & Hardware Firms",
      subcategory: "PCB & Prototyping",
      name: "Techtonics Engineering",
      city: "Bangalore",
    },
    {
      category: "Engineering & Hardware Firms",
      subcategory: "Electronics Manufacturing",
      name: "ElectraMech Labs",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 15. Ecosystem, Funding & Accelerators
    {
      category: "Ecosystem, Funding & Accelerators",
      subcategory: "Accelerator Programs",
      name: "10000 Startups by NASSCOM",
      city: "Bangalore",
    },
    {
      category: "Ecosystem, Funding & Accelerators",
      subcategory: "State Incubator",
      name: "WE Hub",
      city: "Hyderabad",
    },
    {
      category: "Ecosystem, Funding & Accelerators",
      subcategory: "Research Park",
      name: "IITM Research Park",
      city: "Chennai",
    },
    {
      category: "Ecosystem, Funding & Accelerators",
      subcategory: "State Innovation Cell",
      name: "TSIC (Telangana State Innovation Cell)",
      city: "Hyderabad, Telangana",
    },
    {
      category: "Ecosystem, Funding & Accelerators",
      subcategory: "Technology Incubator",
      name: "Andhra Technology Business Incubator",
      city: "Vijayawada, Andhra Pradesh",
    },

    // 16. Operations, Events & Facility Management
    {
      category: "Operations, Events & Facility Management",
      subcategory: "Office Interiors",
      name: "OfficeEase Interiors",
      city: "Bangalore",
    },
    {
      category: "Operations, Events & Facility Management",
      subcategory: "Event Management",
      name: "Eventora Media",
      city: "Hyderabad",
    },
    {
      category: "Operations, Events & Facility Management",
      subcategory: "Coworking & Facilities",
      name: "WorkNest Spaces",
      city: "Chennai",
    },
    {
      category: "Operations, Events & Facility Management",
      subcategory: "Facility Services",
      name: "Facilito Management",
      city: "Warangal, Telangana",
    },
    {
      category: "Operations, Events & Facility Management",
      subcategory: "Logistics & Travel",
      name: "CorpoLink Services",
      city: "Vijayawada, Andhra Pradesh",
    },
  ];

  // group by category -> subcategory
  const grouped = partnerExamples.reduce<
    Record<string, Record<string, Firm[]>>
  >((acc, f) => {
    acc[f.category] = acc[f.category] || {};
    acc[f.category][f.subcategory] = acc[f.category][f.subcategory] || [];
    acc[f.category][f.subcategory].push(f);
    return acc;
  }, {});

  return (
    <section className="text-center py-12">
      <button
        onClick={() => setShowExamples(!showExamples)}
        className="px-6 py-3 bg-gradient-to-br from-[#4a90e2] via-[#6bace2] to-[#8b5cf6] text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
      >
        {showExamples ? "Hide Partner Examples" : "Show Partner Examples"}
      </button>

      {showExamples && (
        <div className="mt-8 max-w-6xl mx-auto text-left space-y-8 bg-black p-6 rounded-2xl shadow-md border border-gray-100">
          {Object.entries(grouped).map(([category, subcats]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-green mb-4 border-l-4 border-[#4a90e2] pl-3">
                {category}
              </h3>

              <div className="space-y-6">
                {Object.entries(subcats).map(([subcat, firms]) => (
                  <div key={subcat}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-md font-medium">{subcat}</h4>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {firms.map((f, idx) => (
                        <li
                          key={idx}
                          className="bg-blue-100/20 hover:bg-blue-700 p-3 rounded-lg shadow-sm transition flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium">{f.name}</div>
                            <div className="text-sm text-emerald-300">
                              {f.city}
                            </div>
                          </div>
                          {/* optional: add quick-action like "Join" prefilled link */}
                          <a
                            href={`/join-partner?category=${encodeURIComponent(f.category)}&subcategory=${encodeURIComponent(f.subcategory)}&utm_source=examples`}
                            className="ml-4 inline-block text-sm px-3 py-1 border rounded-full hover:bg-black-100"
                            aria-label={`Join as ${f.subcategory}`}
                          >
                            Join
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// Service Partner Types
function PartnerCategories() {
  const categories = [
    {
      icon: Briefcase,
      title: "CA & Accounting Firms",
      message:
        "Empower startups with financial structure, compliance, and growth advisory — become their trusted financial backbone.",
      color: "#ff6b35",
    },
    {
      icon: FileText,
      title: "Legal & Compliance Experts",
      message:
        "Help founders navigate business laws, IPs, and contracts — be the guiding force of ethical startup growth.",
      color: "#4a90e2",
    },
    {
      icon: Building,
      title: "Incubators & Accelerators",
      message:
        "Collaborate with StartupRunway to discover, mentor, and nurture promising early-stage ventures together.",
      color: "#8b5cf6",
    },
    {
      icon: Layers,
      title: "Marketing & Branding Agencies",
      message:
        "Shape the identity of emerging startups — from logo to launch, turn vision into brand power.",
      color: "#10b981",
    },
    {
      icon: Users,
      title: "HR & Recruitment Partners",
      message:
        "Build the founding teams of India’s next unicorns — match passion with purpose.",
      color: "#f59e0b",
    },
    {
      icon: Cloud,
      title: "Cloud & SaaS Providers",
      message:
        "Enable digital transformation — offer tools, infrastructure, and credits that scale startups faster.",
      color: "#4a90e2",
    },
    {
      icon: Rocket,
      title: "Startup Consultants",
      message:
        "Guide founders with business models, GTM strategy, and execution frameworks — shape startup success stories.",
      color: "#8b5cf6",
    },
    {
      icon: Lightbulb,
      title: "Innovation & R&D Hubs",
      message:
        "Partner with StartupRunway to foster product innovation, prototype labs, and co-creation opportunities.",
      color: "#10b981",
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#ff6b35] to-[#4a90e2] bg-clip-text text-transparent"
        >
          Become a StartupRunway Service Partner
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#131a3a] rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${cat.color}20` }}
                >
                  <Icon className="w-7 h-7" style={{ color: cat.color }} />
                </div>
                <h3 className="text-2xl mb-3 text-white">{cat.title}</h3>
                <p className="text-gray-400">{cat.message}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA
function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b35] via-[#4a90e2] to-[#8b5cf6] opacity-20" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl mb-6 text-white"
        >
          Let’s Empower India’s Startup Revolution
        </motion.h2>
        <p className="text-lg text-gray-300 mb-8">
          Partner with StartupRunway to connect your expertise with thousands of
          founders shaping tomorrow.
        </p>

        {/* Link to Service Partner Page */}
        <Link href="/service-partners/ServicePartnerPage" passHref>
          <Button className="bg-[#ff6b35] text-white hover:bg-[#ff6b35]/90 px-8 py-6 rounded-full group">
            Join Partner Network
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

// Main
export default function ServiceProvidersPage() {
  return (
    <div className="relative bg-[#0f1233] text-white overflow-hidden pt-20">
      <ParticleBackground />
      <Header />
      <div className="relative z-10">
        <HeroSection />
        <PartnerExamples />
        <PartnerCategories />
        <CTASection />
      </div>
    </div>
  );
}

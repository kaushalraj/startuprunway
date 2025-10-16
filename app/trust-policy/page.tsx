"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Users, FileCheck, Scale, Mail } from "lucide-react";

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
        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
          StartupRunway
        </h1>
      </Link>
    </header>
  );
}


export default function TrustPolicyPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#111827] text-gray-200 overflow-hidden">
      {/* ------------------------------ HERO SECTION ------------------------------ */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] px-6 py-20">
	  <Header />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-[#4a90e2]/10 border border-[#4a90e2]/30">
            <ShieldCheck className="w-4 h-4 text-[#4a90e2]" />
            <span className="text-sm text-gray-300">StartupRunway Trust & Transparency Policy</span>
          </div>
		  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4a90e2] to-[#8b5cf6] bg-clip-text text-transparent leading-tight pb-1">
			Building an Ecosystem of Integrity
		  </div>
          <p className="text-lg md:text-xl py-6 text-gray-400 max-w-2xl mx-auto">
            Your data, ideas, and innovations are safe with us.  
            We safeguard every interaction across StartupRunway’s growing ecosystem.
          </p>
        </motion.div>
      </section>

      {/* ------------------------------ POLICY SECTIONS ------------------------------ */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* 1. Purpose */}
        <PolicyBlock
          icon={<Eye className="w-6 h-6 text-[#4a90e2]" />}
          title="1. Purpose"
          content={`StartupRunway exists to enable transparent collaboration between innovators and enablers.
          Trust is the foundation of our ecosystem — we are committed to protecting participant data, ensuring ethical investment tracking,
          and promoting fair, responsible engagement across the platform.`}
        />

        {/* 2. Data Confidentiality */}
        <PolicyBlock
          icon={<Lock className="w-6 h-6 text-[#4a90e2]" />}
          title="2. Data Confidentiality"
          contentList={[
            "Founders and entrepreneurs retain full ownership of their data and IP.",
            "Confidential startup information is never disclosed publicly without consent.",
            "All data is secured using AES-256 encryption and TLS 1.3.",
            "Only verified and authorized profiles can access private data.",
          ]}
        />

        {/* 3. Transparency & Accountability */}
        <PolicyBlock
          icon={<Eye className="w-6 h-6 text-[#4a90e2]" />}
          title="3. Transparency & Accountability"
          contentList={[
            "All investors, mentors, and service providers use verified identities.",
            "Every access request and interaction is logged and traceable.",
            "Unauthorized or suspicious requests are auto-flagged and reviewed by our Trust Team.",
          ]}
        />

        {/* 4. Founder & Entrepreneur Control */}
        <PolicyBlock
          icon={<Users className="w-6 h-6 text-[#4a90e2]" />}
          title="4. Founder & Entrepreneur Control"
          contentList={[
            "Participants choose who can view what, and for how long.",
            "Access to decks, prototypes, or finances is always consent-based.",
            "Visibility tiers (Private / Invite-Only / Public) offer granular control.",
          ]}
        />

        {/* 5. Investor Access Ethics */}
        <PolicyBlock
          icon={<FileCheck className="w-6 h-6 text-[#4a90e2]" />}
          title="5. Investor Access Ethics"
          contentList={[
            "Investor tracking is available only on paid, approved plans.",
            "Investors agree to our strict Code of Conduct before access.",
            "Investor payments (minus platform fees) directly fund startup growth.",
            "All data visibility is governed by founder permissions — never unrestricted.",
          ]}
        />

        {/* 6. Security Framework */}
        <PolicyBlock
          icon={<ShieldCheck className="w-6 h-6 text-[#4a90e2]" />}
          title="6. Security Framework"
          contentList={[
            "Hosted on secure cloud infrastructure with RBAC.",
            "24/7 monitoring, automated threat detection, and periodic audits.",
            "Compliant with ISO-27001 aligned data governance.",
            "MFA required for investors and admin accounts.",
          ]}
        />

        {/* 7. Reporting & Dispute Resolution */}
        <PolicyBlock
          icon={<Scale className="w-6 h-6 text-[#4a90e2]" />}
          title="7. Reporting & Dispute Resolution"
          contentList={[
            "Issues can be reported via the Trust Center Portal.",
            "All reports are addressed within 72 business hours.",
            "Disputes are handled confidentially and neutrally.",
            "Confirmed violations result in suspension or legal escalation.",
          ]}
        />

        {/* 8. Our Promise */}
        <PolicyBlock
          icon={<HeartIcon />}
          title="8. Our Promise"
          contentList={[
            "Your data, ideas, and innovations are always yours.",
            "We never sell or trade user information.",
            "Every feature reinforces our guiding principle: Empower entrepreneurs with trust.",
          ]}
        />

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-10 border-t border-gray-700/30"
        >
          <Mail className="w-8 h-8 text-[#4a90e2] mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Contact the Trust Team</h3>
          <p className="text-gray-400 mb-4">For any privacy or trust concerns, contact:</p>
          <a
            href="mailto:trust@startuprunway.in"
            className="text-[#4a90e2] hover:text-white transition-colors"
          >
            trust@startuprunway.in
          </a>
        </motion.div>
      </section>
    </main>
  );
}

/* ------------------------------ REUSABLE POLICY BLOCK ------------------------------ */
function PolicyBlock({
  icon,
  title,
  content,
  contentList,
}: {
  icon: React.ReactNode;
  title: string;
  content?: string;
  contentList?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-gray-700/40 rounded-2xl p-6 md:p-8 backdrop-blur-lg shadow-lg hover:border-[#4a90e2]/40 transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      {content && <p className="text-gray-400 leading-relaxed">{content}</p>}
      {contentList && (
        <ul className="list-disc list-inside space-y-2 text-gray-400 leading-relaxed">
          {contentList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

/* ------------------------------ CUSTOM HEART ICON ------------------------------ */
function HeartIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#4a90e2]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 13.99 5.09C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"
      />
    </svg>
  );
}

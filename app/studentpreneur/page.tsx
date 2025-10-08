"use client";

import { useState } from "react";
import { ArrowRight, Users, Lightbulb, Star } from "lucide-react";

export default function StudentpreneurPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919071883088";
    const message = encodeURIComponent(
      "Hi! I'm interested in StartupRunway's Studentpreneur program."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Studentpreneur Program
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Empowering students to become entrepreneurs while in college
          </p>
          <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
            Learn. Build. Launch. Your entrepreneurial journey starts here.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-400 text-center">
            Why Join Studentpreneur Program?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
            <div className="bg-slate-900 p-8 rounded-xl shadow-lg">
              <Lightbulb className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Hands-On Learning</h3>
              <p className="text-slate-300">
                Gain practical experience building startups while learning from experts.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl shadow-lg">
              <Users className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Mentorship & Networking</h3>
              <p className="text-slate-300">
                Connect with successful entrepreneurs, investors, and industry experts.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl shadow-lg">
              <Star className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Early Recognition</h3>
              <p className="text-slate-300">
                Showcase your startup ideas and get guidance for funding & growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Modules Section */}
      <section id="modules" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-400 text-center">
            Program Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Ideation & Validation</h3>
              <ul className="text-slate-300 space-y-2">
                <li>Brainstorming Startup Ideas</li>
                <li>Market Research & Validation</li>
                <li>Customer Feedback Analysis</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">MVP Development</h3>
              <ul className="text-slate-300 space-y-2">
                <li>Prototype Development</li>
                <li>Design Thinking Workshops</li>
                <li>Product Iterations</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Go-to-Market & Funding</h3>
              <ul className="text-slate-300 space-y-2">
                <li>Pitch Deck Preparation</li>
                <li>Investor & Mentor Access</li>
                <li>Market Launch Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-amber-400 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Anika Patel</h3>
              <p className="text-slate-300 mb-2">
                Built a social media analytics startup while in 3rd year of college.
              </p>
              <p className="text-amber-400 font-medium">Seed Funded: ₹10 Lakh</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Rohan Singh</h3>
              <p className="text-slate-300 mb-2">
                Launched an EdTech platform with 2000+ active users in first 6 months.
              </p>
              <p className="text-amber-400 font-medium">Incubation Support: YES</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-white">Meera Joshi</h3>
              <p className="text-slate-300 mb-2">
                Developed a sustainable fashion brand and got early angel investment.
              </p>
              <p className="text-amber-400 font-medium">Funding Raised: ₹15 Lakh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-6 text-center text-slate-900">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Become a Studentpreneur?
          </h2>
          <p className="text-xl mb-8">
            Start your entrepreneurial journey today and turn your idea into reality.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
          >
            Join the Program
          </button>
        </div>
      </section>
    </div>
  );
}

"use client";

import type React from "react";
import { useState } from "react";
import Script from "next/script";
import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Target,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  MessageCircle,
  User,
} from "lucide-react";

import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
export default function StartupRunwayLanding() {
  const [logoAnimating, setLogoAnimating] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPricing = () => {
    scrollToSection("pricing");
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setContactForm((prev) => ({ ...prev, email }));

    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleWhatsAppClick = (planName?: string) => {
    const phoneNumber = "919071883088";
    let message =
      "Hi! I'm interested in learning more about Startup Runway's services.";

    if (planName) {
      message = `Hi! I'm interested in the ${planName} plan. Can you provide more details and help me get started?`;
    } else {
      message += " Can you help me get started?";
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    if (!validateEmail(contactForm.email)) {
      setEmailError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.mailtoUrl) {
          window.open(data.mailtoUrl, "_blank");
        }

        setSubmitMessage(
          "Thank you! Your message has been prepared. Please send it from your email client.",
        );
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage(
          data.error || "Failed to submit form. Please try again.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <div className="w-full">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/images/startuprunway-logo.png"
                alt="StartupRunway"
                className="h-7 w-7 mr-3"
              />
              <span className="text-white font-bold text-xl">
                StartupRunway
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Blog
              </button>
              <a
                href="/case-studies"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Case Studies
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </button>
              <div className="relative">
                <button
                  onMouseEnter={() => setLoginDropdownOpen(true)}
                  className="flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>

                {loginDropdownOpen && (
                  <div
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50"
                    onMouseEnter={() => setLoginDropdownOpen(true)}
                    onMouseLeave={() => setLoginDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-slate-200">
                      <p className="text-sm text-slate-600 font-medium">
                        Choose Login Type
                      </p>
                    </div>
                    <a
                      href="/auth/customer/login"
                      className="flex items-center px-4 py-3 text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">Customer Login</div>
                        <div className="text-xs text-slate-500">
                          Access your startup dashboard
                        </div>
                      </div>
                    </a>
                    <a
                      href="/auth/partner/login"
                      className="flex items-center px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <div className="font-medium">Partner Login</div>
                        <div className="text-xs text-slate-500">
                          Access partner portal
                        </div>
                      </div>
                    </a>

                    {/*
                    <div className="border-t border-slate-200 mt-2 pt-2">
                      <a
                        href="/admin/login"
                        className="flex items-center px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors text-sm"
                      >
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                        Admin Access
                      </a>
                    </div>
		   */}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </header>

        <div className="fixed bottom-24 right-6 z-50">
          <div className="relative group">
            <button
              onClick={() => (window.location.href = "/auth/customer/register")}
	      className="rounded-full hover:scale-110 transition-transform"
            >
	      <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-16 h-16" />
	      {/* <MessageCircle className="w-6 h-6" /> */}
            </button>
            <div className="absolute right-100 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Join StartupRunway
            </div>
          </div>
        </div>

        {loginDropdownOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setLoginDropdownOpen(false)}
          ></div>
        )}

        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
        >
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                One-Stop Startup Hub
              </h1>
              <p className="text-xl md:text-2xl text-white text-slate-300 mb-8 leading-relaxed">
                Empowering Indian Startups to Launch, Scale, and Succeed
              </p>
              <p className="text-sm text-white sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed">
                Innovation Meets Business Management, All in One Platform
              </p>
              <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
                <span className="text-yellow-400 md:text-base">
                  Your incredible idea might be next. Are you ready?
                </span>
              </p>
              <button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </button>
            </div>

            <footer className="mt-12">
              <div className="container mx-auto text-center">
                <p className="text-sm md:text-base text-white ">
                  Founders | Entrepreneurs | Service Partners | Studentprenuers
                  | Investors
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  &copy; {new Date().getFullYear()} StartupRunway. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>
        {/* Growth Plan Packages Section */}
        <section id="pricing" className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
                Growth Plan Packages
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the perfect package to accelerate your startup journey
                from ideation to scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Starter Package */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group relative flex flex-col justify-between">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Starter
                  </h3>
                  <div className="text-slate-400">One-time</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Business Model Validation
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Market Research & Analysis
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Basic Legal Structure Setup
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    MVP Planning & Roadmap
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    2 Strategy Sessions
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Starter")}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 mt-auto"
                >
                  Get Started
                </button>
              </div>

              {/* Growth Package */}
              <div className="bg-slate-900 p-8 rounded-xl border-2 border-amber-500 transition-all duration-300 group relative flex flex-col justify-between">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Growth</h3>
                  <div className="text-slate-400">3-month engagement</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Everything in Starter
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    MVP Development Support
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Go-to-Market Strategy
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Team Building & Hiring
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Funding Preparation
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Weekly Strategy Sessions
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Growth")}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 mt-auto"
                >
                  Get Started
                </button>
              </div>

              {/* Scale Package */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group relative flex flex-col justify-between">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">Scale</h3>
                  <div className="text-slate-400">6-month engagement</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Everything in Growth
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Full Product Development
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Marketing & Sales Systems
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Operations Optimization
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Investor Pitch & Funding
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Dedicated Account Manager
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Scale")}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 mt-auto"
                >
                  Get Started
                </button>
              </div>

              {/* Enterprise Package */}
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 group relative flex flex-col justify-between">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Enterprise
                  </h3>
                  <div className="text-3xl font-bold text-amber-400 mb-2">
                    Custom
                  </div>
                  <div className="text-slate-400">12+ months</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Everything in Scale
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Multi-Product Strategy
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    International Expansion
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Series A+ Preparation
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    Executive Team Support
                  </li>
                  <li className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    24/7 Priority Support
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Enterprise")}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 mt-auto"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Additional Features Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-8 text-white">
                All Packages Include
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center text-slate-300">
                  <Shield className="w-5 h-5 text-amber-400 mr-2" />
                  Legal Protection
                </div>
                <div className="flex items-center justify-center text-slate-300">
                  <Users className="w-5 h-5 text-amber-400 mr-2" />
                  Expert Network Access
                </div>
                <div className="flex items-center justify-center text-slate-300">
                  <Target className="w-5 h-5 text-amber-400 mr-2" />
                  Success Metrics Tracking
                </div>
                <div className="flex items-center justify-center text-slate-300">
                  <Lightbulb className="w-5 h-5 text-amber-400 mr-2" />
                  Innovation Workshops
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
                How It Works
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our proven 4-step process to transform your startup vision into
                reality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Discovery</h3>
                <p className="text-slate-300 leading-relaxed">
                  We analyze your vision, market opportunity, and current
                  challenges to create a tailored roadmap.
                </p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Strategy</h3>
                <p className="text-slate-300 leading-relaxed">
                  Develop comprehensive business strategy, technical
                  architecture, and go-to-market plans.
                </p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Execute</h3>
                <p className="text-slate-300 leading-relaxed">
                  Implement solutions with our expert team while building your
                  internal capabilities.
                </p>
              </div>

              <div className="text-center group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-900 font-bold text-xl group-hover:scale-110 transition-transform">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Scale</h3>
                <p className="text-slate-300 leading-relaxed">
                  Optimize operations, expand market reach, and prepare for
                  sustainable growth and funding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Echo System */}

        <section className="bg-slate-900 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Partner Ecosystem
            </h2>
            <p className="text-lg md:text-xl mb-12 text-slate-300 leading-relaxed">
              Access trusted experts, service providers, and networks to launch,
              grow, and scale your startup seamlessly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Financial & Legal Services */}
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  Financial & Legal Services
                </h3>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>Chartered Accountants (CAs)</li>
                  <li>Banks & FinCorps</li>
                  <li>Online Payment Gateways</li>
                  <li>Legal Advocates & Consultants</li>
                </ul>
                {/*
        	<button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
          	Connect with Experts
        	</button>
	        */}
              </div>

              {/* Marketing & Growth */}
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  Marketing & Growth
                </h3>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>Digital Marketing Agencies</li>
                  <li>Web Development Companies</li>
                  <li>Branding & Design Agencies</li>
                  <li>Offline Digital Marketing</li>
                </ul>

                {/*
        	<button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
          	Find Growth Partners
        	</button>
                */}
              </div>

              {/* Technology & Operations */}
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  Technology & Operations
                </h3>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>Web & App Development</li>
                  <li>IT Support & Cloud Services</li>
                  <li>Co-Working Spaces</li>
                  <li>Interior Designers & Office Setup</li>
                  <li>Facility Services</li>
                </ul>

                {/*
        	<button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
          	Explore Operational Services
        	</button>
                */}
              </div>

              {/* E-Centers & Researchers */}
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  Unitversities/ R&D Collaboration
                </h3>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>E-Centers</li>
                  <li>University R&D Centers</li>
                </ul>
                {/*
	        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
        	  Join Our Network
	        </button>
	       */}
              </div>

              {/* Ecosystem & Networking */}
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  Ecosystem & Networking
                </h3>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>Incubators & Accelerators Accross India</li>
                  <li>Startup Networks & Communities</li>
                  <li>Mentorship & Advisory Programs</li>
                </ul>
                {/*
	        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
        	  Join Our Network
	        </button>
	       */}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog">
          <BlogSection />
        </section>

        {/* Technology Partners Section */}
        <section id="partners" className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
                Technology Partners
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Trusted partnerships with industry-leading technology providers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 flex flex-col items-center justify-center group">
                <img
                  src="/aws-logo.png"
                  alt="AWS"
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 flex flex-col items-center justify-center group">
                <img
                  src="/images/partners/google-cloud-logo.png"
                  alt="Google Cloud"
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 flex flex-col items-center justify-center group">
                <img
                  src="/microsoft-azure-logo.jpg"
                  alt="Microsoft Azure"
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 flex flex-col items-center justify-center group">
                <img
                  src="/stripe-logo.png"
                  alt="Stripe"
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 flex flex-col items-center justify-center group">
                <img
                  src="/salesforce-logo.png"
                  alt="Salesforce"
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 hover:border-amber-500 transition-all duration-300 flex flex-col items-center justify-center group">
                <img
                  src="/hubspot-logo.png"
                  alt="HubSpot"
                  className="w-full h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
        {/*
        <section id="companies" className="py-20 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Companies We've Mentored</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Proud to have supported these innovative startups on their journey to success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">TechFlow Solutions</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  B2B SaaS platform that achieved $2M ARR within 18 months of launch.
                </p>
                <div className="text-amber-400 font-medium">Series A: $5M raised</div>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">GreenEnergy Innovations</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Clean tech startup revolutionizing solar energy storage solutions.
                </p>
                <div className="text-amber-400 font-medium">Seed: $3M raised</div>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">HealthTech Connect</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Digital health platform connecting patients with specialized care providers.
                </p>
                <div className="text-amber-400 font-medium">Series B: $12M raised</div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-slate-800">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
                What Our Clients Say
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Hear from the entrepreneurs who've transformed their visions
                into successful ventures
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 flex flex-col justify-between h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  "StartupRunway Team provided invaluable mentorship in
                  launching Frutera, guiding us from the very beginning. The
                  team helped us choose the company name, develop branding, and
                  plan the business strategy. Beyond that, supported the
                  operational setup, including establishing our factory,
                  ensuring that we were prepared for production and scale. His
                  guidance and expertise were instrumental in turning our
                  concept into a fully functional business.
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-white">Jagadish M</div>
                  <div className="text-amber-400">
                    MD, Frutera Bevarages, Prakasam (DT), Andhra Pradesh
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 flex flex-col justify-between h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  Team StartupRunway has been a key mentor in our journey,
                  providing strategic guidance from the very beginning. They
                  supported us in naming our company and setting up operations,
                  offering insights that helped shape our vision. Under their
                  mentorship, we successfully developed innovative solutions,
                  including our rural food delivery platform, 'Aahaargo,'
                  bridging the gap between rural communities and modern
                  services. Their guidance and belief in our potential have been
                  instrumental in our growth
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-white">Vinay Teja Mathe</div>
                  <div className="text-amber-400">
                    CEO & Managing Director, DriftSync Solutions
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 flex flex-col justify-between h-full">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">
                  The Founder of StartupRunway mentored and guided me early in
                  my journey, helping me participate in tech competitions and
                  develop the computer-to-computer calling functionality in
                  2005, it's the foundation of Lintel India’s core product. He
                  provided invaluable advice on career moves, including joining
                  a Pune-based IVR startup as a partner, where I contributed to
                  projects for clients such as Radio Mirchi, HDFC Bank, and HP
                  Gas. His continued mentorship and strategic guidance were
                  instrumental when I launched my own cloud IVR venture, which
                  has now grown into a multinational company. I owe much of my
                  early growth and success to his support and guidance.
                </p>
                <div className="mt-auto">
                  <div className="font-bold text-white">Godson Gera</div>
                  <div className="text-amber-400">
                    Founder & CEO, Lintel India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="py-20 bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-500"
        >
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                Ready to Build Your Business?
              </h2>
              <p className="text-xl md:text-2xl text-slate-800 mb-8 leading-relaxed">
                Join successful entrepreneurs who've transformed their visions
                into thriving businesses with StartupRunway.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                </button>
                <button
                  onClick={() => handleWhatsAppClick()}
                  className="bg-transparent border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"
        >
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">
                Get In Touch
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ready to transform your startup vision into reality? Let's
                discuss how we can help you succeed.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-amber-400 mr-4" />
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-slate-300">
                        contact@startuprunway.in
                      </div>
                      <div className="text-slate-300">
                        info@startuprunway.in
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-amber-400 mr-4" />
                    <div>
                      <div className="text-white font-medium">Phone</div>
                      <div className="text-slate-300">+91 90718 83088</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-amber-400 mr-4" />
                    <div>
                      <div className="text-white font-medium">Location</div>
                      <div className="text-slate-300">
                        Bangalore · Supporting Global Teams Remotely
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-6 h-6 text-amber-400 mr-4" />
                    <div>
                      <div className="text-white font-medium">WhatsApp</div>
                      <button
                        onClick={() => handleWhatsAppClick()}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center mt-1"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Click to message us
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="text-lg font-bold mb-4 text-white">
                    New to StartupRunway?
                  </h4>
                  <div className="flex flex-col space-y-3">
                    <a
                      href="/auth/customer/register"
                      className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-3 rounded-lg font-medium transition-colors text-center flex items-center justify-center"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Register as Customer
                    </a>
                    <a
                      href="/auth/partner/register"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Join as Partner
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contactForm.email}
                      onChange={handleEmailChange}
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white focus:outline-none transition-colors resize-none ${
                        emailError
                          ? "border-red-500"
                          : "border-slate-700 focus:border-amber-400"
                      }`}
                      required
                    />
                    {emailError && (
                      <p className="text-red-400 text-sm mt-1">{emailError}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !!emailError}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-slate-600 disabled:to-slate-700 text-slate-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  {submitMessage && (
                    <p
                      className={`text-center ${submitMessage.includes("Thank you") ? "text-green-400" : "text-red-400"}`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Noupe Chatbot Script */}
       <Script
       	src="https://www.noupe.com/embed/01997896505278e59e770cc4f49a1de9b374.js"
       	strategy="lazyOnload"
       />
    </div>
  );
}

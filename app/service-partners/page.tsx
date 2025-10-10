// app/service-providers/page.tsx
"use client";

import React, { useState } from "react";
import ActiveNeuralBackground from "@/components/ActiveNeuralBackground";

interface ServiceProvider {
  id: number;
  name: string;
  description: string;
  contribution: string;
  value: string;
  subServices: string[];
}

const serviceProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "CA Firm",
    description:
      "Chartered Accountancy or Business-Compliance firms providing legal, tax, accounting, and statutory services.",
    contribution:
      "Provide legal, accounting, and compliance services to startups. Help founders with company registration, tax filing, and statutory compliance. Ensure startups stay audit-ready and compliant with government regulations.",
    value:
      "Access to a wide pool of early-stage startups in need of accounting & compliance services. Brand visibility as a trusted CA partner. Opportunity to provide ongoing compliance packages, bookkeeping, and advisory services.",
    subServices: [
      "Private Limited Company registration",
      "LLP setup",
      "Partnership Firm registration",
      "One Person Company registration",
      "Proprietorship Firm registration",
      "Public Limited Company registration",
      "Section 8 Company registration",
      "Nidhi Company registration",
      "Producer Company registration",
      "Trust registration",
      "Income Tax Return filing",
      "GST Return filing",
      "TDS/TCS return filings",
      "Responding to Income Tax notices",
      "Responding to GST notices",
      "E-way bill services",
      "TAN Application",
      "PAN Application",
      "GST Registration",
      "LLP Annual Filing",
      "Company Annual Filing",
      "Maintenance of Minutes/Registers",
      "Corporate structure updates",
      "Change in authorized share capital",
      "Allotment/transfer of shares",
      "Business type conversion",
      "Closing/winding up firms",
      "Strike off/dissolution",
      "Accounting & Bookkeeping",
      "Record updates (journals, ledgers)",
      "Virtual Accounting services",
      "Comprehensive compliance packages",
    ],
  },
  {
    id: 2,
    name: "Legal Firm",
    description:
      "Law firms providing corporate, startup, and regulatory legal services.",
    contribution:
      "Provide corporate and startup legal guidance. Draft contracts, handle IP protection, and advise on compliance. Support dispute resolution and franchise agreements.",
    value:
      "Exposure to startups needing legal guidance at every stage. Build credibility as a go-to legal partner. Opportunities for recurring advisory services and IP registrations.",
    subServices: [
      "Contract drafting & review",
      "IP & Trademark Registration",
      "Legal opinion & compliance",
      "Company incorporation advisory",
      "Franchise agreements",
      "Dispute resolution & litigation support",
    ],
  },
  {
    id: 3,
    name: "Digital Marketing Firm",
    description:
      "Companies providing SEO, social media marketing, content creation, branding, and growth services.",
    contribution:
      "Help startups build their online presence and reach target customers. Provide branding, SEO, content, social media campaigns, and influencer collaborations.",
    value:
      "Connect with startups ready to invest in growth and brand building. Showcase marketing expertise to a growing entrepreneurial ecosystem. Potential long-term marketing retainers from startups.",
    subServices: [
      "SEO optimization",
      "Social media marketing",
      "Content creation",
      "Branding & design",
      "Paid advertising campaigns",
      "Influencer collaborations",
      "Performance analytics & reporting",
    ],
  },
  {
    id: 4,
    name: "HR Consulting Firm",
    description:
      "Human resource firms providing talent acquisition, team structuring, and culture development services.",
    contribution:
      "Assist startups in hiring, team structuring, and building strong culture. Conduct skill assessments and provide employee background verification.",
    value:
      "Access to fast-growing startups looking for HR solutions. Opportunity to provide consulting, recruitment, and workshops. Establish as the trusted HR partner for the startup ecosystem.",
    subServices: [
      "Full-cycle recruitment",
      "Team structure optimization",
      "Culture development workshops",
      "Employee skill assessments",
      "Background verification services",
    ],
  },
  {
    id: 5,
    name: "Web Development / IT Firm",
    description:
      "Technology firms providing web development, IT automation, and product development solutions.",
    contribution:
      "Build websites, apps, and automation tools for startups. Set up cloud infrastructure and integrate APIs.",
    value:
      "Access to early-stage startups in need of technical infrastructure. Showcase solutions (web, app, cloud, automation) and generate recurring revenue. Partnership with a growing startup network to scale services.",
    subServices: [
      "Website design & development",
      "App development",
      "Automation services (n8n, Zapier)",
      "Cloud infrastructure setup",
      "API integrations & technical architecture",
    ],
  },
  {
    id: 6,
    name: "Business Strategy Firm",
    description:
      "Companies providing business model validation, strategy, and consulting services.",
    contribution:
      "Guide startups on business model validation, market research, and growth strategies. Provide financial projections and scalability assessments.",
    value:
      "Opportunity to work with high-potential startups from ideation to scale. Build credibility as a strategic partner. Access to consulting contracts and advisory retainers.",
    subServices: [
      "Business model validation",
      "Market research & analysis",
      "Financial projections & planning",
      "Growth strategy & scalability assessment",
    ],
  },
  {
    id: 7,
    name: "Product Manufacturer",
    description:
      "Manufacturing companies supporting prototyping, product development, and scaling for startups.",
    contribution:
      "Support startups in prototyping, hardware product development, and mass production.",
    value:
      "Connect with startups needing manufacturing expertise. Build long-term partnerships. Increase visibility in the startup hardware ecosystem.",
    subServices: [
      "Prototype manufacturing",
      "Mass production support",
      "Hardware product consulting",
    ],
  },
  {
    id: 8,
    name: "Mentor",
    description:
      "Experienced individuals guiding entrepreneurs through startup growth and strategy.",
    contribution:
      "Provide guidance to founders on growth strategy, fundraising, and business operations. Support pitch decks and investor interactions.",
    value:
      "Establish reputation as a thought leader. Mentor multiple startups and expand network. Access to startup events and exclusive founder interactions.",
    subServices: [
      "Startup mentoring",
      "Business strategy guidance",
      "Pitch deck & investor coaching",
    ],
  },
  {
    id: 9,
    name: "Trainer",
    description:
      "Technical or skill trainers providing practical guidance to startup teams and founders.",
    contribution:
      "Provide technical and skill development training to startup teams. Help founders and employees upskill in practical tools and processes.",
    value:
      "Access to a community of startups needing regular training programs. Opportunity to run workshops and training sessions. Build brand recognition as a startup trainer.",
    subServices: [
      "Technical workshops",
      "Skill development training",
      "Software tool training (e.g., n8n)",
    ],
  },
  {
    id: 10,
    name: "Motivator",
    description:
      "Individuals providing motivation and coaching to entrepreneurs and studentpreneurs.",
    contribution:
      "Conduct motivational sessions and leadership coaching for founders and studentpreneurs. Support personal growth and mindset development.",
    value:
      "Build a personal brand as a startup coach. Connect with ambitious founders and studentpreneurs. Opportunity for workshops, online sessions, and speaking engagements.",
    subServices: ["Motivational sessions", "Leadership coaching", "Personal growth guidance"],
  },
  {
    id: 11,
    name: "Presenter",
    description:
      "Professionals presenting seminars, workshops, and events on behalf of StartupRunway.",
    contribution:
      "Represent StartupRunway at events, workshops, and investor demos. Showcase startup solutions and facilitate presentations.",
    value:
      "Gain exposure to the startup ecosystem. Establish reputation as a public speaker and event professional. Engage with investors, mentors, and founders.",
    subServices: [
      "Event presentations",
      "Workshops & demos",
      "Investor or customer presentations",
    ],
  },
  {
    id: 12,
    name: "Event Organizer",
    description:
      "Organizers managing startup events, competitions, seminars, and workshops.",
    contribution:
      "Manage startup events, competitions, hackathons, and workshops. Ensure smooth logistics and execution for StartupRunway programs.",
    value:
      "Build credibility as a professional startup event manager. Access to a network of startups and mentors. Generate recurring event management opportunities.",
    subServices: ["Event management", "Competitions & hackathons", "Seminars & workshops"],
  },
  {
    id: 13,
    name: "Facilitator",
    description:
      "Office facilitators providing coworking, rented, or owned office spaces with infrastructure.",
    contribution:
      "Provide coworking spaces, office setups, and infrastructure support for startups.",
    value:
      "Attract startups to utilize their facilities. Generate recurring revenue through workspace subscriptions. Build reputation as a startup-friendly office provider.",
    subServices: [
      "Co-working space facilitation",
      "Office setup (interiors, cabins, desks)",
      "Cleaning, security, and facility management",
    ],
  },
  {
    id: 14,
    name: "Hospitality Services",
    description:
      "Companies providing hospitality, catering, and related services for events or offices.",
    contribution:
      "Provide catering, office pantry services, and guest management for events or offices.",
    value:
      "Access to startup events and office clients. Opportunity for recurring catering and hospitality contracts. Establish reputation as a reliable event & office service provider.",
    subServices: ["Event catering", "Office pantry services", "Guest management"],
  },
  {
    id: 15,
    name: "Security Services",
    description:
      "Security companies providing safety and monitoring services for offices and events.",
    contribution:
      "Ensure safety and monitoring at startup offices and events. Provide on-site and event security, surveillance, and monitoring.",
    value:
      "Build credibility in the startup ecosystem. Recurring contracts for office and event security. Exposure to a growing community of startups and events.",
    subServices: ["On-site security", "Event security", "Surveillance & monitoring"],
  },
];

const ServiceProvidersPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800">
	 <ActiveNeuralBackground /> 
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          StartupRunway Service Providers
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Explore our curated network of service providers to support your
          startup journey from idea to scale. Legal, accounting, tech, marketing, HR, and more — all in one place.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceProviders.map((provider, index) => (
          <div
            key={provider.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {provider.name}
            </h2>
            <p className="mt-2 text-gray-600">{provider.description}</p>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Contribution:</h3>
              <p className="text-gray-600">{provider.contribution}</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Value for Partner:</h3>
              <p className="text-gray-600">{provider.value}</p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
              >
                {openIndex === index
                  ? "Hide Sub-Services ▲"
                  : "View Sub-Services ▼"}
              </button>
              {openIndex === index && (
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  {provider.subServices.map((service, i) => (
                    <li key={i}>{service}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceProvidersPage;

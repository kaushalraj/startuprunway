// app/service-providers/page.tsx
"use client";

import React from "react";
import ActiveNeuralBackground from "@/components/ActiveNeuralBackground";

interface ServiceProvider {
  id: number;
  name: string;
  description: string;
  contribution: string;
  value: string;
}

const serviceProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "CA Firm",
    description:
      "Chartered Accountancy or Business-Compliance firms providing legal, tax, accounting, and statutory services.",
    contribution:
      "Support startups in legal, accounting, and compliance matters, helping them stay audit-ready and compliant.",
    value:
      "Connect with a growing startup network and generate revenue from advisory, bookkeeping, and compliance services.",
  },
  {
    id: 2,
    name: "Legal Firm",
    description:
      "Law firms providing corporate, startup, and regulatory legal services.",
    contribution:
      "Guide startups on contracts, IP protection, and regulatory compliance.",
    value:
      "Build credibility as a legal partner and generate revenue from startup legal advisory and registrations.",
  },
  {
    id: 3,
    name: "Digital Marketing Firm",
    description:
      "Companies providing SEO, social media marketing, content creation, branding, and growth services.",
    contribution:
      "Help startups grow their brand, online presence, and reach target customers.",
    value:
      "Access startups ready to invest in marketing services, generating retainers and project revenue.",
  },
  {
    id: 4,
    name: "HR Consulting Firm",
    description:
      "Human resource firms providing talent acquisition, team structuring, and culture development services.",
    contribution:
      "Support startups in hiring, team structuring, and culture development.",
    value:
      "Offer recruitment and HR advisory services to multiple startups, creating recurring revenue.",
  },
  {
    id: 5,
    name: "Web Development / IT Firm",
    description:
      "Technology firms providing web development, IT automation, and product development solutions.",
    contribution:
      "Build websites, apps, automation tools, and cloud infrastructure for startups.",
    value:
      "Generate revenue by providing technical solutions and long-term IT services to startups.",
  },
  {
    id: 6,
    name: "Business Strategy Firm",
    description:
      "Companies providing business model validation, strategy, and consulting services.",
    contribution:
      "Guide startups on business models, market research, and growth strategies.",
    value:
      "Revenue from consulting fees and advisory retainers for strategic support to startups.",
  },
  {
    id: 7,
    name: "Product Manufacturer",
    description:
      "Manufacturing companies supporting prototyping, product development, and scaling for startups.",
    contribution:
      "Help startups prototype, develop hardware, and scale production.",
    value:
      "Earn revenue by providing manufacturing and product development services to startups.",
  },
  {
    id: 8,
    name: "Mentor",
    description:
      "Experienced individuals guiding entrepreneurs through startup growth and strategy.",
    contribution:
      "Offer mentorship on growth, fundraising, and business operations.",
    value:
      "Revenue from paid mentorship, pitch deck coaching, and advisory sessions with startups.",
  },
  {
    id: 9,
    name: "Trainer",
    description:
      "Technical or skill trainers providing practical guidance to startup teams and founders.",
    contribution:
      "Provide skill development, workshops, and training programs for startup teams.",
    value:
      "Revenue through workshops, online courses, and training engagements.",
  },
  {
    id: 10,
    name: "Motivator",
    description:
      "Individuals providing motivation and coaching to entrepreneurs and studentpreneurs.",
    contribution:
      "Conduct motivational sessions and leadership coaching for founders.",
    value:
      "Revenue from workshops, speaking engagements, and online coaching sessions.",
  },
  {
    id: 11,
    name: "Presenter",
    description:
      "Professionals presenting seminars, workshops, and events on behalf of StartupRunway.",
    contribution:
      "Represent StartupRunway at events and investor presentations.",
    value:
      "Earn revenue via presentation fees and exposure to startup networks.",
  },
  {
    id: 12,
    name: "Event Organizer",
    description:
      "Organizers managing startup events, competitions, seminars, and workshops.",
    contribution:
      "Manage and execute startup events, hackathons, and workshops.",
    value:
      "Revenue from event management fees and recurring contracts with StartupRunway events.",
  },
  {
    id: 13,
    name: "Facilitator",
    description:
      "Office facilitators providing coworking, rented, or owned office spaces with infrastructure.",
    contribution:
      "Provide coworking spaces and office infrastructure for startups.",
    value:
      "Generate revenue from workspace subscriptions and facilities management.",
  },
  {
    id: 14,
    name: "Hospitality Services",
    description:
      "Companies providing hospitality, catering, and related services for events or offices.",
    contribution:
      "Support events and office hospitality needs for startups.",
    value:
      "Revenue from catering, pantry services, and guest management during events.",
  },
  {
    id: 15,
    name: "Security Services",
    description:
      "Security companies providing safety and monitoring services for offices and events.",
    contribution:
      "Ensure safety and security at startup offices and events.",
    value:
      "Revenue from office/event security contracts and monitoring services.",
  },
];

const ServiceProvidersPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 overflow-x-hidden">
      {/* Animated background */}
      <ActiveNeuralBackground />

      <div className="relative z-10 px-4 md:px-16 py-16 text-white">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            StartupRunway Service Providers
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-200">
            Our network of service providers helps startups scale faster while
            creating revenue opportunities for partners.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-white">
                {provider.name}
              </h2>
              <p className="mt-2 text-gray-200">{provider.description}</p>

              <div className="mt-4">
                <h3 className="font-semibold text-white">Contribution:</h3>
                <p className="text-gray-200">{provider.contribution}</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-white">Revenue Opportunity:</h3>
                <p className="text-gray-200">{provider.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvidersPage;

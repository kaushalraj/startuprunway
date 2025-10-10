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

// --- Service Providers Data (simplified snippet, include all 15 in your actual file) ---
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
  // Add remaining 13 service providers here...
];

const ServiceProvidersPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 overflow-x-hidden">
      {/* Animated background */}
      <ActiveNeuralBackground />

      {/* Page Content */}
      <div className="relative z-10 px-4 md:px-16 py-16 text-white">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            StartupRunway Service Providers
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-200">
            Explore our curated network of service providers to support your
            startup journey from idea to scale. Legal, accounting, tech,
            marketing, HR, and more — all in one place.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceProviders.map((provider, index) => (
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
                <h3 className="font-semibold text-white">Value for Partner:</h3>
                <p className="text-gray-200">{provider.value}</p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left font-medium text-blue-400 hover:text-blue-200 focus:outline-none"
                >
                  {openIndex === index
                    ? "Hide Sub-Services ▲"
                    : "View Sub-Services ▼"}
                </button>
                {openIndex === index && (
                  <ul className="mt-2 list-disc list-inside text-gray-200">
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
    </div>
  );
};

export default ServiceProvidersPage;

"use client";

import React from "react";
import ActiveNeuralBackground from "@/components/ActiveNeuralBackground";

interface ServiceProvider {
  id: number;
  name: string;
  description: string;
  invitation: string;
}

const serviceProviders: ServiceProvider[] = [
  {
    id: 1,
    name: "CA Firm",
    description:
      "Chartered Accountancy or Business-Compliance firms providing legal, tax, accounting, and statutory services.",
    invitation:
      "Join StartupRunway to guide fast-growing startups and expand your client base effortlessly!",
  },
  {
    id: 2,
    name: "Legal Firm",
    description:
      "Law firms providing corporate, startup, and regulatory legal services.",
    invitation:
      "Become a trusted legal partner for India’s next-generation startups and grow your practice.",
  },
  {
    id: 3,
    name: "Digital Marketing Firm",
    description:
      "Companies providing SEO, social media marketing, content creation, branding, and growth services.",
    invitation:
      "Amplify startups’ brands while creating new revenue streams through our exclusive network.",
  },
  {
    id: 4,
    name: "HR Consulting Firm",
    description:
      "Human resource firms providing talent acquisition, team structuring, and culture development services.",
    invitation:
      "Help startups hire and build strong teams, while connecting with multiple high-potential clients.",
  },
  {
    id: 5,
    name: "Web Development / IT Firm",
    description:
      "Technology firms providing web development, IT automation, and product development solutions.",
    invitation:
      "Deliver tech solutions to innovative startups and scale your services through StartupRunway.",
  },
  {
    id: 6,
    name: "Business Strategy Firm",
    description:
      "Companies providing business model validation, strategy, and consulting services.",
    invitation:
      "Guide startups on growth strategies and become their go-to advisor for long-term engagement.",
  },
  {
    id: 7,
    name: "Product Manufacturer",
    description:
      "Manufacturing companies supporting prototyping, product development, and scaling for startups.",
    invitation:
      "Support startups in prototyping and scaling products while building strong B2B relationships.",
  },
  {
    id: 8,
    name: "Mentor",
    description:
      "Experienced individuals guiding entrepreneurs through startup growth and strategy.",
    invitation:
      "Share your experience with startups and become a valued mentor in a high-impact network.",
  },
  {
    id: 9,
    name: "Trainer",
    description:
      "Technical or skill trainers providing practical guidance to startup teams and founders.",
    invitation:
      "Provide skill-building workshops and training to ambitious startup teams ready to invest in learning.",
  },
  {
    id: 10,
    name: "Motivator",
    description:
      "Individuals providing motivation and coaching to entrepreneurs and studentpreneurs.",
    invitation:
      "Inspire founders and studentpreneurs through workshops and motivational sessions on our platform.",
  },
  {
    id: 11,
    name: "Presenter",
    description:
      "Professionals presenting seminars, workshops, and events on behalf of StartupRunway.",
    invitation:
      "Showcase your expertise and represent StartupRunway at events, competitions, and seminars.",
  },
  {
    id: 12,
    name: "Event Organizer",
    description:
      "Organizers managing startup events, competitions, seminars, and workshops.",
    invitation:
      "Organize events, hackathons, and workshops for startups while building lasting business connections.",
  },
  {
    id: 13,
    name: "Facilitator",
    description:
      "Office facilitators providing coworking, rented, or owned office spaces with infrastructure.",
    invitation:
      "Offer startups premium workspaces and grow your coworking business through our platform.",
  },
  {
    id: 14,
    name: "Hospitality Services",
    description:
      "Companies providing hospitality, catering, and related services for events or offices.",
    invitation:
      "Provide catering and hospitality for startup events and gain recurring service opportunities.",
  },
  {
    id: 15,
    name: "Security Services",
    description:
      "Security companies providing safety and monitoring services for offices and events.",
    invitation:
      "Secure startup offices and events while connecting with multiple growing companies.",
  },
];

const ServiceProvidersPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 overflow-x-hidden">
      <ActiveNeuralBackground />

      <div className="relative z-10 px-4 md:px-16 py-16 text-white">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            StartupRunway Service Providers
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-200">
            Join our network to help startups scale faster and grow your business at the same time.
          </p>
        </header>

        <div className="flex flex-col space-y-6">
          {serviceProviders.map((provider) => (
            <div
              key={provider.id}
              className="flex flex-col md:flex-row items-start md:items-center bg-white bg-opacity-30 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition duration-300"
            >
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {provider.name}
                </h2>
                <p className="mt-1 text-gray-200">{provider.description}</p>
              </div>

              <div className="mt-4 md:mt-0 md:ml-8 flex-1">
                <p className="text-gray-100 italic font-medium">
                  {provider.invitation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProvidersPage;

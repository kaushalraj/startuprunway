import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function StudentpreneurPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          StartupRunway University Program
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Transforming engineering students into entrepreneurs with real startup experience during their final years.
        </p>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Program Overview</h2>
        <p className="mb-4">
          Our 2-year Studentpreneur Track equips engineering students with management, financial, legal, technical, and psychological skills while helping them create and operate a real company during their final year.
        </p>
        <p className="mb-4">
          <strong>Program Duration:</strong> 2 Years (3rd & 4th Year of Engineering)
        </p>
      </section>

      {/* Year 1 - Training & Skill Development */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Year 1 – Training & Skill Development</h2>
        <p className="mb-6 text-center max-w-3xl mx-auto">
          Focus: Building the entrepreneurial mindset and fundamental skills.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Entrepreneurship & Management: Startup fundamentals, business models, leadership.",
            "Accounting & Financial Skills: Basics of accounting, budgeting, cash flow, funding.",
            "Legal & Compliance: Company registration, contracts, IP, taxation, startup laws.",
            "People & HR Management: Hiring, team building, organizational culture, ESOPs.",
            "Technical Skills: Product design, prototyping, emerging tech tools.",
            "Creative Problem-Solving: Identifying real-world problems, design thinking.",
            "Market Research & Analysis: Industry studies, competitor benchmarking, surveys.",
            "Innovation & Patents: Patenting process, IP models, protection strategies.",
            "Entrepreneurial & Human Psychology: Founder mindset, stress management, negotiation, employee & customer psychology."
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-indigo-600 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Year 2 - Startup Creation & Operation */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Year 2 – Startup Creation & Operation</h2>
        <p className="mb-6 text-center max-w-3xl mx-auto">
          Focus: Turning ideas into a real startup company.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Company Formation: Legal incorporation (Pvt Ltd / LLP / Startup India), drafting agreements, shareholder structure.",
            "Product Development: MVP design & development, technology & prototype support.",
            "Operations Management: Running the business while studying, building core teams & assigning roles.",
            "Sales & Marketing: Go-to-market strategy, digital marketing, customer acquisition.",
            "Financial Operations: Bookkeeping, compliance, taxation, connecting with angel investors / grants.",
            "Scaling & Mentorship: Weekly/Monthly mentoring sessions, expert guidance from industry professionals.",
            "Pitch & Demo Days: Students pitch to real investors, access to StartupRunway network for funding & partnerships."
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-purple-600 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Benefits */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Program Benefits</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">For Students</h3>
            <p>Graduate with company ownership, practical entrepreneurship skills, and a stronger resume.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">For Universities</h3>
            <p>Position as entrepreneurship-driven institutions, improve placement records, and attract industry partnerships.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">For StartupRunway</h3>
            <p>Build a pipeline of high-potential startups, early access to innovative ideas, and long-term relationships with founders.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Become a Studentpreneur Today!</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join the StartupRunway University Program and graduate with your own company. Gain real-world startup experience and start your entrepreneurial journey now.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition">
          Apply Now
        </button>
      </section>
    </main>
  );
}

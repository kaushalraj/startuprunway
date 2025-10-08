import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function StudentpreneurPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white py-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">StartupRunway University Program</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Transforming engineering students into entrepreneurs by equipping them with management, financial, legal, technical, and psychological skills, while creating real startups during their final year.
        </p>
        <a
          href="#apply"
          className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition"
        >
          Apply Now
        </a>
      </section>

      {/* Year 1 – Training & Skill Development */}
      <section className="py-20 px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Year 1 – Training & Skill Development</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Modules</h3>
              <ul className="space-y-4">
                {[
                  "Entrepreneurship & Management – Startup fundamentals, business models, leadership",
                  "Accounting & Financial Skills – Basics of accounting, budgeting, cash flow, funding",
                  "Legal & Compliance – Company registration, contracts, IP, taxation, startup laws",
                  "People & HR Management – Hiring, team building, organizational culture, ESOPs",
                  "Technical Skills – Product design, prototyping, emerging tech tools",
                  "Creative Problem-Solving – Identifying real-world problems, design thinking",
                  "Market Research & Analysis – Industry studies, competitor benchmarking, surveys",
                  "Innovation & Patents – Patenting process, IP models, protection strategies",
                  "Entrepreneurial & Human Psychology – Founder mindset, stress management, negotiation, employee & customer psychology"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Outcome by End of 3rd Year</h3>
              <ul className="space-y-4">
                {[
                  "Students understand how businesses work",
                  "Each student identifies a real-world problem to solve",
                  "Prepare a business plan, market research, and patentable model"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Year 2 – Startup Creation & Operation */}
      <section className="py-20 px-6 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Year 2 – Startup Creation & Operation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Core Activities</h3>
              <ul className="space-y-4">
                {[
                  "Company Formation – Legal incorporation (Pvt Ltd / LLP / Startup India), drafting agreements, shareholder structure",
                  "Product Development – MVP design & development, technology & prototype support",
                  "Operations Management – Running the business while studying, building core teams & assigning roles",
                  "Sales & Marketing – Go-to-market strategy, digital marketing, customer acquisition",
                  "Financial Operations – Bookkeeping, compliance, taxation, connecting with angel investors / grants",
                  "Scaling & Mentorship – Weekly/Monthly mentoring sessions, expert guidance from industry professionals",
                  "Pitch & Demo Days – Students pitch to real investors, access to StartupRunway network"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Outcome by Graduation</h3>
              <ul className="space-y-4">
                {[
                  "Students own and run their startup",
                  "Full control of their company upon graduation",
                  "Graduate with a running business, not just a degree"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Program Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">For Students</h3>
              <ul className="space-y-3">
                {[
                  "Graduate with company ownership instead of just a job offer",
                  "Gain practical entrepreneurship skills + hands-on startup experience",
                  "Stronger resume with lifelong skills"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">For Universities</h3>
              <ul className="space-y-3">
                {[
                  "Position themselves as entrepreneurship-driven institutions",
                  "Improve placement records (students may become employers)",
                  "Build reputation as a startup hub attracting industry partnerships"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold mb-4">For StartupRunway</h3>
              <ul className="space-y-3">
                {[
                  "Build a pipeline of high-potential startups",
                  "Early access to innovative ideas",
                  "Long-term relationships with founders from student stage to growth stage"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-600 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-24 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Become a Studentpreneur?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join the StartupRunway University Program and graduate as the founder of your own company with real hands-on experience.
        </p>
        <a
          href="/apply"
          className="inline-block bg-white text-indigo-700 font-semibold px-10 py-4 rounded-lg hover:bg-gray-200 transition"
        >
          Apply Now
        </a>
      </section>
    </main>
  );
}

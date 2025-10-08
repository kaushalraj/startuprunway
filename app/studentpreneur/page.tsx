'use client';

import React from 'react';

const StudentpreneurPage = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-32 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          StartupRunway University Program
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Transforming engineering students into entrepreneurs with real startup experience
        </p>
        <a
          href="#apply"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>

      {/* Program Objective */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Program Objective</h2>
          <p className="text-lg mb-4">
            To transform engineering students into entrepreneurs by equipping them with management, financial, legal, technical, and psychological skills, while also helping them create and operate a real company during their final year of study.
          </p>
          <p className="text-lg font-semibold">Program Duration: 2 Years (3rd & 4th Year of Engineering)</p>
        </div>
      </section>

      {/* Year 1 – Training & Skill Development */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Year 1 – Training & Skill Development</h2>
          <p className="text-lg mb-12">Focus: Building the entrepreneurial mindset and fundamental skills.</p>

          <div className="space-y-8">
            {[
              {
                title: "Entrepreneurship & Management",
                desc: "Learn startup fundamentals, business models, and leadership principles."
              },
              {
                title: "Accounting & Financial Skills",
                desc: "Basics of accounting, budgeting, cash flow management, and funding strategies."
              },
              {
                title: "Legal & Compliance",
                desc: "Company registration, contracts, IP, taxation, and startup laws."
              },
              {
                title: "People & HR Management",
                desc: "Hiring, team building, organizational culture, and ESOP fundamentals."
              },
              {
                title: "Technical Skills",
                desc: "Product design, prototyping, and exposure to emerging tech tools."
              },
              {
                title: "Creative Problem-Solving",
                desc: "Identifying real-world problems and learning design thinking methods."
              },
              {
                title: "Market Research & Analysis",
                desc: "Industry studies, competitor benchmarking, and survey techniques."
              },
              {
                title: "Innovation & Patents",
                desc: "Understanding the patenting process, IP models, and protection strategies."
              },
              {
                title: "Entrepreneurial & Human Psychology",
                desc: "Founder mindset, stress management, negotiation, and customer psychology."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <span className="text-indigo-600 font-bold text-lg">{idx + 1}.</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg font-semibold">
            Outcome by end of 3rd year: Students understand how businesses work, identify real-world problems, and prepare a business plan with a patentable model.
          </p>
        </div>
      </section>

      {/* Year 2 – Startup Creation & Operation */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Year 2 – Startup Creation & Operation</h2>
          <p className="text-lg mb-12">Focus: Turning ideas into a real startup company.</p>

          <div className="space-y-8">
            {[
              {
                title: "Company Formation",
                desc: "Legal incorporation (Pvt Ltd / LLP / Startup India), drafting agreements, and shareholder structuring."
              },
              {
                title: "Product Development",
                desc: "MVP design & development, technology and prototype support."
              },
              {
                title: "Operations Management",
                desc: "Run the business while studying, build core teams and assign roles."
              },
              {
                title: "Sales & Marketing",
                desc: "Go-to-market strategy, digital marketing, and customer acquisition."
              },
              {
                title: "Financial Operations",
                desc: "Bookkeeping, compliance, taxation, and connecting with angel investors/grants."
              },
              {
                title: "Scaling & Mentorship",
                desc: "Weekly/monthly mentoring sessions with guidance from industry experts."
              },
              {
                title: "Pitch & Demo Days",
                desc: "Students pitch to real investors and access StartupRunway network for funding & partnerships."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col md:flex-row md:items-start md:space-x-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <span className="text-purple-600 font-bold text-lg">{idx + 1}.</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-lg font-semibold">
            Outcome by graduation (end of 4th year): Students already own and run their startup and take full control on graduation day.
          </p>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Program Benefits</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Students",
                benefits: [
                  "Graduate with company ownership instead of just a job offer.",
                  "Gain practical entrepreneurship skills + hands-on startup experience.",
                  "Stronger resume with lifelong skills."
                ]
              },
              {
                title: "For Universities",
                benefits: [
                  "Position themselves as entrepreneurship-driven institutions.",
                  "Improve placement records.",
                  "Build reputation as a startup hub attracting industry partnerships."
                ]
              },
              {
                title: "For StartupRunway",
                benefits: [
                  "Build a pipeline of high-potential startups.",
                  "Early access to innovative ideas.",
                  "Long-term relationship with founders from student stage to growth stage."
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {section.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="apply" className="py-20 px-6 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to become a Studentpreneur?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Join StartupRunway and graduate with your own company in hand, equipped with practical entrepreneurship skills.
        </p>
        <a
          href="/apply"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default StudentpreneurPage;

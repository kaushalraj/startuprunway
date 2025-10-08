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
          <p className="text-lg mb-6">
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
              "Entrepreneurial & Human Psychology: Founder mindset, stress management, negotiation. Employee & customer psychology."
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-semibold">
            Outcome by end of 3rd year: Students understand how businesses work, identify real-world problems, and prepare a business plan with a patentable model.
          </p>
        </div>
      </section>

      {/* Year 2 – Startup Creation & Operation */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Year 2 – Startup Creation & Operation</h2>
          <p className="text-lg mb-6">
            Focus: Turning ideas into a real startup company.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Company Formation: Legal incorporation (Pvt Ltd / LLP / Startup India), Drafting agreements, shareholder structure.",
              "Product Development: MVP design & development, Technology & prototype support.",
              "Operations Management: Running the business while studying, building core teams & assigning roles.",
              "Sales & Marketing: Go-to-market strategy, digital marketing, customer acquisition.",
              "Financial Operations: Bookkeeping, compliance, taxation, connecting with angel investors / grants.",
              "Scaling & Mentorship: Weekly/Monthly mentoring sessions, expert guidance from industry professionals.",
              "Pitch & Demo Days: Students pitch to real investors, access to StartupRunway network for funding & partnerships."
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-semibold">
            Outcome by graduation (end of 4th year): Students already own and run their startup and take full control on graduation day.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Program Benefits</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">For Students</h3>
              <ul className="list-disc pl-5">
                <li>Graduate with company ownership instead of just a job offer.</li>
                <li>Gain practical entrepreneurship skills + hands-on startup experience.</li>
                <li>Stronger resume with lifelong skills.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">For Universities</h3>
              <ul className="list-disc pl-5">
                <li>Position themselves as entrepreneurship-driven institutions.</li>
                <li>Improve placement records.</li>
                <li>Build reputation as a startup hub attracting industry partnerships.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">For StartupRunway</h3>
              <ul className="list-disc pl-5">
                <li>Build a pipeline of high-potential startups.</li>
                <li>Early access to innovative ideas.</li>
                <li>Long-term relationship with founders from student stage to growth stage.</li>
              </ul>
            </div>
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

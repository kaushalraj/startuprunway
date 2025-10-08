import React from "react";

export default function StudentpreneurPage() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform from Student → Entrepreneur Before Graduation
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          StartupRunway equips engineering students with all the skills to start, run, and scale a real company while still in college.
        </p>
        <a
          href="#apply"
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>

      {/* Program Objective */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Program Objective</h2>
          <p className="text-lg mb-2">
            Transform engineering students into entrepreneurs by equipping them with management, financial, legal, technical, and psychological skills, while creating and operating a real startup during their final year.
          </p>
          <p className="text-lg font-semibold">
            Duration: 2 Years (3rd & 4th Year of Engineering)
          </p>
        </div>
      </section>

      {/* Year 1: Training & Skill Development */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Year 1 (3rd Year) – Training & Skill Development</h2>
          <p className="text-lg mb-6 text-center">
            Focus: Building the entrepreneurial mindset and fundamental skills.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Core Modules:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Entrepreneurship & Management – Startup fundamentals, business models, leadership</li>
                <li>Accounting & Financial Skills – Basics of accounting, budgeting, cash flow, funding</li>
                <li>Legal & Compliance – Company registration, contracts, IP, taxation, startup laws</li>
                <li>People & HR Management – Hiring, team building, organizational culture, ESOPs</li>
                <li>Technical Skills – Product design, prototyping, emerging tech tools</li>
                <li>Creative Problem-Solving – Identifying real-world problems, design thinking</li>
                <li>Market Research & Analysis – Industry studies, competitor benchmarking, surveys</li>
                <li>Innovation & Patents – Patenting process, IP models, protection strategies</li>
                <li>Entrepreneurial & Human Psychology – Founder mindset, stress management, negotiation, employee & customer psychology</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Outcome by End of 3rd Year:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Students understand how businesses work.</li>
                <li>Each student (or team) identifies a real-world problem they want to solve.</li>
                <li>They prepare a business plan, market research, and patentable model.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Year 2: Startup Creation & Operation */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Year 2 (4th Year) – Startup Creation & Operation</h2>
          <p className="text-lg mb-6 text-center">
            Focus: Turning ideas into a real startup company.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Core Activities:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Company Formation – Legal incorporation (Pvt Ltd / LLP / Startup India), drafting agreements, shareholder structure</li>
                <li>Product Development – MVP design & development, technology & prototype support</li>
                <li>Operations Management – Running the business while studying, building core teams & assigning roles</li>
                <li>Sales & Marketing – Go-to-market strategy, digital marketing, customer acquisition</li>
                <li>Financial Operations – Bookkeeping, compliance, taxation, connecting with angel investors / grants</li>
                <li>Scaling & Mentorship – Weekly/monthly mentoring sessions, expert guidance from industry professionals</li>
                <li>Pitch & Demo Days – Students pitch to real investors, access to StartupRunway network for funding & partnerships</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Outcome by Graduation (End of 4th Year):</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Students already own and run their startup.</li>
                <li>On graduation day, they take full control of their company.</li>
                <li>They don’t leave college just with a degree, but with a running business.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Benefits of the Program</h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">For Students:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Graduate with company ownership instead of just a job offer</li>
                <li>Gain practical entrepreneurship skills + hands-on startup experience</li>
                <li>Stronger resume (skills are lifelong even if startup doesn’t succeed)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">For Universities:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Position themselves as entrepreneurship-driven institutions</li>
                <li>Improve placement records (students may become employers instead of job seekers)</li>
                <li>Build reputation as a startup hub attracting industry partnerships</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">For StartupRunway:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Build a pipeline of high-potential startups</li>
                <li>Early access to innovative ideas</li>
                <li>Long-term relationship with founders from student stage to growth stage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-24 px-6 text-center bg-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Become a Studentpreneur?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Apply now and start your entrepreneurial journey today. Transform your college years into the foundation of a successful startup.
        </p>
        <a
          href="#"
          className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Join StartupRunway University Program
        </a>
      </section>

    </div>
  );
}

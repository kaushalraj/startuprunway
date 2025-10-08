import React from "react";

const StudentpreneurProgram = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">StartupRunway University Program</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Transforming engineering students into entrepreneurs by equipping them with
          business, financial, legal, technical, and psychological skills while creating
          real startups during college.
        </p>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Program Duration</h2>
        <p className="mb-6">
          <strong>2 Years:</strong> 3rd & 4th Year of Engineering
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Year 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Year 1 – Training & Skill Development (3rd Year)</h3>
            <p className="mb-4 font-medium">Focus: Building entrepreneurial mindset & foundational skills</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Entrepreneurship & Management:</strong> Startup fundamentals, business models, leadership.</li>
              <li><strong>Accounting & Financial Skills:</strong> Basics of accounting, budgeting, cash flow, funding.</li>
              <li><strong>Legal & Compliance:</strong> Company registration, contracts, IP, taxation, startup laws.</li>
              <li><strong>People & HR Management:</strong> Hiring, team building, organizational culture, ESOPs.</li>
              <li><strong>Technical Skills:</strong> Product design, prototyping, emerging tech tools.</li>
              <li><strong>Creative Problem-Solving:</strong> Design thinking, real-world problem identification.</li>
              <li><strong>Market Research & Analysis:</strong> Industry studies, competitor benchmarking, surveys.</li>
              <li><strong>Innovation & Patents:</strong> IP protection strategies, patenting process.</li>
              <li><strong>Entrepreneurial & Human Psychology:</strong> Founder, employee, and customer psychology.</li>
            </ul>
            <p className="mt-4 font-semibold">Outcome:</p>
            <p>Validated business plan, market research, patentable model, and identified real-world problem.</p>
          </div>

          {/* Year 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Year 2 – Startup Creation & Operation (4th Year)</h3>
            <p className="mb-4 font-medium">Focus: Turning ideas into a real startup company</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Company Formation:</strong> Legal incorporation, shareholder agreements.</li>
              <li><strong>Product Development:</strong> MVP design, technology support.</li>
              <li><strong>Operations Management:</strong> Running the business, building core teams.</li>
              <li><strong>Sales & Marketing:</strong> Go-to-market strategy, digital marketing, customer acquisition.</li>
              <li><strong>Financial Operations:</strong> Bookkeeping, compliance, taxation, connecting with angel investors/grants.</li>
              <li><strong>Scaling & Mentorship:</strong> Weekly/monthly mentor sessions.</li>
              <li><strong>Pitch & Demo Days:</strong> Access to StartupRunway investors & network.</li>
            </ul>
            <p className="mt-4 font-semibold">Outcome:</p>
            <p>Student-run startup ready for graduation day, operating with real customers and market presence.</p>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Studentpreneur → Entrepreneur Journey</h2>

          <div className="space-y-10">
            {/* Phase 1 */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Phase 1: Foundation (3rd Year)</h3>
              <p className="mb-2 font-medium">Goal: Build entrepreneurial mindset, basic skills, problem-solving ability.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Entrepreneurship Mindset & Psychology</li>
                <li>Management & Leadership Fundamentals</li>
                <li>Business & Market Fundamentals</li>
                <li>Finance & Accounting Basics</li>
                <li>Legal & Regulatory Awareness</li>
                <li>Creative & Technical Skills</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Phase 2: Incubation (4th Year, Sem 1)</h3>
              <p className="mb-2 font-medium">Goal: Convert idea → company with structured support</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Startup Formation & Legal Compliance</li>
                <li>Business Planning & Financial Projections</li>
                <li>Product Development & MVP Creation</li>
                <li>Market Readiness & Customer Development</li>
                <li>Entrepreneurial Skills Deep Dive (Sales, Networking, Pitching)</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Phase 3: Acceleration (4th Year, Sem 2)</h3>
              <p className="mb-2 font-medium">Goal: Help students operate their company while still in college</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Operations & Scaling</li>
                <li>Advanced Finance & Investor Pitch Decks</li>
                <li>Growth & Marketing Strategies</li>
                <li>IP & Patents</li>
                <li>Fundraising & Demo Day</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Phase 4: Transition (Post-Graduation)</h3>
              <p className="mb-2 font-medium">Goal: Handover company to student-founder for full-time operations</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Founder Handover & Knowledge Transfer</li>
                <li>Post-College Support & Alumni Community</li>
                <li>Access to StartupRunway Investors, Partners & Network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Benefits of the Program</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">For Students</h3>
            <ul className="list-disc list-inside">
              <li>Graduate with company ownership, not just a job offer</li>
              <li>Practical entrepreneurship + hands-on startup experience</li>
              <li>Stronger resume & lifelong skills</li>
            </ul>
          </div>
          <div className="p-6 bg-green-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">For Universities</h3>
            <ul className="list-disc list-inside">
              <li>Position as entrepreneurship-driven institutions</li>
              <li>Improve placement records</li>
              <li>Build reputation as startup hubs</li>
            </ul>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">For StartupRunway</h3>
            <ul className="list-disc list-inside">
              <li>Build pipeline of high-potential startups</li>
              <li>Early access to innovative ideas</li>
              <li>Long-term relationship with founders</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentpreneurProgram;


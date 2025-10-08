'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StudentpreneurPage() {
  return (
    <main className="px-6 md:px-16 py-12 bg-gradient-to-b from-indigo-50 via-purple-50 to-white min-h-screen">

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          StartupRunway: Studentpreneur Track
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-800 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Turn your engineering skills into a <strong>real software startup</strong> while in college!  
          Learn. Build. Launch. Succeed.
        </motion.p>

        <motion.a
          href="/contact"
          className="inline-block mt-6 px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Apply Now
        </motion.a>
      </section>

      {/* Program Overview */}
      <section className="mt-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Year 1 */}
        <motion.div
          className="p-6 bg-white shadow-2xl rounded-2xl border-l-4 border-gradient-to-b from-indigo-500 to-purple-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-indigo-700">Year 1 – Training & Skill Development</h2>
          <p className="mt-4 text-gray-700 font-semibold">
            Lay your foundation for entrepreneurship. Learn, explore, and grow.
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Master <strong>management, finance, legal & tech skills</strong></li>
            <li>Develop <strong>psychological resilience</strong> & startup mindset</li>
            <li>Hands-on <strong>workshops</strong>: company registration, branding, website</li>
            <li>Learn <strong>market research, business planning, idea validation</strong></li>
            <li>Real-world operations: from small scale to large-scale startups</li>
          </ul>
        </motion.div>

        {/* Year 2 */}
        <motion.div
          className="p-6 bg-white shadow-2xl rounded-2xl border-l-4 border-gradient-to-b from-indigo-500 to-purple-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-indigo-700">Year 2 – Build & Launch Your Startup</h2>
          <p className="mt-4 text-gray-700 font-semibold">
            Apply what you learned. Launch your company. Create impact.
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Create & operate your <strong>real startup</strong> in college</li>
            <li>Develop <strong>MVP</strong>, test products, acquire first users</li>
            <li>Work with mentors & <strong>Startup India partners</strong></li>
            <li>Learn to <strong>scale, pitch & raise funds</strong></li>
            <li>Experience the <strong>full startup lifecycle</strong></li>
          </ul>
        </motion.div>
      </section>

      {/* Why Join */}
      <section className="mt-16 max-w-4xl mx-auto text-center space-y-6">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-indigo-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Why Join StartupRunway?
        </motion.h3>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 font-semibold">
          <li>Learn by <strong>doing</strong>, not theory</li>
          <li>Work with <strong>real projects, users, and companies</strong></li>
          <li>Build a <strong>professional network</strong> in college</li>
          <li>Mentorship from <strong>industry experts</strong> and investors</li>
          <li>Step into the startup world <strong>confident and ready</strong></li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-indigo-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Are You the Next Tech Founder?
        </motion.h3>
        <motion.p
          className="mt-4 text-lg text-gray-700 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          If a software idea burns in your mind, this is your launchpad.
        </motion.p>

        <motion.a
          href="/contact"
          className="inline-block mt-8 px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Apply Now
        </motion.a>
      </section>

      {/* Footer Punch */}
      <section className="mt-20 text-center text-gray-500">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Two years. One program. Unlimited possibilities.  
          Your software startup journey starts here.
        </motion.p>
      </section>
    </main>
  );
}

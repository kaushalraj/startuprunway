'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StudentpreneurPage() {
  return (
    <main className="px-6 md:px-16 py-12 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-indigo-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          StartupRunway: Studentpreneur Track
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Transform your engineering skills into a **real software company** while still in college!  
          Learn. Build. Launch. Grow.
        </motion.p>

        <motion.a
          href="/contact"
          className="inline-block mt-6 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Join the Program
        </motion.a>
      </section>

      {/* Program Overview */}
      <section className="mt-12 max-w-6xl mx-auto space-y-12">
        
        {/* Year 1 */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-2xl border-l-4 border-indigo-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-indigo-600">Year 1 – Training & Skill Development</h2>
          <p className="mt-4 text-gray-700 font-semibold">
            Build the foundation to become a true entrepreneur. Every session is designed to push you forward.
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Master **management, finance, legal & technical skills**</li>
            <li>Develop **psychological resilience** & startup mindset</li>
            <li>Hands-on **workshops**: company registration, branding, and website setup</li>
            <li>Learn **market research, business planning, and idea validation**</li>
            <li>Understand **real-world operations** from small scale to large-scale startups</li>
          </ul>
        </motion.div>

        {/* Year 2 */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-2xl border-l-4 border-indigo-500"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-indigo-600">Year 2 – Build & Launch Your Startup</h2>
          <p className="mt-4 text-gray-700 font-semibold">
            Put your learning into action. Launch your own company and start creating impact.
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
            <li>Create and operate your **real company** while still in college</li>
            <li>Develop **MVP**, test products, and acquire first users</li>
            <li>Work with **mentors & Startup India partners** for guidance</li>
            <li>Learn to **scale, pitch, and raise funds**</li>
            <li>Experience the **full startup lifecycle** from idea to launch</li>
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
          <li>Learn by **doing**, not just theory</li>
          <li>Work with **real companies, real projects, real users**</li>
          <li>Build a **professional network** while in college</li>
          <li>Mentorship from **industry experts** and investors</li>
          <li>Step into the startup world **confident and ready**</li>
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
          If you have a software idea burning in your mind, this is your launchpad.
        </motion.p>

        <motion.a
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-colors"
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
          🚀 Your software startup journey starts here.
        </motion.p>
      </section>
    </main>
  );
}

// studentpreneur.tsx
'use client'; // ← MUST be at the top of the file

import React, { createContext, useContext, useState } from 'react';
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Studentpreneur: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative bg-blue-600 text-white py-20 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          StartupRunway Studentpreneur Track
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Transforming engineering students into real-world entrepreneurs by equipping them
          with business, technical, and management skills while helping them launch a
          real company during their final year.
        </p>
        <motion.a
          href="#program-details"
          className="inline-block mt-8 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          Explore Program
        </motion.a>
      </motion.section>

      {/* Program Overview */}
      <motion.section
        id="program-details"
        className="py-20 px-6 md:px-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Program Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Objective</h3>
            <p className="text-gray-700 mb-6">
              Equip engineering students with management, financial, legal, technical,
              and psychological skills to launch and operate a real company.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Duration</h3>
            <p className="text-gray-700">
              2 Years – 3rd & 4th Year of Engineering
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/studentpreneur-illustration.svg"
              alt="Studentpreneur Illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Skill Development Section */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Year 1 – Training & Skill Development
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Business & Management</h3>
            <p>Learn company formation, business plans, and growth strategies.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
            <p>Hands-on projects on product development, software, and tech tools.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Legal & Financial Knowledge</h3>
            <p>Understand legal compliance, taxation, fundraising, and accounting.</p>
          </div>
        </div>
      </motion.section>

      {/* Real Startup Experience Section */}
      <motion.section
        className="py-20 px-6 md:px-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Year 2 – Startup Launch & Operation
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              Students get the opportunity to create and operate their own company under
              mentorship. They work on real-world challenges, partnerships, and funding.
            </p>
            <p className="text-gray-700">
              By the end of Year 2, students will have experience in running a business,
              solving practical problems, and preparing for long-term growth.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/startup-experience.svg"
              alt="Startup Experience Illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-6 text-center bg-blue-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Become a Studentpreneur?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join StartupRunway and transform your engineering journey into a real
          entrepreneurial experience.
        </p>
        <motion.a
          href="/apply"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          Apply Now
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Studentpreneur;
	
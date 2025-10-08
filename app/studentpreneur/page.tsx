"use client";

import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

const particlesInit = async (main: any) => {
  await loadFull(main);
};

const StudentpreneurPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white text-gray-800">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#FFFFFF" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
          particles: {
            color: { value: "#1DB954" },
            links: { color: "#4892DB", distance: 150, enable: true },
            collisions: { enable: true },
            move: { enable: true, speed: 2 },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-b from-white to-[#E0F7EC]">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-[#1DB954]"
        >
          StartupRunway: Transforming Students into Future Tech Leaders
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg md:text-xl text-[#536F85]"
        >
          Are you a passionate student with a groundbreaking software idea?  
          It's time to transform that idea into reality.
        </motion.p>
      </section>

      {/* Image Slideshow */}
      <section className="my-12 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          <SwiperSlide>
            <Image
              src="/images/student1.jpg"
              alt="Students collaborating"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/student2.jpg"
              alt="Startup workshop"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/student3.jpg"
              alt="Pitching to investors"
              width={1200}
              height={500}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Program Content */}
      <section className="px-4 md:px-20 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-[#4892DB] mb-6 text-center"
        >
          🧭 Our 2-Year Startup Acceleration Program
        </motion.h2>

        {/* Year 1 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-[#1DB954] mb-4">
            Year 1: Laying the Foundation
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#536F85]">
            <li><strong>Quarter 1:</strong> Ideation & Validation – Refine your idea, conduct market research, develop MVP.</li>
            <li><strong>Quarter 2:</strong> Legal & Compliance – Company registration, legal structure, regulations.</li>
            <li><strong>Quarter 3:</strong> Branding & Marketing – Brand identity, marketing strategy, initial campaigns.</li>
            <li><strong>Quarter 4:</strong> Funding & Networking – Pitch decks, investor connections, secure initial funding.</li>
          </ul>
        </div>

        {/* Year 2 */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-[#1DB954] mb-4">
            Year 2: Scaling Up
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[#536F85]">
            <li><strong>Quarter 5:</strong> Product Development – Enhance MVP, add features, iterate.</li>
            <li><strong>Quarter 6:</strong> Sales & Customer Acquisition – Sales strategy, acquire customers, optimize channels.</li>
            <li><strong>Quarter 7:</strong> Operations & Team Building – Streamline operations, build team, establish culture.</li>
            <li><strong>Quarter 8:</strong> Expansion & Growth – Explore markets, scale operations, prepare for funding rounds.</li>
          </ul>
        </div>

        {/* Why Choose StartupRunway */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-bold text-[#4892DB] mb-4">🎯 Why Choose StartupRunway?</h3>
          <ul className="space-y-2 text-[#536F85] max-w-2xl mx-auto">
            <li>💡 Expert Guidance – Mentorship from industry leaders.</li>
            <li>🛠️ Comprehensive Support – From ideation to scaling.</li>
            <li>🤝 Access to Investors – Connect with those who believe in your vision.</li>
            <li>🔧 Tailored Solutions – Strategies customized to your needs.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-gradient-to-r from-[#1DB954] to-[#4892DB] rounded-xl text-white">
          <h3 className="text-3xl font-bold mb-4">📞 Ready to Take Off?</h3>
          <p className="mb-6">Don't let your idea stay just an idea. Apply now and let's build the future together.</p>
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-[#1DB954] font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default StudentpreneurPage;

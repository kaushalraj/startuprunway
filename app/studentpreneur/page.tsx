'use client';

import React from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from 'swiper';
import styles from './page.module.css'; // optional for extra styling

SwiperCore.use([Autoplay]);

const particlesInit = async (main: any) => {
  await loadFull(main);
};

const StudentpreneurPage = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: '#0f172a' }, // dark background matching StartupRunway
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
          },
          particles: {
            color: { value: '#facc15' }, // premium yellow accent
            links: { enable: true, color: '#facc15', distance: 150 },
            collisions: { enable: false },
            move: { enable: true, speed: 2, outModes: 'bounce' },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.7 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '100px 20px 50px 20px',
          color: '#f1f5f9', // light text
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#facc15' }}>
          StartupRunway: Transforming Students into Studentpreneurs
        </h1>
        <p style={{ fontSize: '1.3rem', margin: '20px 0', color: '#e2e8f0' }}>
          Turn your innovative ideas into a real software company while still in college. 
          Learn business, tech, legal, and financial skills in a 2-year program designed 
          for engineers ready to disrupt the industry!
        </p>

        {/* Swiper Slideshow */}
        <div style={{ margin: '50px 0' }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <img
                src="/images/student1.jpg"
                alt="Student Startup 1"
                style={{ width: '100%', borderRadius: '15px' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/student2.jpg"
                alt="Student Startup 2"
                style={{ width: '100%', borderRadius: '15px' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/student3.jpg"
                alt="Student Startup 3"
                style={{ width: '100%', borderRadius: '15px' }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Punchy Highlights */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {[
            '💡 Generate & validate startup ideas',
            '📈 Master business & financial skills',
            '🛠 Build a real product from scratch',
            '🧑‍🤝‍🧑 Connect with mentors & investors',
            '🚀 Launch your company before graduation',
            '🎯 Learn legal, technical & operational strategies',
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#1e293b',
                color: '#facc15',
                padding: '20px 25px',
                borderRadius: '12px',
                fontWeight: 'bold',
                minWidth: '220px',
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ marginTop: '50px' }}>
          <a
            href="/contact"
            style={{
              backgroundColor: '#facc15',
              color: '#0f172a',
              padding: '15px 40px',
              borderRadius: '10px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Join the Program & Start Your Journey 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default StudentpreneurPage;

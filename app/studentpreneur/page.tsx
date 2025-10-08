'use client';

import React from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const particlesInit = async (main: any) => {
  await loadFull(main);
};

const StudentpreneurPage = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: '#FFFFFF' } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
          },
          particles: {
            color: { value: '#1DB954' }, // Primary green
            links: { enable: true, color: '#4892DB', distance: 150 },
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
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', textAlign: 'center' }}>
        {/* Header */}
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1DB954', marginBottom: '20px' }}>
          StartupRunway: Transforming Students into Studentpreneurs
        </h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '40px', color: '#536F85' }}>
          Are you a passionate student with a groundbreaking software idea? It's time to turn your idea into reality. 
          StartupRunway guides you every step of the way.
        </p>

        {/* Swiper Slideshow */}
        <div style={{ marginBottom: '50px' }}>
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

        {/* Program Content */}
        <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: '900px' }}>
          <h2 style={{ color: '#4892DB', fontSize: '2rem', marginBottom: '15px' }}>🧭 Our 2-Year Startup Acceleration Program</h2>

          <h3 style={{ color: '#1DB954', fontSize: '1.5rem', marginTop: '20px' }}>Year 1: Laying the Foundation</h3>
          <ul style={{ color: '#536F85', marginBottom: '20px' }}>
            <li><strong>Quarter 1:</strong> Ideation & Validation — Refine your software idea, conduct market research, develop MVP.</li>
            <li><strong>Quarter 2:</strong> Legal & Compliance — Register your company, set up legal structures, ensure compliance.</li>
            <li><strong>Quarter 3:</strong> Branding & Marketing — Create brand identity, develop marketing strategy, launch campaigns.</li>
            <li><strong>Quarter 4:</strong> Funding & Networking — Prepare pitch decks, connect with investors, secure initial funding.</li>
          </ul>

          <h3 style={{ color: '#1DB954', fontSize: '1.5rem', marginTop: '20px' }}>Year 2: Scaling Up</h3>
          <ul style={{ color: '#536F85', marginBottom: '20px' }}>
            <li><strong>Quarter 5:</strong> Product Development — Enhance MVP, develop features, test & iterate.</li>
            <li><strong>Quarter 6:</strong> Sales & Customer Acquisition — Develop sales strategy, acquire initial customers, optimize channels.</li>
            <li><strong>Quarter 7:</strong> Operations & Team Building — Streamline operations, build strong team, establish culture.</li>
            <li><strong>Quarter 8:</strong> Expansion & Growth — Explore new markets, scale operations, prepare for future funding rounds.</li>
          </ul>

          <h2 style={{ color: '#4892DB', fontSize: '2rem', marginTop: '30px' }}>🎯 Why Choose StartupRunway?</h2>
          <ul style={{ color: '#536F85', marginBottom: '20px' }}>
            <li><strong>Expert Guidance:</strong> Mentorship from industry leaders.</li>
            <li><strong>Comprehensive Support:</strong> From ideation to scaling.</li>
            <li><strong>Access to Investors:</strong> Connect with investors who believe in your vision.</li>
            <li><strong>Tailored Solutions:</strong> Customized strategies for your unique needs.</li>
          </ul>

          <h2 style={{ color: '#4892DB', fontSize: '2rem', marginTop: '30px' }}>📞 Ready to Take Off?</h2>
          <p style={{ color: '#536F85', marginBottom: '30px' }}>
            Don't let your idea stay just an idea. Apply now and let's build the future together.
          </p>
          <a
            href="/contact"
            style={{
              backgroundColor: '#1DB954',
              color: '#FFFFFF',
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

import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { KineticHeadline } from './AnimatedText';
import { AnimatedCompanyCard } from './AnimatedVisuals';

export const ExperienceSection: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 md:py-32 max-w-6xl mx-auto px-6 sm:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c8c5cb]/5 rounded-full blur-[100px] pointer-events-none transform-gpu" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="font-semibold text-xs tracking-[0.2em] text-[#c8c5cb]/80 uppercase block mb-2 font-mono">
          Work History // Industry Internships
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#e5e2e1]">
          <KineticHeadline
            text="Industry Engineering Journey"
            highlightWords={['Journey', 'Engineering']}
            highlightClassName="text-white drop-shadow-[0_0_25px_rgba(200,197,203,0.35)]"
            stagger={0.06}
          />
        </h2>
        <p className="text-sm sm:text-base text-[#c8c5cb]/75 mt-3 font-normal">
          Hands-on machine learning internships, data analytics development, and collaborative industry software practices.
        </p>
      </motion.div>

      {/* Animated Company Cards Grid / Showcase */}
      <div className="space-y-8">
        {experiences.map((exp) => (
          <AnimatedCompanyCard
            key={exp.id}
            companyId={exp.id}
            companyName={exp.company}
            role={exp.role}
            period={exp.period}
            location={exp.location || 'Remote'}
            description={exp.description}
            skills={exp.skills || []}
          />
        ))}
      </div>
    </section>
  );
};



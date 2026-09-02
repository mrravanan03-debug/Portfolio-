import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BrainCircuit, Terminal, ArrowUpRight, Sparkles } from 'lucide-react';
import { KineticHeadline, ScrambleText } from './AnimatedText';

interface AboutSectionProps {
  onSelectSkillPill?: (skill: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectSkillPill }) => {
  const { profile } = PORTFOLIO_DATA;
  const [activePill, setActivePill] = useState<string | null>(null);

  const handlePillClick = (pill: string) => {
    setActivePill(activePill === pill ? null : pill);
    if (onSelectSkillPill) onSelectSkillPill(pill);
  };

  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 w-full max-w-full overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#c8c5cb]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: 3D Tech Portrait Frame (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="glass-panel p-4 rounded-2xl w-full max-w-md aspect-[3/4] relative overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
            {/* Viewfinder brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#c8c5cb]/60 z-20 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#c8c5cb]/60 z-20 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#c8c5cb]/60 z-20 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#c8c5cb]/60 z-20 transition-all duration-300 group-hover:scale-110" />

            <div className="w-full h-full rounded-xl overflow-hidden bg-[#141313] relative">
              <img
                src={profile.photoAboutUrl}
                alt="P. Ramanan - Beyond the Code"
                className="w-full h-full object-cover grayscale-[10%] contrast-[1.06] group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141313]/80 via-transparent to-transparent pointer-events-none" />

              {/* Tag in photo */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-[#c8c5cb]/80 bg-[#201f20]/70 backdrop-blur-md p-2.5 rounded-lg border border-white/10">
                <span className="flex items-center gap-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-[#c8c5cb]" />
                  Neural Architect
                </span>
                <span className="text-[10px] text-white/50 font-mono">
                  <ScrambleText text="COV-2026" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Narrative Content & Education (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 flex flex-col space-y-7"
        >
          {/* Eyebrow & Title with Kinetic Animated Typography */}
          <div>
            <span className="font-semibold text-xs tracking-[0.2em] text-[#c8c5cb]/80 uppercase mb-2 block">
              The Architect
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#e5e2e1]">
              <KineticHeadline
                text="Beyond the Code"
                highlightWords={['Code']}
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#c8c5cb] via-white to-[#9e9ba3] drop-shadow-[0_0_30px_rgba(200,197,203,0.35)]"
                stagger={0.07}
              />
            </h2>
          </div>

          {/* Bio Glass Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
          >
            <p className="text-base sm:text-lg text-[#e5e2e1]/90 leading-relaxed font-normal relative z-10">
              {profile.aboutBio}
            </p>
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#c8c5cb]/10 rounded-full blur-[50px] pointer-events-none" />
          </motion.div>

          {/* Skill Filter Chips */}
          <div className="flex flex-wrap gap-2.5">
            {profile.pills.map((pill, idx) => {
              const isSelected = activePill === pill;
              return (
                <motion.button
                  key={pill}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePillClick(pill)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#c8c5cb] text-[#141313] border-white shadow-[0_0_15px_rgba(200,197,203,0.4)]'
                      : 'bg-[#201f20]/40 backdrop-blur-md text-[#c8c5cb] border-white/10 hover:border-[#c8c5cb]/50 hover:bg-[#201f20]/70'
                  }`}
                >
                  {pill}
                </motion.button>
              );
            })}
          </div>

          {/* Education Node */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-6 pt-2 border-l border-[#c8c5cb]/30 ml-2"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-[#c8c5cb] shadow-[0_0_10px_rgba(200,197,203,0.9)] animate-pulse" />

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#c8c5cb]/80 uppercase block">
                Education
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#c8c5cb] inline" />
                {profile.education.degree}
              </h3>
              <p className="text-sm text-[#c8c5cb]/80 font-normal">
                {profile.education.institution}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2b2a2a] border border-white/10 rounded-lg text-xs font-semibold text-[#c8c5cb]">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>CGPA: {profile.education.cgpa}</span>
                </div>
                <span className="text-xs text-[#c8c5cb]/50 font-mono">
                  {profile.education.period}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};



import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Skill } from '../types';
import { Code2, BrainCircuit, BarChart3, LineChart, ThumbsUp, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { KineticHeadline, AnimatedCounter } from './AnimatedText';

interface SkillsSectionProps {
  onSelectSkill: (skill: Skill) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onSelectSkill }) => {
  const { skills } = PORTFOLIO_DATA;
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'genai':
        return <Sparkles className="w-6 h-6 text-[#c8c5cb]" />;
      case 'python':
        return <Code2 className="w-5 h-5 text-[#c8c5cb]" />;
      case 'ml':
        return <BrainCircuit className="w-5 h-5 text-[#c8c5cb]" />;
      case 'analytics':
        return <BarChart3 className="w-5 h-5 text-[#c8c5cb]" />;
      case 'predictive':
        return <LineChart className="w-5 h-5 text-[#c8c5cb]" />;
      case 'recommendation':
        return <ThumbsUp className="w-5 h-5 text-[#c8c5cb]" />;
      default:
        return <BrainCircuit className="w-5 h-5 text-[#c8c5cb]" />;
    }
  };

  const largeSkill = skills.find((s) => s.isLarge) || skills[0];
  const regularSkills = skills.filter((s) => !s.isLarge);

  return (
    <section id="skills" className="py-20 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative w-full max-w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#c8c5cb]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header with Kinetic Typography */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="mb-14 text-left"
      >
        <span className="font-semibold text-xs tracking-[0.2em] text-[#c8c5cb]/80 uppercase block mb-2">
          Knowledge Base
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#e5e2e1] break-words">
          <KineticHeadline
            text="AI Knowledge Constellation"
            highlightWords={['Constellation']}
            highlightClassName="text-white drop-shadow-[0_0_25px_rgba(200,197,203,0.35)]"
            stagger={0.06}
          />
        </h2>
        <p className="text-sm sm:text-base text-[#c8c5cb]/70 max-w-xl mt-3">
          Specialized competencies spanning deep generative models, statistical inference, and full-lifecycle machine learning pipelines.
        </p>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Bento Feature: Generative AI (spans 8 cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          whileHover={{ y: -5 }}
          onClick={() => onSelectSkill(largeSkill)}
          onMouseEnter={() => setHoveredSkillId(largeSkill.id)}
          onMouseLeave={() => setHoveredSkillId(null)}
          className="md:col-span-8 group relative rounded-2xl overflow-hidden glass-card p-5 sm:p-8 md:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] cursor-pointer border border-white/10 hover:border-white/25 transition-colors"
        >
          {/* Constellation Background Image Overlay */}
          {largeSkill.bgImage && (
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={largeSkill.bgImage}
                alt="Generative AI Constellation"
                className="w-full h-full object-cover opacity-35 mix-blend-screen group-hover:scale-105 group-hover:opacity-45 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141313] via-[#141313]/60 to-transparent" />
            </div>
          )}

          {/* Top Row: Category & Icon */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#c8c5cb]/80 px-3 py-1 bg-[#141313]/70 backdrop-blur-md rounded-full border border-white/10">
              {largeSkill.category || 'ADVANCED NEURAL SYSTEMS'}
            </span>
            <div className="w-12 h-12 rounded-xl bg-[#201f20]/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#c8c5cb] group-hover:border-[#c8c5cb] group-hover:text-white transition-all shadow-lg">
              {getSkillIcon(largeSkill.id)}
            </div>
          </div>

          {/* Bottom Row: Title, Description & Tags */}
          <div className="relative z-10 mt-12 space-y-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {largeSkill.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-[#c8c5cb] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-sm sm:text-base text-[#c8c5cb]/90 max-w-lg mt-2 font-normal leading-relaxed">
                {largeSkill.description}
              </p>
            </div>

            {/* Tags */}
            {largeSkill.tags && (
              <div className="flex flex-wrap gap-2 pt-2">
                {largeSkill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#201f20]/90 border border-white/10 text-[#c8c5cb]/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Regular Bento Card: Python (spans 4 cols on desktop) */}
        {regularSkills.slice(0, 1).map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -5 }}
            onClick={() => onSelectSkill(skill)}
            onMouseEnter={() => setHoveredSkillId(skill.id)}
            onMouseLeave={() => setHoveredSkillId(null)}
            className="md:col-span-4 group relative rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-white/25 transition-colors"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono tracking-widest text-[#c8c5cb]/60 uppercase">
                {skill.category}
              </span>
              <div className="w-10 h-10 rounded-lg bg-[#201f20] border border-white/10 flex items-center justify-center text-[#c8c5cb] group-hover:border-[#c8c5cb] group-hover:text-white transition-colors">
                {getSkillIcon(skill.id)}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white tracking-tight">{skill.title}</h3>
                <ArrowUpRight className="w-4 h-4 text-[#c8c5cb] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs text-[#c8c5cb]/80 leading-relaxed">{skill.description}</p>
            </div>

            {skill.tags && (
              <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-white/5">
                {skill.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#c8c5cb]/70">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {/* Remaining Regular Bento Cards (spans 3 or 4 cols on desktop) */}
        {regularSkills.slice(1).map((skill, idx) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            whileHover={{ y: -5 }}
            onClick={() => onSelectSkill(skill)}
            onMouseEnter={() => setHoveredSkillId(skill.id)}
            onMouseLeave={() => setHoveredSkillId(null)}
            className="md:col-span-3 group relative rounded-2xl glass-card p-6 flex flex-col justify-between cursor-pointer border border-white/10 hover:border-white/25 transition-colors"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] font-mono tracking-widest text-[#c8c5cb]/60 uppercase">
                {skill.category}
              </span>
              <div className="w-9 h-9 rounded-lg bg-[#201f20] border border-white/10 flex items-center justify-center text-[#c8c5cb] group-hover:border-[#c8c5cb] group-hover:text-white transition-colors">
                {getSkillIcon(skill.id)}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white tracking-tight">{skill.title}</h3>
                <ArrowUpRight className="w-4 h-4 text-[#c8c5cb] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs text-[#c8c5cb]/80 line-clamp-3 leading-relaxed">{skill.description}</p>
            </div>

            {skill.tags && (
              <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-white/5">
                {skill.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#c8c5cb]/70">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};


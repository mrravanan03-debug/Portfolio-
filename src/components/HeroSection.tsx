import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, Code2, Link2, Mail, ArrowRight, Sparkles, Copy, Check, Terminal, Cpu, Database, Award } from 'lucide-react';
import { KineticHeadline, TypewriterText, AnimatedCounter } from './AnimatedText';

interface HeroSectionProps {
  onViewWork: () => void;
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewWork, onOpenResume, onNavigate }) => {
  const { profile } = PORTFOLIO_DATA;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const rotatingRoles = [
    'AI & MACHINE LEARNING DEVELOPER',
    'RAG & LLM PIPELINE ARCHITECT',
    'PREDICTIVE MODEL SPECIALIST',
    'DATA SCIENCE & PYTHON CODER',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden">
      {/* Background Ambient Aura (Optimized for smooth 60fps) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#c8c5cb] rounded-full blur-[100px] pointer-events-none transform-gpu"
        />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#4a4850]/15 rounded-full blur-[100px] pointer-events-none transform-gpu" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (7 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 md:gap-7 text-left"
        >
          {/* Eyebrow with Dynamic Typewriter and Pulse Badge */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 font-semibold text-xs tracking-[0.2em] text-[#c8c5cb] uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#c8c5cb] animate-ping" />
              <TypewriterText
                words={rotatingRoles}
                typingSpeed={75}
                deletingSpeed={35}
                pauseTime={2000}
                className="text-[#c8c5cb] font-semibold text-[11px] sm:text-xs tracking-wider"
              />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Main Headline with Kinetic Animated Letters & Luminous Accents */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#e5e2e1] leading-[1.1] flex flex-col">
            <span className="block text-white">
              <KineticHeadline
                text={profile.headlineMain}
                highlightWords={['INTELLIGENCE.']}
                highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c8c5cb] to-[#9e9ba3] drop-shadow-[0_0_35px_rgba(200,197,203,0.4)]"
                stagger={0.06}
              />
            </span>
            <span className="block text-[#e5e2e1]/45 mt-1.5">
              <KineticHeadline
                text={profile.headlineSecondary}
                delay={0.2}
                stagger={0.06}
              />
            </span>
          </motion.h1>

          {/* Intro Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#c8c5cb]/85 max-w-2xl leading-relaxed font-normal">
            {profile.summary}
          </motion.p>

          {/* Key Metrics Strip with Animated Counters */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-3 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/10 max-w-lg backdrop-blur-sm"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                <AnimatedCounter to={4} suffix="+" />
              </div>
              <div className="text-[11px] text-[#c8c5cb]/70 font-mono">Industry Certs</div>
            </div>
            <div className="border-l border-white/10 pl-3">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                <AnimatedCounter to={95} suffix="%" />
              </div>
              <div className="text-[11px] text-[#c8c5cb]/70 font-mono">Model Accuracy</div>
            </div>
            <div className="border-l border-white/10 pl-3">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                <AnimatedCounter to={100} suffix="%" />
              </div>
              <div className="text-[11px] text-[#c8c5cb]/70 font-mono">Open Source</div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(200, 197, 203, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              onClick={onViewWork}
              className="px-8 py-4 rounded-full bg-[#c8c5cb] text-[#141313] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(200,197,203,0.25)] flex items-center gap-2 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenResume}
              className="px-8 py-4 rounded-full bg-[#201f20]/70 backdrop-blur-xl border border-white/15 text-[#e5e2e1] font-semibold text-xs uppercase tracking-widest hover:border-white/30 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#c8c5cb]" />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          {/* Social Icons Bar & Updated Email with Interactive Copy */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-3 border-t border-white/10 w-fit">
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#201f20]/60 backdrop-blur-md border border-white/10 text-[#c8c5cb] hover:text-white hover:border-[#c8c5cb]/40 transition-all duration-200 flex items-center justify-center shadow-lg"
                title="GitHub Profile"
              >
                <Code2 className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#201f20]/60 backdrop-blur-md border border-white/10 text-[#c8c5cb] hover:text-white hover:border-[#c8c5cb]/40 transition-all duration-200 flex items-center justify-center shadow-lg"
                title="LinkedIn Profile"
              >
                <Link2 className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate('contact')}
                className="w-10 h-10 rounded-full bg-[#201f20]/60 backdrop-blur-md border border-white/10 text-[#c8c5cb] hover:text-white hover:border-[#c8c5cb]/40 transition-all duration-200 flex items-center justify-center shadow-lg cursor-pointer"
                title="Contact Direct"
              >
                <Mail className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Direct Email Address as Requested by User with One-Click Copy */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#201f20]/60 border border-white/10 hover:border-white/25 text-xs text-[#c8c5cb] tracking-wide font-mono cursor-pointer transition-all group"
              title="Click to copy email"
            >
              <span className="text-[#c8c5cb]/50">//</span>
              <span className="text-white group-hover:text-[#c8c5cb] transition-colors">{profile.email}</span>
              {copiedEmail ? (
                <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-sans font-bold">
                  <Check className="w-3 h-3" /> Copied!
                </span>
              ) : (
                <Copy className="w-3 h-3 text-[#c8c5cb]/50 group-hover:text-white transition-colors" />
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column (5 cols) - 3D Tilt Portrait Frame with Interactive Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Floating Pill Badges around Portrait */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-4 -left-4 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#201f20]/90 backdrop-blur-xl border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.6)] text-xs font-mono text-white"
          >
            <Cpu className="w-4 h-4 text-[#c8c5cb]" />
            <span>RAG & GenAI</span>
          </motion.div>

          <motion.div
            animate={{
              y: [6, -6, 6],
              rotate: [1, -1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute top-1/3 -right-6 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#201f20]/90 backdrop-blur-xl border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.6)] text-xs font-mono text-white"
          >
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Vector Search</span>
          </motion.div>

          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute -bottom-4 -left-4 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#201f20]/90 backdrop-blur-xl border border-white/20 shadow-[0_15px_30px_rgba(0,0,0,0.6)] text-xs font-mono text-white"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>HCL GUVI Certified</span>
          </motion.div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[390px] aspect-[3/4] rounded-2xl p-2.5 glass-panel transition-transform duration-300 ease-out group"
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(200, 197, 203, 0.15)',
            }}
          >
            {/* Inner Viewport Frame */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#141313] border border-white/10 flex flex-col justify-end">
              {/* Corner Viewfinder Tech Accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#c8c5cb]/50 z-20" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#c8c5cb]/50 z-20" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#c8c5cb]/50 z-20" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#c8c5cb]/50 z-20" />

              {/* Portrait Image */}
              <img
                src={profile.photoUrl}
                alt="P. Ramanan Portrait"
                className="w-full h-full object-cover grayscale-[10%] contrast-[1.08] brightness-[0.94] group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141313]/90 via-[#141313]/20 to-transparent pointer-events-none z-10" />

              {/* Float Status Badge */}
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-[#201f20]/80 backdrop-blur-md rounded-lg p-3 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white tracking-tight">P. Ramanan</div>
                  <div className="text-[11px] text-[#c8c5cb]/70">AI & ML Engineer</div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </div>
              </div>
            </div>

            {/* Back Glow Aura */}
            <div className="absolute -inset-4 -z-10 bg-[#c8c5cb]/10 rounded-3xl blur-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


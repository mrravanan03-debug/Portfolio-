import React from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Cloud, Sparkles, BarChart3, Database, Bot, Binary, Terminal, Activity, Layers, Workflow, Building2, CheckCircle2 } from 'lucide-react';

interface CertVisualProps {
  certId: string;
  className?: string;
}

export const AnimatedCertBadge: React.FC<CertVisualProps> = ({ certId, className = '' }) => {
  switch (certId) {
    case 'saylor-crypto':
      return (
        <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br from-[#1a191a] to-[#0f0e0f] border border-white/10 overflow-hidden flex items-center justify-center ${className}`}>
          {/* Animated Cipher Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#c8c5cb_1px,transparent_1px)] [background-size:12px_12px] opacity-15" />
          
          {/* Rotating cryptographic ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute w-24 h-24 rounded-full border border-dashed border-[#c8c5cb]/30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-[#c8c5cb]/60 absolute -top-1" />
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#252426] border border-[#c8c5cb]/40 flex items-center justify-center text-[#c8c5cb] shadow-[0_0_20px_rgba(200,197,203,0.2)]"
          >
            <Shield className="w-7 h-7 text-white" />
          </motion.div>

          <div className="absolute bottom-2 text-[9px] font-mono text-[#c8c5cb]/60 tracking-widest uppercase">
            AES-256 // CRYPTOGRAPHY
          </div>
        </div>
      );

    case 'ibm-ai-ambassador':
      return (
        <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br from-[#12161f] to-[#0e1014] border border-blue-500/20 overflow-hidden flex items-center justify-center ${className}`}>
          {/* Pulsing Synapse Wave */}
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-28 h-28 rounded-full bg-blue-500/10 blur-xl pointer-events-none"
          />

          {/* Orbiting particles */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute w-20 h-20 rounded-full border border-blue-400/20 flex items-center justify-center pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 absolute top-0" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 absolute bottom-0" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#171d29] border border-blue-400/40 flex items-center justify-center text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            <Cpu className="w-7 h-7 text-blue-200" />
          </motion.div>

          <div className="absolute bottom-2 text-[9px] font-mono text-blue-300/70 tracking-widest uppercase">
            IBM SKILLSBUILD // NEURAL AI
          </div>
        </div>
      );

    case 'aws-ml-ai':
      return (
        <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br from-[#1c1813] to-[#100e0a] border border-amber-500/20 overflow-hidden flex items-center justify-center ${className}`}>
          {/* Cloud waves */}
          <motion.div
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-3 w-32 h-1 bg-amber-400/20 rounded-full blur-sm"
          />

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#292217] border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
          >
            <Cloud className="w-7 h-7 text-amber-200" />
          </motion.div>

          <div className="absolute bottom-2 text-[9px] font-mono text-amber-300/70 tracking-widest uppercase">
            AWS CLOUD // ML PIPELINES
          </div>
        </div>
      );

    case 'hcl-guvi-genai':
      return (
        <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br from-[#19151e] to-[#0e0c12] border border-purple-500/20 overflow-hidden flex items-center justify-center ${className}`}>
          {/* Generative Sparks */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-24 h-24 rounded-full border border-purple-400/20 pointer-events-none"
          />

          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#241a2e] border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
          >
            <Sparkles className="w-7 h-7 text-purple-200" />
          </motion.div>

          <div className="absolute bottom-2 text-[9px] font-mono text-purple-300/70 tracking-widest uppercase">
            HCL GUVI // GENAI & RAG
          </div>
        </div>
      );

    case 'sprout-data-analysis':
      return (
        <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br from-[#121915] to-[#0a100d] border border-emerald-500/20 overflow-hidden flex items-center justify-center ${className}`}>
          {/* Animated data bars */}
          <div className="absolute inset-x-8 bottom-8 flex items-end justify-between h-8 opacity-30 pointer-events-none">
            {[40, 75, 55, 90, 65].map((val, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${val * 0.5}%`, `${val}%`, `${val * 0.6}%`] }}
                transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2.5 bg-emerald-400 rounded-t"
              />
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#16251d] border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          >
            <BarChart3 className="w-7 h-7 text-emerald-200" />
          </motion.div>

          <div className="absolute bottom-2 text-[9px] font-mono text-emerald-300/70 tracking-widest uppercase">
            SPROUT // EDA & ANALYTICS
          </div>
        </div>
      );

    case 'mongodb-rag':
      return (
        <div className={`relative w-full h-32 rounded-xl bg-gradient-to-br from-[#131b15] to-[#0c120e] border border-emerald-500/20 overflow-hidden flex items-center justify-center ${className}`}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-20 h-20 border border-dashed border-emerald-400/30 rounded-lg pointer-events-none"
          />

          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#17271c] border border-emerald-400/40 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <Database className="w-7 h-7 text-emerald-200" />
          </motion.div>

          <div className="absolute bottom-2 text-[9px] font-mono text-emerald-300/70 tracking-widest uppercase">
            MONGODB // VECTOR SEARCH
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-32 rounded-xl bg-[#1b1a1c] border border-white/10 overflow-hidden flex items-center justify-center ${className}`}>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-14 h-14 rounded-2xl bg-[#252426] border border-[#c8c5cb]/40 flex items-center justify-center text-[#c8c5cb]"
          >
            <Bot className="w-7 h-7 text-white" />
          </motion.div>
          <div className="absolute bottom-2 text-[9px] font-mono text-[#c8c5cb]/60 tracking-widest uppercase">
            BE10X // AI AUTOMATION
          </div>
        </div>
      );
  }
};

// Interactive Animated Internship / Company Showcase Component
interface CompanyShowcaseProps {
  companyId: string;
  companyName: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export const AnimatedCompanyCard: React.FC<CompanyShowcaseProps> = ({
  companyId,
  companyName,
  role,
  period,
  location,
  description,
  skills,
}) => {
  const getCompanyMeta = () => {
    switch (companyId) {
      case 'cognifyz':
        return {
          gradient: 'from-[#1c1825] via-[#14121a] to-[#0e0c12]',
          border: 'border-purple-500/20 hover:border-purple-400/40',
          accent: 'text-purple-300',
          tagBg: 'bg-purple-500/10 border-purple-500/20 text-purple-200',
          badgeText: 'CORPORATE ML INTERNSHIP',
          domain: 'Predictive Modeling & Scikit-Learn Pipelines',
          metric: '94.8% Feature Pipeline Accuracy',
          icon: <Workflow className="w-5 h-5 text-purple-300" />,
        };
      case 'sysslan':
        return {
          gradient: 'from-[#121926] via-[#0f131a] to-[#090c12]',
          border: 'border-blue-500/20 hover:border-blue-400/40',
          accent: 'text-blue-300',
          tagBg: 'bg-blue-500/10 border-blue-500/20 text-blue-200',
          badgeText: 'AI SOLUTION INTERNSHIP',
          domain: 'Real-World Data Analysis & Visualizations',
          metric: 'Live Dataset Modeling & Collab Git Flow',
          icon: <Activity className="w-5 h-5 text-blue-300" />,
        };
      default:
        return {
          gradient: 'from-[#141a16] via-[#101412] to-[#0a0d0b]',
          border: 'border-emerald-500/20 hover:border-emerald-400/40',
          accent: 'text-emerald-300',
          tagBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-200',
          badgeText: 'DATA ANALYTICS INTERNSHIP',
          domain: 'Structured Dataset Exploration & Insights',
          metric: 'Data Cleaning & Statistical Summaries',
          icon: <Layers className="w-5 h-5 text-emerald-300" />,
        };
    }
  };

  const meta = getCompanyMeta();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`glass-card rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${meta.gradient} border ${meta.border} transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden`}
    >
      {/* Background Animated Scan Lines */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-[80px] pointer-events-none transform-gpu" />

      {/* Top Banner Row */}
      <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center shadow-inner">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-white tracking-tight">{companyName}</h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </span>
            </div>
            <p className="text-sm font-semibold text-[#c8c5cb]/90 flex items-center gap-2 mt-0.5">
              <span>{role}</span>
              <span className="text-[#c8c5cb]/40">•</span>
              <span className="text-xs font-mono text-[#c8c5cb]/70">{location}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1 font-mono">
          <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white font-medium">
            {period}
          </span>
          <span className="text-[10px] text-[#c8c5cb]/60 uppercase tracking-wider">
            {meta.badgeText}
          </span>
        </div>
      </div>

      {/* Live Animated Telemetry / Internship Highlight */}
      <div className="my-5 p-3.5 rounded-xl bg-black/40 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2.5 text-[#c8c5cb]">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold">{meta.domain}</span>
        </div>
        <div className="text-[11px] text-[#c8c5cb]/80 flex items-center gap-1.5">
          {meta.icon}
          <span>{meta.metric}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#c8c5cb]/85 leading-relaxed relative z-10 mb-6 font-normal">
        {description}
      </p>

      {/* Applied Competencies Tags */}
      <div className="space-y-2 relative z-10">
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#c8c5cb]/60 font-semibold">
          Applied Stack & Frameworks
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className={`text-xs px-3 py-1 rounded-lg font-mono border ${meta.tagBg} transition-colors`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

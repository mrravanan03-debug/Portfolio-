import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Certification } from '../types';
import { Award, ShieldCheck, CheckCircle, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { KineticHeadline } from './AnimatedText';
import { AnimatedCertBadge } from './AnimatedVisuals';

interface CertificationsSectionProps {
  onSelectCert: (cert: Certification) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectCert }) => {
  const { certifications } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'cloud', label: 'Cloud & Security' },
    { id: 'data', label: 'Data Analytics' },
  ];

  const filteredCerts = certifications.filter((cert) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') return cert.id.includes('ai') || cert.id.includes('genai') || cert.id.includes('rag');
    if (activeCategory === 'cloud') return cert.id.includes('aws') || cert.id.includes('crypto');
    if (activeCategory === 'data') return cert.id.includes('data') || cert.id.includes('analysis');
    return true;
  });

  return (
    <section id="certifications" className="py-24 md:py-32 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative">
      {/* Header with horizontal accent line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4"
      >
        <div>
          <span className="font-semibold text-xs tracking-[0.2em] text-[#c8c5cb]/80 uppercase block mb-2 font-mono">
            Credentials // Industry Badges
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#e5e2e1] uppercase flex items-center gap-4">
            <KineticHeadline
              text="Certifications & Accreditations"
              highlightWords={['Accreditations']}
              highlightClassName="text-white drop-shadow-[0_0_25px_rgba(200,197,203,0.35)]"
              stagger={0.06}
            />
            <span className="hidden sm:inline-block flex-1 h-[1px] bg-gradient-to-r from-[#c8c5cb]/40 to-transparent min-w-[120px]" />
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#c8c5cb]/80 bg-[#1f1e20] px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{certifications.length} Industry-Verified Credentials</span>
        </div>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
              activeCategory === cat.id
                ? 'bg-[#c8c5cb] text-[#141313] font-bold border-[#c8c5cb] shadow-[0_0_15px_rgba(200,197,203,0.3)]'
                : 'bg-[#141313]/60 text-[#c8c5cb]/70 border-white/10 hover:border-white/25 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards Grid with Relatable Animated Graphics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => onSelectCert(cert)}
            className="group glass-card rounded-2xl p-5 flex flex-col justify-between border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          >
            {/* Top Animated Graphic Badge */}
            <div className="mb-4">
              <AnimatedCertBadge certId={cert.id} className="shadow-md" />
            </div>

            {/* Middle: Title & Issuer */}
            <div className="space-y-1.5 mb-4 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-wider text-[#c8c5cb]/70 uppercase block font-semibold">
                  {cert.issuer}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#c8c5cb]/80">
                  {cert.year}
                </span>
              </div>
              <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#c8c5cb] transition-colors leading-snug">
                {cert.title}
              </h3>
            </div>

            {/* Bottom Row: Verified Status & Inspector CTA */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#c8c5cb]/70 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified
              </span>
              <span className="text-[11px] text-[#c8c5cb]/60 group-hover:text-white transition-colors flex items-center gap-1 font-semibold">
                Inspect <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};



import React from 'react';
import { motion } from 'motion/react';
import { Certification } from '../types';
import { X, Award, ShieldCheck, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { AnimatedCertBadge } from './AnimatedVisuals';

interface CertDetailModalProps {
  cert: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertDetailModal: React.FC<CertDetailModalProps> = ({ cert, isOpen, onClose }) => {
  if (!isOpen || !cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#141313] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col my-auto"
      >
        <div className="p-5 bg-[#201f20] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-base text-white font-mono">Verified Credential Record</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#c8c5cb] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-[#e5e2e1]">
          {/* Animated Badge Banner in Modal */}
          <div className="w-full">
            <AnimatedCertBadge certId={cert.id} className="h-36 shadow-lg" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono text-[#c8c5cb]/70 uppercase tracking-widest block font-semibold">
              {cert.issuer}
            </span>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">{cert.title}</h2>
          </div>

          <div className="bg-[#201f20]/60 p-4 rounded-xl border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-[#c8c5cb]/60">Issued Year:</span>
              <span className="text-white font-bold">{cert.year}</span>
            </div>
            {cert.credentialId && (
              <div className="flex items-center justify-between">
                <span className="text-[#c8c5cb]/60">Credential Identifier:</span>
                <span className="text-emerald-400 font-bold">{cert.credentialId}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-[#c8c5cb]/60">Status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Authenticated
              </span>
            </div>
          </div>

          {cert.topics && cert.topics.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8c5cb] font-bold">
                Covered Curricula & Modules
              </h4>
              <div className="space-y-2">
                {cert.topics.map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs font-mono text-[#c8c5cb]/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8c5cb]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-[#c8c5cb] text-[#141313] font-bold font-mono text-xs uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

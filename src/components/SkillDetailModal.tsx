import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../types';
import { X, Sparkles, CheckCircle2, Code2, ArrowRight } from 'lucide-react';

interface SkillDetailModalProps {
  skill: Skill | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SkillDetailModal: React.FC<SkillDetailModalProps> = ({ skill, isOpen, onClose }) => {
  if (!isOpen || !skill) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto w-full max-w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[96dvh] bg-[#141313] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col my-auto"
      >
        <div className="p-5 bg-[#201f20] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8c5cb] shadow-[0_0_8px_#c8c5cb]" />
            <h3 className="font-bold text-lg text-white">{skill.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#c8c5cb] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-[#e5e2e1]">
          {skill.bgImage && (
            <div className="relative h-40 rounded-xl overflow-hidden border border-white/10">
              <img
                src={skill.bgImage}
                alt={skill.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141313] via-transparent to-transparent" />
            </div>
          )}

          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest uppercase text-[#c8c5cb]/70">
              {skill.category || 'Competency Domain'}
            </span>
            <p className="text-sm sm:text-base text-[#e5e2e1]/90 leading-relaxed font-normal">
              {skill.description}
            </p>
          </div>

          {skill.tags && (
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8c5cb] font-bold">
                Frameworks & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-[#201f20] border border-white/10 text-xs font-mono text-[#c8c5cb] flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {skill.proficiency && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex justify-between text-xs font-mono text-[#c8c5cb]">
                <span>Engineering Competency Index</span>
                <span className="font-bold text-white">{skill.proficiency}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#201f20] overflow-hidden">
                <div
                  className="h-full bg-[#c8c5cb] rounded-full shadow-[0_0_10px_#c8c5cb]"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

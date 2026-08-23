import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Heart, Sparkles, Brain } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onNavigate }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-white/10 bg-[#141313] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12">
        {/* Top Tier: Brand, Motto & Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8c5cb] shadow-[0_0_8px_#c8c5cb]" />
              <span className="font-extrabold text-xl text-white tracking-tight">P. Ramanan</span>
            </div>
            <p className="text-xs font-mono tracking-widest text-[#c8c5cb]/60 uppercase">
              {profile.headlineMain} {profile.headlineSecondary}
            </p>
          </div>

          {/* Quick Sub-Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold uppercase tracking-wider text-[#c8c5cb]/70">
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Neural Net
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Github
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Scholar
            </a>
            <button
              onClick={onScrollToTop}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Meta */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#c8c5cb]/50">
          <p>© 2024 P. Ramanan • Building Intelligence</p>
          <div className="flex items-center gap-2">
            <span>Precision Engineered for Next-Gen AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

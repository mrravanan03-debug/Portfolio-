import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Play, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { KineticHeadline } from './AnimatedText';

interface ProjectsSectionProps {
  onOpenProjectModal: (project: Project) => void;
  onOpenDemoSimulator: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectModal,
  onOpenDemoSimulator,
}) => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const allTags = ['ALL', 'Healthcare AI', 'ML', 'Python', 'Analytics', 'Cybersecurity', 'React'];

  const filteredProjects =
    selectedTag === 'ALL'
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
        );

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative w-full max-w-full overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c8c5cb]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-semibold text-xs tracking-[0.2em] text-[#c8c5cb]/80 uppercase block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#e5e2e1] break-words">
            <KineticHeadline
              text="Engineering Intelligence"
              highlightWords={['Intelligence']}
              highlightClassName="text-white drop-shadow-[0_0_25px_rgba(200,197,203,0.35)]"
              stagger={0.06}
            />
          </h2>
          <p className="text-sm sm:text-base text-[#c8c5cb]/70 max-w-xl mt-3 font-normal">
            A collection of systems designed to solve complex problems through data, predictive modeling, and intuitive interfaces.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-2"
        >
          {allTags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#c8c5cb] text-[#141313] font-bold shadow-[0_0_12px_rgba(200,197,203,0.3)]'
                    : 'bg-[#201f20]/60 text-[#c8c5cb]/70 border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {tag}
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Projects Grid: 2 Columns */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-white/25 transition-all duration-300"
            >
              {/* Top Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#141313] border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141313] via-transparent to-transparent opacity-80" />

                {/* Tag Chips */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#141313]/85 backdrop-blur-md border border-white/15 text-[#c8c5cb]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Interactive Demo Overlay Button */}
                <div className="absolute inset-0 bg-[#141313]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenDemoSimulator(project)}
                    className="px-4 py-2 rounded-full bg-[#c8c5cb] text-[#141313] text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-white transition-all shadow-xl cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Live Demo</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenProjectModal(project)}
                    className="px-4 py-2 rounded-full bg-[#201f20]/90 text-white border border-white/20 text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </motion.button>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-[#c8c5cb]/60 uppercase tracking-widest">
                    {project.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#c8c5cb] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#c8c5cb]/80 leading-relaxed font-normal line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Metrics & Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  {project.metrics && project.metrics[0] ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#c8c5cb]/60 font-mono">{project.metrics[0].label}:</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">{project.metrics[0].value}</span>
                    </div>
                  ) : (
                    <div className="text-xs font-mono text-[#c8c5cb]/60">Verified Production ML</div>
                  )}

                  <div className="flex items-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#c8c5cb] hover:text-white transition-colors"
                      title="View Source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.button
                      whileHover={{ x: 2 }}
                      onClick={() => onOpenProjectModal(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#c8c5cb] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Inspect</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};


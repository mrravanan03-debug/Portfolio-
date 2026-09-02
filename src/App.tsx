/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TerminalSection } from './components/TerminalSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { SkillDetailModal } from './components/SkillDetailModal';
import { CertDetailModal } from './components/CertDetailModal';
import { CustomCursor } from './components/CustomCursor';
import { Project, Skill, Certification } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [certModalOpen, setCertModalOpen] = useState(false);

  // Scroll spy & progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Ensure page always starts at top / main page on load and prevent browser restoring scroll to project
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top immediately on mount
    window.scrollTo(0, 0);
    setActiveSection('home');

    // If URL has #projects or other stale hash on initial arrival, clear it so it stays at the main page
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Near top of page, always lock active section to 'home'
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      const sections = ['home', 'about', 'skills', 'projects', 'terminal', 'experience', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            const current = sections[i];
            setActiveSection(current === 'terminal' ? 'projects' : current);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleOpenDemoSimulator = (project: Project) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleSelectSkill = (skill: Skill) => {
    setSelectedSkill(skill);
    setSkillModalOpen(true);
  };

  const handleSelectCert = (cert: Certification) => {
    setSelectedCert(cert);
    setCertModalOpen(true);
  };

  return (
    <div className="min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-[#141313] text-[#e5e2e1] flex flex-col relative font-sans selection:bg-[#c8c5cb]/30 selection:text-white">
      {/* Top Scroll Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#77767b] via-[#c8c5cb] to-white origin-left z-[110] shadow-[0_0_8px_rgba(200,197,203,0.8)]"
      />

      {/* Subtle trailing custom cursor */}
      <CustomCursor />

      {/* Fixed Pill Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenConnect={() => scrollToSection('contact')}
      />

      {/* Main Portfolio Content Flow */}
      <main className="flex-1 flex flex-col space-y-4 md:space-y-12">
        {/* Screen 1: Hero */}
        <HeroSection
          onViewWork={() => scrollToSection('projects')}
          onOpenResume={() => setResumeOpen(true)}
          onNavigate={scrollToSection}
        />

        {/* Screen 2: About & The Architect */}
        <AboutSection
          onSelectSkillPill={(pill) => {
            scrollToSection('skills');
          }}
        />

        {/* Screen 2: Skills Bento Constellation */}
        <SkillsSection onSelectSkill={handleSelectSkill} />

        {/* Screen 3: Selected Projects */}
        <ProjectsSection
          onOpenProjectModal={handleOpenProjectModal}
          onOpenDemoSimulator={handleOpenDemoSimulator}
        />

        {/* Screen 3: Interactive Shell / Terminal */}
        <TerminalSection />

        {/* Screen 4: Experience Timeline */}
        <ExperienceSection />

        {/* Screen 4: Certifications */}
        <CertificationsSection onSelectCert={handleSelectCert} />

        {/* Screen 4: Contact / Initiate Sequence */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigate={scrollToSection}
      />

      {/* Interactive Modals with AnimatePresence */}
      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {projectModalOpen && selectedProject && (
          <ProjectDemoModal
            project={selectedProject}
            isOpen={projectModalOpen}
            onClose={() => {
              setProjectModalOpen(false);
              setSelectedProject(null);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {skillModalOpen && selectedSkill && (
          <SkillDetailModal
            skill={selectedSkill}
            isOpen={skillModalOpen}
            onClose={() => {
              setSkillModalOpen(false);
              setSelectedSkill(null);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {certModalOpen && selectedCert && (
          <CertDetailModal
            cert={selectedCert}
            isOpen={certModalOpen}
            onClose={() => {
              setCertModalOpen(false);
              setSelectedCert(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

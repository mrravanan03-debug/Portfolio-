import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle, Mail, MapPin, Phone, Github, Linkedin, Sparkles, FileText, Share2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { profile, experiences, certifications, projects, itSkills } = PORTFOLIO_DATA;
  const resumePrintRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadDoc = () => {
    const textContent = `=============================================================
RAMANAN
${profile.email} | 8778417527 | Coimbatore, tamilnadu
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
=============================================================

PROFILE
Motivated final-year B.Sc. AI & ML student with skills in data analysis, machine learning fundamentals, and basic web development. Developed an open-source Budget Planner project and completed certifications in AI, cybersecurity, and budgeting. Seeking opportunities to gain industry experience and contribute to real-world projects.

WORK EXPERIENCE
-------------------------------------------------------------
Cognifyz Technologies, Machine Learning Intern           06/2026 – 07/2026
Nagpur, Maharashtra
• Developed and implemented machine learning models using Python for real-world datasets.
• Performed data cleaning, preprocessing, feature engineering, and exploratory data analysis (EDA).
• Worked with Pandas, NumPy, and Scikit-learn for data manipulation and model development.

Sysslan it solution, Machine Learning Intern             04/2026 – 06/2026
Yavatmal, Maharashtra
• Internship
• Worked on machine learning concepts and real-world data analysis tasks using Python.
• Gained practical experience in problem-solving, data visualization, and collaborative software development in a professional remote environment.

IDM tech park, Data analytics                            05/2025 – 05/2025
Coimbatore, tamilnadu

EDUCATION
-------------------------------------------------------------
Artificial intelligence and machine learning (B.Sc), Kovai kalaimagal college of arts and science
Scored: 6.72                                             07/2024 – 05/2027
Tamil Nadu

SKILLS / IT SKILLS
-------------------------------------------------------------
Self-Learning & Research | Retrieval-Augmented Generation (RAG) | Team Collaboration | Analytical Thinking
Project Management | Cryptography Fundamentals | Machine Learning Fundamentals | Documentation Writing
Communication Skills | Network Security Fundamentals | Problem Solving | Time Management

LANGUAGES
-------------------------------------------------------------
English: Intermediate | Tamil: Native

CERTIFICATIONS & PROFESSIONAL DEVELOPMENT
-------------------------------------------------------------
• CS260: Introduction to Cryptography and Network Security – Saylor University: Jun 2026
• Artificial Intelligence Fundamentals – IBM SkillsBuild Student Ambassador Program: Jun 2026
• Fundamentals of Machine Learning and Artificial Intelligence – Amazon Web Services (AWS): May–Jun 2026
• Generative AI Engineering: Foundations, RAG & Deployment – HCL GUVI: May 2026
• Data Analysis – Sprout Knowledge Solutions Pvt. Ltd.: Feb–Mar 2026
• AI Tools Workshop – be10x
• Building RAG Apps Using MongoDB

PROJECTS
-------------------------------------------------------------
1. Machine Learning-Based Train Journey Time Prediction System (05/2025 – 06/2025)

2. Budget Planner (Open Source)
Developed a budget tracking application to manage expenses and savings, published on GitHub under the MIT License with contributor documentation and project management workflows.

3. Restaurant Analytics & Recommendation System using Machine Learning (07/2026 – 08/2026)
A Machine Learning Project for Restaurant Rating Prediction, Recommendation, Cuisine Classification, and Geographical Analysis.
Developed a comprehensive Machine Learning project using Python to analyze restaurant data. Built a regression model to predict restaurant ratings, designed a personalized restaurant recommendation system, created a cuisine classification model, and performed location-based geographical analysis. Applied data preprocessing, feature engineering, model evaluation, and data visualization techniques using real-world restaurant datasets to generate actionable insights.
`;

    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Ramanan_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto w-full max-w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[96dvh] bg-[#141313] border border-white/20 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto"
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-[#201f20] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#c8c5cb] shadow-[0_0_8px_#c8c5cb]" />
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white">Ramanan — Curriculum Vitae</h3>
              <p className="text-[11px] font-mono text-[#c8c5cb]/70 hidden sm:block">Verified Student & ML Engineer Specification</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#c8c5cb] hover:bg-white text-xs font-mono font-bold text-[#141313] flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadDoc}
              className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#c8c5cb] hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body: Styled Document Sheet */}
        <div className="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-6 font-sans text-xs sm:text-sm text-[#e5e2e1] bg-[#1a191a]/95">
          
          {/* Header Card replicating the exact resume structure */}
          <div className="p-6 rounded-xl bg-[#201f20]/90 border border-white/10 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Ramanan</h1>
                <p className="text-xs sm:text-sm text-[#c8c5cb] font-mono mt-1">
                  {profile.email} &nbsp;|&nbsp; {profile.phone} &nbsp;|&nbsp; Coimbatore, tamilnadu
                </p>
              </div>

              {/* Direct Links */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1 text-xs font-mono">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8c5cb] hover:text-white flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1 rounded border border-white/10 transition-colors break-all"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#c8c5cb] shrink-0" />
                  <span className="truncate">linkedin.com/in/ramanan-p-5810a9375</span>
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8c5cb] hover:text-white flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1 rounded border border-white/10 transition-colors break-all"
                >
                  <Github className="w-3.5 h-3.5 text-[#c8c5cb] shrink-0" />
                  <span>github.com/mrravanan03-debug</span>
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                </a>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="shrink-0">
              <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg bg-[#141313]">
                <img
                  src={profile.photoUrl}
                  alt="Ramanan"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* PROFILE SECTION */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-[#e5e2e1]/90 leading-relaxed font-normal">
              Motivated final-year B.Sc. AI & ML student with skills in data analysis, machine learning fundamentals, and basic web development. Developed an open-source Budget Planner project and completed certifications in AI, cybersecurity, and budgeting. Seeking opportunities to gain industry experience and contribute to real-world projects.
            </p>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              WORK EXPERIENCE
            </h2>

            {/* Cognifyz */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Cognifyz Technologies, <span className="font-normal text-[#c8c5cb]">Machine Learning Intern</span>
                </h3>
                <div className="text-right text-xs font-mono text-[#c8c5cb]">
                  <span className="font-bold text-white">06/2026 – 07/2026</span>
                  <span className="block text-[11px] text-[#c8c5cb]/70">Nagpur, Maharashtra</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#e5e2e1]/85 pl-1">
                <li>Developed and implemented machine learning models using Python for real-world datasets.</li>
                <li>Performed data cleaning, preprocessing, feature engineering, and exploratory data analysis (EDA).</li>
                <li>Worked with Pandas, NumPy, and Scikit-learn for data manipulation and model development.</li>
              </ul>
            </div>

            {/* Sysslan */}
            <div className="space-y-1.5 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Sysslan it solution, <span className="font-normal text-[#c8c5cb]">Machine Learning Intern</span>
                </h3>
                <div className="text-right text-xs font-mono text-[#c8c5cb]">
                  <span className="font-bold text-white">04/2026 – 06/2026</span>
                  <span className="block text-[11px] text-[#c8c5cb]/70">Yavatmal, Maharashtra</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#e5e2e1]/85 pl-1">
                <li>Internship</li>
                <li>Worked on machine learning concepts and real-world data analysis tasks using Python.</li>
                <li>Gained practical experience in problem-solving, data visualization, and collaborative software development in a professional remote environment.</li>
              </ul>
            </div>

            {/* IDM tech park */}
            <div className="space-y-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  IDM tech park, <span className="font-normal text-[#c8c5cb]">Data analytics</span>
                </h3>
                <div className="text-right text-xs font-mono text-[#c8c5cb]">
                  <span className="font-bold text-white">05/2025 – 05/2025</span>
                  <span className="block text-[11px] text-[#c8c5cb]/70">Coimbatore, tamilnadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Artificial intelligence and machine learning (B.Sc)
                </h3>
                <p className="text-xs text-[#c8c5cb]">Kovai kalaimagal college of arts and science</p>
                <p className="text-xs font-bold text-emerald-400 font-mono mt-0.5">Scored: {profile.education.cgpa}</p>
              </div>
              <div className="text-right text-xs font-mono text-[#c8c5cb]">
                <span className="font-bold text-white">07/2024 – 05/2027</span>
                <span className="block text-[11px] text-[#c8c5cb]/70">Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* SKILLS / IT SKILLS */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              SKILLS / IT SKILLS
            </h2>
            <div className="flex flex-wrap gap-2 pt-1">
              {itSkills.map((sk) => (
                <span
                  key={sk}
                  className="px-2.5 py-1 rounded bg-[#201f20] border border-white/10 text-xs font-mono text-[#c8c5cb]"
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              LANGUAGES
            </h2>
            <div className="flex items-center gap-6 text-xs font-mono text-[#c8c5cb]">
              <span><strong className="text-white">English:</strong> Intermediate</span>
              <span><strong className="text-white">Tamil:</strong> Native</span>
            </div>
          </div>

          {/* CERTIFICATIONS & PROFESSIONAL DEVELOPMENT */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              CERTIFICATIONS & PROFESSIONAL DEVELOPMENT
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#e5e2e1]/90">
              <li className="flex items-start gap-2">
                <span className="text-[#c8c5cb] font-bold">•</span>
                <span><strong>CS260: Introduction to Cryptography and Network Security</strong> – Saylor University: <span className="font-mono text-[#c8c5cb]">Jun 2026</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8c5cb] font-bold">•</span>
                <span><strong>Artificial Intelligence Fundamentals</strong> – IBM SkillsBuild Student Ambassador Program: <span className="font-mono text-[#c8c5cb]">Jun 2026</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8c5cb] font-bold">•</span>
                <span><strong>Fundamentals of Machine Learning and Artificial Intelligence</strong> – Amazon Web Services (AWS): <span className="font-mono text-[#c8c5cb]">May–Jun 2026</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8c5cb] font-bold">•</span>
                <span><strong>Generative AI Engineering: Foundations, RAG & Deployment</strong> – HCL GUVI: <span className="font-mono text-[#c8c5cb]">May 2026</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8c5cb] font-bold">•</span>
                <span><strong>Data Analysis</strong> – Sprout Knowledge Solutions Pvt. Ltd.: <span className="font-mono text-[#c8c5cb]">Feb–Mar 2026</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8c5cb] font-bold">•</span>
                <span><strong>AI Tools Workshop</strong> – be10x</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8c5cb] font-bold">•</span>
                <span><strong>Building RAG Apps Using MongoDB</strong></span>
              </li>
            </ul>
          </div>

          {/* PROJECTS */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              PROJECTS
            </h2>

            {/* Project 0: CardioPredict AI */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  CardioPredict AI — Clinical Decision Support & Heart Disease Prediction Platform
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">Featured / Production ML</span>
              </div>
              <p className="text-xs font-mono text-[#c8c5cb]/90">
                React 18, TypeScript, Tailwind CSS, Express.js, Python, Scikit-Learn, Platt Scaling, SHAP, HL7 FHIR, SHA-256
              </p>
              <ul className="text-xs sm:text-sm text-[#e5e2e1]/85 space-y-1 list-disc list-inside leading-relaxed">
                <li>
                  Engineered an enterprise-grade Clinical Decision Support System combining Random Forest and Deep Neural Networks with Platt probability scaling, achieving <strong>95.7% accuracy, 0.978 ROC-AUC, and 96.5% sensitivity</strong> on Cleveland & Framingham cardiac cohorts.
                </li>
                <li>
                  Integrated real-time localized <strong>SHAP (Shapley Additive exPlanations)</strong> to eliminate black-box opacity and provide clinicians with transparent, patient-specific biomarker risk attribution.
                </li>
                <li>
                  Designed a cryptographic <strong>SHA-256 biometric fingerprinting</strong> engine and deduplication verification suite confirming 100% deterministic model invariance (0.000000% delta).
                </li>
                <li>
                  Developed a responsive dual-mode interface (Clinician Simple vs. Advanced Research) with simulated AES-256 encrypted EHR audit logging and <strong>HL7 FHIR JSON</strong> export following ACC/AHA clinical guidelines.
                </li>
              </ul>
            </div>

            {/* Project 1 */}
            <div className="space-y-1 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Machine Learning-Based Train Journey Time Prediction System
                </h3>
                <span className="text-xs font-mono text-[#c8c5cb]">05/2025 – 06/2025</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="space-y-1 pt-1">
              <h3 className="font-bold text-white text-sm">
                Budget Planner (Open Source)
              </h3>
              <p className="text-xs sm:text-sm text-[#e5e2e1]/85 leading-relaxed">
                Developed a budget tracking application to manage expenses and savings, published on GitHub under the MIT License with contributor documentation and project management workflows.
              </p>
            </div>

            {/* Project 3 */}
            <div className="space-y-1 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Restaurant Analytics & Recommendation System using Machine Learning
                </h3>
                <span className="text-xs font-mono text-[#c8c5cb]">07/2026 – 08/2026</span>
              </div>
              <p className="text-xs font-mono text-[#c8c5cb]/80 italic">
                A Machine Learning Project for Restaurant Rating Prediction, Recommendation, Cuisine Classification, and Geographical Analysis
              </p>
              <p className="text-xs sm:text-sm text-[#e5e2e1]/85 leading-relaxed">
                Developed a comprehensive Machine Learning project using Python to analyze restaurant data. Built a regression model to predict restaurant ratings, designed a personalized restaurant recommendation system, created a cuisine classification model, and performed location-based geographical analysis. Applied data preprocessing, feature engineering, model evaluation, and data visualization techniques using real-world restaurant datasets to generate actionable insights.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};


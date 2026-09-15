import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle, Mail, MapPin, Phone, Github, Linkedin, Sparkles, FileText, Share2, Globe } from 'lucide-react';

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
AI/ML Fresher | Machine Learning | Data Analysis | Python
ramananporchezhiyan@gmail.com | 8778417527 | Coimbatore, Tamil Nadu
LinkedIn: https://linkedin.com/in/ramanan-p-5810a9375
GitHub: https://github.com/mrravanan03-debug
Portfolio: https://portfolio-ramanan4.vercel.app
=============================================================

PROFILE
Final-year B.Sc. AI & ML student with expertise in machine learning model development, data preprocessing, and feature engineering. Delivered 5+ production ML models with measurable impact across 4 internships. Proficient in Python, Scikit-learn, TensorFlow, and predictive analytics.

WORK EXPERIENCE
-------------------------------------------------------------
Nitroware Technologies, Machine Learning Intern           Jul 2026 – Sep 2026
Coimbatore, Tamil Nadu
• Developed 3+ supervised ML models (Linear Regression, Random Forest, SVM) achieving 88% accuracy via cross-validation and hyperparameter tuning on real-world datasets
• Executed end-to-end data preprocessing on 50K+ records; engineered 8+ features, handled missing values (imputation), removed outliers (IQR), improved accuracy by 6%

Cognifyz Technologies, Machine Learning Intern           Jun 2026 – Jul 2026
Nagpur, Maharashtra
• Built 4 classification & regression models using Scikit-learn on e-commerce dataset (100K+ transactions); achieved 92% classification accuracy and 3.8 MAE on regression
• Performed feature engineering reducing dimensionality by 35% while maintaining performance; applied statistical testing (correlation, chi-square) for feature importance analysis

Sysslan IT Solution, Machine Learning Intern             Apr 2026 – Jun 2026
Yavatmal, Maharashtra
• Developed 5+ predictive models on real-world datasets achieving 85%+ average accuracy; implemented supervised and unsupervised learning algorithms
• Generated 30+ data visualizations (Matplotlib, Seaborn, Plotly) for stakeholder insights; collaborated with 3+ developers using Git version control and Agile workflows

IDM Tech Park, Data analytics Intern                     May 2025 – Jun 2025
Coimbatore, Tamil Nadu
• Cleaned and analyzed 4 datasets (10K-50K rows); resolved 200+ data quality issues increasing data integrity by 40%; extracted actionable insights from structured data

EDUCATION
-------------------------------------------------------------
Artificial intelligence and machine learning (B.Sc), Kovai Kalaimagal College of Arts and Science
CGPA: 6.73/10                                             Jul 2024 – May 2027
Tamil Nadu

TECHNICAL SKILLS
-------------------------------------------------------------
• Programming: Python (5+ projects), Java, C, C++, R
• Data Analysis & Visualization: Pandas, NumPy, Matplotlib, Seaborn, Plotly, Exploratory Data Analysis, Feature Engineering, Data Preprocessing, Statistical Testing
• Machine Learning: Supervised Learning, Regression, Classification, Unsupervised Learning, Clustering, K-means, Random Forest, Decision Trees, SVM, Neural Networks, Hyperparameter Tuning, Cross-validation, Model Evaluation (ROC-AUC, F1-Score, Confusion Matrix)
• AI/GenAI: Scikit-learn, TensorFlow (basics), Jupyter Notebook, Google Colab, VS Code
• Web & DevOps: HTML, CSS, Flask, Git, GitHub, Agile Methodology
• Security: Cryptography, Network Security, Phishing Detection, Threat Classification

LANGUAGES
-------------------------------------------------------------
English: Intermediate | Tamil: Native

CERTIFICATIONS & PROFESSIONAL DEVELOPMENT
-------------------------------------------------------------
• Introduction to Project Management with ClickUp – Coursera: Jun 2026
• Artificial Intelligence Fundamentals – IBM SkillsBuild Student Ambassador Program: Jun 2026
• Fundamentals of Machine Learning and Artificial Intelligence – Amazon Web Services (AWS): May–Jun 2026
• Generative AI Engineering: Foundations, RAG & Deployment – HCL GUVI: May 2026
• Data Analysis – Sprout Knowledge Solutions Pvt. Ltd.: Feb–Mar 2026

PROJECTS
-------------------------------------------------------------
1. Machine Learning-Based Train Journey Time Prediction System
   Python | Machine Learning | Predictive Analytics
   • Built supervised ML model predicting journey duration with 92% accuracy on 50K+ historical records; engineered 8 features; achieved 3.2-hour MAE; deployed Flask REST API

2. Budget Planner
   Python | Budget Management | GitHub
   • Developed full-stack expense tracker (15+ features) for 100+ users; open-source on GitHub (MIT License, 50+ stars); processes 1000+ transactions monthly with real-time filtering

3. Restaurant Analytics & Recommendation System
   Machine Learning | Recommendation System | Data Analytics
   • Engineered ML system analyzing 10K+ restaurants; ensemble model combining Random Forest (84% accuracy) & Neural Networks (91% accuracy); 85% recommendation precision across 50+ locations

4. Phishing Website Detector
   Python | Cybersecurity | Threat Detection
   • Developed classification model identifying malicious websites with 96% precision, 94% recall on 5K+ URLs; implemented 12+ heuristic security checks; F1-score 0.95

5. CardioPredict AI — Clinical Decision Support Platform
   Machine Learning | Healthcare AI | Clinical Decision Support
   • Clinical decision support combining Random Forest & Neural Networks (91% accuracy, AUC-ROC 0.93); SHAP-based explainability; HL7 FHIR integration; SHA-256 encryption for 500+ patients
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
        <div ref={resumePrintRef} className="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-6 font-sans text-xs sm:text-sm text-[#e5e2e1] bg-[#1a191a]/95">
          
          {/* Header Card replicating the exact resume structure */}
          <div className="p-6 rounded-xl bg-[#201f20]/90 border border-white/10 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Ramanan</h1>
                <p className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono mt-0.5">
                  AI/ML Fresher | Machine Learning | Data Analysis | Python
                </p>
                <p className="text-xs sm:text-sm text-[#c8c5cb] font-mono mt-1">
                  ramananporchezhiyan@gmail.com &nbsp;|&nbsp; 8778417527 &nbsp;|&nbsp; Coimbatore, Tamil Nadu
                </p>
              </div>

              {/* Direct Links */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                <a
                  href="https://linkedin.com/in/ramanan-p-5810a9375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8c5cb] hover:text-white flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1 rounded border border-white/10 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#c8c5cb] shrink-0" />
                  <span>linkedin.com/in/ramanan-p-5810a9375</span>
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                </a>

                <a
                  href="https://github.com/mrravanan03-debug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8c5cb] hover:text-white flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1 rounded border border-white/10 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#c8c5cb] shrink-0" />
                  <span>github.com/mrravanan03-debug</span>
                  <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                </a>

                <a
                  href="https://portfolio-ramanan4.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8c5cb] hover:text-white flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1 rounded border border-white/10 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#c8c5cb] shrink-0" />
                  <span>portfolio-ramanan4.vercel.app</span>
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
              Final-year B.Sc. AI & ML student with expertise in machine learning model development, data preprocessing, and feature engineering. Delivered 5+ production ML models with measurable impact across 4 internships. Proficient in Python, Scikit-learn, TensorFlow, and predictive analytics.
            </p>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="space-y-5">
            <div className="pb-1 border-b border-white/15 flex items-center justify-between">
              <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase">
                WORK EXPERIENCE
              </h2>
              <span className="text-[11px] font-mono text-emerald-400">4 Internships</span>
            </div>

            {/* Nitroware Technologies */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Nitroware Technologies, <span className="font-normal text-[#c8c5cb]">Machine Learning Intern</span>
                </h3>
                <div className="text-right text-xs font-mono text-[#c8c5cb]">
                  <span className="font-bold text-white">Jul 2026 – Sep 2026</span>
                  <span className="block text-[11px] text-[#c8c5cb]/70">Coimbatore, Tamil Nadu</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#e5e2e1]/85 pl-1 leading-relaxed">
                <li>Developed 3+ supervised ML models (Linear Regression, Random Forest, SVM) achieving <strong>88% accuracy</strong> via cross-validation and hyperparameter tuning on real-world datasets</li>
                <li>Executed end-to-end data preprocessing on <strong>50K+ records</strong>; engineered 8+ features, handled missing values (imputation), removed outliers (IQR), improved accuracy by 6%</li>
              </ul>
            </div>

            {/* Cognifyz */}
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Cognifyz Technologies, <span className="font-normal text-[#c8c5cb]">Machine Learning Intern</span>
                </h3>
                <div className="text-right text-xs font-mono text-[#c8c5cb]">
                  <span className="font-bold text-white">Jun 2026 – Jul 2026</span>
                  <span className="block text-[11px] text-[#c8c5cb]/70">Nagpur, Maharashtra</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#e5e2e1]/85 pl-1 leading-relaxed">
                <li>Built 4 classification & regression models using Scikit-learn on e-commerce dataset (<strong>100K+ transactions</strong>); achieved <strong>92% classification accuracy</strong> and 3.8 MAE on regression</li>
                <li>Performed feature engineering reducing dimensionality by 35% while maintaining performance; applied statistical testing (correlation, chi-square) for feature importance analysis</li>
              </ul>
            </div>

            {/* Sysslan */}
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Sysslan IT Solution, <span className="font-normal text-[#c8c5cb]">Machine Learning Intern</span>
                </h3>
                <div className="text-right text-xs font-mono text-[#c8c5cb]">
                  <span className="font-bold text-white">Apr 2026 – Jun 2026</span>
                  <span className="block text-[11px] text-[#c8c5cb]/70">Yavatmal, Maharashtra</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#e5e2e1]/85 pl-1 leading-relaxed">
                <li>Developed 5+ predictive models on real-world datasets achieving <strong>85%+ average accuracy</strong>; implemented supervised and unsupervised learning algorithms</li>
                <li>Generated 30+ data visualizations (Matplotlib, Seaborn, Plotly) for stakeholder insights; collaborated with 3+ developers using Git version control and Agile workflows</li>
              </ul>
            </div>

            {/* IDM tech park */}
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm sm:text-base">
                  IDM Tech Park, <span className="font-normal text-[#c8c5cb]">Data analytics Intern</span>
                </h3>
                <div className="text-right text-xs font-mono text-[#c8c5cb]">
                  <span className="font-bold text-white">May 2025 – Jun 2025</span>
                  <span className="block text-[11px] text-[#c8c5cb]/70">Coimbatore, Tamil Nadu</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#e5e2e1]/85 pl-1 leading-relaxed">
                <li>Cleaned and analyzed 4 datasets (10K-50K rows); resolved 200+ data quality issues increasing data integrity by 40%; extracted actionable insights from structured data</li>
              </ul>
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
                <p className="text-xs text-[#c8c5cb]">Kovai Kalaimagal College of Arts and Science</p>
                <p className="text-xs font-bold text-emerald-400 font-mono mt-0.5">CGPA: 6.73/10</p>
              </div>
              <div className="text-right text-xs font-mono text-[#c8c5cb]">
                <span className="font-bold text-white">July 2024 – May 2027</span>
                <span className="block text-[11px] text-[#c8c5cb]/70">Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-3 rounded-lg bg-[#201f20] border border-white/10 space-y-1">
                <span className="font-mono font-bold text-emerald-400 uppercase text-[11px]">Programming</span>
                <p className="text-[#e5e2e1]/90">Python (5+ projects), Java, C, C++, R</p>
              </div>
              <div className="p-3 rounded-lg bg-[#201f20] border border-white/10 space-y-1">
                <span className="font-mono font-bold text-purple-400 uppercase text-[11px]">Data Analysis & Visualization</span>
                <p className="text-[#e5e2e1]/90">Pandas, NumPy, Matplotlib, Seaborn, Plotly, Exploratory Data Analysis, Feature Engineering, Data Preprocessing, Statistical Testing</p>
              </div>
              <div className="p-3 rounded-lg bg-[#201f20] border border-white/10 space-y-1 md:col-span-2">
                <span className="font-mono font-bold text-blue-400 uppercase text-[11px]">Machine Learning</span>
                <p className="text-[#e5e2e1]/90">Supervised Learning, Regression, Classification, Unsupervised Learning, Clustering, K-means, Random Forest, Decision Trees, SVM, Neural Networks, Hyperparameter Tuning, Cross-validation, Model Evaluation (ROC-AUC, F1-Score, Confusion Matrix)</p>
              </div>
              <div className="p-3 rounded-lg bg-[#201f20] border border-white/10 space-y-1">
                <span className="font-mono font-bold text-amber-400 uppercase text-[11px]">AI / GenAI & Tooling</span>
                <p className="text-[#e5e2e1]/90">Scikit-learn, TensorFlow (basics), Jupyter Notebook, Google Colab, VS Code</p>
              </div>
              <div className="p-3 rounded-lg bg-[#201f20] border border-white/10 space-y-1">
                <span className="font-mono font-bold text-cyan-400 uppercase text-[11px]">Web, DevOps & Security</span>
                <p className="text-[#e5e2e1]/90">HTML, CSS, Flask, Git, GitHub, Agile Methodology, Cryptography, Network Security, Phishing Detection, Threat Classification</p>
              </div>
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
                <span><strong>Introduction to Project Management with ClickUp</strong> – Coursera: <span className="font-mono text-[#c8c5cb]">Jun 2026</span></span>
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
            </ul>
          </div>

          {/* PROJECTS */}
          <div className="space-y-5">
            <h2 className="text-xs font-mono font-bold tracking-widest text-[#c8c5cb] uppercase pb-1 border-b border-white/15">
              PROJECTS
            </h2>

            {/* Project 1: Train Journey Time Prediction System */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Machine Learning-Based Train Journey Time Prediction System
                </h3>
                <span className="text-xs font-mono text-[#c8c5cb]">Python | Machine Learning | Predictive Analytics</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e5e2e1]/85 leading-relaxed">
                Built supervised ML model predicting journey duration with <strong>92% accuracy</strong> on 50K+ historical records; engineered 8 features; achieved 3.2-hour MAE; deployed Flask REST API.
              </p>
            </div>

            {/* Project 2: Budget Planner */}
            <div className="space-y-1 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Budget Planner
                </h3>
                <span className="text-xs font-mono text-[#c8c5cb]">Python | Budget Management | GitHub</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e5e2e1]/85 leading-relaxed">
                Developed full-stack expense tracker (15+ features) for 100+ users; open-source on GitHub (MIT License, 50+ stars); processes 1000+ transactions monthly with real-time filtering.
              </p>
            </div>

            {/* Project 3: Restaurant Analytics & Recommendation System */}
            <div className="space-y-1 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Restaurant Analytics & Recommendation System
                </h3>
                <span className="text-xs font-mono text-[#c8c5cb]">Machine Learning | Recommendation System | Data Analytics</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e5e2e1]/85 leading-relaxed">
                Engineered ML system analyzing 10K+ restaurants; ensemble model combining Random Forest (84% accuracy) & Neural Networks (91% accuracy); 85% recommendation precision across 50+ locations.
              </p>
            </div>

            {/* Project 4: Phishing Website Detector */}
            <div className="space-y-1 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  Phishing Website Detector
                </h3>
                <span className="text-xs font-mono text-[#c8c5cb]">Python | Cybersecurity | Threat Detection</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e5e2e1]/85 leading-relaxed">
                Developed classification model identifying malicious websites with <strong>96% precision, 94% recall</strong> on 5K+ URLs; implemented 12+ heuristic security checks; F1-score 0.95.
              </p>
            </div>

            {/* Project 5: CardioPredict AI */}
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-bold text-white text-sm">
                  CardioPredict AI — Clinical Decision Support Platform
                </h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">Featured / Production Healthcare ML</span>
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
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};


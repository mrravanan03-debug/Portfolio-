import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Send, Mail, Linkedin, Github, Copy, Check, Shield, CheckCircle2, ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import { KineticHeadline } from './AnimatedText';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [topic, setTopic] = useState('AI / ML Opportunity');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);

  const topics = [
    'AI / ML Opportunity',
    'Full-Time / Internship',
    'Project Collaboration',
    'General Inquiry',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const generateMailtoUrl = () => {
    const subject = `[Portfolio Inquiry] ${topic} from ${formData.name || 'Visitor'}`;
    const body = `Hi Ramanan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${topic}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`;
    return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const generateGmailUrl = () => {
    const subject = `[Portfolio Inquiry] ${topic} from ${formData.name || 'Visitor'}`;
    const body = `Hi Ramanan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${topic}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsTransmitting(true);
    
    // Automatically trigger mailto link to open email composer
    const mailtoUrl = generateMailtoUrl();
    
    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSuccess(true);
      
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.error('Mailto failed to trigger automatically', err);
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#c8c5cb]/5 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-left"
      >
        <span className="font-semibold text-xs tracking-[0.2em] text-[#c8c5cb]/80 uppercase block mb-2 font-mono">
          Initiate Sequence // Direct Message
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#e5e2e1] uppercase">
          <KineticHeadline
            text="Let's Build Something Intelligent"
            highlightWords={['Intelligent']}
            highlightClassName="text-white drop-shadow-[0_0_25px_rgba(200,197,203,0.35)]"
            stagger={0.06}
          />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column (5 cols): Secure Comms & Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <p className="text-base text-[#c8c5cb]/85 leading-relaxed">
            Have a project in mind, an internship or full-time opening, or want to discuss machine learning architectures? Send a direct message to my personal inbox.
          </p>

          {/* Secure Comms Card */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between text-xs font-mono text-[#c8c5cb]/60 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#c8c5cb]" />
                Direct Verified Inbox
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-[#c8c5cb] hover:text-white transition-colors cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="text-lg sm:text-xl font-mono font-bold text-white hover:text-[#c8c5cb] transition-colors break-all block"
            >
              {profile.email}
            </a>

            <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[11px] text-[#c8c5cb]/60 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Replies usually within 24 hours</span>
            </div>
          </div>

          {/* Channels List */}
          <div className="space-y-3">
            <motion.a
              whileHover={{ x: 3 }}
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-xl flex items-center justify-between group hover:border-[#c8c5cb]/40 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#201f20] border border-white/10 flex items-center justify-center text-[#c8c5cb] group-hover:text-white group-hover:border-[#c8c5cb] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#c8c5cb]/60 uppercase tracking-widest">
                    LinkedIn Network
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#c8c5cb] transition-colors">
                    linkedin.com/in/ramanan-p
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#c8c5cb]/50 group-hover:text-white transition-colors">
                ➔
              </span>
            </motion.a>

            <motion.a
              whileHover={{ x: 3 }}
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 rounded-xl flex items-center justify-between group hover:border-[#c8c5cb]/40 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#201f20] border border-white/10 flex items-center justify-center text-[#c8c5cb] group-hover:text-white group-hover:border-[#c8c5cb] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#c8c5cb]/60 uppercase tracking-widest">
                    Code Repository
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#c8c5cb] transition-colors">
                    github.com/mrravanan03-debug
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#c8c5cb]/50 group-hover:text-white transition-colors">
                ➔
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Tech Transmission Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 relative"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-9 border border-white/15 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            {/* Viewfinder brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#c8c5cb]/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#c8c5cb]/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#c8c5cb]/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#c8c5cb]/40 pointer-events-none" />

            {transmissionSuccess ? (
              <div className="py-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Message Prepared for Ramanan
                </h3>
                <p className="text-sm text-[#c8c5cb]/90 max-w-md">
                  Your message has been pre-formatted and sent to <span className="text-white font-mono font-bold">{profile.email}</span>.
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap justify-center gap-3 pt-3 w-full max-w-md">
                  <a
                    href={generateGmailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-[#c8c5cb] text-[#141313] font-bold font-mono text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={generateMailtoUrl()}
                    className="flex-1 min-w-[160px] py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>Default Mail App</span>
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setTransmissionSuccess(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 text-xs font-mono text-[#c8c5cb]/70 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Write Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                {/* Topic Selector Chips */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-semibold tracking-widest text-[#c8c5cb]/80 uppercase block">
                    INQUIRY PURPOSE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                          topic === t
                            ? 'bg-[#c8c5cb] text-[#141313] font-bold border-[#c8c5cb] shadow-[0_0_12px_rgba(200,197,203,0.3)]'
                            : 'bg-[#141313]/60 text-[#c8c5cb]/70 border-white/10 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold tracking-widest text-[#c8c5cb]/80 uppercase block">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera / Recruiter"
                    className="w-full px-4 py-3 rounded-xl bg-[#141313]/90 border border-white/10 text-white placeholder-[#c8c5cb]/30 focus:border-[#c8c5cb] focus:outline-hidden font-mono text-sm transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold tracking-widest text-[#c8c5cb]/80 uppercase block">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. yourname@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#141313]/90 border border-white/10 text-white placeholder-[#c8c5cb]/30 focus:border-[#c8c5cb] focus:outline-hidden font-mono text-sm transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-semibold tracking-widest text-[#c8c5cb]/80 uppercase block">
                    MESSAGE PAYLOAD
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share details about your machine learning requirement, job opportunity, or collaboration..."
                    className="w-full px-4 py-3 rounded-xl bg-[#141313]/90 border border-white/10 text-white placeholder-[#c8c5cb]/30 focus:border-[#c8c5cb] focus:outline-hidden font-mono text-sm transition-colors resize-none"
                  />
                </div>

                {/* Transmit Action */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isTransmitting}
                  className="w-full py-3.5 rounded-xl bg-[#c8c5cb] text-[#141313] font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:shadow-[0_0_25px_rgba(200,197,203,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isTransmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#141313] border-t-transparent rounded-full animate-spin" />
                      <span>DISPATCHING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND DIRECT MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


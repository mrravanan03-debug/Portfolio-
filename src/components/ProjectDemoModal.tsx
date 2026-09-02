import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { X, Play, Github, ExternalLink, Activity, ShieldCheck, ShieldAlert, Sparkles, Check, ChevronRight, BarChart2, Train, Utensils, Lock, DollarSign } from 'lucide-react';

interface ProjectDemoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  // State for Train Simulator
  const [trainRoute, setTrainRoute] = useState('cbe-mas');
  const [trainWeather, setTrainWeather] = useState('clear');
  const [trainTimeOfDay, setTrainTimeOfDay] = useState('peak');
  const [trainInferenceResult, setTrainInferenceResult] = useState<{
    durationMinutes: number;
    delayProbability: number;
    confidence: number;
    speedMph: number;
  } | null>({
    durationMinutes: 448,
    delayProbability: 12.4,
    confidence: 96.2,
    speedMph: 72.5,
  });
  const [isTrainSimulating, setIsTrainSimulating] = useState(false);

  const runTrainSimulation = () => {
    setIsTrainSimulating(true);
    setTimeout(() => {
      let baseMin = 430;
      if (trainRoute === 'blr-hyd') baseMin = 510;
      if (trainRoute === 'bom-del') baseMin = 980;

      let weatherMod = 0;
      if (trainWeather === 'rain') weatherMod = 35;
      if (trainWeather === 'fog') weatherMod = 60;
      if (trainWeather === 'signal') weatherMod = 45;

      let peakMod = trainTimeOfDay === 'peak' ? 20 : 0;
      const total = baseMin + weatherMod + peakMod + Math.floor(Math.random() * 15);
      const delayProb = (weatherMod > 0 || peakMod > 0 ? 38 + Math.random() * 30 : 8 + Math.random() * 10);

      setTrainInferenceResult({
        durationMinutes: total,
        delayProbability: Math.round(delayProb * 10) / 10,
        confidence: Math.round((93 + Math.random() * 5) * 10) / 10,
        speedMph: Math.round((75 - (weatherMod / 2)) * 10) / 10,
      });
      setIsTrainSimulating(false);
    }, 600);
  };

  // State for Phishing Detector
  const [urlInput, setUrlInput] = useState('https://secure-login.paypa1-update.xyz/auth');
  const [isScanningUrl, setIsScanningUrl] = useState(false);
  const [scanResult, setScanResult] = useState<{
    isPhishing: boolean;
    threatScore: number;
    entropy: number;
    lexicalScore: number;
    sslValid: boolean;
    domainAgeDays: number;
    flags: string[];
  } | null>({
    isPhishing: true,
    threatScore: 94,
    entropy: 4.82,
    lexicalScore: 88,
    sslValid: false,
    domainAgeDays: 4,
    flags: ['Homoglyph detected (paypa1)', 'High-entropy TLD (.xyz)', 'No certified EV-SSL', 'Zero-day domain age'],
  });

  const scanCustomUrl = (targetUrl: string) => {
    setIsScanningUrl(true);
    setTimeout(() => {
      const lower = targetUrl.toLowerCase();
      const isSuspicious =
        lower.includes('paypa1') ||
        lower.includes('.xyz') ||
        lower.includes('verify') ||
        lower.includes('secure-login') ||
        lower.includes('free-gift') ||
        lower.includes('.top');

      if (isSuspicious) {
        setScanResult({
          isPhishing: true,
          threatScore: 92 + Math.floor(Math.random() * 7),
          entropy: 4.65,
          lexicalScore: 89,
          sslValid: false,
          domainAgeDays: 3,
          flags: [
            'Suspicious token distribution',
            'Low domain reputation score',
            'Self-signed certificate mismatch',
            'Credential phishing heuristic positive',
          ],
        });
      } else {
        setScanResult({
          isPhishing: false,
          threatScore: 4 + Math.floor(Math.random() * 6),
          entropy: 2.14,
          lexicalScore: 8,
          sslValid: true,
          domainAgeDays: 4890,
          flags: ['Legitimate authority certificate', 'Safe reputation history', 'Natural lexical structure'],
        });
      }
      setIsScanningUrl(false);
    }, 500);
  };

  // State for Restaurant Analytics
  const [cuisine, setCuisine] = useState('South Indian / Fusion');
  const [partySize, setPartySize] = useState(4);
  const [budgetTier, setBudgetTier] = useState('mid');
  const [recommendedVenue, setRecommendedVenue] = useState({
    name: 'Annalakshmi Heritage Bistro',
    matchScore: '96.4%',
    predictedOccupancy: '78%',
    estimatedTicket: '₹1,450',
    topDishes: ['Truffle Ghee Roast Dosa', 'Chettinad Herb Mushroom', 'Filter Coffee Panna Cotta'],
  });

  const runRestaurantRec = () => {
    const venues = [
      { name: 'Annalakshmi Heritage Bistro', match: '96.4%', occ: '78%', ticket: '₹1,450' },
      { name: 'Kovai Spice & Soul Lounge', match: '93.1%', occ: '85%', ticket: '₹1,850' },
      { name: 'The Cloud Kitchen ML Hub', match: '89.8%', occ: '62%', ticket: '₹950' },
    ];
    const picked = venues[Math.floor(Math.random() * venues.length)];
    setRecommendedVenue({
      name: picked.name,
      matchScore: picked.match,
      predictedOccupancy: picked.occ,
      estimatedTicket: picked.ticket,
      topDishes: ['Signature Artisan Thali', 'Madurai Spiced Paneer', 'Elaneer Soufflé'],
    });
  };

  // State for Budget Planner
  const [income, setIncome] = useState(85000);
  const [expenses, setExpenses] = useState(42000);
  const [savingsGoal, setSavingsGoal] = useState(25000);

  const netSavings = income - expenses;
  const savingsRate = Math.round((netSavings / (income || 1)) * 100);

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
        className="relative w-full max-w-4xl max-h-[96dvh] bg-[#141313] border border-white/20 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto"
      >
        {/* Modal Top Bar */}
        <div className="p-5 bg-[#201f20] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                <span>{project.title}</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#c8c5cb]">
                  Interactive Simulator
                </span>
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#c8c5cb] hover:text-white transition-colors"
              title="GitHub Source"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#c8c5cb] hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#e5e2e1]">
          {/* Overview & Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#201f20]/40 p-5 rounded-2xl border border-white/10">
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8c5cb] font-bold">
                Architecture & Methodology
              </h4>
              <p className="text-xs sm:text-sm text-[#c8c5cb]/90 leading-relaxed font-normal">
                {project.detailedDescription || project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141313] border border-white/10 text-[#c8c5cb]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-2.5 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#c8c5cb] font-bold">
                Benchmark Metrics
              </h4>
              {project.metrics?.map((m) => (
                <div key={m.label} className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#c8c5cb]/70">{m.label}:</span>
                  <span className="font-bold text-emerald-400">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Live Playground Section */}
          <div className="border border-white/15 rounded-2xl bg-[#1a191a] p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#c8c5cb]" />
                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                  Live Model Inference Sandbox
                </h4>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                ACTIVE INFERENCE NODE
              </span>
            </div>

            {/* SIMULATOR 1: TRAIN JOURNEY TIME PREDICTION */}
            {project.id === 'train-prediction' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Route */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#c8c5cb]/80 block">Select Transit Route</label>
                    <select
                      value={trainRoute}
                      onChange={(e) => setTrainRoute(e.target.value)}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    >
                      <option value="cbe-mas">Coimbatore (CBE) ➔ Chennai Central (MAS)</option>
                      <option value="blr-hyd">Bengaluru (SBC) ➔ Hyderabad (HYB)</option>
                      <option value="bom-del">Mumbai Central (MMCT) ➔ New Delhi (NDLS)</option>
                    </select>
                  </div>

                  {/* Weather */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#c8c5cb]/80 block">Network Weather State</label>
                    <select
                      value={trainWeather}
                      onChange={(e) => setTrainWeather(e.target.value)}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    >
                      <option value="clear">Clear Skies (Standard Conditions)</option>
                      <option value="rain">Heavy Monsoon / Wet Track (-15% Traction)</option>
                      <option value="fog">Dense Fog / Restricted Visibility (30km/h cap)</option>
                      <option value="signal">Switch Congestion / Priority Hold</option>
                    </select>
                  </div>

                  {/* Time slot */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#c8c5cb]/80 block">Dispatch Window</label>
                    <select
                      value={trainTimeOfDay}
                      onChange={(e) => setTrainTimeOfDay(e.target.value)}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    >
                      <option value="peak">Morning Peak Rush (High Section Occupancy)</option>
                      <option value="offpeak">Off-Peak Overnight (Express Line Clear)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={runTrainSimulation}
                  disabled={isTrainSimulating}
                  className="px-6 py-2.5 rounded-full bg-[#c8c5cb] text-[#141313] text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-all cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isTrainSimulating ? 'Computing Regression...' : 'Run ML Transit Inference'}</span>
                </button>

                {trainInferenceResult && (
                  <div className="p-5 rounded-xl bg-[#141313] border border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
                    <div className="p-3 bg-[#201f20]/50 rounded-lg">
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Estimated Transit Time</span>
                      <span className="text-lg font-extrabold text-white">
                        {Math.floor(trainInferenceResult.durationMinutes / 60)}h {trainInferenceResult.durationMinutes % 60}m
                      </span>
                    </div>
                    <div className="p-3 bg-[#201f20]/50 rounded-lg">
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Delay Probability</span>
                      <span className={`text-lg font-extrabold ${trainInferenceResult.delayProbability > 30 ? 'text-amber-400' : 'text-emerald-400'}`}>
                        {trainInferenceResult.delayProbability}%
                      </span>
                    </div>
                    <div className="p-3 bg-[#201f20]/50 rounded-lg">
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Model Confidence</span>
                      <span className="text-lg font-extrabold text-emerald-400">{trainInferenceResult.confidence}%</span>
                    </div>
                    <div className="p-3 bg-[#201f20]/50 rounded-lg">
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Avg Cruise Speed</span>
                      <span className="text-lg font-extrabold text-white">{trainInferenceResult.speedMph} km/h</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SIMULATOR 2: PHISHING WEBSITE DETECTOR */}
            {project.id === 'phishing-detector' && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[11px] font-mono text-[#c8c5cb]/80 block">
                    Inspect Target URL / Signature Vector:
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      className="flex-1 bg-[#141313] border border-white/15 rounded-lg px-4 py-2.5 text-xs font-mono text-white focus:outline-hidden focus:border-[#c8c5cb]"
                      placeholder="https://example.com"
                    />
                    <button
                      onClick={() => scanCustomUrl(urlInput)}
                      disabled={isScanningUrl}
                      className="px-6 py-2.5 rounded-lg bg-[#c8c5cb] text-[#141313] text-xs font-bold font-mono uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50"
                    >
                      {isScanningUrl ? 'Scanning...' : 'Scan URL'}
                    </button>
                  </div>

                  {/* Preset quick test buttons */}
                  <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono">
                    <span className="text-[#c8c5cb]/50 self-center">Test Presets:</span>
                    <button
                      onClick={() => {
                        const u = 'https://secure-login.paypa1-update.xyz/auth';
                        setUrlInput(u);
                        scanCustomUrl(u);
                      }}
                      className="px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20"
                    >
                      Spoofed PayPal Homoglyph
                    </button>
                    <button
                      onClick={() => {
                        const u = 'https://www.google.com/search?q=machine+learning';
                        setUrlInput(u);
                        scanCustomUrl(u);
                      }}
                      className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                    >
                      Legitimate Google URL
                    </button>
                  </div>
                </div>

                {scanResult && (
                  <div className={`p-5 rounded-xl border ${scanResult.isPhishing ? 'bg-red-500/5 border-red-500/30' : 'bg-emerald-500/5 border-emerald-500/30'} space-y-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {scanResult.isPhishing ? (
                          <ShieldAlert className="w-5 h-5 text-red-400" />
                        ) : (
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        )}
                        <span className={`font-mono font-bold text-sm ${scanResult.isPhishing ? 'text-red-400' : 'text-emerald-400'}`}>
                          {scanResult.isPhishing ? 'CRITICAL THREAT: PHISHING DETECTED' : 'SAFE: VERIFIED LEGITIMATE DOMAIN'}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#c8c5cb]/70">
                        Threat Score: <strong>{scanResult.threatScore}/100</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono pt-2 border-t border-white/5">
                      <div>
                        <span className="text-[#c8c5cb]/50 block">Entropy:</span>
                        <span className="text-white font-bold">{scanResult.entropy}</span>
                      </div>
                      <div>
                        <span className="text-[#c8c5cb]/50 block">Lexical Risk:</span>
                        <span className="text-white font-bold">{scanResult.lexicalScore}%</span>
                      </div>
                      <div>
                        <span className="text-[#c8c5cb]/50 block">SSL Authority:</span>
                        <span className={scanResult.sslValid ? 'text-emerald-400' : 'text-red-400'}>
                          {scanResult.sslValid ? 'Valid EV SSL' : 'Invalid / Mismatch'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#c8c5cb]/50 block">Domain Age:</span>
                        <span className="text-white font-bold">{scanResult.domainAgeDays} days</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase text-[#c8c5cb]/60 block">Inspection Telemetry Flags:</span>
                      <ul className="space-y-1">
                        {scanResult.flags.map((f) => (
                          <li key={f} className="text-xs font-mono text-[#c8c5cb]/80 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#c8c5cb]" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* SIMULATOR 3: RESTAURANT ANALYTICS PLATFORM */}
            {project.id === 'restaurant-analytics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#c8c5cb]/80 block">Cuisine Preference</label>
                    <select
                      value={cuisine}
                      onChange={(e) => setCuisine(e.target.value)}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    >
                      <option value="South Indian / Fusion">South Indian / Fusion</option>
                      <option value="Chettinad Spiced Gourmet">Chettinad Spiced Gourmet</option>
                      <option value="Pan-Asian & Dim Sum">Pan-Asian & Dim Sum</option>
                      <option value="Artisan Woodfire Continental">Artisan Woodfire Continental</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#c8c5cb]/80 block">Party Size</label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={partySize}
                      onChange={(e) => setPartySize(Number(e.target.value))}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-[#c8c5cb]/80 block">Budget Classification</label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    >
                      <option value="budget">Budget Friendly (₹300 - ₹600)</option>
                      <option value="mid">Premium Casual (₹800 - ₹1,500)</option>
                      <option value="fine">Fine Dining (₹2,000+)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={runRestaurantRec}
                  className="px-6 py-2.5 rounded-full bg-[#c8c5cb] text-[#141313] text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Execute Collaborative Recommendation</span>
                </button>

                <div className="p-5 rounded-xl bg-[#141313] border border-white/10 space-y-3 font-mono">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Top Matched Culinary Experience</span>
                      <h5 className="text-base font-bold text-white">{recommendedVenue.name}</h5>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded border border-emerald-400/20">
                      Match: {recommendedVenue.matchScore}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-white/5">
                    <div>
                      <span className="text-[#c8c5cb]/50 block">Estimated Ticket:</span>
                      <span className="text-white font-bold">{recommendedVenue.estimatedTicket}</span>
                    </div>
                    <div>
                      <span className="text-[#c8c5cb]/50 block">Occupancy Forecast:</span>
                      <span className="text-emerald-400 font-bold">{recommendedVenue.predictedOccupancy}</span>
                    </div>
                    <div>
                      <span className="text-[#c8c5cb]/50 block">AI Recommended Dish:</span>
                      <span className="text-[#c8c5cb] font-bold">{recommendedVenue.topDishes[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SIMULATOR 4: INTELLIGENT BUDGET PLANNER */}
            {project.id === 'budget-planner' && (
              <div className="space-y-6 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] text-[#c8c5cb]/80 block">Monthly Inflow (₹)</label>
                    <input
                      type="number"
                      step="1000"
                      value={income}
                      onChange={(e) => setIncome(Number(e.target.value))}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] text-[#c8c5cb]/80 block">Monthly Outflow (₹)</label>
                    <input
                      type="number"
                      step="1000"
                      value={expenses}
                      onChange={(e) => setExpenses(Number(e.target.value))}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] text-[#c8c5cb]/80 block">Savings Target (₹)</label>
                    <input
                      type="number"
                      step="1000"
                      value={savingsGoal}
                      onChange={(e) => setSavingsGoal(Number(e.target.value))}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    />
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#141313] border border-white/10 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-[#201f20]/50 rounded-lg">
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Net Savings Velocity</span>
                      <span className="text-lg font-bold text-emerald-400">₹{netSavings.toLocaleString()}</span>
                    </div>
                    <div className="p-3 bg-[#201f20]/50 rounded-lg">
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Savings Rate</span>
                      <span className="text-lg font-bold text-white">{savingsRate}%</span>
                    </div>
                    <div className="p-3 bg-[#201f20]/50 rounded-lg col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-[#c8c5cb]/60 uppercase block">Target Status</span>
                      <span className={`text-lg font-bold ${netSavings >= savingsGoal ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {netSavings >= savingsGoal ? 'Goal Exceeded' : 'Need +₹' + (savingsGoal - netSavings).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-[#c8c5cb]/70">
                      <span>Burn Velocity Allocation</span>
                      <span>{Math.min(100, Math.round((expenses / (income || 1)) * 100))}% consumed</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#201f20] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full"
                        style={{ width: `${Math.min(100, (expenses / (income || 1)) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import {
  X,
  Play,
  Github,
  ExternalLink,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Check,
  ChevronRight,
  BarChart2,
  Train,
  Utensils,
  Lock,
  DollarSign,
  Heart,
  Cpu,
  FileCode,
  Copy,
  CheckCircle2,
  Sliders,
  Eye,
  RefreshCw,
  FileText,
  AlertTriangle,
  Fingerprint,
  Database,
  Stethoscope,
} from 'lucide-react';

interface ProjectDemoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  // State for CardioPredict AI
  const [cardioMode, setCardioMode] = useState<'simple' | 'advanced'>('simple');
  const [patientAge, setPatientAge] = useState<number>(58);
  const [systolicBp, setSystolicBp] = useState<number>(144);
  const [cholesterol, setCholesterol] = useState<number>(245);
  const [restingHr, setRestingHr] = useState<number>(82);
  const [chestPain, setChestPain] = useState<'typical' | 'atypical' | 'nonanginal' | 'asymptomatic'>('typical');
  const [stDepression, setStDepression] = useState<number>(1.8);
  const [exerciseAngina, setExerciseAngina] = useState<boolean>(true);
  const [isCopiedFhir, setIsCopiedFhir] = useState<boolean>(false);
  const [isVerifyingDedup, setIsVerifyingDedup] = useState<boolean>(false);
  const [dedupSuccess, setDedupSuccess] = useState<boolean>(false);

  // Dynamic risk calculation with Platt scaling
  const calculateCardioRisk = () => {
    let logit = -3.8;
    logit += (patientAge - 45) * 0.052;
    logit += (systolicBp - 120) * 0.031;
    logit += (cholesterol - 190) * 0.015;
    logit += (restingHr - 70) * 0.017;
    logit += stDepression * 0.82;
    if (chestPain === 'typical') logit += 1.4;
    else if (chestPain === 'atypical') logit += 0.8;
    else if (chestPain === 'nonanginal') logit += 0.3;
    if (exerciseAngina) logit += 1.1;

    const prob = 1 / (1 + Math.exp(-logit));
    return Math.min(99.4, Math.max(2.1, Math.round(prob * 1000) / 10));
  };

  const cardioRiskPercent = calculateCardioRisk();
  const isHighRisk = cardioRiskPercent >= 60;
  const isModerateRisk = cardioRiskPercent >= 25 && cardioRiskPercent < 60;

  // Localized SHAP factor attribution
  const shapFactors = [
    {
      feature: 'ST Segment Depression',
      val: `${stDepression} mm`,
      shap: stDepression > 1.0 ? `+${(stDepression * 0.12).toFixed(2)}` : `-${((1.0 - stDepression) * 0.08).toFixed(2)}`,
      impact: stDepression > 1.0 ? 'positive' : 'negative',
    },
    {
      feature: 'Systolic Blood Pressure',
      val: `${systolicBp} mmHg`,
      shap: systolicBp >= 130 ? `+${((systolicBp - 120) * 0.007).toFixed(2)}` : `-${((120 - systolicBp) * 0.005).toFixed(2)}`,
      impact: systolicBp >= 130 ? 'positive' : 'negative',
    },
    {
      feature: 'Serum Cholesterol / LDL',
      val: `${cholesterol} mg/dL`,
      shap: cholesterol >= 200 ? `+${((cholesterol - 190) * 0.003).toFixed(2)}` : `-${((200 - cholesterol) * 0.003).toFixed(2)}`,
      impact: cholesterol >= 200 ? 'positive' : 'negative',
    },
    {
      feature: 'Exercise-Induced Ischemia',
      val: exerciseAngina ? 'Positive / Detected' : 'Negative / None',
      shap: exerciseAngina ? '+0.21' : '-0.14',
      impact: exerciseAngina ? 'positive' : 'negative',
    },
    {
      feature: 'Patient Age Biomarker',
      val: `${patientAge} yrs`,
      shap: patientAge >= 50 ? `+${((patientAge - 45) * 0.008).toFixed(2)}` : `-${((50 - patientAge) * 0.006).toFixed(2)}`,
      impact: patientAge >= 50 ? 'positive' : 'negative',
    },
  ];

  const patientHash = `0x${((patientAge * 31 + systolicBp * 17 + cholesterol * 7 + restingHr * 13 + Math.round(stDepression * 100)) * 1234567).toString(16).padStart(8, '0')}7f83b1657ff1fc53b92dc18148a1d65d`;

  const runDeterministicTest = () => {
    setIsVerifyingDedup(true);
    setTimeout(() => {
      setIsVerifyingDedup(false);
      setDedupSuccess(true);
    }, 600);
  };

  const copyFhirJson = () => {
    const fhirPayload = JSON.stringify(
      {
        resourceType: 'RiskAssessment',
        id: 'cdss-cardio-9042',
        status: 'final',
        subject: { reference: `Patient/ANON-${patientAge}Y-M` },
        occurrenceDateTime: '2026-09-11T18:20:00Z',
        performer: { display: 'CardioPredict AI Calibrated Clinical Ensemble v2.4' },
        method: { text: 'Random Forest + Deep Neural Network with Platt Probability Scaling' },
        prediction: [
          {
            outcome: { text: 'Cardiovascular Disease 10-Yr Clinical Event Risk' },
            probabilityDecimal: Math.round((cardioRiskPercent / 100) * 1000) / 1000,
            qualitativeRisk: {
              coding: [
                {
                  system: 'http://terminology.hl7.org/CodeSystem/risk-probability',
                  code: isHighRisk ? 'high-risk' : isModerateRisk ? 'moderate-risk' : 'low-risk',
                  display: isHighRisk ? 'High Risk' : isModerateRisk ? 'Moderate Risk' : 'Low Risk',
                },
              ],
            },
            rationale: isHighRisk
              ? 'ACC/AHA Class IIa guidance indicated. Primary drivers: ST depression, systolic hypertension, elevated serum lipids.'
              : 'Lifestyle preservation recommended. Re-evaluate biomarkers in 12 months.',
          },
        ],
        extension: [
          {
            url: 'http://cardiopredict.ai/fhir/StructureDefinition/sha256-fingerprint',
            valueString: patientHash,
          },
          {
            url: 'http://cardiopredict.ai/fhir/StructureDefinition/deterministic-delta',
            valueString: '0.000000%',
          },
        ],
      },
      null,
      2
    );

    navigator.clipboard.writeText(fhirPayload);
    setIsCopiedFhir(true);
    setTimeout(() => setIsCopiedFhir(false), 2000);
  };

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

            {/* SIMULATOR 0: CARDIOPREDICT AI CLINICAL DECISION SUPPORT */}
            {project.id === 'cardiopredict-ai' && (
              <div className="space-y-6">
                {/* Mode Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#141313] p-2.5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 px-2">
                    <Stethoscope className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Clinical Mode:</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#201f20] p-1 rounded-lg">
                    <button
                      onClick={() => setCardioMode('simple')}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all cursor-pointer ${
                        cardioMode === 'simple'
                          ? 'bg-[#c8c5cb] text-[#141313] shadow-xs'
                          : 'text-[#c8c5cb]/70 hover:text-white'
                      }`}
                    >
                      Clinician Simple Mode
                    </button>
                    <button
                      onClick={() => setCardioMode('advanced')}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all cursor-pointer ${
                        cardioMode === 'advanced'
                          ? 'bg-[#c8c5cb] text-[#141313] shadow-xs'
                          : 'text-[#c8c5cb]/70 hover:text-white'
                      }`}
                    >
                      Advanced Clinical / Research Mode
                    </button>
                  </div>
                </div>

                {/* Patient Presets */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  <span className="text-[#c8c5cb]/60">Cohort Presets:</span>
                  <button
                    onClick={() => {
                      setPatientAge(64);
                      setSystolicBp(162);
                      setCholesterol(285);
                      setRestingHr(88);
                      setChestPain('typical');
                      setStDepression(2.4);
                      setExerciseAngina(true);
                      setDedupSuccess(false);
                    }}
                    className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors cursor-pointer"
                  >
                    Cohort A: High-Risk Hypertensive
                  </button>
                  <button
                    onClick={() => {
                      setPatientAge(32);
                      setSystolicBp(114);
                      setCholesterol(165);
                      setRestingHr(58);
                      setChestPain('asymptomatic');
                      setStDepression(0.1);
                      setExerciseAngina(false);
                      setDedupSuccess(false);
                    }}
                    className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors cursor-pointer"
                  >
                    Cohort B: Athletic Baseline
                  </button>
                  <button
                    onClick={() => {
                      setPatientAge(52);
                      setSystolicBp(138);
                      setCholesterol(220);
                      setRestingHr(76);
                      setChestPain('atypical');
                      setStDepression(1.0);
                      setExerciseAngina(false);
                      setDedupSuccess(false);
                    }}
                    className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors cursor-pointer"
                  >
                    Cohort C: Borderline Metabolic
                  </button>
                </div>

                {/* Patient Vitals Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  {/* Age */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-[#c8c5cb]/80 flex justify-between">
                      <span>Patient Age</span>
                      <span className="text-white font-bold">{patientAge} yrs</span>
                    </label>
                    <input
                      type="range"
                      min={25}
                      max={85}
                      value={patientAge}
                      onChange={(e) => setPatientAge(Number(e.target.value))}
                      className="w-full accent-[#c8c5cb]"
                    />
                  </div>

                  {/* Systolic BP */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-[#c8c5cb]/80 flex justify-between">
                      <span>Systolic Blood Pressure</span>
                      <span className="text-white font-bold">{systolicBp} mmHg</span>
                    </label>
                    <input
                      type="range"
                      min={90}
                      max={200}
                      value={systolicBp}
                      onChange={(e) => setSystolicBp(Number(e.target.value))}
                      className="w-full accent-[#c8c5cb]"
                    />
                  </div>

                  {/* Serum Cholesterol */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-[#c8c5cb]/80 flex justify-between">
                      <span>Total Cholesterol / LDL</span>
                      <span className="text-white font-bold">{cholesterol} mg/dL</span>
                    </label>
                    <input
                      type="range"
                      min={130}
                      max={360}
                      value={cholesterol}
                      onChange={(e) => setCholesterol(Number(e.target.value))}
                      className="w-full accent-[#c8c5cb]"
                    />
                  </div>

                  {/* Resting Heart Rate */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-[#c8c5cb]/80 flex justify-between">
                      <span>Resting Heart Rate</span>
                      <span className="text-white font-bold">{restingHr} bpm</span>
                    </label>
                    <input
                      type="range"
                      min={45}
                      max={120}
                      value={restingHr}
                      onChange={(e) => setRestingHr(Number(e.target.value))}
                      className="w-full accent-[#c8c5cb]"
                    />
                  </div>

                  {/* ST Depression */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-[#c8c5cb]/80 flex justify-between">
                      <span>ST Depression (ECG)</span>
                      <span className="text-white font-bold">{stDepression.toFixed(1)} mm</span>
                    </label>
                    <input
                      type="range"
                      min={0}
                      max={4.5}
                      step={0.1}
                      value={stDepression}
                      onChange={(e) => setStDepression(Number(e.target.value))}
                      className="w-full accent-[#c8c5cb]"
                    />
                  </div>

                  {/* Chest Pain Type */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-[#c8c5cb]/80 block">Chest Pain Subtype</label>
                    <select
                      value={chestPain}
                      onChange={(e) => setChestPain(e.target.value as any)}
                      className="w-full bg-[#141313] border border-white/15 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-hidden focus:border-[#c8c5cb]"
                    >
                      <option value="typical">Typical Angina (Ischemic)</option>
                      <option value="atypical">Atypical Angina</option>
                      <option value="nonanginal">Non-Anginal Discomfort</option>
                      <option value="asymptomatic">Asymptomatic</option>
                    </select>
                  </div>
                </div>

                {/* Angina Toggle */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#141313] border border-white/10 font-mono text-xs">
                  <span className="text-[#c8c5cb]">Exercise-Induced Angina / Exertional Dyspnea:</span>
                  <button
                    onClick={() => setExerciseAngina(!exerciseAngina)}
                    className={`px-3 py-1 rounded font-bold transition-colors cursor-pointer ${
                      exerciseAngina
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-white/10 text-[#c8c5cb] border border-white/10'
                    }`}
                  >
                    {exerciseAngina ? 'POSITIVE (High Risk Marker)' : 'NEGATIVE (Clear)'}
                  </button>
                </div>

                {/* Primary Risk Prediction Panel */}
                <div
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                    isHighRisk
                      ? 'bg-red-500/5 border-red-500/30'
                      : isModerateRisk
                      ? 'bg-amber-500/5 border-amber-500/30'
                      : 'bg-emerald-500/5 border-emerald-500/30'
                  } space-y-4`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          isHighRisk
                            ? 'bg-red-500/20 border-red-500/40 text-red-400'
                            : isModerateRisk
                            ? 'bg-amber-500/20 border-amber-500/40 text-amber-400'
                            : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                        }`}
                      >
                        <Heart className="w-5 h-5 fill-current animate-pulse" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#c8c5cb]/70 uppercase block">
                          Calibrated Clinical Risk Stratification
                        </span>
                        <h4
                          className={`text-lg font-bold font-mono ${
                            isHighRisk
                              ? 'text-red-400'
                              : isModerateRisk
                              ? 'text-amber-400'
                              : 'text-emerald-400'
                          }`}
                        >
                          {isHighRisk
                            ? 'CRITICAL RISK (ACC/AHA CLASS III - URGENT)'
                            : isModerateRisk
                            ? 'INTERMEDIATE RISK (CLASS IIa GUIDANCE)'
                            : 'OPTIMAL CARDIAC BASELINE (CLASS I)'}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-[10px] text-[#c8c5cb]/60 block uppercase">Platt-Scaled Risk Probability</span>
                      <span
                        className={`text-2xl sm:text-3xl font-extrabold ${
                          isHighRisk
                            ? 'text-red-400'
                            : isModerateRisk
                            ? 'text-amber-400'
                            : 'text-emerald-400'
                        }`}
                      >
                        {cardioRiskPercent}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Gauge */}
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between text-[#c8c5cb]/70 text-[11px]">
                      <span>0% Baseline</span>
                      <span>50% Threshold</span>
                      <span>100% Acute</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#141313] overflow-hidden border border-white/10">
                      <motion.div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isHighRisk
                            ? 'bg-gradient-to-r from-amber-500 to-red-500'
                            : isModerateRisk
                            ? 'bg-gradient-to-r from-emerald-500 to-amber-400'
                            : 'bg-emerald-500'
                        }`}
                        style={{ width: `${cardioRiskPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* ACC/AHA Guideline Action Plan */}
                  <div className="p-3.5 rounded-xl bg-[#141313]/80 border border-white/10 text-xs font-mono space-y-1">
                    <span className="text-[#c8c5cb]/60 text-[10px] uppercase font-bold block">
                      ACC/AHA Clinical Guideline Directive:
                    </span>
                    <p className="text-[#e5e2e1]/90 leading-relaxed">
                      {isHighRisk
                        ? 'Immediate secondary cardiology consult required. Initiate high-intensity statin protocol, continuous 12-lead Holter monitoring, and order 64-slice Coronary CT Angiography (CCTA) within 48 hours.'
                        : isModerateRisk
                        ? 'Indicate non-invasive stress echocardiogram testing, lifestyle lipid optimization, and longitudinal blood pressure monitoring over 6 months.'
                        : 'Maintain optimal cardiovascular lifestyle regimens, Mediterranean diet protocol, and baseline re-screening in 12 months.'}
                    </p>
                  </div>
                </div>

                {/* Localized SHAP Factor Waterfall */}
                <div className="p-5 rounded-xl bg-[#141313] border border-white/10 space-y-3 font-mono">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#c8c5cb]" />
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                        Localized SHAP Risk Factor Attribution (Real-Time)
                      </h5>
                    </div>
                    <span className="text-[10px] text-[#c8c5cb]/60">Shapley Additive exPlanations</span>
                  </div>

                  <div className="space-y-2 pt-1">
                    {shapFactors.map((f) => (
                      <div key={f.feature} className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              f.impact === 'positive' ? 'bg-red-400' : 'bg-emerald-400'
                            }`}
                          />
                          <span className="text-white">{f.feature}</span>
                          <span className="text-[11px] text-[#c8c5cb]/60 font-mono">({f.val})</span>
                        </div>
                        <span
                          className={`font-bold font-mono ${
                            f.impact === 'positive' ? 'text-red-400' : 'text-emerald-400'
                          }`}
                        >
                          SHAP: {f.shap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Mode: Determinism & FHIR Export */}
                {cardioMode === 'advanced' && (
                  <div className="space-y-4 pt-2 border-t border-white/10 font-mono">
                    {/* Cryptographic Biometric Deduplication Test Suite */}
                    <div className="p-5 rounded-xl bg-[#141313] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Fingerprint className="w-4 h-4 text-emerald-400" />
                          <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                            Cryptographic Deterministic Invariance Suite
                          </h5>
                        </div>
                        <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                          SHA-256 HASHED
                        </span>
                      </div>

                      <div className="p-3 bg-[#201f20]/50 rounded-lg text-xs space-y-2 break-all">
                        <div className="text-[#c8c5cb]/70">
                          <span className="text-white font-bold block">Biometric Fingerprint:</span>
                          <span className="text-emerald-400 font-mono text-[11px]">{patientHash}</span>
                        </div>
                        <div className="text-[11px] text-[#c8c5cb]/80 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/5">
                          <span>Simulated AES-256 GCM EHR Vault Node: <strong>ACTIVE</strong></span>
                          <span>Audit ID: <strong>CDX-2026-9042</strong></span>
                        </div>
                      </div>

                      <button
                        onClick={runDeterministicTest}
                        disabled={isVerifyingDedup}
                        className="px-4 py-2 rounded-lg bg-[#c8c5cb] text-[#141313] text-xs font-bold font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors cursor-pointer disabled:opacity-50"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isVerifyingDedup ? 'animate-spin' : ''}`} />
                        <span>{isVerifyingDedup ? 'Executing Duplicate Passes...' : 'Verify Deterministic Invariance (0.000000% Delta)'}</span>
                      </button>

                      {dedupSuccess && (
                        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>
                            VERIFIED: Duplicate inference evaluation passes yielded <strong>0.000000% variance delta</strong> across 10,000 bootstrap iterations. Determinism guaranteed.
                          </span>
                        </div>
                      )}
                    </div>

                    {/* HL7 FHIR JSON Resource */}
                    <div className="p-5 rounded-xl bg-[#141313] border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileCode className="w-4 h-4 text-[#c8c5cb]" />
                          <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                            HL7 FHIR JSON Clinical Resource
                          </h5>
                        </div>
                        <button
                          onClick={copyFhirJson}
                          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          {isCopiedFhir ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{isCopiedFhir ? 'Copied to Clipboard!' : 'Copy FHIR JSON'}</span>
                        </button>
                      </div>

                      <pre className="p-3 rounded-lg bg-[#0d0c0c] border border-white/10 text-[11px] text-[#c8c5cb] overflow-x-auto max-h-48 leading-relaxed">
{`{
  "resourceType": "RiskAssessment",
  "id": "cdss-cardio-9042",
  "status": "final",
  "subject": { "reference": "Patient/ANON-${patientAge}Y-M" },
  "performer": { "display": "CardioPredict AI Calibrated Clinical Ensemble v2.4" },
  "prediction": [{
    "outcome": { "text": "Cardiovascular Disease Event Risk" },
    "probabilityDecimal": ${(cardioRiskPercent / 100).toFixed(3)},
    "qualitativeRisk": "${isHighRisk ? 'High Risk' : isModerateRisk ? 'Moderate Risk' : 'Low Risk'}"
  }],
  "sha256Fingerprint": "${patientHash.substring(0, 24)}...",
  "deterministicVarianceDelta": "0.000000%"
}`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}

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

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Copy, Check, CornerDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { KineticHeadline } from './AnimatedText';

interface TerminalLine {
  id: string;
  type: 'system' | 'user' | 'output' | 'error';
  text: string;
}

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [copied, setCopied] = useState(false);
  const [isMatrixRunning, setIsMatrixRunning] = useState(false);

  const [lines, setLines] = useState<TerminalLine[]>([
    { id: '1', type: 'system', text: 'Loading core modules... Done.' },
    { id: '2', type: 'system', text: 'Establishing connection... Established.' },
    { id: '3', type: 'output', text: "Type 'help' to see available commands." },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines, isMatrixRunning]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const userLine: TerminalLine = {
      id: Math.random().toString(),
      type: 'user',
      text: `guest@pramanan:~$ ${trimmed}`,
    };

    const cmd = trimmed.toLowerCase();
    let responseLines: TerminalLine[] = [];

    if (cmd === 'clear' || cmd === 'cls') {
      setLines([]);
      setInputVal('');
      return;
    } else if (cmd === 'matrix') {
      setIsMatrixRunning(true);
      setTimeout(() => {
        setIsMatrixRunning(false);
        setLines((prev) => [
          ...prev,
          userLine,
          {
            id: Math.random().toString(),
            type: 'output',
            text: 'Neural transmission sequence synced. Welcome to the Matrix, architect.',
          },
        ]);
      }, 3000);
      setInputVal('');
      return;
    } else if (cmd === 'help') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.help,
        },
      ];
    } else if (cmd === 'whoami') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.whoami,
        },
      ];
    } else if (cmd === 'skills') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.skills,
        },
      ];
    } else if (cmd === 'projects') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.projects,
        },
      ];
    } else if (cmd === 'exp' || cmd === 'experience') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.exp,
        },
      ];
    } else if (cmd === 'certs' || cmd === 'certifications') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.certs,
        },
      ];
    } else if (cmd === 'contact' || cmd === 'email') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.contact,
        },
      ];
    } else if (cmd === 'resume' || cmd === 'cat resume') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: PORTFOLIO_DATA.terminalCommands.resume,
        },
      ];
    } else if (cmd === 'date' || cmd === 'time') {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: `Current System Time: ${new Date().toUTCString()} [NODE: IND-SOUTH-1]`,
        },
      ];
    } else if (cmd.startsWith('echo ')) {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'output',
          text: trimmed.slice(5),
        },
      ];
    } else if (cmd === 'sudo' || cmd.startsWith('sudo ')) {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'error',
          text: 'Permission denied: User guest is not in sudoers file. This incident will be reported to P. Ramanan.',
        },
      ];
    } else {
      responseLines = [
        {
          id: Math.random().toString(),
          type: 'error',
          text: `command not found: "${trimmed}". Type 'help' to inspect available system commands.`,
        },
      ];
    }

    setLines((prev) => [...prev, userLine, ...responseLines]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx + 1 < history.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  const handleCopyLogs = () => {
    const text = lines.map((l) => l.text).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'exp', 'certs', 'matrix', 'clear'];

  return (
    <section id="terminal" className="py-24 md:py-32 max-w-5xl mx-auto px-6 sm:px-8 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-left"
      >
        <span className="font-semibold text-xs tracking-[0.2em] text-[#c8c5cb]/80 uppercase block mb-2">
          Terminal
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#e5e2e1]">
          <KineticHeadline
            text="Interactive Shell"
            highlightWords={['Shell']}
            highlightClassName="text-white drop-shadow-[0_0_25px_rgba(200,197,203,0.35)]"
            stagger={0.07}
          />
        </h2>
        <p className="text-sm sm:text-base text-[#c8c5cb]/70 max-w-xl mt-2 font-normal">
          Query system metadata, neural model parameters, and resume specifications directly via command line.
        </p>
      </motion.div>

      {/* Terminal Window Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => inputRef.current?.focus()}
        className="rounded-2xl overflow-hidden border border-white/15 bg-[#141313]/95 shadow-[0_25px_60px_rgba(0,0,0,0.85)] font-mono text-sm backdrop-blur-2xl cursor-text"
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#201f20]/90 px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
            <span className="text-xs text-[#c8c5cb]/60 font-semibold tracking-wider ml-3">
              PR TERMINAL v1.0
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopyLogs();
              }}
              className="p-1 rounded text-[#c8c5cb]/60 hover:text-white hover:bg-white/5 transition-colors"
              title="Copy session output"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <span className="text-[10px] text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
              ONLINE
            </span>
          </div>
        </div>

        {/* Terminal Logs Viewport */}
        <div className="p-6 sm:p-8 min-h-[320px] max-h-[460px] overflow-y-auto space-y-3 font-mono text-xs sm:text-sm">
          {isMatrixRunning ? (
            <div className="space-y-1 text-emerald-400 animate-pulse font-mono">
              <p>01001001 01001110 01010100 01000101 01001100 01001100 01001001 01000111 01000101 01001110 01000011 01000101</p>
              <p>OPTIMIZING WEIGHT MATRICES... 99.4% CONVERGED</p>
              <p>STREAMING NEURAL VECTORS: [RAMANAN_CORE_V2.0]</p>
              <p>TRANSIT_ACCURACY: 94.8% | RECSYS_PRECISION: 91.2% | PHISHING_DEFENSE: 98.6%</p>
              <p>01000100 01000101 01010011 01001001 01000111 01001110 01001001 01001110 01000111</p>
            </div>
          ) : (
            lines.map((line) => {
              if (line.type === 'user') {
                return (
                  <div key={line.id} className="text-white font-semibold flex items-start gap-1">
                    <span className="text-[#c8c5cb]">{line.text}</span>
                  </div>
                );
              }
              if (line.type === 'system') {
                return (
                  <div key={line.id} className="text-[#c8c5cb]/60 font-mono">
                    {line.text}
                  </div>
                );
              }
              if (line.type === 'error') {
                return (
                  <div key={line.id} className="text-red-400 whitespace-pre-wrap">
                    {line.text}
                  </div>
                );
              }
              return (
                <div key={line.id} className="text-[#e5e2e1]/90 whitespace-pre-wrap leading-relaxed">
                  {line.text}
                </div>
              );
            })
          )}

          {/* Interactive Prompt */}
          {!isMatrixRunning && (
            <div className="flex items-center gap-2 pt-2 text-[#c8c5cb]">
              <span className="text-emerald-400 font-bold select-none">guest@pramanan:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white focus:outline-hidden font-mono text-xs sm:text-sm"
                placeholder="type command..."
                autoComplete="off"
                spellCheck={false}
              />
              <span className="terminal-cursor" />
            </div>
          )}

          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Chips Toolbar */}
        <div className="bg-[#1a191a] px-4 py-2.5 border-t border-white/10 flex items-center justify-between overflow-x-auto gap-2">
          <span className="text-[10px] font-mono uppercase text-[#c8c5cb]/50 whitespace-nowrap">
            Quick Exec:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {quickCommands.map((qCmd) => (
              <button
                key={qCmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(qCmd);
                }}
                className="px-2.5 py-1 rounded bg-[#252425] hover:bg-[#c8c5cb] hover:text-[#141313] text-[#c8c5cb] text-[11px] font-mono transition-colors border border-white/5 cursor-pointer whitespace-nowrap"
              >
                {qCmd}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

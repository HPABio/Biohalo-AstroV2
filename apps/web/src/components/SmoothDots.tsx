import type { FC } from 'react';

const NOISE_URL = 'https://grainy-gradients.vercel.app/noise.svg';

export interface SmoothDotsProps {
  /** Extra class for the fixed background container */
  className?: string;
  /** Opacity of the noise overlay (0–1) */
  noiseOpacity?: number;
  /** Whether the top-right orb pulses */
  pulseOrb?: boolean;
}

/**
 * Full-viewport background: soft cyan/blue orbs + noise overlay.
 * Renders global styles for scrollbar, reveal, stagger delays, and float animation
 * when used (e.g. in layout or once per app).
 */
const SmoothDots: FC<SmoothDotsProps> = ({
  className = '',
  noiseOpacity = 0.15,
  pulseOrb = true,
}) => {
  return (
    <>
      <style>{`
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #262626; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }
        /* Animation utilities */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <div
        className={`fixed top-0 w-full h-screen -z-10 pointer-events-none overflow-hidden ${className}`.trim()}
        aria-hidden
      >
        <div
          className={`absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] ${
            pulseOrb ? 'animate-pulse duration-[4000ms]' : ''
          }`}
        />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 brightness-100 contrast-150 mix-blend-overlay"
          style={{
            backgroundImage: `url('${NOISE_URL}')`,
            opacity: noiseOpacity,
          }}
        />
      </div>
    </>
  );
};

export default SmoothDots;

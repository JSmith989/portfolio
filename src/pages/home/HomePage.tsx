import { useEffect, useRef, useState } from 'react';

import AboutPage from '../about/AboutPage';
import BlogPage from '../blog/BlogPage';
import Footer from '../footer/Footer';
import ExperiencePage from '../experience/ExperiencePage';
import SkillsPage from '../skills/SkillsPage';

export default function HomePage() {
  return (
    <div>
      <div className='flex flex-col min-h-screen space-y-16'>
        <AboutPage />
        <AnimatedDivider />
        <SkillsPage />
        <AnimatedDivider reverse />
        <ExperiencePage />
        <AnimatedDivider />
        <BlogPage />
      </div>
      <Footer />
    </div>
  );
}

type DividerProps = {
  intervalMs?: number;
  durationMs?: number;
  reverse?: boolean;
  className?: string;
};

export function AnimatedDivider({
  intervalMs = 90_00,
  durationMs = 2500,
  reverse = false,
  className = '',
}: DividerProps) {
  const [active, setActive] = useState(false);
  const mediaReduced = useRef<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaReduced.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) =>
      (mediaReduced.current = e.matches);
    mq.addEventListener?.('change', onChange);

    const timeout = window.setTimeout(() => trigger(), 1500);
    const id = window.setInterval(() => trigger(), intervalMs);

    function trigger() {
      if (mediaReduced.current) return;
      setActive(true);
      window.setTimeout(() => setActive(false), durationMs + 50);
    }

    return () => {
      mq.removeEventListener?.('change', onChange);
      clearInterval(id);
      clearTimeout(timeout);
    };
  }, [intervalMs, durationMs]);

  return (
    <div className={`relative h-px sm:mx-20 bg-primary ${className}`}>
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_10px] shadow-primary/60
          ${active ? 'opacity-100' : 'opacity-0'}`}
        style={{
          animation: active
            ? `${
                reverse ? 'rollReverse' : 'roll'
              } ${durationMs}ms ease-in-out forwards`
            : 'none',
        }}
      />

      <style>{`
        @keyframes roll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw - 11rem)); } /* travels across viewport-ish */
        }
        @keyframes rollReverse {
          0% { transform: translateX(calc(100vw - 11rem)); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          span { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

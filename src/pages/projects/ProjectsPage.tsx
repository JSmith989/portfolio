import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Building2,
  Link as LinkIcon,
  ChevronDown,
} from 'lucide-react';

type Project = {
  title: string;
  company?: string;
  role?: string;
  period?: string;
  summary: string;
  highlights: string[];
  impact?: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Internal Claim Auditing App',
    company: 'HealthLock',
    role: 'Software Engineer',
    period: '2021 – 2025',
    summary:
      'Full‑featured auditor dashboard for claims analysis, real‑time flagging, and end‑to‑end case management. Replaced legacy spreadsheets and unified workflows.',
    highlights: [
      'Real‑time claim flagging + adjustable analytics',
      'Reusable React component library for consistent UI',
      'Retool‑embedded dashboards as a Power BI replacement',
    ],
    impact: [
      'Cut average claim processing time by ~50%',
      'Used daily by 40+ auditors and account managers',
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwind',
      'Redux Toolkit',
      'React Query',
      '.NET (C#)',
      'SQL',
      'Retool',
    ],
    links: [],
  },
  {
    title: 'Firm Onboarding Portal',
    company: 'HealthLock',
    role: 'Software Engineer (Solo dev on v1)',
    period: '2021 – 2025',
    summary:
      'Self‑service portal streamlining partner onboarding, contract approval, and automated billing. First version built end‑to‑end as a solo project.',
    highlights: [
      'Automated billing + approval workflows',
      'Replaced ad‑hoc email + spreadsheets',
    ],
    impact: ['Reduced onboarding cycle from weeks to days'],
    stack: ['React', 'JavaScript', 'Tailwind', '.NET (C#)', 'SQL'],
    links: [],
  },
  {
    title: 'Language Scheduling Widget',
    company: 'Talk Abroad',
    role: 'Contract Software Engineer',
    period: 'May 2024 (4 mo contract)',
    summary:
      'Modular scheduling widget enabling students to book language‑practice sessions across time zones with live availability.',
    highlights: [
      'Dynamic availability w/ time‑zone normalization',
      'Partner profile cards + booking flow',
    ],
    impact: ['Rolled out to 500+ universities'],
    stack: ['React', 'TypeScript', 'Tailwind', 'CakePHP'],
    links: [],
  },
];

function classNames(...xs: (string | false | undefined)[]) {
  return xs.filter(Boolean).join(' ');
}

function Tech({ label }: { label: string }) {
  return (
    <span className='rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-gray-200 border border-white/10'>
      {label}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.2 }}
      className='relative p-5 overflow-hidden border group rounded-2xl bg-white/10 backdrop-blur-md border-white/20'
    >
      <div className='flex items-start justify-between gap-4 mb-3'>
        <div>
          <h3 className='text-lg font-semibold text-white'>{p.title}</h3>
          <div className='flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-300'>
            {p.company && (
              <span className='inline-flex items-center gap-1'>
                <Building2 className='h-3.5 w-3.5' /> {p.company}
              </span>
            )}
            {p.period && (
              <span className='inline-flex items-center gap-1'>
                <Calendar className='h-3.5 w-3.5' /> {p.period}
              </span>
            )}
          </div>
        </div>
        {!!(p.links && p.links.length) && (
          <div className='flex items-center gap-2'>
            {p.links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-200 border rounded-md border-white/10 bg-white/10 hover:bg-white/20'
              >
                <LinkIcon className='h-3.5 w-3.5' /> {l.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <p className='text-sm text-gray-200/90'>{p.summary}</p>

      <div className='mt-4 flex flex-wrap gap-1.5'>
        {p.stack.map((s) => (
          <Tech key={s} label={s} />
        ))}
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className='inline-flex items-center gap-2 mt-4 text-sm text-indigo-300 hover:text-indigo-200 hover:cursor-pointer'
        aria-expanded={open}
        aria-controls={`details-${p.title}`}
      >
        <ChevronDown
          className={classNames(
            'h-4 w-4 transition-transform',
            open ? 'rotate-180' : 'rotate-0',
          )}
        />
        {open ? 'Hide details' : 'Show details'}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`details-${p.title}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <div className='grid grid-cols-1 gap-3 mt-3 md:grid-cols-2'>
              <ul className='pl-5 text-sm list-disc text-gray-200/90'>
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {p.impact && p.impact.length > 0 && (
                <ul className='pl-5 text-sm list-disc text-gray-200/90'>
                  {p.impact.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <section id='projects' className='pb-16 sm:mx-20'>
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-white'>
          Projects
        </h1>
        <p className='max-w-2xl mt-2 text-sm text-gray-300'>
          A deeper look at the internal tools and apps I built, how I built
          them, and the measured outcomes.
        </p>
      </header>

      <AnimatePresence mode='popLayout'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </AnimatePresence>

      <p className='mt-10 text-xs text-gray-400'>
        *Some projects are internal and not publicly accessible; descriptions
        focus on architecture and outcomes.
      </p>
    </section>
  );
}

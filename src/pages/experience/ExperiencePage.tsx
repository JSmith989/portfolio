import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Building2,
  Link as LinkIcon,
  ChevronDown,
  Briefcase,
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
    summary: `Auditing claim workflow for teams, managers, and individual auditors. Users see only their members, member's claims, individual member claim info, and personal KPI dashboard modeled after Power BI. Auditors work claims end-to-end with integrated messaging, faxing, claim flagging and NPI search.`,
    highlights: [
      'Teams & roles: managers, teams, and individual logins with scoped data access (RBAC)',
      'Personalized dashboards: KPIs, member lists, claims, high value claims, provider lookups',
      'Claims workbench: triage, notes, attachments, adjudication steps, history audit trail',
      'Comms hub: internal/external messaging, templated emails, and fax sending',
      'Provider tools: live NPI/provider lookup with profile details',
      'Analytics: real-time flagging + adjustable filters; embedded Retool reports',
    ],
    impact: [
      'Cut average claim processing time by over 50%',
      'Adopted by 40+ auditors and account managers daily',
      'Replaced fragmented spreadsheets with a unified workflow',
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
      'A portal for streamlining partner onboarding, contract documentation and approval, automated billing, and individual integration to the claim auditing app. First version built end‑to‑end was my first solo project at HealthLock.',
    highlights: [
      'Automated billing + approval workflows',
      'Replaced email + spreadsheets',
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
      'Modular scheduling widget enabling students to book language practice sessions across time zones with live availability and profile cards',
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
            {p.company && (
              <span className='inline-flex items-center gap-1'>
                <Briefcase className='h-3.5 w-3.5' /> Software Engineer
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

export default function ExperiencePage() {
  return (
    <section
      id='projects'
      className='pb-16 mx-2 sm:mx-10 md:mx-20 scroll-mt-16'
    >
      <header className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight text-white'>
          Experience
        </h1>
        <p className='max-w-2xl mt-2 text-sm text-gray-300'>
          A deeper look at the apps I built, how I built them, and the measured
          outcomes.
        </p>
      </header>

      <AnimatePresence mode='popLayout'>
        <div className='space-y-5 lg:flex md:flex-wrap lg:gap-x-5'>
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className='w-full lg:w-[calc(50%-0.625rem)] min'
            >
              <ProjectCard p={p} />
            </article>
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

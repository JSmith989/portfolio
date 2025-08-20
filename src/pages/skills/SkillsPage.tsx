import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

type Skill = {
  name: string;
  category: string;
  level?: 1 | 2 | 3 | 4 | 5;
};

const SKILLS: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'Languages', level: 5 },
  { name: 'TypeScript', category: 'Languages', level: 5 },
  { name: 'C#', category: 'Languages', level: 3 },
  { name: 'SQL', category: 'Languages', level: 4 },
  { name: 'Python', category: 'Languages', level: 2 },
  { name: 'HTML', category: 'Languages', level: 5 },
  { name: 'CSS', category: 'Languages', level: 5 },
  { name: 'Sass', category: 'Languages', level: 4 },

  // Frontend
  { name: 'React', category: 'Frontend', level: 5 },
  { name: 'React Query', category: 'Frontend', level: 5 },
  { name: 'Redux', category: 'Frontend', level: 4 },
  { name: 'Tailwind', category: 'Frontend', level: 5 },
  { name: 'Bootstrap', category: 'Frontend', level: 5 },
  { name: 'Vite', category: 'Frontend', level: 4 },
  { name: 'Webpack', category: 'Frontend', level: 4 },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 4 },
  { name: 'Express.js', category: 'Backend', level: 4 },
  { name: 'ASP.NET', category: 'Backend', level: 4 },
  { name: 'REST APIs', category: 'Backend', level: 5 },
  { name: 'GraphQL', category: 'Backend', level: 2 },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', level: 3 },
  { name: 'Azure', category: 'Cloud & DevOps', level: 3 },
  { name: 'Firebase', category: 'Cloud & DevOps', level: 4 },

  // Tools
  { name: 'Git', category: 'Tools', level: 5 },
  { name: 'GitHub', category: 'Tools', level: 5 },
  { name: 'Jira', category: 'Tools', level: 4 },
  { name: 'Asana', category: 'Tools', level: 4 },
  { name: 'Postman', category: 'Tools', level: 5 },
  { name: 'ESLint', category: 'Tools', level: 4 },
  { name: 'Prettier', category: 'Tools', level: 5 },
  { name: 'Yarn', category: 'Tools', level: 3 },
  { name: 'npm', category: 'Tools', level: 5 },

  // Other
  { name: 'Power Platform', category: 'Other', level: 3 },
  { name: 'Retool', category: 'Other', level: 5 },
  { name: 'WordPress', category: 'Other', level: 1 },
  { name: 'Figma', category: 'Other', level: 4 },
];

const CATEGORIES = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Tools',
  'Cloud & DevOps',
  'Other',
];

function LevelBar({ level = 3 }: { level?: Skill['level'] }) {
  const pct = (level / 5) * 100;
  return (
    <div className='w-full h-2 overflow-hidden bg-gray-600 rounded-full'>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ type: 'spring', stiffness: 120, damping: 40 }}
        className='h-full rounded-full bg-gradient-to-r from-primary to-amber-700'
      />
    </div>
  );
}

export default function SkillsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Languages');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return SKILLS.filter(
      (s) =>
        (category === 'All' || s.category === category) &&
        (q === '' || s.name.toLowerCase().includes(q)),
    ).sort((a, b) => (b.level || 0) - (a.level || 0));
  }, [query, category]);

  return (
    <section id='skills' className='pb-16 mx-2 sm:mx-10 md:mx-20 scroll-mt-16'>
      <h2 className='mb-4 text-4xl font-bold text-white'>Skills</h2>

      <div className='flex flex-col gap-3 mb-6 md:flex-row md:items-center'>
        <div className='relative w-full md:max-w-sm'>
          <Search className='absolute z-40 w-4 h-4 text-white -translate-y-1/2 left-3 top-1/2' />
          <input
            type='text'
            placeholder='Search skills…'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='w-full py-2 pr-3 text-white rounded-lg bg-white/10 backdrop-blur-md border-white/20 pl-9 placeholder:text-white'
          />
        </div>
        <div className='flex flex-wrap gap-2'>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1 rounded-full md:text-[.95rem] text-xs  ${
                category === c
                  ? 'bg-primary'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              } hover:cursor-pointer transition`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode='popLayout'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {filtered
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className='p-4 border rounded-lg bg-white/10 backdrop-blur-3xl border-white/20'
              >
                <div className='flex justify-between mb-2'>
                  <h3 className='text-lg font-semibold text-white'>
                    {skill.name}
                  </h3>
                  <span className='text-xs text-gray-300'>
                    {skill.category}
                  </span>
                </div>
                <LevelBar level={skill.level} />
              </motion.div>
            ))}
        </div>
      </AnimatePresence>
    </section>
  );
}

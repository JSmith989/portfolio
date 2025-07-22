import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const link =
    'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700';
  const active = 'bg-slate-200 dark:bg-slate-700';

  return (
    <header className='bg-white/70 backdrop-blur dark:bg-slate-900/70'>
      <nav className='mx-auto flex max-w-5xl items-center gap-4 p-4'>
        <h1 className='mr-auto text-xl font-bold'>Jordan Smith</h1>

        <NavLink
          to='/about'
          className={({ isActive }) => `${link} ${isActive ? active : ''}`}
        >
          About
        </NavLink>
        <NavLink
          to='/portfolio'
          className={({ isActive }) => `${link} ${isActive ? active : ''}`}
        >
          Portfolio
        </NavLink>
        <NavLink
          to='/blog'
          className={({ isActive }) => `${link} ${isActive ? active : ''}`}
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
}

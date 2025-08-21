export default function Navbar() {
  return (
    <header className='max-w-[90rem] sm:mx-20 flex md:justify-end justify-center'>
      <nav className='py-8'>
        <div className='space-x-4 sm:px-6 sm:space-x-12 '>
          <a
            href='#about'
            className='inline-flex items-baseline nav-link whitespace-nowrap'
          >
            About{' '}
            <span className='ml-1 align-baseline sm:text-4xl text-primary'>
              .
            </span>
          </a>
          <a
            href='#skills'
            className='inline-flex items-baseline nav-link whitespace-nowrap'
          >
            Skills{' '}
            <span className='ml-1 align-baseline sm:text-4xl text-primary'>
              .
            </span>
          </a>
          <a
            href='#projects'
            className='inline-flex items-baseline nav-link whitespace-nowrap'
          >
            Experience{' '}
            <span className='ml-1 align-baseline sm:text-4xl text-primary'>
              .
            </span>
          </a>
          <a
            href='#blog'
            className='inline-flex items-baseline nav-link whitespace-nowrap'
          >
            Blog{' '}
            <span className='ml-1 align-baseline sm:text-4xl text-primary'>
              .
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function Navbar() {
  return (
    <header className='max-w-[90rem] sm:mx-20 mx-6 flex md:justify-end justify-center'>
      <nav className='py-8'>
        <div className='grid px-6 space-x-12 md:block'>
          <a href='#about' className='nav-link'>
            About <span className='text-4xl text-primary'>.</span>
          </a>
          <a href='#skills' className='nav-link'>
            Skills <span className='text-4xl text-primary'>.</span>
          </a>
          <a href='#projects' className='nav-link'>
            Experience <span className='text-4xl text-primary'>.</span>
          </a>
          <a href='#blog' className='nav-link'>
            Blog <span className='text-4xl text-primary'>.</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

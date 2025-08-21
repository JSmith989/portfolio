export default function Footer() {
  return (
    <footer className='pt-6 pb-4 mx-2 mt-12 text-sm text-center text-gray-400 border-t sm:mx-10 md:mx-20 border-primary'>
      <nav className='flex justify-center gap-6 mb-3'>
        <a href='#about' className='hover:text-white'>
          About
        </a>
        <a href='#blog' className='hover:text-white'>
          Blog
        </a>
        <a href='#projects' className='hover:text-white'>
          Experience
        </a>
        <a href='mailto:jordansmith989@gmail.com' className='hover:text-white'>
          Contact
        </a>
      </nav>
      <div className='flex justify-center gap-4 mb-3'>
        <a href='https://github.com/jsmith989' target='_blank' rel='noreferrer'>
          GitHub
        </a>
        <a
          href='https://linkedin.com/in/jordansmith989'
          target='_blank'
          rel='noreferrer'
        >
          LinkedIn
        </a>
      </div>
      <p>© {new Date().getFullYear()} Jordan Smith. All rights reserved.</p>
    </footer>
  );
}

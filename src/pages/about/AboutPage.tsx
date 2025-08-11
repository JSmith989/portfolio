export default function AboutPage() {
  return (
    <section
      id='about'
      className='relative min-h-[100svh] px-6 sm:px-8 lg:px-12 '
    >
      <div className='grid items-center grid-cols-12 mx-auto max-w-7xl gap-y-16'>
        <div className='col-span-12 py-4 space-y-6 text-gray-100 rounded-3xl bg-black/40 lg:col-span-6 xl:col-span-5'>
          <h2 className='text-5xl sm:text-6xl text-primary'>Jordan Smith</h2>
          <p className='font-semibold tracking-wide text-gray-300 text-md'>
            — Introduction
          </p>
          <div className='space-y-6  max-h-[60vh] overflow-y-auto scrollbar-thin pr-2'>
            <h1 className='text-5xl font-semibold leading-tight text-balance sm:text-6xl'>
              Software Engineer based in Michigan
            </h1>

            <p className='text-lg leading-relaxed text-gray-300/90'>
              I’m a software engineer with a genuine passion for building things
              that are both functional and beautiful. For me, writing code isn’t
              just about solving problems... It’s also about crafting
              experiences that feel intuitive, engaging, and impactful. I’m
              driven by the challenge of turning ideas into something people can
              see, touch, and use every day.
            </p>
            <p className='text-lg leading-relaxed text-gray-300/90'>
              My work blends technical skill with creativity, allowing me to
              approach projects from both an analytical and imaginative
              perspective. Whether I’m designing a clean, user-friendly
              interface or architecting the logic behind it, I aim to create
              solutions that are not only efficient but also leave a lasting
              impression.
            </p>

            <h1 className='text-5xl font-semibold leading-tight text-balance sm:text-6xl'>
              Hobbies
            </h1>

            <p className='text-lg leading-relaxed text-gray-300/90'>
              paragraph 1
            </p>
            <p className='text-lg leading-relaxed text-gray-300/90'>
              paragraph 2
            </p>
          </div>

          <div className='flex items-center gap-4 pt-2'>
            <a
              href='https://github.com/jsmith989'
              aria-label='GitHub'
              className='inline-flex items-center justify-center transition border rounded-full w-11 h-11 text-primary hover:bg-white/10'
            >
              <svg viewBox='0 0 24 24' className='w-6 h-6' fill='currentColor'>
                <path d='M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.3c-3.2.7-3.9-1.5-3.9-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2.2 1.2 1.2 2 3.1 1.4 3.9 1.1.1-.9.5-1.4.9-1.7-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.5.4 1 .9 1 .8v3.2c0 .3.2.7.8.6C20.7 21.4 24 17.1 24 12 24 5.7 18.8.5 12 .5z' />
              </svg>
            </a>
            <a
              href='https://linkedin.com/in/jordansmith989'
              aria-label='LinkedIn'
              className='inline-flex items-center justify-center transition border rounded-full w-11 h-11 text-primary hover:bg-white/10'
            >
              <svg viewBox='0 0 24 24' className='w-6 h-6' fill='currentColor'>
                <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5.001A2.5 2.5 0 0 1 4.98 3.5zM2 9h6v12H2zM9 9h5.6v1.7h.1c.8-1.4 2.3-2.3 4-2.3 4.3 0 5.1 2.8 5.1 6.4V21H18v-5.5c0-1.3-.1-3-2-3-2 0-2.3 1.5-2.3 2.9V21H9z' />
              </svg>
            </a>
          </div>
        </div>

        <div className='relative col-span-12 lg:col-span-6 xl:col-span-7'>
          <div className='absolute inset-y-0 right-0 hidden pointer-events-none left-1/3 lg:block' />

          <img
            src='/self.png'
            alt='Jordan Smith portrait'
            className='relative z-10 mx-auto lg:ml-auto max-w-[500px] w-full object-contain '
            width={520}
            height={640}
            loading='eager'
          />
        </div>
      </div>
    </section>
  );
}

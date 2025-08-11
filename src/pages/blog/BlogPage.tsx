export default function BlogPage() {
  return (
    <section id='blog' className='min-h-screen sm:mx-20 mx-6  '>
      <h2 className='text-3xl font-bold mb-4'>Blog</h2>
      <p>Articles...</p>

      {/* Back to top button */}
      <a
        href='#top'
        className='fixed bottom-6 right-6 z-50 bg-primary  text-black p-2 rounded-full shadow-lg hover:bg-amber-700 transition'
        aria-label='Back to top'
      >
        ↑
      </a>
    </section>
  );
}

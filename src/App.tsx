import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const PortfolioPage = lazy(() => import('./pages/portfolio/PortfolioPage'));
const BlogPage = lazy(() => import('./pages/blog/BlogPage'));

function App() {
  return (
    <>
      <Navbar />

      <main className='min-h-[calc(100vh-4rem)]'>
        <Suspense fallback={<p className='p-6'>Loading…</p>}>
          <Routes>
            <Route index element={<Navigate to='/about' replace />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/blog/*' element={<BlogPage />} />
            {/* catch-all */}
            <Route path='*' element={<p className='p-6'>404 – Not Found</p>} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;

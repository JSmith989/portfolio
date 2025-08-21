import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const HomePage = lazy(() => import('./pages/home/HomePage'));

function App() {
  return (
    <div className=''>
      <Navbar />

      <main className='min-h-[calc(100vh-4rem)] '>
        <Suspense fallback={<p className='p-6'>Loading…</p>}>
          <Routes>
            <Route index element={<Navigate to='/about' replace />} />
            <Route path='/about' element={<HomePage />} />
            <Route path='*' element={<p className='p-6'>404 – Not Found</p>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Library = lazy(() => import('./pages/Library'));

const PageLoader = () => (
  <div className="flex h-full items-center justify-center">
    <div className="w-8 h-8 border-2 border-player-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
          <Route path="search" element={<Suspense fallback={<PageLoader />}><Search /></Suspense>} />
          <Route path="library" element={<Suspense fallback={<PageLoader />}><Library /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

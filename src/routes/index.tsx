// src/routes/index.tsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Loader } from 'reshaped';
import paths from './path';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import Layout from '@/layout/index';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader size="medium" />}>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Layout />} >
            <Route path='*' element={<Home />}></Route>
            {
              paths.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))
            }
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
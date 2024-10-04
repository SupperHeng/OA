// src/routes/index.tsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Loader } from 'reshaped';
import paths from './path';
import Layout from '@/layout/index';

// 动态导入避免打包警告
const Home = React.lazy(() => import('@/pages/Home'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader size="medium" />}>
        <Routes>
          {/* 除了login和notfound以外的页面都走layout子路由 */}
          {
            paths.map(({ path, component: Component }) => {
              if (path === 'login' || path === '*') {
                return <Route key={path} path={path} element={<Component />} />;
              }
              return (
                <Route key={path} path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path={path} element={<Component />} />
                </Route>
              );
            })
          }
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
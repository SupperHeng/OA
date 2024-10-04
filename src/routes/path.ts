// src/routes/path.ts

import { lazy } from 'react';

const paths = [
  {
    path: 'home',
    component: lazy(() => import('@/pages/Home/index')),
  },
  {
    path: 'login',
    component: lazy(() => import('@/pages/Login')),
  },
  {
    path: 'themes',
    component: lazy(() => import('@/pages/Themes')),
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/NotFound')),
  }
]

export default paths;
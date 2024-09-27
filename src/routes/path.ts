// src/routes/path.ts

import { lazy } from 'react';

const paths = [
  {
    path: 'home',
    component: lazy(() => import('@/pages/Home')),
  },
  {
    path: 'themes',
    component: lazy(() => import('@/pages/Themes')),
  },
]

export default paths;
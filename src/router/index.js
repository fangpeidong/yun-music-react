import React from 'react';

const routes = [
  {
    path: '/discover',
    component: React.lazy(() => import('@/views/discover')),
  },
  {
    path: '/mine',
    component: React.lazy(() => import('@/views/mine')),
  },
  {
    path: '/friend',
    component: React.lazy(() => import('@/views/friend')),
  },
];

export default routes;

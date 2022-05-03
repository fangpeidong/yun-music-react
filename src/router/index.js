import React from 'react';
import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: React.lazy(() => import('@/views/discover')),
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: React.lazy((_) =>
          import('../views/discover/c-pages/recommend')
        ),
      },
    ],
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

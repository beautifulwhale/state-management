import React from 'react';
import Teams from '../pages/teams/Teams';
import Team from '../pages/teams/Team';
import Home from '../components/Home';
import About from '../components/About';
import Shopping from '../components/Shopping';
import Count from '../pages/count';

const routes = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/shopping',
    element: <Shopping />
  },
  {
    path: '/count',
    element: <Count />
  },
  {
    path: '/teams',
    element: <Teams />,
    exact: true,
    children: [
      {
        path: ':teamId',
        element: <Team />,
        loader: async ({ params }) => {
          console.log('params', params);
        }
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
];

export default routes;

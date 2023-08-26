import React from 'react';
import Teams from '../pages/teams/Teams';
import Team from '../pages/teams/Team';
import Home from '../components/Home';
import About from '../components/About';
import Shopping from '../components/Shopping';
import Count from '../pages/count';
import Player from '../pages/teams/Player'
import { Link, json } from 'react-router-dom';

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
          return json({ name: '尤文图斯', subName: '拜仁', teamId: params.teamId })
        },
        handle: { crumb: () => <Link to='/home'>toHome</Link> }
      },
    ]
  },
  {
    path: '/player/:player',
    element: <Player />,
    loader: async ({ params }) => {
      return json({ name: '切尔西', subName: '利物浦', playerId: params.playerId })
    },
    handle: { crumb: (data) => <span>{data.name} / {data.subName} / {data.playerId}</span> }
  },
  {
    path: '/about',
    element: <About />
  }
];

export default routes;

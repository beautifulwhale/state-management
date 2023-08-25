import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Teams from '../pages/teams/Teams';
import Team from '../pages/teams/Team';
import About from '../pages/About';

const routes = [
  {
    path: '/teams',
    element: <Teams />,
    children: [
      {
        path: '/:teamId',
        element: <Team />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
];

// 
const RecursiveRoutes = ({ routes }) => {
  return <React.Fragment>
    {routes.map(route => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children && <RecursiveRoutes routes={route.children} />}
      </Route>
    ))}
  </React.Fragment>
};

const Router = () => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='/' element={<RecursiveRoutes routes={routes} />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;

import React from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import TodoList from './store/todo'
import shopping from './store/shopping';
import { MyContext } from './context'
import routes from './router';

function App() {
  const elements = useRoutes(routes)
  const location = useLocation()
  if (location.pathname === '/') {
    return <Navigate to='/home' replace />
  }

  return (
    <MyContext.Provider value={{ TodoList, shopping }}>
      {elements}
    </MyContext.Provider>
  );
}

export default App;

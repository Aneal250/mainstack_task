import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';

interface IRoutes {
  path: string;
  component: React.ComponentType;
}

const routes: IRoutes[] = [
  {
    path: '/',
    component: Home,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<span>Page not found</span>} />
    </Routes>
  );
};

export default AppRouter;

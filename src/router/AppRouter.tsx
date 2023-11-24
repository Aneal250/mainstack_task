import { LazyExoticComponent, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

interface IRoutes {
  path: string;
  component: LazyExoticComponent<React.FC>;
}

const routes: IRoutes[] = [
  {
    path: '/',
    component: lazy(() => import('@pages/Home')),
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <Component />
            </Suspense>
          }
        />
      ))}
      <Route path="*" element={<span>page not found</span>} />
    </Routes>
  );
};

export default AppRouter;

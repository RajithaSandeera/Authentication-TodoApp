import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Login } from '../pages';
import Registration from '../pages/Registration/Registration';

import UnAuthorized from '../components/Unauthorized/Unauthorized';
import { APP_ROUTES } from '../utils/routes';
import Todo from '../pages/Todo/Todo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.REGISTRATION} element={<Registration />} />
        <Route path={APP_ROUTES.TODO} element={<Todo />} />
        <Route path={APP_ROUTES.UNAUTHORIZED} element={<UnAuthorized />} />
    </Route>
  )
);

const AppRoutes = () => {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
};

export default AppRoutes;

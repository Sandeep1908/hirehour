import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import isAuthenticated from './isAuthenicated';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuth = isAuthenticated();

  return isAuth ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;

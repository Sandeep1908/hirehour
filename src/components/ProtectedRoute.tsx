import { ReactNode } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import {isCandidateAuthenticated} from './isAuthenicated';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    
  const isAuth = isCandidateAuthenticated();
  const location = useLocation();
  if (!isAuth) {
    // Redirect to login and store the current location in state
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
   
};

export default ProtectedRoute;

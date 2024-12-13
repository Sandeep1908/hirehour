import { ReactNode } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import {isCandidateAuthenticated, isRecruiterAuthenticated} from './isAuthenicated';

interface ProtectedRouteProps {
  children: ReactNode;
}

const CandidateProtectedRoute = ({ children }: ProtectedRouteProps) => {
    
  const isAuth = isCandidateAuthenticated();
  const location = useLocation();
  if (!isAuth) {
    // Redirect to login and store the current location in state
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
   
};


const RecruiterProtectedRoute = ({ children }: ProtectedRouteProps) => {

 
    
  const isAuth = isRecruiterAuthenticated();
  const location = useLocation();
 console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/job-poster/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
   
};

export  {CandidateProtectedRoute, RecruiterProtectedRoute}

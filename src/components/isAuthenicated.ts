import { jwtDecode } from 'jwt-decode';

const isCandidateAuthenticated = () => {
  const token = localStorage.getItem('topequatortoken');
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);  
     
    if (exp) {
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem('topequatortoken');  
        return false;
      }
      return true;  
    }
  } catch (error) {
    console.error('Invalid token:', error);
    localStorage.removeItem('topequatortoken');  
    return false;
  }
};


const isRecruiterAuthenticated = () => {
  const token = localStorage.getItem('topequatorrecruitertoken');

  if (!token) return false;
   
  try {
    const { exp } = jwtDecode(token);  
    if (exp) {
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem('topequatorrecruitertoken');  
        return false;
      }
      return true;  
    }
  } catch (error) {
    console.error('Invalid token:', error);
    localStorage.removeItem('topequatorrecruitertoken'); 
    return false;
  }
};


export {
  isCandidateAuthenticated,
  isRecruiterAuthenticated
}
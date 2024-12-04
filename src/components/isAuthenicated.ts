import { jwtDecode } from 'jwt-decode';

const isAuthenticated = () => {
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
    return false;
  }
};


export default isAuthenticated
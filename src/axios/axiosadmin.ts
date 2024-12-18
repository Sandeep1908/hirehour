import axios from 'axios';

// Create an Axios instance
const axiosAdmin = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

 

axiosAdmin.interceptors.request.use(
  
  (config) => {
   
    const token = localStorage.getItem('topequatorTokenAdmin');
    if (token) {
      if (config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosAdmin;

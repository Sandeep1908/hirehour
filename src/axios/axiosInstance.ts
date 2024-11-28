import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://backend-test.topequator.ai',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

 

axiosInstance.interceptors.request.use(
  
  (config) => {
   
    const token = localStorage.getItem('topequatortoken');
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

export default axiosInstance;

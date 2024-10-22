import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://backend-test.topequator.ai/', // Your backend URL
    headers: {
      'Content-Type': 'application/json',
    },
  });


  // Login API call
export const loginUser = async (email: string, password: string) => {
    const response = await axiosInstance.post('/api/candidate/login', {
      email,
      password,
    });
    return response.data;
  };
  
  
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      if (config.headers) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

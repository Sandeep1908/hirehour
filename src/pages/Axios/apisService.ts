import axios from 'axios';

const BASE_URL = 'https://backend-test.topequator.ai/api/candidate';

export const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      return response.data;
      console.log("data ",response.data);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };


  // Signup Function
export const signupUser = async (firstName: string, lastName: string, phoneNumber: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });
      return response.data; // Contains success message
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };
  
  
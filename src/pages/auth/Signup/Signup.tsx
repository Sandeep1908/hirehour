import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google_logo from '../../../assets/Google.svg';
import apple_logo from '../../../assets/apple.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../axios/axiosInstance';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

// Zod schema for validation
const signupSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
 
});

type SignupData = z.infer<typeof signupSchema>;

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof SignupData, string>>>({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  interface NewUser {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
   
  }

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newUser: NewUser) => {
      const response = await axiosInstance.post('/api/candidate/signup', newUser);
      return response.data;
    },
    onSuccess: () => {
      toast.success('User Registered Successfully');
      navigate('/signin');
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      console.log('error', axiosError.response);
      toast.error(axiosError?.response?.data.message);
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    },
  });

  console.log(firstName,lastName,email,phoneNumber,password,confirmPassword);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setFormErrors({ ...formErrors}); 
      return;
    }

    const formData = { firstName, lastName, phoneNumber, email, password };

    // Validate form data using Zod
    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      const errors: Partial<Record<keyof SignupData, string>> = {};
      result.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof SignupData;
        errors[fieldName] = err.message;
      });
      setFormErrors(errors);
      return;
    }

    // If valid, submit the form
    setFormErrors({});
    mutation.mutate(result.data);
  };

  return (
    <div className="bg-[#104B53] w-full min-h-screen py-10 px-5 lg:px-20 flex flex-col items-center"> 
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10"> 
        <div className="hidden lg:flex w-1/2 "> 
          <p className="text-white text-3xl font-bold">TopEquator</p> 
        </div>

        <div className="w-full lg:w-1/2 flex justify-center"> 
          <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-lg"> 
            <p className="text-gray-800 text-2xl font-bold mb-2">Create account</p>
            <p className="text-gray-600 text-sm mb-4">
              If you are a new user, create an account to continue
            </p>
            <form onSubmit={handleSubmit}> 
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                  {formErrors.firstName && (
                    <span className="text-red-500 text-sm">{formErrors.firstName}</span>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                  {formErrors.lastName && (
                    <span className="text-red-500 text-sm">{formErrors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-4"> 
                <div className="w-full md:w-1/2">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel" 
                    id="phoneNumber"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                  />
                  {formErrors.phoneNumber && (
                    <span className="text-red-500 text-sm">{formErrors.phoneNumber}</span>
                  )}
                </div>

                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  {formErrors.email && (
                    <span className="text-red-500 text-sm">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {formErrors.password && (
                    <span className="text-red-500 text-sm">{formErrors.password}</span>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xs"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                   
                </div>
              </div>

              <div className="mt-6 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded placeholder:text-xs"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  Accepting Terms & Condition
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#E9F358] hover:bg-[#e8ee92] text-[#104B53] font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6"
              >
                Sign up
              </button>

              <div className="mt-6 flex items-center justify-center">
                <hr className="w-1/3 border-gray-300" />
                <span className="mx-2 text-gray-500">or continue with</span>
                <hr className="w-1/3 border-gray-300" />
              </div>

              <div className="mt-4 flex justify-center space-x-4">
                <button className="flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100">
                  <img src={google_logo} alt="Google logo" className="h-5 w-5 mr-2" />
                  Google
                </button>
                <button className="flex items-center justify-center border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-100">
                  <img src={apple_logo} alt="Apple logo" className="h-5 w-5 mr-2" />
                  Apple
                </button>
              </div>

              <p className="text-gray-600 text-sm mt-6 text-center"> 
                By clicking Continue, you agree to TopEquator Terms of Service & Privacy Policy.
              </p>
              <div className="text-center mt-2"> 
                <Link to="/signin" className="text-blue-500 hover:text-blue-700 font-medium">
                  Already on TopEquator? Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
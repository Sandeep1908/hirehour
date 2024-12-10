import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google_logo from '../../../assets/Google.svg';
import apple_logo from '../../../assets/apple.svg';

import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../axios/axiosInstance';
import {  z } from 'zod';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';




interface UserCredentials {
  email: string;
  password: string;
}

// Zod schema for validation
const signinSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});


// Define the shape of form errors
interface FormErrors {
  email?: { _errors: string[] };
  password?: { _errors: string[] };
}


const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [validateErrors, setValidateErrors] = useState<boolean>(false);

  const location =useLocation()
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); // Redirect to home or dashboard if the user is logged in
    }
  }, [navigate]);


  const mutation = useMutation({
    mutationFn: async (userCredentials: UserCredentials) => {
      const response = await axiosInstance.post("/api/candidate/login", userCredentials);
       
      return response.data;
    },

    onSuccess: (data) => {
      toast.success('Logged In Successfull');
      localStorage.setItem('topequatortoken',data?.token)
      const redirectTo = location.state?.from?.pathname || '/';
      navigate(redirectTo);

    },
    onError: (error) => {
      const axiosError = error as AxiosError<{message:string}>;
      toast.error(axiosError?.response?.data?.message)
      localStorage.removeItem("topequatortoken");
      setValidateErrors(true)
      setEmail("")
      setPassword("")
      navigate("/signin");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form using Zod
    const result = signinSchema.safeParse({ email, password });
    if (!result.success) {
      setFormErrors(result.error.format());
    } else {
      setFormErrors({});
      mutation.mutate({ email, password });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=' bg-[#114B53] w-full h-[92vh] pt-10 lg:pt-10'>
      <div className='w-full h-full px-5 lg:px-10 flex gap-20'>
        <div className='hidden md:flex w-[50%]'>
          <p className='text-white text-[32px] font-semibold'>TopEquator</p>
        </div>

        <div className='w-full h-fit md:w-[50%] flex justify-center md:justify-end'>
          <div className='w-[335px] md:w-[519px] bg-white px-5 md:px-10 py-4 rounded-xl'>
            <p className='text-black text-[20px] md:text-lg font-bold'>Welcome</p>
            <p className='text-black text-[14px] md:text-sm font-normal mt-1'>
              Log in to your existing account with email
            </p>
            <form onSubmit={handleSubmit}>
              <div className='w-full mt-4 md:mt-2  relative'>
                <label htmlFor="email" className='text-[14px]'>
                  Email <span className='text-[#E71717]'>*</span>
                </label>
                <div className='w-full h-[40px] mt-1 '>
                  <input
                    type="email"
                    className='border-2 px-2 border-[#E1E1E2] w-full h-full rounded-lg'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                 {formErrors?.email && <p className="absolute  text-red-500 text-[10px] ">{formErrors.email._errors?.[0]}</p>}
                 {validateErrors && <p className="absolute  text-red-500 text-[10px] ">Invalid Creadential</p>}
                </div>
              </div>

              <div className='w-full flex gap-5 mt-4'>
                <div className=' w-full relative'>
                  <label htmlFor="password" className='text-[14px]'>
                    Password <span className='text-[#E71717]'>*</span>
                  </label>
                  <div className='relative w-full h-[40px] mt-1'>
                    <input
                      type={showPassword ? "text" : "password"}
                      className=' px-2 border-2 border-[#E1E1E2] w-full h-full rounded-lg'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {formErrors?.password && <span className="absolute bottom-[-15px] text-red-500  text-[10px]">{formErrors.password._errors?.[0]}</span>}
                  {validateErrors && <p className="absolute  text-red-500 text-[10px] ">Invalid Creadential</p>}

                </div>
              </div>

              <div className='flex justify-between items-end mt-8 md:mt-5'>
                <div className='flex items-center gap-2'>
                  <input type="checkbox" className='w-5 h-5 md:w-4 md:h-4 border border-[#E1E1E2]' />
                  <p className='text-[14px]'>Remember me</p>
                </div>
                <Link to={"/forget-password"} className='font-medium text-[14px] md:text-base underline'>
                  Forgot Password?
                </Link>
               
              </div>

              <button type="submit" className='w-full h-[40px] flex justify-center items-center bg-[#E9F358] rounded-3xl mt-4'>
                <p className='text-base font-semibold'>Log in</p>
              </button>

              <div className="flex mt-2 items-center justify-center">
                <hr className="w-[25%] lg:w-[30%] border-1 border-gray-300" />
                <p className="text-gray-500 text-[14px] md:text-[20px] font-normal mx-[10px]">or continue with</p>
                <hr className="w-[25%] lg:w-[30%] border-1 border-gray-300" />
              </div>

              <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:justify-between mt-3">
                <button className="w-[200px] h-[40px] text-base flex items-center rounded-3xl gap-1 justify-center md:gap-2 text-black p-2 box-radius border border-black">
                  <img src={google_logo} alt="Google logo" /> <p>Google</p>
                </button>
                <button className="w-[200px] h-[40px] flex text-base items-center rounded-3xl justify-center gap-1 md:gap-2 text-black p-2 box-radius border border-black">
                  <img src={apple_logo} alt="Apple logo" /><p>Apple</p>
                </button>
              </div>

              <p className='text-[14px] font-normal mt-8 md:mt-4 text-center md:text-left'>
                By clicking Continue, you agree to TopEquator Terms of Service & Privacy Policy.
              </p>
              <div className='flex justify-center'>
                <Link to={"/signup"} className='text-[14px] md:text-[16px] font-semibold mt-12 md:mt-4 text-center'>
                  New to TopEquator? Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;




// Credential

// email : ravi@gmail.com
// pass:  Ravi@123

// email : john@gmail.com
// pass:  john@123
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google_logo from '../../../assets/Google.svg';
import apple_logo from '../../../assets/apple.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../../../axios/axiosInstance';

import { z } from 'zod';







// Zod schema for validation
const signupSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),

});


type SignupData = z.infer<typeof signupSchema>;


import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof SignupData, string>>>({});
  const [validateErrors, setValidateErrors] = useState<boolean>(false);



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
   firstName : string,
   lastName: string,
   phoneNumber: string,
   email: string;
   password: string;
 }
 

 
 const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); 
    }
  }, [navigate]);
 
 const mutation = useMutation({
   mutationFn: async (newUser: NewUser) => {
     const response = await axiosInstance.post("/api/candidate/signup", newUser);
     return response.data;
   },
   onSuccess: () => {
     alert("Signup successful!");
     navigate("/signin");
   },
   onError: () => {
   //   console.error("Signup failed", error);
     alert("Signup failed, please try again.");
     setFirstName("")
     setLastName("")
     setPhoneNumber("")
     setEmail("")
     setPassword("")
     setConfirmPassword('');

   },
 });
 
 // Form submit handler
 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();


   if (password !== confirmPassword) {
    setValidateErrors(false);
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



  //  mutation.mutate({firstName,lastName,phoneNumber, email, password });
 };



  return (
    <div className="bg-[#114B53]  w-full h-[92vh] py-10  px-5  lg:px-10">
      <div className="w-full h-full flex gap-20">
        <div className=" hidden md:flex w-[50%]">
          <p className="text-white text-[32px] font-semibold">TopEquator</p>
        </div>

        <div className='w-full h-fit md:w-[50%] flex justify-center  md:justify-end '>
           <div className='w-[335px] md:w-[519px] h-auto  bg-white px-5 md:px-8 py-3 rounded-xl'>
               <p className='text-black text-[20px] md:text-lg font-bold'>Create account</p>
               <p className='text-black text-[14px] md:text-sm font-normal mt-1' >If you are new user create account to continue</p>
              <form action="">
                  <div className='flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-2'>
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-sm'>
                            First Name <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[40px] mt-1'>

                         <input type="text" className=' border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg' value={firstName}
          onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                             {formErrors.firstName && <p className="absolute  text-red-500 text-[10px]">{formErrors.firstName}</p>}

                         </div>
                     </ div>
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-sm'>
                            Last Name <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[40px] mt-1'>

                         <input type="text" className='border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg' value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name" />
                              {formErrors.lastName && <p className="absolute  text-red-500 text-[10px]">{formErrors.lastName}</p>}

                         </div>
                     </div>
                  </div>
              

                 <div className='flex flex-col md:flex-row gap-3 md:gap-5  '>
                 <div className='mt-3  grow'>
                         <label htmlFor="firstName" className='text-sm'>
                            Phone <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[40px] mt-1'>

                         <input type="Phone" className='border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg' value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
 />
                   {formErrors.phoneNumber && <p className="absolute  text-red-500 text-[10px]">{formErrors.phoneNumber}</p>}

                         </div>
                     </div>
                  <div className='mt-3  grow'>
                         <label htmlFor="firstName" className='text-sm'>
                            Email <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[40px] mt-1'>

                         <input type="email" className='border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg' value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder=" Email" 
/>
{formErrors.email && <p className="absolute  text-red-500 text-[10px]">{formErrors.email}</p>}

                         </div>
                     </div>
                 </div>

                     <div className='flex flex-col md:flex-row gap-3 md:gap-5 mt-4 '>
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-sm'>
                         Password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full h-[40px] mt-1'>

                         <input type={`${showPassword ? " text":"password"}`}  className='border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg' value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder="Password" 
 />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={togglePasswordVisibility}
                           >
                               {showPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                           {formErrors.password && <p className="absolute  text-red-500 text-[10px]">{formErrors.password}</p>}

                         </div>
                     </div>
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-sm'>
                         Confirm password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full h-[40px] mt-1'>

                         <input type={`${showConfirmPassword ? " text":"password"}`} className='border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg' placeholder='Confirm password'
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                   
     />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={toggleConfirmPasswordVisibility}  
                           >
                               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                           {validateErrors && (
                    <p className='absolute text-red-500 text-[10px]'>{validateErrors}</p>
                  )}

                         </div>
                     </div>
                  </div>
                {/* </div>
              </div> */}

                  <div className='w-full mt-8 md:mt-5 flex items-center  gap-2'>
                      <input type="checkbox" name="" id="" className='w-5 h-5 md:w-4 md:h-4 border border-[#E1E1E2]' />
                      <p className='text-[14px] '>Accepting Terms & Condition</p>

                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-2">
                <div className="grow">
                  <label htmlFor="firstName" className="text-sm">
                    Password <span className="text-[#E71717]">*</span>
                  </label>
                  <div className="relative w-full h-[40px] mt-1">
                    <input
                      type="password"
                      className="border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div className="grow">
                  <label htmlFor="firstName" className="text-sm">
                    Confirm password <span className="text-[#E71717]">*</span>
                  </label>
                  <div className="relative w-full h-[40px] mt-1">
                    <input
                      type="password"
                      className="border-[1px] text-sm px-2 border-[#E1E1E2] w-full h-full rounded-lg"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </div>
              {/* </div>
              </div> */}

              <div className="w-full mt-8 md:mt-4 flex items-center  gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-5 h-5 md:w-4 md:h-4 border border-[#E1E1E2]"
                />
                <p className="text-[14px] ">Accepting Terms & Condition</p>
              </div>

              <div
                onClick={handleSubmit}
                className="w-full h-[48px] flex justify-center items-center bg-[#E9F358] rounded-3xl mt-4"
              >
                <p className="text-base font-semibold">Sign up</p>
              </div>
              {/* </div> */}

              {/* </div> */}

              <div className="flex mt-4 mb-4 items-center justify-center ">
                <hr className="w-[25%] lg:w-[30%] border-1 border-gray-300" />
                <p className="text-gray-500 text-[14px] md:text-base font-normal mx-[10px]">
                  or continue with
                </p>
                <hr className="w-[25%] lg:w-[30%] border-1 border-gray-300" />
              </div>

              <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:justify-between mt-2">
                <button className="w-[200px] h-[40px] text-base flex items-center rounded-3xl gap-1 justify-center md:gap-2 text-black p-2 box-radius border border-black">
                  <img src={google_logo} alt="Google logo" /> <p className="">Google</p>
                </button>
                <button className="w-[200px] h-[40px] flex text-base items-center rounded-3xl justify-center gap-1 md:gap-2 text-black p-2 box-radius border border-black ">
                  <img src={apple_logo} alt="apple" />
                  <p>Apple</p>
                </button>
              </div>

              <p className="text-[14px] md:text-sm font-normal mt-8 md:mt-4 text-center md:text-left">
                By clicking Continue, you agree to TopEquator Terms of Service & Privacy Policy.
              </p>
              <div className="flex justify-center">
                <Link
                  to={'/signin'}
                  className="text-[14px] md:text-[16px] font-semibold mt-12 md:mt-4 text-center"
                >
                  Already on TopEquator ? Log in
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

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import google_logo from '../../assets/Google.svg';
import apple_logo from '../../assets/apple.svg';

const Signin: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='bg-[#114B53]   w-full pt-10 lg:pt-20 pb-10 md:pb-20 px-5  lg:px-10'>
    <div className='w-full h-full flex gap-20'>
        <div className='hidden md:flex w-[50%]'>
        <p className='text-white text-[32px] font-semibold'>Hire Hours</p>
        </div>

        <div className='w-full  md:w-[50%] flex justify-center  md:justify-end '>
           <div className='w-[335px] h-[771px]  md:w-[519px] md:h-[584px]  bg-white px-5 md:px-10 py-4 rounded-xl'>
               <p className='text-black text-[20px] md:text-2xl font-bold'>Welcome</p>
               <p className='text-black text-[14px] md:text-base font-normal mt-1' >Log in to your existing account with email</p>
              <form action="">
               
                


                  <div className='mt-4 md:mt-2'>
                         <label htmlFor="firstName" className='text-[14px] md:text-base'>
                            Email <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[48px] mt-2'>

                         <input type="email" className='border-2 border-[#E1E1E2] w-full h-full rounded-lg' />
                         </div>
                     </div>

                     <div className='w-full flex gap-5 mt-2'>
                     <div className=' w-full'>
                         <label htmlFor="firstName" className='text-[14px] md:text-base'>
                         Password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full h-[48px] mt-2'>

                         <input type="text" className='border-2 border-[#E1E1E2] w-full h-full rounded-lg' />
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
                </div>
              </div>

                  <div className='flex justify-between items-end mt-8 md:mt-4'>
                  <div className='  flex gap-2'>
                      <input type="checkbox" name="" id="" className='w-5 h-5 md:w-6 md:h-6 border border-[#E1E1E2]' />
                      <p className='text-[14px] '>Remember me</p>
                  </div>

                  <div className='font-medium text-[14px] md:text-base underline'>
                  Forgot Password?
                  </div>
                  </div>

                  <div className='w-full h-[48px] flex justify-center items-center bg-[#E9F358] rounded-3xl mt-4'>
                     <p className='text-base font-semibold'>Log in</p>
                  </div>

                  <div className="flex mt-4 mb-4 items-center justify-center ">
                   <hr className="w-[25%] lg:w-[30%] border-1 border-gray-300" />
                   <p className="text-gray-500 text-[14px] md:text-[20px] font-normal mx-[10px]">or continue with</p>
                   <hr className="w-[25%] lg:w-[30%] border-1 border-gray-300" />
               </div>

               <div className="flex flex-col md:flex-row gap-2 justify-center items-center md:justify-between mt-4">
       <button
         
         className="w-[206px] h-[48px] text-base flex items-center rounded-3xl gap-1 justify-center md:gap-2 text-black p-2 box-radius border border-black"
        
       >
          <img src={google_logo} alt="Google logo" /> <p>Google</p>
       </button>
       <button
        
         className="w-[206px] h-[48px] flex text-base items-center rounded-3xl justify-center gap-1 md:gap-2 text-black p-2 box-radius border border-black "
       
       >
          <img src={apple_logo} alt="apple" /><p>Apple</p>
       </button>
     </div>

     <p className='text-[14px] md:text-base font-normal mt-8 md:mt-4 text-center md:text-left'>
     By clicking Continue, you agree to HireHours Terms of Service & Privacy Policy.
     </p>
     <p className='text-[14px] md:text-[16px] font-semibold mt-12 md:mt-4 text-center'>
     New to Hirehours ? Sign up 
     </p>
                
              </form>
           </div>
        
        </div>
      </div>
    </div>
  );
};

export default Signin;

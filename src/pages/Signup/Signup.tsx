import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google_logo from "../../assets/Google.svg";
import apple_logo from "../../assets/apple.svg";


const Signup:React.FC = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    const togglePasswordVisibility =()=>{
        setShowPassword(!showPassword)
    }
  return (
    <div className='bg-[#114B53] h-full w-full pt-20 pb-20 px-20'>
    <div className='w-full h-full flex gap-20'>
        <div className='w-[50%]'>
        <p className='text-white text-[32px] font-semibold'>Hire Hours</p>
        </div>
        <div className='w-[50%] flex justify-end '>
           <div className='w-[519px] h-[804px]  bg-white px-10 py-12 rounded-md'>
               <p className='text-black text-2xl font-bold'>Create account</p>
               <p className='text-black text-base font-normal mt-2' >If you are new user create account to continue</p>
              <form action="">
                  <div className='flex gap-5 mt-4'>
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-base'>
                            First Name <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[48px] mt-2'>

                         <input type="text" className='border-2 border-[#E1E1E2] w-full h-full rounded-lg' />
                         </div>
                     </div>
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-base'>
                            Last Name <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[48px] mt-2'>

                         <input type="text" className='border-2 border-[#E1E1E2] w-full h-full rounded-lg' />
                         </div>
                     </div>
                  </div>
                


                  <div className='mt-4'>
                         <label htmlFor="firstName" className='text-base'>
                            Email <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='w-full h-[48px] mt-2'>

                         <input type="email" className='border-2 border-[#E1E1E2] w-full h-full rounded-lg' />
                         </div>
                     </div>

                     <div className='flex gap-5 mt-4'>
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-base'>
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
                     <div className='grow'>
                         <label htmlFor="firstName" className='text-base'>
                         Confirm password <span className='text-[#E71717]'>*</span>
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

                  <div className='w-full h-[48px] flex justify-center items-center bg-[#E9F358] rounded-3xl mt-8'>
                     <p className='text-base font-semibold'>Sign up</p>
                  </div>

                  <div className="flex mt-8 mb-4 items-center justify-center ">
                   <hr className="w-[30%] border-1 border-gray-300" />
                   <p className="text-gray-500 text-[20px] font-normal mx-[10px]">or continue with</p>
                   <hr className="w-[30%] border-1 border-gray-300" />
               </div>

               <div className="flex justify-between mt-8">
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

     <p className='text-base font-normal mt-8'>
     By clicking Continue, you agree to HireHours Terms of Service & Privacy Policy.
     </p>
     <p className='text-[16px] font-semibold mt-8 text-center'>
     Already on Hirehours ? Log in
     </p>
                
              </form>
           </div>
        
        </div>
    </div>
</div>
  )
}

export default Signup

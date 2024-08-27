import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";


const NewPassword:React.FC = () => {
    
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    
    const togglePasswordVisibility =()=>{
        setShowPassword(!showPassword)
    }
  return (
    <div className='w-full h-[100vh]'>
        <div className='w-full h-full absolute bg-black opacity-80 z-10'>

        </div>
       <div className='w-full h-full flex justify-center items-center'>
           <div className='relative z-20 w-[617px] h-[450px] bg-white rounded-lg p-10 flex flex-col gap-3'>
                <p className='font-bold text-2xl text-[#114B53]'>New Password</p>
                <p className='text-base font-normal text-[#C7C9D9] mt-4 '>Set the new password for your account </p>
                <form action="" className='h-full flex flex-col justify-between'>
                    
                <div className=' w-full'>
                         <label htmlFor="firstName" className='text-base text-[#8F90A6]'>
                         Enter new password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full h-[48px] mt-2'>

                         <input type="text" className='border-2 border-[#E1E1E2] w-full h-full rounded-lg' />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={()=>{setShowPassword(!showPassword)}}
                           >
                               {showPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                         </div>
                     </div>
                <div className=' w-full'>
                         <label htmlFor="firstName" className='text-base text-[#8F90A6]'>
                         Confirm password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full h-[48px] mt-2'>

                         <input type="text" className='border-2 border-[#E1E1E2] w-full h-full rounded-lg' />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}
                           >
                               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                         </div>
                     </div>
                     <button className='w-full h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                     Update password
                    </button>
                </form>
           </div>
       </div>
    </div>
  )
}

export default NewPassword

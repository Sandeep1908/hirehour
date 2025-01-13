import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../../axios/axiosInstance';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';



const newPassSchema = z.object({
    newPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),

});

type newPassData = z.infer<typeof newPassSchema>;

interface NewPassword {
    token: string |null;
    newPassword: string;
    
  }

const NewPassword:React.FC = () => {
    
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [formErrors, setFormErrors] = useState<Partial<Record<keyof newPassData, string>>>({});
    
    
    const navigate = useNavigate();
    const location = useLocation();
     const mutation = useMutation({
    mutationFn: async (newPassword: NewPassword )=>{
      const response = await axiosInstance.post("/api/candidate/signup/forgot-pass", newPassword);
      console.log("response.data",response.data)
      return response.data;    },
      onSuccess: () => {
        toast.success('New Password set successfully');
        navigate("/signin"); 
      },
      onError: (error) => {
        const axiosError = error as AxiosError<{ message: string }>;
         toast.error(axiosError?.response?.data?.message);
       
      },
  })


   const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();


    const searchParams = new URLSearchParams(location.search);
    setToken(searchParams.get('token'));

    const formData = {  newPassword };
      const result = newPassSchema.safeParse(formData);
      console.log("result",result)
      if (!result.success) {
        const errors: Partial<Record<keyof newPassData, string>> = {};
        result.error.errors.forEach((err) => {
          const fieldName = err.path[0] as keyof newPassData;
          errors[fieldName] = err.message;
        });
        setFormErrors(errors);
        return;
      }
  
      // If valid, submit the form
      setFormErrors({});
      mutation.mutate({ token,newPassword });

    };
    
   
  return (
    <div className='absolute top-0 w-full h-[100vh]'>
        <div className='w-full h-full absolute bg-black z-10'>

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
                         <div className='relative w-full h-[40px] mt-2'>

                         <input onChange={(e) => setNewPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className='border-2 border-[#E1E1E2] w-full h-full rounded-lg px-2' />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={()=>{setShowPassword(!showPassword)}}
                           >
                               {showPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                           {formErrors.newPassword && <p className="absolute  text-red-500 text-[10px]">{formErrors.newPassword}</p>}
                         </div>
                     </div>
                <div className=' w-full'>
                         <label htmlFor="firstName" className='text-base text-[#8F90A6]'>
                         Confirm password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full h-[40px] mt-2'>

                         <input type={showConfirmPassword ? 'text' : 'password'}  className='border-2 border-[#E1E1E2] w-full h-full rounded-lg px-2' />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}
                           >
                               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                         </div>
                     </div>
                     <div onClick={handleSubmit} className='w-full h-[58px] flex justify-center items-center font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                     Update password
                    </div>
                </form>
           </div>
       </div>
    </div>
  )
}

export default NewPassword
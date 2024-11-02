import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import axiosInstance from '../../../../axios/axiosInstance';
import {  useNavigate } from 'react-router-dom';
import {  z } from 'zod';
import { RxCross2 } from 'react-icons/rx';


type VerifyProps={
  setVerification: (e:boolean)=>void,
  setForgetPassword: (e:boolean)=>void,
  verification:Boolean
}


interface FormErrors {
  email?: { _errors: string[] };
}

// const ForgetPassword:React.FC<VerifyProps> = ({setVerification,verification}) => {
const ForgetPassword:React.FC<VerifyProps> = ({setForgetPassword}) => {

  const [email, setEmail] = useState<string>('');
  // const [message, setMessage] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const signinSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
  });

  interface EmailId {
    email: string;
    
  }
  interface AuthResponse {
    message: {
      accessToken: string;
    };
  }

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (emailId: EmailId )=>{
      const response = await axiosInstance.post("/api/candidate/signup/forgot-pass", emailId);
      console.log("response.data",response.data)
      localStorage.setItem('token', response.data.token);
      return response.data;    },
      onSuccess: ({ message }: AuthResponse) => {
        // localStorage.setItem("authToken", message.accessToken);
        // alert("Send successfully");
        setEmail("")
        navigate("/signin");
        setForgetPassword(false)

        
      },
      onError: (error: any) => {
        // alert("Invalid credentials or server error");
      },
  })

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = signinSchema.safeParse({ email });
    if (!result.success) {
      setFormErrors(result.error.format());
    } else {
      setFormErrors({});
      mutation.mutate({ email });
    }
  };
  return (
    <div className='absolute top-0 w-full h-[100vh]'>
        <div className='w-full h-full absolute bg-black opacity-80 z-10'>

        </div>
       <div className='w-full h-full flex justify-center items-center'>
           <div className='relative z-20 w-[617px] h-[359px] bg-white rounded-lg p-10 flex flex-col gap-3'>
           <RxCross2 onClick={()=>{setForgetPassword(false)}} size={25} className='absolute top-4 right-4' />

                <p className='font-bold text-2xl text-[#114B53]'>Forgot Password</p>
                <p className='text-base font-normal text-[#C7C9D9] '>Enter your email for the verification process, we will send 4 digits code to your email.</p>
                <form action="" className='h-full flex flex-col justify-between '>
                    <div className='flex flex-col relative'>
                    <label htmlFor="" className='text-[#8F90A6] font-medium'> Email</label>
                    <input  type="email" className='w-full h-[54px] border-2 px-2 rounded-lg border-[#EBEBF0] mt-2' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {formErrors?.email && <p className="absolute bottom-[-15px] text-red-500 text-[10px] ">{formErrors.email._errors?.[0]}</p>}

                    </div>

                    <div onClick={handleSubmit} className='w-full flex justify-center items-center h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                      Continue
                    </div>
                    {/* <div onClick={()=>{setVerification(!verification)}} className='w-full flex justify-center items-center h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                      Continue
                    </div> */}
                </form>
           </div>
       </div>
    </div>
  )
}

export default ForgetPassword
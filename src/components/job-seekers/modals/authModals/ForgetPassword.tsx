import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import axiosInstance from '../../../../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import Logo from '../../../../assets/logo/hirehour.png';



interface FormErrors {
  email?: { _errors: string[] };
}

const ForgetPassword: React.FC = () => {

  const [email, setEmail] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const signinSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
  });

  interface EmailId {
    email: string;

  }

  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (emailId: EmailId) => {
      const response = await axiosInstance.post("/api/candidate/signup/forgot-pass", emailId);
      console.log("response.data", response.data)
      return response.data;
    },
    onSuccess: () => {
      toast.success('Send successfully');
      setEmail("")
      navigate("/signin");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message);

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
      <div className='w-full h-full absolute bg-[#114B53]  z-10'>

      </div>
      <div className='w-full h-full flex justify-between py-10 px-5 lg:px-20'>
        <div className="flex w-1/2 ">
          <p className="relative z-20 text-white text-3xl font-bold">TopEquator</p>
        </div>

        <div className='relative z-20 max-w-[520px] h-fit bg-white rounded-lg p-8 flex flex-col justify-center items-center gap-3'>

          <img src={Logo} className='w-20' alt="" />

          <p className='font-bold text-2xl text-black'>Forgot Password</p>
          <p className='text-base text-center font-normal text-black '>Enter your email for the verification process, we will send reset link to your email.</p>
          <form action="" className='w-full h-full flex flex-col justify-between '>
            <div className='flex flex-col relative'>
              <label htmlFor="" className='text-black font-medium'> Email</label>
              <input type="email" className='w-full h-[40px] border-2 px-2 rounded-lg border-[#EBEBF0] mt-2' value={email} onChange={(e) => setEmail(e.target.value)} />
              {formErrors?.email && <p className="absolute bottom-[-15px] text-red-500 text-[10px] ">{formErrors.email._errors?.[0]}</p>}

            </div>

            <div onClick={handleSubmit} className='w-full flex justify-center items-center h-[50px] font-semibold text-base text-white rounded-lg bg-[#114B53] mt-5'>
              Continue
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
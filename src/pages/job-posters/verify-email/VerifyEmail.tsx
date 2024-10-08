import React from 'react'
import logo from "../../../assets/logo/hirehour.png"
import { Link } from 'react-router-dom'

const VerifyEmail:React.FC = () => {
  return (
    <div className='bg-[#114B53]  h-[92vh] w-full pt-10 lg:pt-20 pb-10 md:pb-20 px-5  lg:px-10'>
    <div className='w-full h-full flex  gap-20'>
        <div className='hidden md:flex w-[50%]'>
        <p className='text-white text-[32px] font-semibold'>Hire Hours</p>
        </div>

        <div className='w-full h-[360px] md:w-[50%] flex justify-center  md:justify-end '>
           <div className='w-[335px]  md:w-[519px] flex justify-center items-center flex-col bg-white px-5 md:px-10 py-4 rounded-xl'>
           
              <div className=' w-24 h-24'>
                  <img src={logo} className='w-full h-full' alt="" />
              </div>
              <p className='text-lg mt-5'>Verify your email address</p>
              <p className='text-sm text-center mt-1'><b>Please click on the link</b> in the email and login again we just 
              sent you to confirm your email</p>

              <p className='text-xs text-blue-500 mt-5'>Resend</p>
              <Link to={"/signin"} className='textsm underline mt-5'>Back to login </Link>
              
           </div>
        
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail

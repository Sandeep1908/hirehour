import React from 'react'

type VerifyProps={
  setVerification: (e:boolean)=>void,
  verification:Boolean
}

const ForgetPassword:React.FC<VerifyProps> = ({setVerification,verification}) => {
// const ForgetPassword:React.FC = () => {
  return (
    <div className='absolute top-0 w-full h-[100vh]'>
        <div className='w-full h-full absolute bg-black opacity-80 z-10'>

        </div>
       <div className='w-full h-full flex justify-center items-center'>
           <div className='relative z-20 w-[617px] h-[359px] bg-white rounded-lg p-10 flex flex-col gap-3'>
                <p className='font-bold text-2xl text-[#114B53]'>Forgot Password</p>
                <p className='text-base font-normal text-[#C7C9D9] '>Enter your email for the verification process, we will send 4 digits code to your email.</p>
                <form action="" className='h-full flex flex-col justify-between'>
                    
                    <label htmlFor="" className='text-[#8F90A6] font-medium'> Email</label>
                    <input type="text" className='w-full h-[54px] border-2 rounded-lg border-[#EBEBF0]' />
                    <div className='w-full flex justify-center items-center h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                      Continue
                    </div>
                    <div onClick={()=>{setVerification(!verification)}} className='w-full flex justify-center items-center h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                      Continue
                    </div>
                </form>
           </div>
       </div>
    </div>
  )
}

export default ForgetPassword
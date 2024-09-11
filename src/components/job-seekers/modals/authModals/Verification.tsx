import React from 'react'
import Timer from './Timer';

const Verification: React.FC = () => {

    return (
        <div className='w-full h-[100vh]'>
        <div className='w-full h-full absolute bg-black opacity-80 z-10'>

        </div>
       <div className='w-full h-full flex justify-center items-center'>
           <div className='relative z-20 w-[617px] h-[407px] bg-white rounded-lg p-10 flex flex-col gap-3'>
                <p className='font-bold text-2xl text-[#114B53]'>Verification</p>
                <p className='text-base font-normal text-[#C7C9D9] '>Enter your 4 digits code that you received on your email.</p>
                <form action="" className='h-full flex flex-col justify-around'>
                    
                    <div className='flex justify-around'>
                    <input type="text" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="text" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="text" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="text" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="text" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />

                    </div>
                    <Timer/>
                    <button className='w-full h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                      Continue
                    </button>
                    

                </form>
                    <p className='text-base font-normal text-[#C7C9D9] text-center mt-4'>If you didn’t receive a code! Resend.</p>
           </div>
       </div>
    </div>
    )
}

export default Verification

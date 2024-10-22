import React from 'react'


const VerifyPhoneNumber:React.FC = () => {
  return (
    <div className=' bg-[#114B53]   w-full h-[92vh] pt-10 lg:pt-10'>
    <div className='w-full h-full px-5 lg:px-10 flex gap-20'>

        <div className='hidden md:flex w-[50%]'>
        <p className='text-white text-[32px] font-semibold'>Hire Hours</p>
        </div>


        <div className='w-full h-[300px] md:w-[50%] flex justify-center  md:justify-end '>
           <div className='w-[335px]   md:w-[519px]  bg-white px-5 md:px-10 py-4 rounded-xl'>

           <p className='font-bold text-lg text-[#114B53]'>Verify Phone number</p>
                <p className='text-sm font-normal mt-1'>Verify with OTP sent to registered number +1 xxx-xxx-xxxx</p>
                <form action="" className='h-full flex flex-col '>
                    
                    <div className='flex justify-around mt-6'>
                    <input type="number" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="number" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="number" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="number" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />
                    <input type="number" className='w-[60px] h-[60px] border-2 rounded-lg border-[#EBEBF0]' />

                    </div>
                    {/* <Timer/> */}
                    <div className='mt-14 w-full flex justify-center items-center h-[45px] font-semibold text-base text-[#114B53] rounded-full  bg-[#E9F358]'>
                      Verify
                    </div>
                    

                </form>
                    {/* <p className='text-base font-normal text-[#C7C9D9] text-center mt-4'>If you didn’t receive a code! Resend.</p> */}



           </div>
        
        </div>
      </div>



    </div>
  )
}

export default VerifyPhoneNumber

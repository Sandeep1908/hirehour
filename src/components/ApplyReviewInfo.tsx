import React from 'react'
import { IoMdClose } from 'react-icons/io'


const ApplyReviewInfo:React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center'>
       <div className='max-w-[1055px] w-full bg-white rounded-lg  shadow-lg'>
            <div className=' p-10 flex justify-between items-center'>
                 <p className='text-2xl font-bold'>Apply to xyz Company</p>
                 <IoMdClose size={30}  className="cursor-pointer" />
            </div>
            <hr />
            <div className='w-full p-10'>


            <div className="w-full ">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-[#104B53] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx- dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    1
                  </span>
                  <p className="hidden md:block text-[12px]">Screening Questions</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx- dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#104B53] text-white rounded-full">2</span>
                  <p className="hidden md:block text-[12px]"> Review Application</p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2 p-2 w-10 h-10 bg-[#C7C9D9] rounded-full">3</span>
                <p className="hidden md:block text-[12px]"> Applied Successfully</p>
              </li>
            </ol>
          </div>


                <p className='text-xl font-semibold mt-5'>
                Review your application
                </p>
                <p className='text-[12px] font-normal mt-2'>
                Before Submit please review carefully
                </p>

               <div className='w-full mt-5'>
                    <div className='w-full flex gap-5'>
                            <div className='max-w-[411px] w-full border-[1px] border-[#D6DBDE] rounded-lg px-5 py-6'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[20px] font-semibold'>Personal Information</p>
                                    <p className='text-base font-semibold'>Edit</p>
                                </div>
                                <hr  className='mt-6'/>
                                <div className='flex flex-col justify-center items-center mt-6'>
                                    <div className='w-[100px] h-[100px] rounded-full bg-[#CBFFFC] flex justify-center items-center '>
                                    <p className='text-[40px] font-extrabold'>J</p>
                                    </div>
                                    <p className='text-[20px] font-semibold mt-6'>John S Mathew</p>
                                </div>
                                <hr  className='mt-8'/>
                                <p className='text-[16px] font-medium text-[#3A3A3C] mt-4'>John@xyz.com</p>
                                <p className='text-[16px] font-medium text-[#3A3A3C] mt-4'>+1 xxx-xxx-xxxx</p>
                                <p className='text-[14px] font-medium text-[#8F90A6] mt-4'>Visa sponsorship</p>
                                <p className='text-[16px] font-semibold text-[#000000] mt-2'>Required</p>
                            </div>
                            <div className='max-w-[540px] w-full border-[1px] border-[#D6DBDE] rounded-lg px-5 py-6'>
                            <div className='flex justify-between items-center'>
                                    <p className='text-[20px] font-semibold'>Resume</p>
                                    <p className='text-base font-semibold'>Edit</p>
                                </div>                
                            </div>
                    </div>
                 <div className='w-full border-[1px] border-[#D6DBDE] rounded-lg px-10 py-6 mt-5'>
                 <div className='flex justify-between items-center'>
                                    <p className='text-[20px] font-semibold'>Screening Questions</p>
                                    <p className='text-base font-semibold'>Edit</p>
                                </div>
                                <hr  className='mt-6'/>

                                <p className='text-[#8F90A6] tex-[12px] font-normal mt-5'>How many years of experience do you have in Java ? ( in years)</p>
                                <p className='text-[#000000] tex-base font-normal mt-2'>4 years</p>
                                <p className='text-[#8F90A6] tex-[12px] font-normal mt-5'>Can you able to Relocate the Job Location ?</p>
                                <p className='text-[#000000] tex-base font-normal mt-2'>Yes</p>

                                <p className='text-[#8F90A6] tex-[12px] font-normal mt-5'>Immediate Joiner ?</p>
                                <p className='text-[#000000] tex-base font-normal mt-2'>Yes</p>

                 </div>
               </div>

            </div>
            <hr />
            <div className='w-full flex justify-end p-10'>
                <div  className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full '>
                    <p className='text-base font-semibold text-[#114B53]'>Continue</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ApplyReviewInfo

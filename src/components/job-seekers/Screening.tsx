import React from 'react'
import { IoMdClose } from 'react-icons/io'

const Screening:React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center'>
        <div className='max-w-[1055px] w-full bg-white rounded-lg shadow-lg'>
            <div className=' p-10 flex justify-between items-center'>
                 <p className='text-2xl font-bold'>Apply to xyz Company</p>
                 <IoMdClose size={30}  className="cursor-pointer" />
            </div>
            <hr />
            <div className='w-full p-10'>


            <div className="w-full ">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx- dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    1
                  </span>
                  <p className="hidden md:block text-[12px]">Screening Questions</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx- dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#C7C9D9] rounded-full">2</span>
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
                Screening Questions
                </p>
                <p className='text-[12px] font-normal mt-2'>
                Answer the Screening questions
                </p>

                <div className='mt-5'>
                    <label htmlFor="" className='text-base font-medium'>How many years of experience do you have in Java ? ( in years) <span className='text-red-600'> *</span></label>
                    <input type="text" className='w-full h-[48px] mt-2 border-[1px] rounded-lg' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-base font-medium'>Can you able to Relocate the Job Location ? <span className='text-red-600'> *</span></label>
                    <input type="text" className='w-full h-[48px] mt-2 border-[1px] rounded-lg' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-base font-medium'>Immediate Joiner ? <span className='text-red-600'> *</span></label>
                    <input type="text" className='w-full h-[48px] mt-2 border-[1px] rounded-lg' />
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

export default Screening

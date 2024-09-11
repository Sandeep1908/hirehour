import React from 'react'
import { IoMdClose } from 'react-icons/io'
import Logo from '../assets/logo/hirehour.png';

const Applied:React.FC = () => {
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
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#104B53] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx- dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#104B53] text-white rounded-full">2</span>
                  <p className="hidden md:block text-[12px]"> Review Application</p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2 p-2 w-10 h-10  bg-[#104B53] text-white rounded-full">3</span>
                <p className="hidden md:block text-[12px]"> Applied Successfully</p>
              </li>
            </ol>
          </div>
            </div>
<div className='flex flex-col justify-center items-center'>
    <img src={Logo} alt="" />
    <p className='text-[20px] font-semibold text-[#3A3A3C] mt-5'>Your application was submitted successfully to XYZ Company</p>
    <p className='text-[14px] font-normal text-[#6B7588] mt-2'>You can track you application any time from my jobs</p>
</div>
            
            <div className='w-full flex justify-center p-10'>
                <div  className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full '>
                    <p className='text-base font-semibold text-[#114B53]'>Done</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Applied

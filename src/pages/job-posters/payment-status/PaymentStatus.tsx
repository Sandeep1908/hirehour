import React from 'react'
import { FaCheckCircle, FaRegCreditCard } from 'react-icons/fa'

const PaymentStatus:React.FC = () => {
  return (
    <div className='w-full min-h-[calc(100vh-56px)] flex justify-center items-center' >
        <div className='flex justify-center flex-col items-center mt-[-100px]' >
              <div className='relative w-36 h-36 rounded-full bg-green-500 p-7 flex justify-center items-center '>
                 <FaRegCreditCard  className='text-white w-full h-full' />
                 <div className='absolute bg-green-500 p-1 rounded-full bottom-[25px] left-[15px]'>

                 <FaCheckCircle size={40} className=' text-white '  />
                 </div>


              </div>
              <p className='text-green-500 text-2xl pt-10 text-center font-bold'>Thank You!</p>
              <p className='text-base text-black pt-1 text-center font-medium'>Payment done Successfully</p>
              <p className='text-base text-gray-500 pt-6 text-center'>You will be redirected to the dashboard shortly </p>
        </div>
    </div>
  )
}

export default PaymentStatus
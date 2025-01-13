import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../axios/axiosInstance';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';


const Verification: React.FC = () => {

       const [token, setToken] = useState<string | null>('');
       const [localStorageToken, setLocalStorageToken] = useState<string | null>('');


      const location = useLocation();
      useEffect(()=>{
      // const location = useLocation();
       const searchParams = new URLSearchParams(location.search);
       setToken(searchParams.get('token'));
       setLocalStorageToken(localStorage.getItem('topequatortoken')); 
       console.log("setLocalStorageToken",localStorageToken)   
       console.log("setLocalStorageToken",token) 
       
       const verifyEmail = async () => {
        try {
          const respose= await axiosInstance.get(`/api/candidate/signup/verify-email?token=${localStorageToken}`)
          console.log("object",respose)
        } catch (error) {
          console.error('Error fetching resume sourcing data:', error);
        }
      };
  console.log("object")
      verifyEmail();
         },[localStorageToken])
   

    return (
        <div className='absolute top-0 w-full h-[100vh]'>
        <div className='w-full h-full absolute bg-black z-10'>

        </div>
       <div className='w-full h-full flex justify-center items-center'>
           <div className='relative z-20 w-[617px] h-[407px] bg-white rounded-lg p-10 flex flex-col gap-3'>
                <p className='font-bold text-2xl text-[#114B53]'>Verification</p>
                <form action="" className='h-full flex flex-col  items-center'>
                    
                    <div className='w-[150px] h-[150px]'>
                    {token === localStorageToken ?  
                    <IoCheckmarkCircleOutline className='text-green-500 w-full h-full' />:
                    <IoCheckmarkCircleOutline className='text-red-500 w-full h-full' />}

                    </div>
                    {token === localStorageToken ?
                   <p className='mb-5'> Your email address was successfully verified</p>:
                   <p className='mb-5'>Email verification failed. Please try again</p>}
                  
                    <Link to={"/signin"} className='w-full flex justify-center items-center h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                      Back to login
                    </Link>
                    

                </form>
                 
           </div>
       </div>
    </div>
    )
}

export default Verification
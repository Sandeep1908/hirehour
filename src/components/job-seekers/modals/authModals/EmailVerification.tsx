import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../axios/axiosInstance';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';



const EmailVerification: React.FC = () => {

  const [token, setToken] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const location = useLocation();
  useEffect(() => {

    const searchParams = new URLSearchParams(location.search);
    const extractedToken = searchParams.get('token');


    const verifyEmail = async () => {
      if (extractedToken) {
        try {
          const response = await axiosInstance.get(
            `/api/candidate/signup/verify-email?token=${extractedToken}`
          );
          setToken(true)
          console.log('Response:', response.data);
        } catch (error: any) {
          setErrorMessage(error.response.data.message)
          console.error('Error verifying email:', error.response.data.message);
        }
      } else {

        console.error('Token is missing in the URL');
      }
    };

    verifyEmail();
  }, [location.search]);

  return (
    <div className='absolute top-0 w-full h-[100vh]'>
      <div className='w-full h-full absolute bg-[#114B53] z-10'>

      </div>
      <div className='w-full h-full flex justify-between py-10 px-5 lg:px-20'>
        <div className="flex w-1/2 ">
          <p className="relative z-20 text-white text-3xl font-bold">TopEquator</p>
        </div>
        <div className='relative z-20 w-[520px] h-fit bg-white rounded-lg p-10 flex flex-col gap-3'>
          <p className='font-bold text-2xl text-black'>Verification</p>
          <form action="" className='h-full flex flex-col  items-center'>

            <div className='w-[150px] h-[150px]'>
              {token ?
                <IoCheckmarkCircleOutline className='text-green-500 w-full h-full' /> :
                <IoCheckmarkCircleOutline className='text-red-500 w-full h-full' />}

            </div>
            {token ?
              <p className='mb-5'> Your email address was successfully verified</p> :
              <p className='mb-5'> {errorMessage}</p>}

            <Link to={"/signin"} className='w-full flex justify-center items-center h-[58px] font-semibold text-base text-white rounded-lg bg-[#114B53]'>
              Back to login
            </Link>


          </form>

        </div>
      </div>
    </div>
  )
}

export default EmailVerification
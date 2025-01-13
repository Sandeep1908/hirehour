import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaRegCreditCard } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import axiosrecruiterinstance from '../../../axios/axiosrecruiterinstance';
import { RxCrossCircled } from 'react-icons/rx';

const PaymentStatus: React.FC = () => {

  const [subscriptionId, setSubscriptionId] = useState<string | null>('');
  const [checkStatus, setCheckStatus] = useState<boolean>(false);

  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5)



  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    console.log("searchParams", searchParams)
    setSubscriptionId(searchParams.get('subscriptionId'));

    const verifySubscriptionId = async () => {
      try {
        const respose = await axiosrecruiterinstance.get(`/api/recruiter/owner-recruiter/subscription-callback/${subscriptionId}`)
        console.log("object", respose)
        if (respose.status === 200) {
          setCheckStatus(true)
        }
      } catch (error) {
        console.error('Error fetching resume sourcing data:', error);
      }
    };

    verifySubscriptionId();
  }, [location.search])


  // Countdown timer for redirection 
  useEffect(() => {

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      navigate('/job-poster/dashboard');
    }

    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className='w-full min-h-[calc(100vh-56px)] flex justify-center items-center' >
      <div className='flex justify-center flex-col items-center mt-[-100px]' >
        <div className={`relative w-36 h-36 rounded-full  ${checkStatus ? "bg-green-500" : " bg-red-500"}  p-7 flex justify-center items-center `}>
          <FaRegCreditCard className='text-white w-full h-full' />
          <div className={`absolute ${checkStatus ? "bg-green-500" : " bg-red-500"} p-1 rounded-full bottom-[25px] left-[15px]`}>
            {checkStatus ?
              <FaCheckCircle size={40} className=' text-white ' />
              :
              <RxCrossCircled size={40} className=' text-white ' />
            }


          </div>


        </div>
        {checkStatus ?
          <>
            <p className='text-green-500 text-2xl pt-10 text-center font-bold'>Thank You!</p>
            <p className='text-base text-black pt-1 text-center font-medium'>Payment done Successfully</p>
          </>
          :
          <>
            <p className='text-red-500 text-2xl pt-10 text-center font-bold'> Payment Failed</p>
            <p className='text-base text-black pt-1 text-center font-medium'>Please pay again</p>
          </>
        }
        <p className='text-base text-gray-500 pt-6 text-center'>You will be redirected to the dashboard shortly {countdown}s</p>
      </div>
    </div>
  )
}

export default PaymentStatus
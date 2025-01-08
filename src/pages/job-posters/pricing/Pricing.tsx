import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { useQuery } from '@tanstack/react-query';
import { fetchPricing } from '../../../utils/jobposters/jobboards/pricing';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const [selector, setSelector] = useState<boolean>(false);
  const [isPaymentOn, setIsPaymentOn] = useState<boolean>(false);
  const navigate=useNavigate()

  const { data: response } = useQuery({
    queryKey: ['pricing'],
    queryFn: fetchPricing,
    enabled: isPaymentOn && selector
  });

  

  const handlePayment=()=>{
      if(selector){
        setIsPaymentOn(true)
        if(response?.paymentLink){
          toast.success('You are being redirect to the payment page.')
          window.location.href=response?.paymentLink
        }
        else{
          toast.error("You are not a owner")
        }
      }
      else{
        navigate('/job-poster/dashboard?key=myjobs')
      }
  }
  

  return (
    <div className="relative w-full h-auto md:h-[94vh]">
      <div className="max-w-[1280px] md:mt-5 m-auto pb-20">
        <div className="w-full  px-5  py-4 md:bg-white rounded-lg">
          <p className="text-base font-semibold ">Please Select the plan to Post your Job Live</p>
        </div>
        <div className="flex flex-col  md:flex-row gap-10 items-center justify-center mt-4 md:mt-10">
          <div
            onClick={() => {
              setSelector(false);
            }}
            className={` border ${!selector && 'border-[1px] border-black'} max-w-[260px] h-96   w-full rounded-lg  p-3 bg-white flex justify-between flex-col`}
          >
            <div className="flex-col">
              <p className="text-lg font-semibold ">Post a Job for Free</p>
              <p className="text-sm font-semibold ">
                Free / <span className="text-xs">Month</span>
              </p>
              <p className="text-xs font-normal text-[#6B7588] mt-1">
                Post a Job and track the applicant
              </p>
              <div className="w-full flex flex-col gap-4 mt-6">
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">
                    Distribution of job to multiple boards
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">
                    In-built AI Applicant tracking system
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">Co-Hiring access</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">
                    Digital Right to Represents(RTR)
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">All you can take profiles</p>
                </div>
              </div>
            </div>

            <div
              className={`${!selector && 'bg-[#114B53]  text-white'} w-full h-8 border-[1px] text-[#114B53] border-[#114B53] rounded-full flex justify-center items-center mt-10`}
            >
              <p className=" text-xs">Select package</p>
            </div>
          </div>

          <div
            onClick={() => {
              setSelector(true);
            }}
            className={` border ${selector && 'border-[1px] border-black'} max-w-[260px] h-96   w-full rounded-lg  p-3 bg-white flex justify-between flex-col`}
          >
            <div className="flex-col ">
              <p className="text-sm font-semibold ">Resume Sourcing</p>
              <p className="text-sm font-semibold  ">
                $99 / <span className="text-xs">Month</span>
              </p>
              <p className="text-xs font-normal text-[#6B7588] mt-1">
                You can find perfect applicant for you job match by sourcing the resume{' '}
              </p>

              <p className="text-lg font-semibold text-black mt-[150px] ">Credits : 100</p>
            </div>

            <div
              className={` ${selector && 'bg-[#114B53]  text-white'} w-full h-8 border-[1px] text-[#114B53] border-[#114B53] rounded-full flex justify-center items-center mt-10`}
            >
              <p className=" text-xs">Select package</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 bg-white md:bg-transparent md:relative py-3  w-full  m-auto flex justify-center md:justify-end md:px-10 mt-10 gap-10  items-center">
          <p className="hidden md:block cursor-pointer text-[#114B53] font-semibold text-base">
            {' '}
            Back
          </p>
          <div
            onClick={() => handlePayment()}
            className="bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer "
          >
            <p className="text-base font-semibold text-[#114B53] cursor-pointer">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

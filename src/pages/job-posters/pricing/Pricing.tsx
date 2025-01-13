import React, { useState, useCallback } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import { fetchPricing } from '../../../utils/jobposters/jobboards/pricing';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../components/Spinner';

// Define types
interface PricingResponse {
  paymentLink?: string;
}

type PlanId = 'free' | 'premium';

interface Plan {
  id: PlanId;
  title: string;
  price: string;
  description: string;
  features: string[];
  credits?: number;
}

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('free');
  const navigate = useNavigate();

  const { data: pricingData, isLoading, isError } = useQuery<PricingResponse>({ // Type the data
    queryKey: ['pricing'],
    queryFn: fetchPricing,
    enabled: selectedPlan === 'premium',
    retry: false,
  });

  const handlePlanSelect = useCallback((plan: PlanId) => {
    setSelectedPlan(plan);
  }, []);

  const handlePayment = useCallback(() => {
    if (selectedPlan === 'premium') {
      if (pricingData?.paymentLink) {
        toast.success('You are being redirected to the payment page.');
        window.location.href = pricingData.paymentLink;
      } else {
        toast.error('You are not authorized or payment link is missing.');
      }
    } else {
      navigate('/job-poster/dashboard?key=myjobs');
    }
  }, [selectedPlan, navigate, pricingData]);

  
  if (isError && selectedPlan === 'premium') {
    toast.error("Error fetching payment information. Please try again later.")
    return <div>Error loading payment Information</div>
}

  const plans: Plan[] = [  
    {
      id: 'free',
      title: 'Post a Job for Free',
      price: 'Free',
      description: 'Post a Job and track the applicant',
      features: [
        'Distribution of job to multiple boards',
        'In-built AI Applicant tracking system',
        'Co-Hiring access',
        'Digital Right to Represents(RTR)',
        'All you can take profiles',
      ],
    },
    {
      id: 'premium',
      title: 'Resume Sourcing',
      price: '$99',
      description: 'You can find perfect applicant for you job match by sourcing the resume',
      features: [],
      credits: 100,
    },
  ];

  return (
    <div className="relative w-full h-auto md:h-[94vh]">
      <div className="max-w-[1280px] md:mt-5 m-auto pb-20">
        <div className="w-full px-5 py-4 md:bg-white rounded-lg">
          <p className="text-base font-semibold">Please Select the plan to Post your Job Live</p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-4 md:mt-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handlePlanSelect(plan.id)}
              className={`border ${selectedPlan === plan.id ? 'border-[1px] border-black' : ''} max-w-[260px] h-96 w-full rounded-lg p-3 bg-white flex justify-between flex-col cursor-pointer`} // Added cursor-pointer
            >
              <div>
                <p className="text-lg font-semibold">{plan.title}</p>
                <p className="text-sm font-semibold">
                  {plan.price} / <span className="text-xs">Month</span>
                </p>
                <p className="text-xs font-normal text-[#6B7588] mt-1">{plan.description}</p>
                {plan.features.length > 0 && (
                  <div className="w-full flex flex-col gap-4 mt-6">
                    {plan.features.map((feature, index) => (
                      <div className="flex gap-2 items-center" key={index}>
                        <FaCheckCircle className="text-black" size={16} />
                        <p className="text-xs font-normal text-black">{feature}</p>
                      </div>
                    ))}
                  </div>
                )}
                {plan.credits && (
                  <p className="text-lg font-semibold text-black mt-[150px]">
                    Credits : {plan.credits}
                  </p>
                )}
              </div>
              <div
                className={` ${selectedPlan === plan.id ? 'bg-[#114B53]  text-white' : 'border-[1px] text-[#114B53] border-[#114B53]'} w-full h-8 rounded-full flex justify-center items-center mt-10`}
              >
                <p className=" text-xs">{isLoading && selectedPlan === 'premium' ?<Spinner loading={isLoading} color='white' size={20}/> :'Select package'}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 bg-white md:bg-transparent md:relative py-3 w-full m-auto flex justify-center md:justify-end md:px-10 mt-10 gap-10 items-center">
          <p className="hidden md:block cursor-pointer text-[#114B53] font-semibold text-base">
            Back
          </p>
          <div
            onClick={handlePayment}
            className="bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer"
          >
            <p className="text-base font-semibold text-[#114B53] cursor-pointer">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

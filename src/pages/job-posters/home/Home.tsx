import React, { useEffect, useState } from 'react';

import { ResourseCard } from '../../../config/home';

import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';
import { useQuery } from '@tanstack/react-query';
import { fetchPostedJob } from '../../../utils/jobposters/jobboards/getJobs';

const JobPosterHome: React.FC = () => {
  const [homeCards, setHomeCards] = useState<HomeCardTypes[]>();
  const navigate = useNavigate();
  const { data: postedJob } = useQuery({
    queryKey: ['postedjobs'],
    queryFn: fetchPostedJob,
  });

  const handlePostJob = () => {
    if (postedJob?.jobs?.length === 0) {
      navigate('/job-poster/job-basis');
    } else {
      navigate('/job-poster/dashboard?key=myjobs');
    }
  };

  useEffect(() => {
    setHomeCards(ResourseCard);
  }, []);

  return (
    <>
      <div className="w-full mb-10 ">
        <div className="mt-3">
          <div className="w-full max-w-[1200px] bg-[#104B53] flex flex-col justify-center items-center h-72 rounded-lg  m-auto p-2 md:p-10 ">
            {/* Top Heading  */}

            <div className="w-full   flex flex-col justify-center items-center space-y-4">
              <h1 className=" relative text-3xl text-white font-bold">
                Post Job and
                <span className="text-[#E9F358] ml-1 mr-1  relative box  ">Find Talent</span>
                Easily!
              </h1>
              <p className="text-[10px] text-[#F0F4F4] text-center">
                Your ultimate platform for seamless job postings and talent discovery.
              </p>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-10">
              <p
                onClick={handlePostJob}
                className="w-32 h-8 text-xs flex justify-center items-center rounded-full cursor-pointer bg-[#E9F358] text-[#1D5552]"
              >
                Post a Job
              </p>
            </div>
          </div>
        </div>
        {/* Resouces section */}

        <div className="w-full max-w-[1200px] mt-10 m-auto bg-white p-4 rounded-lg">
          <div className="w-full">
            <div className="flex justify-center items-center">
              <h1 className="text-xl font-bold">Resource</h1>
            </div>

            <div className="w-full mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
              {homeCards?.map((item, id) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center max-w-72 h-96 "
                    key={id}
                  >
                    <img
                      src={item.imgUrl}
                      alt="home-card"
                      className="w-full h-[40%] object-cover rounded-t-lg"
                    />

                    <div className="flex flex-col justify-between w-full space-y-3 p-2 h-[60%]  pt-1 border-[2px] border-[#F3F3F3] rounded-b-md">
                      <div className="flex flex-col space-y-2  justify-center items-center ">
                        <h1 className="text-lg font-semibold">{item.title}</h1>
                        <p className="text-xs text-justify text-[#1A202E]">{item.description}</p>
                      </div>

                      <p className="w-full   text-xs flex justify-end cursor-pointer">Read More</p>

                      <hr />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobPosterHome;

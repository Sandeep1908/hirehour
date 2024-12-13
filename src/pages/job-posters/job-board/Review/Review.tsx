import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';

import { FaEdit } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../../../assets/logo/hirehour.png';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchOneCompany } from '../../../../utils/jobposters/jobboards/getCompanyDetails';

const Review: React.FC = () => {
  const [isQuickApplyStep3, setQuickApplyStep3] = useState<boolean>(false);
  const userDetails = useLocation()?.state?.userDetails;
  const navigate = useNavigate();
  const { data: companyDetail } = useQuery({
    queryKey: ['companydetail'],
    queryFn: () => fetchOneCompany(userDetails?.companyID),
  });

  console.log('company', companyDetail);

  const quickApplyDone = () => {
    setQuickApplyStep3(false);
  };
  return (
    <div className="w-full   pb-10 bg-[#F6F6F8]">
      <div className="max-w-[1080px]   pt-2 rounded-lg m-auto">
        <div className=" bg-white">
          <div className="flex  flex-col    md:flex-row  md:justify-between md:items-center p-4">
            <h1 className="text-xl font-semibold">Create a Job Board</h1>

            <div className="flex justify-between md:justify-center items-center space-x-10">
              <p
                className="font-semibold text-[#104B53] text-xs"
                onClick={() => navigate('/job-poster/dashboard?key=myjobs')}
              >
                Cancel{' '}
              </p>
              <p
                onClick={() => navigate('/job-poster/dashboard?key=myjobs')}
                className=" w-28 h-7 text-[10px] bg-[#104B53] md:bg-transparent  text-white  rounded-full md:text-[#104B53]  flex justify-center items-center border border-[#104B53]"
              >
                Save & Exit
              </p>
            </div>
          </div>
          <hr />

          <div className="w-full p-3">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-sm">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-7 text-xs h-7 bg-[#104B53] text-white rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block">Job Basis</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Job Description</p>
                </span>
              </li>

              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Company Details</p>
                </span>
              </li>

              <li className="flex items-center">
                <span className="me-2 p-2 w-7 h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full">
                  4
                </span>
                <p className="hidden text-[10px] w-[100px] md:block"> Review</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="max-w-[1080px] mt-2 h-full rounded-lg   bg-white m-auto  pb-4">
        <div className="max-w-[800px] m-auto py-3  ">
          <h1 className="text-sm font-semibold">Job Details</h1>
          <div className="w-full border rounded-lg h-full p-2 mt-5 flex flex-col space-y-5">
            <div className="w-full flex justify-end items-center space-x-1">
              <FaEdit size={16} color="#104B53" />
              <p className="text-xs text-[#104B53] font-[500]">Edit</p>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Job Title</h1>
                <p className="text-xs font-semibold">{userDetails?.jobRoleName}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Job Location</h1>
                <p className="text-xs font-semibold">{userDetails?.accommodationType}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Employee reside in specific location</h1>
                <p className="text-xs font-semibold">Yes</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Location must employee reside</h1>
                <p className="text-xs font-semibold">Allen, TX,US, Allen, TX,US </p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Working Location</h1>
                <p className="text-xs font-semibold">{userDetails?.jobLocation}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Employment type</h1>
                <p className="text-xs font-semibold">
                  {JSON.parse(userDetails?.employmentType).join(', ')}{' '}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Country of employment</h1>
                <p className="text-xs font-semibold">United States</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Company name in job listing</h1>
                <p className="text-xs font-semibold">{companyDetail?.companyName}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Company Website</h1>
                <p className="text-xs font-semibold">{companyDetail?.companyWebsiteURL}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Company Domain</h1>
                <p className="text-xs font-semibold">{companyDetail?.domainItWorksIn}</p>
              </div>
            </div>
          </div>

          <div className="w-full border  rounded-lg h-full p-2 mt-5 flex flex-col space-y-5">
            <div className="w-full flex justify-end items-center space-x-1">
              <FaEdit size={16} color="#104B53" />
              <p className="text-xs text-[#104B53] font-[500]">Edit</p>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">work Authorization accepting</h1>
                <p className="text-xs font-semibold">
                  {JSON.parse(userDetails?.workAuthorizationAccepting).join(', ')}
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Job Location</h1>
                <p className="text-xs font-semibold">{userDetails?.accommodationType}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Number of position hire</h1>
                <p className="text-xs font-semibold">{userDetails?.numberOfPositionsHiring}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Experience Level</h1>
                <p className="text-xs font-semibold">{userDetails?.experienceLevelNeeded} </p>
              </div>
            </div>

            <div className="grid px-4 gap-5">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Tech Stack</h1>
                <p className="text-xs font-semibold">
                  {JSON.parse(userDetails?.workStack).join(', ')}
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Additional screening questions</h1>
                <ol className="px-4 list-decimal">
                  <li className="text-xs font-semibold">
                    Can you relocate once you get the offer?
                  </li>
                  <li className="text-xs font-semibold">
                    How many years of experience do you have in java?
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="w-full border rounded-lg h-full p-2 mt-5 flex flex-col space-y-5">
            <div className="w-full flex justify-end items-center space-x-1">
              <FaEdit size={16} color="#104B53" />
              <p className="text-xs text-[#104B53] font-[500]">Edit</p>
            </div>

            <div className="flex flex-col space-y-6 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Pay Range</h1>
                <p className="text-xs font-semibold">
                  {userDetails?.salaryOfferedRangeStart}-{userDetails?.salaryOfferedRangeEnd}{' '}
                  {userDetails?.salaryOfferedRangeType}
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Job description</h1>
                <p className="text-xs font-semibold">{companyDetail?.aboutCompany}</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Benefits</h1>
                <p className="text-xs font-semibold">
                  {JSON.parse(userDetails?.additionalBenefits).join(', ')}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  h-full p-2 mt-5 flex justify-end items-center space-x-2 ">
            <Link
              to={'/job-poster/job-review'}
              className="w-28 flex justify-center items-center rounded-full text-xs h-7 text-[#124C53] border border-[#124C53]"
            >
              Job Preview
            </Link>

            <div
              onClick={() => {
                setQuickApplyStep3(!isQuickApplyStep3);
              }}
              className="w-24 flex justify-center items-center rounded-full text-xs h-7 text-[#124C53] border bg-[#E9F358]"
            >
              Submit
            </div>
          </div>
        </div>
      </div>

      {/* Popup  */}
      <div
        className={`w-full h-full flex overflow-scroll justify-center items-center fixed inset-0 transition-all duration-500 ${isQuickApplyStep3 ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
        <div className="w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

        <div className="z-[30] max-w-[600px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px]">
          <div className=" p-4 flex justify-between items-center">
            <p className="text-base font-bold">Apply to xyz Company</p>
            <IoMdClose
              size={30}
              onClick={() => {
                setQuickApplyStep3(false);
              }}
              className="cursor-pointer"
            />
          </div>
          <hr />
          <div className="w-full p-10">
            <div className="w-full flex justify-between items-center">
              <div className="w-[167px] flex justify-center items-center gap-2">
                <div className="w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center">
                  <p className="text-base text-white font-semibold">1</p>
                </div>
                <p className="hidden md:block text-[10px] font-medium text-[#114B53]">
                  Screening Questions
                </p>
              </div>
              <div className="border-t-[1px] max-w-[30px] w-full border-dashed border-[#114B53]"></div>
              <div className="w-[167px] flex justify-center items-center gap-2">
                <div className="w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center">
                  <p className="text-base text-white font-semibold">2</p>
                </div>
                <p className="hidden md:block text-[10px] font-medium text-[#114B53]">
                  Review Application
                </p>
              </div>
              <div className="border-t-[1px] max-w-[30px] w-full border-dashed border-[#114B53]"></div>
              <div className="w-[167px] flex justify-center items-center gap-2">
                <div className="w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center">
                  <p className="text-base text-white font-semibold">3</p>
                </div>
                <p className="hidden md:block text-[10px] font-medium text-[#114B53]">
                  Applied Successfully
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={Logo} alt="" />
            <p className="text-sm font-semibold text-[#3A3A3C] mt-5">
              Your application was submitted successfully to XYZ Company
            </p>
            <p className="text-xs font-normal text-[#6B7588] mt-2">
              You can track you application any time from my jobs
            </p>
          </div>

          <div className="w-full flex justify-center p-10">
            <Link
              to={'/job-poster/pricing'}
              onClick={quickApplyDone}
              className="cursor-pointer bg-[#E9F358] w-[100px] h-[40px] flex justify-center items-center rounded-full "
            >
              <p className="text-sm font-semibold text-[#114B53]">Done</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

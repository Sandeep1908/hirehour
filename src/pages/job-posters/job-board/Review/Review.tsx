import React from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';

import { FaEdit } from 'react-icons/fa';

const Review: React.FC = () => {
  return (
    <div className="w-full   pb-10 bg-[#F6F6F8]">
      <div className="max-w-[1080px]   pt-2 rounded-lg m-auto">
        <div className=" bg-white">
          <div className="flex  flex-col    md:flex-row  md:justify-between md:items-center p-4">
            <h1 className="text-xl font-semibold">Create a Job Board</h1>

            <div className="flex justify-between md:justify-center items-center space-x-10">
              <p className="font-semibold text-[#104B53] text-xs">Cancel </p>
              <p className=" w-28 h-7 text-[10px] bg-[#104B53] md:bg-transparent  text-white  rounded-full md:text-[#104B53]  flex justify-center items-center border border-[#104B53]">
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
                <p className="text-xs font-semibold">John S</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Job Location</h1>
                <p className="text-xs font-semibold">Onsite, Remote</p>
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
                <p className="text-xs font-semibold">Street name 1, allen, TX, United States</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Employment type</h1>
                <p className="text-xs font-semibold">Full time, Contract Crop to crop (C2C) </p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Country of employment</h1>
                <p className="text-xs font-semibold">United States</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Company name in job listing</h1>
                <p className="text-xs font-semibold">xyz Company</p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Company Website</h1>
                <p className="text-xs font-semibold">xyzcompany.com</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Company Domain</h1>
                <p className="text-xs font-semibold">Health Care</p>
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
                <p className="text-xs font-semibold">H1 Visa, green card holder</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Job Location</h1>
                <p className="text-xs font-semibold">Onsite, Remote</p>
              </div>
            </div>

            <div className="grid grid-cols-2 px-4">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Number of position hire</h1>
                <p className="text-xs font-semibold">4</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Experience Level</h1>
                <p className="text-xs font-semibold">Senior Associate level </p>
              </div>
            </div>

            <div className="grid px-4 gap-5">
              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Tech Stack</h1>
                <p className="text-xs font-semibold">Java, React</p>
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
                <p className="text-xs font-semibold">97,558.73-117,490 per year</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Job description</h1>
                <p className="text-xs font-semibold">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                  a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                  passage, and going through the cites of the word in classical literature,
                  discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                  1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                  Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                  popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                  sit amet..", comes from a line in section 1.10.32.
                </p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-xs text-[#8F90A6]">Benefits</h1>
                <p className="text-xs font-semibold">Visa Sponsorship, Green card sponsorship</p>
              </div>
            </div>
          </div>

          <div className="w-full  h-full p-2 mt-5 flex justify-end items-center space-x-2 ">
            <p className="w-28 flex justify-center items-center rounded-full text-xs h-7 text-[#124C53] border border-[#124C53]">
              Job Preview
            </p>

            <Link
              to={'/job-poster/pricing'}
              className="w-24 flex justify-center items-center rounded-full text-xs h-7 text-[#124C53] border bg-[#E9F358]"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

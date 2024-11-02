import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select';

const JobBasis: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('hirehour');
  const employmentTypeOptions = [
    {
      value: 'Crop to Crop',
      label: 'Crop to Crop',
    },
    {
      value: 'Contract to hire',
      label: 'Contract to hire',
    },
  ];
  return (
    <div className="w-full  h-full  md:pb-20  ">
      <div className="max-w-[1080px]  pt-2 rounded-lg m-auto">
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
                  <span className="me-2 p-2 w-7 md:w-7 text-xs h-7 bg-[#104B53] text-white rounded-full">
                    1
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block">Job Basis</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#C7C9D9] text-[10px] flex justify-center items-center rounded-full">
                    2
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Job Description</p>
                </span>
              </li>

              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#C7C9D9] text-[10px] flex justify-center items-center rounded-full">
                    3
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Company Details</p>
                </span>
              </li>

              <li className="flex items-center">
                <span className="me-2 p-2 w-7 h-7 bg-[#C7C9D9] text-[10px] flex justify-center items-center rounded-full">
                  4
                </span>
                <p className="hidden text-[10px] w-[100px] md:block"> Review</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Informations  */}

      <div className="max-w-[1080px]    rounded-lg  mt-2  bg-white m-auto  pb-4">
        <div className="w-full max-w-[1064px] m-auto pt-3 flex flex-col space-y-5">
          {/* Form  */}

          <div className=" flex flex-col space-y-3">
            <div className="w-full flex flex-col space-y-5  p-4">
              {/* Total Experience  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-xs">
                    Are you using Hirehours or your own ATS/website for sourcing?*
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex justify-start items-center space-x-4 ">
                    <div className="flex justify-center items-center space-x-3">
                      <input
                        type="radio"
                        name="platform"
                        id="hirehour"
                        value="hirehour"
                        checked={selectedOption === 'hirehour'}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      />
                      <label htmlFor="hirehour" className="text-xs">
                        HireHours
                      </label>
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                      <input
                        type="radio"
                        name="platform"
                        id="ownats"
                        value="ownats"
                        checked={selectedOption === 'ownats'}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      />
                      <label htmlFor="ownats" className="text-xs">
                        Own ATS/Website
                      </label>
                    </div>
                  </div>

                  {/* Link for sourcing  */}

                  {selectedOption === 'ownats' && (
                    <div className="flex flex-col space-y-2">
                      <div className="flex ">
                        <label htmlFor="" className="text-xs">
                          Link for Sourcing
                        </label>
                        <span className="text-red-500">*</span>
                      </div>

                      <input
                        type="text"
                        placeholder="Link"
                        className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Job title  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Job Title
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Search by job role"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Job Location  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Job Location
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="company"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Working Location  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Working Location
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Domain Worked"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Relocate  */}

                <div className="flex justify-start items-center">
                  <input type="checkbox" placeholder="Job Type" className="w-10 h-5" />

                  <div className="flex ">
                    <label htmlFor="" className="text-sm font-[300]">
                      Willingness To Relocate
                    </label>
                    <span className="text-red-500">*</span>
                  </div>
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Employment type  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Employment type
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={employmentTypeOptions}
                    isMulti
                    className="text-xs text-[#9CA3AF]"
                  />
                </div>

                {/* Job Domain  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Job Domain
                    </label>
                     
                  </div>

                  <input
                    type="text"
                    placeholder="Job Domain"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Work Authorization   */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Work authorization accepting
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={employmentTypeOptions}
                    isMulti
                    className="text-xs text-[#9CA3AF]"
                  />
                </div>

                {/* The role provide visa sponsorship*  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      The role provide visa sponsorship
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Job Domain"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Experience level*   */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Experience level
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={employmentTypeOptions}
                    isMulti
                    className="text-xs text-[#9CA3AF]"
                  />
                </div>

                {/* Number of position hiring**  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Number of position hiring
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <select name="" id="" className='p-2 text-xs border border-[#EBEBF0] rounded-md placeholder:text-xs'>
                    <option value="">Single</option>
                    <option value="">Multiple</option>

                  </select>
                 
                </div>
              </div>
            </div>
          </div>

          {/* buttons  */}

          <div className="flex w-full p-2  justify-between md:justify-end items-center  space-x-4">
            <Link
              to={''}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer border border-[#104B53] text-[#104B53]"
            >
              Back
            </Link>
            <Link
              to={'/job-poster/job-description'}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer bg-[#E9F358] "
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBasis;

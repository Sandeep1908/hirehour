import React from 'react';
import { TiTick } from 'react-icons/ti';

import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const AdditionalInfo: React.FC = () => {
  return (
    <div className="w-full   pb-20 bg-[#F6F6F8]">
      <div className="max-w-[1280px] h-48  m-auto">
        <div className="">
          <div className="flex  flex-col  space-y-4 md:flex-row  md:justify-between md:items-center p-4">
            <h1 className="text-xl font-semibold">Setting up your profile</h1>

            <div className="flex justify-between md:justify-center items-center space-x-10">
              <p className="font-semibold text-[#104B53]">Cancel </p>
              <p className=" w-32 h-10 text-xs bg-[#104B53] md:bg-transparent  text-white md:w-40 md:h-10 rounded-full md:text-[#104B53]  flex justify-center items-center border border-[#104B53]">
                Save & Exit
              </p>
            </div>
          </div>
          <hr />

          <div className="w-full p-4">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-sm">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 flex justify-center items-center md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden md:block">Upload Resume</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    2
                  </span>
                  <p className="hidden text-[#104B53]   md:block"> Additional Information</p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2 p-2 w-10 h-10 bg-[#C7C9D9] rounded-full">3</span>
                <p className="hidden md:block"> Review</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Informations  */}

      <div className="max-w-[1080px] h-full rounded-lg   bg-white m-auto p-4 pb-4 mt-3">
        <div className="w-full max-w-[1064px] m-auto pt-10 flex flex-col space-y-5">
          <div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Summery</h1>
            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <p className="text-[#535354] text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </div>

          {/* Work Experiences  */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Work Experience</h1>

            <div className="w-full flex flex-col space-y-5  p-4">
              {/* Total Experience  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">Total Experience</label>
                  <span className="text-red-500">*</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="In years"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />

                  {/* in Months  */}

                  <input
                    type="text"
                    placeholder="In Months"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Role  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Role</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Role"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Company  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Select Company</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="company"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Domain Worked  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Domain Worked</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Domain Worked"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Job Type  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Job Type</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Job Type"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Date Started  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Date Started</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    placeholder="Date Started"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Date Ended  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Date Ended</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    placeholder="Date Ended"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="flex  justify-start items-center space-x-5">
                  <input
                    type="checkbox"
                    placeholder="Date Started"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />

                  <p>I am currently work here</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">Location</label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="email"
                  placeholder="Select location and country"
                  className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>

              <div className=" flex flex-col space-y-3">
                <h1 className="text-lg font-semibold"> Work Summery</h1>
                <div className="border p-7 border-[#EBEBF0] rounded-lg">
                  <p className="text-[#535354] text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="flex space-x-2 justify-start items-center">
                <FaPlus color="#104B53" size={20} />
                <p className="text-[#104B53] text-lg font-semibold cursor-pointer">
                  Add Experiences
                </p>
              </div>
            </div>
          </div>

          {/* Education
           */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Education</h1>

            <div className="w-full flex flex-col space-y-5  p-4">
              {/* Collage Name  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">Collage Name</label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="email"
                  placeholder="
                Enter Your Collage Name"
                  className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* 
              degree  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Degree</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Degree"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Major  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Major</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Major"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Date Started  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Date Started</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    placeholder="Date Started"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Date Ended  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm">Date Ended</label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    placeholder="Date Ended"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="flex  justify-start items-center space-x-5">
                  <input
                    type="checkbox"
                    placeholder="Date Started"
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />

                  <p>I am currently work here</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">Location</label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="email"
                  placeholder="Select location and country"
                  className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>

              <div className="flex space-x-2 justify-start items-center">
                <FaPlus color="#104B53" size={20} />
                <p className="text-[#104B53] text-lg font-semibold cursor-pointer">
                  Add Educations
                </p>
              </div>
            </div>
          </div>
          <hr />

          {/* buttons  */}

         


          <div className="flex w-full  justify-between md:justify-end items-center  space-x-4">
            <Link to={'/upload-resume'} className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer border border-[#104B53] text-[#104B53]">Back</Link>
            <Link to={'/review-form'} className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer bg-[#E9F358] ">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;

import React from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { MdOutlineLinkedCamera } from 'react-icons/md';

const CompanyProfile: React.FC = () => {
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
                  <span className="me-2 p-2 w-7 md:w-7 text-xs h-7 bg-[#104B53] text-white rounded-full">
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

   {/* Cover Images  */}

      <div className="max-w-[1080px] mt-2 h-full rounded-lg   bg-white m-auto  pb-4">
        <div className="w-full max-w-[800px] m-auto  p-3 flex flex-col space-y-5">
          <div className="w-full h-40 border  bg-white relative">
            <div className="w-full h-24 bg-[#F2F2F5]">
              <div className='flex justify-center items-center h-full'>
                <label className={`flex justify-center items-center space-x-3`}>
                  <span className={`text-[10px] text-[#6B7588]  font-[500] pl-2`}>Company Cover Image</span>
                  <MdOutlineLinkedCamera size={13} color="#6B7588" className="" />
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>


            <div className='w-20 h-20 flex justify-center items-center border absolute top-10 left-14 shadow-lg bg-[#F2F2F5]' >
            <label className={`flex flex-col justify-center items-center space-y-1`}>
                  <span className={`text-[7px] text-[#6B7588] text-center font-[500] pl-2`}>Company Logo</span>
                  <MdOutlineLinkedCamera size={13} color="#6B7588" className="" />
                  <input type="file" className="hidden" />
                </label>
            </div>
          </div>


          <div className="w-full grid md:md:grid-cols-2 gap-3">
                {/* Company Name  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Company Name
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Company Address  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Company Address
                    </label>
                    <span className="text-red-500">*</span>
                     
                  </div>

                  <input
                    type="text"
                    placeholder="Search by location"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>


              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Location  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Location
                    </label>
                    <span className="text-red-500">*</span>
                    
                  </div>

                  <input
                    type="text"
                    placeholder="Location"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>



                {/* Headquater  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Headquater Location
                    </label>
                    <span className="text-red-500">*</span>
                    
                  </div>

                  <input
                    type="text"
                    placeholder="Location"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                 
              </div>

          <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Company Size  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Company Size
                    </label>
                    <span className="text-red-500">*</span>
                    
                  </div>

                  <input
                    type="text"
                    placeholder="Company size"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Notification Email  */}

                <div className="flex flex-col justify-start items-start">
                <div className="flex ">
                    <label htmlFor="" className="text-xs font-[300]">
                      Receive notification through emails
                    </label>
                
                  </div>
                  <div className='flex justify-between p-2 w-full'>
                    <p className='text-sm'>mathewxyz.com</p>
                   
                  </div>

                
                </div>
              </div>


      

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Company Website  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Company Website URL
                    </label>
                    <span className="text-red-500">*</span>
                   
                  </div>

                  <input
                    type="text"
                    placeholder="Company URL"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Company Location  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Phone Number
                    </label>
                    <span className="text-red-500">*</span>
                    
                  </div>

                  <input
                    type="text"
                    placeholder="Phone No"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>



              <div className="w-full  ">
                 

                {/* Company Description  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                    Company Description
                    </label>
                    
                  </div>

                  <textarea
                    
                   
                    className="p-2 border w-full border-[#EBEBF0] min-h-44 rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              
                {/* buttons  */}

          <div className="flex w-full  justify-between md:justify-end items-center  space-x-4">
            <Link
              to={''}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer  text-[#104B53]"
            >
              Back
            </Link>
            <Link
              to={'/job-poster/review'}
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

export default CompanyProfile;

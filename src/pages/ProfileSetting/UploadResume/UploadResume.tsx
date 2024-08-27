import React, { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { GrDocumentPdf } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';

const UploadResume: React.FC = () => {
  const [isContinue, setIsContinue] = useState<boolean>(false);
  return (
    <div className="w-full h-full pb-20 bg-[#F6F6F8]">
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
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    1
                  </span>
                  <p className="hidden md:block">Upload Resume</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 md:w-14 h-10 bg-[#C7C9D9] rounded-full">2</span>
                  <p className="hidden md:block"> Additional Information</p>
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

      {/* Upload Resume  */}

      <div className="max-w-[1280px] h-full md:h-[476px] bg-white m-auto p-4 mt-10">
        <div className="flex flex-col space-y-4">
          <h1 className="text-xl">Upload Your Resume</h1>
          <p className="text-sm text-[#6B7588]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-10 space-x-5">
          <div className="w-full sm:w-[588px] h-[300px] border border-black border-dashed flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-5 justify-center items-center">
              <p className="font-semibold"> Drap & Drop files Here</p>
              <p className="text-xs text-[#6B7588]">or</p>

              <label
                className={`flex justify-center items-center w-36 h-7 p-0.5 rounded-full cursor-pointer bg-[#E9F358]   `}
              >
                <FaCirclePlus size={13} color="#104B53" className="" />
                <span className={`text-xs text-[#104B53]  font-[500] pl-2`}>Upload Here</span>
                <input type="file" className="hidden" />
              </label>

              <p className="text-xs text-[#6B7588]">
                <span className="font-semibold text-sm text-black mr-4">Note:</span>
                Supported File Type Pdf & Docx
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="w-full sm:w-[588px] h-[300px] p-4 flex flex-col justify-around md:justify-between items-center">
            <div className="flex flex-col space-y-5 w-full">
              <h1 className="text-lg font-semibold">Uploading</h1>

              <div className="w-full flex justify-center items-center space-x-5">
                <GrDocumentPdf size={50} />

                <div className="flex flex-col space-y-3 w-full">
                  <p>resume.pdf 7.8mb</p>

                  <div className="w-full bg-[#FFF1C6] rounded-full  ">
                    <div
                      className="bg-[#FFD05B] text-xs  text-black text-center  leading-none rounded-full"
                      style={{ width: '75%' }}
                    >
                      {' '}
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <hr />

              <div
                className="w-full flex justify-center md:justify-end md:mt-4 "
                onClick={() => setIsContinue(true)}
              >
                <p className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer bg-[#E9F358] ">
                  Continue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Modal  */}
      <div
        className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isContinue ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'} `}
      >
        <div
          className="   z-[10] w-full max-w-[1000px] shadow-xl
                        h-screen md:h-[667px] bg-white rounded-lg"
        >
          <div className="flex justify-between items-center p-5">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl font-semibold">Verify your contact information</h1>
              <p className="text-sm text-[#6B7588]">Verify your contact information</p>
            </div>

            <IoMdClose size={30} onClick={() => setIsContinue(false)} className="cursor-pointer" />
          </div>

          <hr />

          <div className="w-full flex flex-col space-y-4  p-4">
            <div className="w-full grid grid-cols-2 gap-3">
              {/* first name  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">First Name</label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* last name  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Last Name</label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Phone No  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Phone Number</label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="text"
                  placeholder="Enter your phone no"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Email  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Email</label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            {/* sponsership  */}
            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="">Visa Sponsorship</label>
                <span className="text-red-500">*</span>
              </div>

              <select className="p-4 border border-[#EBEBF0] rounded-md">
                <option>Required</option>
                <option>Not Required</option>
              </select>
            </div>

            {/* Location  */}

            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="">Location</label>
                <span className="text-red-500">*</span>
              </div>

              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 border border-[#EBEBF0] rounded-md"
              />
            </div>

            <p className="text-[#6B7588]">
              Recruiters may search by location for candidates to hire better
            </p>
          </div>

          {/* Button submit  */}

          <div className="p-4">
            <div className="w-full flex justify-center md:justify-end md:mt-4">
              <Link to={'/additional-information'} className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer bg-[#E9F358] ">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;

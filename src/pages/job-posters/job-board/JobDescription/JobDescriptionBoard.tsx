import React from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import Select from 'react-select';
import { FaPlus } from 'react-icons/fa6';
const JobDescriptionBoard: React.FC = () => {
  const techStackOptions = [
    {
      value: 'Java',
      label: 'Java',
    },
    {
      value: 'React Js',
      label: 'React Js',
    },
    {
      value: 'Angular',
      label: 'Anfular',
    },
  ];
  return (
    <div className="w-full   md:pb-20 bg-[#F6F6F8]">
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
                    <TiTick />
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block">Job Basis</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full">
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

      <div className="max-w-[1080px] h-full rounded-lg mt-3   bg-white m-auto  pb-2">
        <div className="w-full max-w-[1064px] m-auto  flex flex-col space-y-5">
          {/* Form  */}

          <div className=" flex flex-col space-y-3">
            <div className="w-full flex flex-col space-y-3 p-2  ">
              {/* Pay range  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-xs">
                    Pay range
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <div className="w-full grid  sm:grid-cols-4 gap-3">
                  {/* Show pay by  */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex text-xs ">
                      <label htmlFor="">Show pay by</label>
                    </div>

                    <input
                      type="text"
                      placeholder="Range"
                      className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                    />
                  </div>

                  {/* Min
                   */}

                  <div className="flex flex-col space-y-2">
                    <div className="flex text-xs ">
                      <label htmlFor="">Minimum</label>
                    </div>

                    <input
                      type="email"
                      placeholder="Per hour"
                      className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                    />
                  </div>

                  {/* Max  */}

                  <div className="flex flex-col space-y-2">
                    <div className="flex text-xs ">
                      <label htmlFor="">Maximum</label>
                    </div>

                    <input
                      type="email"
                      placeholder="Max"
                      className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex text-xs ">
                      <label htmlFor="">Rate</label>
                    </div>

                    <input
                      type="text"
                      placeholder="Range"
                      className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                    />
                  </div>
                </div>
              </div>

              {/* Job Description  */}
              <div className="w-full flex flex-col space-y-1 ">
              <div className="flex ">
                  <label htmlFor="" className="text-xs">
                  Job description
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <p className="text-[10px] text-[#6B7588]">
                  You can add description by the help of AI
                </p>

                <div className="flex flex-col w-full  border ">
                  <div className="flex justify-end items-center p-1 bg-[#F2F2F5]">
                    <p className="w-32  h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full font-[500]">
                      Ask AI to generate
                    </p>
                  </div>

                  <textarea className="w-full  text-[10px] p-2 min-h-60 text-[#3A3A3C] tracking-wide">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years
                    old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                    Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </textarea>
                </div>
              </div>

              <div className="w-full grid ">
                {/* Tech stack  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Work Stack
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select options={techStackOptions} isMulti className="text-xs text-[#9CA3AF]" />
                </div>
              </div>

              <div className="w-full grid gap-3 ">
                {/* Benefits  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Benefits
                    </label>
                    
                  </div>

                  <Select options={techStackOptions} isMulti className="text-xs text-[#9CA3AF]" />
                </div>

                <div className="w-full min-h-32 border rounded-lg flex flex-col space-y-4 p-2">
                  <p className="text-xs ">Suggested Benefits to add</p>
                  <div className="w-full grid grid-cols-2 sm:grid-cols-4  md:grid-cols-6 gap-5 place-items-center">
                    {Array.from({ length: 9 }).map((_, id) => {
                      return (
                        <div
                          key={id}
                          className="w-full max-w-32 p-1 rounded-lg flex justify-center items-center space-x-2 border border-[#104B53] "
                        >
                          <FaPlus size={10} />
                          <p className="text-[10px] text-[#104B53]">Visa Sponsorship</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="w-full grid gap-3 ">
                {/* Additional questions  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-sm font-[500]">
                      Additional Screening Questions
                    </label>
                  </div>

                  <div className="w-full grid ">
                    {/*     question 1  */}
                    <div className="flex flex-col space-y-2">
                      <div className="flex ">
                        <label htmlFor="" className="text-xs">
                          1. Question
                        </label>
                        
                      </div>

                      <input
                        type="text"
                        placeholder="Add question"
                        className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                      />
                    </div>


             
                  </div>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Question Type  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Question Type
                    </label>
                    
                  </div>

                  <select className='p-2 border border-[#EBEBF0] rounded-md outline-none text-[] text-xs'>
                        <option value="yes">yes</option>
                        <option value="no">no</option>


                  </select>
                    
                </div>

                {/* Ideal Answer  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Ideal Answer
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <select className='p-2 border border-[#EBEBF0] rounded-md outline-noen text-[] text-xs'>
                        <option value="yes">yes</option>
                        <option value="no">no</option>


                  </select>
                    
                </div>

                <div className='flex items-center space-x-4'>
                    <input type="checkbox" className='w-7 h-7' name="qualitifcation" id="" />
                    <label htmlFor="qualitifcation" className='text-sm font-[400]'>Must have qualification</label>
                </div>
              </div>
            </div>
          </div>

          {/* buttons  */}

          <div className="flex w-full  justify-between md:justify-end items-center  space-x-4">
            <Link
              to={''}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer    text-[#104B53]"
            >
              Back
            </Link>
            <Link
              to={'/job-poster/company-profile'}
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

export default JobDescriptionBoard;

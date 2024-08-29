import React, { useEffect, useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { reviewInfo } from '../../../config/reviewinfo';
import { BiPlus } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ReviewInfo: React.FC = () => {
  const [details, setDetails] = useState<reviewDetailsTypes[]>([]);
  useEffect(() => {
    setDetails(reviewInfo);
  }, []);

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
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
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
                  <span className="me-2 p-2 w-10 flex justify-center items-center md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden text-[#104B53]   md:block"> Additional Information</p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2 p-2 w-10 md:w-10 h-10 bg-[#104B53] text-white rounded-full">
                  3
                </span>
                <p className="hidden md:block"> Review</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] h-full rounded-lg   bg-white m-auto p-4 mt-10">
        <div className="w-full max-w-[1064px] m-auto pt-10 flex flex-col space-y-5">
          {/* Detal of Candidate  */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Detail of Candidate</h1>
            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-2">
                <FaEdit color="#104B53" />
                <p className="text-[#104B53]">Edit</p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {details?.map((item, id) => {
                  return (
                    <div className="flex flex-col space-y-2" key={id}>
                      <p className="text-[#838383]">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summery  */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Summery</h1>
            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-2">
                <FaEdit color="#104B53" />
                <p className="text-[#104B53]">Edit</p>
              </div>
              <p className="text-[#535354] text-base">
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

          {/* work experience  */}

          <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
                Work Experience (Total 4 years 4 months of experience)
              </h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-4">
                <div className="flex items-center  ">
                  <FaEdit color="#104B53" />
                  <p className="text-[#104B53]">Edit</p>
                </div>

                <div className="flex items-center ">
                  <MdDeleteOutline color="#104B53" />
                  <p className="text-[#104B53]">Delete</p>
                </div>
              </div>

              <div className="flex flex-col space-y-5 ">
                <div className="flex flex-col space-y-4">
                  <h1 className="text-lg font-semibold">Java Fullstack</h1>
                  <p className="text-[#6B7588]">xyz Company - Texas, United States</p>
                  <div className="flex space-x-3 flex-wrap  items-center w-full">
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                      Health Care
                    </p>
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                      Full Time
                    </p>
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                      12/2022 - Present
                    </p>
                  </div>
                </div>



                <div className='flex flex-col space-y-4 '>

                    <h1 className='text-lg '>Job summery</h1>
                    <ul className='flex flex-col space-y-3'>
                        <li className='text-[#3A3A3C]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>

                        <li className='text-[#3A3A3C]'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                    </ul>
                </div>




              </div>

               
            </div>
          </div>



                {/* Education  */}

                <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
                Education
              </h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-4">
                <div className="flex items-center  ">
                  <FaEdit color="#104B53" />
                  <p className="text-[#104B53]">Edit</p>
                </div>

                <div className="flex items-center ">
                  <MdDeleteOutline color="#104B53" />
                  <p className="text-[#104B53]">Delete</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col space-y-4">
                  <h1 className="text-lg font-semibold">BE Computer Science</h1>
                  <p className="text-[#6B7588]">xyz Collage- Texas, United State</p>
                  <div className="flex space-x-3 items-center">
                    <p className="text-[#7C8596] bg-[#F2F2F5] p-3 rounded-full font-semibold text-xs">
                    07/2016 - 06/2020
                    </p>
                     
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>



          {/* Certification  */}
          <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
                Ceritification
              </h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              

              <div className='w-full max-w-[765px] h-[100px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              '>
                    <p>Added certificate will be shown here</p>
              </div>
            </div>
          </div>


 
  {/* more sections  */}
          <div className="flex space-x-2 justify-start items-center">
                <FaPlus color="#104B53" size={20} />
                <p className="text-[#104B53] text-lg font-semibold cursor-pointer">
                  Add More Section
                </p>
          </div>



          {/* buttion  */}
            
            <div className='flex flex-col space-y-5 md:flex-row justify-between items-center pb-10'>
                <p className='text-[#7D8697]'>you can edit or modify the profile later in (profile)</p>
                <div className="flex w-full  justify-between md:justify-end items-center  space-x-4">
            <Link to={'/additional-information'} className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer border border-[#104B53] text-[#104B53]">Back</Link>
            <Link  to={''} className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer bg-[#E9F358] ">
              Submit
            </Link>
          </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;

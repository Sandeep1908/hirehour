import React, { useEffect, useState } from 'react';

import { IoSearchOutline } from 'react-icons/io5';
import { SlLocationPin } from 'react-icons/sl';

import { ResourseCard } from '../../config/home';
import { BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  const [homeCards, setHomeCards] = useState<HomeCardTypes[]>();

  useEffect(() => {
    setHomeCards(ResourseCard);
  }, []);

  return (
    <>
    
    <div className="w-full mb-10 ">
      <div className="bg-[#104B53]">
        <div className="w-full max-w-[1200px]  m-auto p-2 md:p-10 ">
          {/* Top Heading  */}

          <div className="w-full max-w-3xl flex flex-col space-y-4">
            <h1 className=" relative text-4xl text-white font-bold">
              Find Your Perfect
              <span className="text-[#E9F358] ml-1 mr-1  relative box  ">Job or Post</span>
              One Today!
            </h1>
            <p className="text-sm text-white">
              Discover top opportunities and connect with talent on HireHours – your go-to platform
              for seamless job searching and posting.
            </p>
          </div>

          {/* Search Job Area  */}

          <div className="w-full mt-10 grid  md:grid-cols-4  gap-5  ">
            {/* Left Search  */}
            <div className="w-full  bg-white  md:col-span-3  p-4 rounded-lg  ">
              <div className="flex space-x-2 ">
                <span className="text-[#146085] text-2xl font-[500]">1000 + Jobs </span>
                <span className="text-2xl font-[600]">Listed here ! Your dream job is waiting</span>
              </div>

              <div className="border-[#E7E7E7] border w-full mt-5 rounded-lg flex  justify-center items-center ">
                <div className="flex md:ustify-start p-4 justify-center   items-center flex-wrap">
                  <div className="relative">
                    <input
                      type="text"
                      className="p-4 ml-1 w-72 text-xs text-black outline-none  placeholder:text-xs"
                      placeholder="Company name, job Tittle or keywords"
                    />

                    <IoSearchOutline
                      color="#8D8D8D"
                      size={14}
                      className="absolute top-[16px] ml-1 "
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      className="p-4 ml-1 w-64 text-xs text-black outline-none  placeholder:text-xs"
                      placeholder="City, state, zip code or remote"
                    />
                    <SlLocationPin
                      color="#8D8D8D"
                      size={12}
                      className="absolute top-[18px] ml-1 "
                    />
                  </div>

                  <div className="mr-3">
                    <select
                      name=""
                      id=""
                      className="text-xs text-[#C6C6C6] border-[#C6C6C6]  p-2 rounded-full border-[1px] outline-none"
                    >
                      <option>Remote</option>
                      <option>Hybrid</option>

                      <option>On-Site</option>
                    </select>
                  </div>

                  <div className="mr-2">
                    <Link to={'/searchjob'}>
                    <button className=" bg-[#E9F358] flex justify-center items-center text-[#104B53] w-28 h-9 rounded-full text-sm font-[500] cursor-pointer">
                      Search
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Upload  */}
            <div className="bg-white w-full    space-y-4 p-3  flex justify-center items-center flex-col rounded-lg ">
              <div className="flex flex-col  space-x-2 text-center ">
                <span className="text-[#146085] text-lg font-[500]">Upload Your Resume - </span>
                <span className="text-sm ">Let employers find you</span>
              </div>

              {/* upload button  */}
              <Link to='/upload-resume'
                className={`flex justify-center items-center w-36 h-7 p-0.5 rounded-full cursor-pointer bg-[#E9F358]   `}
              >
                <BsUpload size={13} color="#104B53" className="" />
                <span className={`text-xs text-[#104B53]  font-[500] pl-2`}>Upload Resume</span>
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-[#88A5A9] text-xs">
              {' '}
              <span className="text-white font-[500]">Popular:</span> Java Developer, UI/UX
              Designer, Data Engineer, Business Associate
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
                <div className="flex flex-col justify-center items-center max-w-80 h-96 " key={id}>
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
    <Footer/>
    </>
  );
};

export default Home;

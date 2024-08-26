import React from 'react';
import search_icon from '../../assets/search-icon.svg';
import arrow_down from '../../assets/arrow-down.svg';
import Location from '../../assets/location.svg';
import Location2 from '../../assets/location2.svg';
import SearchFilter from '../../components/SearchFilter';
import JobCard from '../../components/JobCard';
import Job_banner from '../../assets/Rectangle.png';
import icon from '../../assets/Employers Logo.svg';

const JobDescription: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full max-w-[1280px] h-[190px] m-auto rounded-xl shadow-lg p-5">
        <div className="w-full h-[80px] border-2 border-[##DFDFDF] rounded-xl flex justify-between px-4">
          <div className="flex justify-center items-center gap-2">
            <img src={search_icon} alt="" />
            <p className="font-normal text-[#3A3A3C]">UI/UX Designer</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={Location} alt="" />
            <p className="font-normal text-[#3A3A3C]">Allen, TX, US</p>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
              <p className="text-[14px] font-normal text-[#114B53]">Remote</p>
              <img src={arrow_down} alt="" />
            </div>
            <div className="w-[363px] py-3  flex justify-center bg-[#114B53] rounded-full">
              <p className="text-white font-semibold">Search</p>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-4 gap-3">
          <SearchFilter />
          <SearchFilter />
          <SearchFilter />
          <SearchFilter />
          <SearchFilter />
          <SearchFilter />
        </div>
      </div>

      <div className="w-full max-w-[1280px] m-auto h-auto flex justify-between pt-7">
        <div className="max-w-[411px] w-full ">
          <p className="text-[14px] ">
            <span className="font-extrabold">Upload Your Resume -</span> Let employers find you.
          </p>
          <p className="text-[14px] mt-5 ">
            <span className="font-extrabold"> 400+ Jobs</span> showing result for UI/UX Jobs ,
            Allen, TX, US
          </p>
          <div className="mt-4 flex flex-col gap-4">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
        <div className="max-w-[845px] w-full rounded-lg ">
          <div className="w-full">
            <img src={Job_banner} alt="" />
            <div className="w-[95%] m-auto">
              <div className=" flex  justify-between ">
                <div className="flex gap-2 items-center">
                  <div className="relative w-[100px] h-[100px] ">
                    <img className="absolute top-[-20px]  w-full h-full" src={icon} alt="" />
                  </div>
                  <div>
                    <p className="font-bold text-[24px]">UI/UX Designer</p>
                    <ul className="flex list-disc gap-8 text-base mt-1">
                      <li>Figma</li>
                      <li>Software</li>
                      <li>Allen, Texas, US</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <p className="text-[#A9A9A9] text-[12px] font-normal ">Posted 1 day ago</p>
                  <div className=" px-6 py-3 bg-[#E9F358] rounded-full">
                    <p className="text-[#114B53] text-base font-semibold">Quick Apply</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <img src={Location2} alt="" />
                  <div className=" px-4 py-1 bg-[#F2F2F5] rounded-full">
                    <p className="text-[14px]">Hybrid</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Location2} alt="" />
                  <div className=" px-4 py-1 bg-[#F2F2F5] rounded-full">
                    <p className="text-[14px]">$58-$68 / hours</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img src={Location2} alt="" />
                  <div className=" px-4 py-1 bg-[#F2F2F5] rounded-full">
                    <p className="text-[14px]">Mid Senior level</p>
                  </div>
                </div>
              </div>

              <div className="">
                <p className="text-[14px] font-semibold">Tech Stacks</p>

                <div className="flex gap-2 mt-1">
                  <div className="px-4 py-1 bg-[#CAFDFC] rounded-full">
                    <p className="text-[14px] font-semibold">Figma </p>
                  </div>
                  <div className="px-4 py-1 bg-[#CAFDFC] rounded-full">
                    <p className="text-[14px] font-semibold">Adobe Creative suit</p>
                  </div>
                  <div className="px-4 py-1 bg-[#CAFDFC] rounded-full">
                    <p className="text-[14px] font-semibold">Design Thinking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;

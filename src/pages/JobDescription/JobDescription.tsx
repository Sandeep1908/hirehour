import React, { useState } from 'react'
import search_icon from '../../assets/search-icon.svg'
import arrow_down from '../../assets/arrow-down.svg'
import Location from '../../assets/location.svg'
import Location2 from '../../assets/location2.svg'
import SearchFilter from '../../components/SearchFilter'
import JobCard from '../../components/JobCard'
import Job_banner from '../../assets/Rectangle.png'
import icon from '../../assets/Employers Logo.svg'
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";





const JobDescription: React.FC = () => {

    const [infoContentHidden,SetInfoContentHidden] = useState<boolean>(false);


    return (
        <div className='w-full h-full pb-10'>
            <div className='hidden md:block w-full max-w-[1280px] h-[190px] m-auto rounded-xl shadow-lg p-5'  >
                <div className='w-full h-[80px] border-2 border-[##DFDFDF] rounded-xl flex justify-between px-4'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={search_icon} alt="" />
                        <p className='font-normal text-[#3A3A3C]'>UI/UX Designer</p>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Location} alt="" />
                        <p className='font-normal text-[#3A3A3C]'>Allen, TX, US</p>
                    </div>
                    <div className='flex justify-center items-center gap-4 '>
                        <div className='flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full'>
                            <p className='text-[14px] font-normal text-[#114B53]'>Remote</p>
                            <img src={arrow_down} alt="" />
                        </div>
                        <div className='w-[363px] py-3  flex justify-center bg-[#114B53] rounded-full'>
                            <p className='text-white font-semibold'>Search</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex mt-4 gap-3'>
                    <SearchFilter />
                    <SearchFilter />
                    <SearchFilter />
                    <SearchFilter />
                    <SearchFilter />
                    <SearchFilter />
                </div>
                
            </div>

            <div className='w-full max-w-[1280px] m-auto h-auto flex justify-center md:justify-between pt-7  md:px-0'>
                <div className='w-[343px] md:max-w-[411px] md:w-full '>
                <div className=' w-full h-[800px] overflow-x-hidden overflow-y-auto '>
                    <p className='text-[14px] '><span className='font-extrabold'>Upload Your Resume -</span> Let employers find you.</p>
                    <p className='text-[14px] mt-5 '><span className='font-extrabold'> 400+ Jobs</span> showing result for UI/UX Jobs , Allen, TX, US</p>
                    <div className='mt-4 flex flex-col gap-4 justify-center'>
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                    </div>
                </div>
                <div className=''>
                    <div className='flex gap-28 justify-end mt-4'>
                        <div className='flex gap-2'>
                            <div className='w-[30px] h-[30px] rounded-lg bg-[#F2F2F5] flex justify-center items-center'>
                               <p className='text-base text-[#114B53] '>1</p>
                            </div>
                            <div className='w-[30px] h-[30px] rounded-lg  flex justify-center items-center'>
                               <p className='text-base text-[#6B7588] '>2</p>
                            </div>
                            <div className='w-[30px] h-[30px] rounded-lg  flex justify-center items-center'>
                               <p className='text-base text-[#6B7588] '>3</p>
                            </div>
                        </div>
                        <div className='flex gap-2 justify-center items-center'>
                        <p className='text-base text-[#6B7588] '>Next</p>       
                        <FaArrowRight className='text-[#6B7588]' />
   
                                      </div>
                    </div>
                </div>
                </div>
              
                <div className='hidden md:block max-w-[845px] w-full rounded-lg  border'>
                    <div className='w-full shadow-lg pb-8'>

                        <img src={Job_banner} alt="" />
                        <div className='w-[95%] m-auto'>
                            <div className=' flex  justify-between '>
                                <div className='flex gap-2 items-center'>
                                    <div className='relative w-[100px] h-[100px] '>

                                        <img className='absolute top-[-20px]  w-full h-full' src={icon} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-bold text-[24px]'>UI/UX Designer</p>
                                        <ul className='flex list-disc gap-8 text-base mt-1'>
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

                           <div className={`h-auto ${infoContentHidden ===false ?"hidden":""}`}>
                          <div className='flex h-auto '>
                          <div className='flex flex-col gap-4 mt-2 max-w-[350px] w-full'>

                                
                                <div className='flex gap-2'>
                                    <img src={Location2} alt="" />
                                    <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[14px]'>Hybrid</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={Location2} alt="" />
                                    <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[14px]'>$58-$68 / hours</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={Location2} alt="" />
                                    <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[14px]'>Mid Senior level</p>
                                    </div>
                                </div>
                              

                            </div>

                            <div className='border  bg-[#D6DBDE] '>

                            </div>
                            

                            <div className='flex flex-col  gap-7 ml-4 justify-center'>
                            
                                <div className=''>

                                    <p className='text-[14px] text-[#3A3A3C] font-semibold'>Employment Type</p>

                                    <div className='flex gap-2 mt-3'>

                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[14px] text-[#3A3A3C] font-medium'>Crop to Crop </p>
                                        </div>
                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[14px] text-[#3A3A3C] font-medium'>Contract to Hire </p>
                                        </div>
                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[14px] text-[#3A3A3C] font-medium'>Contract W2 </p>
                                        </div>
                                     

                                    </div>

                                    </div>

                               


                                <div className=''>

                                    <p className='text-[14px] text-[#3A3A3C] font-semibold'>Accepting Work Authorization    </p>

                                    <div className='flex gap-2 mt-3'>

                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[14px] text-[#3A3A3C] font-medium'>H1 Visa </p>
                                        </div>
                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[14px] text-[#3A3A3C] font-medium'>Greencard </p>
                                        </div>
                                    </div>

                                    </div>

                            

                            </div>
                          </div>

                            <div className='mt-8'>


                                <p className='text-[14px] font-semibold'>Tech Stacks</p>

                                <div className='flex gap-2 mt-1'>

                                    <div className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                        <p className='text-[14px] font-semibold'>Figma </p>
                                    </div>
                                    <div className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                        <p className='text-[14px] font-semibold'>Adobe Creative suit</p>
                                    </div>
                                    <div className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                        <p className='text-[14px] font-semibold'>Design Thinking</p>
                                    </div>

                                </div>

                            </div>
                           </div>
                          

                            <div className='w-full flex justify-center items-center mt-4' >
                            <FaChevronUp className={`${!infoContentHidden ?"hidden":""}`} onClick={()=>{SetInfoContentHidden(!infoContentHidden)}} />

                            <FaChevronDown className={`${infoContentHidden ?"hidden":""}`} onClick={()=>{SetInfoContentHidden(!infoContentHidden)}} />

                            </div>



                        </div>
                    </div>

                    <div className='p-5 overflow-x-hidden overflow-y-auto h-[550px]'>
                        <p className='text-[20px] font-semibold'>Summary</p>
                        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p className='text-[20px] font-semibold mt-3'>Job description</p>
                        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p className='text-[20px] font-semibold mt-3'>Additional benefits</p>
                        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p className='text-[20px] font-semibold mt-3'>Notes</p>
                        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <div className='w-full flex justify-between items-center mt-10'>
                <p className='text-[#8F90A6] text-[14px] font-normal '>Posted 1 day ago</p>
                 <div className=' px-6 py-2 bg-[#114B53] rounded-full'>
                    <p className='text-white text-base font-semibold'>Report</p>
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

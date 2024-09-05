import React, { useEffect, useState } from 'react'
import search_icon from '../../assets/search-icon.svg'
import Location from '../../assets/location.svg'
import Location2 from '../../assets/location2.svg'
import JobCard from '../../components/JobCard'
import Job_banner from '../../assets/Rectangle.png'
import icon from '../../assets/Employers Logo.svg'
import { FaChevronUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io'
import Logo from '../../assets/logo/hirehour.png';
import { LuUpload } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from 'react-icons/io5'
import Footer from '../../components/Footer'










const JobDescription: React.FC = () => {

    const [infoContentHidden, SetInfoContentHidden] = useState<boolean>(false);
    const [isQuickApply, setQuickApply] = useState<boolean>(false);
    const [isQuickApplyStep2, setQuickApplyStep2] = useState<boolean>(false);
    const [isQuickApplyStep3, setQuickApplyStep3] = useState<boolean>(false);
    const [isQuickApplyEdit, setQuickApplyEdit] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [dropdownLoc, setDropdownLoc] = useState<boolean>(false);
    const [dropdownExp, setDropdownExp] = useState<boolean>(false);
    const [dropdownDis, setDropdownDis] = useState<boolean>(false);
    const [dropdownEmp, setDropdownEmp] = useState<boolean>(false);
    const [dropdownSly, setDropdownSly] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            SetInfoContentHidden(false);
          } else {
            SetInfoContentHidden(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    const step2 =()=>{
        setQuickApply(false);
        setQuickApplyStep2(true);
        setQuickApplyEdit(false);
    }
    const step3 =()=>{
        setQuickApplyStep2(false);
        setQuickApplyStep3(true)
    }
    const editPop =()=>{
        setQuickApplyStep2(false);
        setQuickApplyEdit(true)
    }
    const backToStep =()=>{
        setQuickApplyStep2(false);
        setQuickApply(true)
    }
    const quickApplyDone =()=>{
        setQuickApplyStep3(false);
    }


    return (
        <>

        <div className='w-full h-full pb-10 bg-white'>
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
                        <div className='relative'>


                            <div onClick={() => { setDropdownLoc(!dropdownLoc) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                                <p className="text-[14px] font-normal text-[#114B53]">Remote</p>
                                {/* <img src={arrow_down} alt="" /> */}
                                <MdOutlineKeyboardArrowDown
                                    className={`${dropdownLoc ? 'rotate-180 transition-all duration-500' : ''}`}
                                />
                            </div>
                            {dropdownLoc ?
                                <div className='absolute top-12 left-0 w-[302px] h-5 '>

                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg py-2' >
                                        <div className='w-full px-6 py-3 flex gap-2 '>

                                            <input type="radio" name="value1" id="" />
                                            <label htmlFor="" className='text-[#333333] text-base font-semibold'>All Jobs   </label>
                                        </div>
                                        <div className='w-full px-6 py-3 flex gap-2 '>

                                            <input type="radio" name="value1" id="" />
                                            <label htmlFor="" className='text-[#333333] text-base font-semibold'>Remote jobs</label>
                                        </div>
                                        <div className='w-full px-6 py-3 flex gap-2 '>

                                            <input type="radio" name="value1" id="" />
                                            <label htmlFor="" className='text-[#333333] text-base font-semibold'>Hybrid jobs</label>
                                        </div>
                                        <div className='w-full px-6 py-3 flex gap-2 '>

                                            <input type="radio" name="value1" id="" />
                                            <label htmlFor="" className='text-[#333333] text-base font-semibold'>onsite jobs</label>
                                        </div>
                                    </div>

                                </div> : ""}

                        </div>
                        <div className='w-[363px] py-3  flex justify-center bg-[#114B53] rounded-full'>
                            <p className='text-white font-semibold'>Search</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex mt-4 gap-3'>
                    {/* <SearchFilter /> */}

                    <div className='relative'>


                        <div onClick={() => { setDropdown(!dropdown) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                            <p className="text-[14px] font-normal text-[#114B53]">24 hours</p>
                            {/* <img src={arrow_down} alt="" /> */}
                            <MdOutlineKeyboardArrowDown
                                className={`${dropdown ? 'rotate-180 transition-all duration-500' : ''}`}
                            />
                        </div>
                        {dropdown ?
                            <div className='absolute top-12 left-0 w-[140px] h-5 '>

                                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg' >
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 hours</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Past 3 days</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Past week</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Past Month</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Anytime</label>
                                    </div>

                                </div>

                            </div> : ""}

                    </div>


                    <div className='relative'>


                        <div onClick={() => { setDropdownExp(!dropdownExp) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                            <p className="text-[14px] font-normal text-[#114B53]">Experience Level</p>
                            {/* <img src={arrow_down} alt="" /> */}
                            <MdOutlineKeyboardArrowDown
                                className={`${dropdownExp ? 'rotate-180 transition-all duration-500' : ''}`}
                            />
                        </div>
                        {dropdownExp ?
                            <div className='absolute top-12 left-0 w-[194px] h-5 '>

                                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg' >
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Entry level</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Associate level</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Mid-Senior level</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Lead level</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Manager/ Director Level</label>
                                    </div>

                                </div>

                            </div> : ""}

                    </div>


                    <div className='relative z-[20]'>


                        <div onClick={() => { setDropdownEmp(!dropdownEmp) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                            <p className="text-[14px] font-normal text-[#114B53]">Employment type</p>
                            {/* <img src={arrow_down} alt="" /> */}
                            <MdOutlineKeyboardArrowDown
                                className={`${dropdownEmp ? 'rotate-180 transition-all duration-500' : ''}`}
                            />
                        </div>
                        {dropdownEmp ?
                            <div className='absolute top-12 left-0 w-[269px] h-5 '>

                                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg' >
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Full time</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Contract - Corp to Corp(C2C)</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Contract to Hire(C2H)</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Contract - W-2</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Contract - 1099 / Independent</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Internships</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Temporary</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="checkbox" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Part time</label>
                                    </div>

                                </div>

                            </div> : ""}

                    </div>


                    <div className='relative z-[20]'>


                        <div onClick={() => { setDropdownDis(!dropdownDis) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                            <p className="text-[14px] font-normal text-[#114B53]">Distance</p>
                            {/* <img src={arrow_down} alt="" /> */}
                            <MdOutlineKeyboardArrowDown
                                className={`${dropdownDis ? 'rotate-180 transition-all duration-500' : ''}`}
                            />
                        </div>
                        {dropdownDis ?
                            <div className='absolute top-12 left-0 w-[194px] h-5 '>

                                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg' >
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Any distance</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Less than 5 miles</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Less than 10 miles</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Less than 25 miles</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Less than 50 miles</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>Less than 100 miles</label>
                                    </div>

                                </div>

                            </div> : ""}

                    </div>

                    <div className='relative z-[20]'>


                        <div onClick={() => { setDropdownSly(!dropdownSly) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                            <p className="text-[14px] font-normal text-[#114B53]">Salary</p>
                            {/* <img src={arrow_down} alt="" /> */}
                            <MdOutlineKeyboardArrowDown
                                className={`${dropdownSly ? 'rotate-180 transition-all duration-500' : ''}`}
                            />
                        </div>
                        {dropdownSly ?
                            <div className='absolute top-12 left-0 w-[194px]  '>

                                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg' >
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 40,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 60,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 80,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 100,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 120,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 140,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 160,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 180,000 +/ per year</label>
                                    </div>
                                    <div className='w-full px-4 py-3 flex gap-2 '>

                                        <input type="radio" name="value1" id="" />
                                        <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>$ 200,000 +/ per year</label>
                                    </div>

                                </div>

                            </div> : ""}

                    </div>

                    <div  className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                                <p className="text-[14px] font-normal text-[#114B53]">Quick Apply</p>
                            </div>
                  
                    <div  className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                                <p className="text-[14px] font-normal text-[#114B53]">Visa Sponsorship</p>
                            </div>
                            <div  className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                                <p className="text-[14px] font-normal text-[#114B53]">All Filters</p>
                                <CiFilter className='text-[#114B53]' />

                            </div>



                </div>

            </div>

            <div className='w-full max-w-[1280px] m-auto h-auto flex justify-center md:justify-between pt-7  md:px-0'>
                <div className=' md:max-w-[411px] md:w-full '>
                    <div className=' w-full h-[800px] overflow-y-auto'>
                        <p className='text-[14px] '><span className='font-extrabold'>Upload Your Resume -</span> Let employers find you.</p>
                        <p className='text-[14px] mt-5 '><span className='font-extrabold'> 400+ Jobs</span> showing result for UI/UX Jobs , Allen, TX, US</p>
                        <div className='mt-4 flex flex-col gap-4 justify-center'>
                            <JobCard  setIsOpen={setQuickApply} />
                            <JobCard  setIsOpen={setQuickApply}  />
                            <JobCard  setIsOpen={setQuickApply}  />
                            {/* <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard /> */}
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
                        <div className='w-[95%] m-auto transition-all ease-in-out duration-1000'>
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

                            <div className={` transition-all ease-in-out duration-700  ${infoContentHidden?'h-[200px]':'h-0'}  `}>
                                <div className={`flex h-auto relative transition-all delay-500  ${infoContentHidden ?'opacity-1':'opacity-0 z-[-30]'}   `}>
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


                                    <div className={`flex flex-col  gap-7 ml-4 justify-center ${infoContentHidden ?'opacity-1':'opacity-0 z-[-30]'} `}>

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

                                <div className={`mt-8 delay-300  ${infoContentHidden ?'opacity-1':'opacity-0 z-[-30]'} `}>

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
                                <FaChevronUp className={`${!infoContentHidden ? "hidden" : ""}`} onClick={() => { SetInfoContentHidden(!infoContentHidden) }} />

                                <FaChevronDown className={`${infoContentHidden ? "hidden" : ""}`} onClick={() => { SetInfoContentHidden(!infoContentHidden) }} />

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



{/* Step 1 */}
    <div
        className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isQuickApply ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
          <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
        <div className='max-w-[1055px] w-full bg-white rounded-lg overflow-auto z-[30]'>
            <div className=' p-10 flex justify-between items-center'>
                 <p className='text-2xl font-bold'>Apply to xyz Company</p>
                 <IoMdClose size={30} onClick={()=>{setQuickApply(false)}}  className="cursor-pointer" />
            </div>
            <hr />
            <div className='w-full p-10'>


            <div className="w-full flex justify-between items-center">
                <div className='w-[167px] flex justify-center items-center gap-2'>
                    <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                        <p className='text-base text-white font-semibold'>1</p>
                    </div>
                    <p className='text-[12px] font-medium text-[#114B53]'>Screening Questions</p>
                </div>
                <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#C7C9D9]'>

                </div>
                <div className='w-[167px] flex justify-center items-center gap-2'>
                    <div className='w-10 h-10 bg-[#C7C9D9] rounded-full flex justify-center items-center'>
                        <p className='text-base text-white font-semibold'>2</p>
                    </div>
                    <p className='text-[12px] font-medium text-[#C7C9D9]'>Review Application</p>
                </div>
                <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#C7C9D9]'>

</div>
                <div className='w-[167px] flex justify-center items-center gap-2'>
                    <div className='w-10 h-10 bg-[#C7C9D9] rounded-full flex justify-center items-center'>
                        <p className='text-base text-white font-semibold'>3</p>
                    </div>
                    <p className='text-[12px] font-medium text-[#C7C9D9]'>Applied Successfully</p>
                </div>
            </div>


                <p className='text-xl font-semibold mt-5'>
                Screening Questions
                </p>
                <p className='text-[12px] font-normal mt-2'>
                Answer the Screening questions
                </p>

                <div className='mt-5'>
                    <label htmlFor="" className='text-base font-medium'>How many years of experience do you have in Java ? ( in years) <span className='text-red-600'> *</span></label>
                    <input type="text" className='w-full h-[48px] mt-2 border-[1px] rounded-lg' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-base font-medium'>Can you able to Relocate the Job Location ? <span className='text-red-600'> *</span></label>
                    <input type="text" className='w-full h-[48px] mt-2 border-[1px] rounded-lg' />
                </div>
                <div className='mt-5'>
                    <label htmlFor="" className='text-base font-medium'>Immediate Joiner ? <span className='text-red-600'> *</span></label>
                    <input type="text" className='w-full h-[48px] mt-2 border-[1px] rounded-lg' />
                </div>

            </div>
            <hr />
            <div className='w-full flex justify-end p-10'>
                <div onClick={step2} className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer'>
                    <p className='text-base font-semibold text-[#114B53]'>Continue</p>
                </div>
            </div>
        </div>
      </div>
{/* Step 2 */}
    <div
        className={`w-full h-full flex overflow-scroll justify-center items-center fixed inset-0 transition-all duration-500 ${isQuickApplyStep2 ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
                  <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

                        <div className='z-[30] max-w-[1055px] w-full h-full bg-white rounded-lg overflow-auto relative top-[0px]'>
                            <div className=' p-10 flex justify-between items-center'>
                                <p className='text-2xl font-bold'>Apply to xyz Company</p>
                                <IoMdClose size={30} onClick={()=>{setQuickApplyStep2(false)}} className="cursor-pointer" />
                            </div>
                            <hr />
                            <div className='w-full p-10'>


                            <div className="w-full flex justify-between items-center">
                                    <div className='w-[167px] flex justify-center items-center gap-2'>
                                        <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                            <p className='text-base text-white font-semibold'>1</p>
                                        </div>
                                        <p className='text-[12px] font-medium text-[#114B53]'>Screening Questions</p>
                                    </div>
                                    <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#114B53]'>

                                    </div>
                                    <div className='w-[167px] flex justify-center items-center gap-2'>
                                        <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                            <p className='text-base text-white font-semibold'>2</p>
                                        </div>
                                        <p className='text-[12px] font-medium text-[#114B53]'>Review Application</p>
                                    </div>
                                    <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#C7C9D9]'>

                                   </div>
                                    <div className='w-[167px] flex justify-center items-center gap-2'>
                                        <div className='w-10 h-10 bg-[#C7C9D9] rounded-full flex justify-center items-center'>
                                            <p className='text-base text-white font-semibold'>3</p>
                                        </div>
                                        <p className='text-[12px] font-medium text-[#C7C9D9]'>Applied Successfully</p>
                                    </div>
                                </div>


                                <p className='text-xl font-semibold mt-5'>
                                Review your application
                                </p>
                                <p className='text-[12px] font-normal mt-2'>
                                Before Submit please review carefully
                                </p>

                            <div className='w-full mt-5'>
                                    <div className='w-full flex gap-5'>
                                            <div className='max-w-[411px] w-full border-[1px] border-[#D6DBDE] rounded-lg px-5 py-6'>
                                                <div className='flex justify-between items-center'>
                                                    <p className='text-[20px] font-semibold'>Personal Information</p>
                                                    <div onClick={editPop} className='cursor-pointer text-base font-semibold flex items-center gap-2 text-[#114B53]'><FaRegEdit />
                                                    <p>Edit</p></div>
                                                </div>
                                                <hr  className='mt-6'/>
                                                <div className='flex flex-col justify-center items-center mt-6'>
                                                    <div className='w-[100px] h-[100px] rounded-full bg-[#CBFFFC] flex justify-center items-center '>
                                                    <p className='text-[40px] font-extrabold'>J</p>
                                                    </div>
                                                    <p className='text-[20px] font-semibold mt-6'>John S Mathew</p>
                                                </div>
                                                <hr  className='mt-8'/>
                                                <div className='mt-4 flex items-center justify-between'>
                                                    <div className='flex items-center gap-2 '>
                                                    <MdOutlineMail size={20} />

                                                       <p className='text-[16px] font-medium text-[#3A3A3C] '>John@xyz.com</p>
                                                    </div>

                                                    </div> 
                                                    <div className='mt-4 flex items-center justify-between'>
                                                    <div className='flex items-center gap-2 '>
                                                    <IoCallOutline size={20} />

                                                       <p className='text-[16px] font-medium text-[#3A3A3C] '>+1 xxx-xxx-xxxx</p>
                                                    </div>

                                                    </div> 
                                                <p className='text-[14px] font-medium text-[#8F90A6] mt-4'>Visa sponsorship</p>
                                                <p className='text-[16px] font-semibold text-[#000000] mt-2'>Required</p>
                                            </div>
                                            <div className='max-w-[540px] w-full border-[1px] border-[#D6DBDE] rounded-lg px-5 py-6'>
                                               <div className='flex justify-between items-center'>
                                                    <p className='text-[20px] font-semibold'>Resume</p>
                                                      <div className='flex items-center gap-2'>
                                                        <p className='text-[#8F90A6] text-[12px]'>Pdf, Doc, DocX (2MB)</p>
                                                        <div className='text-base font-semibold flex items-center gap-2 px-2 py-1 border-2 border-[#114B53] rounded-full'> <LuUpload size={20} />
                                                        <p>upload resume</p>
                                                        </div>
                                                    </div> 
                                                </div>  
                                                <hr className='mt-5' /> 
                                                <div className='flex flex-col gap-4'>
                                                    <div className='w-full border-2 border-black rounded-xl flex'>
                                                        <div className='w-[95px] bg-[#E3EDFF] flex justify-center items-center rounded-tl-lg rounded-bl-lg'>
                                                            <p className='text-[#1F4AF1] text-base font-bold'>PDF</p>
                                                        </div>
                                                        <div className='w-full flex justify-between items-center px-3 py-2'>
                                                            <div>
                                                            <p className='text-black text-base font-medium'>Resume 1</p>
                                                            <p className='text-[#6B7588] text-[12px] font-medium mt-1'> Selected Resume</p>
                                                            </div>
                                                            <div className='flex gap-4'>
                                                            <p className='text-[#114B53] text-[12px] font-semibold'> Preview</p>
                                                            <RiDeleteBin6Line size={20} />


 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='w-full border-[1px] border-[#D1D1D1] rounded-xl flex'>
                                                        <div className='w-[95px] bg-[#E3EDFF] flex justify-center items-center rounded-tl-lg rounded-bl-lg'>
                                                            <p className='text-[#1F4AF1] text-base font-bold'>PDF</p>
                                                        </div>
                                                        <div className='w-full flex justify-between items-center px-3 py-2'>
                                                            <div>
                                                            <p className='text-black text-base font-medium'>Resume 1</p>
                                                            <p className='text-[#6B7588] text-[12px] font-medium mt-1'> Selected Resume</p>
                                                            </div>
                                                            <div className='flex gap-4'>
                                                            <p className='text-[#114B53] text-[12px] font-semibold'> Preview</p>
                                                            <RiDeleteBin6Line size={20} />


 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>             
                                            </div>
                                    </div>
                                <div className='w-full border-[1px] border-[#D6DBDE] rounded-lg px-10 py-6 mt-5'>
                                <div className='flex justify-between items-center'>
                                                    <p className='text-[20px] font-semibold'>Screening Questions</p>
                                                    <div onClick={backToStep} className=' cursor-pointer text-base font-semibold flex items-center gap-2 text-[#114B53]'><FaRegEdit />
                                                    <p>Edit</p></div>
                                                </div>
                                                <hr  className='mt-6'/>

                                                <p className='text-[#8F90A6] tex-[12px] font-normal mt-5'>How many years of experience do you have in Java ? ( in years)</p>
                                                <p className='text-[#000000] tex-base font-normal mt-2'>4 years</p>
                                                <p className='text-[#8F90A6] tex-[12px] font-normal mt-5'>Can you able to Relocate the Job Location ?</p>
                                                <p className='text-[#000000] tex-base font-normal mt-2'>Yes</p>

                                                <p className='text-[#8F90A6] tex-[12px] font-normal mt-5'>Immediate Joiner ?</p>
                                                <p className='text-[#000000] tex-base font-normal mt-2'>Yes</p>

                                </div>
                            </div>

                            </div>
                            <hr />
                            <div className='w-full flex justify-end p-10 gap-10  items-center'>
                                <p onClick={backToStep} className='cursor-pointer text-[#114B53] font-semibold text-base'> Back</p>
                                <div onClick={step3} className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                                    <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Continue</p>
                                </div>
                            </div>
                        </div>
      </div>

{/* Step 3 */}
    <div
        className={`w-full h-full flex overflow-scroll justify-center items-center fixed inset-0 transition-all duration-500 ${isQuickApplyStep3 ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
                  <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

                       
                        <div className='z-[30] max-w-[1055px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px]'>
            <div className=' p-10 flex justify-between items-center'>
                 <p className='text-2xl font-bold'>Apply to xyz Company</p>
                 <IoMdClose size={30} onClick={()=>{setQuickApplyStep3(false)}}  className="cursor-pointer" />
            </div>
            <hr />
            <div className='w-full p-10'>


                        <div className="w-full flex justify-between items-center">
                                    <div className='w-[167px] flex justify-center items-center gap-2'>
                                        <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                            <p className='text-base text-white font-semibold'>1</p>
                                        </div>
                                        <p className='text-[12px] font-medium text-[#114B53]'>Screening Questions</p>
                                    </div>
                                    <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#114B53]'>

                                    </div>
                                    <div className='w-[167px] flex justify-center items-center gap-2'>
                                        <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                            <p className='text-base text-white font-semibold'>2</p>
                                        </div>
                                        <p className='text-[12px] font-medium text-[#114B53]'>Review Application</p>
                                    </div>
                                    <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#114B53]'>

                                   </div>
                                    <div className='w-[167px] flex justify-center items-center gap-2'>
                                        <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                            <p className='text-base text-white font-semibold'>3</p>
                                        </div>
                                        <p className='text-[12px] font-medium text-[#114B53]'>Applied Successfully</p>
                                    </div>
                                </div>
          
            </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={Logo} alt="" />
                    <p className='text-[20px] font-semibold text-[#3A3A3C] mt-5'>Your application was submitted successfully to XYZ Company</p>
                    <p className='text-[14px] font-normal text-[#6B7588] mt-2'>You can track you application any time from my jobs</p>
                </div>
            
            <div className='w-full flex justify-center p-10'>
                <div onClick={quickApplyDone}  className='cursor-pointer bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full '>
                    <p className='text-base font-semibold text-[#114B53]'>Done</p>
                </div>
            </div>
                     </div>
      </div>


      
{/* Edit*/}
    <div
        className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isQuickApplyEdit ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
          <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
        <div className='max-w-[1055px] w-full bg-white rounded-lg overflow-auto z-[30]'>
            <div className=' p-10 flex justify-between items-center'>
                 <p className='text-2xl font-bold'>Apply to xyz Company</p>
                 <IoMdClose size={30} onClick={step2}  className="cursor-pointer" />
            </div>
            <hr />
            <div className='w-full px-10 py-8'>

               <p className='text-xl font-semibold '>
                Personal information
                </p>
                <p className='text-[12px] font-normal mt-2'>
                Confirm the personal detail before apply
                </p>
             <div className='w-full flex gap-4 mt-5'>
                <div className='w-full '>
                   <p className='text-base font-medium'>First name <span className='text-red-600'>*</span></p>
                   <input type="text" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Last name <span className='text-red-600'>*</span></p>
                   <input type="text" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-5'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Email<span className='text-red-600'>*</span></p>
                   <input type="email" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Phone number <span className='text-red-600'>*</span></p>
                   <input type="number" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-5'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Visa Sponsership <span className='text-red-600'>*</span></p>
                   <input type="text" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                </div>

             </div>


            </div>
            <hr />
            <div className='w-full flex justify-end p-10'>
                <div onClick={step2} className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                    <p className='text-base font-semibold text-[#114B53]'>Update</p>
                </div>
            </div>
        </div>
      </div>


        </div>

        <Footer/>
        </>

    );
};

export default JobDescription;

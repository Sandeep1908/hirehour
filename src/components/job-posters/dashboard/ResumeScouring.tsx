import React, { useState } from 'react'
import { CiFilter, CiSearch } from 'react-icons/ci';
import { FaBehanceSquare, FaCaretDown, FaEdit, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiRingingBell } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosArrowDown, IoIosMail, IoMdClose } from 'react-icons/io';
import { IoCallOutline, IoLocationOutline, IoMail } from 'react-icons/io5';
import { MdDeleteOutline, MdOutlineMail } from 'react-icons/md';
import resume from '../../../assets/resume.svg'
import CandidateCard from './CandidateCard';
import AddJobAlert from '../../job-seekers/AddJobAlert';



const SearchCandidate: React.FC = () => {



    const [showFullProfile, setShowFullProfile] = useState<boolean>(false);


    const [selectedOptionDistance, setSelectedOptionDistance] = useState<string>("");
    // const [selectedOptionSkills, setSelectedOptionSkills] = useState<string>("");
    const [selectedOptionResumeUpdate, setSelectedOptionResumeUpdate] = useState<string>("");
    const [selectedOptionVisa, setSelectedOptionVisa] = useState<string>("");

    // const [isSelected, setIsSelected] = useState(0);
    const [dropdown, setDropdown] = useState<number>(0);




    const handleOptionDistance = (value: string) => {
        setSelectedOptionDistance(value);
        setDropdown(0);
        // setIsSelected(3);
    };
    const handleOptionResumeUpdate = (value: string) => {
        setSelectedOptionResumeUpdate(value);
        setDropdown(0);
        // setIsSelected(3);
    };
    const handleOptionVisa = (value: string) => {
        setSelectedOptionVisa(value);
        setDropdown(0);
        // setIsSelected(3);
    };

    const handleReset = () => {
        setSelectedOptionDistance("");
        setDropdown(0);

    };
    const handleResetResumeUpdate = () => {
        setSelectedOptionResumeUpdate("");
        setDropdown(0);

    };
    const handleResetVisa = () => {
        setSelectedOptionVisa("");
        setDropdown(0);

    };


    return (
        <div className='w-full h-[490px] overflow-x-hidden overflow-y-auto'>
            <div className='w-full px-5 mt-2'>
                <div className='w-full  border-[1px] border-[##DFDFDF] rounded-xl flex flex-col md:flex-row justify-between px-4 py-2 '>
                    <div className='flex md:justify-center items-center gap-2'>
                        <CiSearch />
                        <p className='font-normal text-[#3A3A3C] text-sm'>UI/UX Designer</p>
                    </div>
                    <div className='flex md:justify-center items-center gap-2'>
                        <IoLocationOutline />
                        <p className='font-normal text-[#3A3A3C] text-sm'>Allen, TX, US</p>
                    </div>
                    <div className='hidden  md:flex justify-center items-center gap-4 '>
                        {/* <div className='relative'>


                                <div onClick={() => { setDropdownLoc(!dropdownLoc) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                                    <p className="text-[14px] font-normal text-[#114B53]">Remote</p>
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

                                    </div>
                                     : ""}

                            </div> */}




                        <div className='hidden w-[150px] py-2 md:flex justify-center bg-[#114B53] rounded-full'>
                            <p className='text-white font-semibold text-sm'>Search</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className=' flex gap-2  px-5 py-2 mt-1'>


                {/* <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] bg-[#effefd] rounded-full">
                    <p className="text-[12px] font-semibold text-[#114B53]">Resume Last Updated</p>
                    <FaCaretDown className='text-[#114B53]' />

                </div> */}

                <div className='relative z-[20]'>
                    <div
                        onClick={() => setDropdown(1)}
                        className={`cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
        ${selectedOptionResumeUpdate.length > 0 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
                    >
                        <p className="text-[12px] font-semibold text-[#114B53]"> {selectedOptionResumeUpdate ? selectedOptionResumeUpdate : "Resume Last Updated"}</p>
                        <FaCaretDown className={`${dropdown === 1 ? 'rotate-180 transition-all duration-500' : ''}`} />
                    </div>

                    {dropdown === 1 && (
                        <div className='absolute top-12 left-0 w-[150px]'>
                            <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                {[
                                    "Today", "Yesterday", "Last 3 days", "Last week", "Last 2 week", "Last month", "Last 2 month", "Last 3 month", "Last 6 month"
                                ].map((option) => (
                                    <div key={option} onClick={() => handleOptionResumeUpdate(option)} className='w-full px-4 py-2 flex gap-2'>
                                        <input
                                            type="radio"
                                            name="distance"
                                            checked={selectedOptionResumeUpdate === option}
                                        //   onChange={() => handleOptionDistance(distance)}
                                        />
                                        <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                                    </div>
                                ))}
                                <div className='w-full px-6 py-2 flex justify-end'>
                                    <button onClick={handleResetResumeUpdate} className='text-[12px] text-[#114B53] font-semibold cursor-pointer'>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                    <p className="text-[12px] font-semibold text-[#114B53]">Skills</p>
                    <FaCaretDown className='text-[#114B53]' />

                </div>



                <div className='relative z-[20]'>
                    <div
                        onClick={() => setDropdown(3)}
                        className={`cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
        ${selectedOptionDistance.length > 0 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
                    >
                        <p className="text-[12px] font-semibold text-[#114B53]"> {selectedOptionDistance ? selectedOptionDistance : "Distance"}</p>
                        <FaCaretDown className={`${dropdown === 3 ? 'rotate-180 transition-all duration-500' : ''}`} />
                    </div>

                    {dropdown === 3 && (
                        <div className='absolute top-12 left-0 w-[150px]'>
                            <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                {[
                                    "Any distance", "Less than 5 miles", "Less than 10 miles", "Less than 25 miles", "Less than 50 miles", "Less than 100 miles"
                                ].map((option) => (
                                    <div key={option} onClick={() => handleOptionDistance(option)} className='w-full px-4 py-2 flex gap-2'>
                                        <input
                                            type="radio"
                                            name="distance"
                                            checked={selectedOptionDistance === option}
                                        //   onChange={() => handleOptionDistance(distance)}
                                        />
                                        <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                                    </div>
                                ))}
                                <div className='w-full px-6 py-2 flex justify-end'>
                                    <button onClick={handleReset} className='text-[12px] text-[#114B53] font-semibold cursor-pointer'>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='relative z-[20]'>
                    <div
                        onClick={() => setDropdown(5)}
                        className={`cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
                                 ${selectedOptionVisa.length > 0 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
                    >
                        <p className="text-[12px] font-semibold text-[#114B53]"> {selectedOptionVisa ? selectedOptionVisa : "Visa Sponsorship"}</p>
                        <FaCaretDown className={`${dropdown === 5 ? 'rotate-180 transition-all duration-500' : ''}`} />
                    </div>

                    {dropdown === 5 && (
                        <div className='absolute top-12 left-0 w-[150px]'>
                            <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                {[
                                    "Required", "Not required",
                                ].map((option) => (
                                    <div key={option} onClick={() => handleOptionVisa(option)} className='w-full px-4 py-2 flex gap-2'>
                                        <input
                                            type="radio"
                                            name="distance"
                                            checked={selectedOptionVisa === option}
                                        //   onChange={() => handleOptionDistance(distance)}
                                        />
                                        <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                                    </div>
                                ))}
                                <div className='w-full px-6 py-2 flex justify-end'>
                                    <button onClick={handleResetVisa} className='text-[12px] text-[#114B53] font-semibold cursor-pointer'>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                    <p className="text-[12px] font-semibold text-[#114B53]">Previous Company</p>
                    <FaCaretDown className='text-[#114B53]' />

                </div>





                {/* <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                    <p className="text-[12px] font-semibold text-[#114B53]">Visa Sponsorship</p>
                    <FaCaretDown className='text-[#114B53]' />

                </div> */}


                <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                    <p className="text-[12px] font-semibold text-[#114B53]">All Filters</p>
                    <CiFilter className='text-[#114B53]' />

                </div>


            </div>

            <div className='w-full px-5 '>
                <div className='flex justify-end items-center '>
                    <div className='relative mr-1 text-[#114B53]'> <IoIosMail /> <GiRingingBell size={13} className='absolute top-2 left-[6px]' /></div>  <p className='text-[#6B7588] text-[12px] font-semibold'><span className='text-[#114B53] font-bold'>Set up an Alert</span>  to receive emails of new candidate like this</p>
                </div>
                <div className='w-full h-[500px] overflow-x-hidden overflow-y-auto flex gap-5 mt-3'>
                    <div className='w-[28%] h-full flex flex-col overflow-x-hidden overflow-y-auto gap-5'>
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />
                        <CandidateCard />

                    </div>

                    {/* candidates info  */}

                    <div className='w-[72%]  '>
                        <div className='w-full h-full overflow-x-hidden overflow-y-auto flex gap-5 border-[#6B7588] border-[1px] rounded-lg p-7'>

                            <div className=''>
                                <div className='w-20 h-20 bg-[#95FAF9] rounded-full flex justify-center items-center'>
                                    <p className='text-lg font-bold text-[#3A3A3C]'>J</p>
                                </div>
                            </div>

                            <div className='w-full h-auto'>
                                <div className='flex w-full justify-between'>
                                    <div>
                                        <p className='text-base font-semibold text-[#3A3A3C]'>John S</p>
                                        <div className='flex gap-2 mt-2'>
                                            <GrLocation />

                                            <p className='text-[14px] font-semibold text-[#3A3A3C]'>Allen, Texas, US</p>

                                        </div>
                                    </div>
                                    <div className='cursor-pointer border-[1px] h-8 border-[#114B53] rounded-full px-3 flex items-center' onClick={() => { setShowFullProfile(!showFullProfile) }} >
                                        <p className='text-[#114B53] text-[14px] font-semibold'>View Full Profile</p>
                                    </div>

                                </div>
                                <div className='mt-3'>
                                    <p className='text-[14px] font-semibold text-[#3A3A3C] ' >Experience (Total 4 Years)</p>
                                    <p className='text-[14px] font-semibold text-[#6B7588] mt-1'>Sr. Java Full Stack </p>
                                    <p className='text-[12px] font-semibold text-[#6B7588] mt-1'>xyz company 12/2020 - Present   Domain : Health Care</p>
                                    <div className='flex gap-2 items-center mt-3'>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[12px] text-[#6B7588] font-semibold'>12/2020 - Present</p>
                                        </div>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[12px] text-[#6B7588] font-semibold'>Job Domain</p>
                                        </div>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[12px] text-[#6B7588] font-semibold'>Full-Time   </p>
                                        </div>


                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <p className='text-[14px] font-semibold text-[#3A3A3C]'>Associate Java Full stack</p>
                                    <p className='text-[12px] font-semibold text-[#6B7588] mt-1'>xyz Company - Texas, United States</p>
                                    <div className='flex gap-2 items-center mt-3'>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[12px] text-[#6B7588] font-semibold'>12/2020 - Present</p>
                                        </div>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[12px] text-[#6B7588] font-semibold'>Job Domain</p>
                                        </div>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[12px] text-[#6B7588] font-semibold'>Full-Time   </p>
                                        </div>


                                    </div>
                                </div>

                                <p className='text-[#6B7588] text-[10px] mt-4'>+1 more experience</p>

                                <hr className='mt-5' />
                                <div className='mt-5'>
                                    <p className='text-base font-bold'>Education</p>
                                    <p className='text-sm font-bold mt-3'>BE Computer Science  </p>
                                    <p className='text-[12px] font-bold text-[#8F90A6] mt-2'>xyz Collage- Texas, United States  </p>
                                    <div className='flex gap-2 mt-2'>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[10px] text-[#6B7588] font-semibold'>07/2016 - 06/2020</p>
                                        </div>

                                    </div>
                                </div>

                                <hr className='mt-5' />

                                <div className='mt-5'>
                                    <p className='text-base font-bold'>Skills </p>
                                    <div className='mt-3'>
                                        <div className='flex gap-4'>
                                            <p className='text-[#114B53] text-sm'>Overall Skills</p>
                                            <p className='text-black text-sm'> Current Skills</p>
                                        </div>
                                        <hr className='mt-2' />
                                        <div className='flex gap-4 mt-3'>
                                            <div className='w-full'>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full '>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex gap-4 mt-3'>
                                            <div className='w-full'>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full '>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex gap-2 mt-4 items-center justify-center'>
                                            <IoIosArrowDown />
                                            <p className='text-sm font-bold'>View all 20</p>
                                        </div>

                                        <hr className='mt-4' />


                                    </div>
                                </div>

                                <div className='mt-3 pb-5'>
                                    <p className='text-base font-bold text-[#3A3A3C]'>Licence & Certificate</p>
                                    <p className='text-[12px] font-semibold text-[#6B7588] mt-1'>Web Development Certificate</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Show Full Profile */}

            <div
                className={`w-full h-full flex p-3 md:p-3 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-100 ${showFullProfile ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
            >
                <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

                <div className='z-[30] max-w-[1000px] w-full h-full bg-white rounded-lg overflow-auto relative top-[0px] p-5'>




                    <div className='w-full flex gap-5   mt-6'>
                        <div className='w-[25%] '>
                            <div className=' w-full border-[1px] border-[#D6DBDE] rounded-lg px-3 py-2 md:px-3 md:py-2 '>

                                <div className='flex flex-col justify-center items-center mt-3'>
                                    <div className='w-[80px] h-[80px] rounded-full bg-[#CBFFFC] flex justify-center items-center '>
                                        <p className='text-[30px] font-extrabold'>J</p>
                                    </div>
                                    <p className='text-sm font-semibold mt-3'>John S Mathew</p>
                                    <div className='flex gap-2 mt-2'>
                                        <GrLocation />

                                        <p className='text-[12px] font-semibold text-[#3A3A3C]'>Allen, Texas, US</p>

                                    </div>
                                </div>
                                <div className='flex justify-center gap-2 mt-5'>
                                    <FaLinkedin />
                                    <FaGithub />
                                    <FaBehanceSquare />



                                </div>
                                <hr className='mt-3' />
                                <div className='mt-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-2 '>
                                        <MdOutlineMail size={20} />

                                        <p className='text-[12px] font-medium text-[#3A3A3C] '>John@xyz.com</p>
                                    </div>

                                </div>
                                <div className='mt-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-2 '>
                                        <IoCallOutline size={20} />

                                        <p className='text-[12px] font-medium text-[#3A3A3C] '>+1 xxx-xxx-xxxx</p>
                                    </div>

                                </div>
                                <div className='mt-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-2 '>
                                        <HiOutlineShoppingBag size={20} />

                                        <p className='text-[12px] font-medium text-[#3A3A3C] '>Exp: 4 Year 5 Months</p>
                                    </div>

                                </div>
                                <hr className='mt-3' />
                                <div>

                                    <div className='mt-3'>
                                        <p className='text-[12px] text-[#8F90A6]'>Willing to work / Looking for job change</p>
                                        <p className='text-[12px] font-medium mt-1'>Yes</p>
                                    </div>
                                    <div className='mt-2'>
                                        <p className='text-[12px] text-[#8F90A6]'>Visa Sponsorship</p>
                                        <p className='text-[12px] font-medium mt-1'>Yes</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='w-[75%] '>
                            <div className='flex  gap-3 items-center justify-end'>
                                <div className='bg-[#114B53] py-2 px-4 rounded-full'>
                                    <p className='text-[12px] font-semibold text-white'>Send RTR</p>
                                </div>
                                <div className='border-[1px] border-[#114B53] py-2 px-4 rounded-full flex gap-2 items-center'>
                                    <IoMail className='text-[#114B53]' />

                                    <p className='text-[12px] font-semibold text-[#114B53]'> Message</p>
                                </div>
                                <div className='bg-[#E9F358] py-2 px-4 rounded-full '>
                                    <p className='text-[12px] font-semibold text-[#114B53]'>Download Resume</p>
                                </div>
                                <IoMdClose size={30} onClick={() => { setShowFullProfile(!showFullProfile) }} className="cursor-pointer" />

                            </div>

                            <div className='w-full mt-5 p-4'>
                                <div>
                                    <p className='text-base font-bold'>Summary</p>
                                    <p className='text-[12px] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                <hr className='w-[95%] m-auto mt-5' />
                                <div className='mt-5'>
                                    <p className='text-base font-bold'>Work experience</p>
                                    <div>
                                        <p className='text-sm font-bold mt-1'>Java Fullstack  </p>
                                        <p className='text-[12px] font-bold text-[#8F90A6] mt-2'>xyz Company - Texas, United States  </p>
                                        <div className='flex gap-2 mt-2'>
                                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                                <p className='text-[10px] text-[#6B7588] font-semibold'>12/2020 - Present</p>
                                            </div>
                                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                                <p className='text-[10px] text-[#6B7588] font-semibold'> Health Care</p>
                                            </div>
                                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                                <p className='text-[10px] text-[#6B7588] font-semibold'>Full-Time</p>
                                            </div>
                                        </div>
                                        <p className='text-sm font-bold mt-3'>Summary</p>
                                        <ul className='list-disc text-[12px] ml-6 mt-2'>
                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
                                            <li className='mt-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                                        </ul>
                                    </div>
                                    <div className=''>
                                        <p className='text-sm font-bold mt-1'>Java Fullstack  </p>
                                        <p className='text-[12px] font-bold text-[#8F90A6] mt-2'>xyz Company - Texas, United States  </p>
                                        <div className='flex gap-2 mt-2'>
                                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                                <p className='text-[10px] text-[#6B7588] font-semibold'>12/2020 - Present</p>
                                            </div>
                                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                                <p className='text-[10px] text-[#6B7588] font-semibold'> Health Care</p>
                                            </div>
                                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                                <p className='text-[10px] text-[#6B7588] font-semibold'>Full-Time</p>
                                            </div>
                                        </div>
                                        <p className='text-sm font-bold mt-3'>Summary</p>
                                        <ul className='list-disc text-[12px] ml-6 mt-2'>
                                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
                                            <li className='mt-2'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                                        </ul>
                                    </div>

                                </div>


                                <div className='mt-5'>
                                    <p className='text-base font-bold'>Education</p>
                                    <p className='text-sm font-bold mt-3'>BE Computer Science  </p>
                                    <p className='text-[12px] font-bold text-[#8F90A6] mt-2'>xyz Collage- Texas, United States  </p>
                                    <div className='flex gap-2 mt-2'>
                                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                                            <p className='text-[10px] text-[#6B7588] font-semibold'>07/2016 - 06/2020</p>
                                        </div>

                                    </div>
                                </div>



                                <div className='mt-5'>
                                    <p className='text-base font-bold'>Skills </p>
                                    <div className='mt-3'>
                                        <div className='flex gap-4'>
                                            <p className='text-[#114B53] text-sm'>Overall Skills</p>
                                            <p className='text-black text-sm'> Current Skills</p>
                                        </div>
                                        <hr className='mt-2' />
                                        <div className='flex gap-4 mt-3'>
                                            <div className='w-full'>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full '>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex gap-4 mt-3'>
                                            <div className='w-full'>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full '>
                                                <div className='w-full flex justify-between'>
                                                    <p className='text-[#3A3A3C] text-[12px]'>Java</p>
                                                    <p className='text-[#3A3A3C] text-[12px]'>4 Years</p>
                                                </div>
                                                <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                                    <div className='w-[40%] h-1 bg-[#114B53] rounded-full'>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex gap-2 mt-4 items-center justify-center'>
                                            <IoIosArrowDown />
                                            <p className='text-sm font-bold'>View all 20</p>
                                        </div>

                                        <hr className='mt-4' />

                                        <div className='mt-5'>
                                            <p className='text-base font-bold'>Resume </p>
                                            <img src={resume} alt="" className='mt-3' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}



const Favourite: React.FC = () => { return (<div className='p-5'> <p className='text-sm'>Favourite</p></div>) }
const MyViewedResume: React.FC = () => { return (<div className='p-5'> <p className='text-sm'>My Viewed Resume</p></div>) }
const CandidateAlert: React.FC = () => {
    return (<div className='p-5'>
  <div className='mt-5'>
              <div className='w-full border-[1px] border-black rounded-lg flex p-5'  >
                   <div className='w-full'>
                    <div className='flex justify-between flex-col-reverse'>
                     <p className='text-sm font-semibold min-w-fit pt-2 md:pt-0' >Java Full stack Developer </p>
                     <div className="md:hidden  w-full flex  items-start space-x-4">
                        <div className="flex items-center  " >
                        <FaEdit color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Edit</p>
                        </div>

                        <div className="flex items-center ">
                        <MdDeleteOutline color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Delete</p>
                        </div>
                    </div>
                    </div>
                     <div className='flex justify-between'>

                     <div className='flex flex-wrap gap-2 md:gap-4 mt-2'>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Fulltime, Contract</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Onsite, Remote</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Associate Level</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>$80.00 - $100.00 per year</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>H1 Visa</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Allen,TX/Dellas, TX</p>
                        </div>
                     </div>

                     <div className="hidden  w-full md:flex justify-end items-start space-x-4">
                        <div className="flex items-center  " >
                        <FaEdit color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Edit</p>
                        </div>

                        <div className="flex items-center ">
                        <MdDeleteOutline color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Delete</p>
                        </div>
                    </div>
                     </div>
                    
                     <p className='text-sm text-[#06A560] font-medium mt-4' >Active</p>
                   </div>
                 
              </div>
        </div>
    </div>)
}


const ResumeScouring: React.FC = () => {


    const jobFilters = [

        {
            label: 'Search for Candidate',
            component: <SearchCandidate />,
        },
        {
            label: 'Favourite',
            component: <Favourite />,
        },
        {
            label: 'My Viewed Resume',
            component: <MyViewedResume />,
        },
        {
            label: 'Candidate Alert',
            component: <CandidateAlert />,
        },
    ];
    const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
    const [addJobAlert, setAddJobAlert] = useState<boolean>(false);


    return (
        <div className='w-full h-auto '>
            <div className="flex justify-between items-center p-3">
                <h1 className="text-sm font-semibold">Resume Sourcing
                </h1>
                <p className="w-24 h-8 flex justify-center items-center bg-[#E9F358] text-[#104B53] rounded-full text-xs">
                    Post a Job
                </p>
            </div>
            <hr />
            <div className="px-5 py-2 mt-2 flex justify-between">
                <ul className="max-w-[700px] w-full  rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
                    {jobFilters?.map((item, i) => {
                        return (
                            <li
                                className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                                onClick={() => setJobFilterIdx(i)}
                            >
                                <span>{item.label}</span>{' '}
                                <span
                                    className={`bg-[#104B53]  w-6   text-center rounded-lg ${jobFilterIdx === i ? 'bg-white text-[#104B53] ' : 'text-white'} `}
                                >
                                    {i}
                                </span>
                            </li>
                        );
                    })}
                </ul>
                <div onClick={() => { setAddJobAlert(!addJobAlert) }} className='w-fit text-[10px] rounded-full    px-3 py-1  cursor-pointer  flex justify-center items-center space-x-4 border-[1px] border-[#104B53]'>
            <p className='text-xs text-[#104B53]'>Add Job Alert</p>
          </div>
            </div>



            {/* all Filter details  */}
            <div className="w-full  space-y-3  h-[66vh]">
                {jobFilters?.map((item, i) => {
                    if (jobFilterIdx === i) {
                        return <div key={i}>{item.component}</div>;
                    }
                })}
            </div>



              {/* Add Candidate */}

        <div
        className={`w-full h-full flex p-3 md:p-3 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-100 ${addJobAlert ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
        <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

        <div className='z-[30] max-w-[555px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px] '>

          <div className=' px-5 pt-5 flex justify-between items-center'>
            <p className='text-base font-bold'>Add Candidate Alert</p>
          </div>
          
         <div className='p-5'>
         <div className='w-full flex gap-4 '>
                
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Title</p>
                   <select name="" id="" className='text-xs w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Java Full Stack</option>
                      <option value=""> Java Full Stack</option>
                   </select>
                </div>
             </div>
         <div className='w-full flex gap-4 mt-3'>
                
                <div className='w-full '>
                   <p className='text-sm font-medium'>Experience</p>
                   <select name="" id="" className='text-xs w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Associate Level</option>
                      <option value=""> Senior Level</option>
                   </select>
                </div>
             </div>
         <div className='w-full flex gap-4 mt-3'>
                
                <div className='w-full '>
                   <p className='text-sm font-medium'>Location</p>
                   <select name="" id="" className='text-xs w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Allen, TX, US</option>
                      <option value=""> Allen, TX, US</option>
                   </select>
                </div>
             </div>
         <div className='w-full flex gap-4 mt-3'>
                
                <div className='w-full '>
                   <p className='text-sm font-medium'>Skills</p>
                   <select name="" id="" className='text-xs w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Java</option>
                      <option value=""> React</option>
                   </select>
                </div>
             </div>
         </div>
    
          <div onClick={() => { setAddJobAlert(!addJobAlert) }}  className='w-full flex justify-end  gap-5 items-center px-5 py-3'>
          <p className='text-sm font-semibold text-[#114B53]'>  Cancel</p>


            <div onClick={() => { setAddJobAlert(!addJobAlert) }}  className='bg-[#E9F358] w-[110px] h-[30px] flex justify-center items-center rounded-full cursor-pointer '>
              <p className='text-sm font-semibold text-[#114B53]'>Submit</p>
            </div>
          </div>

        </div>
      </div>
        </div>





    )
}

export default ResumeScouring

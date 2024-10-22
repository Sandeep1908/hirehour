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
// import { Link } from 'react-router-dom';



type SendRTRModalProps = {
    isRTROpen: boolean;
    setIsRTROpen: (e: boolean) => void;
  };

const SearchCandidate: React.FC = () => {

    const [isRTROpen, setIsRTROpen] = useState(false);


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
        <div className='w-full h-[520px] overflow-x-hidden overflow-y-auto'>
           


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
               
                <div className='w-full h-[520px] overflow-x-hidden overflow-y-auto flex gap-5 mt-1'>
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
                                <div onClick={() => setIsRTROpen(true)} className='bg-[#114B53] py-2 px-4 rounded-full'>
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




{
    isRTROpen && <SendRTRModal setIsRTROpen={setIsRTROpen} isRTROpen={isRTROpen} />
}

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



const SendRTRModal: React.FC<SendRTRModalProps> = ({  setIsRTROpen }) => {
    return (
      <div
        className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[10]}   `}
      >
        <div className="w-full h-screen hidden md:block absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>
  
        <div
          className="   z-[40] w-full h-[98%] max-w-[500px]  relative shadow-xl
                            overflow-auto  bg-white rounded-lg"
        >
          <div className="flex justify-between items-center p-5 sticky top-0 bg-white">
            <div className="flex flex-col space-y-3">
              <h1 className="text-sm font-[500]">Send RTR</h1>
            </div>
  
            <IoMdClose
              size={20}
              color="#6B7588"
              className="cursor-pointer"
              onClick={() => setIsRTROpen(false)}
            />
          </div>
  
          <hr />
  
          <div className="w-full flex flex-col space-y-4  p-4">
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Job Title  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Job Title</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Job title"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Job Id  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Job Id</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Job Id"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Location  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Location</label>
                </div>
  
                <input
                  type="email"
                  placeholder="Enter your Location"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Job type  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Job Type</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Job Type"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-4">
    <div className="flex text-xs space-x-1">
      <input
        type="radio"
        name="selection"
        className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
      />
      <label htmlFor="">Employer only</label>
    </div>
  
    <div className="flex col-span-2 justify-center items-center text-xs space-x-1">
      <input
        type="radio"
        name="selection"
        className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
      />
      <label htmlFor="">Applicant and Employer</label>
    </div>
  
    <div className="flex text-xs space-x-1">
      <input
        type="radio"
        name="selection"
        className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
      />
      <label htmlFor="">Applicant only</label>
    </div>
  </div>
  
  
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Applicant name  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Applicant name</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Applicant name"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Employer name  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Employer name</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Employer name "
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Applicant Email  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Applicant Email</label>
                </div>
  
                <input
                  type="email"
                  placeholder="Applicant Email"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Employer Email  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Employer Email</label>
                </div>
  
                <input
                  type="email"
                  placeholder="Vendor Email"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Applicant Company  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Applicant Company</label>
                </div>
  
                <input
                  type="email"
                  placeholder="Applicant Company"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Employer Company  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Employer Company</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Employer Company"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-2 gap-3">
           
  
              {/* RTR Validity (in Days)  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">RTR Validity (in Days)</label>
                </div>
  
                <input
                  type="email"
                  placeholder="Submission (in Days)"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-3 gap-3">
              {/* Show pay by  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Show pay by</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Show pay by"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Amount  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">
                    Amount
                  </label>
                </div>
  
                <input
                  type="email"
                  placeholder="Amount"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Rate
               */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Rate</label>
                </div>
  
                <input
                  type="email"
                  placeholder=" Rate"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Client */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Client</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Client"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/* Implementation  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Implementation</label>
                </div>
  
                <input
                  type="email"
                  placeholder="Implementation"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Prime Vendor */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Prime Vendor</label>
                </div>
  
                <input
                  type="text"
                  placeholder="Prime Vendor"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
  
              {/*  Vendor  */}
  
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Vendor</label>
                </div>
  
                <input
                  type="email"
                  placeholder="Vendor"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>
  
            <div className="flex flex-col w-full  border ">
                    <div className="flex justify-end items-center p-1 bg-[#F2F2F5]">
                      <p className="w-32  h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full font-[500]">
                        Ask AI to generate
                      </p>
                    </div>
  
                    <textarea className="w-full  text-[10px] p-2 min-h-44 text-[#3A3A3C] tracking-wide">
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
  
          {/* Button submit  */}
  
          <div className="p-4">
            <div className="w-full flex justify-center md:justify-end md:mt-4">
              <p
                onClick={() => setIsRTROpen(false)}
                className="flex justify-center items-center w-full md:w-36 h-8 text-xs  rounded-full cursor-pointer bg-[#E9F358] "
              >
                Preview
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
            <div className="px-4 py-3 flex justify-between">
                <ul className="max-w-[680px] w-full  rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
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
                <div>
                <div className='flex justify-end items-center mt-1'>
                    <div className='relative mr-1 text-[#114B53]'> <IoIosMail /> <GiRingingBell size={13} className='absolute top-2 left-[6px]' /></div>  <p className='text-[#6B7588] text-[12px] font-semibold'><span className='text-[#114B53] font-bold'>Set up an Alert</span>  to receive emails of new candidate like this</p>
                </div>
                </div>
                <div onClick={() => { setAddJobAlert(!addJobAlert) }} className='w-fit text-[10px] rounded-full    px-3 py-1  cursor-pointer  flex justify-center items-center space-x-4 border-[1px] border-[#104B53]'>
            <p className='text-xs text-[#104B53]'>Add Job Alert</p>
          </div>
            </div>
            <div className='w-full px-4'>
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



            {/* all Filter details  */}
            {/* <div className="w-full  space-y-3  h-full">
                {jobFilters?.map((item, i) => {
                    if (jobFilterIdx === i) {
                        return <div key={i}>{item.component}</div>;
                    }
                })}
            </div> */}

           <div className='w-full h-full'>



           <div className='max-w-[1280px] md:mt-2 m-auto '>
         <div className='w-full flex justify-center md:bg-white rounded-lg mt-5'>
               <p className='text-base font-semibold '>Please upgrade plan to access Resume Sourcing</p>
         </div>
         <div className="flex flex-col  md:flex-row gap-10 items-center justify-center mt-10 ">
          <div
           
            className={` border  max-w-[260px] h-[350px]  w-full rounded-lg  p-3 bg-white flex justify-between flex-col`}
          >
            <div className="flex-col">
              <p className="text-lg font-semibold ">Resume Sourcing</p>
              <p className="text-xl font-semibold ">
              $99 /  <span className="text-xs">Month</span>
              </p>
              <p className="text-xs font-normal text-[#6B7588] mt-1">
              You can find perfect applicant for you <br />
              job match by sourcing the resume 
              </p>
              
            </div>
<div>
<p className="text-lg font-semibold text-black  ">Credits : 100</p>
<div
              className={`hover:bg-[#114B53] w-full h-8 border-[1px] text-[#114B53] hover:text-white border-[#114B53] rounded-full flex justify-center items-center mt-10`}
            >
              <p className=" text-xs">Upgrade Plan</p>
            </div>

</div>
           
          </div>

          <div
           
            className={` border max-w-[260px] h-[350px]   w-full rounded-lg  p-3 bg-white flex justify-between flex-col`}
          >
            <div className="flex-col ">
              <p className="text-xl font-semibold mt-5 ">
              Bulk Hiring
              </p>
              <p className="text-xs font-normal text-[#6B7588] mt-1">
              Contact our team to bulk hiring
              </p>

             
            </div>

            <div
              className={` hover:bg-[#114B53]  w-full h-8 border-[1px] text-[#114B53] hover:text-white border-[#114B53] rounded-full flex justify-center items-center mt-10`}
            >
              <p className=" text-xs"> Contact us</p>
            </div>
          </div>
        </div>
                  

       </div>
           </div>


              {/* Add Candidate */}

      
        </div>





    )
}




export default ResumeScouring

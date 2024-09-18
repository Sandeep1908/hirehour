import React, { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { CiFilter } from 'react-icons/ci'
import { FaBehanceSquare, FaCaretDown, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosArrowDown,  IoMdClose, IoMdMore } from 'react-icons/io'
import { IoCallOutline, IoCheckmark, IoMail } from 'react-icons/io5'
import { MdOutlineAttachment, MdOutlineKeyboardArrowDown, MdOutlineMail } from 'react-icons/md'
import { LuSendHorizonal } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import resume from '../../../assets/resume.svg'
import { RxCross2 } from 'react-icons/rx'


const Applicants: React.FC = () => {

  const jobFilters = ['All Applicants', 'Matched Applicants'];
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const [message, setMessage] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showFullProfile, setShowFullProfile] = useState<boolean>(false);

  const [itemId, setItemId] = useState(0)


  const [selectedOptionVisa, setSelectedOptionVisa] = useState<string>("");
  const [selectedOptionDate, setSelectedOptionDate] = useState<string>("");
  const [selectedOptionAllJob, setSelectedOptionAllJob] = useState<string>("");


  const [isSelected, setIsSelected] = useState(0);
  const [dropdown, setDropdown] = useState<number>(0);


  const handleOptionAllJob = (value: string) => {
    setSelectedOptionAllJob(value);
    setDropdown(0);
    setIsSelected(3);
};
  const handleOptionVisa = (value: string) => {
    setSelectedOptionVisa(value);
    setDropdown(0);
    setIsSelected(3);
};
  const handleOptionDate = (value: string) => {
    setSelectedOptionDate(value);
    setDropdown(0);
    setIsSelected(3);
};

const handleResetDate = () => {
  setSelectedOptionDate("");
  setDropdown(0);
  
};
const handleResetVisa = () => {
  setSelectedOptionVisa("");
  setDropdown(0);
  
};

  const filterItems = [
    {
      label: 'All Applicants ',
      Number: "8",
    },
    {
      label: 'Great match ',
      Number: "2",
    },
    {
      label: 'New Applicants ',
      Number: "1",
    },
    {
      label: 'Shortlisted ',
      Number: "4",
    },
    {
      label: 'Unsure ',
      Number: "0",
    },
    {
      label: 'Rejected ',
      Number: "2",
    },

  ];



  return (


    <div className='w-full h-auto bg-white rounded-lg'>


      <div className='  w-full h-auto'>
        <div className="p-2 mt-2">
          <ul className="max-w-[350px]   rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
            {jobFilters?.map((item, i) => {
              return (
                <li
                  className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                  onClick={() => setJobFilterIdx(i)}
                >
                  <span>{item}</span>{' '}
                  <span
                    className={`bg-[#104B53]  w-6   text-center rounded-lg ${jobFilterIdx === i ? 'bg-white text-[#104B53] ' : 'text-white'} `}
                  >
                    {i}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='flex px-4'>
          {filterItems.map((items, id) => {
            return (
              <div key={id} onClick={() => { setItemId(id) }} className={`flex items-center gap-2 py-2 px-4 border-b-[1px] ${itemId === id ? "border-b-[#114B53]" : "border-b-white"}`}>
                <p className='text-[12px] text-[#114B53]'>{items.label} </p>
                <div className={`${itemId === id ? "bg-[#CAFDFC]" : "bg-[#F2F2F5]"}  rounded-full px-3  `}>
                  <p className='text-[12px] '>{items.Number}</p>
                </div>
              </div>
            )

          })}

        </div>


        <div className=' flex gap-2 mt-5 px-4'>

          <div className='relative z-[20]'>
                            <div onClick={() => setDropdown(1)} className={`cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
  ${isSelected === 1 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}>
                                <p className="text-[12px] font-semibold text-[#114B53]"> {selectedOptionAllJob ? selectedOptionAllJob : "All Filters"} </p>
                                <FaCaretDown onClick={() => setDropdown(1)} className={`${dropdown === 1 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 1 && (
                                <div className='absolute top-12 left-0 w-[120px]'>
                                    <div className='w-full  bg-[#FFFFFF] rounded-lg shadow-lg' >
                                        {["All", " Active", "Paused", "Closed", "Co - Hiring"].map(option => (
                                            <div key={option} className='w-full px-4 py-2 flex gap-2' onClick={() => handleOptionAllJob(option)}>
                                                <input
                                                    type="radio"
                                                    name="value1"
                                                    checked={selectedOptionAllJob === option}
                                                //   onChange={() => handleOptionClick(option)}
                                                />
                                                <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

          {/* <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
            <p className="text-[12px] font-semibold text-[#114B53]">Date Applied</p>
            <FaCaretDown className='text-[#114B53]' />

          </div> */}

<div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(2)}
                                className={`cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
                                 ${selectedOptionDate.length > 0 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
                            >
                                <p className="text-[12px] font-semibold text-[#114B53]"> {selectedOptionDate ? selectedOptionDate : "Date Applied"}</p>
                                <FaCaretDown className={`${dropdown === 2 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 2 && (
                                <div className='absolute top-12 left-0 w-[150px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                        {[
                                            "Today", "Yesterday","Last 3 days","Last week","Last 2 week" 
                                        ].map((option) => (
                                            <div key={option} onClick={() => handleOptionDate(option)} className='w-full px-4 py-2 flex gap-2'>
                                                <input
                                                    type="radio"
                                                    name="distance"
                                                    checked={selectedOptionDate === option}
                                                //   onChange={() => handleOptionDistance(distance)}
                                                />
                                                <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                                            </div>
                                        ))}
                                        <div className='w-full px-6 py-2 flex justify-end'>
                                            <button onClick={handleResetDate} className='text-[12px] text-[#114B53] font-semibold cursor-pointer'>
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

          <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
            <p className="text-[12px] font-semibold text-[#114B53]">Location</p>
            <FaCaretDown className='text-[#114B53]' />

          </div>


          <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
            <p className="text-[12px] font-semibold text-[#114B53]">Domain Experience</p>
            <FaCaretDown className='text-[#114B53]' />

          </div>


          <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
            <p className="text-[12px] font-semibold text-[#114B53]">Companies worked</p>
            <FaCaretDown className='text-[#114B53]' />

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
            <p className="text-[12px] font-semibold text-[#114B53]">All Filters</p>
            <CiFilter className='text-[#114B53]' />

          </div>


        </div>



        <div className='w-full h-auto px-3 relative'>


          <div className={`absolute right-10 z-20 max-w-[300px] top-[-100px] w-full h-[450px] bg-white shadow-lg rounded-lg transition-all duration-500 ${message ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
            <div className='w-full flex items-center justify-between p-3 '>
              <div className='flex items-center gap-2'>
                <div className='w-10 h-10 bg-[#F8C4C4] rounded-full ' >

                </div>
                <div>
                  <p className='text-[12px]'>Mathew</p>
                  <p className='text-[10px]'>Dribbble</p>
                </div>
              </div>

              <div className='flex gap-2 '>

                <IoMdMore size={20} />

                <RxCross2 onClick={() => { setMessage(!message) }} className='cursor-pointer' size={20} />

              </div>
            </div>
            <hr />
            <div>
              <div className='flex items-center gap-2 p-3'>
                <div className='w-12 h-12 rounded-lg bg-[#EA4C89]'>

                </div>
                <div>
                  <p className='text-[12px]'>UI/UX Designer</p>
                  <p className='text-[10px]'>Dribbble <span className='w-2 h-2 rounded-full bg-slate-600 ' ></span> Allen, Texas, United States</p>
                </div>
              </div>
              <div className='flex flex-wrap gap-2 px-3'>
                <div className='bg-[#F2F2F5] rounded-full px-2 py-1'>
                  <p className='text-[10px]'>Full Time</p>
                </div>
                <div className='bg-[#F2F2F5] rounded-full px-2 py-1'>
                  <p className='text-[10px]'>$50-$60 per hour</p>
                </div>
                <div className='bg-[#F2F2F5] rounded-full px-2 py-1'>
                  <p className='text-[10px]'>H1 Visa</p>
                </div>
                <div className='bg-[#F2F2F5] rounded-full px-2 py-1'>
                  <p className='text-[10px]'>Software</p>
                </div>
                <div className='bg-[#F2F2F5] rounded-full px-2 py-1'>
                  <p className='text-[10px]'>Mid-senior lvl</p>
                </div>
              </div>

              <div className='flex gap-3 items-center p-3'>
                <hr className='w-full ' />
                <p className='text-[10px]'>Today</p>
                <hr className='w-full' />
              </div>
              <div className="w-full   px-5">
                <div className="w-full h-[150px] overflow-auto " id="message-box">
                  <div className="w-full flex flex-col justify-end items-start space-y-4">
                    <div className="flex flex-col space-y-1 justify-end items-end w-full max-w-[302px]">
                      <p className="text-xs border border-[#D6DBDE] p-2 rounded-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      <p className="text-[10px] text-[#C4C4C4]">5min ago</p>
                    </div>





                  </div>


                  <div className="w-full flex flex-col justify-end items-end space-y-4">
                    <div className="flex flex-col space-y-1 justify-end items-end w-full max-w-[302px]">
                      <p className="text-xs border border-[#D6DBDE] p-2 rounded-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      <p className="text-[10px] text-[#C4C4C4]">5min ago</p>
                    </div>




                  </div>








                  <div className="w-full flex flex-col justify-end items-start space-y-4">
                    <div className="flex flex-col space-y-1 justify-end items-end w-full max-w-[302px]">
                      <p className="text-xs border border-[#D6DBDE] p-2 rounded-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      <p className="text-[10px] text-[#C4C4C4]">5min ago</p>
                    </div>





                  </div>
                  <div className="w-full flex flex-col justify-end items-start space-y-4">
                    <div className="flex flex-col space-y-1 justify-end items-end w-full max-w-[302px]">
                      <p className="text-xs border border-[#D6DBDE] p-2 rounded-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                      <p className="text-[10px] text-[#C4C4C4]">5min ago</p>
                    </div>





                  </div>



                </div>

                {/* send button  */}

                <div className="w-[90%] absolute bottom-3 bg-white   rounded-lg flex justify-between items-center  m-auto border border-[#E0E4E6] ">
                  <div className="flex w-full justify-center items-center ml-4  ">
                    <MdOutlineAttachment size={25} />
                    <input type="text" className="w-full p-2 outline-none placeholder:text-xs" placeholder="Enter you message" />
                  </div>

                  <p className=" bg-[#E9F358] p-3 cursor-pointer">
                    <LuSendHorizonal color="#104B53" />

                  </p>
                </div>

              </div>
            </div>
          </div>



          <div className={`absolute left-16 z-20 max-w-[400px] top-16 p-6 w-full h-auto bg-white shadow-lg rounded-lg transition-all duration-500 ${showProfile ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`} onMouseLeave={() => { setShowProfile(!showProfile) }}>
            <div className='w-full h-full flex gap-4'>
              {/* <RxCross2 onClick={() => { setShowProfile(!showProfile) }} className='absolute top-2 right-2 cursor-pointer' size={15} /> */}
              <div className='w-[20%]'>
                <div className='w-16 h-16 bg-[#95FAF9] rounded-full flex justify-center items-center'>
                  <p className='text-lg font-semibold text-[#3A3A3C]'>J</p>
                </div>
              </div>

              <div className='w-full'>
                <div className='flex w-full justify-between'>
                  <div>
                    <p className='text-[14px] font-semibold text-[#3A3A3C]'>John S</p>
                    <div className='flex gap-2 mt-2'>
                      <GrLocation />

                      <p className='text-[12px] font-semibold text-[#3A3A3C]'>Allen, Texas, US</p>

                    </div>
                  </div>
                  <div className='cursor-pointer border-[1px] h-8 border-[#114B53] rounded-full px-3 flex items-center' onClick={() => { setShowFullProfile(!showFullProfile) }}>
                    <p className='text-[#114B53] text-[12px] font-semibold'>View Full Profile</p>
                  </div>

                </div>
                <div className='mt-3'>
                  <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Experience (Total 4 Years)</p>
                  <p className='text-[12px] font-semibold text-[#6B7588] mt-1'>Sr. Java Full Stack </p>
                  <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>xyz company 12/2020 - Present   Domain : Health Care</p>

                </div>
                <div className='mt-3'>
                  <p className='text-[12px] font-semibold text-[#3A3A3C]'>Education</p>
                  <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>Masters, xyz university</p>

                </div>
                <div className='mt-3'>
                  <p className='text-[12px] font-semibold text-[#3A3A3C]'>Skills</p>
                  <div className='flex gap-2'>
                    <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                      <p className='text-[10px] text-[#6B7588] font-semibold'>Java</p>
                    </div>
                    <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                      <p className='text-[10px] text-[#6B7588] font-semibold'>React Js</p>
                    </div>
                    <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                      <p className='text-[10px] text-[#6B7588] font-semibold'>Angular</p>
                    </div>
                    <p className='text-[10px] text-[#6B7588] font-semibold'>+20 More</p>

                  </div>
                </div >
                <div className='mt-3'>
                  <p className='text-[12px] font-semibold text-[#3A3A3C]'>Licence & Certificate</p>
                  <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>Web Development Certificate</p>

                </div>
              </div>
            </div>
          </div>

          <div className='w-full h-[370px] overflow-x-hidden overflow-y-auto mt-5'>


            <table className="w-full table-auto">
              <thead className=''>
                <tr className='bg-[#F2F2F5] rounded-tl-lg rounded-tr-lg '>
                  <th className=' px-4  py-2 w-[35%]'> <div className='flex items-center gap-4'> <input className='border-[#D6DBDE] w-[18px] h-[18px]' type="checkbox" name="" id="" /> <p className='text-[12px]'>Candidate Name</p> </div></th>

                  <th className='text-[12px] text-start w-[15%]'>AI Score</th>
                  <th className='text-[12px] text-start'> Job Applied</th>
                  <th className='text-[12px] text-start' >Action</th>
                </tr>
              </thead>
              
              <tbody className='mt-2'>
              <div className='h-1'></div>
                <tr className='border-[1px] border-[#D6DBDE] mt-2'>
                  <td className='px-4 py-3'> <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                    <div className='text-[12px] cursor-pointer'  onMouseEnter={() => { setShowProfile(!showProfile) }}  >
                      <p>Johnson</p>
                      <p>Senior Full Stack Develoer <br />
                        Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                  </div> </td>
                  <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                    <p className='text-[10px] font-semibold'>100%</p>
                  </div></td>
                  <td><p className='text-[12px] font-medium'>Java Full Stack Developer</p>
                    <p className='text-[12px] font-normal'>Qualification met 3/3</p></td>

                  <td>
                    <div className='relative flex gap-2'>
                      <div className='flex gap-2'>
                        <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} />

                        </div>
                        <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} className='rotate-90' />

                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className=' cursor-pointer rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center' onClick={() => { setMessage(!message) }}>
                          <BiMessageDetail size={20} />

                        </div>

                        <IoMdMore size={25} />

                      </div>

                    </div>
                  </td>
                </tr>
                <div className='h-1'></div>
                <tr className='border-[1px] border-[#D6DBDE] '>
                  <td className='px-4 py-3'> <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                    <div className='text-[12px]'>
                      <p>Johnson</p>
                      <p>Senior Full Stack Develoer <br />
                        Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                  </div> </td>
                  <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                    <p className='text-[10px] font-semibold'>100%</p>
                  </div></td>
                  <td><p className='text-[12px] font-medium'>Java Full Stack Developer</p>
                    <p className='text-[12px] font-normal'>Qualification met 3/3</p></td>

                  <td>
                    <div className='flex gap-2'>
                      <div className='flex gap-2'>
                        <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} />

                        </div>
                        <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} className='rotate-90' />

                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <IoMdMore size={25} />

                      </div>
                    </div>
                  </td>
                </tr>
 <div className='h-1'></div>
                 <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
                  <td className='px-4 py-3'> <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                    <div className='text-[12px]'>
                      <p>Johnson</p>
                      <p>Senior Full Stack Develoer <br />
                        Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                  </div> </td>
                  <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                    <p className='text-[10px] font-semibold'>100%</p>
                  </div></td>
                  <td><p className='text-[12px] font-medium'>Java Full Stack Developer</p>
                    <p className='text-[12px] font-normal'>Qualification met 3/3</p></td>

                  <td>
                    <div className='relative flex gap-2'>
                      <div className='flex gap-2'>
                        <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} />

                        </div>
                        <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} className='rotate-90' />

                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className=' rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <IoMdMore size={25} />

                      </div>

                    </div>
                  </td>
                </tr>
              <div className='h-1'></div>
                <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
                  <td className='px-4 py-3'> <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                    <div className='text-[12px]'>
                      <p>Johnson</p>
                      <p>Senior Full Stack Develoer <br />
                        Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                  </div> </td>
                  <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                    <p className='text-[10px] font-semibold'>100%</p>
                  </div></td>
                  <td><p className='text-[12px] font-medium'>Java Full Stack Developer</p>
                    <p className='text-[12px] font-normal'>Qualification met 3/3</p></td>

                  <td>
                    <div className='flex gap-2'>
                      <div className='flex gap-2'>
                        <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} />

                        </div>
                        <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} className='rotate-90' />

                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <IoMdMore size={25} />

                      </div>
                    </div>
                  </td>
                </tr>
              <div className='h-1'></div>
                <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
                  <td className='px-4 py-3'> <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                    <div className='text-[12px]'>
                      <p>Johnson</p>
                      <p>Senior Full Stack Develoer <br />
                        Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                  </div> </td>
                  <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                    <p className='text-[10px] font-semibold'>100%</p>
                  </div></td>
                  <td><p className='text-[12px] font-medium'>Java Full Stack Developer</p>
                    <p className='text-[12px] font-normal'>Qualification met 3/3</p></td>

                  <td>
                    <div className='flex gap-2'>
                      <div className='flex gap-2'>
                        <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} />

                        </div>
                        <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} className='rotate-90' />

                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <IoMdMore size={25} />

                      </div>
                    </div>
                  </td>
                </tr>
              <div className='h-1'></div>
                <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
                  <td className='px-4 py-3'> <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                    <div className='text-[12px]'>
                      <p>Johnson</p>
                      <p>Senior Full Stack Develoer <br />
                        Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                  </div> </td>
                  <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                    <p className='text-[10px] font-semibold'>100%</p>
                  </div></td>
                  <td><p className='text-[12px] font-medium'>Java Full Stack Developer</p>
                    <p className='text-[12px] font-normal'>Qualification met 3/3</p></td>

                  <td>
                    <div className='flex gap-2'>
                      <div className='flex gap-2'>
                        <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} />

                        </div>
                        <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} className='rotate-90' />

                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <IoMdMore size={25} />

                      </div>
                    </div>
                  </td>
                </tr>
               <div className='h-1'></div>
                <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
                  <td className='px-4 py-3'> <div className='flex gap-4 items-center'>
                    <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                    <div className='text-[12px]'>
                      <p>Johnson</p>
                      <p>Senior Full Stack Develoer <br />
                        Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                  </div> </td>
                  <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                    <p className='text-[10px] font-semibold'>100%</p>
                  </div></td>
                  <td><p className='text-[12px] font-medium'>Java Full Stack Developer</p>
                    <p className='text-[12px] font-normal'>Qualification met 3/3</p></td>

                  <td>
                    <div className='flex gap-2'>
                      <div className='flex gap-2'>
                        <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} />

                        </div>
                        <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineLike size={20} className='rotate-90' />

                        </div>
                      </div>
                      <div className='flex gap-5 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <IoMdMore size={25} />

                      </div>
                    </div>
                  </td>
                </tr>



              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Show Full Profile */}

      <div
        className={`w-full h-full flex p-3 md:p-3 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-100 ${showFullProfile ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
        <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

        <div className='z-[30] max-w-[1000px] w-full h-full bg-white rounded-lg overflow-auto relative top-[0px] p-5'>
          


          <div className='w-full flex justify-between'>
            <div className='border-[1px] border-[#D6DBDE] p-4 rounded-lg '>
              <div className='w-full flex gap-6 justify-between'>
                <div>
                  <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Johnson</p>
                  <p className='text-[10px] font-semibold text-[#6B7588] mt-'>Senior Full Stack Develoer</p>
                  <p className='text-[10px] font-semibold text-[#6B7588] mt-'>Allen, TX - Date Applied : 05/06/2024</p>
                </div>

                <div className='w-[33px] h-[33px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                  <p className='text-[8px] font-semibold'>100%</p>
                </div>

              </div>
              <div className='flex gap-2 items-center mt-6'>
              <GoArrowLeft />
              <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Previous</p>
              </div>
            </div>

           <div className='flex gap-5'>

        
            <div className='border-[1px] border-[#D6DBDE] p-4 rounded-lg '>
              <div className='w-full flex gap-6 justify-between'>
                <div>
                  <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Johnson</p>
                  <p className='text-[10px] font-semibold text-[#6B7588] mt-'>Senior Full Stack Develoer</p>
                  <p className='text-[10px] font-semibold text-[#6B7588] mt-'>Allen, TX - Date Applied : 05/06/2024</p>
                </div>

                <div className='w-[33px] h-[33px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                  <p className='text-[8px] font-semibold'>100%</p>
                </div>

              </div>
              <div className='flex gap-2 items-center mt-6 justify-end'>
              <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Next</p>
              <GoArrowRight />
              </div>
            </div>

            <IoMdClose size={30} onClick={() => { setShowFullProfile(!showFullProfile) }} className="cursor-pointer" />

            </div>

          
          </div>


          <div className='w-full flex gap-5   mt-6'>
                   <div className='w-[25%] flex flex-col gap-5 '>
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

                                    <div className='w-full border-[1px] border-[#D6DBDE] rounded-lg px-3 py-2 md:px-3 md:py-2 '>
                                    <p className='text-sm font-semibold mt-2'>Qualification met 2/3</p>
                                    <hr className='mt-2' />
                                    <p className='text-[12px] font-semibold mt-2 text-[#6B7588]'> How many years of experience do you have in Java ? ( in years)</p>
                                    <p className='text-[10px] font-semibold mt-1 text-[#6B7588]'> Your requirement : 3 (Required)</p>
                                      <div className='mt-2 w-fit border-[1px] border-[#06A560] rounded-full px-2 py-1 flex gap-2 items-center'>
                                      <IoCheckmark size={13} className='text-[#06A560]' />
                                      <p className='text-[10px]'>4</p>
                                      </div>
                                      
                                    <p className='text-[12px] font-semibold mt-2 text-[#6B7588]'> Can you able to relocate the job location</p>
                                    <p className='text-[10px] font-semibold mt-1 text-[#6B7588]'> Your requirement : Yes (Required)</p>
                                      <div className='mt-2 w-fit border-[1px] border-[#06A560] rounded-full px-2 py-1 flex gap-2 items-center'>
                                      <IoCheckmark size={13} className='text-[#06A560]' />
                                      <p className='text-[10px]'>Yes</p>
                                      </div>
                                    <p className='text-[12px] font-semibold mt-2 text-[#6B7588]'> Immediate Joiner ?</p>
                                    <p className='text-[10px] font-semibold mt-1 text-[#6B7588]'> Your requirement : Yes (Required)</p>
                                      <div className='mt-2 w-fit border-[1px] border-[#FF3737] rounded-full px-2 py-1 flex gap-2 items-center'>
                                      <IoCheckmark size={13} className='text-[#FF3737]' />
                                      <p className='text-[10px]'>No</p>
                                      </div>
                                    </div>
                   </div>
                   <div className='w-[75%] '>
                      <div className='flex  gap-3 justify-end'>
                            <div className='bg-[#114B53] py-2 px-4 rounded-full'>
                              <p className='text-[12px] font-semibold text-white'>Send RTR</p>
                            </div>
                            <div className='border-[1px] border-[#114B53] py-2 px-4 rounded-full flex gap-2 items-center'>
                            <IoMail className='text-[#114B53]'/>

                              <p className='text-[12px] font-semibold text-[#114B53]'> Message</p>
                            </div>
                            <div className='bg-[#E9F358] py-2 px-4 rounded-full '>
                              <p className='text-[12px] font-semibold text-[#114B53]'>Download Resume</p>
                            </div>
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
                          <hr  className='mt-2'/>
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
                               <img src={resume} alt=""  className='mt-3'/>
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

export default Applicants

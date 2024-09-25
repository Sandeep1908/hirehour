import React, { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { CiFilter, CiSearch } from 'react-icons/ci'
import { FaBehanceSquare, FaCaretDown, FaGithub, FaLinkedin,  FaRegTrashAlt } from 'react-icons/fa'
import {  IoIosArrowDown, IoMdClose, IoMdMore } from 'react-icons/io'
import { IoCallOutline, IoCheckmark, IoMail } from 'react-icons/io5'
import { MdOutlineAttachment, MdOutlineMail } from 'react-icons/md'
import { LuSendHorizonal } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import resume from '../../../assets/resume.svg'
import { RxCross2 } from 'react-icons/rx'
import ShortListed from './ShortListed'
import { PiArrowsLeftRightBold } from 'react-icons/pi'




const AllApplications: React.FC = () => {

  const [like, setLike] = useState<boolean>(false);
  const [midLike, setMidLike] = useState<boolean>(false);
  const [disLike, setDisLike] = useState<boolean>(false);
  const [moreOption, setMoreOption] = useState<boolean>(false);


  const [message, setMessage] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showFullProfile, setShowFullProfile] = useState<boolean>(false);


  return (
    <div className='w-full h-auto'>
      <div className='w-full h-auto'>

     

        <div className='w-full h-auto px-3 relative'>


          <div className={`absolute right-10 z-20 max-w-[300px] top-[-180px] w-full h-[450px] bg-white shadow-lg rounded-lg transition-all duration-500 ${message ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
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



          <div className={`absolute left-16 z-20 max-w-[400px] top-5 p-6 w-full h-auto bg-white shadow-lg rounded-lg transition-all duration-500 ${showProfile ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`} onMouseLeave={() => { setShowProfile(!showProfile) }}>
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

          <div className='w-full h-[59vh] overflow-auto  mt-2'>


            <table className="w-full h-full  ">
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
                    <div className='text-[12px] cursor-pointer' onMouseEnter={() => { setShowProfile(!showProfile) }}  >
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
                        <div onClick={() => { setLike(!like) }} className={`${like ? "border-[#06A560] bg-green-100 text-[#06A560]" : "border-[#D6DBDE] hover:bg-green-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineLike size={20} />

                        </div>
                        <div onClick={() => { setMidLike(!midLike) }} className={`${midLike ? "border-yellow-500 bg-yellow-100 text-yellow-500" : "border-[#D6DBDE] hover:bg-yellow-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineLike size={20} className='rotate-90 ' />

                        </div>
                      </div>
                      <div className='flex gap-10 items-center'>
                        <div onClick={() => { setDisLike(!disLike) }} className={`${disLike ? "border-red-500 bg-red-100 text-red-500" : "border-[#D6DBDE] hover:bg-red-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className=' cursor-pointer rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center' onClick={() => { setMessage(!message) }}>
                          <BiMessageDetail size={20} />

                        </div>

                        <div className='relative' onClick={() => { setMoreOption(!moreOption) }}>
                          <IoMdMore size={25} />
                          <div className={`absolute w-32 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-0 transition-all duration-500 bg-white ${moreOption ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
                            <div className='px-3 py-2'>
                              <p className='text-sm font-semibold'>Sent RTR</p>
                            </div>
                            <hr />
                            <div className='px-3 py-2 flex gap-2 items-center' >
                              <FaRegTrashAlt className='text-red-500' />
                              <p className='text-sm font-semibold text-red-500'>Delete</p>
                            </div>
                          </div>
                        </div>

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
                      <div className='flex gap-10 items-center'>
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
                      <div className='flex gap-10 items-center'>
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
                      <div className='flex gap-10 items-center'>
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
                      <div className='flex gap-10 items-center'>
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
                      <div className='flex gap-10 items-center'>
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
                      <div className='flex gap-10 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <div>

                          <IoMdMore size={25} />
                        </div>

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
                  <IoMail className='text-[#114B53]' />

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


const ShortListedComponent: React.FC = () => {

  const [like, setLike] = useState<boolean>(false);
  const [midLike, setMidLike] = useState<boolean>(false);
  const [disLike, setDisLike] = useState<boolean>(false);
  const [moreOption, setMoreOption] = useState<boolean>(false);


  const [message, setMessage] = useState<boolean>(false);
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showFullProfile, setShowFullProfile] = useState<boolean>(false);
  return (
    <div className=''>
       {/* <div id="filter" className='mt-3 px-4 max-w-[1200px] w-full flex gap-0 overflow-x-auto  relative z-[30] '>
    <div className='flex'>

      <Container />
    </div>

    <div className='p-3 border-[1px] border-[#D6DBDE] rounded-tr-lg min-w-24  '>
      <div className='flex justify-between gap-10'>
        <p className='text-sm text-[#114B53] font-semibold'> <IoMdAdd size={15} className='font-bold' /></p>


      </div>
      <p className='text-xs text-[#114B53] font-semibold mt-5'>Add More </p>
    </div>

  </div> */}
  <div className='w-full h-auto'>
      <div className='w-full h-auto'>

     

        <div className='w-full h-auto px-3 '>


          <div className={`absolute right-10 z-20 max-w-[300px] top-10 w-full h-[450px] bg-white shadow-lg rounded-lg transition-all duration-500 ${message ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
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



          <div className={`absolute  z-20 max-w-[400px] bottom-5 left-[20%] p-6 w-full h-auto bg-white shadow-lg rounded-lg transition-all duration-500 ${showProfile ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`} onMouseLeave={() => { setShowProfile(!showProfile) }}>
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

          <div className='w-full  mt-2'>


            <table className="w-full  table-auto">
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
                    <div className='text-[12px] cursor-pointer' onMouseEnter={() => { setShowProfile(!showProfile) }}  >
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
                        <div onClick={() => { setLike(!like) }} className={`${like ? "border-[#06A560] bg-green-100 text-[#06A560]" : "border-[#D6DBDE] hover:bg-green-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineLike size={20} />

                        </div>
                        <div onClick={() => { setMidLike(!midLike) }} className={`${midLike ? "border-yellow-500 bg-yellow-100 text-yellow-500" : "border-[#D6DBDE] hover:bg-yellow-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineLike size={20} className='rotate-90 ' />

                        </div>
                      </div>
                      <div className='flex gap-10 items-center'>
                        <div onClick={() => { setDisLike(!disLike) }} className={`${disLike ? "border-red-500 bg-red-100 text-red-500" : "border-[#D6DBDE] hover:bg-red-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className=' cursor-pointer rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center' onClick={() => { setMessage(!message) }}>
                          <BiMessageDetail size={20} />

                        </div>

                        <div className='relative' onClick={() => { setMoreOption(!moreOption) }}>
                          <PiArrowsLeftRightBold size={25} />
                          <div className={`absolute w-32 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-0 transition-all duration-500 bg-white ${moreOption ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
                            <div className='px-3 py-2'>
                              <p className='text-sm font-semibold'>Sent RTR</p>
                            </div>
                            <hr />
                            <div className='px-3 py-2 flex gap-2 items-center' >
                              <FaRegTrashAlt className='text-red-500' />
                              <p className='text-sm font-semibold text-red-500'>Delete</p>
                            </div>
                          </div>
                        </div>

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
                      <div className='flex gap-10 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <PiArrowsLeftRightBold size={25} />

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
                      <div className='flex gap-10 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className=' rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <PiArrowsLeftRightBold size={25} />

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
                      <div className='flex gap-10 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <PiArrowsLeftRightBold size={25} />

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
                      <div className='flex gap-10 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <PiArrowsLeftRightBold size={25} />

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
                      <div className='flex gap-10 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <PiArrowsLeftRightBold size={25} />

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
                      <div className='flex gap-10 items-center'>
                        <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <AiOutlineDislike size={20} />

                        </div>
                        <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                          <BiMessageDetail size={20} />

                        </div>

                        <div>

                          <PiArrowsLeftRightBold size={25} />
                        </div>

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
                  <IoMail className='text-[#114B53]' />

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
    </div>
  )
}
const Matched: React.FC = () => {
  return (
    <div className='p-5'>
      <p className='text-sm'>Matched Applicants</p>
    </div>
  )
}

const Applicants: React.FC = () => {

  const jobFilters = [
    {
      label: 'All Applicants',
      component: <AllApplications />,
    },
    {
      label: 'Matched Applicants',
      component: <Matched />,
    },
  ];

  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const [addCandidate, setAddCandidate] = useState<boolean>(false);
  // const [showShortList, setShowShortList] = useState<boolean>(false);



  const [selectedOptionVisa, setSelectedOptionVisa] = useState<string>("");
  const [selectedOptionDate, setSelectedOptionDate] = useState<string>("");
  const [selectedOptionAllJob, setSelectedOptionAllJob] = useState<string>("");
  // const [selectedOptionLocation, setSelectedOptionLocation] = useState<string>("");

  const [itemId, setItemId] = useState(0)

  const [isSelected, setIsSelected] = useState(0);
  const [dropdown, setDropdown] = useState<number>(0);


  //   const allLocation = [
  //     "Allen, Tx",
  //     "Allen, Tx",
  //     "Allen, Tx",
  //     "Allen, Tx",
  //     "Allen, Tx",
  //     "Allen, Tx",
  //     "Allen, Tx",
  //     "Allen, Tx"
  // ];
  // const handleCheckboxLocation = (value:string) => {

  //   setSelectedOptionLocation((prevSelected) => prevSelected.includes(value) 
  //        ? prevSelected.filter((item:string) => item !== value)
  //           : [...prevSelected, value]
  //         );


  // };
  // const handleResetLocation = () => {
  //   setSelectedOptionLocation([]);
  // };


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


    <div className='w-full  bg-white rounded-lg'>


      <div className='  w-full h-auto'>
        <div className="flex justify-between items-center p-3">
          <h1 className="text-sm font-semibold">Applicants</h1>
          <div className='flex gap-4'>
            <div className='border-[1px] border-[#6B7588] rounded-lg   px-4 flex items-center gap-2'>
            <CiSearch className='text-[#C7C9D9]' />
            <input type="text" className='text-xs'  placeholder='Search Candidate'/>

            </div>
            <p className="w-24 h-8 flex justify-center items-center bg-[#E9F358] text-[#104B53] rounded-full text-xs">
            Post a Job
          </p>
          </div>
         
        </div>
        <hr />
        <div className="p-2 mt-1  flex justify-between">
          <ul className="max-w-[350px]  w-full rounded-full px-1 flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
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
          <div onClick={() => { setAddCandidate(!addCandidate) }} className='w-fit text-[10px] rounded-full    px-3 py-1  cursor-pointer  flex justify-center items-center space-x-4 bg-[#104B53]'>
            <p className='text-xs text-white'>Add Candidate</p>
          </div>
        </div>


        <div>
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


        <div className=' flex gap-2 mt-3 px-4'>

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
                    "Today", "Yesterday", "Last 3 days", "Last week", "Last 2 week"
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

          {/* <div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(3)}
                                className={`${selectedOptionLocation.length > 0 && "bg-[#effefd]"}  flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full`}
                            >
                                <div className="text-[14px] font-normal items-center text-[#114B53] flex gap-1">
                                    <p className='text-[12px] font-semibold text-[#114B53]'>Location</p>
                                    {selectedOptionLocation.length > 0 && (
                                        <div className='bg-[#114B53]  w-[15px] h-[15px] text-[10px] rounded-full text-white flex justify-center items-center'>
                                            {selectedOptionLocation.length}
                                        </div>
                                    )}
                                </div>
                                <FaCaretDown  className={`${dropdown === 3 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 3 && (
                                <div className='absolute top-12 left-0 w-[269px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                      <div className='px-3'>
                                        <input className='text-xs p-1 w-full border-[1px] border-[#C7C9D9] rounded-lg' type="text"  placeholder='Type Location'/>
                                      </div>
                                        {allLocation.map((type) => (
                                            <div key={type} onClick={() => handleCheckboxLocation(type)} className='w-full px-4 py-2 flex gap-2'>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedOptionLocation.includes(type)}
                                                //   onChange={() => handleCheckboxChange(type)}
                                                />
                                                <label className='text-[#333333] text-[10px] font-medium'>{type}</label>
                                            </div>
                                        ))}
                                        <div className='w-full  flex gap-2 px-4 py-2 justify-end'>
                                            <div className='px-3 py-1 bg-[#E9F358] rounded-full cursor-pointer' onClick={() => setDropdown(0)}>
                                                <p className='text-xs text-[#114B53] font-semibold'> Apply</p>
                                            </div>
                                            <button onClick={handleResetLocation} className='text-[12px] text-[#114B53] font-semibold cursor-pointer'>
                                                <p onClick={() => setDropdown(0)}>Reset</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> */}




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
         {/* {
            <div className={` transition-all duration-500 ${itemId===3 ?"opacity-1 scale-[1.01] z-[40] h-[75px]" : "opacity-0 z-[-10] h-0"}`}> <ShortListed/></div>
         } */}
        
        
        </div>

        {/* all Applicants  */}


        {itemId===3?
        
       
       <div className={`w-full  space-y-3  h-[60vh] overflow-hidden  `}>
       {
      <div className={`relative z-10 `}> <ShortListed/></div>
       }
    <div className='h-[46vh] overflow-auto'>

    <ShortListedComponent/>
    </div>
</div> :

<div className={`w-full  space-y-3  h-[60vh]  `}>
{jobFilters?.map((item, i) => {
  if (jobFilterIdx === i) {
    return <div key={i}>{item.component}</div>;
  }
})}
</div>

        }

       
       


      </div>

        {/* Add Candidate */}

        <div
        className={`w-full h-full flex p-3 md:p-3 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-100 ${addCandidate ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
        <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

        <div className='z-[30] max-w-[600px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px] '>

          <div className=' p-5 flex justify-between items-center'>
            <p className='text-base font-bold'>Add Candidate</p>
            <IoMdClose size={30} onClick={() => { setAddCandidate(!addCandidate) }} className="cursor-pointer" />
          </div>
          <hr />
          <div className='p-5'>
            <div className='w-full '>
              <p className='text-sm font-medium'>Job role</p>
              <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-3 ' >
                <option value=""> Java Full stack </option>
                <option value=""> Java Full stack </option>
              </select>
            </div>

            <div className='flex justify-center items-center border-[1px] border-[#3A3A3C] bg-[#F2F2F2] border-dashed rounded-lg mt-3'>
              <div className='py-5'>
                <p className='text-sm font-bold'>Drag & Drop or add the file Here</p>
                <p className='text-sm '><b>Note</b> : Supported File Type Pdf & Docx</p>
              </div>
            </div>

            <div className='w-full flex gap-4 mt-3'>
              <div className='w-full '>
                <p className='text-sm font-medium'>First name</p>
                <input type="text" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
              </div>
              <div className='w-full '>
                <p className='text-sm font-medium'>Last name</p>
                <input type="text" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
              </div>
            </div>
            <div className='w-full flex gap-4 mt-3'>
              <div className='w-full '>
                <p className='text-sm font-medium'>Email</p>
                <input type="email" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
              </div>
              <div className='w-full '>
                <p className='text-sm font-medium'>Phone number</p>
                <input type="number" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
              </div>
            </div>
            <div className='w-full flex items-center mt-3 gap-2 '>
              <input className='w-5 h-5' type="checkbox" name="" id="" />
              <label htmlFor="" className='text-sm'>By clicking this Send email message to invite candidate to TopEquator</label>
            </div>
            <div className='w-full mt-3 '>
              <p className='text-sm font-medium'>Add candidate to</p>
              <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-3 ' >
                <option value=""> Choose from here... </option>
                <option value=""> candidate 1 </option>
                <option value="">candidate 2 </option>
                <option value=""> candidate 3 </option>
              </select>
            </div>
          </div>
          <hr />
          <div className='w-full flex justify-end p-5'>
            <div className='bg-[#E9F358] w-[110px] h-[30px] flex justify-center items-center rounded-full cursor-pointer '>
              <p className='text-sm font-semibold text-[#114B53]'>Update</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Applicants

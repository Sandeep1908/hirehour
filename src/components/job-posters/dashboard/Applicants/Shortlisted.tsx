import React, {  useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { FaBehanceSquare, FaGithub, FaLinkedin, FaRegTrashAlt } from 'react-icons/fa'
import {  IoMdClose, IoMdMore } from 'react-icons/io'
import { IoCallOutline, IoCheckmark, IoMail } from 'react-icons/io5'
import { MdOutlineAttachment, MdOutlineMail } from 'react-icons/md'
import { LuSendHorizonal } from 'react-icons/lu'
import { GrLocation } from 'react-icons/gr'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import resume from '../../../../assets/resume.svg'

import { RxCross2 } from 'react-icons/rx'

import { BsInfoCircleFill } from 'react-icons/bs'


type AppliedJobProps = {
  allAppliedJobs: {
    applications: {
      id: number;
      candidate: {
        user: {
          firstName: string;
        };
        location: string;
        candidatedetailsexperiences: {
          companydetails: string;
          durationStart: string;
          durationEnd: string;
        }[];
        candidatedetailseducationdetails: {
          degree: string;
          schoolName: string;
        }[];
        candidatedetailsskills: {
          skillName: string;
        }[];
        candidatedetailslicensescerts: {
          certName: string;
        }[];
      };
    }[];
  };
};
const Shortlisted:React.FC<AppliedJobProps> = ({allAppliedJobs}) => {

    const [like, setLike] = useState<boolean>(false);
      const [midLike, setMidLike] = useState<boolean>(false);
      const [disLike, setDisLike] = useState<boolean>(false);
      const [moreOption, setMoreOption] = useState<boolean>(false);
    
      const [profileId, setProfileId] = useState<number>()
    
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





        {allAppliedJobs?.applications?.map((appliedJob: any, id: number) => {
          // console.log("allAppliedJobs1111111",appliedJob)
          if (profileId === appliedJob.id) {
            return (
              <div key={id} className={`absolute left-16 z-20 max-w-[440px] top-5 py-6 px-3 w-full h-auto bg-white shadow-lg rounded-lg transition-all duration-500 ${showProfile ? "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`} onMouseLeave={() => { setShowProfile(!showProfile) }}>
                <div className='w-full h-full flex gap-4'>
                  {/* <RxCross2 onClick={() => { setShowProfile(!showProfile) }} className='absolute top-2 right-2 cursor-pointer' size={15} /> */}
                  <div className='w-[20%]'>
                    <div className='w-16 h-16 bg-[#95FAF9] rounded-full flex justify-center items-center'>
                      <p className='text-lg font-semibold text-[#3A3A3C]'>{appliedJob?.candidate?.user?.firstName?.[0]}</p>
                    </div>
                  </div>

                  <div className='w-full'>
                    <div className='flex w-full justify-between'>
                      <div>
                        <p className='text-[14px] font-semibold text-[#3A3A3C]'>{appliedJob?.candidate?.user?.firstName}</p>
                        <div className='flex gap-2 mt-2'>
                          <GrLocation />

                          <p className='text-[12px] font-semibold text-[#3A3A3C]'>{appliedJob?.candidate?.location}</p>

                        </div>
                      </div>
                      <div className='cursor-pointer border-[1px] h-8 border-[#114B53] rounded-full px-3 flex items-center' onClick={() => { setShowFullProfile(!showFullProfile) }}>
                        <p className='text-[#114B53] text-[12px] font-semibold'>View Full Profile</p>
                      </div>

                    </div>
                    <div className='mt-3'>
                      <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Experience (Total 4 Years)</p>
                      <p className='text-[12px] font-semibold text-[#6B7588] mt-1'>Sr. Java Full Stack </p>
                      <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>{appliedJob?.candidate?.candidatedetailsexperiences[0]?.companydetails} {appliedJob?.candidate?.candidatedetailsexperiences[0]?.durationStart?.split('T')[0]} - {appliedJob?.candidate?.candidatedetailsexperiences[0]?.durationEnd?.split('T')[0]}   Domain : Health Care</p>

                    </div>
                    <div className='mt-3'>
                      <p className='text-[12px] font-semibold text-[#3A3A3C]'>Education</p>
                      <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>{appliedJob?.candidate?.candidatedetailseducationdetails[0]?.degree}, {appliedJob?.candidate?.candidatedetailseducationdetails[0]?.schoolName}</p>

                    </div>
                    <div className='mt-3'>
                      <p className='text-[12px] font-semibold text-[#3A3A3C]'>Skills</p>
                      <div className='flex gap-2'>
                        <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                          <p className='text-[10px] text-[#6B7588] font-semibold'>{appliedJob?.candidate?.candidatedetailsskills[0]?.skillName}</p>
                        </div>

                        {/* <p className='text-[10px] text-[#6B7588] font-semibold'>+20 More</p> */}

                      </div>
                    </div >
                    <div className='mt-3'>
                      <p className='text-[12px] font-semibold text-[#3A3A3C]'>Licence & Certificate</p>
                      <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>{appliedJob?.candidate?.candidatedetailslicensescerts[0]?.certName}</p>

                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}

        <div className='w-full h-[59vh] overflow-auto  mt-2'>


          <table className="w-full  ">
            <thead className=''>
              <tr className='bg-[#F2F2F5] rounded-tl-lg rounded-tr-lg '>
                <th className=' px-4  py-2 w-[35%]'> <div className='flex items-center gap-4'> <input className='border-[#D6DBDE] w-[18px] h-[18px]' type="checkbox" name="" id="" /> <p className='text-[12px]'>Candidate Name</p> </div></th>

                <th className='text-[12px] text-start w-[15%]'>  <div className='flex items-center gap-2'><BsInfoCircleFill fill='#104B53' /> AI Score</div></th>
                <th className='text-[12px] text-start'> Job Applied</th>
                <th className='text-[12px] text-start' >Action</th>
              </tr>
            </thead>

            <tbody className='mt-2'>

              {allAppliedJobs?.applications?.map((appliedJob: any) => {
                console.log("appliedJob", appliedJob)
                if(appliedJob.isShortlisted===true){
                  return (
                    <>
  
                      <div className='h-1'></div>
                      <tr className='border-[1px] border-[#D6DBDE] mt-2'>
                        <td className='px-4 py-3'> <div className='flex gap-4 items-center' onMouseEnter={() => { setProfileId(appliedJob.id) }} >
                          <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" />
                          <div className='text-[12px] cursor-pointer' onMouseEnter={() => { setShowProfile(!showProfile) }}  >
                            <p>{appliedJob?.candidate?.user?.firstName}</p>
                            <p>{appliedJob?.job?.jobRoleName} <br />
                              {appliedJob?.job?.jobLocation} - Date Applied :  </p>
                          </div>
                        </div> </td>
                        <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
                          <p className='text-[10px] font-semibold'>100%</p>
                        </div></td>
                        <td><p className='text-[12px] font-medium'>{appliedJob?.job?.jobRoleName}</p>
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
                    </>
                  )
                }
               
              })}


            </tbody>
          </table>


        </div>
      </div>

    </div>


    {/* Show Full Profile */}

    {allAppliedJobs?.applications?.map((appliedJob: any, id: number) => {
      if (profileId === appliedJob.id) {
        return (
          <div key={id}
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
                        <p className='text-[30px] font-extrabold'>{appliedJob?.candidate?.user?.firstName.charAt(0)}</p>
                      </div>
                      <p className='text-sm font-semibold mt-3'>{appliedJob?.candidate?.user?.firstName}</p>
                      <div className='flex gap-2 mt-2'>
                        <GrLocation />

                        <p className='text-[12px] font-semibold text-[#3A3A3C]'>{appliedJob?.candidate?.location}</p>

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

                        <p className='text-[12px] font-medium text-[#3A3A3C] '>{appliedJob?.candidate?.user?.email}</p>
                      </div>

                    </div>
                    <div className='mt-3 flex items-center justify-between'>
                      <div className='flex items-center gap-2 '>
                        <IoCallOutline size={20} />

                        <p className='text-[12px] font-medium text-[#3A3A3C] '>{appliedJob?.candidate?.user?.phoneNumber}</p>
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
                      <p className='text-[12px] mt-3'>{appliedJob?.candidate?.summary}</p>
                    </div>
                    <hr className='w-[95%] m-auto mt-5' />
                    <div className='mt-5'>
                      <p className='text-base font-bold'>Work experience</p>


                      {appliedJob?.candidate?.candidatedetailsexperiences.length === 0 ?
                        <p>-</p>
                        :
                        <div>
                          <p className='text-sm font-bold mt-1'>Java Fullstack  </p>
                          <p className='text-[12px] font-bold text-[#8F90A6] mt-2'>{appliedJob?.candidate?.candidatedetailsexperiences[0]?.companydetails} - {appliedJob?.candidate?.candidatedetailsexperiences[0]?.place}  </p>
                          <div className='flex gap-2 mt-2'>
                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                              <p className='text-[10px] text-[#6B7588] font-semibold'>{appliedJob?.candidate?.candidatedetailsexperiences[0]?.durationStart?.split('T')[0]} - {appliedJob?.candidate?.candidatedetailsexperiences[0]?.durationEnd?.split('T')[0]}</p>
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
                            <li> {appliedJob?.candidate?.candidatedetailsexperiences[0]?.descriptionOfExperience} </li>

                          </ul>
                        </div>
                      }


                    </div>


                    <div className='mt-5'>
                      <p className='text-base font-bold'>Education</p>
                      {appliedJob?.candidate?.candidatedetail?.candidatedetailseducationdetails.length === 0 ?

                        <p>-</p>

                        :

                        <>
                          <p className='text-sm font-bold mt-3'>{appliedJob?.candidate?.candidatedetail?.candidatedetailseducationdetails[0]?.degree} {appliedJob?.candidate?.candidatedetailseducationdetails[0]?.major}  </p>
                          <p className='text-[12px] font-bold text-[#8F90A6] mt-2'>{appliedJob?.candidate?.candidatedetailseducationdetails[0]?.schoolName} - {appliedJob?.candidate?.candidatedetailseducationdetails[0]?.schoolLocation}  </p>
                          <div className='flex gap-2 mt-2'>
                            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                              <p className='text-[10px] text-[#6B7588] font-semibold'>{appliedJob?.candidate?.candidatedetailseducationdetails[0]?.schoolName} - {appliedJob?.candidate?.candidatedetailseducationdetails[0]?.schoolLocation}</p>
                            </div>

                          </div>
                        </>
                      }

                    </div>



                    <div className='mt-5'>
                      <p className='text-base font-bold'>Skills </p>

                      {appliedJob?.candidate?.candidatedetailsskills.length === 0 ?
                        <p>-</p>
                        :
                        <div className='mt-3'>
                          <div className='flex gap-4'>
                            <p className='text-[#114B53] text-sm'>Overall Skills</p>
                            <p className='text-black text-sm'> Current Skills</p>
                          </div>
                          <hr className='mt-2' />
                          <div className='flex gap-4 mt-3'>
                            <div className='w-[50%]'>
                              <div className='w-full flex justify-between'>
                                <p className='text-[#3A3A3C] text-[12px]'>{appliedJob?.candidate?.candidatedetailsskills[0]?.skillName}</p>
                                <p className='text-[#3A3A3C] text-[12px]'>{appliedJob?.candidate?.candidatedetailsskills[0]?.yearsOfExperience} Years</p>
                              </div>
                              <div className='w-full h-1 bg-[#EBEBF0] rounded-full mt-2'>
                                <div className={`w-[${Math.round((appliedJob?.candidate?.candidatedetailsskills[0]?.yearsOfExperience / 30) * 100)}%] h-1 bg-[#114B53] rounded-full`}>

                                </div>
                              </div>
                            </div>

                          </div>

                          <hr className='mt-4' />


                        </div>
                      }


                    </div>
                    <div className='mt-5'>
                      <p className='text-base font-bold'>Resume </p>
                      <img src={resume} alt="" className='mt-3' />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        )
      }
    })}


  </div>
  )
}

export default Shortlisted





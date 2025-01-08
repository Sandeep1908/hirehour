import React, { useEffect, useState } from 'react'

import { FaBehanceSquare,  FaGithub, FaLinkedin } from 'react-icons/fa'
import {  IoIosArrowDown, IoMdClose, IoMdMore } from 'react-icons/io'
import { IoCallOutline, IoCheckmark, IoMail } from 'react-icons/io5'
import {  MdOutlineMail } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import resume from '../../../assets/resume.svg'

import ShortListed from './ShortListed'
import { fetchAllUserDetails } from '../../../utils/admin/getAllUserDetails'
import { useQuery } from '@tanstack/react-query'




type accessProps={
  setAddAdmin : (arg:boolean) => void
  setAsign : (arg:boolean) => void
  users: Users[];
  
}



type Role = {
  roleName: string;
};

type Permission = {
  permName: string;
};

type UserPermLabelsAcrossApplications = {
  role: Role;
  permTag: Permission;
};




interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string; // Adjust fields as per your API response
  createdAt: string; // Adjust fields as per your API response
  recruiterdetail:string;
  candidatedetail:string;
  admindetail:string;
  userpermlabelsacrossapplications: UserPermLabelsAcrossApplications[];

}



const AccessComponent: React.FC<accessProps> = ({setAddAdmin,setAsign,users}) => {


  const [moreOption, setMoreOption] = useState<boolean>(false);

  
  
  const [showFullProfile, setShowFullProfile] = useState<boolean>(false);
  return (
    <div className=''>
    
  <div className='w-full h-auto'>
      <div className='w-full h-auto'>

     

        <div className='w-full h-auto px-3 '>

          <div className='w-full  mt-2'>


            <table className=" w-full  table-auto">
              <thead className='w-full'>
                <tr className='bg-[#F2F2F5] border-[1px] border-[#D6DBDE] mt-2  rounded-full w-full'>
                  <th className=' px-4  py-2 w-[20%]'> <div className='flex items-center gap-4'> 
                     <p className='text-[12px]'>Full name</p> </div></th>

                  <th className='text-[12px] text-start w-[25%]'>Email Address</th>
                  <th className='text-[12px] text-start w-[20%]'> Role</th>
                  <th className='text-[12px] text-start w-[25%]'  >Access</th>
                </tr>
              </thead>

              <tbody>

               
             
                {users?.map((user:any, index:number) => {
                  if(user.userProfileReference === "admin"){
                    return(  <tr
                      key={index}
                      className="relative border-[1px] border-[#D6DBDE] hover:bg-gray-50"
                    >
                      <td className="px-4 align-top py-3">
                        <div className="flex gap-4">
                          <div className="text-[12px] cursor-pointer">
                            <p>{user.firstName || "N/A"}</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-top py-3">
                        <p className="text-[12px] cursor-pointer">
                          {user.email || "N/A"}
                        </p>
                      </td>
                      <td className="align-top py-3">
                        <p className="text-[12px] font-medium">
                          {/* {user.role || "N/A"} */}
                          {user.userpermlabelsacrossapplications[0].role.roleName}
                          </p>
                      </td>
                      <td className="py-3">
                        <div className="flex flex-col gap-2">
                          <div className=" justify-between pr-7 flex gap-2">
                          <p className="text-[12px] font-medium">
                          {/* {user.role || "N/A"} */}
                          {user.userpermlabelsacrossapplications?.map((permTag:any,i:number)=>{
                            return(<span key={i}>
                              {permTag.permTag.permName} , 
                            </span>)
                          })}
                          </p>
                            <div
                              className="relative"
                              onClick={() => {
                                setMoreOption(!moreOption);
                              }}
                            >
                              <IoMdMore size={20} />
                              
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>)
                  }
                
})}
              </tbody>

{/* edit  */}

              <div
                              className={`absolute w-32 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[90px] top-[165px] transition-all duration-500 bg-white ${
                                moreOption
                                  ? "opacity-1 scale-[1.01] z-[40]"
                                  : "opacity-0 z-[-10]"
                              }`}
                            >
                              <div
                                onClick={() => {
                                  setAddAdmin(true);
                                }}
                                className="px-3 py-2"
                              >
                                <p className="text-xs font-semibold">Edit</p>
                              </div>
                              <hr />
                              <div
                                onClick={() => {
                                  setAsign(true);
                                }}
                                className="px-3 py-2"
                              >
                                <p className="text-xs font-semibold">Assign To</p>
                              </div>
                              <hr />
                              <div className="px-3 py-2">
                                <p className="text-xs font-semibold">Delete</p>
                              </div>
                            </div>
             
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
const TeamsComponent: React.FC<accessProps> = ({setAddAdmin,setAsign,users}) => {

    const [showFullProfile, setShowFullProfile] = useState<boolean>(false);
    const [moreOption, setMoreOption] = useState<boolean>(false);


  return (
    <div className=''>
    
    <div>
        <ShortListed/>
    </div>
    
  <div className='w-full h-auto'>
      <div className='w-full h-auto'>

     

        <div className='w-full h-auto px-3 '>

          <div className='w-full  mt-2'>


            <table className=" w-full  table-auto">
              <thead className='w-full'>
                <tr className='bg-[#F2F2F5] border-[1px] border-[#D6DBDE] mt-2  rounded-full w-full'>
                  <th className=' px-4  py-2 w-[20%]'> <div className='flex items-center gap-4'> 
                     <p className='text-[12px]'>Full name</p> </div></th>

                  <th className='text-[12px] text-start w-[20%]'>Email Address</th>
                  <th className='text-[12px] text-start w-[20%]'> Role</th>
                  <th className='text-[12px] text-start w-[20%]'  >Access</th>
                  <th className='text-[12px] text-start w-[15%]'  >Assign To</th>
                </tr>
              </thead>
              {users?.map((user,i)=>{
                if(user.userpermlabelsacrossapplications[0].role.roleName !=="recruiter" && user.userpermlabelsacrossapplications[0].role.roleName !=="candidate" ){
                  return(
                    <tbody key={i} className='mt-2'>
                    <tr className='border-[1px] border-[#D6DBDE] mt-2 '>
                      <td className='px-4 align-top py-3'>
                         <div className='flex gap-4 '>
                        <div className='text-[12px] cursor-pointer'  >
                          <p>{user.firstName || "N/A"} {user.lastName || "N/A"}</p>
                         
                        </div>
                      </div> </td>
                      <td className='align-top py-3'>
                        <p className='text-[12px] cursor-pointer'> {user.email || "N/A"}</p>
                      </td>
                      <td className='align-top py-3'><p className='text-[12px] font-medium'>  {user.userpermlabelsacrossapplications[0].role.roleName}
                        </p>
                        </td>
    
    
                      <td className='align-top py-3'><p className='text-[12px] font-medium'> {user.userpermlabelsacrossapplications?.map((permTag,i)=>{
                          return(<span key={i}>
                            {permTag.permTag.permName} , 
                          </span>)
                        })}</p>
                        </td>
    
        
    
                      <td className='py-3'>
                       <div className='flex flex-col gap-2'>
                       <div className='relative justify-between pr-7 flex gap-2'>
                         
                            
                           <p  className='text-[12px] cursor-pointer' >--</p>
    
                            <div className='relative' onClick={() => { setMoreOption(!moreOption) }}>
                              <IoMdMore size={20} />
                              <div className={`absolute w-32 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[20px] top-[-5px] transition-all duration-500 bg-white ${moreOption ?  "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
                                  <div onClick={()=>{setAddAdmin(true)}} className='px-3 py-2'>
                                    <p className='text-xs font-semibold'>Edit</p>
                                  </div>
                                  <hr />
                                  <div onClick={()=>{setAsign(true)}} className='px-3 py-2'>
                                    <p className='text-xs font-semibold'>Move To</p>
                                  </div>
                                  <hr />
                                  <div className='px-3 py-2'>
                                    <p className='text-xs font-semibold'> Delete</p>
                                  </div>
                            </div>
                            </div>
    
                        </div>
    
                       </div>
                      </td>
                    </tr>
                  </tbody>
                  )
                }
              })}
           
          
            
             
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
const PendingComponent: React.FC<accessProps> = ({users}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Extract only the YYYY-MM-DD part
  };
  
    const [showFullProfile, setShowFullProfile] = useState<boolean>(false);

    // const [moreOption, setMoreOption] = useState<boolean>(false);

  return (
    <div className=''>

    
  <div className='w-full h-auto'>
      <div className='w-full h-auto'>

     

        <div className='w-full h-auto px-3 '>

          <div className='w-full  mt-2'>


            <table className=" w-full  table-auto">
              <thead className='w-full'>
                <tr className='bg-[#F2F2F5] border-[1px] border-[#D6DBDE] mt-2  rounded-full w-full'>
                  <th className=' px-4  py-2 w-[20%]'> <div className='flex items-center gap-4'> 
                     <p className='text-[12px]'>Full name</p> </div></th>

                  <th className='text-[12px] text-start w-[20%]'>Email Address</th>
                  <th className='text-[12px] text-start w-[20%]'> Role</th>
                  <th className='text-[12px] text-start w-[20%]'  >Access</th>
                  <th className='text-[12px] text-start w-[20%]'  >Invite</th>
                </tr>
              </thead>
              
              {users?.map((user:any,id:number)=>{
               if(user.userProfileReference === "admin"){
                return( 
                    <tbody key={id} className='mt-2'>
                  <tr className='border-[1px] border-[#D6DBDE] mt-2 '>
                    <td className='px-4 align-top py-3'>
                       <div className='flex gap-4 '>
                      <div className='text-[12px] cursor-pointer'  >
                        <p>{user.firstName || "N/A"} {user.lastName || "N/A"}</p>
                        <p>
                      
                        </p>
                        
                      </div>
                    </div> </td>
                    <td className='align-top py-3'>
                      <p className='text-[12px] cursor-pointer'>{user.email || "N/A"}</p>
                    </td>
                    <td className='align-top py-3'><p className='text-[12px] font-medium'>
                    {user.userpermlabelsacrossapplications[0].role.roleName}
                    </p>
                  
                      </td>
  
  
                    <td className='align-top py-3'><p className='text-[12px] font-medium'>
                    {user.userpermlabelsacrossapplications?.map((permTag:any,i:number)=>{
                            return(<span key={i}>
                              {permTag.permTag.permName} , 
                            </span>)
                          })}
                    </p>
                      </td>
  
      
  
                    <td className='py-3'>
                     <div className='flex flex-col gap-2'>
                     <div className='flex-col justify-between pr-7 flex gap-1'>
                       
                          
                          
                         <p className={`${user.admindetail === null ? "text-[#FFB520] bg-[#FFF1C6]":" text-[#06A560] bg-[#B4FEDD]"} w-fit text-[10px]  rounded-full cursor-pointer font-medium px-3 py-1`} > {user.admindetail === null ? " Pending":"Logged in"}</p>
                      
                      
                         <p  className='text-[12px] cursor-pointer font-medium' > Logged in Date : <span className='font-normal'>{user.createdAt ? formatDate(user.createdAt) : "N/A"}</span></p>

                       
  
  
                      </div>
  
                     </div>
                    </td>
                  </tr>
                </tbody>
                  )
                }
               
              })}
            
           
            
             
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




const Access: React.FC = () => {

 

  // const [accessCount, setAccessCount] = useState<number>(0);
  // const [teamCount, setTeamCount] = useState<number>(0);
  // const [pendingCount, setPendingCount] = useState<number>(0);
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const [addAdmin, setAddAdmin] = useState<boolean>(false);
  const [asign, setAsign] = useState<boolean>(false);

  // const [showShortList, setShowShortList] = useState<boolean>(false);


  const { data: allUserDetail } = useQuery({ queryKey: ['allUserDetail'], queryFn: fetchAllUserDetails });
 

  const [usersDetail, setUsersDetail] = useState<Users[]>([]); 
  useEffect(() => {
    if(allUserDetail){
      
      setUsersDetail(allUserDetail.users);
      console.log("object",usersDetail)
    }

  }, [allUserDetail]);



  const jobFilters = [
    {
      label: 'Access',
      component: <AccessComponent setAddAdmin={setAddAdmin} setAsign={setAsign} users={usersDetail} />,
    },
    {
      label: 'Teams',
      component: <TeamsComponent setAddAdmin={setAddAdmin} setAsign={setAsign} users={usersDetail}/>,
    },
    {
      label: 'Pending',
      component: <PendingComponent setAddAdmin={setAddAdmin} setAsign={setAsign} users={usersDetail} />,
    },
  ];



  return (


    <div className='w-full  bg-white rounded-lg'>


      <div className='  w-full h-auto'>
        <div className="w-full flex  justify-between p-3">
          <h1 className="text-sm font-semibold">Access          </h1>

          <div onClick={() => { setAddAdmin(!addAdmin) }} className='cursor-pointer bg-[#E9F358]  px-3 py-1 rounded-full'>

            <p className='text-sm font-semibold'>+ Add Subadmin</p>
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
        
        </div>


        {/* all Applicants  */}


<div className={`w-full mt-1 overflow-auto h-[73vh]  `}>
{jobFilters?.map((item, i) => {
  if (jobFilterIdx === i) {
    return <div key={i}>{item.component}</div>;
  }
})}
</div>

      

       
       


      </div>

        {/*Add Subadmin */}

        <div
        className={`w-full h-full flex p-3 md:p-3 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-100 ${addAdmin ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
        <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

        <div className='z-[30] max-w-[555px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px] '>

          <div className=' p-5 flex justify-between items-center'>
            <p className='text-base font-bold'>Add Subadmin</p>
          </div>
          <div className='p-5'>

          <div className='w-full '>
                <p className='text-sm font-medium'>Full Name</p>
                <input type="text" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
              </div>
          <div className='w-full mt-3 '>
                <p className='text-sm font-medium'>Email</p>
                <input type="email" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
              </div>
            <div className='w-full mt-3 '>
              <p className='text-sm font-medium'>Role</p>
              <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-3 ' >
                <option value=""> Sales </option>
                <option value=""> Java Full stack </option>
              </select>
            </div>
            <div className='w-full mt-3'>
              <p className='text-sm font-medium'>Access</p>
              <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-3 ' >
                <option value=""> Job </option>
                <option value=""> Java Full stack </option>
              </select>
            </div>
          
          </div>
          
          <div className='w-full flex justify-end p-5 gap-10 items-center'>

          <p className='text-sm font-semibold text-[#114B53] ' onClick={() => { setAddAdmin(!addAdmin) }}>Cancel</p>

            <div className='bg-[#E9F358] w-[110px] h-[30px] flex justify-center items-center rounded-full cursor-pointer ' onClick={() => { setAddAdmin(!addAdmin) }}>
              <p className='text-sm font-semibold text-[#114B53]'>Add</p>
            </div>
          </div>

        </div>
      </div>
        {/*Add Subadmin */}

        <div
        className={`w-full h-full flex p-3 md:p-3 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-100 ${asign ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
      >
        <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

        <div className='z-[30] max-w-[555px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px] '>

          <div className=' p-5 flex justify-between items-center'>
            <p className='text-base font-bold'>Assign To</p>
          </div>
          <div className='p-5'>

          <div className='w-full  '>
              <p className='text-sm font-medium'>Role</p>
              <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-3 ' >
                <option value=""> Sales </option>
                <option value=""> Java Full stack </option>
              </select>
            </div>

          <div className='w-full  mt-3'>
                <p className='text-sm font-medium'> Name</p>
                <input type="text" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
              </div>
         
          
            <div className='w-full mt-3'>
              <p className='text-sm font-medium'>Team</p>
              <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-3 ' >
                <option value=""> Team 1 </option>
                <option value=""> Team 2 </option>
              </select>
            </div>
          
          </div>
          
          <div className='w-full flex justify-end p-5 gap-10 items-center'>

          <p className='text-sm font-semibold text-[#114B53] ' onClick={() => { setAsign(!asign) }}>Cancel</p>

            <div className='bg-[#E9F358] w-[110px] h-[30px] flex justify-center items-center rounded-full cursor-pointer ' onClick={() => { setAsign(!asign) }}>
              <p className='text-sm font-semibold text-[#114B53]'>Assign</p>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Access

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {IoMdClose} from 'react-icons/io'
import { FaEdit } from "react-icons/fa";

const RTRProfile:React.FC=()=>{
    const [isChangeEmail,setIsChangeEmail]=useState<boolean>(false)
    const titles = [
        {
            label:'User Profile',
            link:'/dashboard-rtr/profile-setting'
        },
        {
            label:'Company Profile',
            link:'/dashboard-rtr/company-profile-info'
        },
        {
            label:'Privacy Setting',
            link:'/dashboard-rtr/privacy-setting'
        }
      ];
    
    return(
        <div className="w-full h-[calc(100vh-60px)]  bg-[#F2F2F5] p-2  relative" >
            <div className=" w-full max-w-[1280px]  bg-white  m-auto  rounded-lg p-5">
                  
                        <div className="w-full overflow-auto md:flex md:justify-between ">
                                <ul className="w-screen  md:w-auto flex justify-start items-center space-x-6   ">
                                    {titles?.map((item,id)=>{
                                        return(
                                            <Link to={item.link} className={` text-xs p-1  font-[500]  ${id==0?'border-[#104B53] border-b-2':''}  `} key={id}>{item.label}</Link>
                                        )
                                    })}
                                </ul>

                                <div className="flex  text-xs text-[#104B53] justify-center items-center space-x-1">
                                        <FaEdit color="#104B53" size={15}/>
                                        Edit
                                </div>
                        </div>


            

                                   

{/* Setting Box  */}

                        <div className="w-full   max-w-[1200px] mt-10    m-auto border border-[#E1E1E2] rounded-lg">

                                        <div className="w-full h-full flex flex-col space-y-6 p-5">

                                                    <div className="flex flex-col space-y-2 relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                            <p className="text-xs text-[#717171]">Full name</p>
                                                            <p className="text-xs font-semibold">Job Seekers</p>
                                                    </div>

                                                 



                                                    <div className=" flex flex-col space-y-2 md:space-y-3 md:flex-row md:justify-between items-center  relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                        <div className="flex flex-col w-full md:w-auto space-y-3">
                                                        <p className="text-xs text-[#717171]">Email</p>
                                                        <p className="text-xs font-semibold">xyzcompany@gmail.com</p>
                                                        </div>
                                                        

                                                        <p  className="p-2 w-full md:w-auto text-[#104B53] text-xs text-center rounded-full border border-[#104B53]">Change email</p>
                                                    </div>




                                                    <div className=" flex flex-col space-y-3 md:space-y-3 md:flex-row md:justify-between items-center  relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                        <div className="flex flex-col w-full md:w-auto space-y-3">
                                                        <p className="text-xs text-[#717171]">Password</p>
                                                        <p className="text-xs font-semibold">*********</p>
                                                        </div>
                                                        

                                                        <p className="p-2 w-full md:w-auto text-[#104B53] text-xs text-center rounded-full border border-[#104B53]" onClick={()=>setIsChangeEmail(true)}>Change password</p>
                                                    </div>





                                                    <div className=" flex flex-col space-y-3 md:space-y-3 md:flex-row md:justify-between items-center  relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                        <div className="flex flex-col w-full md:w-auto space-y-3">
                                                        <p className="text-xs text-[#717171]">Phone</p>
                                                        <p className="text-xs font-semibold">+91 949403539405</p>
                                                        </div>
                                                        

                                                        <div className="flex flex-col space-y-3 w-full md:w-auto">   
                                                        <p className="p-2 w-full md:w-auto text-[#104B53] text-xs text-center rounded-full border border-[#104B53]">Verify Phone number</p>

                                                        <p className="p-2 w-full md:w-auto text-[#104B53] text-xs text-center rounded-full border border-[#104B53]">Change phone number</p>

                                                        </div>
                                                   
                                                    </div>
 



                                                     



                                        </div>

                        </div>
            </div>


<div className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500  ${isChangeEmail ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}`}>
<div className='w-full h-screen absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

       <div className='w-full h-full flex justify-center items-center'>
      
           <div className='relative z-20 w-[617px]   bg-white rounded-lg p-10 flex flex-col gap-3'>
            <div className="flex justify-end cursor-pointer"> <IoMdClose size={40} color="#585858" onClick={()=>setIsChangeEmail(false)} /></div>
                <p className='font-bold text-2xl text-[#114B53]'>Change Password</p>
                <p className='text-base font-normal text-[#C7C9D9] '>Enter your email for the verification process, we will send 4 digits code to your email.</p>
                <form action="" className='h-full flex flex-col justify-between'>
                    
                    <label htmlFor="" className='text-[#8F90A6] font-medium'> Email</label>
                    <input type="text" className='w-full h-[54px] border-2 rounded-lg border-[#EBEBF0]' />
                    <button  className='w-full h-[58px] mt-5 font-semibold text-base text-white rounded-lg bg-[#114B53]'>
                      Continue
                    </button>
                </form>
           </div>
       </div>
    </div>
        </div>
    )
}


export default RTRProfile;
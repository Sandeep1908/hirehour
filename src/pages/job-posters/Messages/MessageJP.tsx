import React, { useState } from "react";
 
import { FaEdit } from 'react-icons/fa';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaFlag } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { MdOutlineAttachment } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";


const MessageJP : React.FC =()=>{

    const [isShareModal,setIsShareModal]=useState<boolean>(false)
   
    
    return(
        <div className="w-full  min-h-[calc(100vh-70px)]  bg-[#F2F2F5]   " >
            <div className=" w-full max-w-[1280px]  sm:flex justify-start items-start h-full   m-auto sm:mt-3  rounded-lg ">
                        

 


                                   
 

{/* Message box  */}

                        <div className="w-full flex max-w-[1200px] bg-white  p-2   h-[90vh] m-auto border border-[#E1E1E2] rounded-lg">
                            {/* left Side bar  */}

                            <div className="w-full  p-5 flex flex-col space-y-6  md:max-w-[307px] h-[99%] border border-[#D6DBDE] rounded-lg ">
                                    <div className="flex justify-between items-center p-4">
                                        <h1 className="text-lg font-semibold text-[#104B53]">Messages</h1>
                                        <FaEdit color="#104B53" size={20}/>
                                    </div>

                                    <div className="w-full p-1 ">

                                 
                                        <input type="text" name="" id="" placeholder="Search 🔍" className="w-full p-4   text-xs text-black outline-none border border-[#E5E5E6] rounded-lg  placeholder:text-xs placeholder:text-center " />

                                        
                                    </div>


                                    <div className="w-full p-1 ">

                                 
                                       <ul className="flex justify-center items-center space-x-3 w-full ">
                                        <li className="text-xs bg-[#104B53] p-2 text-center text-white w-full rounded-md">Posted jobs</li>
                                        <li className="text-xs p-2 w-full text-center  ">Resume Sourcing</li>

                                       </ul>


</div>





                                    <div className="w-full flex flex-col space-y-4 h-[99%] overflow-auto">
                                                

                                               
                                                <div className="flex justify-center space-x-2 items-start bg-[#EFFDFD] p-3  border-l-4 border-[#104B53] ">
                                                        <p className="w-full max-w-[50px] h-[48px] rounded-full bg-[#F8C4C4]"></p>
                                                        <div className="w-full flex justify-between items-start">
                                                                <div className="flex flex-col space-y-1">
                                                                    <div className="w-full flex justify-between items-center">
                                                                    <h1 className="text-sm font-semibold">Mathew</h1>
                                                                    <p className=" text-xs text-[#565A5A]">5min ago</p>
                                                                    </div>
                                                                   
                                                                    <p className="text-xs text-ellipsis text-[#565A5A]">Lorem Ipsum is simply dummy text of the </p>
                                                                </div>

                                                           
                                                        </div>
                                                </div>

                                                




                                                <div className="flex justify-center space-x-2 items-start  ] p-3    ">
                                                        <p className="w-full max-w-[50px] h-[48px] rounded-full bg-[#A6F3D0] flex justify-center items-center font-semibold">AN</p>
                                                        <div className="w-full flex justify-between items-start">
                                                                <div className="flex flex-col space-y-1">
                                                                    <div className="w-full flex justify-between items-center">
                                                                    <h1 className="text-sm font-semibold">Andrew</h1>
                                                                    <p className=" text-xs text-[#565A5A]">yesterday</p>
                                                                    </div>
                                                                   
                                                                    <p className="text-xs text-ellipsis text-[#565A5A]">Lorem Ipsum is simply dummy text of the </p>
                                                                </div>

                                                           
                                                        </div>
                                                </div>
                                    </div>
                            </div>



                                    {/* Right side  */}
                            <div className="w-full h-full p-5 relative hidden md:block    " >
                                    <div className="  flex justify-between items-center">
                                        <div className="w-full flex  justify-center items-center space-x-3">       

                                        <p className="w-full max-w-[40px] h-[40px] rounded-full bg-[#F8C4C4]"></p>
                                                        <div className="w-full flex flex-col">
                                                                
                                                                    <div className="w-full flex flex-col space-y-1">
                                                                    <h1 className="text-xs font-semibold">Mathew</h1>
                                                                    <p className=" text-[10px] text-[#565A5A]">5min ago</p>
                                                                    </div>
                                                                   
                                                                    
                                                     

                                                           
                                                        </div>

                                        </div>


                                    <div className="relative ">
                                    <HiOutlineDotsVertical onClick={()=>setIsShareModal(!isShareModal)} />
                                    
                                        {/* three dot menu  */}

                                        <div className={`w-36  p-3 bg-[#FFFFFF] shadow-md absolute top-9 rounded-lg flex flex-col space-y-5 transition-all duration-300 ${isShareModal ? 'block translate-y-[-10px]' : 'hidden'}`}>

                                            <div className="flex space-x-3 items-center">
                                            <FaFlag />
                                            <p>Report</p>
                                            </div>

                                        <hr />
                                            <div className="flex space-x-3 items-center">
                                            <MdShare />
                                             
                                            <p>Share</p>
                                            </div>



                                        </div>  
                                 </div>


                                       

                                         
                                    </div>

                                    <hr className="mt-5"/>

                                    <div className="w-full pt-5">

                                            <div className=" flex space-x-3 ">
                                                    <div className="w-[40px] h-[40px] bg-[#E94C89] rounded-lg"></div>
                                                    <div className=" flex flex-col space-y-3">
                                                        <h1 className="text-sm font-semibold">UI/UX Designer</h1>
                                                        <ul className="flex items-center space-x-3">
                                                            <li className="text-xs text-[#3A3A3C]">Dribbble</li>
                                                            <li className="text-xs text-[#3A3A3C]">Allen, Texas, United States</li>
                                                        </ul>

                                                        <ul className="flex flex-wrap space-x-3">
                                                            <li className="bg-[#F2F2F5] text-[#3A3A3C]  p-2 text-[10px] rounded-full text-center">Full Time</li>

                                                            <li className="bg-[#F2F2F5] text-[#3A3A3C]  p-2 text-[10px] rounded-full text-center">$50-$60 per hour</li>

                                                            <li className="bg-[#F2F2F5] text-[#3A3A3C]   p-2 text-[10px] rounded-full text-center">Software</li>

                                                            <li className="bg-[#F2F2F5] text-[#3A3A3C]   p-2 text-[10px] rounded-full text-center">Mid-Senior Level</li>

                                                            <li className="bg-[#F2F2F5] text-[#3A3A3C]   p-2 text-[10px] rounded-full text-center">H1 Vis</li>

                                                        </ul>
                                                    </div>
                                            </div>
                                    </div>

                                    <hr className="mt-3"/>




                                    <div className="w-full  p-5">
                                        <div className="w-full h-[340px] overflow-auto " id="message-box">
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

                                                <div className="w-full flex flex-col justify-end items-start space-y-4">
                                                        <div className="flex flex-col space-y-1 justify-end items-end w-full max-w-[302px]">
                                                            <p className="text-xs border border-[#D6DBDE] p-2 rounded-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                            <p className="text-[10px] text-[#C4C4C4]">5min ago</p>
                                                        </div>


                                                    

                                                        
                                                </div>
                                                

 
                                        </div>

                                        {/* send button  */}

                                        <div className="w-[90%] absolute bottom-10 bg-white   rounded-lg flex justify-between items-center  m-auto border border-[#E0E4E6] ">
                                            <div className="flex w-full justify-center items-center ml-4  ">
                                            <MdOutlineAttachment size={25} />
                                            <input type="text" className="w-full p-2 outline-none placeholder:text-xs"  placeholder="Enter you message" />
                                            </div>

                                            <p className=" bg-[#E9F358] p-3 cursor-pointer">
                                            <LuSendHorizonal color="#104B53" />

                                            </p>
                                        </div>
                                 
                                    </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}



export default MessageJP;
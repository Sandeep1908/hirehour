import React, { useState } from "react";
 
import { FaEye } from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { TbPhoneCalling } from "react-icons/tb";
import { PiSuitcase } from "react-icons/pi";
import { BsUpload } from 'react-icons/bs';
import { MdDeleteOutline } from "react-icons/md";
 
 
 
import { BiPlus } from 'react-icons/bi';
 
import AboutMe from "../../components/profile/AboutMe";
import AdditionalDetails from "../../components/profile/AdditionalDetails";
import Experience from "../../components/profile/Experience";
import Education from "../../components/profile/Education";
import Summary from "../../components/profile/Summary";
import ProfileComplition from "../../components/profile/ProfileComplition";

const Profile:React.FC=()=>{

  const [profilePopup, setProfilePopup] = useState<boolean>(false);
  const [aboutusPop, setAboutusPop] = useState<boolean>(false);
  const [additionalInfoPopup, setAdditionalInfoPopup] = useState<boolean>(false);
  const [summaryPopup, setSummaryPopup] = useState<boolean>(false);
  const [experiencePopup, setExperiencePopup] = useState<boolean>(false);
  const [educationPopup, setEducationPopup] = useState<boolean>(false);


    return(
        <div className="w-full h-full ">

                    <div className="w-full max-w-[1280px] m-auto p-5 grid grid-cols-1 ">

                        <div className="flex pb-3 md:p-5 relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#C7C9D9] ">
                            <p className="text-lg font-semibold">Profile</p>
                        </div>
                      

                        <div className="flex">

                                {/* //left section */}

                                <div className="w-[450px] h-full pt-10   ">

                                <div className="bg-white w-full mb-3   rounded-lg md:hidden  ">
                                            <div className="p-3">
                                                <h1 className="text-xl font-semibold">Hello John,</h1>
                                                <p className="text-[#6B7588] text-sm">Recruiters are looking for Candidates like you, Complete your profile to Stand out</p>
                                            </div>

                                            <div className="w-full flex flex-col justify-between items-center p-3">
                                                <div className="w-full flex justify-center items-center space-x-3">
                                                <div className="w-full bg-[#FFF1C6] rounded-full  ">
                    <div
                      className="bg-[#FFD05B] text-xs  text-black text-center  leading-none rounded-full"
                      style={{ width: '75%' }}
                    >
                      {' '}
                      75%
                    </div>


                  </div>   
                  <p className="text-xs">4/7 Completed</p>
                                                </div>

                                               

                                               <div className=" pt-4 flex justify-end items-end w-full">
                                               <p className="w-32 text-sm h-8 bg-[#E9F358] text-[#104B53] font-semibold rounded-full flex justify-center items-center p-3 " onClick={()=>{setProfilePopup(true)}}>Let's Go </p>
                                               </div>
                                            </div>
                                    </div>



                                        <div className="flex justify-between items-start bg-white p-3 rounded-lg">
                                             <div className="flex flex-col space-y-2">
                                                <h1 className="text-xl font-semibold">Public</h1>
                                                <p className="text-sm text-[#A4A5B7]">Visible to Employer</p>
                                             </div>
                                                
                                                <FaEye size={23} color="#104B53"/>

                                        </div>



                {/* About me  */}

                                        <div className="  bg-white p-3 rounded-lg mt-3">
                                             <div className="flex w-full justify-between items-center pb-3 relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#EFF1F3]">
                                                <h1 className="text-xl font-semibold">About me</h1>
                                                <div className="flex justify-center items-center space-x-2 cursor-pointer">
                                                <FaEdit size={16} color="#104B53"/> <span className="text-[#104B53]" onClick={()=>{setAboutusPop(true)}}>Edit</span>
                                                </div>
                                               
                                             </div>


                                             <div className="w-full flex flex-col  space-y-3 justify-center items-center p-5 relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:mb-3 before:bg-[#EFF1F3]">
                                                    <div className="w-24 h-24 bg-[#CBFFFC] rounded-full flex justify-center items-center">
                                                            <p className="text-xl text-[#104B53] font-semibold ">J</p>
                                                    </div>

                                                    <div className="flex flex-col justify-center items-center">
                                                        <h1 className="text-xl font-semibold">John S Methew</h1>
                                                            <div className="flex justify-center items-center space-x-2">
                                                            <IoLocationOutline />

                                                                <p>Allen, Texas, US</p>
                                                            </div>
                                                    </div>

                                                    <div className="flex justify-center items-center space-x-3">
                                                    <FaLinkedin size={20} />

                                                    <FaGithub size={20} />


                                                    </div>



                                             </div>



                                             <div className="w-full flex flex-col space-y-3">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex space-x-2 items-center">
                                                                <MdOutlineEmail size={20} color="#3A3A3C" />
                                                                <p className="text-[#3A3A3C]">John@example.com</p>
                                                                </div>

                                                                <span className=" w-5  flex justify-center items-center  h-5 bg-[#07A560] text-white rounded-full">
                    <TiTick />
                  </span>
                                                            </div>



                                                            <div className="flex justify-between items-center">
                                                                <div className="flex space-x-2 items-center">
                                                                <TbPhoneCalling size={20} color="#3A3A3C" />
                                                                <p className="text-[#3A3A3C]">+1 xxxx98xx9</p>
                                                                </div>

                                                                <span className=" w-5  flex justify-center items-center  h-5 bg-[#07A560] text-white rounded-full">
                    <TiTick />
                  </span>
                                                            </div>



                                                            <div className="flex justify-between items-center">
                                                                <div className="flex space-x-2 items-center">
                                                                <PiSuitcase size={20} color="#3A3A3C" />
                                                                <p className="text-[#3A3A3C]">Exp: 4 Year 5 Months</p>
                                                                </div>

                                                                 
                                                            </div>



                                                         
                                                    </div>



                                       
                                                

                                                
                                                

                                        </div>

                {/* Additonal Info  */}

                <div className="  bg-white p-3 rounded-lg mt-3">
                                             <div className="flex w-full justify-between items-center pb-5 relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#EFF1F3]">
                                                <h1 className="text-xl font-semibold">Additonal Information</h1>
                                                <div className="flex justify-center items-center space-x-2" onClick={()=>{setAdditionalInfoPopup(true)}}>
                                                <FaEdit size={16} color="#104B53"/> <span className="text-[#104B53]" >Edit</span>
                                                </div>
                                               
                                             </div>


                                             <div className="flex flex-col space-y-5 p-2">
                                                    <div className="flex flex-col space-y-2">
                                                        <p className="text-sm text-[#8F90A6]">Willing to work / Looking for job change</p>
                                                        <h1 className="text-sm font-semibold">Yes</h1>
                                                    </div>


                                                    <div className="flex flex-col space-y-2">
                                                        <p className="text-sm text-[#8F90A6]">Visa Sponsorship</p>
                                                        <h1 className="text-sm font-semibold">Yes</h1>
                                                    </div>

                                                    <div className="flex flex-col space-y-2">
                                                        <p className="text-sm text-[#8F90A6]">Security clearance</p>
                                                        <h1 className="text-sm font-semibold">Yes</h1>
                                                    </div>
 

                                             </div>


                                            
                                                

                                                
                                                

                                        </div>



                                </div>


                                {/* right Section  */}

                                <div className="w-full h-full pt-10 p-3 hidden md:block ">


{/* Hello Section  */}
                                    <div className="bg-white w-full p-5 rounded-lg  ">
                                            <div className="p-3">
                                                <h1 className="text-3xl font-semibold">Hello John,</h1>
                                                <p className="text-[#6B7588] text-sm">Recruiters are looking for Candidates like you, Complete your profile to Stand out</p>
                                            </div>

                                            <div className="w-full flex justify-between items-center p-3">
                                                <div className="w-3/5 flex items-center space-x-3">
                                                <div className="w-full bg-[#FFF1C6] rounded-full  ">
                    <div
                      className="bg-[#FFD05B] text-xs  text-black text-center  leading-none rounded-full"
                      style={{ width: '75%' }}
                    >
                      {' '}
                      75%
                    </div>


                  </div>   
                  <p>4/7 Completed</p>
                                                </div>

                                               

                                               <div className="w-1/4 flex justify-end items-center">
                                               <p className="w-40 h-10 bg-[#E9F358] text-[#104B53] font-semibold rounded-full flex justify-center items-center p-3 " onClick={()=>{setProfilePopup(true)}}>Let's Go </p>
                                               </div>
                                            </div>
                                    </div>



{/* Resume Upload Section  */}
                                    <div className="bg-white w-full p-5 rounded-lg mt-3  ">
                                            <div className="p-3 flex justify-between items-center relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#F0F1F3] pb-5">
                                                <h1 className="text-3xl font-semibold">Resume</h1>
                                                
                                                <div className="flex justify-center items-center space-x-3">
                                                    <p className="text-xs text-[#A4A5B8]">Pdf, Doc, DocX (2MB)</p>


                                                    <label
            className={` flex justify-center items-center w-36 h-10 space-x-2    rounded-full cursor-pointer border-2 border-[#104B53]   `}
          >
            <BsUpload size={13}  color="#104B53"  />
            <span className={`text-xs font-semibold text-[#104B53]   `}>Upload Resume</span>
            <input type="file" className="hidden" />
          </label>
                                                </div>
                                            </div>



                                            <div className="w-full h-full flex space-x-3 justify-center items-center p-3 ">


                                                    <div className="flex  h-[60px] justify-between items-center w-full border border-[#D1D1D1] rounded-lg ">
                                                            <div className=" w-[100px] h-full flex justify-center items-center bg-[#E3EDFF]">
                                                                <p className="text-xl font-semibold text-[#1F4AF1] ">PDF</p>
                                                            </div>

                                                            <div className="flex flex-col space-y-1">
                                                                <h1 className="text-lg font-semibold">Resume 1</h1>
                                                                <p className="text-sm text-[#6B7588]">Default Resume</p>
                                                            </div>

                                                            <div className="flex justify-center items-center space-x-4 pr-4">
                                                                <p className="text-sm text-[#104B53]">Preview</p>
                                                                <MdDeleteOutline size={25} />

                                                            </div>
                                                    </div>




                                                    <div className="flex  h-[60px] justify-between items-center w-full border border-[#D1D1D1] rounded-lg ">
                                                            <div className=" w-[100px] h-full flex justify-center items-center bg-[#E3EDFF]">
                                                                <p className="text-xl font-semibold text-[#1F4AF1] ">PDF</p>
                                                            </div>

                                                            <div className="flex flex-col space-y-1">
                                                                <h1 className="text-lg font-semibold">Resume 1</h1>
                                                                <p className="text-sm text-[#6B7588]">Default Resume</p>
                                                            </div>

                                                            <div className="flex justify-center items-center space-x-4 pr-4">
                                                                <p className="text-sm text-[#104B53]">Preview</p>
                                                                <MdDeleteOutline size={25} />

                                                            </div>
                                                    </div>



                                                  

                                            </div>
 
                                    </div>

{/* Summery  */}


<div className="bg-white w-full p-5 rounded-lg mt-3">
<div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Summery</h1>
            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-2" onClick={()=>{setSummaryPopup(true)}}>
                <FaEdit color="#104B53" />
                <p className="text-[#104B53]" >Edit</p>
              </div>
              <p className="text-[#535354] text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
            </div>
          </div>
</div>


        {/* Experience  */}



<div className="bg-white w-full p-5 rounded-lg mt-3">
<div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
                Work Experience (Total 4 years 4 months of experience)
              </h1>

              <div className="flex justify-end items-center space-x-2" onClick={()=>{setExperiencePopup(true)}}>
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-4">
                <div className="flex items-center  " onClick={()=>{setExperiencePopup(true)}}>
                  <FaEdit color="#104B53" />
                  <p className="text-[#104B53]">Edit</p>
                </div>

                <div className="flex items-center ">
                  <MdDeleteOutline color="#104B53" />
                  <p className="text-[#104B53]">Delete</p>
                </div>
              </div>

              <div className="flex flex-col space-y-5 ">
                <div className="flex flex-col space-y-4">
                  <h1 className="text-lg font-semibold">Java Fullstack</h1>
                  <p className="text-[#6B7588]">xyz Company - Texas, United States</p>
                  <div className="flex space-x-3 flex-wrap  items-center w-full">
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                      Health Care
                    </p>
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                      Full Time
                    </p>
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                      12/2022 - Present
                    </p>
                  </div>
                </div>



                <div className='flex flex-col space-y-4 '>

                    <h1 className='text-lg '>Job summery</h1>
                    <ul className='flex flex-col space-y-3'>
                        <li className='text-[#3A3A3C]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>

                        <li className='text-[#3A3A3C]'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                    </ul>
                </div>




              </div>

               
            </div>
          </div>
</div>


{/* Education  */}

        <div className="bg-white w-full p-5 rounded-lg mt-3">

        <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
                Education
              </h1>

              <div className="flex justify-end items-center space-x-2" onClick={()=>{setEducationPopup(true)}}>
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-4">
                <div className="flex items-center  " onClick={()=>{setEducationPopup(true)}}>
                  <FaEdit color="#104B53" />
                  <p className="text-[#104B53]">Edit</p>
                </div>

                <div className="flex items-center ">
                  <MdDeleteOutline color="#104B53" />
                  <p className="text-[#104B53]">Delete</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col space-y-4">
                  <h1 className="text-lg font-semibold">BE Computer Science</h1>
                  <p className="text-[#6B7588]">xyz Collage- Texas, United State</p>
                  <div className="flex space-x-3 items-center">
                    <p className="text-[#7C8596] bg-[#F2F2F5] p-3 rounded-full font-semibold text-xs">
                    07/2016 - 06/2020
                    </p>
                     
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>


{/* Certification  */}


<div className="bg-white w-full p-5 rounded-lg mt-3">
<div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
                Ceritification
              </h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              

              <div className='w-full max-w-[765px] h-[100px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              '>
                    <p>Added certificate will be shown here</p>
              </div>
            </div>
          </div>
</div>



{/* Acheivment  */}


<div className="bg-white w-full p-5 rounded-lg mt-3">
<div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
              Achievement
              </h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              

              <div className='w-full max-w-[765px] h-[100px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              '>
                    <p>Added Achievement will be shown here</p>
              </div>
            </div>
          </div>
</div>



{/* Acheivment  */}


<div className="bg-white w-full p-5 rounded-lg mt-3">
<div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
              Add More Section
              </h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus color="#104B53" />
                <p className="text-[#104B53] font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              

              <div className='w-full max-w-[765px] h-[100px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              '>
                    <p>Added more section will be shown here</p>
              </div>
            </div>
          </div>
</div>




                                </div>



                        </div>

                    </div>


{/* Edit About us Popup */}

     {profilePopup && <ProfileComplition setProfilePopup={setProfilePopup}/>}
     {aboutusPop && <AboutMe setAboutPop={setAboutusPop}/>}
     {additionalInfoPopup && <AdditionalDetails setAdditionalInfoPopup ={setAdditionalInfoPopup}/>}
     {summaryPopup &&  <Summary setSummaryPopup ={setSummaryPopup}/>}
     {experiencePopup && <Experience setExperiencePopup ={setExperiencePopup}/>}
     {educationPopup && <Education setEducationPopup ={setEducationPopup}/>}

        </div>
    )
}

export default Profile;
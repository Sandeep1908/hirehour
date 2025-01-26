import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { MdFileDownloadDone } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

type ProfileProps={
   setProfilePopup : (arg:boolean) => void
   setAboutusPop : (arg:boolean) => void
   setSkillsPopup : (arg:boolean) => void
   setAddExperiencePopup : (arg:boolean) => void
   signingUpwithTopEquator : boolean
    addResume : boolean
    addAboutMe : boolean
    addSkillSet : boolean
    addSociallinks : boolean
    addDomain : boolean
    completionPercentage :number
    count: number
  }

const ProfileComplition:React.FC<ProfileProps> = ({setProfilePopup,setAboutusPop,setSkillsPopup,setAddExperiencePopup,signingUpwithTopEquator,addResume,addAboutMe,addSociallinks,addDomain,addSkillSet,completionPercentage,count}) => {

    const navigate = useNavigate();
  return (
    <div className='w-full h-full flex  p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[533px] h-full md:h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-8'>
        <div className='  flex justify-between items-center'>
            <div className='text-sm md:text-2xl font-bold'><p> Hello John,</p></div>
            <IoMdClose size={30} className="cursor-pointer" onClick={()=>{setProfilePopup(false)}} />
        </div>
        <p className='text-sm text-[#6B7588] font-normal mt-2'>Recruiters are looking for Candidates like you, Complete your profile to Stand out </p>
        <div className="w-full flex items-center space-x-3 mt-3">
            <p className='font-bold'>{completionPercentage}%</p>
                                                <div className="w-full bg-[#FFF1C6] rounded-full  ">
                    <div
                      className={`  bg-[#FFD05B] text-[14px]  text-black text-center  leading-none rounded-full `}
                      style={{width:completionPercentage+"%"}}
                    >
                      {' '}
                      {completionPercentage}%
                    </div>


                  </div>   
                  <p className='text-[14px] '>{count}/7Completed</p>
                                                </div>
        <hr className='mt-5' />
     
        <div className='w-full mt-5 flex flex-col gap-2 ' >
        <div className={` ${signingUpwithTopEquator? "bg-white":" bg-[#F2F2F5]"} border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between`}>             <div className='flex items-center gap-2'>
             <MdFileDownloadDone className={`${signingUpwithTopEquator?  "text-black":"text-[#8F90A6]"}`} />
              <p className={`${signingUpwithTopEquator?  "text-[#8F90A6]":"text-black"} text-sm font-medium`}>Signing up with TopEquator</p>
             </div>
             <FaRegArrowAltCircleRight size={20} className={`${signingUpwithTopEquator?  "text-[#8F90A6]":" text-black"}`}/>

          </div>
          <div className={` ${addResume? "bg-white":" bg-[#F2F2F5]"} border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between`}>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone  className={`${addResume?  "text-black":"text-[#8F90A6]"}`}/>
              <p className={`${addResume?  "text-[#8F90A6]":"text-black"} text-sm font-medium`}>Add Resume</p>
             </div>
             <FaRegArrowAltCircleRight size={20} className={`${addResume?  "text-[#8F90A6]":" text-black"}`}/>

          </div>
          <div onClick={()=>{setAboutusPop(true), setProfilePopup(false)}} className={` ${addAboutMe? "bg-white":" bg-[#F2F2F5]"} border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between`}>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone className={`${addAboutMe?  "text-black":"text-[#8F90A6]"}`}/>
              <p className={`${addAboutMe?  "text-[#8F90A6]":"text-black"} text-sm font-medium`}>Add about me</p>
             </div>
             <FaRegArrowAltCircleRight size={20} className={`${addAboutMe?  "text-[#8F90A6]":" text-black"}`}/>

          </div>
          <div onClick={()=>{navigate("/job-preference")}} className='border-[1px] border-[#C7C9D9] bg-[#F2F2F5] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone color='#8F90A6' />
              <p className='text-[#000000] text-sm font-medium'>Job preference</p>
             </div>
             <FaRegArrowAltCircleRight size={20} />

          </div>
          <div onClick={()=>{setSkillsPopup(true), setProfilePopup(false)}} className={` ${addSkillSet ? "bg-white":" bg-[#F2F2F5]"}  border-[1px] border-[#C7C9D9]  rounded-lg p-3 flex justify-between`}>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone className={`${addSkillSet?  "text-black":"text-[#8F90A6]"}`}/>
              <p className={`${addSkillSet?  "text-[#8F90A6]":"text-black"} text-sm font-medium`}>Add Skill Set</p>
             </div>
             <FaRegArrowAltCircleRight size={20} className={`${addSkillSet?  "text-[#8F90A6]":" text-black"}`}/>

          </div>
          <div onClick={()=>{setAboutusPop(true), setProfilePopup(false)}} className={` ${addSociallinks ? "bg-white":" bg-[#F2F2F5]"} border-[1px] border-[#C7C9D9]  rounded-lg p-3 flex justify-between`}>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone className={`${addSociallinks?  "text-black":"text-[#8F90A6]"}`}/>
              <p className={`${addSociallinks?  "text-[#8F90A6]":"text-black"} text-sm font-medium`}>Add Social links</p>
             </div>
             <FaRegArrowAltCircleRight size={20} className={`${addSociallinks?  "text-[#8F90A6]":" text-black"}`}/>

          </div>
          <div onClick={()=>{setAddExperiencePopup(true), setProfilePopup(false)}} className={` ${addDomain ? "bg-white":" bg-[#F2F2F5]"} border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between`}>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone className={`${addDomain?  "text-black":"text-[#8F90A6]"}`} />
              <p className={`${addDomain?  "text-[#8F90A6]":"text-black"} text-sm font-medium`}>Add domain to your work experience</p>
             </div>
             <FaRegArrowAltCircleRight size={20} className={`${addDomain?  "text-[#8F90A6]":" text-black"}`}/>

          </div>
        </div>

        <div className='w-full flex justify-end  gap-10  items-center mt-3'>
            <div onClick={()=>{setProfilePopup(false)}} className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer ' >
                <p className='text-sm font-semibold text-[#114B53] cursor-pointer'>Submit</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileComplition

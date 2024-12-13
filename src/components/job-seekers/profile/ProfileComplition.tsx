import React from 'react'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { MdFileDownloadDone } from 'react-icons/md'

type ProfileProps={
    setProfilePopup : (arg:boolean) => void
  }

const ProfileComplition:React.FC<ProfileProps> = ({setProfilePopup}) => {
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
            <p className='font-bold'>75%</p>
                                                <div className="w-full bg-[#FFF1C6] rounded-full  ">
                    <div
                      className="bg-[#FFD05B] text-[14px]  text-black text-center  leading-none rounded-full"
                      style={{ width: '75%' }}
                    >
                      {' '}
                      75%
                    </div>


                  </div>   
                  <p className='text-[14px] '>4/7Completed</p>
                                                </div>
        <hr className='mt-5' />
     
        <div className='w-full mt-5 flex flex-col gap-2 ' >
          <div className='border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone />
              <p className='text-[#8F90A6] text-sm font-medium'>Signing up with TopEquator</p>
             </div>
             <FaRegArrowAltCircleRight size={20} color='#8F90A6'/>

          </div>
          <div className='border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone />
              <p className='text-[#8F90A6] text-sm font-medium'>Add Resume</p>
             </div>
             <FaRegArrowAltCircleRight size={20} color='#8F90A6'/>

          </div>
          <div className='border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone />
              <p className='text-[#8F90A6] text-sm font-medium'>Add about me</p>
             </div>
             <FaRegArrowAltCircleRight size={20} color='#8F90A6'/>

          </div>
          <div className='border-[1px] border-[#C7C9D9] bg-[#F2F2F5] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone color='#8F90A6' />
              <p className='text-[#000000] text-sm font-medium'>Job preference</p>
             </div>
             <FaRegArrowAltCircleRight size={20} color='#114B53'/>

          </div>
          <div className='border-[1px] border-[#C7C9D9] bg-[#F2F2F5] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone color='#8F90A6' />
              <p className='text-[#000000] text-sm font-medium'>Add Skill Set</p>
             </div>
             <FaRegArrowAltCircleRight size={20} color='#114B53'/>

          </div>
          <div className='border-[1px] border-[#C7C9D9] bg-[#F2F2F5] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone color='#8F90A6' />
              <p className='text-[#000000] text-sm font-medium'>Add Social links</p>
             </div>
             <FaRegArrowAltCircleRight size={20} color='#114B53'/>

          </div>
          <div className='border-[1px] border-[#C7C9D9] rounded-lg p-3 flex justify-between'>
             <div className='flex items-center gap-2'>
             <MdFileDownloadDone />
              <p className='text-[#8F90A6] text-sm font-medium'>Add domain to your work experience</p>
             </div>
             <FaRegArrowAltCircleRight size={20} color='#8F90A6'/>

          </div>
        </div>

        <div className='w-full flex justify-end  gap-10  items-center mt-3'>
            <div className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer ' >
                <p className='text-sm font-semibold text-[#114B53] cursor-pointer'>Submit</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileComplition

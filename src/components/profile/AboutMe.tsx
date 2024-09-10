import React from 'react'
import { FaBehanceSquare } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FiChrome } from 'react-icons/fi'
import { ImCross } from 'react-icons/im'
import { IoMdClose } from 'react-icons/io'


type AboutMeProps={
   setAboutPop : (arg:boolean) => void
 }

const AboutMe:React.FC<AboutMeProps> = ({setAboutPop}) => {
  return (
    <div className='w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px] h-full w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-base md:text-xl font-bold'><p>About me</p></div>
            <IoMdClose size={30} className="cursor-pointer" onClick={()=>{setAboutPop(false)}} />
        </div>
        <hr className='mt-3' />
        <div className=' py-3 flex flex-col gap-5' >
           <div>
              <p className='text-[14px] md:text-xl font-semibold' >Profile picture</p>
              <div className='flex flex-col md:flex-row items-center gap-5 mt-3 '>
              <div className='w-[100px] h-[100px] rounded-full bg-[#CBFFFC] flex justify-center items-center '>
                  <p className='text-[40px] font-extrabold'>J</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='border-[1px] border-[#114B53] rounded-full px-5 py-2 h-[42px] '>
                  <p className='text-[#114B53] text-base font-semibold' >Upload profile</p>

                  </div>
                  <div className='border-[1px] border-[#114B53] rounded-full px-5 py-2 h-[42px]'>
                  <p className='text-[#114B53] text-base font-semibold' >Delete profile</p>

                  </div>
                </div>
              </div>
              <div>
              <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>First name <span className='text-red-600'>*</span></p>
                   <input type="text" value={"John S"} className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Last name <span className='text-red-600'>*</span></p>
                   <input type="text" value={"Mathew"} className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
              <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Phone number* <span className='text-red-600'>*</span></p>
                   <input type="number" value={"111222333"} className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4  ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Email* <span className='text-red-600'>*</span></p>
                   <input type="email" value={"John@xyz.com"} className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
              <div className='w-full flex gap-4 mt-3 '>
                <div className='w-full '>
                <p className='text-base font-medium'>Location <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Texas, US</option>
                      <option value=""> Londan, Uk</option>
                   </select>
                </div>
               
             </div>
             <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Experience <span className='text-red-600'>*</span></p>
                   <div className='w-full flex gap-4'>
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> 1 year</option>
                      <option value=""> 2 year</option>
                      <option value=""> 3 year</option>
                      <option value=""> 4 year</option>
                   </select>
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> 1 Months</option>
                      <option value=""> 2 Months</option>
                      <option value=""> 3 Months</option>
                      <option value=""> 4 Months</option>
                   </select>               
                    </div>
                </div>
               
             </div>
             <div className='mt-3'>
             <p className='text-base font-medium'>Social Profiles </p>
             <div className='mt-4'>
                 <div className='flex gap-4 items-center relative'>
                  <div className='w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 '>
                  <FaLinkedin size={20} />
                  <input type="text" name="" id="" placeholder='Your Linkedin profile url' />

                  </div>
                  <ImCross className='absolute right-4' size={13} />

                 </div>
                 <div className='flex gap-4 items-center relative'>
                  <div className='w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 mt-3'>
                  <FaGithub size={20} />
                  <input type="text" name="" id="" placeholder='Your Github profile url' />

                  </div>
                  <ImCross className='absolute right-4 ' size={13} />

                 </div>
                 <div className='flex gap-4 items-center relative'>
                  <div className='w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 mt-3'>
                  <FaBehanceSquare size={20} />
                  <input type="text" name="" id="" placeholder='Your Behance profile url' />

                  </div>
                  <ImCross className='absolute right-4' size={13} />

                 </div>
                 <div className='flex gap-4 items-center'>
                  <div className='w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 mt-3'>
                  <FiChrome size={20} />
                  <input type="text" name="" id="" placeholder='Other web profile url' />

                  </div>

                 </div>
             </div>
             </div>
              </div>
           </div>
        </div>

        <div className='w-full flex justify-end  gap-10  items-center'>
            <div className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer ' onClick={()=>{setAboutPop(false)}}>
                <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Continue</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default AboutMe

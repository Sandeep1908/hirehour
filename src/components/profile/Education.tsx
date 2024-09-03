import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { RiDeleteBin4Line } from 'react-icons/ri'


type EducationProps = {
   setEducationPopup:(agr:boolean) => void
}

const Education:React.FC<EducationProps> = ({setEducationPopup}) => {
  return (
    <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[1005px] h-full w-full bg-white rounded-lg overflow-y-auto z-[30] p-8'>
        <div className='  flex justify-between items-center'>
            <div className='text-base md:text-2xl font-bold'><p>Education</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>{setEducationPopup(false)}}/>
        </div>
        <hr className='mt-5' />
       <div className='py-5 flex flex-col gap-5 '>
          <div className='bg-[#F2F2F5] rounded-lg p-7'>
              <div className='flex justify-end'>
              <RiDeleteBin4Line  size={20}/>

              </div>
              <div>
              <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Degree <span className='text-red-600'>*</span></p>
                   <input type="text" value={"BE"} className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Branch/Specialization <span className='text-red-600'>*</span></p>
                   <input type="text" value={"Computer Science"} className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Start of Course <span className='text-red-600'>*</span></p>
                   <input type="date" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>End of Course <span className='text-red-600'>*</span></p>
                   <input type="date" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>University/College <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> xyz college </option>
                      <option value=""> abc college </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Location <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Texas, US</option>
                      <option value=""> Londan, Uk</option>
                   </select>
                </div>
             </div>
              </div>
          </div>
          <div className='hidden md:block bg-[#F2F2F5] rounded-lg p-7'>
              <div className='flex justify-end'>
              <RiDeleteBin4Line  size={20}/>

              </div>
              <div>
              <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Degree <span className='text-red-600'>*</span></p>
                   <input type="text"  className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Branch/Specialization <span className='text-red-600'>*</span></p>
                   <input type="text"  className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Start of Course <span className='text-red-600'>*</span></p>
                   <input type="date" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>End of Course <span className='text-red-600'>*</span></p>
                   <input type="date" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-base font-medium'>University/College <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                     
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-base font-medium'>Location <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                  
                   </select>
                </div>
             </div>
              </div>
          </div>
       </div>

        <div className='w-full flex justify-end  gap-10  items-center'>
            <div className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Continue</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Education

import React from 'react'
import { IoMdClose } from 'react-icons/io'


type AddExperience ={
   setExperiencePopup:(agr:boolean) => void
   expeirenceId:number | null
}

const Experience:React.FC<AddExperience> = ({setExperiencePopup}) => {
  return (
    <div className='w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px] h-full w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-xl font-bold'><p>Experience</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>{setExperiencePopup(false)}} />
        </div>
        <hr className='mt-3' />
       <div className='py-4 flex flex-col gap-5 '>
          <div className='bg-[#F2F2F5] rounded-lg p-4'>
              
              <div>
              <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Title <span className='text-red-600'>*</span></p>
                   <input type="text" value={"Java Full Stack "} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Domain <span className='text-red-600'>*</span></p>
                   <input type="text" value={"Health Care"} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Date of joining* <span className='text-red-600'>*</span></p>
                   <input type="date" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Date of Relieving <span className='text-red-600'>*</span></p>
                   <input type="date" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Company Name <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> xyz Comoany </option>
                      <option value=""> abc Comoany </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Location <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Texas, US</option>
                      <option value=""> Londan, Uk</option>
                   </select>
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Type <span className='text-red-600'>*</span></p>
                   <select name="" id="" className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Full-Time </option>
                      <option value=""> Part-Time </option>
                   </select>
                </div>
               
             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Summary <span className='text-red-600'>*</span></p>
                   <textarea name="" id="" value={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"} className='w-full h-[190px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 p-4 ' >
                 
                   </textarea>
                </div>
               
             </div>
              </div>
          </div>
         
        
       </div>

        <div className='w-full flex justify-end  gap-10  items-center'>
            <div className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                <p className='text-sm font-semibold text-[#114B53] cursor-pointer'>Continue</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Experience
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
// import Slider from "rc-slider";
// import "rc-slider/assets/index.css";
// import "./style.css"

type AddInfo ={
   setSkillsPopup: (agr:boolean)=>void
}

const Skills:React.FC<AddInfo> = ({setSkillsPopup}) => {

    const [value, setValue] = useState(10);

  return (
    <div className='w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px]  h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-base md:text-xl font-bold'><p>Skills</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>setSkillsPopup(false)}/>
        </div>
        <hr className='mt-3' />
       <div className='px-6 py-4 '>
       <div className='flex gap-1 '>
                  <div className='pt-1 bg-[#114B53] rounded-tl-lg rounded-tr-lg border-none'>
                     <p className='text-[#114B53] text-sm px-3 py-1 bg-white' >Overall Skills</p>
                  </div>
                  <div className='pt-1 '>
                  <p className='text-[#3A3A3C] text-sm px-3 py-1' >Current Skills</p>

                  </div>
              </div>
             <div className='mt-5'>
               <p className='text-sm font-semibold'>Add your top skills & technologies</p>

               <div className='mt-4'>
                  <div className='flex justify-between items-center'>
                  <select name="" id="" className='w-80 h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 text-xs ' >
                      <option value=""> Java</option>
                      <option value=""> Python</option>
                   </select>
                   <div className='w-10 h-10 flex justify-center items-center border rounded-md'>

                    <p className='text-[#3A3A3C] text-xs font-semibold '>04</p>
                   </div>
                  </div>
                  <div className='rounded-full bg-[#EBEBF0] w-full h-2 mt-4'>
                      <div className='rounded-full h-2  w-[50%] bg-[#114B53]'>

                      </div>
                  </div>
                </div>
               <div className='mt-4'>
                  <div className='flex justify-between items-center'>
                  <select name="" id="" className='w-80 h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 text-xs ' >
                      <option value=""> React JS</option>
                      <option value=""> Python</option>
                   </select>
                   <div className='w-10 h-10 flex justify-center items-center border rounded-md'>

                    <p className='text-[#3A3A3C] text-xs font-semibold '>04</p>
                   </div>
                  </div>
                  <div className='rounded-full bg-[#EBEBF0] w-full h-2 mt-4'>
                      <div className='rounded-full h-2  w-[50%] bg-[#114B53]'>

                      </div>
                  </div>
                </div>
               <div className='mt-4'>
                  <div className='flex justify-between items-center'>
                  <select name="" id="" className='w-80 h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4  text-xs' >
                      <option value=""> Angular</option>
                      <option value=""> Python</option>
                   </select>
                   <div className='w-10 h-10 flex justify-center items-center border rounded-md'>

                    <p className='text-[#3A3A3C] text-xs font-semibold '>04</p>
                   </div>
                  </div>
                  <div className='rounded-full bg-[#EBEBF0] w-full h-2 mt-4'>
                      <div className='rounded-full h-2  w-[50%] bg-[#114B53]'>

                      </div>
                  </div>
                </div>


               {/* <div className='mt-4'>
               <div className="flex items-center space-x-4">
      <label className="text-gray-700 font-medium">Time period</label>
      <Slider
        min={0}
        max={30}
        value={value}
        onChange={(v) => setValue(v as number)}
      />
      <div className="bg-[#114B53] text-green-700 font-bold px-3 py-1 rounded-md">
        {value}Yr
      </div>
    </div>
                </div> */}
                <div className='mt-4 flex gap-1 items-center'>
                <AiOutlinePlus size={15} className='text-[#114B53]'/>

                <p className='text-[#114B53] text-xs font-semibold '>Add</p>

                </div>
                </div> 
       </div>

        <div className='w-full flex justify-end  gap-10  items-center'>
            <div className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer ' onClick={()=>setSkillsPopup(false)}>
                <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Update  </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills

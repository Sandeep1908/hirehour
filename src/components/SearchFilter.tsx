import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SearchFilter: React.FC = () => {
  const [dropdown, setDropdown] =useState(false);

  return (
    <div className='relative'>

   
    <div onClick={()=>{setDropdown(!dropdown)}} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
      <p className="text-[14px] font-normal text-[#114B53]">Remote</p>
      {/* <img src={arrow_down} alt="" /> */}
      <MdOutlineKeyboardArrowDown
              className={`${dropdown ? 'rotate-180 transition-all duration-500' : ''}`}
            />
    </div>
     {dropdown ?
      <div className='absolute top-12 left-0 w-[140px] h-5 '>
           
           <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg' >
             <div className='w-full px-4 py-2 flex gap-2 '>

             <input type="radio" name="value1" id="" />
             <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 hours</label>
             </div>
             <div className='w-full px-4 py-2 flex gap-2 '>

             <input type="radio" name="value1" id="" />
             <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Past 3 days</label>
             </div>
             <div className='w-full px-4 py-3 flex gap-2 '>

             <input type="radio" name="value1" id="" />
             <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Past week</label>
             </div>
             <div className='w-full px-4 py-3 flex gap-2 '>

             <input type="radio" name="value1" id="" />
             <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Past Month</label>
             </div>
             <div className='w-full px-4 py-3 flex gap-2 '>

             <input type="radio" name="value1" id="" />
             <label htmlFor="" className='text-[#333333] text-[12px] font-medium'>24 Anytime</label>
             </div>
          
           </div>

      </div> : ""}
   
    </div>
  );
}

export default SearchFilter;

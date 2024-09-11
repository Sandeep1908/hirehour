import React from 'react'
import { IoMdClose } from 'react-icons/io'

type AddInfo ={
   setAdditionalInfoPopup: (agr:boolean)=>void
}

const AdditionalDetails:React.FC<AddInfo> = ({setAdditionalInfoPopup}) => {
  return (
    <div className='w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px]  h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-base md:text-xl font-bold'><p>Additional Details</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>setAdditionalInfoPopup(false)}/>
        </div>
        <hr className='mt-3' />
       <div className='py-4 '>
       <div className='w-full flex gap-4 '>
                <div className='w-full '>
                   <p className='text-base font-medium'>Willing to work / Looking for job change <span className='text-red-600'>*</span></p>
              
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Yes</option>
                      <option value=""> No</option>
                   </select>
                </div>

             </div>
       <div className='w-full flex gap-4 mt-5'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Visa Sponsorship <span className='text-red-600'>*</span></p>
              
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Yes</option>
                      <option value=""> No</option>
                   </select>
                </div>

             </div>
       <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-base font-medium'>Security Clearance <span className='text-red-600'>*</span></p>
              
                   <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Yes</option>
                      <option value=""> No</option>
                   </select>
                </div>

             </div>
       </div>

        <div className='w-full flex justify-end  gap-10  items-center'>
            <div className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer ' onClick={()=>setAdditionalInfoPopup(false)}>
                <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Continue</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default AdditionalDetails

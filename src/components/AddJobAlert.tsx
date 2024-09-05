import React from 'react'
import { IoMdClose } from 'react-icons/io'

type JobAlertProps = {
    setJobAlertPopup:(agr:boolean) => void
 }

const AddJobAlert:React.FC<JobAlertProps> = ({setJobAlertPopup}) => {
  return (
    <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
      <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

        <div className='max-w-[1055px] h-auto w-full  bg-white rounded-lg  shadow-lg overflow-y-auto z-30'>
            <div className=' p-5 flex justify-between items-center'>
                 <p className='text-xl font-bold'>Add Job Alert</p>
                 <IoMdClose size={30}  className="cursor-pointer" onClick={()=>{setJobAlertPopup(false)}} />
            </div>
            <hr />
            <div className='w-full p-10'>
              
              <div className='border-[1px] rounded-lg p-3 border-black'>
                <p className='text-[#3A3A3C] text-sm font-semibold'> Alert Active</p>
              </div>
              <div>
              <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Tittle</p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Java Full stack </option>
                      <option value=""> Web Developer </option>
                   </select>                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Employment type </p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> fulltime  </option>
                      <option value=""> Contract </option>
                   </select>        
                </div>
             </div>
              <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Work mode </p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> On Site  </option>
                      <option value=""> Remote </option>
                   </select>                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Experience level </p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Associate Level </option>
                      <option value=""> Senior </option>
                   </select>
                                   </div>
             </div>
            <div className='w-full mt-5'>
            <p className='text-sm font-medium'>Salary preference</p>

            <div className='w-full flex gap-4 mt-1'>
                <div className='w-full '>
                   <p className='text-[12px] font-medium'>Min</p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> $80.00 </option>
                      <option value=""> $90.00 </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-[12px] font-medium'>Max </p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> $100.00</option>
                      <option value=""> $200.00</option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-[12px] font-medium'>Rate </p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Per Year</option>
                      <option value=""> 2 Year</option>
                   </select>
                </div>
             </div>
            </div>

             <div className='w-full flex gap-4 mt-5'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Work authorization</p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> H1 Visa </option>
                      <option value=""> H2 Visa </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Location </p>
                   <select name="" id="" className='w-full h-[48px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Texas, US</option>
                      <option value=""> Londan, Uk</option>
                   </select>
                </div>
             </div>
              </div>

            </div>

            <hr />
            <div className='w-full flex justify-end p-10'>
                <div  className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full '>
                    <p className='text-sm font-semibold text-[#114B53]'>Add</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddJobAlert

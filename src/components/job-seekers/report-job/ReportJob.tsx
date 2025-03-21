import React from 'react'
import { IoMdClose } from 'react-icons/io'

type ReportJobProps={
  setShowReport : (arg:boolean) => void
  setShowReportSubmit : (arg:boolean) => void
  
}

const ReportJob: React.FC<ReportJobProps> = ({setShowReport,setShowReportSubmit}) => {


   const continueDetail=()=>{
    setShowReport(false)
    setShowReportSubmit(true)
   }

    return (

        <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[1000] '>
            <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

            <div className='max-w-[846px] w-full bg-white rounded-lg overflow-auto z-[1000]'>

                <div className=' px-5 py-4 flex justify-between items-center'>
                    <div className='text-lg font-bold'><p>Report Job </p> <p className='text-[#6B7588] text-sm font-normal mt-1'>Select a reason for report a job</p></div>
                    <IoMdClose size={30} className="cursor-pointer" onClick={()=>{setShowReport(false)}} />
                </div>
                <hr />
                <div className='px-10 py-5 flex flex-col gap-5' >
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>Job is expired</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>It's offensive or harassing</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>Asking for money or seems like a fake job</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>Incorrect company, location or job details</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>I think it's NOT a Job, but selling something</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>Other</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                  <textarea name="" placeholder='Write a report' className='text-xs border rounded-lg p-3 w-full h-40' id=""></textarea>

                  </div>
                </div>
                <hr />
                <div className='w-full flex justify-end px-5 py-4 gap-10  items-center'>
                    <p className='cursor-pointer text-[#114B53] font-semibold text-base' onClick={()=>{setShowReport(false)}}> Cancel</p>
                    <div className='bg-[#E9F358] w-[140px] h-[40px] flex justify-center items-center rounded-full cursor-pointer ' onClick={continueDetail}>
                        <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Continue</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReportJob


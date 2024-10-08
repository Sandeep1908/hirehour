import React from 'react'
import { IoMdClose } from 'react-icons/io'

type ReportJobProps={
    setShowReportDetail : (arg:boolean) => void
}

const ReportDetal: React.FC<ReportJobProps> = ({setShowReportDetail}) => {

    

    return (
        <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
            <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

            <div className='max-w-[846px] w-full bg-white rounded-lg overflow-auto z-[30]'>
                <div className=' px-5 py-4 flex justify-between items-center'>
                    <div className='text-lg font-bold'><p>Report Job </p> <p className='text-[#6B7588] text-sm font-normal mt-1'>Write the reason to report in detail</p></div>
                    <IoMdClose size={30} className="cursor-pointer" onClick={()=>{setShowReportDetail(false)}} />
                </div>
                <hr />
                <div className='px-10 py-5 flex flex-col gap-5' >


                    <p className=' text-sm font-medium'>Provide in Detail</p>
                    <textarea name="" placeholder='Write a report' className='text-xs border rounded-lg p-3 w-full h-40' id=""></textarea>
                 </div>
                <hr />
                <div className='w-full flex justify-end px-5 py-4 gap-10  items-center'>
                    <p className='cursor-pointer text-[#114B53] font-semibold text-base' onClick={()=>{setShowReportDetail(false)}}> Back</p>
                    <div className='bg-[#E9F358] w-[140px] h-[40px] flex justify-center items-center rounded-full cursor-pointer ' onClick={()=>{setShowReportDetail(false)}}>
                        <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportDetal

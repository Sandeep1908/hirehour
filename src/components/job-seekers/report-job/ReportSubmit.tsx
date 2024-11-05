import React from 'react'
import { IoMdClose } from 'react-icons/io'
import submitLogo from "../../../assets/submit.png"

type ReportSubmitProps={
    setShowReport : (arg:boolean) => void
    setShowReportSubmit : (arg:boolean) => void
}

const ReportSubmit: React.FC<ReportSubmitProps> = ({setShowReport,setShowReportSubmit}) => {

    

    return (
        <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
            <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

            <div className='max-w-[846px] w-full bg-white rounded-lg overflow-auto z-[30]'>
                <div className=' px-5 py-4 flex justify-end items-center'>
                    <IoMdClose size={30} className="cursor-pointer" onClick={()=>{setShowReportSubmit(false)}} />
                </div>
                <div className='px-10 py-5 flex flex-col items-center' >

                     <img src={submitLogo} alt="" />
                    <p className=' mt-5 text-base font-semibold'>Your Report was submitted successfully</p>
                    <p className='mt-2 text-sm text-[#6B7588] font-medium'>Thank you for you time to report the feedback</p>
                 </div>
                <div className='w-full flex justify-end px-5 py-4 gap-10  items-center'>
                    <p className='cursor-pointer text-[#114B53] font-semibold text-base' onClick={()=>{setShowReport(true)}}> Back</p>
                    <div className='bg-[#E9F358] w-[140px] h-[40px] flex justify-center items-center rounded-full cursor-pointer ' onClick={()=>{setShowReportSubmit(false)}}>
                        <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ReportSubmit


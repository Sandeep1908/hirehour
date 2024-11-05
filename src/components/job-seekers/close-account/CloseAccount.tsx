import React from 'react'
import { IoMdClose } from 'react-icons/io'

type ReportJobProps={
  setShowCloseAccout : (arg:boolean) => void
  setShowCloseAccoutSubmit : (arg:boolean) => void
  
}

const CloseAccount: React.FC<ReportJobProps> = ({setShowCloseAccout,setShowCloseAccoutSubmit}) => {


   const continueDetail=()=>{
    setShowCloseAccout(false)
    setShowCloseAccoutSubmit(true)
   }

    return (

        <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[1000] '>
            <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

            <div className='max-w-[846px] w-full bg-white rounded-lg overflow-auto z-[1000]'>

                <div className=' px-5 py-4 flex justify-between items-center'>
                    <div className='text-lg font-bold'><p>Close Account </p> <p className='text-[#6B7588] text-sm font-normal mt-1'>Select a reason for report a job</p></div>
                    <IoMdClose size={30} className="cursor-pointer" onClick={()=>{setShowCloseAccout(false)}} />
                </div>
                <hr />
                <div className='px-10 py-5 flex flex-col gap-5' >
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>Why are you closing your account?</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>Did you find the job opportunities on our platform relevant to your skills and experience?</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>How would you rate your overall experience with our platform?</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>What features or improvements could have enhanced your experience?</label>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <input className='w-4 h-4' type="radio" name="" id="" />
                    <label htmlFor="" className='text-[#3A3A3C] text-sm font-medium'>Would you consider using our platform again in the future?</label>
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
                    <p className='cursor-pointer text-[#114B53] font-semibold text-base' onClick={continueDetail} > Delete</p>
                    <div className='bg-[#E9F358] w-[140px] h-[40px] flex justify-center items-center rounded-full cursor-pointer 'onClick={()=>{setShowCloseAccout(false)}} >
                        <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Want to Stay</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CloseAccount


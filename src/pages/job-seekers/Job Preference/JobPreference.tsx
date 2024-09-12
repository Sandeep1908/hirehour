import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import AddJobAlert from '../../../components/job-seekers/AddJobAlert'
const JobPreference:React.FC = () => {

    const [showJobAlert, setShowjobAlert] = useState<boolean>(false)

  return (
    <div className='w-full md:h-[100vh] bg-[#F2F2F5]  py-10'>
       <div className='max-w-[1280px] h-full bg-white rounded-lg px-8 py-10 m-auto '>
       <div className=' w-full  flex justify-between items-center'>
            <div className='text-lg font-bold'><p>Job Preference</p>
                <p className='text-[12px]  font-normal'>Add job preferences in your relevant filed to get notified when Employer Posts a Job.</p> 
            </div>
            <div className='hidden md:flex bg-[#114B53] w-[140px]  h-[42px]  justify-center items-center rounded-full cursor-pointer relative  ' onClick={()=>{setShowjobAlert(true)}}>
                <p className='text-xs font-semibold text-white cursor-pointer'>Add Job Alert</p>
            </div>
        </div>
        <hr className='mt-5' />
        <div className='mt-5'>
              <div className='w-full border-[1px] border-black rounded-lg flex p-5'  >
                   <div className='w-full'>
                    <div className='flex justify-between flex-col-reverse'>
                     <p className='text-sm font-semibold min-w-fit pt-2 md:pt-0' >Java Full stack Developer </p>
                     <div className="md:hidden  w-full flex  items-start space-x-4">
                        <div className="flex items-center  " >
                        <FaEdit color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Edit</p>
                        </div>

                        <div className="flex items-center ">
                        <MdDeleteOutline color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Delete</p>
                        </div>
                    </div>
                    </div>
                     <div className='flex justify-between'>

                     <div className='flex flex-wrap gap-2 md:gap-4 mt-2'>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Fulltime, Contract</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Onsite, Remote</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Associate Level</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>$80.00 - $100.00 per year</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>H1 Visa</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-xs text-[#3A3A3C] font-normal'>Allen,TX/Dellas, TX</p>
                        </div>
                     </div>

                     <div className="hidden  w-full md:flex justify-end items-start space-x-4">
                        <div className="flex items-center  " >
                        <FaEdit color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Edit</p>
                        </div>

                        <div className="flex items-center ">
                        <MdDeleteOutline color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Delete</p>
                        </div>
                    </div>
                     </div>
                    
                     <p className='text-base text-[#06A560] font-medium mt-4' >Active</p>
                   </div>
                 
              </div>
        </div>
       </div>
       <div className='md:hidden w-full p-4 fixed bottom-2 '>
       <div className='flex bg-[#114B53] w-full  h-[42px]  justify-center items-center rounded-full cursor-pointer relative  ' onClick={()=>{setShowjobAlert(true)}}>
                <p className='text-xs font-semibold text-white cursor-pointer'>Add Job Alert</p>
            </div>
       </div>
     

       {showJobAlert && <AddJobAlert setJobAlertPopup={setShowjobAlert}/>}
    </div>
  )
}

export default JobPreference

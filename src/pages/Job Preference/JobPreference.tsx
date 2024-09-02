import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import AddJobAlert from '../../components/AddJobAlert'

const JobPreference:React.FC = () => {

    const [showJobAlert, setShowjobAlert] = useState<boolean>(false)

  return (
    <div className='w-full h-[100vh] bg-[#F2F2F5]  py-10'>
       <div className='max-w-[1280px] h-full bg-white rounded-lg px-8 py-10 m-auto '>
       <div className=' w-full  flex justify-between items-center'>
            <div className='text-base md:text-2xl font-bold'><p>Job Preference</p>
                <p className='text-[12px] md:text-base font-normal'>Add job preferences in your relevant filed to get notified when Employer Posts a Job.</p> 
            </div>
            <div className='bg-[#114B53] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer relative z-20 ' onClick={()=>{setShowjobAlert(true)}}>
                <p className='text-base font-semibold text-white cursor-pointer'>Add Job Alert</p>
            </div>
        </div>
        <hr className='mt-5' />
        <div className='mt-5'>
              <div className='w-full border-[1px] border-black rounded-lg flex p-5'  >
                   <div className='w-full'>
                     <p className='text-xl font-semibold'>Java Full stack Developer </p>
                     <div className='flex justify-between'>

                     <div className='flex flex-wrap gap-4 mt-2'>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-[14px] text-[#3A3A3C] font-normal'>Fulltime, Contract</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-[14px] text-[#3A3A3C] font-normal'>Onsite, Remote</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-[14px] text-[#3A3A3C] font-normal'>Associate Level</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-[14px] text-[#3A3A3C] font-normal'>$80.00 - $100.00 per year</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-[14px] text-[#3A3A3C] font-normal'>H1 Visa</p>
                        </div>
                        <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                             <p className='text-[14px] text-[#3A3A3C] font-normal'>Allen,TX/Dellas, TX</p>
                        </div>
                     </div>

                     <div className="w-full flex justify-end items-start space-x-4">
                        <div className="flex items-center  " >
                        <FaEdit color="#104B53" />
                        <p className="text-[#104B53]">Edit</p>
                        </div>

                        <div className="flex items-center ">
                        <MdDeleteOutline color="#104B53" />
                        <p className="text-[#104B53]">Delete</p>
                        </div>
                    </div>
                     </div>
                    
                     <p className='text-base text-[#06A560] font-medium mt-4' >Active</p>
                   </div>
                 
              </div>
        </div>
       </div>

       {showJobAlert && <AddJobAlert setJobAlertPopup={setShowjobAlert}/>}
    </div>
  )
}

export default JobPreference

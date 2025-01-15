import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import AddJobAlert from '../../../components/job-seekers/AddJobAlert'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAllJobPreferenceDetails } from '../../../utils/jobseekers/getAllJobPreference'
import axiosInstance from '../../../axios/axiosInstance'
import { toast } from 'react-toastify'

type DeleteId={
     id : number,
}

const JobPreference:React.FC = () => {
    
     const { data: allJobPreference } = useQuery({queryKey: ['allJobPreference'],queryFn: fetchAllJobPreferenceDetails,}); 

    const [showJobAlert, setShowjobAlert] = useState<boolean>(false)
    const [isJobAlertChecked, setIsJobAlertChecked] = useState<boolean>(false);

    useEffect(() => {
       if(allJobPreference){
          // console.log("allJobPreference",allJobPreference)
          console.log("allJobPreference",allJobPreference)
       }
    },[])


    const mutationDelete = useMutation({
        
     mutationFn: async (deleteId: DeleteId) => {
       const response = await axiosInstance.post("/api/candidate/details/delete-job-preference", deleteId);
       console.log("deleteId",response.data)
       return response.data;
     
     },
     onSuccess: () => {
         
       toast.success('Job Preferences deleted successfully');
     },
     onError: () => {
         toast.error('Failed to delete. Please try again.');
   
      },
   });
   
    const handleDelete = (id:number)  => {
     mutationDelete.mutate({id});
    }


 
  return (
    <div className='w-full md:min-h-[calc(100vh-56px)] bg-[#F2F2F5]  py-10'>
       <div className='max-w-[1280px] h-[80%] overflow-auto bg-white rounded-lg px-8 py-10 m-auto '>
       <div className=' w-full  flex justify-between items-center'>
            <div className='text-lg font-bold'><p>Job Preference</p>
                <p className='text-[12px]  font-normal'>Add job preferences in your relevant filed to get notified when Employer Posts a Job.</p> 
            </div>
            <div className='hidden md:flex bg-[#114B53] w-[140px]  h-[42px]  justify-center items-center rounded-full cursor-pointer relative' onClick={()=>{setShowjobAlert(true)}}>
                <p className='text-xs font-semibold text-white cursor-pointer'>Add Job Alert</p>
            </div>
        </div>
        <hr className='mt-5' />

        {allJobPreference?.jobPreferences?.map((detail:any,id:number)=>{
          return(
               <div key={id} className='mt-5'>
               <div className='w-full border-[1px] border-black rounded-lg flex p-5'  >
                    <div className='w-full'>
                     <div className='flex justify-between flex-col-reverse'>
                      <p className='text-sm font-semibold min-w-fit pt-2 md:pt-0' >{detail.jobRoleName} </p>
                      <div className="md:hidden  w-full flex  items-start space-x-4">
                         <div className="flex items-center  " >
                         <FaEdit color="#104B53" size={14} />
                         <p className="text-[#104B53] text-xs">Edit</p>
                         </div>
 
                         <div className="flex items-center cursor-pointer " onClick={()=>{handleDelete(detail.ID)}}>
                         <MdDeleteOutline color="#104B53" size={14} />
                         <p className="text-[#104B53] text-xs">Delete</p>
                         </div>
                        
                     </div>
                     </div>
                      <div className='flex justify-between'>
 
                      <div className='flex flex-wrap gap-2 md:gap-5 mt-2'>
                         <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                              <p className='text-xs text-[#3A3A3C] font-normal'>{detail.jobRoleType}</p>
                         </div>
                         <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                              <p className='text-xs text-[#3A3A3C] font-normal'>{detail.experienceLevel}</p>
                         </div>
                         <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                              <p className='text-xs text-[#3A3A3C] font-normal'>{detail.TypesOfAuthorizationToHave}</p>
                         </div>
                         <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                              <p className='text-xs text-[#3A3A3C] font-normal'>{detail.salaryRange} {detail.salaryRangeType}</p>
                         </div>
                         <div className='px-2 py-1 bg-[#F2F2F5] rounded-full'>
                              <p className='text-xs text-[#3A3A3C] font-normal'>{detail.location}</p>
                         </div>
                       
                      </div>
 
                      <div className="hidden  w-full md:flex justify-end items-start space-x-4">
                         <div className="flex items-center mt-1 " >
                         <FaEdit color="#104B53" size={14} />
                         <p className="text-[#104B53] text-xs">Edit</p>
                         </div>
 
                         <div className="flex items-center mt-1 cursor-pointer " onClick={()=>{handleDelete(detail.ID)}}>
                         <MdDeleteOutline color="#104B53" size={14} />
                         <p className="text-[#104B53] text-xs">Delete</p>
                         </div>
                         <div>
                 <label className="inline-flex items-center cursor-pointer outline-none">
                   <input
                     type="checkbox"
                     checked={isJobAlertChecked}
                     className="sr-only peer outline-none"
                     onChange={() => {setIsJobAlertChecked(!isJobAlertChecked)}}
                   />
                   <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#114B53]"></div>
                 </label>
               </div>
                     </div>
                      </div>
                     
                      <p className='text-base text-[#06A560] font-medium mt-4' >Active</p>
                    </div>
                  
               </div>
         </div>
          )
        })}
       
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

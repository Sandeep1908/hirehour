import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import axiosInstance from '../../../axios/axiosInstance'
import { toast } from 'react-toastify'
import JobRoles from '../../../utils/JobRoles'
import Domains from '../../../utils/Domains'
import JobTypes from '../../../utils/JobTypes'
import LocationSearch from '../../../utils/LocationSearch'



type AddExperiences ={
    setAddExperiencePopup:(agr:boolean) => void
}
type AddExperince= {
   companydetails: string,
   domain: number | null,
   durationStart: string,
   place: string | null;
   jobCategory: string | null;
   descriptionOfExperience: string;
   role: number | null;
   jobType: number | null;
 }

const AddExperience:React.FC<AddExperiences> = ({setAddExperiencePopup}) => {


    const [companydetails, setCompanydetails] = useState<string>("");
    const [domain, setDomain] = useState<number | null>(null);
    const [role, setRole] = useState<number | null>(null);
    const [place, setPlace] = useState<string | null>(null);
    const [jobCategory, setJobCategory] = useState<string>("");
    const [placeConvert, setPlaceConvert] = useState<LocationValue | null>(null);
    const [durationStart, setDurationStart] = useState<string>("");
    const [durationEnd, setDurationEnd] = useState<string>("");
    const [descriptionOfExperience, setDescriptionOfExperience] = useState<string>("");
    const [jobType, setJobType] = useState<number | null>(null);

    const [boxCheck, setBoxCheck] = useState(false); // State to track checkbox status

   



   

         
    useEffect(() => {
        if (placeConvert != null) {
            // setPlace(JSON.stringify( placeConvert.city +", " + placeConvert.country));
            setPlace(String( placeConvert));
            console.log("place",place)
            console.log("place type", typeof(place))
        }
    }, [placeConvert]);


      const mutation = useMutation({
        
        mutationFn: async (addExperince: AddExperince) => {
          const response = await axiosInstance.post("/api/candidate/details/experience", addExperince);
          console.log("response.data",response.data)
          return response.data;
        
        },
        onSuccess: () => {
            
          toast.success('Experince detail added successfully');
        },
        onError: () => {
            toast.error('Failed to add experince. Please try again.');

         },
      });
    
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { companydetails, domain, durationStart, place,jobCategory, descriptionOfExperience,role,jobType };
        console.log("formData",formData)

        mutation.mutate(formData);
    
    
    
      };   



  return (
    <div className='w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px] h-full w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-xl font-bold'><p>Add Experience</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>{setAddExperiencePopup(false)}} />
        </div>
        <hr className='mt-3' />
       <div className='py-4 flex flex-col gap-5 '>
          <div className='bg-[#F2F2F5] rounded-lg p-4'>
              
              <div>
              <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Title <span className='text-red-600'>*</span></p>
                   <div className='mt-2'>
                   <JobRoles setRole={setRole} />
                   </div>
                   {/* <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' /> */}
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Domain <span className='text-red-600'>*</span></p>
                   {/* <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)}  className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' /> */}
                   <div className='mt-2'>
                   <Domains setDomain={setDomain} />
                   </div>
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3 '>
                <div className='w-full '>
                   <p className='text-sm font-medium '>Job Category <span className='text-red-600'>*</span></p>
                   <input type="text" value={jobCategory} onChange={(e) => setJobCategory(e.target.value)} className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                  
                </div>
               
             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-[48%] '>
                   <p className='text-sm font-medium'>Date of joining <span className='text-red-600'>*</span></p>
                   <input type="date" value={durationStart} onChange={(e) => setDurationStart(e.target.value)}  className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className={`w-[49%] ${boxCheck && "hidden"}`}>
                   <p className='text-sm font-medium'>Date of Relieving </p>
                   <input type="date" value={durationEnd} onChange={(e) => setDurationEnd(e.target.value)}  className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2  px-4' />
                </div>
             </div>
             <div className='mt-3 flex gap-4'>
               <input type="checkbox" name="" id="" checked={boxCheck} onChange={(e)=>{setBoxCheck(e.target.checked)}} className='w-[20px] h-[20px]' /> 
               <p className='text-sm font-medium'>I am currently working </p>

             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Company Name <span className='text-red-600'>*</span></p>
                   <input type="text" value={companydetails} onChange={(e) => setCompanydetails(e.target.value)} className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                   {/* <select name="" id="" className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value="xyz Comoany"> xyz Comoany </option>
                      <option value=""> abc Comoany </option>
                   </select> */}
                </div>

                <div className='w-full '>
                   <p className='text-sm font-medium'>Location <span className='text-red-600'>*</span></p>
                   {/* <select name="" id="" className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Texas, US</option>
                      <option value=""> Londan, Uk</option>
                   </select> */}
                   <div className='mt-2'>
                   <LocationSearch setSelectedLocation={setPlaceConvert} />
                   </div>
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Type <span className='text-red-600'>*</span></p>
                   {/* <select name="" id="" className='w-full h-[40px] rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Full-Time </option>
                      <option value=""> Part-Time </option>
                   </select> */}
                   <div className='mt-2'>
                   <JobTypes setType={setJobType} />
                   </div>
                </div>
               
             </div>
             <div className='w-full flex gap-4 mt-3'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Summary <span className='text-red-600'>*</span></p>
                   <textarea name="" id="" value={descriptionOfExperience} onChange={(e) => setDescriptionOfExperience(e.target.value)}  className='w-full h-[190px] rounded-md border-[1px] border-[#E1E1E2] mt-2 p-4 ' >
                 
                   </textarea>
                </div>
               
             </div>
              </div>
          </div>
         
        
       </div>

        <div className='w-full flex justify-end  gap-10  items-center'>
            <div onClick={handleSubmit} className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                <p className='text-sm font-semibold text-[#114B53] cursor-pointer'>Continue</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddExperience
import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'
import axiosInstance from '../../../axios/axiosInstance'


type EducationProps = {
    setAddEducationPopup:(agr:boolean) => void
}

const AddEducation:React.FC<EducationProps> = ({setAddEducationPopup}) => {
     
    const [degree, setDegree] = useState<string>("");
    const [major, setMajor] = useState<string>("");
    const [durationStart, setDurationStart] = useState<string>("");
    const [durationEnd, setDurationEnd] = useState<string>("");
    const [schoolName, setSchoolName] = useState<string>("");
    const [schoolLocation, setSchoolLocation] = useState<string>("");

    interface AddEdu {
        degree: string,
        major: string,
        durationStart: string,
        durationEnd: string;
        schoolName: string;
        schoolLocation: string;
      }



      const mutation = useMutation({
        mutationFn: async (addEdu: AddEdu) => {
          const response = await axiosInstance.post("/api/candidate/details/education", addEdu);
          console.log("response.data",response.data)
          return response.data;
        
        },
        onSuccess: () => {
            
          toast.success('Education detail added successfully');
        },
        onError: () => {
            toast.error('Failed to add education. Please try again.');

         },
      });
    
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { degree, major, durationStart, durationEnd, schoolName,schoolLocation };

        mutation.mutate(formData);
    
    
    
      };   


  return (
    <div className='w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px] h-full md:h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-sm md:text-xl font-bold'><p>Add Education</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>{setAddEducationPopup(false)}}/>
        </div>
        <hr className='mt-3' />
       <div className='py-4 flex flex-col gap-5 '>
          <div className='bg-[#F2F2F5] rounded-lg p-4'>
             
              <div>
              <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Degree <span className='text-red-600'>*</span></p>
                   <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Branch/Specialization <span className='text-red-600'>*</span></p>
                   <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Start of Course <span className='text-red-600'>*</span></p>
                   <input type="date" value={durationStart?.split("T")[0]} onChange={(e) => setDurationStart(e.target.value)} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>End of Course <span className='text-red-600'>*</span></p>
                   <input type="date" value={durationEnd?.split("T")[0]} onChange={(e) => setDurationEnd(e.target.value)} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>University/College <span className='text-red-600'>*</span></p>
                   <select name="" id="" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value="xyz college"> xyz college </option>
                      <option value="abc college"> abc college </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Location <span className='text-red-600'>*</span></p>
                   <select name="" id="" value={schoolLocation} onChange={(e) => setSchoolLocation(e.target.value)} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value="Texas, US"> Texas, US</option>
                      <option value="Londan, Uk"> Londan, Uk</option>
                   </select>
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

export default AddEducation

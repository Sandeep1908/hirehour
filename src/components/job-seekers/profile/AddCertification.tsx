import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'
import axiosInstance from '../../../axios/axiosInstance'

type AddCertificationProps = {
   setAddCertificationPopup:(agr:boolean) => void
 }
 type AddCert ={
   certName: string,
   certLink: string,
   certType: string,
   validity: string;
   yearOfCompletion: string;
 
 }
const AddCertification:React.FC<AddCertificationProps> = ({setAddCertificationPopup}) => {

       const [certName, setCertName] = useState<string>("");
       const [certLink, setCertLink] = useState<string>("");
       const [certType, setCertType] = useState<string>("");
       const [validity, setValidity] = useState<string>("");
       const [yearOfCompletion, setYearOfCompletion] = useState<string>("");

       
      const mutation = useMutation({
         mutationFn: async (addCert: AddCert) => {
           const response = await axiosInstance.post("/api/candidate/details/license-cert", addCert);
           console.log("response.data",response.data)
           return response.data;
         
         },
         onSuccess: () => {
             
           toast.success('Certificate detail added successfully');
           setAddCertificationPopup(false)
         },
         onError: () => {
             toast.error('Failed to add Certificate. Please try again.');
 
          },
       });
     
     
       const handleSubmit = (e: React.FormEvent) => {
         e.preventDefault();
         const formData = { certName, certLink, certType, validity, yearOfCompletion };
 
         mutation.mutate(formData);
     
         
     
       };   
   

  return (
    <div className='w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px] h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-sm md:text-xl font-bold'><p>Add Certificaltion</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>{setAddCertificationPopup(false)}}/>
        </div>
        <hr className='mt-3' />
       <div className='py-4 flex flex-col gap-5 '>
          <div className='bg-[#F2F2F5] rounded-lg p-4'>
             
              <div>
              <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Certificate name <span className='text-red-600'>*</span></p>
                   <input type="text" onChange={(e) => setCertName(e.target.value)} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Certificate Link <span className='text-red-600'>*</span></p>
                   <input type="text"  onChange={(e) => setCertLink(e.target.value)} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
             <div className='w-full '>
                   <p className='text-sm font-medium'>Certificate Type <span className='text-red-600'>*</span></p>
                   <input type="text"  onChange={(e) => setCertType(e.target.value)} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Issue Year <span className='text-red-600'>*</span></p>
                   <input type="number" onChange={(e) => setYearOfCompletion(e.target.value)} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Expiration date <span className='text-red-600'>*</span></p>
                   <input type="date" onChange={(e) => setValidity(e.target.value)} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4' />
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

export default AddCertification

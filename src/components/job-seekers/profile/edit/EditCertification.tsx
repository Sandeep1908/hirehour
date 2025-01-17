import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { toast } from 'react-toastify'
import axiosInstance from '../../../../axios/axiosInstance'
import { AxiosError } from 'axios'


type EditCertificationProps = {
   setEditCertPopup:(agr:boolean) => void
   editCertData:any
 }
 type EditCert ={
   certName: string,
   certLink: string,
   certType: string,
   validity: string;
   yearOfCompletion: string;
 
 }
const EditCertification:React.FC<EditCertificationProps> = ({setEditCertPopup,editCertData}) => {

      //  const [certName, setCertName] = useState<string>("");
      //  const [certLink, setCertLink] = useState<string>("");
      //  const [certType, setCertType] = useState<string>("");
      //  const [validity, setValidity] = useState<string>("");
      //  const [yearOfCompletion, setYearOfCompletion] = useState<string>("");

       
       const [editCertDetails, setEditCertDetails] = useState<EditCert>({
            certName: editCertData.certName,
            certLink: editCertData.certLink,
            certType: editCertData.certType,
            validity: editCertData.validity,
            yearOfCompletion: editCertData.yearOfCompletion,
         });

         useEffect(() => {
            setEditCertDetails({
               ...editCertData,
               validity: editCertData.validity.split('T')[0], // Format validity to YYYY-MM-DD
            });
         }, [editCertData]);
         
           const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
              const { name, value } = e.target;
             setEditCertDetails((prevState) => ({
               ...prevState,
               [name]: value,
             }));
           };

      

      const mutation = useMutation({
         mutationFn: async (editCert: EditCert) => {
            console.log("editCert",editCert)
           const response = await axiosInstance.post("/api/candidate/details/license-cert", editCert);
           return response.data;
         
         },
         onSuccess: () => {
             
           toast.success('Certificate detail edit successfully');
           setEditCertPopup(false)
         },
         onError: (error) => {
            const axiosError = error as AxiosError<{ message: string }>;
                     toast.error(axiosError?.response?.data?.message);
 
          },
       });
     
     
       const handleSubmit = (e: React.FormEvent) => {
         e.preventDefault();
          mutation.mutate(editCertDetails);
       };   
   

  return (
    <div className='w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px] h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-sm md:text-xl font-bold'><p>Edit Certificaltion</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>{setEditCertPopup(false)}}/>
        </div>
        <hr className='mt-3' />
       <div className='py-4 flex flex-col gap-5 '>
          <div className='bg-[#F2F2F5] rounded-lg p-4'>
             
              <div>
              <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
               
                  <div className='w-full '>
                     <p className='text-sm font-medium'>Certificate name <span className='text-red-600'>*</span></p>
                     <input type="text" name='certName' value={editCertDetails.certName} onChange={handleInputChange} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                  </div>
                <div className='w-full mt-3 '>
                   <p className='text-sm font-medium'>Certificate Link <span className='text-red-600'>*</span></p>
                   <input type="text" name='certLink' value={editCertDetails.certLink}  onChange={handleInputChange} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
             <div className='w-full '>
                   <p className='text-sm font-medium'>Certificate Type <span className='text-red-600'>*</span></p>
                   <input type="text" name='certType' value={editCertDetails.certType}  onChange={handleInputChange} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Issue Year <span className='text-red-600'>*</span></p>
                   <input type="number" name='yearOfCompletion' value={editCertDetails.yearOfCompletion}  onChange={handleInputChange} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Expiration date <span className='text-red-600'>*</span></p>
                   <input type="date" name='validity' value={editCertDetails.validity}  onChange={handleInputChange} className='w-full h-[40px] text-sm rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4' />
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

export default EditCertification

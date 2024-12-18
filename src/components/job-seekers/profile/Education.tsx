import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { fetchUserDetails } from '../../../utils/jobseekers/getUserDetails'
import axiosInstance from '../../../axios/axiosInstance'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'


type EducationProps = {
   setEducationPopup:(agr:boolean) => void
   degreeName:string
}

// type EduDetails = {
//    degree: string;
//    major: string;
//    durationStart: string;
//    durationEnd: string;
//    schoolName: string;
//    schoolLocation: string;
//  };

type EditEducation ={
   degree: string,
   major: string,
   durationStart: string,
   durationEnd: string;
   schoolName: string;
   schoolLocation: string;
 }
 

const Education:React.FC<EducationProps> = ({setEducationPopup,degreeName}) => {

   const { data: userDetails } = useQuery({
      queryKey: ['userDetails'],
      queryFn: fetchUserDetails,
    });


   // const [degree, setDegree] = useState<string>("");
   // const [major, setMajor] = useState<string>("");
   // const [durationStart, setDurationStart] = useState<string>("");
   // const [durationEnd, setDurationEnd] = useState<string>("");
   // const [schoolName, setSchoolName] = useState<string>("");
   // const [schoolLocation, setSchoolLocation] = useState<string>("");
   
   const [eduDetails, setEduDetails] = useState<EditEducation>({
      degree: "",
      major: "",
      durationStart: "",
      durationEnd: "",
      schoolName: "",
      schoolLocation: "",
     });
   

     useEffect(() => {
    {userDetails?.candidatedetailseducationdetails?.map((item:any) => {
      // console.log("object111")
      if(item.degree === degreeName){

         setEduDetails({
            degree: item?.degree,
            major: item?.major,
            durationStart: item?.durationStart?.split("T")[0],
            durationEnd: item?.durationEnd?.split("T")[0],
            schoolName: item?.schoolName,
            schoolLocation: item?.schoolLocation,
          });

      }
     
     })}
    }, [userDetails]);
 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
   
    const { name, value } = e.target;
    setEduDetails((prevState:any) => ({
      ...prevState,
      [name]: value,
    }));
  };

   //   const [eduDetails, setEduDetails] = useState<EditEducation>({
   //    degree: "",
   //    major: userDetails?.user?.lastName,
   //    durationStart: userDetails?.user?.phoneNumber,
   //    durationEnd: userDetails?.needVisaSponsorship,
   //    schoolName: userDetails?.needVisaSponsorship,
   //    schoolLocation: userDetails?.needVisaSponsorship,
   //   });

   const mutation = useMutation({
      mutationFn: async (editEdu: EditEducation) => {
        const response = await axiosInstance.post("/api/candidate/details/education", editEdu);
        console.log("Education detail",response.data)
        return response.data;
      
      },
      onSuccess: () => {
          
        toast.success('Education detail edit successfully');
      },
      onError: (error) => {
         const axiosError = error as AxiosError<{ message: string }>;
         toast.error(axiosError?.response?.data?.message);

       },
    });
  
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // if(boxCheck === true){
      //  setDurationEnd("Present")
      // }
      // const formData = { eduDetails };

      mutation.mutate(eduDetails);
    };   

 

  return (
    <div className='w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[700px] h-full md:h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-4'>
        <div className='  flex justify-between items-center'>
            <div className='text-sm md:text-xl font-bold'><p>Education</p></div>
            <IoMdClose size={30} className="cursor-pointer"  onClick={()=>{setEducationPopup(false)}}/>
        </div>
        <hr className='mt-3' />
       <div className='py-4 flex flex-col gap-5 '>
          <div className='bg-[#F2F2F5] rounded-lg p-4'>
          {userDetails?.candidatedetailseducationdetails?.map((item:any, i: number) => {
            if(item.degree === degreeName ){
              return (
              <div key={i}>
              <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Degree <span className='text-red-600'>*</span></p>
                   <input type="text" value={eduDetails?.degree}  onChange={handleInputChange} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Branch/Specialization <span className='text-red-600'>*</span></p>
                   <input type="text" value={eduDetails?.major} onChange={handleInputChange}  className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Start of Course <span className='text-red-600'>*</span></p>
                   <input type="date" value={eduDetails?.durationStart?.split("T")[0]} onChange={handleInputChange} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' />
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>End of Course <span className='text-red-600'>*</span></p>
                   <input type="date" value={eduDetails?.durationEnd?.split("T")[0]} onChange={handleInputChange} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4' />
                </div>
             </div>
             <div className='w-full flex gap-4 mt-3 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>University/College <span className='text-red-600'>*</span></p>
                   <select name="" id="" value={eduDetails?.schoolName} onChange={handleInputChange} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> xyz college </option>
                      <option value=""> abc college </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Location <span className='text-red-600'>*</span></p>
                   <select name="" id="" value={eduDetails?.schoolLocation} onChange={handleInputChange} className='w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Texas, US</option>
                      <option value=""> Londan, Uk</option>
                   </select>
                </div>
             </div>
              </div>
               );
            }
            })}
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

export default Education

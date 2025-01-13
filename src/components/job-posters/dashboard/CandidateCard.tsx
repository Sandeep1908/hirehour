import React, { useEffect, useState } from 'react'
import { HiOutlineStar, HiStar } from 'react-icons/hi'
import axiosrecruiterinstance from '../../../axios/axiosrecruiterinstance'





interface CandidateDetails {
  id: string;
  firstName: string;
  candidatedetail: {
    location: string;
    candidatedetailsexperiences: {
      companydetails: string;
      durationStart: string;
      durationEnd: string;
    }[];
    candidatedetailseducationdetails: {
      degree: string;
      schoolName: string;
    }[];
    candidatedetailsskills: {
      skillName: string;
    }[];
    candidatedetailslicensescerts: {
      certName: string;
    }[];
  };
}

interface ResumeSourceProps {
  details: {
    id: string;
    candidate: CandidateDetails;
  };
}



const CandidateCard:React.FC<ResumeSourceProps> = (details) => {


 const [viewResumedata, setViewResumeData] = useState<any>();
    
     useEffect(()=>{
        if(details.details){
                const getData = async () => {
                  try {
                    const respose= await axiosrecruiterinstance.get(`/api/recruiter/resume-sourcing/resume/${details.details.id}`)
                    setViewResumeData(respose.data)
                    console.log("object",viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.location)
                  } catch (error) {
                    console.error('Error fetching resume sourcing data:', error);
                  }
                };
            
                getData();
              }

        },[])

    const [star,setStar] = useState<boolean>(false)

  return (
    <div className='w-full border-[1px] border-[#114B53] p-4 rounded-lg'>
    <div className='flex w-full justify-between'>
        <div className='flex gap-3'>
            <div className='w-16 h-16 bg-[#95FAF9] rounded-full flex justify-center items-center'>
                <p className='text-lg font-semibold text-[#3A3A3C]'>{details.details.candidate.firstName.charAt(0)}</p>
            </div>
            <div> 
                 <p className='text-[14px] font-semibold text-[#3A3A3C]'> {details.details.candidate.firstName}</p>
                <div className='  mt-1'>

                    <p className='text-[12px]  text-[#6B7588]'>Senior Java Developer</p>
                    <p className='text-[12px]  text-[#6B7588]'>{viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.location}</p>

                </div></div>
        </div>

      {star ?  < HiStar onClick={()=>{setStar(!star)}} size={20} />:<HiOutlineStar onClick={()=>{setStar(!star)}} size={20} />}
      
      
        

    </div>
    <div className='mt-3'>
        <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Experience (Total 4 Years)</p>
        <p className='text-[12px] font-semibold text-[#6B7588] mt-1'>Sr. Java Full Stack </p>
        <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>{viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.candidatedetailsexperiences[0]?.companydetails} {viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.candidatedetailsexperiences[0]?.durationStart.split('T')[0]} - {viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.candidatedetailsexperiences[0]?.durationEnd.split('T')[0]}    Domain : Health Care</p>

    </div>
    <div className='mt-3'>
        <p className='text-[12px] font-semibold text-[#3A3A3C]'>Education</p>
        <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>{viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.candidatedetailseducationdetails[0]?.degree}, {viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.candidatedetailseducationdetails[0]?.schoolName}</p>

    </div>
    <div className='mt-3'>
        <p className='text-[12px] font-semibold text-[#3A3A3C]'>Skills</p>
        <div className='flex gap-2 items-center'>
            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                <p className='text-[10px] text-[#6B7588] font-semibold'>{viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.candidatedetailsskills[0]?.skillName}</p>
            </div>
        

        </div>
    </div >
    <div className='mt-3 flex justify-between'>
        <div>
            <p className='text-[12px] font-semibold text-[#3A3A3C]'>Licence & Certificate</p>
            <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>{viewResumedata?.sourcingRecord?.candidate?.candidatedetail?.candidatedetailslicensescerts[0]?.certName}</p>
        </div>
        <div>
            <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>Viwed by</p>
            <p className='text-[12px] font-semibold text-[#3A3A3C]'>Mathew</p>
        </div>

    </div>
</div>
  )
}

export default CandidateCard

import React, { useEffect, useState } from 'react'
import { BsFillLightningFill } from "react-icons/bs";
import { LuMoreVertical } from 'react-icons/lu';
import { FaFlag, FaRegBookmark } from 'react-icons/fa6';
import { MdShare } from 'react-icons/md';
import ReportJob from './report-job/ReportJob';
import jobImg from '../../../src/assets/icon-company.png'
// import ReportDetal from './report-job/ReportDetail';
import ReportSubmit from './report-job/ReportSubmit';

type JobCardProps={
    jobDataId:number,
    
    setIsOpen:(e:boolean)=>void,
    
    details:any
  }


const JobCard: React.FC<JobCardProps> = ({setIsOpen,details,jobDataId }) => {
    const [showIcon, setShowIcon] = useState<boolean>(false);
    const [showReport, setShowReport] = useState<boolean>(false);
    // const [showReportDetail, setShowReportDetail] = useState<boolean>(false);
    const [showReportSubmit, setShowReportSubmit] = useState<boolean>(false);

    const [isShareModal,setIsShareModal]=useState<boolean>(false);

    const [workStackArray, setWorkStackArray] = useState<any>([]); // Initialize with an empty array

    useEffect(() => {
        if (details.workStack) {
            try {
                // Parse the JSON and set the state
                const parsedWorkStack = JSON.parse(details.workStack);
                setWorkStackArray(parsedWorkStack); // Use the setState function correctly
                console.log("object",workStackArray)
            } catch (error) {
                console.error("Error parsing workStack JSON:", error);
            }
        }
    }, [details.workStack, jobDataId]); // Add dependencies to the useEffect hook

    return (
        <a href='#mainJobDescription'  className={`${jobDataId === details.id ?"border-black":""} w-full h-auto p-3   md:px-3 py-5 border-2   rounded-xl flex flex-col gap-3 md:gap-5 `}>
            <div className='w-full flex justify-between'>
                
                <div className='flex gap-2'>
                    <img className='w-[46px] h-[46px]' src={jobImg} alt="" />
                    <div className='h-auto'>
                        <p className='text-base font-semibold'>{details?.jobRoleName}</p>
                        <ul className='flex  gap-4  text-[12px] mt-1'>
                           
                            {/* <li>{details.accommodationType}</li> */}
                            <li>{details?.jobDomain}</li>
                            <li>{details?.jobLocation}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-1 items-start ' >
                <FaRegBookmark size={16}/>
                <div className='relative '>

                <LuMoreVertical size={20} onClick={()=>setIsShareModal(!isShareModal)} className='cursor-pointer '/>
                <div className={`  bg-[#FFFFFF]  shadow-md absolute top-9 right-0 rounded-lg flex flex-col  transition-all duration-300 ${isShareModal ? 'opacity-1 translate-y-[-10px] z-[40] ' : 'opacity-0 z-[-300]'}`}>

                    <div className="flex  items-center px-5 py-2 gap-2 cursor-pointer" onClick={()=>{setShowReport(true)}}>
                    <FaFlag />
                    <p>Report</p>
                    </div>

                    <hr />
                    <div className="flex  items-center px-5 py-2 gap-2">
                    <MdShare />

                    <p>Share</p>
                    </div>



                    </div>  
                </div>


             
                    </div>

                    
            </div>

            <div className='flex gap-1 md:gap-2 h-auto'>

                
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[12px]'>{details.accommodationType}</p>
                </div>
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[12px]'> {details.salaryOfferedRangeEnd}$ -{details.salaryOfferedRangeStart}$ {details.salaryOfferedRangeType}</p>
                </div>
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[12px]'>{JSON.parse(details.employmentType)}</p>
                </div>

            </div>

            <div className=''>

                <p className='text-[12px] font-semibold'>Tech Stacks</p>

                <div className='flex gap-1 md:gap-2 mt-1'>

                {workStackArray.map(( value:any,id:number)=>(
                                 
                              <div key={id} className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                                 <p className='text-[12px] font-semibold'>{value} </p>
                             </div>
                            ))}
                    {/* <div className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                        <p className='text-[12px] font-semibold'>{JSON.parse(details.workStack)} </p>
                    </div> */}

                   

                </div>

            </div>

            <div className='flex justify-between items-center'>
                <p className='text-[#A9A9A9] text-[10px] font-normal '>Posted {details?.updatedAt.split('T')[0]}</p>
                 <div onClick={()=>{setIsOpen(true)}} className={`cursor-pointer w-[120px] h-[32px] flex justify-center items-center ${showIcon ? "bg-[#114B53]": "bg-[#E9F358]"}  rounded-full`} onMouseEnter={()=>{setShowIcon(!showIcon)}} onMouseLeave={()=>{setShowIcon(!showIcon)}}>
                  {showIcon?   <BsFillLightningFill className='text-white' />:    <p className='text-[#114B53] text-sm font-semibold'>Quick Apply</p> }
                 

                 </div>
            </div>


            {showReport &&<ReportJob setShowReport={setShowReport}  setShowReportSubmit={setShowReportSubmit}  /> }
{/* {showReportDetail &&<ReportDetal setShowReportDetail={setShowReportDetail}  setShowReportSubmit={setShowReportSubmit}/> } */}
{showReportSubmit &&<ReportSubmit setShowReport={setShowReport} setShowReportSubmit={setShowReportSubmit} /> }

            
        </a>
      
           
    

  );
};

export default JobCard;

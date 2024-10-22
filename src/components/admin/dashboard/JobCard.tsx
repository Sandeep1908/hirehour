import React, { useState } from 'react'
import { BsFillLightningFill } from "react-icons/bs";
import { LuMoreVertical } from 'react-icons/lu';
import { FaFlag, FaRegBookmark } from 'react-icons/fa6';
import { MdOutlineFlag, MdShare } from 'react-icons/md';
import ReportJob from './report-job/ReportJob';
import ReportDetal from './report-job/ReportDetail';
import ReportSubmit from './report-job/ReportSubmit';

type JobCardProps={
    jobDataId:number,
    setIsOpen:(e:boolean)=>void,
    setId:(e:number)=>void,
    data:jobDescriptionTypes
  }


const JobCard: React.FC<JobCardProps> = ({setIsOpen,data,setId,jobDataId }) => {
    const [showIcon, setShowIcon] = useState<boolean>(false);
    const [showReport, setShowReport] = useState<boolean>(false);
    const [showReportDetail, setShowReportDetail] = useState<boolean>(false);
    const [showReportSubmit, setShowReportSubmit] = useState<boolean>(false);

    const [isShareModal,setIsShareModal]=useState<boolean>(false)

    return (
        <a href='#mainJobDescription' onClick={()=>{setId(data.id)}} className={`${jobDataId === data.id ?"border-black border":""} w-full h-auto p-3   md:px-3 py-3 border  rounded-xl flex flex-col gap-3 md:gap-4 `}>
            <div className='w-full flex justify-between'>
                
                <div className='flex gap-2'>
                    <img className='w-[46px] h-[46px]' src={data.img} alt="" />
                    <div className='h-auto'>
                        <p className='text-base font-semibold'>{data.title}</p>
                        <ul className='flex  gap-4  text-[12px] mt-1'>
                           
                            <li>{data.company}</li>
                            <li>{data.designation}</li>
                            <li>{data.location}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-1 items-start ' >
                {/* <FaRegBookmark size={16}/> */}
                <div className='relative '>

                <MdOutlineFlag size={20} onClick={()=>setIsShareModal(!isShareModal)} className='cursor-pointer '/>
                <div className={`  bg-[#FFFFFF]  shadow-md absolute top-9 right-0 rounded-lg flex flex-col  transition-all duration-300 ${isShareModal ? 'opacity-1 translate-y-[-10px] z-[40] ' : 'opacity-0 z-[-300]'}`}>

                    <div className="flex  items-center px-5 py-2 gap-2 cursor-pointer" onClick={()=>{setShowReport(true)}}>
                    <FaFlag />
                    <p className='text-xs'>Report</p>
                    </div>

                    <hr />
                    <div className="flex  items-center px-5 py-2 gap-2">
                    <MdShare />

                    <p className='text-xs'>Share</p>
                    </div>



                    </div>  
                </div>


             
                    </div>

                    
            </div>

            <div className='flex gap-1 md:gap-2 h-auto'>

                
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[12px]'>{data.mode}</p>
                </div>
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[12px]'>{data.pay} / hours</p>
                </div>
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[12px]'>{data.workTime}</p>
                </div>

            </div>

            <div className=''>

                <p className='text-[12px] font-semibold'>Tech Stacks</p>

                <div className='flex gap-1 md:gap-2 mt-1'>

                {data.techStacks.map(( value,id)=>(
                                 
                              <div key={id} className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                                 <p className='text-[12px] font-semibold'>{value} </p>
                             </div>
                            ))}
                    {/* <div className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                        <p className='text-[12px] font-semibold'>Figma </p>
                    </div>
                    <div className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                        <p className='text-[12px] font-semibold'>Adobe Creative suit</p>
                    </div>
                    <div className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                        <p className='text-[12px] font-semibold'>Design Thinking</p>
                    </div> */}

                </div>

            </div>

            <div className='flex justify-between items-center'>
                <p className='text-[#A9A9A9] text-[10px] font-normal '>Posted 1 day ago</p>
                <div className='flex gap-3 '>

                 <div className='flex flex-col justify-center items-center'>
                    <p className='text-xs text-[#3A3A3C] font-semibold'> 4</p>
                    <p className='text-xs text-[#114B53] font-semibold'> Applicants   </p>
                    </div>   
                <div onClick={()=>{setIsOpen(true)}} className={`cursor-pointer w-[120px] h-[32px] flex justify-center items-center ${showIcon ? "bg-[#114B53]": "bg-[#E9F358]"}  rounded-full`} onMouseEnter={()=>{setShowIcon(!showIcon)}} onMouseLeave={()=>{setShowIcon(!showIcon)}}>
                  {showIcon?   <BsFillLightningFill className='text-white' />:    <p className='text-[#114B53] text-sm font-semibold'>Quick Apply</p> }
                 

                 </div>
                </div>
            </div>


            {showReport &&<ReportJob setShowReport={setShowReport}  setShowReportDetail={setShowReportDetail}  /> }
{showReportDetail &&<ReportDetal setShowReportDetail={setShowReportDetail}  setShowReportSubmit={setShowReportSubmit}/> }
{showReportSubmit &&<ReportSubmit setShowReportDetail={setShowReportDetail} setShowReportSubmit={setShowReportSubmit} /> }

            
        </a>
      
           
    

  );
};

export default JobCard;

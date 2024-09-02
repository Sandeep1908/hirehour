import React, { useState } from 'react'
import icon from '../assets/Employers Logo.svg'
import { BsFillLightningFill } from "react-icons/bs";
import { LuMoreVertical } from 'react-icons/lu';
import { FaFlag, FaRegBookmark } from 'react-icons/fa6';
import { MdShare } from 'react-icons/md';
import ReportJob from './ReportJob';

type JobCardProps={
    setIsOpen:(e:boolean)=>void,
    setIsQuickApplyDone:(e:boolean)=>void,
}


const JobCard: React.FC<JobCardProps> = ({setIsOpen}) => {
    const [showIcon, setShowIcon] = useState<boolean>(false);
    const [showReport, setShowReport] = useState<boolean>(false);
    const [isShareModal,setIsShareModal]=useState<boolean>(false)

    return (
        <div className='w-full h-auto p-3  md:px-3 py-5 border-2 border-black rounded-xl flex flex-col gap-3 md:gap-5 '>
            <div className='w-full flex justify-between'>
                <div className='flex gap-2'>
                    <img className='w-[46px] h-[46px]' src={icon} alt="" />
                    <div className='h-auto'>
                        <p className=' font-semibold'>UI/UX Designer</p>
                        <ul className='flex list-disc gap-4 md:gap-6 text-[12px] mt-1'>
                            <li>Figma</li>
                            <li>Software</li>
                            <li>Allen, Texas, US</li>
                        </ul>
                    </div>
                </div>
                <div className='flex gap-1 items-start ' >
                <FaRegBookmark size={20}/>
                <div className='relative '>

                <LuMoreVertical size={25} onClick={()=>setIsShareModal(!isShareModal)} className='cursor-pointer '/>
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
                    <p className='text-[14px]'>Hybrid</p>
                </div>
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[14px]'>$58-$68 / hours</p>
                </div>
                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                    <p className='text-[14px]'>Full Time</p>
                </div>

            </div>

            <div className=''>

                <p className='text-[12px] font-semibold'>Tech Stacks</p>

                <div className='flex gap-1 md:gap-2 mt-1'>

                    <div className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                        <p className='text-[12px] font-semibold'>Figma </p>
                    </div>
                    <div className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                        <p className='text-[12px] font-semibold'>Adobe Creative suit</p>
                    </div>
                    <div className='px-2 md:px-3 py-1 bg-[#CAFDFC] rounded-full'>
                        <p className='text-[12px] font-semibold'>Design Thinking</p>
                    </div>

                </div>

            </div>

            <div className='flex justify-between items-center'>
                <p className='text-[#A9A9A9] text-[10px] font-normal '>Posted 1 day ago</p>
                 <div onClick={()=>{setIsOpen(true)}} className={`cursor-pointer w-[140px] h-[42px] flex justify-center items-center ${showIcon ? "bg-[#114B53]": "bg-[#E9F358]"}  rounded-full`} onMouseEnter={()=>{setShowIcon(!showIcon)}} onMouseLeave={()=>{setShowIcon(!showIcon)}}>
                  {showIcon?   <BsFillLightningFill className='text-white' />:    <p className='text-[#114B53] text-base font-semibold'>Quick Apply</p> }
                 

                 </div>
            </div>


            {showReport ?<ReportJob setShowReport={setShowReport} />:" " }

            
        </div>
      
 
    

  );
};

export default JobCard;

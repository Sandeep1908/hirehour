import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'


// import ReportJob from './report-job/ReportJob'
// import ReportDetal from './report-job/ReportDetail'
// import ReportSubmit from './report-job/ReportSubmit'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

import { IoMdMore } from 'react-icons/io'


type ViewProfileProps={
    setViewPrfilePopup : (e:boolean) => void
    users : any
    infoPopupId:number|undefined
}

const ViewProfilePopup:React.FC<ViewProfileProps> = ({setViewPrfilePopup,users,infoPopupId}) => {
    // const [showReport, setShowReport] = useState<boolean>(false);
    // const [showReportDetail, setShowReportDetail] = useState<boolean>(false);
    // const [showReportSubmit, setShowReportSubmit] = useState<boolean>(false);


    const [like, setLike] = useState<boolean>(false);
    const [midLike, setMidLike] = useState<boolean>(false);
    const [disLike, setDisLike] = useState<boolean>(false);
    const [moreOption, setMoreOption] = useState<boolean>(false);

  return (

    <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
            <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
    <div className=' max-w-[500px] w-full h-full  p-2 md:p-5   z-[30]'>
           
  

   {users?.map((user:any, id:number )=>{
    if(user.id === infoPopupId){
      return(
        <div key={id} className='relative w-full h-auto flex gap-5 justify-center md:justify-between p-9 rounded-lg  bg-white'>
        <RxCross2 onClick={()=>{setViewPrfilePopup(false)}} className='absolute z-[40] cursor-pointer top-2 right-2' size={25} />
            <div className='w-full'> 
                <p className='text-[#8F90A6] text-xs font-medium'>Candidate</p>
                <p className='mt-2 text-sm font-medium'>{user.firstName || "N/A"}</p>
    
                <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Email</p>
                <p className='mt-2 text-sm font-medium'>{user.email || "N/A"}</p>
    
                <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Company</p>
                <p className='mt-2 text-sm font-medium'>{user.recruiterdetail?.companyWorkingFor || "N/A"}</p>
    
                <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Role</p>
                <p className='mt-2 text-sm font-medium'>
                {user.userpermlabelsacrossapplications?.some(
              (user:any) => user.permTagName === "advanced_owner_recruiter_perms"
            )
              ? "Owner"
              : "Hiring Partner"}
                </p>
                <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Verified</p>
                <p className='mt-2 text-sm font-medium'>Yes</p>
    
                <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Initial Role</p>
                <p className='mt-2 text-sm font-medium'>
                {user.userpermlabelsacrossapplications?.some(
              (user:any) => user.permTagName === "advanced_recruiter_perms"
            )
              ? "Looking for Candidate"
              : "Representing Candidate"}
                </p>
    
                <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Access</p>
                <p className='mt-2 text-sm font-medium'>Jobs, Resume Sourcing, RTR, Help</p>
    
                {/* <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Jobs, Resume Sourcing, RTR, Help</p>
                <p className='mt-2 text-sm font-medium'>Owner</p> */}
    
                <p className='mt-3 text-[#8F90A6] text-xs font-medium'>Last Activity</p>
                <p className='mt-2 text-sm font-medium'>{user?.updatedAt.split("T")[0]}</p>
                <div className='relative flex gap-2 mt-2'>
                          <div className='flex gap-2'>
                            <div onClick={() => { setLike(!like) }} className={`${like ? "border-[#06A560] bg-green-100 text-[#06A560]" : "border-[#D6DBDE] hover:bg-green-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineLike size={20} />
    
                            </div>
                            <div onClick={() => { setMidLike(!midLike) }} className={`${midLike ? "border-yellow-500 bg-yellow-100 text-yellow-500" : "border-[#D6DBDE] hover:bg-yellow-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineLike size={20} className='rotate-90 ' />
    
                            </div>
                          </div>
                          <div className='flex gap-10 items-center'>
                            <div onClick={() => { setDisLike(!disLike) }} className={`${disLike ? "border-red-500 bg-red-100 text-red-500" : "border-[#D6DBDE] hover:bg-red-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineDislike size={20} />
    
                            </div>
                           
                            <div className='relative ' onClick={() => { setMoreOption(!moreOption) }}>
                              <IoMdMore size={25} />
                              <div className={`absolute w-20 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[20px] top-[-10px] transition-all duration-500 bg-white ${moreOption ?  "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
                                  <div className='px-3 py-2'>
                                    <p className='text-sm font-medium'>Undo</p>
                                  </div>
                                  <hr />
                                  <div className='px-3 py-2'>
                                    <p className='text-sm font-medium'> delete</p>
                                  </div>
                                
                            </div>
                            </div>
    
                          </div>
    
                        </div>
               
    
                  <div className='flex justify-center items-center mt-5 gap-6 bg-[#114B53] rounded-full py-1'>
                         
                         <p className='text-sm text-white text-center font-medium' >Message</p>
                  </div>
            </div>
          
        </div>
      )
    }
   
   })}
   




{/* Popup  */}
{/* <div
className={`w-full h-full flex overflow-scroll justify-center items-center fixed inset-0 transition-all duration-500 ${isQuickApplyStep3 ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
>
          <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

               
                <div className='z-[30] max-w-[1055px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px]'>
    <div className=' p-10 flex justify-between items-center'>
         <p className='text-2xl font-bold'>Apply to xyz Company</p>
         <IoMdClose size={30} onClick={()=>{setQuickApplyStep3(false)}}  className="cursor-pointer" />
    </div>
    <hr />
    <div className='w-full p-10'>


                <div className="w-full flex justify-between items-center">
                            <div className='w-[167px] flex justify-center items-center gap-2'>
                                <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                    <p className='text-base text-white font-semibold'>1</p>
                                </div>
                                <p className='text-[12px] font-medium text-[#114B53]'>Screening Questions</p>
                            </div>
                            <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#114B53]'>

                            </div>
                            <div className='w-[167px] flex justify-center items-center gap-2'>
                                <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                    <p className='text-base text-white font-semibold'>2</p>
                                </div>
                                <p className='text-[12px] font-medium text-[#114B53]'>Review Application</p>
                            </div>
                            <div className='border-t-[1px] max-w-[200px] w-full border-dotted border-[#114B53]'>

                           </div>
                            <div className='w-[167px] flex justify-center items-center gap-2'>
                                <div className='w-10 h-10 bg-[#114B53] rounded-full flex justify-center items-center'>
                                    <p className='text-base text-white font-semibold'>3</p>
                                </div>
                                <p className='text-[12px] font-medium text-[#114B53]'>Applied Successfully</p>
                            </div>
                        </div>
  
    </div>
        <div className='flex flex-col justify-center items-center'>
            <img src={Logo} alt="" />
            <p className='text-[20px] font-semibold text-[#3A3A3C] mt-5'>Your application was submitted successfully to XYZ Company</p>
            <p className='text-[14px] font-normal text-[#6B7588] mt-2'>You can track you application any time from my jobs</p>
        </div>
    
    <div className='w-full flex justify-center p-10'>
        <div onClick={quickApplyDone}  className='cursor-pointer bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full '>
            <p className='text-base font-semibold text-[#114B53]'>Done</p>
        </div>
    </div>
             </div>
</div> */}



</div>




{/* {showReport &&<ReportJob setShowReport={setShowReport}  setShowReportDetail={setShowReportDetail}  /> }
{showReportDetail &&<ReportDetal setShowReportDetail={setShowReportDetail}  setShowReportSubmit={setShowReportSubmit}/> }
{showReportSubmit &&<ReportSubmit setShowReportDetail={setShowReportDetail} setShowReportSubmit={setShowReportSubmit} /> } */}



</div>
  )
}

export default ViewProfilePopup

import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Location2 from '../../../assets/location2.svg'
import Job_banner from '../../../assets/Rectangle.png'
import icon from '../../../assets/Employers Logo.svg'
import ReportJob from './report-job/ReportJob'
import ReportDetal from './report-job/ReportDetail'
import ReportSubmit from './report-job/ReportSubmit'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

import { IoMdMore } from 'react-icons/io'


type ViewJobProps={
    setViewJobPopup : (e:boolean) => void
}

const ViewJob:React.FC<ViewJobProps> = ({setViewJobPopup}) => {
    const [showReport, setShowReport] = useState<boolean>(false);
    const [showReportDetail, setShowReportDetail] = useState<boolean>(false);
    const [showReportSubmit, setShowReportSubmit] = useState<boolean>(false);


    const [like, setLike] = useState<boolean>(false);
    const [midLike, setMidLike] = useState<boolean>(false);
    const [disLike, setDisLike] = useState<boolean>(false);
    const [moreOption, setMoreOption] = useState<boolean>(false);

  return (

    <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
            <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
    <div className=' max-w-[1100px] w-full h-full  p-2 md:p-5   z-[30]'>
           
  


    <div className='relative w-full h-auto flex gap-5 justify-center md:justify-between p-9 rounded-lg  bg-white'>
    <RxCross2 onClick={()=>{setViewJobPopup(false)}} className='absolute z-[40] cursor-pointer top-2 right-2' size={25} />
        <div className='w-[25%]'> 
            <p className='text-[#8F90A6] text-sm font-medium'>First name</p>
            <p className='mt-2 text-sm font-medium'>Mathew</p>

            <p className='mt-3 text-[#8F90A6] text-sm font-medium'>Last name</p>
            <p className='mt-2 text-sm font-medium'>Sam</p>

            <p className='mt-3 text-[#8F90A6] text-sm font-medium'>Email</p>
            <p className='mt-2 text-sm font-medium'>Mathewxyz@gmail.com</p>

            <p className='mt-3 text-[#8F90A6] text-sm font-medium'>Phone number</p>
            <p className='mt-2 text-sm font-medium'>+1 xxx-xxx-xxxx</p>

            <p className='mt-3 text-[#8F90A6] text-sm font-medium'>Company Website</p>
            <p className='mt-2 text-sm font-medium'>http//:www.xyzcompany.com</p>
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
            <p className='mt-3 text-[#8F90A6] text-sm font-medium'>Notes</p>
              <textarea name="" placeholder='Add notes here' className='w-full h-20 p-2 border rounded-lg mt-2' id=""></textarea>

              <div className='flex justify-end items-center mt-5 gap-6'>
                     <p className='text-sm text-[#114B53] font-medium'>Cancel</p>
                     <p className='text-sm text-[#114B53] bg-[#E9F358] rounded-full px-3 py-1 font-medium' >Done</p>
              </div>
        </div>
        <div className=' w-[75%] rounded-lg  border sticky top-3 bg-white'>
            <div className='w-full shadow-lg '>
                <img className='object-cover w-full'   src={Job_banner} alt="" />
                <div className='w-[95%] m-auto transition-all ease-in-out duration-1000'>
                    <div className=' flex  justify-between '>
                        <div className='flex flex-col md:flex-row md:gap-2 md:items-center'>
                            <div className='relative md:w-[80px] md:h-[80px] w-[60px] h-[60px] '>

                                <img className='absolute top-[-20px]  w-full h-full' src={icon} alt="" />
                            </div>
                            <div className='mt-[-10px] md:mt-0'>
                                <p className='font-bold text-lg'>UI/UX Designer</p>
                                <ul className='flex md:list-disc md:gap-8 text-xs md:mt-1'>
                                    <li>Figma</li>
                                    <li>Software</li>
                                    <li>Allen, Texas, US</li>
                                </ul>
                            </div>
                        </div>

                        <div className=" hidden md:flex  items-center gap-4">
                            {/* <div className=" px-6 py-3 bg-[#114B53] rounded-full">
                                <p className="text-white text-sm font-semibold">Message</p>
                            </div>
                            <div className=" px-6 py-3 bg-[#E9F358] rounded-full">
                                <p className="text-[#114B53] text-sm font-semibold">Pause Job</p>
                            </div> */}
                            
                            {/* <GrFlag onClick={()=>{setShowReport(true)}} /> */}
                            <p className='text-sm text-[#114B53] font-semibold'>Edit</p>


                            <p></p>

                        </div>
                    </div>

                  


    



                </div>
            </div>
          

            <div className='p-5 overflow-x-hidden overflow-y-auto h-[380px] bg-white'>
            <div className={`h-auto transition-all ease-in-out duration-1000 mb-5 `}>
                        <div className='flex flex-col md:flex-row h-auto '>
                            <div className='flex flex-col gap-4 mt-2 max-w-[250px] w-full'>

                                <div className='flex gap-2'>
                                    <img src={Location2} alt="" />
                                    <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[12px]'>Hybrid</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={Location2} alt="" />
                                    <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[12px]'>$58-$68 / hours</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={Location2} alt="" />
                                    <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[12px]'>Mid Senior level</p>
                                    </div>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={Location2} alt="" />
                                    <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[12px]'>Visa Sponsorship

</p>
                                    </div>
                                </div>


                            </div>

                            <div className='hidden md:block border  bg-[#D6DBDE] '>

                            </div>


                            <div className='flex flex-col  gap-7 md:ml-4 mt-4 md:mt-0 justify-center'>

                                <div className=''>

                                    <p className='text-[14px] text-[#3A3A3C] font-semibold'>Employment Type</p>

                                    <div className='flex flex-wrap gap-2 mt-3'>

                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[12px] text-[#3A3A3C] font-medium'>Crop to Crop </p>
                                        </div>
                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[12px] text-[#3A3A3C] font-medium'>Contract to Hire </p>
                                        </div>
                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[12px] text-[#3A3A3C] font-medium'>Contract W2 </p>
                                        </div>


                                    </div>

                                </div>




                                <div className=' md:mt-10'>

                                    <p className='text-[14px] text-[#3A3A3C] font-semibold'>Accepting Work Authorization    </p>

                                    <div className='flex gap-2 mt-3'>

                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[12px] text-[#3A3A3C] font-medium'>H1 Visa </p>
                                        </div>
                                        <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                            <p className='text-[12px] text-[#3A3A3C] font-medium'>Greencard </p>
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>

                        <div className='mt-4  md:mt-8'>

                            <p className='text-[14px] font-semibold'>Tech Stacks</p>

                            <div className='flex flex-wrap gap-2 mt-1'>

                                <div className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                    <p className='text-[12px] font-semibold'>Figma </p>
                                </div>
                                <div className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                    <p className='text-[12px] font-semibold'>Adobe Creative suit</p>
                                </div>
                                <div className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                    <p className='text-[12px] font-semibold'>Design Thinking</p>
                                </div>

                            </div>

                        </div>
                    </div>
                <p className='text-base font-semibold'>Summary</p>
                <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p className='text-base font-semibold mt-3'>Job description</p>
                <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p className='text-base font-semibold mt-3'>Additional benefits</p>
                <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p className='text-base font-semibold mt-3'>Notes</p>
                <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

              
            </div>
        </div>
    </div>




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




{showReport &&<ReportJob setShowReport={setShowReport}  setShowReportDetail={setShowReportDetail}  /> }
{showReportDetail &&<ReportDetal setShowReportDetail={setShowReportDetail}  setShowReportSubmit={setShowReportSubmit}/> }
{showReportSubmit &&<ReportSubmit setShowReportDetail={setShowReportDetail} setShowReportSubmit={setShowReportSubmit} /> }



</div>
  )
}

export default ViewJob

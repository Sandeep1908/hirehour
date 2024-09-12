import React from 'react'
import Job_banner from '../../../assets/Rectangle.png'
import { IoLocationOutline } from 'react-icons/io5'

const JobData:React.FC = () => {
  return (
    <div  className='p-4  w-full rounded-lg  border bg-white'>
    <div className='w-full min-h-[100vh]'>
    <div className=' w-full  '>
    <div className='w-full shadow-lg pb-8'>
        <img src={Job_banner} alt="" />
        <div className='w-[95%] m-auto transition-all ease-in-out duration-1000'>
            <div className=' flex  justify-between '>
                <div className='flex flex-col md:flex-row gap-2 '>
                    <div className='relative w-[68px] h-[68px] md:w-[100px] md:h-[100px] '>

                        <img className='absolute top-[-30px] md:top-[-20px]  w-full h-full' src="" alt="" />
                    </div>
                    <div>
                        <p className='font-bold text-[24px]'>Title</p>
                        <ul className='flex list-disc gap-8 text-base mt-1'>
                            <li>company</li>
                            <li>designation</li>
                            <li>location</li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:flex justify-between items-center gap-4">
                    <p className="text-[#A9A9A9] text-[12px] font-normal ">Posted 1 day ago</p>
                    <div className=" px-6 py-3 bg-[#E9F358] rounded-full">
                        <p className="text-[#114B53] text-base font-semibold">Quick Apply</p>
                    </div>
                </div>
            </div>

            <div className={` transition-all ease-in-out duration-700 h-[200px] `}>
                <div className={`flex flex-col md:flex-row h-auto relative transition-all delay-75  opacity-1 `}>
                    <div className='flex flex-col gap-4 mt-2 max-w-[350px] w-full'>

                        <div className='flex gap-2 items-center'>
                        <IoLocationOutline size={20} />
                        <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                <p className='text-[14px]'>mode</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                        <IoLocationOutline size={20} />
                            <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                <p className='text-[14px]'>pay / hours</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                        <IoLocationOutline size={20} />
                            <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                <p className='text-[14px]'>workTime</p>
                            </div>
                        </div>


                    </div>

                    <div className='hidden md:block border  bg-[#D6DBDE] '>

                    </div>


                    <div className={`flex flex-col  gap-7 ml-4 justify-center  opacity-1`}>

                        <div className=''>

                            <p className='text-[14px] text-[#3A3A3C] font-semibold'>Employment Type</p>

                            <div className='flex flex-wrap gap-2 mt-3'>

                                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                    <p className='text-[14px] text-[#3A3A3C] font-medium'>Crop to Crop </p>
                                </div>
                                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                    <p className='text-[14px] text-[#3A3A3C] font-medium'>Contract to Hire </p>
                                </div>
                                <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                    <p className='text-[14px] text-[#3A3A3C] font-medium'>Contract W2 </p>
                                </div>


                            </div>

                        </div>




                        <div className=''>

                            <p className='text-[14px] text-[#3A3A3C] font-semibold'>Accepting Work Authorization    </p>

                            <div className='flex gap-2 mt-3'>
                               
                                    <div  className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                        <p className='text-[14px] text-[#3A3A3C] font-medium'>value </p>
                                    </div>
                              

                             
                            </div>

                        </div>



                    </div>
                </div>

                <div className={`mt-4 delay-75  opacity-1 `}>

                    <p className='text-[14px] font-semibold'>Tech Stacks</p>

                    <div className='flex gap-2 mt-1'>
                        
                            <div  className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                <p className='text-[14px] font-semibold'>value </p>
                            </div>
                            <div  className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                <p className='text-[14px] font-semibold'>value </p>
                            </div>
                            <div  className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                <p className='text-[14px] font-semibold'>value </p>
                            </div>
                            <div  className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                <p className='text-[14px] font-semibold'>value </p>
                            </div>
                      

                      

                    </div>

                </div>
            </div>


            {/* <div className='w-full flex justify-center items-center mt-8' >
                <FaChevronUp className={`${!infoContentHidden ? "hidden" : ""}`} onClick={() => { SetInfoContentHidden(!infoContentHidden) }} />

                <FaChevronDown className={`${infoContentHidden ? "hidden" : ""}`} onClick={() => { SetInfoContentHidden(!infoContentHidden) }} />

            </div> */}



        </div>
    </div>

    <div className='p-5 overflow-x-hidden overflow-y-auto h-[550px] '>
        <p className='text-[20px] font-semibold'>Summary</p>
        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>summary</p>

        <p className='text-[20px] font-semibold mt-3'>Job description</p>
        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>jobDescription</p>

        <p className='text-[20px] font-semibold mt-3'>Additional benefits</p>
        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>additionalBenefits</p>

        <p className='text-[20px] font-semibold mt-3'>Notes</p>
        <p className='text-base text-[#3A3A3C] mt-3 text-justify'>notes</p>

        <div className='w-full flex justify-between items-center mt-10'>
            <p className='text-[#8F90A6] text-[14px] font-normal '>Posted 1 day ago</p>
            <div className=' px-6 py-2 bg-[#114B53] rounded-full'>
                <p className='text-white text-base font-semibold'>Report</p>
            </div>
        </div>
    </div>
</div>
    </div>


</div>
  )
}

export default JobData

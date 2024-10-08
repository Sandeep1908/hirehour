import React from 'react'

const ReceivedNewRTR:React.FC = () => {
  return (
    <div className="w-full h-[100vh] ">
    <div className="max-w-72  m-auto mt-5 bg-white">

            <div className="w-full flex flex-col space-y-2 justify-center items-center pt-2 px-2">
                <h1 className="text-sm font-[600] text-[#104B53]">Hi Mathew</h1>
                <p className="text-[10px] text-[#3A3A3C] text-center ">You received new RTR Request. Please view & sign before it expired</p>
            </div>


            <div className="w-full h-full pt-5 p-2 space-y-2 ">

             
                        <div  className="flex flex-col border rounded-lg py-2 ">
                          
                          <div className="p-2 ">
                           
                            <div>
                                <p className=" text-[#114B53] font-bold text-xs ">Java Full Stack</p>
                                <p className=" text-[#6B7588] text-[10px]">Allen, Texas, United States</p>
                            </div>
                          </div>

                        <div className=" px-2">
                      
                         <div>
                         <p className=" text-[#3A3A3C] text-xs font-bold underline mt-2 ">From</p>
                         <p className=" text-[#3A3A3C] text-xs  mt-1"><span className='font-semibold'>Send by :</span> Erika lees</p>
                         <p className=" text-[#3A3A3C] text-xs mt-1 "><span className='font-semibold'>Company : </span> Insight Global</p>

                         </div>
                         <div>
                         <p className=" text-[#3A3A3C] text-xs font-bold underline mt-2">To</p>
                         <p className=" text-[#3A3A3C] text-xs mt-1 "><span className='font-semibold'>Employer name :</span> Mathew</p>
                         <p className=" text-[#3A3A3C] text-xs mt-1 "><span className='font-semibold'>Employer Company : </span> AA Tech</p>
                         <p className=" text-[#3A3A3C] text-xs mt-1 "><span className='font-semibold'>Applicant name : </span> Johnson</p>

                         </div>



                        </div>


                      


                        {/* <div className="flex justify-between items-center px-2 mt-4">

                            <p className="text-[8px]">Posted 1 day ago</p>
                            <p className="text-[10px] w-20 rounded-full flex justify-center items-center h-6 bg-[#E9F358] text-[#104B53]">Apply Now</p>
                        </div> */}


                </div>


              
                    

                   

            </div>

            <div className="flex flex-col  space-y-3 pb-4  mt-4 justify-center items-center">
                    <p className="w-56  h-6 text-white font-semibold flex justify-center items-center bg-[#104B53] rounded-full text-[10px]">View</p>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <p className="text-xs font-[400] ">We have 1000+ Talents looking for Job Match!</p>
                        <p className="text-xs font-[400] ">All the best for hire right talent!</p>

                        <p className="text-xs font-[400]">Team Hirehours.</p>


                    </div>
            </div>

    </div>

  


    <div className="max-w-80 h-40  flex flex-col justify-between  m-auto mt-5 bg-[#104B53] rounded-lg ">
                
                <div className="flex flex-col space-y-3 w-full h-full justify-center items-center">
                        <div className="flex justify-center space-x-5 items-center">
                            <img src="/emailfooter/twitter.png" className="w-4" alt="" />
                            <img src="/emailfooter/insta.png" className="w-4" alt="" />

                            <img src="/emailfooter/Facebook.png" className="w-4" alt="" />

                        </div>
                        <p className="text-white text-xs">www.topequators.com</p>
                </div>

                <hr />


                <div className="flex flex-col justify-center items-center w-full h-full">
                        <p className="text-[8px] text-[#E1E8E9]">unsubscribe</p>
                        <p className="text-[10px] text-center text-[#C7C9D9]">Copyright © 2024 HireHours. All rights reserved.</p>
                </div>
    </div>


</div>
  )
}

export default ReceivedNewRTR

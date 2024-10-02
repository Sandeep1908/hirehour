

const JobPostedTemplates:React.FC=()=>{
    return(
        <div className="w-full h-full ">
                <div className="max-w-72  m-auto mt-5 bg-white">

                        <div className="w-full flex flex-col space-y-2 justify-center items-center pt-2">
                            <h1 className="text-sm font-[600] text-[#104B53]">Hi John</h1>
                            <p className="text-[10px] text-[#3A3A3C] ">Here are the jobs matches your job preference</p>
                                <p className="text-[8px] text-[#9097A6]">Modify your job preference <a  className="text-[#356CFC]" href="#">Click here</a> </p>
                        </div>


                        <div className="w-full h-full pt-5 p-2 space-y-2 ">

                            {Array.from({length:3}).map((_,i)=>{
                                return(
                                    <div  key={i} className="flex flex-col border rounded-lg py-2 ">
                                    <div className="w-full flex justify-center items-start space-x-2 p-2">
                                        <img src="/jobDescription/micro.svg" className="w-10 h-10" alt="temp-logo" />
                                        <div className="flex-1 flex-col">
                                                <h1 className="text-xs">UI/UX Designer</h1>
                                                <div className="  flex  space-x-2   items-center">
                                                    <p className="text-[10px]">Microsoft</p>
                                                    <p className="text-[10px]">Allen, Texas, United States</p>
                                                </div>
                                        </div>


                                    </div>

                                    <div className="flex gap-2 px-2">
                                    <p className="min-w-20 h-5 bg-[#F2F2F5] text-[#7F7F81] text-[10px] flex justify-center items-center rounded-full">Software</p>

                                    <p className="min-w-20 h-5 bg-[#F2F2F5] text-[#7F7F81] text-[10px] flex justify-center items-center rounded-full">Full Time</p>

                                        <p className="min-w-20 h-5 bg-[#F2F2F5] text-[#7F7F81] text-[10px] flex justify-center items-center rounded-full">$50-$60 per hrs</p>
                                    </div>


                                    
                                    <div className="flex flex-col space-y-1  mt-3 px-2">
                                    
                                    <p className="text-[10px] font-semibold text-[#3A3A3C]">Tech Stack</p>

                                        <div className="flex gap-2 ">
                                        <p className="min-w-20 h-5 bg-[#CAFDFC] text-[#104B53] text-[10px] flex justify-center items-center rounded-full">Software</p>

<p className="min-w-20 h-5 bg-[#CAFDFC] text-[#104B53] text-[10px] flex justify-center items-center rounded-full">Full Time</p>

<p className="min-w-20 h-5 bg-[#CAFDFC] text-[#104B53] text-[10px] flex justify-center items-center rounded-full">$50-$60 per hrs</p>
                                        </div>
                                   
                                    </div>



                                    <div className="flex justify-between items-center px-2 mt-4">

                                        <p className="text-[8px]">Posted 1 day ago</p>
                                        <p className="text-[10px] w-20 rounded-full flex justify-center items-center h-6 bg-[#E9F358] text-[#104B53]">Apply Now</p>
                                    </div>


                            </div>
                                )
                            })}

                               

                        </div>

                        <div className="flex flex-col  space-y-3 pb-4  mt-4 justify-center items-center">
                                <p className="w-56  h-6 text-white font-semibold flex justify-center items-center bg-[#104B53] rounded-full text-[10px]">See all matched Jobs</p>
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <p className="text-xs font-[400] ">Wishing you success in your job search!</p>
                                    <p className="text-xs font-[400] ">Good luck!</p>

                                    <p className="text-xs font-[400]">Team Hirehours.</p>


                                </div>
                        </div>

                </div>

                <div className="max-w-72  m-auto mt-5 ">
                            <p className="text-[8px] text-[#7B8596] text-center">Beware of fake job postings that get listed online from time to time and require you to share your personal information.</p>
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


export default JobPostedTemplates;
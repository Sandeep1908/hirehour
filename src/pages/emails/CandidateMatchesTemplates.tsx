

const CandidateMatchesTemplates:React.FC=()=>{
    return(
        <div className="w-full h-full ">
                <div className="max-w-72  m-auto mt-5 bg-white">

                        <div className="w-full flex flex-col space-y-2 justify-center items-center pt-2">
                            <h1 className="text-sm font-[600] text-[#104B53]">Hi John</h1>
                            <p className="text-[10px] text-[#3A3A3C] ">Here are the Candidate matches your candidate preference</p>
                                <p className="text-[8px] text-[#9097A6]">Modify your Candidate preference <a  className="text-[#356CFC]" href="#">Click here</a> </p>
                        </div>


                        <div className="w-full h-full pt-5 p-2 space-y-2 ">

                            {Array.from({length:3}).map((_,i)=>{
                                return(
                                    <div  key={i} className="flex flex-col border rounded-lg py-2 ">
                                      
                                      <div className="p-2 flex gap-3">
                                        <div className="w-12 h-12 bg-[#95FAF9] rounded-full flex justify-center items-center">
<p className=" text-[#114B53] text-sm font-bold">J</p>
                                        </div>
                                        <div>
                                            <p className=" text-[#114B53] text-xs ">Johnson</p>
                                            <p className=" text-[#6B7588] text-[10px] ">Senior Java Developer</p>
                                            <p className=" text-[#6B7588] text-[10px]">Allen, TX, USA</p>
                                        </div>
                                      </div>

                                    <div className=" px-2">
                                  <div className="flex justify-between font-semibold">
                                  <div>
                                   <p className=" text-[#3A3A3C] font-semibold text-[10px] ">Experience (Total 4 Years)</p>
                                   <p className=" text-[#6B7588] text-[10px] mt-1">Sr. Java Full Stack </p>
                                   </div>
                                   <div className="flex flex-col items-center justify-center mt-[-30px] md:mt-[-90px] pr-2">
                                   <p className=" text-[#114B53] text-xs ">Match AI</p>
                                   <div className="w-8 h-8 border-[#06A560] border-[3px] rounded-full flex justify-center items-center">
                                       <p className="text-[8px]">100%</p>
                                   </div>
                                   </div>
                                  </div>
                                    <p className=" text-[#6B7588] text-[10px] ">xyz company 12/2020 - Present <br className="md:hidden"  /> <span>Domain : Health Care</span></p>

                                    </div>


                                    
                                    <div className="flex flex-col space-y-1  mt-3 px-2">
                                    
                                    <p className="text-[10px] font-semibold text-[#3A3A3C]">Skills</p>

                                        <div className="flex gap-2 items-center">
                                        <p className="min-w-10 h-5 bg-[#F2F2F5] text-[#6B7588] text-[10px] flex justify-center items-center rounded-full">Java</p>

<p className="min-w-14 h-5 bg-[#F2F2F5] text-[#6B7588] text-[10px] flex justify-center items-center rounded-full">React Js</p>

<p className="min-w-14 h-5 bg-[#F2F2F5] text-[#6B7588] text-[10px] flex justify-center items-center rounded-full">Angular</p>
<p className="text-[#6B7588] text-[10px]">+20 More</p>
                                        </div>
                                   
                                    </div>



                                    {/* <div className="flex justify-between items-center px-2 mt-4">

                                        <p className="text-[8px]">Posted 1 day ago</p>
                                        <p className="text-[10px] w-20 rounded-full flex justify-center items-center h-6 bg-[#E9F358] text-[#104B53]">Apply Now</p>
                                    </div> */}


                            </div>
                                )
                            })}

                               

                        </div>

                        <div className="flex flex-col  space-y-3 pb-4  mt-4 justify-center items-center">
                                <p className="w-56  h-6 text-white font-semibold flex justify-center items-center bg-[#104B53] rounded-full text-[10px]">See all matched Candidate</p>
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <p className="text-xs font-[400] ">We have 1000+ resume match your Job needs!</p>
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


export default CandidateMatchesTemplates;
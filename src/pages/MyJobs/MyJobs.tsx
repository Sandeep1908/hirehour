import React from "react";
import { Link } from "react-router-dom";



const MyJobs:React.FC =()=>{
    const titles = [
        {
            label:'My Jobs',
            link:'/myjobs'
        },
        {
            label:'Right To Represent',
            link:'/right-to-represent'
        },{
            label:'Messages',
            link:'/messages'
        }
      ];
    const tags=['Applied(8)','Saved(5)','Application Started(2)','Interviewing','Offer Received']
    return(
        <div className="w-full  h-full bg-[#F2F2F5] p-2 " >
            <div className=" w-full max-w-[1280px] h-full bg-white  m-auto mt-10 rounded-lg p-5">
                        <div className="w-full">
                                <ul className="w-full  flex justify-start items-center space-x-6  relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC]">
                                    {titles?.map((item,id)=>{
                                        return(
                                            <Link to={item.link} className={` text-sm p-1 md:text-xl font-[600]  ${id==0?'border-[#104B53] border-b-4':''}  md:p-5`} key={id}>{item.label}</Link>
                                        )
                                    })}
                                </ul>
                        </div>


                        <div className="w-full overflow-auto">
                                <ul className="w-full flex">

                                {tags?.map((item,id)=>{
                                        return(
                                            <li className=" text-sm md:text-lg font-[600]  p-5" key={id}>{item}</li>
                                        )
                                    })}
                                
                                </ul>  
                        </div>

                                   

{/* Job Cards  */}

                        <div className="w-full max-w-[1200px] p-5 h-full m-auto border border-[#E1E1E2] rounded-lg">
                                    <div className="flex flex-col space-y-3">
                                        <h1 className="text-lg font-semibold">Applied</h1>
                                        <div className="flex items-center space-x-5"> 
                                            <p className="text-sm">8 Job</p>
                                            <p className="border border-[#E1E1E2] w-[167px] text-sm p-2 rounded-full">Posted in Last 7 Days</p>
                                        </div>
                                    </div>

                                    <div className="w-full mt-10 grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-5">
                                           {Array.from({length:9}).map((_,id)=>{
                                            return(
                                                <div key={id} className="max-w-[357px] h-[197px] bg-white border border-[#E1E1E2] md:drop-shadow-lg rounded-lg p-3 flex flex-col justify-between">
                                                <div className="flex w-full space-x-3 items-center">
                                                    <img src="/images/emplogo.png" className="w-12 h-12" alt="emp-logo" />
                                                    <div className="flex flex-col space-y-1">
                                                        <h1 className="text-base font-semibold">UI/UX Designer</h1>
                                                        <ul className="flex space-x-2">
                                                            <li className="text-xs md:text-sm">Figma</li>
                                                            <li className="text-xs md:text-sm">Allen, Texas, United States</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="w-full">
                                                    <ul className="flex items-center space-x-4">
                                                        <li className="p-2 pl-3 pr-3 text-xs bg-[#F2F2F5] text-[#3A3A3C] rounded-full">Full Time</li>
                                                        <li className="p-2 pl-3 pr-3  text-xs bg-[#F2F2F5] text-[#3A3A3C] rounded-full">$50-$60 per hour</li>
                                                    </ul>
                                                </div>
                                                
                                                <div className="w-full flex justify-between items-center space-x-6 ">
                                                        <p className="w-full border border-[#104B53] rounded-full p-1 flex justify-center items-center text-sm">View</p>
                                                        <p className="w-full border border-[#104B53] rounded-full p-1 flex justify-center items-center text-sm">More</p>
                                                </div>
                                        </div>
                                            )
                                           })                                    
                                           
                                }
                                           
                                           </div>
                        </div>
            </div>
        </div>
    )
}

export default MyJobs
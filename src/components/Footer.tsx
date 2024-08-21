import React from "react";


const Footer:React.FC=()=>{
    return(
        <div className="w-full    bg-[#022931]">

                <div className="w-full max-w-[1400px] gap-5 place-items-center m-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 p-10">

                            <div>
                                <h1 className="text-2xl tracking-wider text-[#F2F2F2] font-semibold">Hire Hours</h1>
                            </div>

                            <div className="flex flex-col justify-start space-y-3 items-start">
                                <h1 className="text-lg text-[#F2F2F2]">For Applicants</h1>
                                
                                <ul className="text-[#F2F2F2] text-xs flex flex-col space-y-3">
                                    <li>Job Seekers Login</li>
                                    <li>Upload Resume</li>
                                    <li>Search Tips</li>

                                    <li>Find Companies</li>



                                </ul>

                            </div>


                            <div className="flex flex-col justify-start space-y-3 items-start">
                                <h1 className="text-lg text-[#F2F2F2]">For Employer</h1>
                                
                                <ul className="text-[#F2F2F2] text-xs flex flex-col space-y-3">
                                    <li>Employer Log in</li>
                                    <li>Job Posting</li>
                                    <li>Resume Sourcing</li>

                                    <li>Find Companies</li>
                                    <li>Subscription</li>




                                </ul>

                            </div>



                            <div className="flex flex-col justify-start space-y-3 items-start">
                                <h1 className="text-lg text-[#F2F2F2]">For Company</h1>
                                
                                <ul className="text-[#F2F2F2] text-xs flex flex-col space-y-3">
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Help</li>

                                    <li>Resource</li>
                                    <li>Terms & Conditions</li>

                                    <li>Privacy & Cookies</li>




                                </ul>

                            </div>


                          

                          


                           
                </div>
                
                <hr className="w-full " />

                <p className="text-xs p-6 text-[#a7aeaf] font-[100] tracking-widest">Copyright ©2024HireHours. All rights reserved.</p>

        </div>
    )
}



export default Footer;
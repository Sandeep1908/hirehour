

const IntrestedRecruiter:React.FC=()=>{
    return(
        <div className="w-full h-[calc(100vh-100px)] ">
                <div className="max-w-72  m-auto mt-5 bg-white">

                        <div className="w-full flex flex-col space-y-2 justify-center items-center pt-2">
                            <h1 className="text-sm font-[600] text-[#104B53]">Hi John</h1>
                            <p className="text-[10px] font-[300] text-center text-[#3A3A3C] "> One of our recruiter added your profile and invited you to join the the Top Equator </p>
 
                        </div>


                        

                       

                      

                        <div className="flex flex-col  space-y-3 pb-4  mt-10 justify-center items-center">
                                <p className="w-56  h-6 text-white font-semibold flex justify-center items-center bg-[#104B53] rounded-full text-[10px]">Join</p>
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


export default IntrestedRecruiter;
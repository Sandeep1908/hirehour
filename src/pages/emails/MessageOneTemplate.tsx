

const MessageOneTemplate:React.FC=()=>{
    return(
        <div className="w-full h-[100vh] ">
                <div className="max-w-72   m-auto mt-5 bg-white">

                        <div className="w-full flex flex-col space-y-2 justify-center items-center pt-2">
                            <h1 className="text-sm font-[600] text-[#104B53]">Hi John</h1>
                            <p className="text-xs font-[300] text-center text-[#3A3A3C] ">You received 6 new messages awaiting 
                            your response</p>
 
                        </div>


                        <div className="w-full h-full pt-5 px-5  ">

                        {Array.from({length:1}).map((_,i)=>{
                            return(


                        <div key={i} className="flex justify-center space-x-2 items-start   p-2    ">
                        <p className="w-full max-w-[35px] text-xs text-[#EB5757] h-[35px] rounded-full bg-[#F8C4C4] flex justify-center items-center font-semibold">AN</p>
                        <div className="w-full flex justify-between items-start">
                                <div className="w-full flex flex-col  ">
                                    <div className="w-full flex justify-between items-center">
                                    <h1 className="text-xs font-[400]">Andrew</h1>
                                    <p className=" text-[10px] text-[#565A5A]">1 hr ago</p>
                                 </div>
                                   
                                    <p className="text-[10px] text-ellipsis text-[#565A5A]">1 new message </p>
                                </div>

                           
                        </div>
</div>
                            )
                        })}


                               

                        </div>

             
                      

                        <div className="flex flex-col  space-y-3 pb-4  mt-4 justify-center items-center">
                                <p className="w-56  h-6 text-white font-semibold flex justify-center items-center bg-[#104B53] rounded-full text-[10px]">View all Messages</p>
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


export default MessageOneTemplate;
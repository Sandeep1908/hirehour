import React from 'react'


const InvitedToJoin:React.FC = () => {
  return (
    <div className="w-full h-[100vh] ">
    <div className="max-w-72  m-auto mt-5 bg-white">

            <div className="w-full flex flex-col space-y-2 justify-center items-center pt-2 px-2">
                <h1 className="text-sm font-[600] text-[#104B53]">Hi John</h1>
                <p className="text-[10px] text-[#3A3A3C] text-center ">You have been invited to join the team as hiring partner by Mathew. Click the below link to join the team</p>
            </div>


    

            <div className="flex flex-col  space-y-3 pb-4  mt-6 justify-center items-center ">
                    <p className="w-56  h-6 text-white font-semibold flex justify-center items-center bg-[#104B53] rounded-full text-[10px]">Join</p>
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

export default InvitedToJoin

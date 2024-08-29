import React from "react";
import { Link } from "react-router-dom";


const ProfileVisibility:React.FC=()=>{
    const titles = [
        {
            label:'Profile Settings',
            link:'/myjobs'
        },
        {
            label:'Profile Visibility',
            link:'/right-to-represent'
        },{
            label:'Privacy Settings',
            link:'/messages'
        }
      ];
    
    return(
        <div className="w-full  h-full bg-[#F2F2F5] p-2 " >
            <div className=" w-full max-w-[1280px] h-full bg-white  m-auto mt-10 rounded-lg p-5">
                    <h1 className="text-3xl p-3 font-bold">Account Settings</h1>
                    <hr />
                        <div className="w-full">
                                <ul className="w-full  flex justify-start items-center space-x-6   ">
                                    {titles?.map((item,id)=>{
                                        return(
                                            <Link to={item.link} className={` text-sm p-1 md:text-xl font-[600]  ${id==1?'border-[#104B53] border-b-4':''}  md:p-5`} key={id}>{item.label}</Link>
                                        )
                                    })}
                                </ul>
                        </div>


            

                                   

{/* Setting Box  */}

                        <div className="w-full   max-w-[1200px] h-[838px] mt-10   m-auto border border-[#E1E1E2] rounded-lg">

                                        <div className="w-full h-full flex flex-col space-y-10 p-10">

                                                    

                                                    <div className="flex justify-between items-center ">
                                                            <div className="flex flex-col space-y-3">
                                                                <h1 className="text-lg font-semibold"> Visible to employers</h1>
                                                                <p className="text-[#404040] text-sm">We will hide your name, email and contact details to employers and if they like your profile then then can send you a message.</p>
                                                            </div>

                                                            <input type="radio" name="" id="" n className="w-10 h-9" />
                                                        
                                                    </div>


                                                    <div className="flex justify-between items-center ">
                                                            <div className="flex flex-col space-y-3">
                                                                <h1 className="text-lg font-semibold"> Not Visible to employers</h1>
                                                                <p className="text-[#404040] text-sm">We will hide your name, email and contact details to employers and if they like your profile then then can send you a message.</p>
                                                            </div>

                                                            <input type="radio" name="" id="" className="w-10 h-9" />
                                                        
                                                    </div>



                                        </div>

                        </div>
            </div>
        </div>
    )
}


export default ProfileVisibility;
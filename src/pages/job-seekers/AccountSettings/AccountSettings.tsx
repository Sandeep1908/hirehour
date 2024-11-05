import React, { useState } from "react";
import { Link } from "react-router-dom";
import {IoMdClose} from 'react-icons/io'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Timer from "../../../components/job-seekers/modals/authModals/Timer";
import CloseAccount from "../../../components/job-seekers/close-account/CloseAccount";
import SubmitAccount from "../../../components/job-seekers/close-account/SubmitAccount";

const AccountSetting:React.FC=()=>{
    const [isInputModalOpen,setIsInputModalOpen]=useState<boolean>(false)
    const[isNewPasswordOpen,setIsNewPasswordOpen]=useState<boolean>(false)

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState<boolean>(false);

    const [showCloseAccout, setShowCloseAccout] = useState<boolean>(false);
    const [showCloseAccoutSubmit, setShowCloseAccoutSubmit] = useState<boolean>(false);


    

      const [otp, setOtp] = useState(new Array(6).fill(""));

      const handleChange = (element: HTMLInputElement, index: number): void => {
        if (isNaN(Number(element.value))) return;  // Only allow numbers
    
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    
        // Focus next input
        if (element.nextSibling && element.value) {
          (element.nextSibling as HTMLInputElement).focus();
        }
      };
    
      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const enteredOtp = otp.join("");
        console.log("Entered OTP: ", enteredOtp);
      };


      const titles = [
        {
            label:'Profile Settings',
            link:'/account'
        },
        {
            label:'Profile Visibility',
            link:'/profile-visibility'
        },{
            label:'Privacy Settings',
            link:'/privacy-setting'
        }
      ];
    
    return(
        <div className="w-full  h-[calc(100vh-60px)] bg-[#F2F2F5] p-2  relative" >
            <div className=" w-full max-w-[1280px] h-[80vh] bg-white  m-auto mt-10 rounded-lg p-5">
                    <h1 className="text-3xl p-3 font-bold">Account Settings</h1>
                    <hr />
                        <div className="w-full overflow-auto">
                                <ul className="w-screen  md:w-auto flex justify-start items-center space-x-6   ">
                                    {titles?.map((item,id)=>{
                                        return(
                                            <Link to={item.link} className={` text-xs p-1  font-[500]  ${id==0?'border-[#104B53] border-b-2':''}  `} key={id}>{item.label}</Link>
                                        )
                                    })}
                                </ul>
                        </div>


            

                                   

{/* Setting Box  */}

                        <div className="w-full   max-w-[1200px] mt-10  h-fit m-auto border border-[#E1E1E2] rounded-lg">

                                        <div className="w-full h-full flex flex-col space-y-10 p-5">

                                                    <div className="flex flex-col space-y-3 relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                            <p className="text-xs text-[#717171]">Full name</p>
                                                            <p className="text-sm font-semibold">Job Seekers</p>
                                                    </div>

                                                 



                                                    <div className=" flex flex-col space-y-3 md:space-y-3 md:flex-row md:justify-between items-center  relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                        <div className="flex flex-col w-full md:w-auto space-y-3">
                                                        <p className="text-xs text-[#717171]">Email</p>
                                                        <p className="text-sm font-semibold">xyzcompany@gmail.com</p>
                                                        </div>
                                                        

                                                        <p  className="p-2 w-full md:w-auto text-[#104B53] text-xs text-center rounded-full border border-[#104B53]">Change email</p>
                                                    </div>




                                                    <div className=" flex flex-col space-y-3 md:space-y-3 md:flex-row md:justify-between items-center  relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                        <div className="flex flex-col w-full md:w-auto space-y-3">
                                                        <p className="text-xs text-[#717171]">Password</p>
                                                        <p className="text-sm font-semibold">*********</p>
                                                        </div>
                                                        

                                                        <p className="p-2 w-full md:w-auto text-[#104B53] text-xs text-center rounded-full border border-[#104B53]" onClick={()=>setIsInputModalOpen(true)}>Change password</p>
                                                    </div>





                                                  


                                                    <div onClick={()=>{setShowCloseAccout(true)}} className=" cursor-pointer flex justify-between items-center  relative   before:absolute before:bottom-[-10px] before:w-full before:h-[1px] before:bg-[#ECECEC]">
                                                        <p className="text-red-500 p-5 text-center w-full">Close your account</p>

                                                    </div>



                                        </div>

                        </div>
            </div>


{/* // Taking OTP */}
<div className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500  ${isInputModalOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}`}>
<div className='w-full h-screen absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

       <div className='w-full h-full flex justify-center items-center'>
      
           <div className='relative z-20 w-[400px]    bg-white rounded-lg p-3 flex flex-col gap-3'>
            <div className="flex justify-end cursor-pointer"> <IoMdClose size={30} color="#585858" onClick={()=>setIsInputModalOpen(false)} /></div>
                <p className='font-bold text-lg text-[#114B53]'>Enter OTP</p>
                <p className='text-xs font-normal text-[#C7C9D9] '>Enter your 6 digits code that you received on your email.</p>
                <form onSubmit={handleSubmit} className="w-full flex space-x-2 justify-evenly items-center">
                    {otp.map((data, index) => (
                        <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                        className="w-full max-w-10 h-10   border"
                        />
                    ))}
      
    </form>

                    <Timer/>

                    <p className="w-full h-12 bg-[#104B53] text-white flex justify-center items-center text-xs rounded-lg" onClick={()=>setIsNewPasswordOpen(true)}>Continue</p>

                    <p className="text-[10px] text-center text-[#C8C9D9]">If you didn’t receive a code! <span className="text-red-500">Resend</span></p>
           </div>
     
       </div>
    </div>






{/* Taking new password  */}


    <div className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500  ${isNewPasswordOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}`}>
        <div className='w-full h-full absolute bg-black opacity-40 z-10' onClick={()=>setIsNewPasswordOpen(false)}>

        </div>
       <div className='w-full h-full flex space-y-2 justify-center items-center'>
           <div className='relative z-20 w-[450px]    bg-white rounded-lg p-4 flex flex-col gap-3'>
                <p className='font-bold text-lg text-[#114B53]'>New Password</p>
                <p className='text-xs font-normal text-[#C7C9D9]   '>Set the new password for your account </p>
                <div  className='h-full flex flex-col justify-between'>
                    
                <div className=' w-full'>
                         <label htmlFor="firstName" className='text-xs text-[#8F90A6]'>
                         Enter new password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full   mt-2'>

                         <input type={showPassword?'text':'password'} className='border  p-2 border-[#E1E1E2] w-full h-full rounded-lg' />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={()=>{setShowPassword(!showPassword)}}
                           >
                               {showPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                         </div>
                     </div>
                <div className=' w-full'>
                         <label htmlFor="firstName" className='text-base text-[#8F90A6]'>
                         Confirm password <span className='text-[#E71717]'>*</span>
                         </label>
                         <div className='relative w-full   mt-2'>

                         <input type={showConfirmPassword?'text':'password'} className='p-2 border  border-[#E1E1E2] w-full h-full rounded-lg' />
                         <button
                               type="button"
                               className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                               onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}
                           >
                               {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                           </button>
                         </div>
                     </div>
                     <button onClick={()=>setIsSuccessOpen(true)} className='w-full h-12 mt-5 font-semibold text-xs text-white rounded-lg bg-[#114B53]'>
                     Update password
                    </button>
                </div>
           </div>
       </div>
    </div>



{/* Submit  */}


    <div className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500  ${isSuccessOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}`}>
        <div className='w-full h-full absolute bg-black opacity-40 z-10' >

        </div>
       <div className='w-full h-full flex space-y-2 justify-center items-center'>
           <div className='relative z-20 w-[450px] h-[330px] justify-center    bg-white rounded-lg p-4 flex flex-col gap-3'>
                
      
                <div className="w-full  justify-center items-center flex flex-col">
                            <img src="/success/upload.png" alt="" className="w-32" />
                            <p className="text-lg">Successfully</p>
                </div>

                <div>

                <p className="text-[10px] text-center text-[#C8C9D9]">Your password has been reset successfully</p>
                <form action="">
                <button type="submit" className="w-full h-10 mt-4 bg-[#104B53] text-white flex justify-center items-center text-xs rounded-lg"  >Done</button>
                </form>
               
                </div>

            
                 
           </div>
       </div>
    </div>

    {/* close accoutn */}

    {showCloseAccout &&<CloseAccount setShowCloseAccout={setShowCloseAccout}  setShowCloseAccoutSubmit={setShowCloseAccoutSubmit}  /> }
{/* {showReportDetail &&<ReportDetal setShowReportDetail={setShowReportDetail}  setShowReportSubmit={setShowReportSubmit}/> } */}
{showCloseAccoutSubmit &&<SubmitAccount setShowCloseAccout={setShowCloseAccout} setShowCloseAccoutSubmit={setShowCloseAccoutSubmit} /> }


        </div>
    )
}


export default AccountSetting;
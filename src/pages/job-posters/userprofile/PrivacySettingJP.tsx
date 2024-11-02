// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaEdit } from 'react-icons/fa';
// const PrivacySettingJP: React.FC = () => {
//   const [isJobAlertChecked, setIsJobAlertChecked] = useState<boolean>(false);
//   const [isRTRAlertChecked, setIsRTRAlertChecked] = useState<boolean>(false);
//   const [isMessageAlertChecked, setIsMessageAlertChecked] = useState<boolean>(false);
//   const [isJobPreferenceChecked, setJobPreferenceChecked] = useState<boolean>(false);


//   const [isJobAlertModalOpen, setIsJobAlertModalOpen] = useState<boolean>(false);
//   const [isRTRAlertModalOpen, setIsRTRAlertModalOpen] = useState<boolean>(false);
//   const [isMessageAlertModalOpen, setIsMessageAlertModalOpen] = useState<boolean>(false);
//   const [isJobPreferencetModalOpen, setJobPreferencetModalOpen] = useState<boolean>(false);

//   // Function to handle checkbox changes
//   const handleJobAlertChange = (checked: boolean) => {
//     if (!checked) {
//       setIsJobAlertModalOpen(true);
//     } else {
//       setIsJobAlertChecked(true);
//     }
//   };

//   const handleRTRAlertChange = (checked: boolean) => {
//     if (!checked) {
//       setIsRTRAlertModalOpen(true);
//     } else {
//       setIsRTRAlertChecked(true);
//     }
//   };

//   const handleMessageAlertChange = (checked: boolean) => {
//     if (!checked) {
//       setIsMessageAlertModalOpen(true);
//     } else {
//       setIsMessageAlertChecked(true);
//     }

//   };


//   const handleJobPreferenceChange = (checked: boolean) => {
//     if (!checked) {
//       setJobPreferencetModalOpen(true);
//     } else {
//       setJobPreferenceChecked(true);
//     }
//   };
    
//     const titles = [
//       {
//           label:'User Profile',
//           link:'/job-poster/profile-setting'
//       },
//       {
//           label:'Company Profile',
//           link:'/job-poster/company-profile-info'
//       },
//       {
//           label:'Privacy Setting',
//           link:'/job-poster/privacy-setting'
//       }
//     ];
  
//   return(
//       <div className="w-full h-[calc(100vh-60px)]  bg-[#F2F2F5] p-2  relative" >
//           <div className=" w-full max-w-[1280px]  bg-white  m-auto  rounded-lg p-5">
                
//                       <div className="w-full overflow-auto md:flex md:justify-between ">
//                               <ul className="w-screen  md:w-auto flex justify-start items-center space-x-6   ">
//                                   {titles?.map((item,id)=>{
//                                       return(
//                                           <Link to={item.link} className={` text-xs p-1  font-[500]  ${id==2?'border-[#104B53] border-b-2':''}  `} key={id}>{item.label}</Link>
//                                       )
//                                   })}
//                               </ul>

//                               <div className="flex  text-xs text-[#104B53] justify-center items-center space-x-1">
//                                       <FaEdit color="#104B53" size={15}/>
//                                       Edit
//                               </div>
//                       </div>


          

                                 

//                       <div className="w-full max-w-[1200px] mt-10 m-auto border border-[#E1E1E2] rounded-lg">
//           <div className="w-full h-full flex flex-col space-y-6 p-10">
            

//                 {/* Job posted */}
//                 <div className="flex justify-between items-center">
//               <div className="flex flex-col space-y-3">
//                 <h1 className="text-sm font-[500]">Allow TopEquator to send me recent job posted updates</h1>
//               </div>

//               <div>
//                 <label className="inline-flex items-center cursor-pointer outline-none">
//                   <input
//                     type="checkbox"
//                     checked={isJobAlertChecked}
//                     className="sr-only peer outline-none"
//                     onChange={(e) => handleRTRAlertChange(e.target.checked)}
//                   />
//                   <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                 </label>
//               </div>
//             </div>

//             {/* RTR Alerts */}
//             <div className="flex justify-between items-center">
//               <div className="flex flex-col space-y-3">
//                 <h1 className="text-sm font-[500]">Send me notification when employer send me RTR Via TopEquator</h1>
//               </div>

//               <div>
//                 <label className="inline-flex items-center cursor-pointer outline-none">
//                   <input
//                     type="checkbox"
//                     checked={isRTRAlertChecked}
//                     className="sr-only peer outline-none"
//                     onChange={(e) => handleRTRAlertChange(e.target.checked)}
//                   />
//                   <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
//                 </label>
//               </div>
//             </div>

           


// <hr />

//             <div className='w-full h-full flex flex-col  space-y-4 '>
//                 <h1 className='text-lg font-semibold'>Terms of Service & Privacy Policy</h1>

//                 <div className="flex  flex-col  space-y-4 justify-between items-center">
//               <div className="flex flex-col space-y-3">
//                 <p className='text-sm font-[500] text-[#104B53]'>Terms and Conditions</p>
//                 <p className='text-[10px] text-[#6B7588] '>The Terms and Conditions outline the rules and guidelines users must agree to follow when using TopEquator. This includes acceptable use, account responsibilities, and limitations of liability. By using the platform, users agree to abide by these terms.</p>

//               </div>

             

//               <div className="flex flex-col space-y-3">
//                 <p className='text-sm font-[500] text-[#104B53]'>Privacy Policy</p>
//                 <p className='text-[10px] text-[#6B7588] '>The Privacy Policy explains how TopEquator collects, uses, and protects user data. It covers data collection methods, user consent, storage practices, and the measures taken to ensure personal information is kept secure and confidential.</p>

//               </div>
//             </div>

             
//             </div>
//           </div>

//           {/* Modals */}
//           {/* Job Alert Modal */}
//           {isJobAlertModalOpen && (
//             <div className="w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01]">
//               <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
//                 <div className="flex justify-between items-center">
//                   <h1 className="text-lg text-center w-full">Are you sure?</h1>
//                   <button
//                     onClick={() => setIsJobAlertModalOpen(false)}
//                     className="text-lg font-bold text-gray-400"
//                   >
//                     ×
//                   </button>
//                 </div>

//                 <div className="flex flex-col items-center justify-center">
//                   <p className="text-sm text-center text-[#6B7588]">
//                     Your Job alerts will be turned off and Top Equator will no longer send relevant jobs to your email address.
//                   </p>

//                   <div className="flex justify-between items-center w-full p-3">
//                     <p
//                       onClick={() => {
//                         setIsJobAlertChecked(false);
//                         setIsJobAlertModalOpen(false);
//                       }}
//                       className="text-xs w-full text-[#104B53] font-[500]"
//                     >
//                       Yes Disable
//                     </p>
//                     <p
//                       onClick={() => setIsJobAlertModalOpen(false)}
//                       className="w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center"
//                     >
//                      I Want to Stay
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* RTR Alert Modal */}
//           {isRTRAlertModalOpen && (
//             <div className="w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01]">
//               <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
//                 <div className="flex justify-between items-center">
//                   <h1 className="text-lg text-center w-full">Are you sure?</h1>
//                   <button
//                     onClick={() => setIsRTRAlertModalOpen(false)}
//                     className="text-lg font-bold text-gray-400"
//                   >
//                     ×
//                   </button>
//                 </div>

//                 <div className="flex flex-col items-center justify-center">
//                   <p className="text-sm text-center text-[#6B7588]">
//                     Your RTR notifications will be turned off and Top Equator will no longer send RTR notifications to your email address.
//                   </p>

//                   <div className="flex justify-between items-center w-full p-3">
//                     <p
//                       onClick={() => {
//                         setIsRTRAlertChecked(false);
//                         setIsRTRAlertModalOpen(false);
//                       }}
//                       className="text-xs w-full text-[#104B53] font-[500]"
//                     >
//                       Yes Disable
//                     </p>
//                     <p
//                       onClick={() => setIsRTRAlertModalOpen(false)}
//                       className="w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center"
//                     >
//                    I Want to Stay
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Message Alert Modal */}
//           {isMessageAlertModalOpen && (
//             <div className="w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01]">
//               <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
//                 <div className="flex justify-between items-center">
//                   <h1 className="text-lg text-center w-full">Are you sure?</h1>
//                   <button
//                     onClick={() => setIsMessageAlertModalOpen(false)}
//                     className="text-lg font-bold text-gray-400"
//                   >
//                     ×
//                   </button>
//                 </div>

//                 <div className="flex flex-col items-center justify-center">
//                   <p className="text-sm text-center text-[#6B7588]">
//                     Your message notifications will be turned off and Top Equator will no longer send message notifications to your email address.
//                   </p>

//                   <div className="flex justify-between items-center w-full p-3">
//                     <p
//                       onClick={() => {
//                         setIsMessageAlertChecked(false);
//                         setIsMessageAlertModalOpen(false);
//                       }}
//                       className="text-xs w-full text-[#104B53] font-[500]"
//                     >
//                       Yes Disable
//                     </p>
//                     <p
//                       onClick={() => setIsMessageAlertModalOpen(false)}
//                       className="w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center"
//                     >
//                      I Want to Stay
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}



//            {/* Job Preference Modal */}
//            {isJobPreferencetModalOpen && (
//             <div className="w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01]">
//               <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
//                 <div className="flex justify-between items-center">
//                   <h1 className="text-lg text-center w-full">Are you sure?</h1>
//                   <button
//                     onClick={() => setJobPreferencetModalOpen(false)}
//                     className="text-lg font-bold text-gray-400"
//                   >
//                     ×
//                   </button>
//                 </div>

//                 <div className="flex flex-col items-center justify-center">
//                   <p className="text-sm text-center text-[#6B7588]">
//                     Your message notifications will be turned off and Top Equator will no longer send message notifications to your email address.
//                   </p>

//                   <div className="flex justify-between items-center w-full p-3">
//                     <p
//                       onClick={() => {
//                         setJobPreferenceChecked(false);
//                         setJobPreferencetModalOpen(false);
//                       }}
//                       className="text-xs w-full text-[#104B53] font-[500]"
//                     >
//                       Yes Disable
//                     </p>
//                     <p
//                       onClick={() => setJobPreferencetModalOpen(false)}
//                       className="w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center"
//                     >
//                       I Want to Stay
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//           </div>


 
//       </div>
//   )
// };

// export default PrivacySettingJP;


const PrivacySettingJP=()=>{
  return(
    <div>
      l
    </div>
  )
}

export default PrivacySettingJP
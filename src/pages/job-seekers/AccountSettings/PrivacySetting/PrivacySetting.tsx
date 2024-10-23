import { useState } from 'react';
import { Link } from 'react-router-dom';
const PrivacySetting: React.FC = () => {
    const [isJobAlertModalOpen,setIsJobAlertModalOpen]=useState<boolean>(false)
    const [isRTRAlertModalOpen,setIsRTRAlertModalOpen]=useState<boolean>(false)

    const [isMessageAlerttModalOpen,setIsMessageAlertModalOpen]=useState<boolean>(false)

    
  const titles = [
    {
      label: 'Profile Settings',
      link: '/account',
    },
    {
      label: 'Profile Visibility',
      link: '/profile-visibility',
    },
    {
      label: 'Privacy Settings',
      link: '/privacy-setting',
    },
  ];

  return (
    <div className="w-full   h-[calc(100vh-60px)] bg-[#F2F2F5] p-2 ">
      <div className=" w-full max-w-[1280px] h-[80vh] bg-white  m-auto mt-10 rounded-lg p-5">
        <h1 className="text-3xl p-3 font-bold">Account Settings</h1>
        <hr />
        <div className="w-full">
          <ul className="w-screen  md:w-auto flex justify-start items-center space-x-6   ">
            {titles?.map((item, id) => {
              return (
                <Link
                  to={item.link}
                  className={` text-xs p-1  font-[500]  ${id == 2 ? 'border-[#104B53] border-b-2' : ''}  `}
                  key={id}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Setting Box  */}

        <div className="w-full   max-w-[1200px]   mt-10   m-auto border border-[#E1E1E2] rounded-lg">
          <div className="w-full h-full flex flex-col  space-y-2 p-10">
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-3">
                <h1 className="text-sm font-[500]">Allow TopEquator to send me relevant job Alerts  </h1>
              </div>

              <div>
                <label className="inline-flex items-center  cursor-pointer outline-none">
                  <input type="checkbox" checked={isJobAlertModalOpen}   className="sr-only peer outline-none" onChange={(e)=>setIsJobAlertModalOpen(e.target.checked)}  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full      dark:bg-gray-700 peer-checked:after:translate-x-full   after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all   peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>


            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-3">
                <h1 className="text-sm font-[500]">Send me notification when employer send me RTR Via TopEquator  </h1>
              </div>

              <div>
                <label className="inline-flex items-center  cursor-pointer outline-none">
                  <input type="checkbox" checked={isRTRAlertModalOpen}   className="sr-only peer outline-none" onChange={(e)=>setIsRTRAlertModalOpen(e.target.checked)}  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full      dark:bg-gray-700 peer-checked:after:translate-x-full   after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all   peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-3">
                <h1 className="text-sm font-[500]">Send me notification when employer contact me via Messages  </h1>
              </div>

              <div>
                <label className="inline-flex items-center  cursor-pointer outline-none">
                  <input type="checkbox" checked={isMessageAlerttModalOpen}   className="sr-only peer outline-none" onChange={(e)=>setIsMessageAlertModalOpen(e.target.checked)}  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full      dark:bg-gray-700 peer-checked:after:translate-x-full   after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all   peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>


            <hr />

      
          </div>


            <div className='w-full h-full flex flex-col  space-y-4 p-10'>
                <h1 className='text-lg font-semibold'>Personal Data</h1>

                <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-3">
                <h1 className="text-sm font-[500] ">Allow TopEquator to send me relevant job Alerts  </h1>
              </div>

              <div>
                <label className="inline-flex items-center  cursor-pointer outline-none">
                  <input type="checkbox" value="" className="sr-only peer outline-none"  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full      dark:bg-gray-700 peer-checked:after:translate-x-full   after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all   peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className='flex flex-col space-y-3'>
                <p className='text-xs '>By enabling this option, you are directing TopEquator not to sell or share your personal information with third parties for targeted marketing purposes as defined under applicable law. This does not apply to employers using Monster services for job opportunities. If you do not want employers to see your personal information, please review/adjust your visibility settings.</p>

                <p className='text-[10px] text-[#6B7588] '>Limit the Use of My Sensitive Personal Information: please update your location browser settings. Other than precise geolocation data, Monster does not collect and use sensitive personal information to infer characteristics for marketing and/or advertising purposes as defined by CPRA</p>
            </div>
            </div>

        </div>
      </div>


            
            {/* Job alert turned off  */}
            <div
        className={`w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 ${
            isJobAlertModalOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'
        }`}
      >
        <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg  text-center  w-full ">Are you sure ?</h1>
            <button
              onClick={() => setIsJobAlertModalOpen(false)}
              className="text-lg font-bold text-gray-400"
            >
              ×
            </button>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-center text-[#6B7588]'>Your Job alerts will be turned off and Top Equator will no longer send relevant jobs to your email address </p>

            <div className='flex justify-between items-center w-full p-3'>
                 <p  onClick={()=>setIsJobAlertModalOpen(false)} className='text-xs w-full text-[#104B53] font-[500]'>Yes Disable</p>
                 <p  className='w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center'>Cancel</p>
            </div>
          </div>
           
        </div>
      </div>


 {/* RTR Alert turned off */}

 <div
        className={`w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 ${
            isRTRAlertModalOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'
        }`}
      >
        <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg  text-center  w-full ">Are you sure ?</h1>
            <button
              onClick={() => setIsRTRAlertModalOpen(false)}
              className="text-lg font-bold text-gray-400"
            >
              ×
            </button>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-center text-[#6B7588]'>Your RTR Notification will be turned off and Top Equator will no longer send RTR Notification to your email address  </p>

            <div className='flex justify-between items-center w-full p-3'>
                 <p  onClick={()=>setIsJobAlertModalOpen(false)} className='text-xs w-full text-[#104B53] font-[500]'>Yes Disable</p>
                 <p  className='w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center'>Cancel</p>
            </div>
          </div>
           
        </div>
      </div>
            


             {/* Message Alert turned off */}

 <div
        className={`w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 ${
            isMessageAlerttModalOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'
        }`}
      >
        <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg  text-center  w-full ">Are you sure ?</h1>
            <button
              onClick={() => setIsMessageAlertModalOpen(false)}
              className="text-lg font-bold text-gray-400"
            >
              ×
            </button>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-sm text-center text-[#6B7588]'>Your Message Notification will be turned off and Top Equator will no longer send Message Notification to your email address  </p>

            <div className='flex justify-between items-center w-full p-3'>
                 <p  onClick={()=>setIsJobAlertModalOpen(false)} className='text-xs w-full text-[#104B53] font-[500]'>Yes Disable</p>
                 <p  className='w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center'>Cancel</p>
            </div>
          </div>
           
        </div>
      </div>
      
    </div>
  );
};

export default PrivacySetting;

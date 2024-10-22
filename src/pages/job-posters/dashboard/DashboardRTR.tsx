import React, { useState,useEffect } from 'react';
 
import useHeaderContext from '../../../context/HeaderContext';
 
 
import {  useLocation ,useNavigate} from 'react-router-dom';

 
// dashboard icons 

 
import righttorepresentIcon from '../../../assets/dashboard/icons/righttorepresent.png'
 
import helpIcon from '../../../assets/dashboard/icons/help.png'
import CreateNewJob from '../../../components/job-posters/dashboardRTR/CreateNewJob';
import RTR from '../../../components/job-posters/dashboardRTR/RTR';
import Help from '../../../components/job-posters/dashboardRTR/Help';
 

 

const Sidebar: React.FC = () => {
  const [currentQueryString, setCurrentQueryString] = useState<string>('');
  const { isDashboardOpen, isDashboardMobileNav,setIsDashboardMobileNav } = useHeaderContext();
  const navigate=useNavigate();
  const sideBarItems = [
     
    {
      label: ' Create New Job',
      icon: '',
      queryString:'create-new-job'
    },
    {
      label: 'Right to Represent',
      icon: righttorepresentIcon,
      queryString:'right-to-represent'
    },
  
 
    {
      label: 'Help',
      icon: helpIcon,
      queryString:'help'
    },
  ];

  useEffect(() => {
    if (isDashboardOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDashboardOpen]);

  const setQueryString = (qstring:string) => {
    const params = new URLSearchParams();
    params.set('key', qstring);
    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleIdx = (queryString:string )=> {
    setQueryString(queryString)
    setCurrentQueryString(queryString);
    setIsDashboardMobileNav(false)
  };


  return (
    <div
      className={` h-full transition-all duration-1000   bg-white ${isDashboardOpen ? ' absolute h-screen left-[0%] z-30   md:w-48 md:h-full md:static ' : 'left-[-100%]  md:w-14  '} ${isDashboardMobileNav?'absolute h-screen left-[0%] z-30':'left-[-200%] w-0  '} `}
    >
      <div className="w-full h-full ">

        <ul className="w-full flex flex-col justify-center items-center mt-2">
          {sideBarItems?.map((item, i) => {
            return (
              <li
                className={`flex justify-center items-center space-x-4 cursor-pointer transition-all duration-300  p-4 w-full ${currentQueryString === item.queryString ? 'bg-[#EFFDFD] text-[#104B53] font-[600]' : ''}`}
                key={i}
                onClick={() => handleIdx(item.queryString)}
              >
                <img src={item.icon} alt={`dashboardIcon-${i} `}  className='w-4 h-4'/>
                <span
                  className={`text-xs font-[500] transition-all md:delay-1000 w-full ${isDashboardOpen ? 'block' : 'hidden'}`}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const DashBoardRTR: React.FC = () => {
   
  const location = useLocation();
  const queryParams= new URLSearchParams(location.search)
  const queryString= queryParams.get('key')
 
  const sideBarItems = [
   

    {
      label: ' Create New Job',
      components: <CreateNewJob/>,
      queryString:'create-new-job'
    },

    {
      label: 'Right to Represent',
      components:<RTR/>,
      queryString:'right-to-represent'
    },
  
  
    {
      label: 'Help',
      components:<Help/>,
      queryString:'help'
    },
    ];

     

  return (
    <div className="w-full h-[89vh] relative flex">
      {/* Sidebar on the Left */}
      <div className="h-full">
        <Sidebar/>
      </div>

      {/* Main Content on the Right */}
      <div className="w-full md:flex-1 h-full    ">
     

        <div className="w-[98%] m-auto h-full  md:h-[98%] mt-2  overflow-y-auto   bg-white rounded-lg ">
          

          {/* Rendering all components */}

          {sideBarItems?.map((item) => {
            if (item.queryString === queryString) {
              return (
                <div className="w-full h-full">
                 { item.components}
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DashBoardRTR;

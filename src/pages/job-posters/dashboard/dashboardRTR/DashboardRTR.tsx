import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import useHeaderContext from '../../../../context/HeaderContext';
import { Link, useSearchParams } from 'react-router-dom';

// Components
import CreateNewJob from '../../../../components/job-posters/dashboardRTR/CreateNewJob';
import RTR from '../../../../components/job-posters/dashboardRTR/RTR';
import Help from '../../../../components/job-posters/dashboardRTR/Help';

// Dashboard icons 
import righttorepresentIcon from '../../../../assets/dashboard/icons/righttorepresent.png';
import helpIcon from '../../../../assets/dashboard/icons/help.png';

const sidebarItems = [
  { label: 'Right to Represent', icon: righttorepresentIcon, path: 'right-to-represent', component: <RTR /> },
  { label: 'Help', icon: helpIcon, path: 'help', component: <Help /> },
];

const Sidebar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDashboardOpen, isDashboardMobileNav, setIsDashboardMobileNav } = useHeaderContext();
  const currentPath = searchParams.get('key') || 'right-to-represent'; 

 

  const handleItemClick = (path: string) => {
    setSearchParams({ key: path }); 
    setIsDashboardMobileNav(false);
  };

  return (
    <div
      className={`h-full transition-all duration-1000 bg-white 
                 ${isDashboardOpen ? 'absolute h-screen left-0 z-30 md:w-48 md:h-full md:static' : 'left-[-100%] md:w-14'} 
                 ${isDashboardMobileNav ? 'absolute h-screen left-0 z-30' : 'left-[-200%] w-0'}`} 
    >
      <div className="w-full h-full ">
        <Link
          to="/dashboard-rtr?key=create-new-job" // Link to Create New Job
          className="flex justify-center items-center space-x-2 w-full p-4 "
        >
          <FiPlus size={16} className="font-[700]" />
          <p
            className={`text-xs w-full font-[500] text-[#3A3A3C] ${isDashboardOpen ? 'block' : 'hidden'} `}
          >
            Create new job
          </p>
          <IoIosArrowForward size={10} className={`${isDashboardOpen ? 'block' : 'hidden'}`} />
        </Link>

        <ul className="w-full flex flex-col justify-center items-center ">
          {sidebarItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleItemClick(item.path)}
              className={`flex justify-center items-center space-x-4 cursor-pointer transition-all duration-300 p-4 w-full 
                         ${currentPath === item.path ? 'bg-[#EFFDFD] text-[#104B53] font-[600]' : ''}`} 
            >
              <img src={item.icon} alt={`dashboardIcon-${i} `} className="w-4 h-4" />
              <span
                className={`text-xs font-[500] transition-all md:delay-1000 w-full ${isDashboardOpen ? 'block' : 'hidden'}`}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DashBoardRTR: React.FC = () => {
  const [searchParams] = useSearchParams();
  const currentPath = searchParams.get('key') || 'right-to-represent'; 

  return (
    <div className="w-full h-[89vh] relative flex">
      <div className="h-full"> 
        <Sidebar /> 
      </div>

      <div className="w-full md:flex-1 h-full">
        <div className="w-[98%] m-auto h-full md:h-[98%] mt-2 overflow-y-auto bg-white rounded-lg">
          {/* Conditional rendering based on currentPath */}
          {currentPath === 'create-new-job' && <CreateNewJob />} 
          {sidebarItems.map((item) => 
            item.path === currentPath && <div key={item.path}>{item.component}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoardRTR;
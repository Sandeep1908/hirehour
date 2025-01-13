import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import useHeaderContext from '../../../context/HeaderContext';
import { Link, useSearchParams } from 'react-router-dom';

// Components
import MyJobsDashBoard from '../../../components/job-posters/dashboard/MyJobsDashBoard';
import Subscription from '../../../components/job-posters/dashboard/Subscription';
import Help from '../../../components/job-posters/dashboard/Help';
import Applicants from '../../../components/job-posters/dashboard/Applicants';
import Cohiring from '../../../components/job-posters/dashboard/Cohiring';
import RTR from '../../../components/job-posters/dashboard/RTR';
import ResumeScouring from '../../../components/job-posters/dashboard/ResumeScouring';
import Interviews from '../../../components/job-posters/dashboard/Interviews';

// Dashboard icons
import myjobsIcon from '../../../assets/dashboard/icons/myjob.png';
import applicantIcon from '../../../assets/dashboard/icons/applicants.png';
import resumesourcingIcon from '../../../assets/dashboard/icons/resumesourcing.png';
import righttorepresentIcon from '../../../assets/dashboard/icons/righttorepresent.png';
import interviewIcon from '../../../assets/dashboard/icons/interview.png';
import cohiringIcon from '../../../assets/dashboard/icons/co-hiring.png';
import subscriptionIcon from '../../../assets/dashboard/icons/subscription.png';
import helpIcon from '../../../assets/dashboard/icons/help.png';

const sidebarItems = [
  { label: 'Jobs', icon: myjobsIcon, path: 'myjobs', count: '', component: <MyJobsDashBoard /> },
  {
    label: 'Applicants',
    icon: applicantIcon,
    path: 'applicants',
    count: '',
    component: <Applicants />,
  },
  {
    label: 'Resume Sourcing',
    icon: resumesourcingIcon,
    path: 'resume-sourcing',
    count: '',
    component: <ResumeScouring />,
  },
  {
    label: 'Right to Represent',
    icon: righttorepresentIcon,
    path: 'right-to-represent',
    count: '',
    component: <RTR />,
  },
  {
    label: 'Interviews',
    icon: interviewIcon,
    path: 'interviews',
    count: '',
    component: <Interviews />,
  },
  { label: 'Co-Hiring', icon: cohiringIcon, path: 'co-hiring', count: '', component: <Cohiring /> },
  {
    label: 'Subscription',
    icon: subscriptionIcon,
    path: 'subscription',
    count: '1',
    component: <Subscription />,
  },
  { label: 'Help', icon: helpIcon, path: 'help', count: '', component: <Help /> },
];

const Sidebar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isDashboardOpen, isDashboardMobileNav, setIsDashboardMobileNav } = useHeaderContext();
  const currentPath = searchParams.get('key') || 'myjobs';

  const handleItemClick = (path: string) => {
    setSearchParams({ key: path });
    setIsDashboardMobileNav(false);
  };

  return (
    <div
      className={`h-full transition-all duration-300 bg-white 
                 ${isDashboardOpen ? 'md:w-48 md:static' : 'w-0'} 
                 ${isDashboardMobileNav ? 'absolute h-screen left-0 z-30' : 'hidden md:block'}`}
    >
      <div className="w-full h-full ">
        <Link
          to="/job-poster/job-basis"
          className="flex justify-center items-center space-x-2 w-full p-4 "
        >
          <FiPlus size={14} className="font-[700]" />
          <p
            className={`text-xs w-full font-[500] text-[#3A3A3C] ${isDashboardOpen ? 'block' : 'hidden'} `}
          >
            Create new job
          </p>
          <IoIosArrowForward size={10} className={`${isDashboardOpen ? 'block' : 'hidden'}`} />
        </Link>

        <ul className="w-full flex flex-col justify-center items-center mt-4">
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
              {item.count && (
                <p className="text-[10px] font-semibold w-10 flex justify-center items-center rounded-full  bg-[#104B53] text-white">
                  {item.count}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const DashBoard: React.FC = () => {
  const [searchParams] = useSearchParams();
  const currentPath = searchParams.get('key') || 'myjobs';

  return (
    <div className="w-full h-[90vh] relative flex flex-col md:flex-row"> 
      <Sidebar /> 

      <div className="w-full md:flex-1 h-full">
        <div className="w-[98%] m-auto h-full md:h-[98%] mt-2 overflow-y-auto bg-white rounded-lg">
          {sidebarItems.map(
            (item) => item.path === currentPath && <div key={item.path}>{item.component}</div>,
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
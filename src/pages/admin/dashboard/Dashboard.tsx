import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import useHeaderContext from '../../../context/HeaderContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import myjobsIcon from '../../../assets/dashboard/icons/myjob.png';
import applicantIcon from '../../../assets/dashboard/icons/applicants.png';
import resumesourcingIcon from '../../../assets/dashboard/icons/resumesourcing.png';
import righttorepresentIcon from '../../../assets/dashboard/icons/righttorepresent.png';
import interviewIcon from '../../../assets/dashboard/icons/interview.png';
import cohiringIcon from '../../../assets/dashboard/icons/co-hiring.png';
// import subscriptionIcon from '../../../assets/dashboard/icons/subscription.png'

import helpIcon from '../../../assets/dashboard/icons/help.png';

// Define icon imports in an object for easier management
const icons = {
  myjobs: myjobsIcon,
  applicant: applicantIcon,
  resumesourcing: resumesourcingIcon,
  righttorepresent: righttorepresentIcon,
  interview: interviewIcon,
  cohiring: cohiringIcon,
  help: helpIcon,
};

// Components
import MyJobsAdmin from '../../../components/admin/dashboard/MyJobsAdmin';
import Sales from '../../../components/admin/dashboard/Sales';
import Reports from '../../../components/admin/dashboard/Reports';
import Help from '../../../components/admin/dashboard/Help';
import Analytics from '../../../components/admin/dashboard/Analytics';
import Home from '../../../components/admin/dashboard/Home';
import Verification from '../../../components/admin/dashboard/Verification';
import Access from '../../../components/admin/dashboard/Access';
import ResumeScouring from '../../../components/admin/dashboard/ResumeScouring';
import CompanyTab from '../../../components/admin/dashboard/Companies';
import Users from '../../../components/admin/dashboard/Users';

// Define sidebar items with clearer structure, icons, and components
const sideBarItems = [
  { label: 'Home', icon: icons.myjobs, queryString: 'home', component: <Home /> },
  { label: 'Jobs', icon: icons.myjobs, queryString: 'myjobs', component: <MyJobsAdmin /> },
  {
    label: 'Resume Database',
    icon: icons.applicant,
    queryString: 'resume-database',
    component: <ResumeScouring />,
  },
  {
    label: 'Companies',
    icon: icons.applicant,
    queryString: 'companies',
    component: <CompanyTab />,
  },
  { label: 'Users', icon: icons.applicant, queryString: 'users', component: <Users /> },
  {
    label: 'Verification',
    icon: icons.applicant,
    queryString: 'job-verification',
    component: <Verification />,
  },
  { label: 'Access', icon: icons.applicant, queryString: 'access', component: <Access /> },
  {
    label: 'Analytics',
    icon: icons.resumesourcing,
    queryString: 'analytics',
    component: <Analytics />,
  },
  { label: 'Sales', icon: icons.righttorepresent, queryString: 'sales', component: <Sales /> },
  { label: 'Reports', icon: icons.interview, queryString: 'reports', component: <Reports /> },
  { label: 'Broadcast', icon: icons.cohiring, queryString: 'broadcast', component: null }, // Use null for no component
  { label: 'Help Center', icon: icons.help, queryString: 'help-center', component: <Help /> },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const { isDashboardOpen, isDashboardMobileNav, setIsDashboardMobileNav } = useHeaderContext();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryString = queryParams.get('key');

  useEffect(() => {
    setActiveItem(queryString || 'home'); // Set initial active item
  }, [queryString]);

  useEffect(() => {
    document.body.style.overflow = isDashboardOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDashboardOpen]);

  const handleItemClick = (queryString: string) => {
    setActiveItem(queryString);
    navigate(`?key=${queryString}`, { replace: true });
    setIsDashboardMobileNav(false);
  };

  return (
    <div
      className={`h-full transition-all duration-1000 bg-white 
                 ${isDashboardOpen ? ' absolute h-screen left-0 z-30 md:w-48 md:h-full md:static ' : 'left-[-100%] md:w-14  '} 
                 ${isDashboardMobileNav ? 'absolute h-screen left-0 z-30' : 'left-[-200%] w-0  '} `}
    >
      <div className="w-full h-full ">
        <Link
          to="/job-poster/job-basis"
          className="flex justify-center items-center space-x-2 w-full p-4 "
        >
          <FiPlus size={14} className="font-[700]" />
          <p
            className={`text-xs w-full font-[500] text-[#3A3A3C] ${isDashboardOpen ? 'block' : 'hidden'}`}
          >
            Create new job
          </p>
          <IoIosArrowForward size={10} className={`${isDashboardOpen ? 'block' : 'hidden'}`} />
        </Link>

        <ul className="w-full flex flex-col justify-center items-center mt-4">
          {sideBarItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleItemClick(item.queryString)}
              className={`flex justify-center items-center space-x-4 cursor-pointer transition-all duration-300 p-4 w-full 
                         ${activeItem === item.queryString ? 'bg-[#EFFDFD] text-[#104B53] font-[600]' : ''}`}
            >
              <img src={item.icon} alt={`dashboardIcon-${i}`} className="w-4 h-4" />
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

const AdminDashboard: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryString = queryParams.get('key') || 'home'; // Default to 'home'

  const activeItem = sideBarItems.find((item) => item.queryString === queryString);

  return (
    <div className="w-full h-[89vh] relative flex">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="w-full md:flex-1 h-full">
        <div className="w-[98%] m-auto h-full md:h-[98%] mt-2 overflow-y-auto bg-white rounded-lg">
          {activeItem?.component && ( // Render component if it exists
            <div className="w-full">{activeItem.component}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

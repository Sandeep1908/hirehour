import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import useHeaderContext from '../../../context/HeaderContext';

import MyJobsDashBoard from '../../../components/job-posters/dashboard/MyJobsDashBoard';
import Subscription from '../../../components/job-posters/dashboard/Subscription';
import Help from '../../../components/job-posters/dashboard/Help';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Applicants from '../../../components/job-posters/dashboard/Applicants';
import Cohiring from '../../../components/job-posters/dashboard/Cohiring';
import RTR from '../../../components/job-posters/dashboard/RTR';
import ResumeScouring from '../../../components/job-posters/dashboard/ResumeScouring';
import Interviews from '../../../components/job-posters/dashboard/Interviews';

// dashboard icons

import myjobsIcon from '../../../assets/dashboard/icons/myjob.png';
import applicantIcon from '../../../assets/dashboard/icons/applicants.png';
import resumesourcingIcon from '../../../assets/dashboard/icons/resumesourcing.png';
import righttorepresentIcon from '../../../assets/dashboard/icons/righttorepresent.png';
import interviewIcon from '../../../assets/dashboard/icons/interview.png';
import cohiringIcon from '../../../assets/dashboard/icons/co-hiring.png';
import subscriptionIcon from '../../../assets/dashboard/icons/subscription.png';
import helpIcon from '../../../assets/dashboard/icons/help.png';

const Sidebar: React.FC = () => {
  const [currentQueryString, setCurrentQueryString] = useState<string>('');
  const { isDashboardOpen, isDashboardMobileNav, setIsDashboardMobileNav } = useHeaderContext();
  const navigate = useNavigate();
  const sideBarItems = [
    {
      label: 'Jobs',
      icon: myjobsIcon,
      queryString: 'myjobs',
      count: '',
    },
    {
      label: 'Applicants',
      icon: applicantIcon,
      queryString: 'applicants',
      count: '',
    },
    {
      label: 'Resume Sourcing',
      icon: resumesourcingIcon,
      queryString: 'resue-sourcing',
      count: '',
    },
    {
      label: 'Right to Represent',
      icon: righttorepresentIcon,
      queryString: 'right-to-represent',
      count: '',
    },
    {
      label: 'Shortlisted',
      icon: interviewIcon,
      queryString: 'interviews',
      count: '',
    },
    {
      label: 'Co-Hiring',
      icon: cohiringIcon,
      queryString: 'co-hiring',
      count: '',
    },
    {
      label: 'Subscription',
      icon: subscriptionIcon,
      queryString: 'subscription',
      count: '1',
    },
    {
      label: 'Help',
      icon: helpIcon,
      queryString: 'help',
      count: '',
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

  const setQueryString = (qstring: string) => {
    const params = new URLSearchParams();
    params.set('key', qstring);
    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleIdx = (queryString: string) => {
    setQueryString(queryString);
    setCurrentQueryString(queryString);
    setIsDashboardMobileNav(false);
  };

  return (
    <div
      className={` h-full transition-all duration-1000   bg-white ${isDashboardOpen ? ' absolute h-screen left-[0%] z-30   md:w-48 md:h-full md:static ' : 'left-[-100%]  md:w-14  '} ${isDashboardMobileNav ? 'absolute h-screen left-[0%] z-30' : 'left-[-200%] w-0  '} `}
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
          {sideBarItems?.map((item, i) => {
            return (
              <li
                className={`flex justify-center items-center space-x-4 cursor-pointer transition-all duration-300  p-4 w-full ${currentQueryString === item.queryString ? 'bg-[#EFFDFD] text-[#104B53] font-[600]' : ''}`}
                key={i}
                onClick={() => handleIdx(item.queryString)}
              >
                <img src={item.icon} alt={`dashboardIcon-${i} `} className="w-4 h-4" />
                <span
                  className={`text-xs font-[500] transition-all md:delay-1000 w-full ${isDashboardOpen ? 'block' : 'hidden'}`}
                >
                  {item.label}
                </span>
                <p className="text-[10px] font-semibold w-10 flex justify-center items-center rounded-full  bg-[#104B53] text-white">
                  {item.count}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const DashBoard: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryString = queryParams.get('key');
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/job-poster/dashboard') {
      navigate('/job-poster/dashboard?key=myjobs');
    }
  }, []);

  const sideBarItems = [
    {
      label: 'Jobs',
      components: <MyJobsDashBoard />,
      queryString: 'myjobs',
    },
    {
      label: 'Applicants',
      components: <Applicants />,
      queryString: 'applicants',
    },
    {
      label: 'Resume Sourcing',
      components: <ResumeScouring />,
      queryString: 'resue-sourcing',
    },
    {
      label: 'Right to Represent',
      components: <RTR />,
      queryString: 'right-to-represent',
    },
    {
      label: 'Interviews',
      components: <Interviews />,
      queryString: 'interviews',
    },
    {
      label: 'Co-Hiring',
      components: <Cohiring />,
      queryString: 'co-hiring',
    },
    {
      label: 'Subscription',
      components: <Subscription />,
      queryString: 'subscription',
    },
    {
      label: 'Help',
      components: <Help />,
      queryString: 'help',
    },
  ];

  return (
    <div className="w-full h-[89vh] relative flex">
      {/* Sidebar on the Left */}
      <div className="h-full">
        <Sidebar />
      </div>

      {/* Main Content on the Right */}
      <div className="w-full md:flex-1 h-full    ">
        <div className="w-[98%] m-auto h-full  md:h-[98%] mt-2  overflow-y-auto   bg-white rounded-lg ">
          {/* Rendering all components */}

          {sideBarItems?.map((item) => {
            if (item.queryString === queryString) {
              return <div className="w-full">{item.components}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

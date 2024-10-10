import React, { useState,useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import useHeaderContext from '../../../context/HeaderContext';
 
 
import { Link, useLocation ,useNavigate} from 'react-router-dom';
 

// dashboard icons 

import myjobsIcon from '../../../assets/dashboard/icons/myjob.png'
import applicantIcon from '../../../assets/dashboard/icons/applicants.png'
import resumesourcingIcon from '../../../assets/dashboard/icons/resumesourcing.png'
import righttorepresentIcon from '../../../assets/dashboard/icons/righttorepresent.png'
import interviewIcon from '../../../assets/dashboard/icons/interview.png'
import cohiringIcon from '../../../assets/dashboard/icons/co-hiring.png'
// import subscriptionIcon from '../../../assets/dashboard/icons/subscription.png'
import helpIcon from '../../../assets/dashboard/icons/help.png'
import MyJobsAdmin from '../../../components/admin/dashboard/MyJobsAdmin';

 

const Sidebar: React.FC = () => {
  const [currentQueryString, setCurrentQueryString] = useState<string>('');
  const { isDashboardOpen, isDashboardMobileNav,setIsDashboardMobileNav } = useHeaderContext();
  const navigate=useNavigate();
  const sideBarItems = [
    {
      label: 'Home',
      icon: myjobsIcon,
      queryString:'home'
    },
    {
      label: 'Jobs',
      icon: myjobsIcon,
      queryString:'myjobs'
    },
    {
      label: 'Resume Database',
      icon: applicantIcon,
      queryString:'resume-database'
    },

    {
      label: 'Verification',
      icon: applicantIcon,
      queryString:'verification'
    },

    {
      label: 'Access',
      icon: applicantIcon,
      queryString:'access'
    },
    {
      label: 'Analytics',
      icon: resumesourcingIcon,
      queryString:'analytics'
    },
    {
      label: 'Sales',
      icon: righttorepresentIcon,
      queryString:'sales'
    },
    {
      label: 'Reports',
      icon: interviewIcon,
      queryString:'reports'
    },
    {
      label: 'Broadcast',
      icon: cohiringIcon,
      queryString:'broadcast'
    },
    {
      label: 'Help Center',
      icon: helpIcon,
      queryString:'help-center'
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
        <Link to='/job-poster/job-basis' className="flex justify-center items-center space-x-2 w-full p-4 ">
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

const AdminDashboard: React.FC = () => {
   
  const location = useLocation();
  const queryParams= new URLSearchParams(location.search)
  const queryString= queryParams.get('key')
 
  const sideBarItems = [
    {
      label: 'Home',
      component:'',
      queryString:'home'
    },
    {
      label: 'Jobs',
      component: <MyJobsAdmin/>,
      queryString:'myjobs'
    },
    {
      label: 'Resume Database',
      component:'',
      queryString:'resume-database'
    },

    {
      label: 'Verification',
      component:'',
      queryString:'verification'
    },

    {
      label: 'Access',
      component:'',
      queryString:'access'
    },
    {
      label: 'Analytics',
      component:'',
      queryString:'analytics'
    },
    {
      label: 'Sales',
      component:'',
      queryString:'sales'
    },
    {
      label: 'Reports',
      component:'',
      queryString:'reports'
    },
    {
      label: 'Broadcast',
      component:'',
      queryString:'broadcast'
    },
    {
      label: 'Help Center',
      component:'',
      queryString:'help-center'
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
                <div className="w-full">
                 { item.component}
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

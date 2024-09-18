import React, { useState } from 'react';
import { FaSuitcase } from 'react-icons/fa6';
import { MdGroups } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import useHeaderContext from '../../../context/HeaderContext';
import { BiHomeAlt2 } from 'react-icons/bi';
import MyJobsDashBoard from '../../../components/job-posters/dashboard/MyJobsDashBoard';
import Subscription from '../../../components/job-posters/dashboard/Subscription';
import Help from '../../../components/job-posters/dashboard/Help';
import { useLocation ,useNavigate} from 'react-router-dom';

 

const Sidebar: React.FC = () => {
  const [currentQueryString, setCurrentQueryString] = useState<string>('');
  const { isDashboardOpen } = useHeaderContext();
  const navigate=useNavigate();
  const sideBarItems = [
    {
      label: 'Jobs',
      icon: <FaSuitcase size={17} />,
      queryString:'myjobs'
    },
    {
      label: 'Applicants',
      icon: <MdGroups size={17} />,
      queryString:'applicants'
    },
    {
      label: 'Resume Sourcing',
      icon: <MdGroups size={17} />,
      queryString:'resue-sourcing'
    },
    {
      label: 'Right to Represent',
      icon: <MdGroups size={17} />,
      queryString:'right-to-represent'
    },
    {
      label: 'Interviews',
      icon: <MdGroups size={17} />,
      queryString:'interviews'
    },
    {
      label: 'Co-Hiring',
      icon: <MdGroups size={17} />,
      queryString:'co-hiring'
    },
    {
      label: 'Subscription',
      icon: <MdGroups size={17} />,
      queryString:'subscription'
    },
    {
      label: 'Help',
      icon: <MdGroups size={17} />,
      queryString:'help'
    },
  ];


  const setQueryString = (qstring:string) => {
    const params = new URLSearchParams();
    params.set('key', qstring);
    navigate(`?${params.toString()}`, { replace: true });
  };

  const handleIdx = (queryString:string )=> {
    setQueryString(queryString)
    setCurrentQueryString(queryString);
  };


  return (
    <div
      className={` h-full transition-all duration-1000   bg-white ${isDashboardOpen ? 'w-48' : 'w-14'}`}
    >
      <div className="w-full h-full ">
        <div className="flex justify-center items-center space-x-2 w-full p-4 ">
          <FiPlus size={14} className="font-[700]" />
          <p
            className={`text-xs w-full font-[500] text-[#3A3A3C] ${isDashboardOpen ? 'block' : 'hidden'} `}
          >
            Create new job
          </p>
          <IoIosArrowForward size={10} className={`${isDashboardOpen ? 'block' : 'hidden'}`} />
        </div>

        <ul className="w-full flex flex-col justify-center items-center mt-4">
          {sideBarItems?.map((item, i) => {
            return (
              <li
                className={`flex justify-center items-center space-x-4 cursor-pointer transition-all duration-300  p-4 w-full ${currentQueryString === item.queryString ? 'bg-[#EFFDFD] text-[#104B53] font-[600]' : ''}`}
                key={i}
                onClick={() => handleIdx(item.queryString)}
              >
                {item.icon}
                <span
                  className={`text-xs font-[500] transition-all delay-1000 w-full ${isDashboardOpen ? 'block' : 'hidden'}`}
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

const DashBoard: React.FC = () => {
   
  const location = useLocation();
  const queryParams= new URLSearchParams(location.search)
  const queryString= queryParams.get('key')
 
  const sideBarItems = [
    {
      label: 'Jobs',
      components: <MyJobsDashBoard/>,
      queryString:'myjobs'
    },
    {
      label: 'Applicants',
      components: '',
      queryString:'applicants'
    },
    {
      label: 'Resume Sourcing',
      components:'',
      queryString:'resue-sourcing'
    },
    {
      label: 'Right to Represent',
      components: '',
      queryString:'right-to-represent'
    },
    {
      label: 'Interviews',
      components: '',
      queryString:'interviews'
    },
    {
      label: 'Co-Hiring',
      components: '',
      queryString:'co-hiring'
    },
    {
      label: 'Subscription',
      components: <Subscription/>,
      queryString:'subscription'
    },
    {
      label: 'Help',
      components:<Help/>,
      queryString:'help'
    },
    ];

     

  return (
    <div className="w-full h-[89vh] flex">
      {/* Sidebar on the Left */}
      <div className="h-full">
        <Sidebar/>
      </div>

      {/* Main Content on the Right */}
      <div className="flex-1 h-full    ">
        <div className="flex items-center space-x-2 p-3">
          <BiHomeAlt2 size={16} />
          <IoIosArrowForward size={13} />
          <p className="text-xs">{sideBarItems?.find(i=>i.queryString===queryString)?.label}</p>
        </div>

        <div className="w-[98%] m-auto h-[92%]    bg-white rounded-lg ">
          

          {/* Rendering all components */}

          {sideBarItems?.map((item) => {
            if (item.queryString === queryString) {
              return item.components;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

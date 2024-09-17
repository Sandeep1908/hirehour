import React, { useState } from 'react';
import { FaSuitcase } from 'react-icons/fa6';
import { MdGroups } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import useHeaderContext from '../../../context/HeaderContext';
import { BiHomeAlt2 } from 'react-icons/bi';
import MyJobsDashBoard from '../../../components/job-posters/dashboard/MyJobsDashBoard';

type SidebarPropType = {
  setIsCurrentComponentIdx: (e: number) => void;
};

const Sidebar: React.FC<SidebarPropType> = ({ setIsCurrentComponentIdx }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const { isDashboardOpen } = useHeaderContext();
  const sideBarItems = [
    {
      label: 'Jobs',
      icon: <FaSuitcase size={17} />,
    },
    {
      label: 'Applicants',
      icon: <MdGroups size={17} />,
    },
    {
      label: 'Resume Sourcing',
      icon: <MdGroups size={17} />,
    },
    {
      label: 'Right to Represent',
      icon: <MdGroups size={17} />,
    },
    {
      label: 'Interviews',
      icon: <MdGroups size={17} />,
    },
    {
      label: 'Co-Hiring',
      icon: <MdGroups size={17} />,
    },
    {
      label: 'Subscription',
      icon: <MdGroups size={17} />,
    },
    {
      label: 'Help',
      icon: <MdGroups size={17} />,
    },
  ];

  const handleIdx = (id: number) => {
    setIsCurrentComponentIdx(id);
    setCurrentIdx(id);
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
                className={`flex justify-center items-center space-x-4 cursor-pointer transition-all duration-300  p-4 w-full ${currentIdx === i ? 'bg-[#EFFDFD] text-[#104B53] font-[600]' : ''}`}
                key={i}
                onClick={() => handleIdx(i)}
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
  const [currentComponentIdx, setCurrentComponentIdx] = useState<number>(0);
  const sideBarItems = [
    {
      label: 'Jobs',
      components: <MyJobsDashBoard />,
    },
    {
      label: 'Applicants',
      components: '',
    },
    {
      label: 'Resume Sourcing',
      components: '',
    },
    {
      label: 'Right to Represent',
      components: '',
    },
    {
      label: 'Interviews',
      components: '',
    },
    {
      label: 'Co-Hiring',
      components: '',
    },
    {
      label: 'Subscription',
      components: '',
    },
    {
      label: 'Help',
      components: '',
    },
  ];

  return (
    <div className="w-full h-[89vh] flex">
      {/* Sidebar on the Left */}
      <div className="h-full">
        <Sidebar setIsCurrentComponentIdx={setCurrentComponentIdx} />
      </div>

      {/* Main Content on the Right */}
      <div className="flex-1 h-full    ">
        <div className="flex items-center space-x-2 p-3">
          <BiHomeAlt2 size={16} />
          <IoIosArrowForward size={13} />
          <p className="text-xs">{sideBarItems[currentComponentIdx].label}</p>
        </div>

        <div className="w-[98%] m-auto h-[92%]    bg-white rounded-lg ">
          <div className="flex justify-between items-center p-3">
            <h1 className="text-sm font-semibold">{sideBarItems[currentComponentIdx].label}</h1>
            <p className="w-24 h-8 flex justify-center items-center bg-[#E9F358] text-[#104B53] rounded-full text-xs">
              Post a Job
            </p>
          </div>
          <hr />

          {/* Rendering all components */}

          {sideBarItems?.map((item, i) => {
            if (currentComponentIdx === i) {
              return item.components;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

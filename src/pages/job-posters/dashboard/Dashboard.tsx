import React from 'react';
import { FaSuitcase } from 'react-icons/fa6';
import { MdGroups } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';

const Sidebar: React.FC = () => {
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

  return (
    <div className="w-48 h-full transition-all duration-300   bg-white">
      <div className="w-full h-full ">
        <div className='flex justify-center items-center space-x-2 '>
          <FiPlus size={13} className='font-[500]' />
          <p className='text-xs font-[500] text-[#3A3A3C] '>Create new job</p>
          <IoIosArrowForward size={10} className='font-[50' />
        </div>

        <ul className='w-full flex flex-col justify-center items-center mt-10 space-y-4'>

            {sideBarItems?.map((item,i)=>{
                return(
                    <li className='flex justify-center items-center space-x-4 bg-[#EFFDFD] p-4 w-full' key={i}>
                        {item.icon} 
                        <span className='text-xs font-[500] w-full'>{item.label}</span>
                    </li>
                )
            })}
            
        </ul>
    



      </div>
    </div>
  );
};

const DashBoard: React.FC = () => {
  return (
    <div className="w-full h-[89vh]">
      <Sidebar />
    </div>
  );
};

export default DashBoard;

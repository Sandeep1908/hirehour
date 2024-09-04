import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import { RiUserSettingsLine } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';

type AccountModalProps = {
  isAccountOpen: boolean;
  setIsAccountOpen:(e:boolean)=>void
};

const AccountModal: React.FC<AccountModalProps> = ({ isAccountOpen,setIsAccountOpen }) => {
  const accountOptions = [
    {
      icon: <CgProfile />,
      name: 'Profile',
       link:'/profile'
    },
    {
      icon: <RiListSettingsLine />,
      name: 'Job Preference',
       link:'/job-preference'
    },

    {
      icon: <RiUserSettingsLine />,
      name: 'Account Setting',
      link:'/account'
    },
    {
      icon: <VscNotebook />,
      name: 'Our Blog',
       link:''
    },
  ];
  return (
    <div
      className={`w-40  overflow-auto p-3 bg-white absolute    top-16 left-0  rounded-lg transition-all duration-500 shadow-2xl ${isAccountOpen ? 'opacity-1 z-[20] translate-y-[-10px]' : 'opacity-0   z-[-30]'}`}
    >
      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-start items-center space-x-3 relative before:absolute before:w-full before:bottom-[-10px] before:bg-[#E3E7EA] before:h-[1px] ">
          <p className="text-xs text-[#104B53] w-8 h-8 flex justify-center items-center bg-[#CBFFFC] rounded-full ">
            J
          </p>

          <div className="flex flex-col">
            <h1 className="text-sm">Johnson</h1>
            <p className="text-[8px]">johnson@example.com </p>
          </div>
        </div>

        <ul className="flex flex-col space-y-2 pt-5 relative  before:absolute before:w-full before:bottom-[-10px] before:bg-[#E3E7EA] before:h-[1px]">
          {accountOptions?.map((item, id) => {
            return (
              <Link  to={item.link || ''} className="flex justify-start items-center space-x-2 p-1" key={id} onClick={()=>setIsAccountOpen(false)}>
                {item.icon}
                <p className="text-[12px] ">{item.name}</p>
              </Link>
            );
          })}

          <hr />

          <li className="flex justify-start items-center space-x-2 p-1">
            <GoSignOut color="#FF4444" />
            <p className="text-[12px] text-[#FF4444] ">Sign Out</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountModal;

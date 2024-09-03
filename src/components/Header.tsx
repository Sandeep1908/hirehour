import React, { useState } from 'react';
import Logo from '../assets/logo/hirehour.svg';
import { RiTodoLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { BsSuitcaseLg } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from "react-icons/io";

import { BsUpload } from 'react-icons/bs';
import NotificationModal from './modals/NotificationModal';
import AccountModal from './modals/AccountModal';
 
import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import { RiUserSettingsLine } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isNotification, setIsNotificationOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isNavOpen,setIsNavOpen]=useState<boolean>(false)
  const handlNavBar=()=>{
    setIsAccountOpen(false);
    setIsNavOpen(false)
  }
  const accountOptions = [
    {
      icon: <CgProfile size={30} />,
      name: 'Profile',
       link:'/profile'
    },
    {
      icon: <RiListSettingsLine size={30} />,
      name: 'Job Preference',
       link:''
    },

    {
      icon: <RiUserSettingsLine size={30} />,
      name: 'Account Setting',
      link:'/account'
    },
    {
      icon: <VscNotebook size={30} />,
      name: 'Our Blog',
       link:''
    },
  ];
  return (
    <div className="w-full h-20 bg-white relative   ">
      <div className="w-full max-w-[1300px] m-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-5">
          <div className="flex justify-center items-center space-x-3">
            <Link to={'/'}>
           
            <img src={Logo} className="w-36 h-10 object-contain" alt="logo-hirehour" />
            </Link>
          </div>

          <label
            className={`md:flex justify-center items-center w-36 h-7 p-0.5 rounded-full cursor-pointer bg-[#104B53]   hidden`}
          >
            <BsUpload size={13} color="#fff" className="" />
            <span className={`text-xs text-white  font-[500] pl-2`}>Upload Resume</span>
            <input type="file" className="hidden" />
          </label>
        </div>
        {/* Logo End  */}

        {/* Right Header without signup */}

        <div className="md:hidden">
          <div className="">
            <div className="flex justify-center items-center space-x-5">
              <p className="w-24 h-9 flex justify-center items-center border-[1px] rounded-full border-[#104B53] text-[#104B53] text-sm cursor-pointer">
                Sign In
              </p>

              <p className="text-sm tracking-wide hidden">Employer / Job Poster</p>
              <IoIosMenu size={40} onClick={()=>setIsNavOpen(true)} />
            </div>
          </div>
        </div>
        {/* Right Header without signup End */}

        {/* With SignIn */}

        <div className="md:flex justify-center items-center space-x-7 hidden">
          <div className="flex justify-center items-center space-x-5">
            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <RiTodoLine size={25} />
              <Link to={'/right-to-represent'} className="font-[200] text-sm">
                RTR
              </Link>
            </div>

            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <BiMessageDetail size={25} />
              <Link  to='/messages' className="font-[200] text-sm">Message</Link>
            </div>

            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <BsSuitcaseLg size={25} />
              <Link to={'/myjobs'} className="font-[200] text-sm">
                My jobs{' '}
              </Link>
            </div>

            <div className=" relative flex flex-col justify-center items-center cursor-pointer">
              <IoNotificationsOutline size={22} onClick={() => setIsNotificationOpen(true)} />

              <p className="w-2 h-2 bg-[#FF3837] rounded-full absolute  top-[-1px] right-[1px]"></p>

              {/* Nofiticaiton modal  */}

              <NotificationModal
                setIsNotification={setIsNotificationOpen}
                isNotification={isNotification}
              />
            </div>
          </div>

          {/* Account  */}

          <div
            className="flex justify-center items-center space-x-1 relative cursor-pointer"
            
          >
            <div className="flex justify-center items-center space-x-3">
              <p className="w-8 h-8 text-sm rounded-full bg-[#CBFFFC] flex justify-center items-center">
                J
              </p>
              <p className="text-sm">Johnson</p>
            </div>

            <MdOutlineKeyboardArrowDown
              className={`${isAccountOpen ? 'rotate-180 transition-all duration-500' : ''}`}
              onClick={() => setIsAccountOpen(!isAccountOpen)}
            />

            {/* Account Modal  */}

            <AccountModal isAccountOpen={isAccountOpen} setIsAccountOpen={setIsAccountOpen} />
          </div>
        </div>
      </div>


      {/* mobile view  */}

      <div className={`w-full h-screen bg-white fixed top-0 z-10 transition-all duration-500  ${isNavOpen?'left-[0%]':'left-[100%]'}`}>

          <div className='w-full flex justify-between items-center p-4'>
            <Link to={'/'}>
                  <img src={Logo} alt="home-logo" className='w-32' />
            </Link>

            <IoMdClose size={30} onClick={()=>setIsNavOpen(false) }/>

          </div>


{/* before signin  */}
<div className='hidden'>
<div className='w-full flex justify-center items-center p-5'>
                <label
                className={`flex justify-center items-center w-full h-12 p-0.5 rounded-full cursor-pointer bg-[#104B53]   `}
              >
                <BsUpload size={13} color="#fff" className="" />
                <span className={`text-xs text-white  font-[500] pl-2`}>Upload Resume</span>
                <input type="file" className="hidden" />
              </label>

            </div>

            <hr />

            <div className='w-full flex justify-center items-center p-5'>
              <Link to={''}>

                  Employer/Job Poster
              </Link>
            </div>
            
            <hr />
</div>

              {/* after signIn  */}

              <div className='w-full'>
       
      <div className="flex flex-col   w-full">
        <div className="w-full flex justify-start items-center space-x-3 p-5 relative before:absolute before:w-full before:bottom-[-10px] before:bg-[#E3E7EA] before:h-[1px] ">
          <p className="text-xs text-[#104B53] w-10 h-10 flex justify-center items-center bg-[#CBFFFC] rounded-full ">
            J
          </p>

          <div className="flex flex-col">
            <h1 className="text-lg">Johnson</h1>
            <p className="text-sm">johnson@example.com </p>
          </div>
        </div>

        <ul className="flex flex-col p-5 space-y-6 pt-5 relative  before:absolute before:w-full before:bottom-[-10px] before:bg-[#E3E7EA] before:h-[1px]">
          {accountOptions?.map((item, id) => {
            return (
              <Link  to={item.link || ''} className="flex justify-start items-center space-x-2 p-1" key={id} onClick={handlNavBar}>
                {item.icon}
                <p className="text-sm ">{item.name}</p>
              </Link>
            );
          })}

          <hr />

          <li className="flex justify-start items-center space-x-2 p-1">
            <GoSignOut color="#FF4444" size={30} />
            <p className="text-sm text-[#FF4444] ">Sign Out</p>
          </li>
        </ul>
      </div>
    </div>
 
 
      </div>

    </div>
  );
};

export default Header;

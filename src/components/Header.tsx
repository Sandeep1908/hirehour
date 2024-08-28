import React, { useState } from 'react';
import Logo from '../assets/logo/hirehour.png';
import { RiTodoLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { BsSuitcaseLg } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';

import { BsUpload } from 'react-icons/bs';
import NotificationModal from './modals/NotificationModal';
import AccountModal from './modals/AccountModal';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isNotification, setIsNotificationOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-20 bg-white  ">
      <div className="w-full max-w-[1300px] m-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-5">
          <div className="flex justify-center items-center space-x-3">
            <img src={Logo} className="w-10 h-10 object-contain" alt="logo-hirehour" />
            <p className="font-bold text-xl tracking-wide">HireHours</p>
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
              <IoIosMenu size={40} />
            </div>
          </div>
        </div>
        {/* Right Header without signup End */}

        {/* With SignIn */}

        <div className="md:flex justify-center items-center space-x-7 hidden">
          <div className="flex justify-center items-center space-x-5">
            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <RiTodoLine size={25} />
              <Link to={'/right-to-represent'} className="font-[200] text-[10px]">
                RTR
              </Link>
            </div>

            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <BiMessageDetail size={25} />
              <Link  to='/messages' className="font-[200] text-[10px]">Message</Link>
            </div>

            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <BsSuitcaseLg size={25} />
              <Link to={'/myjobs'} className="font-[200] text-[10px]">
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
            onClick={() => setIsAccountOpen((p) => !p)}
          >
            <div className="flex justify-center items-center space-x-3">
              <p className="w-8 h-8 text-sm rounded-full bg-[#CBFFFC] flex justify-center items-center">
                J
              </p>
              <p className="text-sm">Johnson</p>
            </div>

            <MdOutlineKeyboardArrowDown
              className={`${isAccountOpen ? 'rotate-180 transition-all duration-500' : ''}`}
            />

            {/* Account Modal  */}

            <AccountModal isAccountOpen={isAccountOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

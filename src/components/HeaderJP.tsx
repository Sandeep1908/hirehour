import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo/hirehour.svg';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';

import NotificationModal from './job-seekers/modals/NotificationModal';
import AccountModal from './job-posters/modals/AccountModal';

import { Link } from 'react-router-dom';

import msgLogo from '../assets/header/message.svg';
import dashLogoClose from '../assets/header/X.png';
import dashLogoOpen from '../assets/header/dashclose.png';

import { useLocation } from 'react-router-dom';
import useHeaderContext from '../context/HeaderContext';

const HeaderJP: React.FC = () => {
  const [isNotification, setIsNotificationOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const params = useLocation().pathname;
  const { isDashboardOpen, setIsDashBoardOpen, setIsDashboardMobileNav ,isDashboardMobileNav} = useHeaderContext();
  const pathname=useLocation().pathname.includes('/dashboard')
   

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isNavOpen]);

  return (
    <div className="w-full h-14 bg-white relative   ">
      <div className="w-full  flex justify-between items-center p-2 px-4">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-5">
          <div className="flex justify-center items-center space-x-3 ">
            {pathname &&    <img
              src={isDashboardOpen?dashLogoClose:dashLogoOpen}
              className="w-7 h-7 cursor-pointer hidden md:block"
              alt=""
              onClick={() => setIsDashBoardOpen(!isDashboardOpen)}
            />}

            <IoIosMenu size={40} onClick={() => setIsDashboardMobileNav(!isDashboardMobileNav)} className="md:hidden" />

          
            <Link to={'/'}>
              <img src={Logo} className="w-36 h-10 object-contain" alt="logo-hirehour" />
            </Link>
          </div>
        </div>
        {/* Logo End  */}

        {/* Right Header without signup */}

        <div className="">
          <div className="">
            <div className="flex justify-center items-center space-x-5">
              <p className="w-24 h-8 text-xs flex justify-center items-center border-[1px] rounded-full border-[#104B53] text-[#104B53]   cursor-pointer">
                Sign In
              </p>

              <p className="text-xs tracking-wide hidden md:block ">
                <Link to={''}> Employer </Link>/<Link to={'/job-poster'}> Job Poster</Link>
              </p>
            </div>
          </div>
        </div>
        {/* Right Header without signup End */}

        {/* With SignIn */}

        <div className="hidden md:flex justify-center items-center space-x-7   ">
          <div className="flex justify-center items-center space-x-7">
            <Link to={'/messages'}>
              <div className=" flex flex-col  space-y-1 justify-center items-center cursor-pointer">
                <img src={msgLogo} alt="rtr-header" className="w-5" />
                <p
                  className={`font-[300] text-xs ${params === '/messages' ? 'font-[500] text-[#104B53]' : ''}`}
                >
                  {' '}
                  Message
                </p>
              </div>
            </Link>

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
            onClick={() => setIsAccountOpen(!isAccountOpen)}
          >
            <div className="flex justify-center items-center space-x-2">
              <p className="w-8 h-8 text-sm rounded-full bg-[#CBFFFC] flex justify-center items-center">
                M
              </p>
              <p className="text-sm">Mathew</p>
            </div>

            <MdOutlineKeyboardArrowDown
              className={`${isAccountOpen ? 'rotate-180 transition-all duration-500' : ''}`}
            />

            {/* Account Modal  */}

            <AccountModal isAccountOpen={isAccountOpen} setIsAccountOpen={setIsAccountOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderJP;

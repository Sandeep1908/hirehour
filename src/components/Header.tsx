import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo/hirehour.svg';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

import { BsUpload } from 'react-icons/bs';
import NotificationModal from './job-seekers/modals/NotificationModal';
import AccountModal from './job-seekers/modals/AccountModal';

import { CgProfile } from 'react-icons/cg';
import { RiListSettingsLine } from 'react-icons/ri';
import { RiUserSettingsLine } from 'react-icons/ri';
import { VscNotebook } from 'react-icons/vsc';
import { GoSignOut } from 'react-icons/go';
import { Link } from 'react-router-dom';

import rtrLogo from '../assets/header/rtr.svg';
import msgLogo from '../assets/header/message.svg';

import jobLogo from '../assets/header/jobs.svg';

import { useLocation } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUserDetails } from '../utils/jobseekers/getUserDetails';
import {isCandidateAuthenticated} from './isAuthenicated';

const Header: React.FC = () => {
  const [isNotification, setIsNotificationOpen] = useState<boolean>(false);
  const [isAccountOpen, setIsAccountOpen] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
 
  
 
  const { data: userDetails } = useQuery({
    queryKey: ['userDetails'],
    queryFn: fetchUserDetails,
    enabled:isCandidateAuthenticated()
  });
  const queryClient=useQueryClient()
  const params=useLocation().pathname

  const handlNavBar = () => {
    setIsAccountOpen(false);
    setIsNavOpen(false);
  };

  useEffect(() => {
    if (isCandidateAuthenticated()) {
      queryClient.invalidateQueries({queryKey:['userDetails']}); 
    }
  }, [isCandidateAuthenticated(), queryClient]);

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

  const accountOptions = [
    {
      icon: <CgProfile size={30} />,
      name: 'Profile',
      link: '/profile',
    },
    {
      icon: <RiListSettingsLine size={30} />,
      name: 'Job Preference',
      link: '/job-preference',
    },

    {
      icon: <RiUserSettingsLine size={30} />,
      name: 'Account Setting',
      link: '/account',
    },
    {
      icon: <VscNotebook size={30} />,
      name: 'Our Blog',
      link: '',
    },
  ];

  const isParameters = [
    '/signup',
    '/signin',
    '/upload-resume',
    '/additional-information'
  ].includes(params);
  return (
    <div className={`w-full h-14 bg-white relative   ${isParameters?'hidden':''}`}>
      <div className="w-full  flex justify-between items-center p-2 px-4">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-5">
          <div className="flex justify-center items-center space-x-3 ">
            <Link to={'/'}>
              <img src={Logo} className="w-36 h-10 object-contain" alt="logo-hirehour" />
            </Link>
          </div>

          {isCandidateAuthenticated() && (
            <label
              className={`md:flex justify-center items-center w-32 h-7 p-0.5 rounded-full cursor-pointer bg-[#104B53]   hidden`}
            >
              <BsUpload size={13} color="#fff" className="" />
              <span className={`text-[10px] text-white  font-[500] pl-2`}>Upload Resume</span>
              <input type="file" className="hidden" />
            </label>
          )}
        </div>
        {/* Logo End  */}

        {/* Right Header without signup */}

        {!isCandidateAuthenticated() && (
          <div className="">
            <div className="">
              <div className="flex justify-center items-center space-x-5">
                <Link
                  to={'/signin'}
                  className="w-24 h-8 text-xs flex justify-center items-center border-[1px] rounded-full border-[#104B53] text-[#104B53]   cursor-pointer"
                >
                  Sign In
                </Link>

                <p className="text-xs tracking-wide hidden md:block ">
                  <Link to={'/job-poster'}> Employer </Link>/
                  <Link to={'/job-poster'}> Job Poster</Link>
                </p>
                <IoIosMenu size={40} onClick={() => setIsNavOpen(true)} className="md:hidden" />
              </div>
            </div>
          </div>
        )}

        {/* Right Header without signup End */}

        {/* With SignIn */}

        {isCandidateAuthenticated() && (
          <div className=" hidden md:flex justify-center items-center space-x-7     ">
            <div className="flex justify-center items-center space-x-7">
              <Link to={'/right-to-represent'}>
                <div
                  className={` relative flex flex-col space-y-1 justify-center items-center cursor-pointer  `}
                >
                  <p className="w-3 h-3 bg-[#FF3837] rounded-full absolute  top-[-1px]   right-[-3px] text-[7px] text-white flex justify-center items-center">
                    2
                  </p>

                  <img src={rtrLogo} alt="rtr-header" className="w-5" />
                  <p
                    className={`font-[300] text-xs ${params === '/right-to-represent' ? 'font-[500] text-[#104B53]' : ''}`}
                  >
                    {' '}
                    RTR
                  </p>
                </div>
              </Link>

              <Link to={'/messages'}>
                <div className="relative flex flex-col  space-y-1 justify-center items-center cursor-pointer">
                  <p className="w-3 h-3 bg-[#FF3837] rounded-full absolute  top-[-1px]  right-3 text-[7px] text-white flex justify-center items-center">
                    2
                  </p>
                  <img src={msgLogo} alt="rtr-header" className="w-5" />
                  <p
                    className={`font-[300] text-xs ${params === '/messages' ? 'font-[500] text-[#104B53]' : ''}`}
                  >
                    {' '}
                    Message
                  </p>
                </div>
              </Link>

              <Link to={'/myjobs'}>
                <div className=" relative flex flex-col space-y-1 justify-center items-center cursor-pointer">
                  <img src={jobLogo} alt="rtr-header" className="w-5" />

                  <p
                    className={`font-[300] text-xs ${params === '/myjobs' ? 'font-[500] text-[#104B53]' : ''}`}
                  >
                    {' '}
                    MyJobs
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
              <div className="flex justify-center items-center space-x-3">
                <p className="w-8 h-8 text-sm rounded-full bg-[#CBFFFC] flex justify-center items-center">
                  {userDetails?.user?.firstName.charAt(0)}
                </p>
                <p className="text-sm">{userDetails?.user?.firstName}</p>
              </div>

              <MdOutlineKeyboardArrowDown
                className={`${isAccountOpen ? 'rotate-180 transition-all duration-500' : ''}`}
              />

              {/* Account Modal  */}

              <AccountModal isAccountOpen={isAccountOpen} setIsAccountOpen={setIsAccountOpen} username={userDetails?.user?.firstName} email={userDetails?.user?.email} />
            </div>
          </div>
        )}
      </div>

      {/* mobile view  */}

      <div
        className={`w-full h-screen bg-white fixed top-0 z-10 transition-all duration-500  ${isNavOpen ? 'left-[0%]' : 'left-[100%]'}`}
      >
        <div className="w-full flex justify-between items-center p-4">
          <Link to={'/'}>
            <img src={Logo} alt="home-logo" className="w-32" />
          </Link>

          <IoMdClose size={30} onClick={() => setIsNavOpen(false)} />
        </div>

        {/* before signin  */}
        <div className="hidden">
          <div className="w-full flex justify-center items-center p-5">
            <label
              className={`flex justify-center items-center w-full h-12 p-0.5 rounded-full cursor-pointer bg-[#104B53]   `}
            >
              <BsUpload size={13} color="#fff" className="" />
              <span className={`text-xs text-white  font-[500] pl-2`}>Upload Resume</span>
              <input type="file" className="hidden" />
            </label>
          </div>

          <hr />

          <div className="w-full flex justify-center items-center p-5">
            <Link to={''}>Employer/Job Poster</Link>
          </div>

          <hr />
        </div>

        {/* after signIn  */}

        <div className="w-full">
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
              <Link
                to={'/right-to-represent'}
                className="flex justify-start items-center space-x-2 p-1"
                onClick={handlNavBar}
              >
                <div className="flex justify-start items-center space-x-2 p-1">
                  <img src={rtrLogo} className="w-[30px]" alt="rtr-header" />
                  <p className={` text-sm `}> RTR</p>
                </div>
              </Link>

              <Link to={'/messages'} onClick={handlNavBar}>
                <div className="flex justify-start items-center space-x-2 p-2">
                  <img src={msgLogo} className="w-[30px]" alt="rtr-header" />
                  <p className={` text-sm `}> Message</p>
                </div>
              </Link>

              <Link to={'/myjobs'} onClick={handlNavBar}>
                <div className="flex justify-start items-center space-x-2 p-2">
                  <img src={jobLogo} className="w-[30px]" alt="rtr-header" />
                  <p className={` text-sm `}> MyJobs</p>
                </div>

                <hr className="mt-3" />
              </Link>
              {accountOptions?.map((item, id) => {
                return (
                  <Link
                    to={item.link || ''}
                    className="flex justify-start items-center space-x-2 p-1"
                    key={id}
                    onClick={handlNavBar}
                  >
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

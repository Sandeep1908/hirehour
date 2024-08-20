import React from 'react';
import Logo from '../assets/logo/hirehour.png';
import { BsUpload } from 'react-icons/bs';
import { RiTodoLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { BsSuitcaseLg } from 'react-icons/bs';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <div className="w-full h-16 ">
      <div className="w-full max-w-[1300px] m-auto flex justify-between items-center p-3">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-5">
          <div className="flex justify-center items-center space-x-3">
            <img
              src={Logo}
              className="w-10 h-10 object-contain"
              alt="logo-hirehour"
            />
            <p className="font-bold text-xl">HireHours</p>
          </div>

          <div className="flex justify-center items-center  bg-[#104B53] w-36 h-7 p-0.5  rounded-full cursor-pointer">
            <BsUpload size={13} color="#fff" className="ml-2 mr-2" />{' '}
            <p className="text-xs mr-2 text-white font-[500]">
              {' '}
              Upload Resume{' '}
            </p>
          </div>
        </div>
        {/* Logo End  */}

        {/* Right Header without signup */}

        <div className="hidden">
          <div className="">
            <div className="flex justify-center items-center space-x-5">
              <p className="w-24 h-9 flex justify-center items-center border-[1px] rounded-full border-[#104B53] text-[#104B53] text-sm cursor-pointer">
                Sign In
              </p>

              <p className="text-sm tracking-wide">Employer / Job Poster</p>
            </div>
          </div>
        </div>
        {/* Right Header without signup End */}

        {/* With SignIn */}

        <div className="flex justify-center items-center space-x-7">
          <div className="flex justify-center items-center space-x-5">
            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <RiTodoLine size={16} />
              <p className="font-[200] text-[10px]">RTR</p>
            </div>

            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <BiMessageDetail size={16} />
              <p className="font-[200] text-[10px]">Message</p>
            </div>

            <div className=" flex flex-col justify-center items-center cursor-pointer">
              <BsSuitcaseLg size={16} />
              <p className="font-[200] text-[10px]">My jobs</p>
            </div>

            <div className=" relative flex flex-col justify-center items-center cursor-pointer">
              <IoNotificationsOutline size={20} />

              <p className="w-2 h-2 bg-[#FF3837] rounded-full absolute  top-[-1px] right-[1px]"></p>
            </div>
          </div>

          {/* Account  */}

          <div className="flex justify-center items-center space-x-1">
            <div className="flex justify-center items-center space-x-3">
              <p className="w-8 h-8 text-sm rounded-full bg-[#CBFFFC] flex justify-center items-center">
                J
              </p>
              <p className="text-sm">Johnson</p>
            </div>

            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

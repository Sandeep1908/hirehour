import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type NotificationModalProps = {
  isNotification: boolean;
  setIsNotification: (e: boolean) => void;
};

const NotificationModal: React.FC<NotificationModalProps> = ({
  isNotification,
  setIsNotification,
}) => {
  return (
    <div
      className={`w-64 max-h-64 overflow-auto p-4 bg-white absolute z-[10]  top-14 right-0 rounded-lg transition-all duration-500 shadow-2xl ${isNotification ? 'opacity-1 translate-y-[-10px]' : 'opacity-0  z-[-20]'}`}
    >
      <div className="relative w-full flex justify-between p-2 items-center before:absolute before:w-full before:bottom-0 before:bg-[#E3E7EA] before:h-[1px]">
        <h1 className="font-semibold">Notifications</h1>
        <RxCross2 onClick={() => setIsNotification(false)} />
      </div>

      <div className="flex flex-col pt-5 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center space-x-3">
            <p className="text-md text-[#104B53] w-10 h-10 flex justify-center items-center bg-[#CBFFFC] rounded-full ">
              M
            </p>

            <div className="flex flex-col">
              <h1 className="text-sm">Mathew</h1>
              <p className="text-[10px]">Lorem Ipsum is simply </p>
              <p className="text-[10px]">0 min</p>
            </div>
          </div>

          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;

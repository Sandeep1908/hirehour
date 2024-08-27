import React from 'react';
import arrow_down from '../assets/arrow-down.svg';

const SearchFilter: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
      <p className="text-[14px] font-normal text-[#114B53]">Remote</p>
      <img src={arrow_down} alt="" />
    </div>
  );
};

export default SearchFilter;

import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const MyJobsDashBoard: React.FC = () => {
  const jobFilters = ['Active Jobs', 'Paused Jobs', 'Closed Jobs', 'Co-Hiring'];
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  return (
    <div>
      {/* filters  */}
      <div className="p-7">
        <ul className="max-w-[500px]   rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
          {jobFilters?.map((item, i) => {
            return (
              <li
                className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                onClick={() => setJobFilterIdx(i)}
              >
                <span>{item}</span>{' '}
                <span
                  className={`bg-[#104B53]  w-6   text-center rounded-lg ${jobFilterIdx === i ? 'bg-white text-[#104B53] ' : 'text-white'} `}
                >
                  {i}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* all jobs  */}
      <div className="w-full   p-5 space-y-3 overflow-auto h-[60vh]">
        {Array.from({ length: 6 }).map((_, i) => {
          return (
            <div key={i} className="h-auto border flex flex-col rounded-lg">
              <div className="w-full flex justify-between items-center bg-[#F2F2F5]   p-2 ">
                <div className="  flex items-start space-x-2 ">
                  <input type="checkbox" />
                  <div className="flex flex-col justify-start items-start bg-white p-2 rounded-lg space-y-1 ">
                    <h1 className="text-sm text-[#104B53] font-[500]">Java Full Stack</h1>
                    <ul className="flex text-[8px] space-x-2">
                      <li>Dribble</li>
                      <li>Allen, Texas, United States</li>
                    </ul>
                  </div>
                </div>

                <div className="flex  space-x-4 justify-center items-center ">
                  <div className="flex flex-col justify-center items-center p-1 space-y-1 bg-white rounded-lg ">
                    <span className="text-xs">2</span>
                    <h1 className="text-[10px] text-[#104B53] font-[600]">
                      Hire credit spend on job
                    </h1>
                  </div>

                  <div className="">
                    <select
                      name=""
                      id=""
                      className="bg-[#E3F5EF] text-[10px] w-16 text-center h-6 rounded-full border border-[#33A070] text-[#33A070] outline-none"
                    >
                      <option value="">Active</option>
                    </select>
                  </div>

                  <BsThreeDotsVertical />
                </div>
              </div>

              <div className="w-full flex justify-between items-center p-3">
                <div className="w-full max-w-xl ">
                  <ul className="flex justify-between">
                    {Array.from({ length: 4 }).map((_, i) => {
                      return (
                        <li className="flex flex-col border-r p-3">
                          <span className="text-sm">24</span>
                          <span className="text-[#104B53] text-xs font-semibold">Job Views</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-[10px] text-[#3A3A3C]">Posted by : Methew</p>
                  <p className="text-[10px] text-[#3A3A3C]">Posted date : 06/16/24</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyJobsDashBoard;

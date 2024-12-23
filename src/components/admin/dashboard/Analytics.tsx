import { useState } from 'react';
import { MdOutlineDownload } from 'react-icons/md';
import SummeryCards from './Analytics/SummeryCards';
import MultilineChartWithLegend from './Analytics/jobseekers/MultiLineChartWithLegen';
import SearchTitleStats from './Analytics/jobseekers/SearchTitleStats';
import TrafficByLocationChart from './Analytics/jobseekers/TrafficByLocation';
import { getUserStats } from '../../../utils/admin/getUserStats';
import { useQuery } from '@tanstack/react-query';
 
// import JobSearchTitle from './Analytics/jobseekers/JobSearchTitle/JobSearchTitle';
// import TrafficByLocation from './Analytics/jobseekers/TrafficByLocation/TrafficByLocation';

 

const JobSeekers: React.FC  = () => {
  const { data: stats } = useQuery({
    queryKey: ['userstats'],
    queryFn: getUserStats,
  });
  const statistics=stats?.data?.data

 
  const info = [
    {
      name: 'Footprint',
      total: statistics?.totalUsers,
      bgColor: '#EFFDFD',
    },
    {
      name: 'Total User',
      total: statistics?.totalUsers,
      bgColor: '#F2F2F5',
    },
    {
      name: 'New User',
      total: statistics?.newUsers,
      bgColor: '#EFFDFD',
    },
    {
      name: 'Active User',
      total: statistics?.activeUserCount,
      bgColor: '#F2F2F5',
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full">
        {info?.map((item, i) => {
          return (
            <SummeryCards key={i} total={item.total} bgColor={item.bgColor} name={item.name} />
          );
        })}
      </div>

      {/* lineGraph  */}

      <div className="w-full bg-[#F2F2F5] h-auto rounded-md mt-3  p-3  ">
        <MultilineChartWithLegend />
      </div>

      <div className="w-full   h-fit mt-3 flex justify-between   space-x-2">
        <div
          className="w-full max-w-[50%] bg-[#F2F2F5] rounded-md p-2"
         
        >
          <SearchTitleStats />
        </div>

        <div
          className="w-full max-w-[50%] bg-[#F2F2F5] rounded-md p-2"
         
        >
          <TrafficByLocationChart />
        </div>
      </div>
    </div>
  );
};

const Recuriter: React.FC  = () => {
  const info = [
    {
      name: 'Footprint',
      total: '200K',
      bgColor: '#EFFDFD',
    },
    {
      name: 'Total User',
      total: '100K',
      bgColor: '#F2F2F5',
    },
    {
      name: 'New User',
      total: '20K',
      bgColor: '#EFFDFD',
    },
    {
      name: 'Active User',
      total: '70K',
      bgColor: '#F2F2F5',
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex justify-between w-full">
        {info?.map((item, i) => {
          return (
            <SummeryCards key={i} total={item.total} bgColor={item.bgColor} name={item.name} />
          );
        })}
      </div>

      {/* lineGraph  */}

      <div className="w-full bg-[#F2F2F5] h-auto rounded-md mt-3  p-3  ">
        <MultilineChartWithLegend />
      </div>

      <div className="w-full   h-fit mt-3 flex justify-between   space-x-2">
        <div
          className="w-full max-w-[50%] bg-[#F2F2F5] rounded-md p-2"
          
        >
          <SearchTitleStats />
        </div>

        <div
          className="w-full max-w-[50%] bg-[#F2F2F5] rounded-md p-2"
           
        >
          <TrafficByLocationChart />
        </div>
      </div>
    </div>
  );
};

 


const Analytics: React.FC = () => {
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  // const [isJobSeekersSubComponent, setIsJobSeekersSubComponents] = useState<number>();


  

  const jobFilters = [
    {
      label: 'Job Seekers',
      component: <JobSeekers/>,
    },
    {
      label: 'Recruiter',
      component: <Recuriter/>,
    },
  ];
 
  return (
    <div>

      
        <>
          <div className="flex justify-between items-center p-2">
            <div className="flex items-center space-x-4">
              <h1 className="text-sm font-semibold">Analytics</h1>

              <select name="" id="" className="text-xs outline-none">
                <option value="">Today</option>
              </select>
            </div>

            <p className=" flex justify-center items-center font-[500] space-x-1  text-[#104B53] rounded-full text-xs">
              <MdOutlineDownload size={15} /> <span>Export</span>
            </p>
          </div>
          <hr />

          {/* tabs  */}
          <div className="p-2 md:max-w-[300px]  w-screen overflow-auto scroll-hidden">
            <ul className="  rounded-full flex w-full   text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
              {jobFilters?.map((item, i) => {
                return (
                  <li
                    className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                    onClick={() => setJobFilterIdx(i)}
                  >
                    <span className="w-20 md:w-auto">{item.label}</span>{' '}
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
          <div className="w-full   p-3 space-y-3    overflow-y-auto h-[90vh] md:h-[75vh]">
            {jobFilters?.map((item, i) => {
              if (jobFilterIdx === i) {
                return (
                  <div className="w-full h-full" key={i}>
                    {item.component}
                  </div>
                );
              }
            })}
          </div>
        </>
     
    </div>
  );
};

export default Analytics;

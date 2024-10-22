
import { useState } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import ProgressBar from '../../../../../common/Progressbar';


const JobSearches: React.FC = () => {
    const columns = [
      'Search Title',
      'Number of Searches',
      'Stats',
      
    ];
    return (
      <div className="space-y-3 ">
        <table className="table-auto w-full border rounded-lg   ">
          <thead className="bg-[#F2F2F5] rounded-md  ">
            <tr className="text-sm ">
              {columns?.map((col, i) => {
                return (
                  <th key={i} className="p-2 font-[400] text-xs text-[#3C3C3D]">
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-center">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <tr className=" border" key={i}>
                  <td className="text-[10px] p-3">Java</td>
  
                  <td className="text-[10px] p-2">20</td>
                  <td className="text-[10px] p-2 flex justify-center items-center">
                    <ProgressBar percentage={24}/>
                  </td>
                   
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const JobPosted: React.FC = () => {
    const columns = [
      'Search Title',
      'Number of Job Posted',
      'Stats',
      
    ];
    return (
      <div className="space-y-3 ">
        <table className="table-auto w-full border rounded-lg   ">
          <thead className="bg-[#F2F2F5] rounded-md  ">
            <tr className="text-sm ">
              {columns?.map((col, i) => {
                return (
                  <th key={i} className="p-2 font-[400] text-xs text-[#3C3C3D]">
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-center">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <tr className=" border" key={i}>
                  <td className="text-[10px] p-3">Python Developer</td>
  
                  <td className="text-[10px] p-2">20</td>
                  <td className="text-[10px] p-2 flex justify-center items-center">
                    <ProgressBar percentage={24}/>
                  </td>
                   
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const ResumePresents: React.FC = () => {
    const columns = [
      'Search Title',
      'Number of Resumes',
      'Stats',
      
    ];
    return (
      <div className="space-y-3 ">
        <table className="table-auto w-full border rounded-lg   ">
          <thead className="bg-[#F2F2F5] rounded-md  ">
            <tr className="text-sm ">
              {columns?.map((col, i) => {
                return (
                  <th key={i} className="p-2 font-[400] text-xs text-[#3C3C3D]">
                    {col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-center">
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <tr className=" border" key={i}>
                  <td className="text-[10px] p-3">Java Developer</td>
  
                  <td className="text-[10px] p-2">20</td>
                  <td className="text-[10px] p-2 flex justify-center items-center">
                    <ProgressBar percentage={24}/>
                  </td>
                   
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
const JobSearchTitle:React.FC=()=>{
const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const filtersItems = [
    {
      label: 'Job Searches',
      component: <JobSearches/>,
    },

    {
      label: 'Job Posted',
      component: <JobPosted/>,
    },

    {
      label: 'Resume Present',
      component: <ResumePresents/>,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-lg font-semibold">Job Search Tittles</h1>
        <p className=" flex justify-center items-center font-[500] space-x-1  text-[#104B53] rounded-full text-xs">
          <MdOutlineFileDownload size={15} /> <span>Export</span>
        </p>
      </div>
      <hr />

      <div className="p-4 bg-white  rounded-lg space-y-3">
        <div className="p-2 md:max-w-[600px]  w-screen overflow-x-auto scroll-hidden">
          <ul className="  rounded-full flex w-full   text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
            {filtersItems?.map((item, i) => {
              return (
                <li
                  className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                  onClick={() => setJobFilterIdx(i)}
                >
                  <span className=" md:w-auto">{item.label}</span>{' '}
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

       
          <div className="px-2">
            <select
              name=""
              id=""
              className="  text-[10px] w-16 text-center h-6 rounded-full border border-[#6B7588] text-[#6B7588] outline-none"
            >
              <option value="">Date</option>
            </select>
          </div>
    

        <div className="w-full   p-3 space-y-3    overflow-y-auto h-[90vh] md:h-[75vh]">
          {filtersItems?.map((item, i) => {
            if (jobFilterIdx === i) {
              return (
                <div className="w-full h-full" key={i}>
                  {item.component}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}


export default JobSearchTitle;
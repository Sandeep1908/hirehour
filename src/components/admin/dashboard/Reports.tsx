import { useState } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

const JobSeekers: React.FC = () => {
  const columns = ['Full Name', 'Email Address', 'Reason', 'Reson in Detials', 'Action'];
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
                <td className="text-[10px] p-3">Victor</td>

                <td className="text-[10px] p-2">Victor@gmail.com</td>
                <td className="text-[10px] p-2">Seems like fake job</td>
                <td className="text-[10px] p-2">Lorem Ipsum is simply dummy te....</td>

                <td className="flex justify-center items-center p-2">
                  <p className="text-[10px]   w-20 h-6 rounded-full border border-[#104B53] flex justify-center items-center">
                    View Job
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const Recruiter: React.FC = () => {
  const columns = ['Full Name', 'Email Address','Company', 'Reason', 'Reson in Detials'];
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
                <td className="text-[10px] p-3">Victor</td>

                <td className="text-[10px] p-2">Victor@gmail.com</td>
                <td className="text-[10px] p-2">Infotech</td>

                <td className="text-[10px] p-2">Seems like fake job</td>
                <td className="text-[10px] p-2">Lorem Ipsum is simply dummy te....</td>

                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const Reports: React.FC = () => {
  const reportFilter = [
    {
      label: 'JobSeekers',
      component: <JobSeekers/>,
    },
    {
      label: 'Recruiter',
      component: <Recruiter/>,
    },
    
    
  ];
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);

  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-sm font-semibold">Reports</h1>
        <p className=" flex justify-center items-center font-[500] space-x-1  text-[#104B53] rounded-full text-xs">
          <MdOutlineFileDownload size={15} /> <span>Export</span>
        </p>
      </div>
      <hr />

       {/* tabs  */}
       <div className="p-2 md:max-w-[300px]  w-screen overflow-auto scroll-hidden">
        <ul className="  rounded-full flex w-full   text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
          {reportFilter?.map((item, i) => {
            return (
              <li
                className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                onClick={() => setJobFilterIdx(i)}
              >
                <span className='w-20 md:w-auto'>{item.label}</span>{' '}
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
        {reportFilter?.map((item, i) => {
          if (jobFilterIdx === i) {
            return <div className='w-full h-full' key={i}>{item.component}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default Reports;

import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineFileDownload } from 'react-icons/md';

const AllSales: React.FC<{ onSelectCompany: (company: string) => void }> = ({
  onSelectCompany,
}) => {
  const columns = ['Full name', 'Email', 'Date', 'Company name', 'owner', 'Amount'];
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
                <td className="text-[10px] p-2">11/10/2024</td>
                <td className="text-[10px] p-2" onClick={() => onSelectCompany('Infotech')}>
                  Infotech
                </td>
                <td className="text-[10px] p-2 flex justify-center items-center space-x-2">
                  <p>Peter</p>
                  <p className="bg-[#F2F2F5] text-[8px] text-[#6B7588] rounded-full px-[5px]">
                    Team 1
                  </p>
                </td>
                <td className="text-[10px] p-2">$ 400</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Refunds: React.FC = () => {
  const columns = [
    'Full name',
    'Email',
    'Date',
    'Company name',
    'owner',
    'Amount',
    'Refund Status',
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
                <td className="text-[10px] p-3">Victor</td>

                <td className="text-[10px] p-2">Victor@gmail.com</td>
                <td className="text-[10px] p-2">11/10/2024</td>
                <td className="text-[10px] p-2">Infotech</td>
                <td className="text-[10px] p-2 flex justify-center items-center space-x-2">
                  <p>Peter</p>
                  <p className="bg-[#F2F2F5] text-[8px] text-[#6B7588] rounded-full px-[5px]">
                    Team 1
                  </p>
                </td>
                <td className="text-[10px] p-2">$ 400</td>

                <td className="text-[10px] p-2 flex flex-col justify-center items-center space-y-1">
                  <p className="w-28 h-5 rounded-full flex justify-center items-center bg-[#FFF1C6] text-[#FFC349]">
                    Pending
                  </p>
                  <p className="text-xs font-[500]">
                    <span>Initiated by:</span>Arls
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

const TeamSales: React.FC = () => {
  const columns = ['Team name', 'Number of Members', 'Total Sales done', 'Action'];
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
                <td className="text-[10px] p-3">Team {i}</td>

                <td className="text-[10px] p-2">10</td>
                <td className="text-[10px] p-2">$2000</td>
                <td className="text-[10px] p-2 flex justify-center items-center">
                  <p className="text-[10px] font-[500] text-[#104B53] border w-20 rounded-full border-[#104B53] h-6 flex justify-center items-center">
                    View Team
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

const IndividualSales: React.FC = () => {
  const columns = ['Full name', 'Email', 'Role', 'Total Sales', 'Action'];
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
                <td className="text-[10px] p-2 flex justify-center items-center space-x-2">
                  <p>Peter</p>
                  <p className="bg-[#F2F2F5] text-[8px] text-[#6B7588] rounded-full px-[5px]">
                    Team 1
                  </p>
                </td>
                <td className="text-[10px] p-2">20</td>
                <td className="text-[10px] p-2 flex justify-center items-center space-x-3">
                  <p className="text-[10px] font-[600] text-[#104B53] border w-20 rounded-full border-[#104B53] h-6 flex justify-center items-center">
                    All Sales
                  </p>
                  <p className="text-[10px] font-[500] text-white border w-20 rounded-full bg-[#104B53] h-6 flex justify-center items-center">
                    Message
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

//company details

const Jobs: React.FC = () => {
  return (
    <div className="space-y-3 ">
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <div className="w-full   border flex flex-col rounded-lg" key={i}>
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

              <BsThreeDotsVertical className="md:hidden" />
              <div className="  space-x-4 justify-center items-center hidden md:flex ">
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

            <div className="w-full flex flex-col md:flex-row justify-between items-center p-3">
              <div className="w-full max-w-xl ">
                <ul className="flex justify-between pl-5">
                  {Array.from({ length: 4 }).map((_, i) => {
                    return (
                      <li key={i} className="flex flex-col border-r p-2">
                        <span className="text-sm">24</span>
                        <span className="text-[#104B53] text-xs font-semibold">Job Views</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="w-full md:w-auto flex justify-between items-center">
                <div className="flex flex-col space-x-4 justify-center items-center md:hidden ">
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
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-[10px] text-[#3A3A3C]">Posted by : Methew</p>
                  <p className="text-[10px] text-[#3A3A3C]">Posted date : 06/16/24</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SalesMenu: React.FC = () => {
  const columns = ['Full name', 'Email', 'Date', 'Company name', 'owner', 'Amount'];
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
                <td className="text-[10px] p-2">11/10/2024</td>
                <td className="text-[10px] p-2">Infotech</td>
                <td className="text-[10px] p-2 flex justify-center items-center space-x-2">
                  <p>Peter</p>
                  <p className="bg-[#F2F2F5] text-[8px] text-[#6B7588] rounded-full px-[5px]">
                    Team 1
                  </p>
                </td>
                <td className="text-[10px] p-2">$ 400</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const CompanyDetails: React.FC<{ company: string; onBack: () => void }> = ({ company, onBack }) => {
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const filtersItems = [
    {
      label: 'Jobs',
      component: <Jobs />,
    },

    {
      label: 'User',
      component: '',
    },

    {
      label: 'Sales',
      component: <SalesMenu />,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-lg font-semibold" onClick={()=>onBack()}>{company}</h1>
        <p className=" flex justify-center items-center font-[500] space-x-1  text-[#104B53] rounded-full text-xs">
          <MdOutlineFileDownload size={15} /> <span>Export</span>
        </p>
      </div>
      <hr />

      <div className="p-4 bg-white  rounded-lg space-y-3">
        <div className="p-2 md:max-w-[300px]  w-screen overflow-x-auto scroll-hidden">
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

        {jobFilterIdx === 0 && (
          <div className="px-2">
            <select
              name=""
              id=""
              className="bg-[#E3F5EF] text-[10px] w-16 text-center h-6 rounded-full border border-[#33A070] text-[#33A070] outline-none"
            >
              <option value="">Active</option>
            </select>
          </div>
        )}

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
};

const Sales: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const jobFilters = [
    {
      label: 'All Sales',
      component: <AllSales onSelectCompany={(company) => setSelectedCompany(company)} />,
    },
    {
      label: 'Team Sales',
      component: <TeamSales />,
    },
    {
      label: 'Individual Sales',
      component: <IndividualSales />,
    },
    {
      label: 'Refunds',
      component: <Refunds />,
    },

    {
      label: 'Bulk Hiring',
      component: '',
    },
  ];
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  return (
    <div>
      {selectedCompany ? (
        <CompanyDetails company={selectedCompany} onBack={() => setSelectedCompany(null)} />
      ) : (
        <>
          {/* tabs  */}

          <div className="flex justify-between items-center p-3">
            <h1 className="text-sm font-semibold">Sales</h1>
            <p className=" flex justify-center items-center font-[500] space-x-1  text-[#104B53] rounded-full text-xs">
              <MdOutlineFileDownload size={15} /> <span>Export</span>
            </p>
          </div>
          <hr />

          <div className="p-2 md:max-w-[800px]  w-screen overflow-x-auto scroll-hidden">
            <ul className="  rounded-full flex w-full   text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
              {jobFilters?.map((item, i) => {
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

          {/* filters  */}
          {jobFilterIdx === 0 && (
            <div className="  px-2  pb-1 flex md:max-w-full     md:overflow-hidden  space-x-5 scroll-hidden  ">
              <div className="w-40 px-1 md:max-w-fit flex items-center h-6 justify-start space-x-2 border border-[#6B7588]  rounded-full">
                <p className="text-xs font-semibold w-full text-[#6B7588]">Full name :</p>
                <select name="" id="" className="text-xs   text-[#6B7588] outline-none">
                  <option value="">Any</option>
                </select>
              </div>

              <div className="w-fit px-1   flex items-center h-6 justify-between space-x-2 border border-[#6B7588]  rounded-full">
                <p className="text-xs  w-full font-semibold text-[#6B7588]">Email :</p>
                <select name="" id="" className="text-xs w-40 md:w-fit text-[#6B7588] outline-none">
                  <option value=""></option>
                </select>
              </div>

              <div className="w-fit px-1   flex items-center h-6 justify-between space-x-2 border border-[#6B7588]  rounded-full">
                <p className="text-xs  w-full font-semibold text-[#6B7588]">Date:</p>
                <select name="" id="" className="text-xs w-40 md:w-fit text-[#6B7588] outline-none">
                  <option value=""></option>
                </select>
              </div>

              <div className="w-40 px-1 md:max-w-fit flex items-center h-6 justify-start space-x-2 border border-[#6B7588]  rounded-full">
                <p className="text-xs font-semibold w-full text-[#6B7588]">Owner:</p>
                <select name="" id="" className="text-xs   text-[#6B7588] outline-none">
                  <option value="">Any</option>
                </select>
              </div>
            </div>
          )}

          {/* all jobs  */}
          <div className="w-full   p-3 space-y-3       ">
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
      )}
    </div>
  );
};

export default Sales;

import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import bgCompany from '../../../assets/bg-company.png';
import bgIcon from '../../../assets/icon-company.png';
import locationIco from '../../../assets/companyprofile/location.png'
import headquaterIco from '../../../assets/companyprofile/Building.png'

import companywebsiteIco from '../../../assets/companyprofile/Website.png'

import companysizeIco from '../../../assets/companyprofile/companysize.png'

import foundedIco from '../../../assets/companyprofile/founded.png'
import companyDescriptionIcon from '../../../assets/companyprofile/companydescription.png'
import { IoMdClose, IoMdMore } from 'react-icons/io';

import { MdDeleteOutline } from 'react-icons/md';
import { MdClose } from "react-icons/md";
 
const Companies: React.FC<{setIsCompany:(e:string)=>void}> = ({setIsCompany}) => {
  const columns = ['Company Name', 'Location', 'Member Since', 'Job Posted', 'Total User', 'Sales','Active Jobs'];

  return (
    <div>
      {/* tabs  */}

      <div className="flex justify-between items-center p-3">
        <h1 className="text-sm font-semibold">Companies</h1>
      </div>
      <hr />

      {/* filters  */}

      <div className="  px-2 py-2 pb-1 flex md:max-w-full     md:overflow-hidden  space-x-5 scroll-hidden  ">
        <div className="w-40 px-1 md:max-w-fit flex items-center h-6 justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold w-full text-[#6B7588]">Company Name :</p>
          <select name="" id="" className="text-xs   text-[#6B7588] outline-none">
            <option value=""></option>
          </select>
        </div>

        <div className="w-fit px-1   flex items-center h-6 justify-between space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs  w-full font-semibold text-[#6B7588]">Location :</p>
          <select name="" id="" className="text-xs w-40 md:w-fit text-[#6B7588] outline-none">
            <option value=""></option>
          </select>
        </div>

        <div className="w-fit px-1   flex items-center h-6 justify-between space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs  w-full font-semibold text-[#6B7588]">Member Since:</p>
          <select name="" id="" className="text-xs w-40 md:w-fit text-[#6B7588] outline-none">
            <option value=""></option>
          </select>
        </div>

        <div className="w-40 px-1 md:max-w-fit flex items-center h-6 justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold w-full text-[#6B7588]">Job Posted:</p>
          <select name="" id="" className="text-xs   text-[#6B7588] outline-none">
            <option value=""> </option>
          </select>
        </div>

        <div className="w-40 px-1 md:max-w-fit flex items-center h-6 justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold w-full text-[#6B7588]">Total Users:</p>
          <select name="" id="" className="text-xs   text-[#6B7588] outline-none">
            <option value=""> </option>
          </select>
        </div>

        <div className="w-40 px-1 md:max-w-fit flex items-center h-6 justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold w-full text-[#6B7588]">Sales:</p>
          <select name="" id="" className="text-xs   text-[#6B7588] outline-none">
            <option value=""> </option>
          </select>
        </div>

        <div className="w-40 px-1 md:max-w-fit flex items-center h-6 justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold w-full text-[#6B7588]">Active Jobs:</p>
          <select name="" id="" className="text-xs   text-[#6B7588] outline-none">
            <option value=""> </option>
          </select>
        </div>
      </div>

      {/* all jobs  */}
      <div className="w-full   p-3 space-y-3       ">
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
                    <td className="text-[10px] p-3" onClick={()=>setIsCompany('Infotech')}>Infotech</td>

                    <td className="text-[10px] p-2">Allen, TX,US</td>
                    <td className="text-[10px] p-2">11/10/2024</td>
                    <td className="text-[10px] p-2"  >
                      2
                    </td>
                
                    <td className="text-[10px] p-2"> 4</td>
                    <td className="text-[10px] p-2"> 4</td>
                    <td className="text-[10px] p-2"> 4</td>
       

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};



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
const AllSales: React.FC = () => {
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
                <td className="text-[10px] p-2"  >
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
const BulkHiring: React.FC = () => {
  const columns = ['Owner name', 'Email', 'Amount', 'Job Posted', 'Resume Sourcing', 'Current Credits'];
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
                <td className="text-[10px] p-3">Mathew Albert</td>

                <td className="text-[10px] p-2">mathew@gmail.com</td>
                <td className="text-[10px] p-2">$400</td>
                <td className="text-[10px] p-2"  >
                20/50
                </td>
                <td className="text-[10px] p-2"  >
                10/40
                </td>
                <td className="text-[10px] p-2 flex flex-col justify-center items-center">
                    <p className="text-start">200</p>
                    <p>Expiry Data: 11/26/2024</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// User Section 

const JobPosted: React.FC = () => {
  return (
    <table className="table-auto w-full border rounded-lg overflow-auto ">
            <thead className="bg-[#F2F2F5]  ">
              <tr className="text-sm ">
                <th className="p-2 text-sm text-[#3C3C3D]">Full Name</th>
                 
                <th className="p-2 text-sm text-[#3C3C3D]">Role</th>
                <th className="p-2 text-sm text-[#3C3C3D]">Job Posted</th>
                <th className="p-2 text-sm text-[#3C3C3D]">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <tr className=" border" key={i}>
                    <td className="text-xs p-3">Mathew</td>
                  
                    <td className="text-xs p-2">Hiring Partner</td>
                    <td className="text-xs p-2">{i+1}</td>
                    <td className="text-xs p-2 flex justify-center items-center space-x-2">
                    <p className='w-24 h-6 flex justify-center items-center text-[#104B53] border border-[#104B53] rounded-full'>View</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
  );
};

const ResumeSourcing: React.FC = () => {
    return (
      <table className="table-auto w-full border rounded-lg overflow-auto ">
              <thead className="bg-[#F2F2F5] pt-3 ">
                <tr className="text-sm ">
                  <th className="p-2 text-sm text-[#3C3C3D]">Full Name</th>
                   
                  <th className="p-2 text-sm text-[#3C3C3D]">Role</th>
                  <th className="p-2 text-sm text-[#3C3C3D]">Resume Sourced</th>
                  <th className="p-2 text-sm text-[#3C3C3D]">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {Array.from({ length: 5 }).map((_, i) => {
                  return (
                    <tr className=" border" key={i}>
                      <td className="text-xs p-3">Mathew</td>
                    
                      <td className="text-xs p-2">Hiring Partner</td>
                      <td className="text-xs p-2">{i+1}</td>
                      <td className="text-xs p-2 flex justify-center items-center space-x-2">
                      <p className='w-24 h-6 flex justify-center items-center text-[#104B53] border border-[#104B53] rounded-full'>View</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    );
  };



  const RightToRepresent: React.FC = () => {
    return (
      <table className="table-auto w-full border rounded-lg overflow-auto ">
              <thead className="bg-[#F2F2F5] pt-3 ">
                <tr className="text-sm ">
                  <th className="p-2 text-sm text-[#3C3C3D]">Full Name</th>
                   
                  <th className="p-2 text-sm text-[#3C3C3D]">Role</th>
                  <th className="p-2 text-sm text-[#3C3C3D]">RTR Sent</th>
               

                  <th className="p-2 text-sm text-[#3C3C3D]">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {Array.from({ length: 5 }).map((_, i) => {
                  return (
                    <tr className=" border" key={i}>
                      <td className="text-xs p-3">Mathew</td>
                    
                      <td className="text-xs p-2">Hiring Partner</td>
                      <td className="text-xs p-2">{i+1}</td>
                     

                      <td className="text-xs p-2 flex justify-center items-center space-x-2">
                      <p className='w-24 h-6 flex justify-center items-center text-[#104B53] border border-[#104B53] rounded-full'>View</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
    );
  };


 
 

const Users: React.FC = () => {
  
    const [currentIdx,setCurrentIdx]=useState<number>(0);
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [like, setLike] = useState<boolean>(false);
    const [midLike, setMidLike] = useState<boolean>(false);
    const [disLike, setDisLike] = useState<boolean>(false);
    const [moreOption, setMoreOption] = useState<boolean>(false);
    

  const options=[
    {
        lable:'Job Posted',
        count:2,
        components:<JobPosted/>

    },
    {
        lable:'Resume Sourcing',
        count:3,
        components:<ResumeSourcing/>

    },
    {
        lable:'Right to Represent',
        count:3,
        components:<RightToRepresent/>

    },
  ]

  return (
    <div className='w-full'>
 

  {/* plan  */}
  <div className=" relative ">
   

    <div className="w-full h-[30vh] overflow-y-auto border">
      <table className="table-auto w-full border rounded-lg">
        <thead className="bg-[#F2F2F5] ">
          <tr className="text-sm ">
            <th className="p-2 text-sm text-[#3C3C3D]">Full Name</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Email Address</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Role</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Co-Hiring Access</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <tr className="border" key={i}>
              <td className="text-xs p-3">Mathew</td>
              <td className="text-xs p-2" onClick={()=>setIsModalOpen(true)}>mathew@gmail.com</td>
              <td className="text-xs p-2">06/20/2024</td>
              <td className="text-xs p-2">Resume sourcing</td>
              <td className="text-xs p-2 flex justify-center items-center  ">
                 <p className="w-20 h-5 text-xs rounded-full bg-[#104B53] flex justify-center items-center text-white">Message</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* options */}
  <div className='w-full   mt-5'>
    <ul className='w-full flex space-x-3'>
      {options?.map((item, i) => (
        <li onClick={() => setCurrentIdx(i)} className={`text-xs  p-2 border-b cursor-pointer ${currentIdx === i ? 'border-[#104B53] text-[#104B53] font-[600]' : ''}`} key={i}>
          {item.lable} ({item.count})
        </li>
      ))}
    </ul>

    <div className="w-full mt-5 border">
      {options?.map((item, i) => {
        if (currentIdx === i) {
          return (
            <div className='w-full  h-[30vh] overflow-y-auto' key={i}>
              {item.components}
            </div>
          );
        }
      })}
    </div>
  </div>



  {/* Action modal  */}
  <div
        className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isModalOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'} `}
      >
        <div
          className="   z-[10] w-full max-w-[300px] shadow-xl
                         p-3 bg-white rounded-lg"
        >
          <div className="flex justify-end items-center p-3">
            <div className="flex  space-y-1">
            <MdClose onClick={()=>setIsModalOpen(false)} />

            </div>
          </div>

          <div className="w-full flex flex-col space-y-4  p-3">
            <div className="w-full space-y-3  ">
              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Full Name</p>
                <p className="text-[10px] font-semibold">Mathew Albert</p>
              </div>

           

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Email</p>
                <p className="text-[10px] font-semibold">Mathew@xyz.com</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Phone number</p>
                <p className="text-[10px] font-semibold">+1 xxx-xxx-xxxx</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Role</p>
                <p className="text-[10px] font-semibold">Owner(1)</p>
              </div>

            

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Co-Hiring Access</p>
                <p className="text-[10px] font-semibold">Access for all jobs and resume sourcing</p>
              </div>
            </div>

           

            <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Access Decision</p>
                <div className='relative flex gap-2'>
                      <div className='flex gap-2'>
                        <div onClick={() => { setLike(!like) }} className={`${like ? "border-[#06A560] bg-green-100 text-[#06A560]" : "border-[#D6DBDE] hover:bg-green-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineLike size={20} />

                        </div>
                        <div onClick={() => { setMidLike(!midLike) }} className={`${midLike ? "border-yellow-500 bg-yellow-100 text-yellow-500" : "border-[#D6DBDE] hover:bg-yellow-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineLike size={20} className='rotate-90 ' />

                        </div>
                      </div>
                      <div className='flex gap-10 items-center'>
                        <div onClick={() => { setDisLike(!disLike) }} className={`${disLike ? "border-red-500 bg-red-100 text-red-500" : "border-[#D6DBDE] hover:bg-red-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                          <AiOutlineDislike size={20} />

                        </div>
                       

                        <div className='relative' onClick={() => { setMoreOption(!moreOption) }}>
                          <IoMdMore size={25} />
                          <div className={`absolute w-36 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[20px] top-5 transition-all duration-500 bg-white ${moreOption ?  "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
                              <div className='px-3 py-2'>
                                <p className='text-sm font-semibold'>Undo</p>
                              </div>
                              <hr />
                              <div className='px-3 py-2'>
                                <p className='text-sm font-semibold'> Delete</p>
                              </div>
                        </div>
                        </div>

                      </div>

                    </div>
              </div>
            </div>




           

             

            <div className="w-full ">
              

              <p className="w-full h-8 flex justify-center items-center bg-[#104B53] text-white text-xs rounded-full">
                Make Payment
              </p>
            </div>
          </div>
        </div>
      </div>
 

  );
};

// User section end here 

const CompanyProfile: React.FC = () => {
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const filtersItems = [
    {
      label: 'Profile',
      component: <CompanyProfileSettings/>,
    },

    {
      label: 'Jobs',
      component: <Jobs/>,
    },

    {
      label: 'Users',
      component: <Users/>,
    },
    {
      label: 'Sales',
      component: <AllSales/>,
    },
    {
      label: 'BulkHiring',
      component: <BulkHiring/>,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-lg font-semibold" >
          Infotech
        </h1>
        <p className=" flex justify-center items-center font-[500] space-x-1  text-[#104B53] rounded-full text-xs">
          <FaEdit size={15} /> <span>Edit</span>
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

        {jobFilterIdx === 1 && (
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





const CompanyProfileSettings: React.FC = () => {
  const [isEditModalOpen,setIsEditModalOpen]=useState<boolean>(false)
   
  const data=[
    {
      lable:'Company Name',
      icon:locationIco,
      description:'XYZ'
  },
    {
        lable:'Location',
        icon:locationIco,
        description:'Street name 1, allen, TX, United States'
    },

    {
        lable:'Headquarters',
        icon:headquaterIco,
        description:'Street name 1, allen, TX, United States'
    },
    {
        lable:'Company Websites',
        icon:companywebsiteIco,
        description:'xyzcompany.com'
    },
    {
        lable:'Company Size',
        icon:companysizeIco,
        description:'11-30'
    },
    {
        lable:'Founded',
        icon:foundedIco,
        description:'2018'
    },
    {
        lable:'Company Description',
        icon:companyDescriptionIcon,
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'
    },
  ]

  return (
    <div className="w-full   h-full    relative">
      <div className=" w-full max-w-[1280px]    bg-white  m-auto  rounded-lg p-2">
        <div className="w-full overflow-auto md:flex md:justify-between ">
         

          <div className="flex cursor-pointer  text-xs text-[#104B53] justify-center items-center space-x-1  " onClick={()=>setIsEditModalOpen(true)}>
            <FaEdit color="#104B53" size={15}  />
            Edit
          </div>
        </div>

        <hr className="mt-5" />

        {/* Company Box  */}

        <div className="w-full   max-w-[1200px]   h-full m-auto  ">
          <div className="w-full h-40 border bg-white relative">
            <div className="w-full h-24 bg-[#F2F2F5] rounded-tl-lg">
              <img src={bgCompany} alt="" className="  w-full h-full object-cover" />
            </div>

            <div className='w-full h-full '>
            <div className="w-full flex justify-center items-center   absolute top-20 left-14   space-x-4">
              <img src={bgIcon} alt="" className="  object-contain  w-20 h-20" />
              <p className="w-full text-xs font-semibold">XYZ company</p>
            </div>
     
            </div>
          </div>

          {/* table data  */}

          <div className='w-full h-full space-y-3 mt-10 '>

            {data?.map((item,i)=>{
                return(
                    <div key={i} className='w-full flex items-center space-x-4 border '>
                    <div className='max-w-60 w-full bg-[#F2F2F5]  h-full  p-2  space-x-1  flex justify-start items-center'>
                        <img src={item.icon} alt='' className='w-5 h-6'/>
                        <p className='text-xs '>{item.lable}</p>
                    </div>

                    <div className='flex-1 w-full'>
                        <p className='text-[10px]'>{item.description}</p>
                    </div>
            </div>
                )
            })}
                           

          </div>


        </div>




      </div>


      {/* Edit company profile  */}

      <div className={`w-full h-[90%] absolute    inset-0 transition-all duration-300 ${isEditModalOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-100]'}`}>
              <div className='max-w-2xl bg-white shadow-lg h-[88vh] px-4 m-auto'>
              <div className='flex justify-between items-center p-3'>
                <p className='text-sm font-[500]'>Company Profile</p>
                <IoMdClose size={20} className='cursor-pointer' onClick={()=>setIsEditModalOpen(false)}/>
              </div>
              <hr />

              <div className='flex justify-between items-center p-2'>
                <p className='text-xs font-[500]'>Company cover</p>
                <div className="flex justify-end items-center space-x-4">
                <div className="flex items-center  ">
                  <FaEdit size={14} color="#104B53" />
                  <p className="text-[#104B53] text-xs" >Edit</p>
                </div>

                <div className="flex items-center ">
                  <MdDeleteOutline color="#104B53" size={14} />
                  <p className="text-[#104B53] text-xs">Delete</p>
                </div>
              </div>
              </div>
              <div className="w-full  h-40   bg-white relative">
           
            <div className="w-full h-24 bg-[#F2F2F5] rounded-tl-lg">
              <img src={bgCompany} alt="" className="  w-full h-full object-cover" />
            </div>

            <div className='w-full   mt-2   '>
            <div className="w-full flex flex-col space-y-2 justify-center items-start      ">
            <p className=' text-xs font-[500] text-center'>Company cover</p>

            <div className='flex justify-center items-end space-x-3'>
            <img src={bgIcon} alt="" className="  object-contain  w-20 h-20" />

            <div className="flex justify-end items-center space-x-4">
                <div className="flex items-center  ">
                  <FaEdit size={14} color="#104B53" />
                  <p className="text-[#104B53] text-xs" >Edit</p>
                </div>

                <div className="flex items-center ">
                  <MdDeleteOutline color="#104B53" size={14} />
                  <p className="text-[#104B53] text-xs">Delete</p>
                </div>
              </div>
            </div>
             
             
            </div>
     
            </div>


             
            <div className="w-full grid grid-cols-2 gap-3 mt-6">

            {data?.map((item,i)=>{

              if(item.lable !=='Company Description'){
                return(
                  <div key={i} className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">{item.lable}</label>
                </div>

                <input
                  type="text"
                  placeholder=""
                  value={item.description}
                  className="p-2 border border-[#EBEBF0] rounded-md text-[10px]  placeholder:text-[10px]"
                />
              </div>
                )
              }
              else{
                    return(
                      <div key={i} className="flex flex-col col-span-2 space-y-2">
                      <div className="flex text-xs ">
                        <label htmlFor="">{item.lable}</label>
                      </div>
      
                      <textarea
                      
                       
                        value={item.description}
                        className="p-2 border border-[#EBEBF0] min-h-28 rounded-md text-[10px]  placeholder:text-[10px]"
                      />
                    </div>
                    )
              }
                
              })}


         

               
            </div>
 
            <div className='flex justify-end items-center w-full mt-3'>
                <p className='text-xs w-20 h-7 rounded-full flex justify-center items-center bg-[#E9F358] text-[#104B53]'>Update</p>
              </div>

          </div>
              </div>
      </div>
      
    </div>
  );
};

const CompanyTab:React.FC=()=>{


  const [selectedItem, setSelectedItem] = useState<string | null>('Companies');

  

 


  const renderContent = () => {
    switch (selectedItem) {
      case 'Companies':
        return <Companies setIsCompany={setSelectedItem}  />
      case 'Infotech':
        return <CompanyProfile/>
      default:
        return <div>Select an option from the accordion.</div>;
    }
  };

  return(
    <div className="w-full h-full">
             <div className="">
                 {renderContent()}
             </div>
    </div>
  )
}

export default CompanyTab;

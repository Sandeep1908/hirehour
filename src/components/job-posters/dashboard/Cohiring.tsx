import { useMutation, useQuery } from '@tanstack/react-query';
import {  useState } from 'react';

import { FaEdit } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { fetchAllTeamMembers } from '../../../utils/jobposters/jobboards/cohiring';
import axiosrecruiterinstance from '../../../axios/axiosrecruiterinstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

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
              <td className="text-xs p-2">{i + 1}</td>
              <td className="text-xs p-2 flex justify-center items-center space-x-2">
                <p className="w-24 h-6 flex justify-center items-center text-[#104B53] border border-[#104B53] rounded-full">
                  View
                </p>
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
              <td className="text-xs p-2">{i + 1}</td>
              <td className="text-xs p-2 flex justify-center items-center space-x-2">
                <p className="w-24 h-6 flex justify-center items-center text-[#104B53] border border-[#104B53] rounded-full">
                  View
                </p>
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
              <td className="text-xs p-2">{i + 1}</td>

              <td className="text-xs p-2 flex justify-center items-center space-x-2">
                <p className="w-24 h-6 flex justify-center items-center text-[#104B53] border border-[#104B53] rounded-full">
                  View
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

//   Add user

type AddUseModalProps = {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
};

const AddUserModal: React.FC<AddUseModalProps> = ({ isOpen, setIsOpen }) => {
  const [selectedUser, setSelectedUser] = useState<string>('');
  const { data: allTeams } = useQuery({
    queryKey: ['co-hiring'],
    queryFn: fetchAllTeamMembers,
  });

  console.log("allTeams",);
  const inviteMutation = useMutation({
    mutationFn: async (teamMemberID: {teamMemberID:number}) => {
      const response = await axiosrecruiterinstance.post(
        '/api/recruiter/team-management/assign-to-own-team',
        teamMemberID,
      );
      return response.data;
    },

    onSuccess: () => {
      toast.success('Adding Team Member Successfully');
      setIsOpen(false);
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const recruitersToBeInvite = allTeams?.data?.filter((i: CohiringTypes) => !i.reportsTo_user);
  const handleInvite = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(e.target.value);
  };

  const handleAddUser=()=>{
    if(selectedUser==='not-selected'){
      setIsOpen(false)
      return toast.warning('User Not Selected');
    }

    inviteMutation.mutate({ teamMemberID: Number(selectedUser) });
    

  }
  return (
    <div
      className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'} `}
    >
      <div
        className="   z-[10] w-full max-w-[350px] shadow-xl
                        bg-white rounded-lg"
      >
        <div className="flex justify-between items-center p-3">
          <div className="flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Add User</h1>
          </div>

          <IoMdClose size={20} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        </div>

        <hr />

        <div className="w-full flex flex-col space-y-4  p-4">
          <div className="flex flex-col space-y-1">
            <div className="flex ">
              <label htmlFor="" className="text-xs">
                Full Name
              </label>
              <span className="text-red-500">*</span>
            </div>

            <select
              className="p-1 text-xs border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
              onChange={handleInvite}
              name=""
              id=""
            >
              <option value={'not-selected'} className="">
                Select User
              </option>
              {recruitersToBeInvite?.map((item: CohiringTypes, i: number) => {
                return (
                  <option value={item?.userID} key={i}>
                    {item?.user?.firstName}
                  </option>
                );
              })}
            </select>

            {/* <input
              type="text"
              placeholder="Enter your full name"
              className="p-1 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
            /> */}
          </div>

          {/* <div className="flex flex-col space-y-1">
            <div className="flex ">
              <label htmlFor="" className="text-xs">
                Main
              </label>
              <span className="text-red-500">*</span>
            </div>

            <input
              type="text"
              placeholder="Enter your mail"
              className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <div className="flex ">
              <label htmlFor="" className="text-xs">
                Role
              </label>
              <span className="text-red-500">*</span>
            </div>

            <input
              type="text"
              placeholder="Enter your role"
              className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <div className="flex ">
              <label htmlFor="" className="text-xs">
                Co-Hiring Access
              </label>
              <span className="text-red-500">*</span>
            </div>

            <input
              type="text"
              placeholder="Enter your Co-Hiring Access"
              className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
            />
          </div> */}
        </div>

        {/* Button submit  */}

        <div className="p-4">
          <div className="w-full flex justify-center items-center  space-x-3 md:justify-end md:mt-4">
            <p className="text-xs text-[#104B53]">Cancle</p>
            <p onClick={()=>handleAddUser()} className="flex justify-center items-center text-xs w-20 h-7    rounded-full cursor-pointer bg-[#E9F358] ">
              Add
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cohiring: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: myteam } = useQuery({
    queryKey: ['co-hiring'],
    queryFn: fetchAllTeamMembers,
  });

  const sortTeamData = (data: CohiringTypes[]) => {
    const admin = data.find((item) => item.isOwnerOfSaidCompany);

    if (admin) {
      const adminId = admin.user.id;

      return data
        .filter((item) => item.reportsTo === adminId || item.isOwnerOfSaidCompany)
        .sort((a, b) => Number(b.isOwnerOfSaidCompany) - Number(a.isOwnerOfSaidCompany));
    }

    return [];
  };

  const options = [
    {
      lable: 'Job Posted',
      count: 2,
      components: <JobPosted />,
    },
    {
      lable: 'Resume Sourcing',
      count: 3,
      components: <ResumeSourcing />,
    },
    {
      lable: 'Right to Represent',
      count: 3,
      components: <RightToRepresent />,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-sm font-semibold">Co-Hiring</h1>
        <p className="w-24 h-8 flex justify-center items-center bg-[#E9F358] text-[#104B53] rounded-full text-xs">
          Post a Job
        </p>
      </div>
      <hr />

      {/* plan  */}
      <div className="p-2 relative ">
        <div className="flex justify-between items-center p-2 border rounded-t-lg">
          <p className="text-sm font-semibold">Upgrade plan to add Hiring Partner</p>
          <p
            onClick={() => setIsOpen(true)}
            className="w-32 h-8 text-xs text-[#104B53] border border-[#104B53] rounded-full flex justify-center items-center"
          >
            Add a User
          </p>

          <AddUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="w-full h-[30vh] overflow-y-auto border">
          <table className="table-auto w-full border rounded-lg">
            <thead className="bg-[#F2F2F5] pt-3">
              <tr className="text-sm ">
                <th className="p-2 text-sm text-[#3C3C3D]">Full Name</th>
                <th className="p-2 text-sm text-[#3C3C3D]">Email Address</th>
                <th className="p-2 text-sm text-[#3C3C3D]">Role</th>
                <th className="p-2 text-sm text-[#3C3C3D]">Report To</th>
                <th className="p-2 text-sm text-[#3C3C3D]">Co-Hiring Access</th>
                <th className="p-2 text-sm text-[#3C3C3D]">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {sortTeamData(myteam?.data || []).map((item: CohiringTypes, i: number) => (
                <tr className="border" key={i}>
                  <td className="text-xs p-3">{item?.user?.firstName}</td>
                  <td className="text-xs p-2">{item?.user?.email}</td>
                  <td className="text-xs p-2">
                    {item?.isOwnerOfSaidCompany ? 'Admin' : 'Hiring Partner'}
                  </td>
                  <td className="text-xs p-2">{item?.reportsTo_user?.firstName}</td>
                  <td className="text-xs p-2">''</td>
                  <td className="text-xs p-2 flex justify-center items-center space-x-2">
                    <RiDeleteBin5Line size={18} color="#104B53" />
                    <FaEdit size={18} color="#104B53" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* options */}
      <div className="w-full p-2">
        <ul className="w-full flex space-x-3">
          {options?.map((item, i) => (
            <li
              onClick={() => setCurrentIdx(i)}
              className={`text-xs p-2 border-b cursor-pointer ${currentIdx === i ? 'border-[#104B53]' : ''}`}
              key={i}
            >
              {item.lable} ({item.count})
            </li>
          ))}
        </ul>

        <div className="w-full mt-5 border">
          {options?.map((item, i) => {
            if (currentIdx === i) {
              return (
                <div className="w-full  h-[30vh] overflow-y-auto" key={i}>
                  {item.components}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Cohiring;

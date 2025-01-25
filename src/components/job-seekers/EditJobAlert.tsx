import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import JobRoles from '../../utils/JobRoles';
import { useMutation } from '@tanstack/react-query';

import axiosInstance from '../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type JobAlertProps = {
  setShowEditjobAlert: (agr: boolean) => void;
  editId: number | undefined;
  // editData:any
};

type EditPreferences = {
  id: number | undefined;
  jobRoleName: string;
  jobRoleType: string;
  experienceLevel: string;
  salaryRange: string;
  TypesOfAuthorizationToHave: string;
  location: string;
};

const EditJobAlert: React.FC<JobAlertProps> = ({ setShowEditjobAlert, editId }) => {
  const [isJobAlertChecked, setIsJobAlertChecked] = useState<boolean>(false);

  const [id, setId] = useState<number>();
  const [jobRoleSelect] = useState<number>();
  const [jobRoleName, setJobRoleName] = useState<string>('');
  const [jobRoleType, setJobRoleType] = useState<string>('');
  const [experienceLevel, setExperienceLevel] = useState<string>('');
  const [salaryRange, setSalaryRange] = useState<string>('');
  const [salaryRangeType, setSalaryRangeType] = useState<string>('');
  const [TypesOfAuthorizationToHave, setTypesOfAuthorizationToHave] = useState<string>('');
  const [location, setLocation] = useState<string>('');

  //  const [editDetails, setEditDetails] = useState<EditDetails>({
  //   id: editData?.ID || "",
  //   jobRoleName: editData?.jobRoleName || "",
  //   jobRoleType: editData?.jobRoleType || "",
  //   experienceLevel: editData?.experienceLevel || "",
  //   salaryRange: editData?.salaryRange || "",
  //   salaryRangeType: editData?.salaryRangeType || "",
  //   TypesOfAuthorizationToHave: editData?.TypesOfAuthorizationToHave || "",
  //   location: editData?.location || "",
  // });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   console.log("e.target",e.target)
  //   const { name, value } = e.target;
  //   console.log("Input Change - Name:", name, "Value:", value);
  //   setEditDetails((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  useEffect(() => {
    setId(editId);
  }, [jobRoleSelect]);

  useEffect(() => {
    console.log('Updated jobRoleName:', jobRoleName);
  }, [jobRoleName]);

  const mutation = useMutation({
    mutationFn: async (editPreferences: EditPreferences) => {
      const response = await axiosInstance.post(
        '/api/candidate/details/update-job-preference',
        editPreferences,
      );
      console.log('response.data', response.data);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Job Preferences edit successfully');
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    // console.log("editData",editData)
    e.preventDefault();
    const formData = {
      id,
      jobRoleName,
      jobRoleType,
      experienceLevel,
      salaryRange,
      salaryRangeType,
      TypesOfAuthorizationToHave,
      location,
    };
    console.log('formData', formData);
    mutation.mutate(formData);
  };

  return (
    <div className="w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] ">
      <div className="w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

      <div className="max-w-[600px]  h-full md:h-auto w-full  bg-white rounded-lg  shadow-lg overflow-y-auto z-30">
        <div className=" p-4 flex justify-between items-center">
          <p className="text-xl font-bold">Edit Job Alert</p>
          <IoMdClose
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setShowEditjobAlert(false);
            }}
          />
        </div>
        <hr />
        <div className="w-full p-4">
          <div className="border-[1px] rounded-lg p-3 border-black flex justify-between items-center">
            <p className="text-[#3A3A3C] text-sm font-semibold"> Alert Active</p>
            <div>
              <label className="inline-flex items-center cursor-pointer outline-none">
                <input
                  type="checkbox"
                  checked={isJobAlertChecked}
                  className="sr-only peer outline-none"
                  onChange={() => {
                    setIsJobAlertChecked(!isJobAlertChecked);
                  }}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#114B53]"></div>
              </label>
            </div>
          </div>
          <div>
            <div className="w-full flex gap-4 mt-5 flex-col md:flex-row">
              <div className="w-full ">
                <p className="text-sm font-medium">Job Tittle</p>
                <div className="mt-2">
                  <JobRoles setRole={setJobRoleName} />
                </div>
              </div>
              {/* <div className='w-full '>
                   <p className='text-sm font-medium'>Employment type </p>
                   <div className="relative inline-block w-full mt-2">
      <div
        className="flex items-center justify-between h-[40px] px-2 py-2 bg-white border rounded-xl cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap items-center gap-1">
          {selectedTypes.length === 0 ? (
            <span className="text-gray-400">Select types...</span>
          ) : (
            selectedTypes.map((type) => (
              <span
                key={type}
                className="flex items-center gap-1 justify-center px-3 py-1  bg-[#F2F2F5] text-[#6B7588] rounded-full text-xs"
              >
                {type}

                <RxCross2 size={12} className='mt-[2px] '
                 onClick={(e) => {
                  e.stopPropagation();
                  handleDeselect(type);
                }}
                 />

              </span>
            ))
          )}
        </div>
        <span className="ml-2">{isDropdownOpen ? <SlArrowUp size={10} /> : <SlArrowDown size={10} />      }</span>
      </div>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {employmentTypes.map((type) => (
            <div
              key={type}
              className="flex items-center px-4 py-2 cursor-pointer "
              onClick={() => handleSelect(type)}
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleSelect(type)}
                className="mr-2"
              />
              <span>{type}</span>
            </div>
          ))}
        </div>
      )}
    </div>        
                </div> */}
              <div className="w-full ">
                <p className="text-sm font-medium">Employment type</p>
                <select
                  name=""
                  id=""
                  onChange={(e) => setJobRoleType(e.target.value)}
                  className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                >
                  <option value="Full-time"> Full-time </option>
                  <option value="Part-time"> Part-time </option>
                </select>
              </div>
            </div>

            <div className="w-full flex gap-4 mt-5 flex-col md:flex-row">
              <div className="w-full ">
                <p className="text-sm font-medium">Work mode </p>
                <select
                  name=""
                  id=""
                  className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                >
                  <option value=""> On Site </option>
                  <option value=""> Remote </option>
                  <option value=""> Hybrid </option>
                </select>{' '}
              </div>
              <div className="w-full ">
                <p className="text-sm font-medium">Experience level </p>
                <select
                  name=""
                  id=""
                  onChange={(e) => setExperienceLevel(e.target.value)}
                  className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                >
                  <option value="Associate Level"> Associate Level </option>
                  <option value="Mid"> Mid </option>
                  <option value="Senior"> Senior </option>
                </select>
              </div>
            </div>
            <div className="w-full mt-5">
              <p className="text-sm font-medium">Salary preference</p>

              <div className="w-full flex gap-4 mt-1">
                <div className="w-full ">
                  <p className="text-[12px] font-medium">Min - Max</p>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setSalaryRange(e.target.value)}
                    className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                  >
                    <option value="80k - 90k"> 80k - 90k </option>
                    <option value="90k - 100k"> 90k - 100k </option>
                    <option value="100k - 110k"> 100k - 110k </option>
                    <option value="110k - 120k"> 110k - 120k </option>
                  </select>
                </div>
                <div className="w-full ">
                  <p className="text-[12px] font-medium">Type</p>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setSalaryRangeType(e.target.value)}
                    className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                  >
                    <option value="USD"> USD </option>
                    <option value="INR"> INR </option>
                    <option value="UAE"> UAE</option>
                  </select>
                </div>

                <div className="w-full ">
                  <p className="text-[12px] font-medium">Rate </p>
                  <select
                    name=""
                    id=""
                    className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                  >
                    <option value=""> Per Year</option>
                    <option value=""> 2 Year</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-4 mt-5">
              <div className="w-full ">
                <p className="text-sm font-medium">Work authorization</p>
                <select
                  name=""
                  id=""
                  onChange={(e) => setTypesOfAuthorizationToHave(e.target.value)}
                  className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                >
                  <option value="H1 Visa"> H1 Visa </option>
                  <option value="H2 Visa"> H2 Visa </option>
                </select>
              </div>
              <div className="w-full ">
                <p className="text-sm font-medium">Location </p>
                <select
                  name=""
                  id=""
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-[40px] text-xs rounded-md border-[1px] border-[#E1E1E2] mt-2 px-4 "
                >
                  <option value="Texas, US"> Texas, US</option>
                  <option value="Londan, Uk"> Londan, Uk</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="w-full flex justify-end p-4">
          <div
            onClick={handleSubmit}
            className="bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full "
          >
            <p className="text-sm font-semibold text-[#114B53]">Add</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJobAlert;

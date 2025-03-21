import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Select from 'react-select';

import {
  workAuthorizationOptions,
  experienceLevelOptoion,
  employmentTypeOptions,
  sponshorshipOption,
  numberOfPostionOption,
  jobTypeOption,
} from '../../../config/jobposters/jobboardsoptions';
import LocationSearch from '../../../utils/LocationSearch';
import JobRoles from '../../../utils/JobRoles';
import Domains from '../../../utils/Domains';
import formatLocation from '../../../utils/jobseekers/formatedLocation';
import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axiosrecruiterinstance from '../../../axios/axiosrecruiterinstance';
import Spinner from '../../../components/Spinner';

type JobBoardData = {
  id?: number;
  hasOwnATS: boolean;
  atsLink?: string;
  willingnessToRelocateQuestionnaire: boolean;
  employmentType: string[];
  isVisaSponsorshipProvided: boolean;
  workAuthorizationAccepting: string[];
  numberOfPositionsHiring: number;
  experienceLevelNeeded: string;
  yearsOfExpNeeded: number;
  accommodationType: string;
  jobRoleName: string;
  jobLocation: string;
  jobDomain: string;
};

const JobBasis: React.FC = () => {
  const [jobTitle, setTitle] = useState<string>();
  const [domain, setDomain] = useState<string>();
  const [workingCompanyLocation, setWorkingCompanyLocation] = useState<LocationValue | null>(null);
  const navigate = useNavigate();

  const [jobBoard, setJobBoard] = useState<JobBoardData>({
    hasOwnATS: false,
    atsLink: '',
    willingnessToRelocateQuestionnaire: false,
    employmentType: [],
    isVisaSponsorshipProvided: false,
    workAuthorizationAccepting: [],
    numberOfPositionsHiring: 0,
    experienceLevelNeeded: '',
    yearsOfExpNeeded: 0,
    accommodationType: '',
    jobRoleName: '',
    jobLocation: '',
    jobDomain: '',
  });

  useEffect(() => {
    const savedFormData = sessionStorage.getItem('jobBoard');

    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData).part1;

      if (typeof parsedData.employmentType === 'string') {
        parsedData.employmentType = JSON.parse(parsedData.employmentType);
      }

      if (typeof parsedData.workAuthorizationAccepting === 'string') {
        parsedData.workAuthorizationAccepting = JSON.parse(parsedData.workAuthorizationAccepting);
      }

      setJobBoard(parsedData);
      console.log(parsedData);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;

    setJobBoard((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'radio' ? value === 'true' : value,
    }));

    sessionStorage.setItem(
      'jobBoard',
      JSON.stringify({
        ...jobBoard,
        [name]: type === 'checkbox' ? checked : type === 'radio' ? value === 'true' : value,
      }),
    );
  };

  const jobBoardMutation = useMutation({
    mutationFn: async ({ jobBoardData, id }: { jobBoardData: JobBoardData; id?: number }) => {
      if (id) {
        return axiosrecruiterinstance.post(`/api/recruiter/jobs/part1/${id}`, jobBoardData);
      }
      return axiosrecruiterinstance.post('/api/recruiter/jobs/part1', jobBoardData);
    },
    onSuccess: (data) => {
      toast.success('Job Basis Data Saved');
      sessionStorage.setItem(
        'jobBoard',
        JSON.stringify({ part1: jobBoard, id: data.data?.job?.id }),
      );
      navigate('/job-poster/job-description', { state: { jobId: data?.data.job?.id } });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ error: [{ message: string }] }>;
      toast.error(axiosError.response?.data.error[0]?.message);
    },
  });

  const handleJobBoardSubmit = () => {
    const workingLocation = formatLocation(workingCompanyLocation);
    const newJobBoard = {
      ...jobBoard,
      jobRoleName: jobTitle || jobBoard.jobRoleName,
      jobLocation: workingLocation === null ? jobBoard.jobLocation : workingLocation,
      jobDomain: domain || jobBoard.jobDomain,
    };

    setJobBoard(newJobBoard);

    const savedJobBoard = sessionStorage.getItem('jobBoard');

    if (savedJobBoard) {
      const parsedData = JSON.parse(savedJobBoard);
      const jobId = parsedData?.id;

      jobBoardMutation.mutate({ jobBoardData: newJobBoard, id: jobId });
    } else {
      jobBoardMutation.mutate({ jobBoardData: newJobBoard });
    }
  };

  return (
    <div className="w-full  h-screen p-3  md:pb-20  ">
      <div className="max-w-[1080px]   pt-2 rounded-lg m-auto">
        <div className=" bg-white">
          <div className="flex  flex-col    md:flex-row  md:justify-between md:items-center p-4">
            <h1 className="text-xl font-semibold">Create a Job Board</h1>

            <div className="flex justify-between md:justify-center items-center space-x-10">
              <p
                className="font-semibold text-[#104B53] text-xs"
                onClick={() => navigate('/job-poster/dashboard?key=myjobs')}
              >
                Cancel{' '}
              </p>
              <p
                onClick={() => navigate('/job-poster/dashboard?key=myjobs')}
                className=" w-28 h-7 text-[10px] bg-[#104B53] md:bg-transparent  text-white  rounded-full md:text-[#104B53]  flex justify-center items-center border border-[#104B53]"
              >
                Save & Exit
              </p>
            </div>
          </div>
          <hr />

          <div className="w-full p-3">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-sm">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 md:w-7 text-xs h-7 bg-[#104B53] text-white rounded-full">
                    1
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block">Job Basis</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#C7C9D9] text-[10px] flex justify-center items-center rounded-full">
                    2
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Job Description</p>
                </span>
              </li>

              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#C7C9D9] text-[10px] flex justify-center items-center rounded-full">
                    3
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Company Details</p>
                </span>
              </li>

              <li className="flex items-center">
                <span className="me-2 p-2 w-7 h-7 bg-[#C7C9D9] text-[10px] flex justify-center items-center rounded-full">
                  4
                </span>
                <p className="hidden text-[10px] w-[100px] md:block"> Review</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Informations  */}

      <div className="max-w-[1080px]    rounded-lg  mt-2  bg-white m-auto  pb-4">
        <div className="w-full max-w-[1064px] m-auto pt-3 flex flex-col space-y-5">
          {/* Form  */}

          <div className=" flex flex-col space-y-3">
            <div className="w-full flex flex-col space-y-5  p-4">
              {/* Total Experience  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-xs">
                    Are you using Hirehours or your own ATS/website for sourcing?*
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex justify-start items-center space-x-4 ">
                    <div className="flex justify-center items-center space-x-3">
                      <input
                        type="radio"
                        name="hasOwnATS"
                        id="hirehour"
                        value="false" // Explicitly set the value
                        checked={!jobBoard.hasOwnATS}
                        onChange={handleChange}
                      />
                      <label htmlFor="hirehour" className="text-xs">
                        HireHours
                      </label>
                    </div>
                    <div className="flex justify-center items-center space-x-3">
                      <input
                        type="radio"
                        name="hasOwnATS"
                        id="ownats"
                        value="true"
                        checked={jobBoard.hasOwnATS}
                        onChange={handleChange}
                      />
                      <label htmlFor="ownats" className="text-xs">
                        Own ATS/Website
                      </label>
                    </div>
                  </div>

                  {/* Link for sourcing  */}

                  {jobBoard.hasOwnATS && (
                    <div className="flex flex-col space-y-2">
                      <div className="flex ">
                        <label htmlFor="" className="text-xs">
                          Link for Sourcing
                        </label>
                        <span className="text-red-500">*</span>
                      </div>

                      <input
                        type="text"
                        placeholder="Link"
                        name="atsLink"
                        value={jobBoard.atsLink}
                        onChange={handleChange}
                        className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Job title  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Job Title
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <JobRoles setRole={setTitle} JobRoleName={jobBoard?.jobRoleName} />
                </div>

                {/* Job Location  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Job Location
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={jobTypeOption}
                    name="accommodationType"
                    className="text-xs text-[#9CA3AF]"
                    value={jobTypeOption.find(
                      (option) => option.value === jobBoard.accommodationType,
                    )}
                    onChange={(selectedVal) => {
                      const value = selectedVal?.value || '';
                      setJobBoard((prev) => ({
                        ...prev,
                        accommodationType: value,
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Working Location  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Working Location
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <LocationSearch
                    setSelectedLocation={setWorkingCompanyLocation}
                    selectedValue={jobBoard.jobLocation}
                  />
                </div>

                {/* Working Country  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Working Country
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Country"
                    disabled
                    value="United States"
                    className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Relocate  */}

                <div className="flex justify-start items-center">
                  <input
                    type="checkbox"
                    name="willingnessToRelocateQuestionnaire"
                    placeholder="Job Type"
                    className="w-10 h-5"
                    checked={jobBoard.willingnessToRelocateQuestionnaire}
                    onChange={handleChange}
                  />

                  <div className="flex ">
                    <label htmlFor="" className="text-sm font-[300]">
                      Willingness To Relocate
                    </label>
                    <span className="text-red-500">*</span>
                  </div>
                </div>

                {/* Job Domain  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Job Domain
                    </label>
                  </div>

                  <Domains setDomain={setDomain} domainName={jobBoard.jobDomain} />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Employment type  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Employment type
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={employmentTypeOptions}
                    isMulti
                    className="text-xs text-[#9CA3AF]"
                    value={employmentTypeOptions.filter((option) =>
                      jobBoard.employmentType.includes(option.value),
                    )} // Default selected values
                    onChange={(selectedOptions) => {
                      const values = selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : [];
                      setJobBoard((prev) => ({
                        ...prev,
                        employmentType: values,
                      }));
                    }}
                  />
                </div>

                {/* The role provide visa sponsorship*  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      The role provide visa sponsorship
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={sponshorshipOption}
                    className="text-xs text-[#9CA3AF]"
                    value={sponshorshipOption.find(
                      (option) => option.value === jobBoard.isVisaSponsorshipProvided,
                    )}
                    onChange={(selectedVal) => {
                      const value = selectedVal?.value || false;
                      setJobBoard((prev) => ({
                        ...prev,
                        isVisaSponsorshipProvided: value,
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Work Authorization   */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Work authorization accepting
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={workAuthorizationOptions}
                    isMulti
                    className="text-xs text-[#9CA3AF]"
                    value={workAuthorizationOptions.filter((option) =>
                      jobBoard.workAuthorizationAccepting.includes(option.value),
                    )} // Default selected values
                    onChange={(selectedOptions) => {
                      const values = selectedOptions
                        ? selectedOptions.map((option) => option.value)
                        : [];
                      setJobBoard((prev) => ({
                        ...prev,
                        workAuthorizationAccepting: values,
                      }));
                    }}
                  />
                </div>

                {/* Number of position hiring**  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Number of position hiring
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={numberOfPostionOption}
                    className="text-xs text-[#9CA3AF]"
                    value={numberOfPostionOption.find(
                      (option) => option.value === jobBoard.numberOfPositionsHiring,
                    )}
                    onChange={(selectedValue) => {
                      const value = selectedValue?.value || 1;
                      setJobBoard((prev) => ({
                        ...prev,
                        numberOfPositionsHiring: value,
                      }));
                    }}
                  />
                </div>
              </div>

              <div className="w-full grid md:grid-cols-2 gap-3">
                {/* Experience level*   */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Experience level
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <Select
                    options={experienceLevelOptoion}
                    className="text-xs text-[#9CA3AF]"
                    value={experienceLevelOptoion.find(
                      (option) => option.value === jobBoard.experienceLevelNeeded,
                    )}
                    onChange={(selectedValue) => {
                      const value = selectedValue?.value || '';
                      setJobBoard((prev) => ({
                        ...prev,
                        experienceLevelNeeded: value,
                      }));
                    }}
                  />
                </div>

                {/* Experience Year*   */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-xs">
                      Year of Experience required
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="number"
                    name="yearsOfExpNeeded"
                    placeholder="Year of experience"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                    value={jobBoard.yearsOfExpNeeded}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* buttons  */}

          <div className="flex w-full p-2  justify-between md:justify-end items-center  space-x-4">
            <Link
              to={''}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer border border-[#104B53] text-[#104B53]"
            >
              Back
            </Link>
            <p
              onClick={() => handleJobBoardSubmit()}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer bg-[#E9F358] "
            >
              {jobBoardMutation.isPending ? (
                <div className="flex space-x-1 justify-center items-center">
                  <p>Saving...</p>
                  <Spinner size={5} color="#104B53" />
                </div>
              ) : (
                'Continue'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBasis;

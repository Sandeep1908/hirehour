import React, { useState } from 'react';


import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../axios/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import JobRoles from '../../../../utils/JobRoles';
import Domains from '../../../../utils/Domains';
import JobTypes from '../../../../utils/JobTypes';
import LocationSearch from '../../../../utils/LocationSearch';
import formatLocation from '../../../../utils/jobseekers/formatedLocation';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

type WorkExperience = {
  companydetails: string;
  place: string;
  durationStart: string;
  durationEnd: string;
  presentEmployer: boolean;
  descriptionOfExperience: string;
  jobCategory: string;
};

type EducationDetails = {
  degree: string;
  schoolName: string;
  durationStart: string;
  durationEnd: string;
  netMarks: number;
  outOf: number;
  major:string
  isCurrentlyAttending: boolean;
};

const AdditionalInfo: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<number | null>(null);
  const [domain, setDomain] = useState<number | null>(null);
  const [jobtype, setType] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationValue | null>(null);
  const [selectedEducationLocation, setSelectedEducationLocation] = useState<LocationValue | null>(
    null,
  );

  const [experience, setExperience] = useState<WorkExperience>({
    companydetails: '',
    place: '',
    durationStart: '',
    durationEnd: '',
    presentEmployer: false,
    descriptionOfExperience: '',
    jobCategory: 'NA',
  });

  const [education, setEducation] = useState<EducationDetails>({
    schoolName: '',
    degree: '',
    durationStart: '',
    durationEnd: '',
    isCurrentlyAttending: false,
    netMarks: 100,
    major:'',
    outOf: 100,
  });

  const [summary, setSummery] = useState<SummaryDetails>({ summary: '' });

  //Work Experience
  const mutation = useMutation({
    mutationFn: async (newExperience: WorkExperience) => {
      const response = await axiosInstance.post('/api/candidate/details/experience', newExperience);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('experience data', data);
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isChecked = type === 'checkbox' && (e.target as HTMLInputElement).checked;

    setExperience((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? isChecked : value,
    }));
  };

  //Education

  const educationMutation = useMutation({
    mutationFn: async (newEducation: EducationDetails) => {
      const response = await axiosInstance.post('/api/candidate/details/education', newEducation);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('education data', data);
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      console.log("eduerror",error);
      toast.error(axiosError?.response?.data?.message);
    },
  });


  //summery

  const summeryMuation = useMutation({
    mutationFn: async (summery: SummaryDetails) => {
      const response = await axiosInstance.post('/api/candidate/details/update-details', summery);
      return response.data;
    },
    onSuccess: (data) => {
      console.log('summery data', data);
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isChecked = type === 'checkbox' && (e.target as HTMLInputElement).checked;

    setEducation((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? isChecked : value,
    }));
  };

  const handleContinue = async () => {
    const expeirenceData = {
      ...experience,
      jobType: jobtype,
      role: role,
      domain: domain,
      place: formatLocation(selectedLocation),
    };

    const educationData = {
      ...education,
      schoolLocation: formatLocation(selectedEducationLocation),
    };

    try {
      await Promise.all([
        mutation.mutateAsync(expeirenceData),
        educationMutation.mutateAsync(educationData),
        summeryMuation.mutateAsync(summary),
      ]);
      navigate('/review-form');
    } catch (error) {
      console.error('One of the mutations failed:', error);
    }
  };

  return (
    <div className="w-full   pb-20 bg-[#F6F6F8]">
     <div className="max-w-[1200px] h-48  m-auto">
        <div className="">
          <div className="flex  flex-col  space-y-4 md:flex-row  md:justify-between md:items-center p-4">
            <h1 className="text-sm font-semibold">Setting up your profile</h1>

            <div className="flex justify-between md:justify-center items-center space-x-10">
              <p className="font-semibold text-sm text-[#104B53] cursor-pointer">Cancel </p>
              <p className=" w-24 cursor-pointer h-8 text-[10px] bg-[#104B53] md:bg-transparent  text-white   rounded-full md:text-[#104B53]  flex justify-center items-center border border-[#104B53]">
                Save & Exit
              </p>
            </div>
          </div>
          <hr />

          <div className="w-full p-1">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 text-[10px] w-10   flex justify-center items-center h-8 bg-[#104B53] text-white rounded-full">
                    1
                  </span>
                  <p className="hidden text-xs md:block">Upload Resume</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 text-[10px] w-10   flex justify-center items-center h-8 bg-[#104B53] text-white rounded-full">
                    2
                  </span>
                  <p className="hidden text-xs md:block">Additional Information</p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2 p-2 w-8 h-8 text-[10px] flex justify-center items-center bg-[#C7C9D9] rounded-full">
                  3
                </span>
                <p className="hidden md:block  text-xs"> Review</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Informations  */}

      <div className="max-w-[1200px] h-full rounded-md   bg-white m-auto pb-4 ">
        <div className="w-full max-w-[1064px] m-auto pt-4 flex flex-col space-y-5">
          <div className=" flex flex-col space-y-3">
            <h1 className="text-sm font-semibold">Summary</h1>
            <div className="  border-[#EBEBF0] rounded-lg">
              <textarea
                name="descriptionOfExperience"
                className="text-[#535354] border p-2 text-sm min-h-32 w-full"
                placeholder="Write your profile summary"
                onChange={(e) => setSummery({ summary: e.target.value })}
              ></textarea>
            </div>
          </div>

          {/* Work Experiences  */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-sm font-semibold">Work Experience</h1>

            <div className="w-full flex flex-col space-y-5  p-4">
        

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Role  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Role
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <JobRoles setRole={setRole} />
                </div>

                {/* Company  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Select Company
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    name="companydetails"
                    value={experience.companydetails}
                    onChange={handleChange}
                    placeholder="company"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Domain Worked  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Domain Worked
                    </label>
                  </div>

                  <Domains setDomain={setDomain} />
                </div>

                {/* Job Type  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Job Type
                    </label>
                  </div>

                  <JobTypes setType={setType} />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Date Started  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Date Started
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    placeholder="Date Started"
                    name="durationStart"
                    value={experience.durationStart}
                    onChange={handleChange}
                    className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Date Ended  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Date Ended
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    placeholder="Date Ended"
                    name="durationEnd"
                    disabled={experience.presentEmployer}
                    value={
                      experience.presentEmployer ? new Date().toISOString() : experience.durationEnd
                    }
                    onChange={handleChange}
                    className="p-2 border text-sm border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="flex  justify-start items-center space-x-2">
                  <input
                    type="checkbox"
                    placeholder="Date Started"
                    name="presentEmployer"
                    checked={experience.presentEmployer}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setExperience((prev) => ({
                        ...prev,
                        presentEmployer: checked,
                        durationEnd: checked ? new Date().toISOString().split('T')[0] : '',
                      }));
                    }}
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />

                  <p className='text-xs'>I am currently work here</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-[12px]">
                    Location
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <LocationSearch setSelectedLocation={setSelectedLocation} />
              </div>

              <div className=" flex flex-col space-y-3 ">
                <h1 className="text-sm font-semibold"> Work Summery</h1>
                <div className="border  border-[#EBEBF0] rounded-lg">
                  <textarea
                    name="descriptionOfExperience"
                    className="text-[#535354] text-sm min-h-44 w-full p-3"
                    onChange={handleChange}
                    value={experience.descriptionOfExperience}
                  ></textarea>
                </div>
              </div>

              <div className="flex   justify-start items-center">
                <FaPlus color="#104B53" size={15} />
                <p className="text-[#104B53] text-xs uppercase font-semibold cursor-pointer">
                  Add Experiences
                </p>
              </div>
            </div>
          </div>

          {/* Education
           */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-sm font-semibold">Education</h1>

            <div className="w-full flex flex-col space-y-5  p-4">
              {/* Collage Name  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-[12px]">
                    Collage Name
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="text"
                  name="schoolName"
                  value={education.schoolName}
                  onChange={handleEducationChange}
                  placeholder="
                Enter Your Collage Name"
                  className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* 
              degree  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Degree
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    name="degree"
                    value={education.degree}
                    onChange={handleEducationChange}
                    placeholder="Degree"
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Major  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Major
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="text"
                    name='major'
                    placeholder="Major"
                    value={education.major}
                    onChange={handleEducationChange}
                    className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                {/* Date Started  */}
                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Date Started
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    placeholder="Date Started"
                    name="durationStart"
                    value={education.durationStart}
                    onChange={handleEducationChange}
                    className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>

                {/* Date Ended  */}

                <div className="flex flex-col space-y-2">
                  <div className="flex ">
                    <label htmlFor="" className="text-[12px]">
                      Date Ended
                    </label>
                    <span className="text-red-500">*</span>
                  </div>

                  <input
                    type="date"
                    disabled={education.isCurrentlyAttending}
                    value={
                      education.isCurrentlyAttending
                        ? new Date().toISOString().split('T')[0]
                        : education.durationEnd
                    }
                    onChange={handleEducationChange}
                    name="durationEnd"
                    placeholder="Date Ended"
                    className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-3">
                <div className="flex  justify-start items-center space-x-1">
                  <input
                    type="checkbox"
                    placeholder="Date Started"
                    name="presentEmployer"
                    checked={education.isCurrentlyAttending}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setEducation((prev) => ({
                        ...prev,
                        isCurrentlyAttending: checked,
                        durationEnd: checked ? new Date().toISOString().split('T')[0] : '',
                      }));
                    }}
                    className="p-3 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                  />

                  <p className='text-xs'>I am currently studying here</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-[12px]">
                    Location
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <LocationSearch setSelectedLocation={setSelectedEducationLocation} />
              </div>

              <div className="flex  justify-start items-center">
                <FaPlus color="#104B53" size={15} />
                <p className="text-[#104B53] text-xs uppercase font-semibold cursor-pointer">
                  Add Educations
                </p>
              </div>
            </div>
          </div>
          <hr />

          {/* buttons  */}

          <div className="flex w-full  justify-between md:justify-end items-center  space-x-4">
            <Link
              to={'/upload-resume'}
              className="flex justify-center items-center w-full md:w-24 h-8 text-xs  rounded-full cursor-pointer border border-[#104B53] text-[#104B53]"
            >
              Back
            </Link>
            <p
              onClick={handleContinue}
              className="flex justify-center items-center w-full md:w-24 h-8 text-xs rounded-full cursor-pointer bg-[#E9F358] "
            >
              Continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;

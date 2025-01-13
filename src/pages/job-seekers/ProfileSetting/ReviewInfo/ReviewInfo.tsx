import React from 'react';
import { TiTick } from 'react-icons/ti';
import { FaEdit, FaPlus } from 'react-icons/fa';

import { BiPlus } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../axios/axiosInstance';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  fetchUserDetails,
  fetchDomains,
  fetchRoleTypes,
  fetchRoles,
} from '../../../../utils/jobseekers/getUserDetails';
import { toast } from 'react-toastify';

const ReviewInfo: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: userDetails } = useQuery({
    queryKey: ['userDetails'],
    queryFn: fetchUserDetails,
  });

  const { data: role } = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
  });

  const { data: domains } = useQuery({
    queryKey: ['domains'],
    queryFn: fetchDomains,
  });

  const { data: jobTypes } = useQuery({
    queryKey: ['jobtypes'],
    queryFn: fetchRoleTypes,
  });

  const getRoleNameById = (id: number) =>
    role?.jobRoles?.find((role: { id: number; roleName: string }) => role.id === id)?.roleName ||
    'N/A';

  const getDomainNameById = (id: number) =>
    domains?.domains?.find((domain: { id: number; domainName: string }) => domain.id === id)
      ?.domainName || 'N/A';

  const getJobTypeById = (id: number) =>
    jobTypes?.jobRoles?.find((type: { id: number; typeName: string }) => type.id === id)
      ?.typeName || 'N/A';

  //deleting experience
  const mutation = useMutation({
    mutationFn: async (experienceID: number) => {
      const response = await axiosInstance.post('/api/candidate/details/delete-experience', {
        experienceID: experienceID,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
      toast.success('Experience Deleted Successfully!');
      navigate('/review-form');
    },
    onError: () => {
      toast.error('Failed to delete experience. Please try again.');
    },
  });
  const handleDeleteExperience = (id: number) => {
    mutation.mutate(id);
  };

  //deleteing education
  const educationMutation = useMutation({
    mutationFn: async (educationId: number) => {
      const response = await axiosInstance.post('/api/candidate/details/delete-education', {
        educationID: educationId,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
      toast.success('Education Deleted Successfully!');
      navigate('/review-form');
    },
    onError: () => {
      toast.error('Failed to delete experience. Please try again.');
    },
  });
  const handleDeleteEducation = (id: number) => {
    educationMutation.mutate(id);
  };

  return (
    <div className="w-full   pb-20 bg-[#F6F6F8]">
      <div className="max-w-[1280px] h-48  m-auto">
        <div className="">
          <div className="flex  flex-col  space-y-4 md:flex-row  md:justify-between md:items-center p-4">
            <h1 className="text-xl font-semibold">Setting up your profile</h1>

            <div className="flex justify-between md:justify-center items-center space-x-10">
              <p className="font-semibold text-[#104B53]">Cancel </p>
              <p className=" w-32 h-10 text-xs bg-[#104B53] md:bg-transparent  text-white md:w-40 md:h-10 rounded-full md:text-[#104B53]  flex justify-center items-center border border-[#104B53]">
                Save & Exit
              </p>
            </div>
          </div>
          <hr />

          <div className="w-full p-4">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-sm">
              <li className="flex md:w-full items-center text-[#104B53]   sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 flex justify-center items-center md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden md:block">Upload Resume</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-10 flex justify-center items-center md:w-14 h-10 bg-[#104B53] text-white rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden text-[#104B53]   md:block"> Additional Information</p>
                </span>
              </li>
              <li className="flex items-center">
                <span className="me-2 p-2 w-10 md:w-10 h-10 bg-[#104B53] text-white rounded-full">
                  3
                </span>
                <p className="hidden md:block"> Review</p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="max-w-[1080px] h-full rounded-lg   bg-white m-auto p-4 mt-10">
        <div className="w-full max-w-[1064px] m-auto pt-10 flex flex-col space-y-5">
          {/* Detal of Candidate  */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Detail of Candidate</h1>
            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-2">
                <FaEdit size={14} color="#104B53" />
                <p className="text-[#104B53] text-xs">Edit</p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="flex flex-col space-y-2">
                  <p className="text-[#838383] text-sm">First Name</p>
                  <p className="font-semibold text-xs">{userDetails?.user?.firstName}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#838383] text-sm">Last Name</p>
                  <p className="font-semibold text-xs">{userDetails?.user?.lastName}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#838383] text-sm">Email</p>
                  <p className="font-semibold text-xs">{userDetails?.user?.email}</p>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-[#838383] text-sm">Phone Number</p>
                  <p className="font-semibold text-xs">{userDetails?.user?.phoneNumber}</p>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-[#838383] text-sm">Visa Sponsership</p>
                  <p className="font-semibold text-xs">
                    {userDetails?.needVisaSponsorship ? 'Yes' : 'No'}
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-[#838383] text-sm">Location</p>
                  <p className="font-semibold text-xs">{userDetails?.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summery  */}

          <div className=" flex flex-col space-y-3">
            <h1 className="text-lg font-semibold">Summery</h1>
            <div className="border p-5 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-2">
                <FaEdit size={14} color="#104B53" />
                <p className="text-[#104B53] text-xs">Edit</p>
              </div>
              <p className="text-[#535354] text-justify text-sm">{userDetails?.summary}</p>
            </div>
          </div>

          {/* work experience  */}

          <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">
                Work Experience (Total 4 years 4 months of experience)
              </h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus size={14} color="#104B53" />
                <p className="text-[#104B53] text-xs font-semibold">Add</p>
              </div>
            </div>

            {userDetails?.candidatedetailsexperiences?.map(
              (item: WorkExperienceDetail, i: number) => {
                return (
                  <div key={i} className="border p-7 border-[#EBEBF0] rounded-lg">
                    <div className="flex justify-end items-center space-x-4">
                      <div className="flex items-center  ">
                        <FaEdit size={14} color="#104B53" />
                        <p className="text-[#104B53] text-xs">Edit</p>
                      </div>

                      <div
                        className="flex items-center cursor-pointer  "
                        onClick={() => handleDeleteExperience(item?.ID)}
                      >
                        <MdDeleteOutline color="#104B53" />
                        <p className="text-[#104B53] text-xs">Delete</p>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-5 ">
                      <div className="flex flex-col space-y-4">
                        <h1 className="text-sm font-semibold">{getRoleNameById(item?.role)}</h1>
                        <p className="text-[#6B7588] text-xs">
                          {item?.companydetails} - {item?.place}
                        </p>
                        <div className="flex space-x-3 flex-wrap  items-center w-full">
                          <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-2 rounded-full font-semibold text-xs">
                            {getDomainNameById(item?.domain)}
                          </p>
                          <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-2 rounded-full font-semibold text-xs">
                            {getJobTypeById(item?.jobType)}
                          </p>
                          <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-2 rounded-full font-semibold text-xs">
                            {new Date(item?.durationStart).toISOString().split('T')[0]} -{' '}
                            {item?.presentEmployer ? 'Present' : item?.durationEnd}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-4 ">
                        <h1 className="text-sm ">Job summery</h1>
                        <ul className="flex flex-col space-y-3">
                          <li className="text-[#3A3A3C] text-xs">
                            {item?.descriptionOfExperience}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>

          {/* Education  */}

          <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Education</h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus size={14} color="#104B53" />
                <p className="text-[#104B53] text-xs font-semibold">Add</p>
              </div>
            </div>

            {userDetails?.candidatedetailseducationdetails?.map(
              (item: EducationDetail, i: number) => {
                return (
                  <div className="border p-7 border-[#EBEBF0] rounded-lg" key={i}>
                    <div className="flex justify-end items-center space-x-4">
                      <div className="flex items-center  ">
                        <FaEdit size={14} color="#104B53" />
                        <p className="text-[#104B53] text-xs">Edit</p>
                      </div>

                      <div
                        className="flex items-center cursor-pointer "
                        onClick={() => handleDeleteEducation(item?.id)}
                      >
                        <MdDeleteOutline color="#104B53" size={14} />
                        <p className="text-[#104B53] text-xs">Delete</p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-col space-y-4">
                        <h1 className="text-sm font-semibold">{item?.degree}</h1>
                        <p className="text-[#6B7588] text-xs">
                          {item?.schoolName} - {item?.schoolLocation}
                        </p>
                        <div className="flex space-x-3 items-center">
                          <p className="text-[#7C8596] bg-[#F2F2F5] p-2 rounded-full font-semibold text-xs">
                            {new Date(item?.durationStart).toISOString().split('T')[0]} -{' '}
                            {item?.isCurrentlyAttending ? 'Present' : item?.durationEnd}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div></div>
                  </div>
                );
              },
            )}
          </div>

          {/* Certification  */}
          <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Ceritification</h1>

              <div className="flex justify-end items-center space-x-2">
                <BiPlus size={14} color="#104B53" />
                <p className="text-[#104B53] text-xs font-semibold">Add</p>
              </div>
            </div>

            <div className="border p-7 border-[#EBEBF0] rounded-lg">
              <div
                className="w-full max-w-[765px] h-[80px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              "
              >
                <p className="text-xs">Added certificate will be shown here</p>
              </div>
            </div>
          </div>

          {/* more sections  */}
          <div className="flex space-x-2 justify-start items-center">
            <FaPlus color="#104B53" size={14} />
            <p className="text-[#104B53] text-sm font-semibold cursor-pointer">Add More Section</p>
          </div>

          {/* buttion  */}

          <div className="flex flex-col space-y-5 md:flex-row justify-between items-center pb-10">
            <p className="text-[#7D8697] text-xs w-full">
              you can edit or modify the profile later in (profile)
            </p>
            <div className="flex w-full  justify-between md:justify-end items-center  space-x-4">
              <Link
                to={'/additional-information'}
                className="flex justify-center items-center w-full md:w-36 h-8  rounded-full cursor-pointer border border-[#104B53] text-[#104B53]"
              >
                Back
              </Link>
              <Link
                to={'/searchjob'}
                className="flex justify-center items-center w-full md:w-36 h-8  rounded-full cursor-pointer bg-[#E9F358] "
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;

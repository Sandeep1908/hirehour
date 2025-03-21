import React, { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';
import { GrDocumentPdf } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import LocationSearch from '../../../../utils/LocationSearch.tsx';
import { useDropzone } from 'react-dropzone';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../../axios/axiosInstance';
import formatLocation from '../../../../utils/jobseekers/formatedLocation.ts';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { fetchResumes, fetchUserDetails } from '../../../../utils/jobseekers/getUserDetails.ts';

type ResumeType = {
  id: number;
  resumeLink: string;
  createdAt: string;
};

type ModalUserDetails = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  needVisaSponsorship: boolean;
};

const UploadResume: React.FC = () => {
  const [isContinue, setIsContinue] = useState<boolean>(false);
  const description = 'resume';
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const queryClient = useQueryClient();
  const [selectedLocation, setSelectedLocation] = useState<LocationValue | null>(null);
  const [isVisaSponsored, setIsVisaSponsored] = useState<boolean>(false);
  const navigate = useNavigate();

  const visaSponsorshipOptions = [
    { value: true, label: 'Required' },
    { value: false, label: 'Not Required' },
  ];

  const { data: resumes } = useQuery({
    queryKey: ['resumes'],
    queryFn: fetchResumes,
  });

  const { data: userDetails } = useQuery({
    queryKey: ['userDetails'],
    queryFn: fetchUserDetails,
  });

  const latestResume = resumes?.resumes?.sort(
    (a: ResumeType, b: ResumeType) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )?.[0];

  const uploadResumeMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axiosInstance.post(`/api/candidate/details/resumes`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: ({ loaded, total }) => {
          if (total) {
            setUploadProgress(Math.round((loaded * 100) / total));
          } else {
            console.warn('Upload total size is undefined');
          }
        },
      });
      return response.data;
    },
    onSuccess: () => {
      setUploadProgress(null);
      queryClient.invalidateQueries({ queryKey: ['resumes'] });
      toast.success('Resume uploaded successfully!');
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setUploadProgress(null);
      toast.error(error?.response?.data?.message);
    },
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      const validFileTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      if (!validFileTypes.includes(file.type)) {
        toast.warning('Only PDF and DOCX files are allowed');
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        toast.warning('File size must be less than 2MB');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('description', description);
      uploadResumeMutation.mutate(formData);
    },
  });

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validFileTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!validFileTypes.includes(file.type)) {
      toast.warning('Only PDF and DOCX files are allowed');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.warning('File size must be less than 2MB');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);
    uploadResumeMutation.mutate(formData);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      firstName: userDetails?.user?.firstName,
      lastName: userDetails?.user?.lastName,
      phoneNumber: userDetails?.user?.phoneNumber,
      needVisaSponsorship: isVisaSponsored,
    };

    submitContactInfoMutation.mutate(formData);

    const locationData = { location: formatLocation(selectedLocation) || '' };
    submitLocation.mutate(locationData);
  };

  const submitContactInfoMutation = useMutation({
    mutationFn: async (formData: ModalUserDetails) => {
      const response = await axiosInstance.post(
        '/api/candidate/details/update-main-details',
        formData,
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success('Contact information saved successfully!');
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
      setIsContinue(false);
      navigate('/additional-information');
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const submitLocation = useMutation({
    mutationFn: async (formData: { location: string }) => {
      const response = await axiosInstance.post('/api/candidate/details/update-details', formData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['location'] });
      setIsContinue(false);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error?.response?.data?.message);
    },
  });
 
 
  return (
    <div className="w-full min-h-screen pb-20 bg-[#F6F6F8]">
      <div className="max-w-[1200px] h-48  m-auto">
        <div className="">
          <div className="flex  flex-col  space-y-4 md:flex-row  md:justify-between md:items-center p-4">
            <h1 className="text-sm font-semibold">Setting up your profile</h1>

            <div className="flex justify-between md:justify-center items-center space-x-10">
              <p className="font-semibold text-sm text-[#104B53]">Cancel </p>
              <p className=" w-32 h-8 text-[10px] bg-[#104B53] md:bg-transparent  text-white   rounded-full md:text-[#104B53]  flex justify-center items-center border border-[#104B53]">
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
                  <span className="me-2 p-2 w-10 h-8 text-[10px] flex justify-center items-center bg-[#C7C9D9] rounded-full">
                    2
                  </span>
                  <p className="hidden md:block text-xs"> Additional Information</p>
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

      <div className="max-w-[1200px]  md:h-[476px] bg-white m-auto p-4 mt-2">
        <div className="flex flex-col space-y-2">
          <h1 className="text-sm">Upload Your Resume</h1>
          <p className="text-xs text-[#6B7588]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center p-4 md:p-5 space-x-5">
          <div
            className={`w-full sm:w-[588px] h-[300px] border border-black border-dashed flex flex-col justify-center items-center ${isDragActive ? 'opacity-40' : ''}`}
          >
            <div className="flex flex-col space-y-3 justify-center items-center">
              <div {...getRootProps()} className="w-full h-20">
                <input {...getInputProps()} />
              </div>
              <p className="font-semibold text-sm"> Drap & Drop files Here</p>
              <p className="text-xs text-[#6B7588]">or</p>

              <label className="flex justify-center items-center w-36 h-7 p-0.5 rounded-full cursor-pointer bg-[#E9F358]">
                <FaCirclePlus size={13} color="#104B53" className="" />
                <span className="text-xs text-[#104B53] font-[500] pl-2">Upload Here</span>
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>

              <p className="text-xs text-[#6B7588]">
                <span className="font-semibold text-sm text-black mr-2">Note:</span>
                Supported File Type Pdf & Docx
              </p>
            </div>
          </div>

          <div className="w-full sm:w-[588px] h-[300px] p-4 flex flex-col justify-around md:justify-between items-center">
            <div className="flex flex-col space-y-5 w-full">
              {latestResume?.resumeLink ? (
                <>
                  <h1 className="text-sm font-semibold">
                    {uploadProgress !== null ? 'Uploading' : 'Uploaded'}
                  </h1>
                  <div className="w-full flex justify-center items-center space-x-5">
                    <GrDocumentPdf size={30} />
                    <div className="flex flex-col space-y-3 w-full">
                      <p className="text-xs">
                        <a
                          download="User"
                          target="_blank"
                          href={latestResume?.resumeLink || ''}
                          rel="noopener noreferrer"
                        >
                          {latestResume?.resumeLink.split('@@')[1]}{' '}
                          {(latestResume?.resumeLink.split('@@')[2] / (1024 * 1024)).toFixed(2)} MB
                        </a>
                      </p>
                      <div className="w-full max-w-60 bg-[#FFF1C6] rounded-full">
                        <div
                          className="bg-[#FFD05B] text-xs text-black text-center leading-none rounded-full"
                          style={{ width: `${uploadProgress}%` }}
                        >
                          {uploadProgress || 100}% 
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <h1 className="text-sm text-center font-semibold">No Resume Uploaded</h1>
              )}
            </div>

            <div className="w-full ">
              <hr />
              <div
                className="w-full flex justify-center md:justify-end md:mt-2 "
                onClick={() => setIsContinue(true)}
              >
                <p className="flex justify-center items-center w-full md:w-24 h-8 text-xs  rounded-md cursor-pointer bg-[#E9F358] ">
                  Continue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 ${isContinue ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}`}
      >
        <div className="z-[10] w-full max-w-md shadow-xl min-h-96  bg-white rounded-lg">
          <div className="flex justify-between items-center p-5">
            <div className="flex flex-col space-y-3">
              <h1 className="text-lg font-semibold">Verify your contact information</h1>
              <p className="text-sm text-[#6B7588]">Verify your contact information</p>
            </div>
            <IoMdClose size={20} onClick={() => setIsContinue(false)} className="cursor-pointer" />
          </div>
          <hr />

          <form onSubmit={handleFormSubmit} className="w-full flex flex-col space-y-4 p-4">
            <div className="w-full grid grid-cols-2 gap-3">
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">
                    First Name
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={userDetails?.user?.firstName}
                  disabled
                  className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">
                    Last Name
                  </label>
                  <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={userDetails?.user?.lastName}
                  disabled
                  className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">
                    Phone Number
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="text"
                  value={userDetails?.user?.phoneNumber}
                  disabled
                  placeholder="Enter your phone no"
                  className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-sm">
                    Email
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={userDetails?.user?.email}
                  disabled
                  className="p-2 text-sm border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-sm">
                  Visa Sponsorship
                </label>
                <span className="text-red-500">*</span>
              </div>

              <Select
                options={visaSponsorshipOptions}
                value={visaSponsorshipOptions.find((option) => option.value === isVisaSponsored)}
                onChange={(selectedOption) => setIsVisaSponsored(selectedOption?.value || false)}
                placeholder="Select Visa Sponsorship"
                isClearable
              />
            </div>

            <div className="w-full">
              <div className="flex ">
                <label htmlFor="" className="text-sm">
                  Location
                </label>
                <span className="text-red-500">*</span>
              </div>
              <LocationSearch setSelectedLocation={setSelectedLocation} />
            </div>

            <p className="text-[#6B7588] text-xs">
              Recruiters may search by location for candidates to hire better
            </p>

            <div className="w-full flex justify-center md:justify-end md:mt-4">
              <button type="submit" className="px-4 py-2 text-xs bg-[#E9F358] text-[#104B53] rounded-md">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;

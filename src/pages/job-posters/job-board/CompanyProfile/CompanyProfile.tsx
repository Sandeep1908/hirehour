import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { MdOutlineLinkedCamera } from 'react-icons/md';
import LocationSearch from '../../../../utils/LocationSearch';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import axiosrecruiterinstance from '../../../../axios/axiosrecruiterinstance';
import { useMutation, useQuery } from '@tanstack/react-query';
import formatLocation from '../../../../utils/jobseekers/formatedLocation';
import Companies from '../../../../utils/jobposters/Companies';
import { fetchOneCompany } from '../../../../utils/jobposters/jobboards/getCompanyDetails';

type CompanyDetailsRequest = {
  companyName: string;
  companyLogo: string;
  companyCoverImage: string;
  aboutCompany: string;
  companySizeInTermsOfEmpCount: number;
  domainItWorksIn: string;
  companyWebsiteURL: string;
  companyPhoneNumber: string;
};

const CompanyProfile: React.FC = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState<number | null>(null);
  const [headquaterLocation, setHeadQuaterLocation] = useState<LocationValue | null>(null);
  const jobId = useLocation().state?.jobId;

  const [formData, setFormData] = useState<CompanyDetailsRequest>({
    companyName: '',
    companyLogo:
      'https://dynamic.brandcrowd.com/asset/logo/189954ad-c0f4-4cd9-a5bb-a8e03970b056/logo-search-grid-1x?logoTemplateVersion=3&v=638644179405900000',
    companyCoverImage:
      'https://www.shutterstock.com/image-vector/abstract-corporate-business-digital-agency-600nw-2095258798.jpg',
    aboutCompany: '',

    companySizeInTermsOfEmpCount: 0,
    domainItWorksIn: 'NA',
    companyWebsiteURL: '',
    companyPhoneNumber: '',
  });

  const { data: companyDetail } = useQuery({
    queryKey: ['companydetail', company],
    queryFn: () => fetchOneCompany(company ?? 0),
    enabled: !!company,
  });

  useEffect(() => {
    if (companyDetail) {
      setFormData({
        ...formData,
        companyName: companyDetail.companyName,
        companyLogo: companyDetail.companyLogo,
        companyCoverImage: companyDetail.companyCoverImage,
        aboutCompany: companyDetail.aboutCompany,
        companySizeInTermsOfEmpCount: companyDetail.companySizeInTermsOfEmpCount,
        domainItWorksIn: companyDetail.domainItWorksIn,
        companyWebsiteURL: companyDetail.companyWebsiteURL,
        companyPhoneNumber: companyDetail.companyPhoneNumber,
      });
    }
  }, [companyDetail, company]);

  // Handle file input for cover image
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const name = e.target.name;
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [name]: file.name,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'radio' ? value === 'true' : value,
    }));
  };

  // Mutating for company details
  const companyDescritionMutation = useMutation({
    mutationFn: async (companyDescription: CompanyDetailsRequest) => {
      const response = await axiosrecruiterinstance.post(
        '/api/recruiter/company-management/create-company',
        companyDescription,
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      const companyId = data?.company?.id; // Assuming the response includes `companyId`
      associateCompanyWithJob(companyId); // Trigger the next API call
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ errors: string[] }>;
      console.log('myaxos', axiosError.response?.data.errors);
      toast.error(axiosError.response?.data.errors[0]);
    },
  });

  // Mutation for associating the company with a job
  const associateCompanyWithJobMutation = useMutation({
    mutationFn: async (companyID: number) => {
      const response = await axiosrecruiterinstance.post(`/api/recruiter/jobs/part3/${jobId}`, {
        companyID,
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast.success('Company Associated with Job Successfully');
      navigate('/job-poster/review', { state: { userDetails: data?.job, message: data?.message } });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ errors: string[] }>;
      toast.error(axiosError.response?.data.errors[0]);
    },
  });

  const associateCompanyWithJob = (companyId: number) => {
    associateCompanyWithJobMutation.mutate(companyId);
  };

  const handleJobBoardSubmit = () => {
    if (company === null) return toast.warning('Please Enter Company Details');
    if (company === 0) {
      const newCompanyDescription = {
        ...formData,
        headquartersLocation: formatLocation(headquaterLocation),
      };
      companyDescritionMutation.mutate(newCompanyDescription);
    } else {
      associateCompanyWithJob(company);
    }
  };

  return (
    <div className="w-full   pb-10 bg-[#F6F6F8]">
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
                    <TiTick />
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block">Job Basis</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Job Description</p>
                </span>
              </li>

              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full">
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

      {/* Cover Images  */}

      <div className="max-w-[1080px] mt-2 h-full rounded-lg   bg-white m-auto  pb-4">
        <div className="w-full max-w-[800px] m-auto  p-3 flex flex-col space-y-5">
          <div className="w-full h-40 border  bg-white relative">
            <div className="w-full h-24 bg-[#F2F2F5]">
              <div className="flex justify-center items-center h-full">
                <label className={`flex justify-center items-center space-x-3`}>
                  <span className={`text-[10px] text-[#6B7588]  font-[500] pl-2`}>
                    Company Cover Image
                  </span>
                  <MdOutlineLinkedCamera size={13} color="#6B7588" className="" />
                  <input
                    type="file"
                    className="hidden"
                    name="companyCoverImage"
                    onChange={handleFileChange}
                  />
                  <p className="text-[9px]">{formData.companyCoverImage}</p>
                </label>
              </div>
            </div>

            <div className="w-20 h-20 flex justify-center items-center border absolute top-10 left-14 shadow-lg bg-[#F2F2F5]">
              <label className={`flex flex-col justify-center items-center space-y-1`}>
                <span className={`text-[7px] text-[#6B7588] text-center font-[500] pl-2`}>
                  Company Logo
                </span>
                <MdOutlineLinkedCamera size={13} color="#6B7588" className="" />
                <input
                  type="file"
                  className="hidden"
                  name="companyLogo"
                  onChange={handleFileChange}
                />
                <p className="text-[9px]">{formData.companyLogo}</p>
              </label>
            </div>
          </div>

          <div className="w-full grid md:md:grid-cols-2 gap-3">
            {/* Company Name  */}
            {company === 0 ? (
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-xs">
                    Enter Company Name
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <input
                  type="text"
                  value={formData.companyName}
                  name="companyName"
                  onChange={handleChange}
                  placeholder="Search by location"
                  className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
                />
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="" className="text-xs">
                    Company Name
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <Companies setCompanyId={setCompany} />
              </div>
            )}

            {/* Company Address  */}

            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-xs">
                  Company Address
                </label>
                <span className="text-red-500">*</span>
              </div>

              <input
                type="text"
                placeholder="Search by location"
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
              />
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 gap-3">
            {/* Location  */}
            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-xs">
                  Location
                </label>
                <span className="text-red-500">*</span>
              </div>

              <input
                type="text"
                placeholder="Location"
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
              />
            </div>

            {/* Headquater  */}
            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-xs">
                  Headquater Location
                </label>
                <span className="text-red-500">*</span>
              </div>

              <LocationSearch setSelectedLocation={setHeadQuaterLocation} />
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 gap-3">
            {/* Company Size  */}
            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-xs">
                  Company Size
                </label>
                <span className="text-red-500">*</span>
              </div>

              <input
                type="number"
                placeholder="Company size"
                value={formData.companySizeInTermsOfEmpCount}
                name="companySizeInTermsOfEmpCount"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
              />
            </div>

            {/* Notification Email  */}

            <div className="flex flex-col justify-start items-start">
              <div className="flex ">
                <label htmlFor="" className="text-xs font-[300]">
                  Receive notification through emails
                </label>
              </div>
              <div className="flex justify-between p-2 w-full">
                <p className="text-sm">mathewxyz.com</p>
              </div>
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 gap-3">
            {/* Company Website  */}
            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-xs">
                  Company Website URL
                </label>
                <span className="text-red-500">*</span>
              </div>

              <input
                type="text"
                placeholder="Company URL"
                value={formData.companyWebsiteURL}
                name="companyWebsiteURL"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
              />
            </div>

            {/* Company phone  */}

            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-xs">
                  Phone Number
                </label>
                <span className="text-red-500">*</span>
              </div>

              <input
                type="text"
                placeholder="Phone No"
                value={formData.companyPhoneNumber}
                name="companyPhoneNumber"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
              />
            </div>
          </div>

          <div className="w-full  ">
            {/* Company Description  */}

            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="" className="text-xs">
                  Company Description
                </label>
              </div>

              <textarea
                value={formData.aboutCompany}
                name="aboutCompany"
                onChange={handleChange}
                className="p-2 border w-full border-[#EBEBF0] min-h-44 rounded-md placeholder:text-xs"
              />
            </div>
          </div>

          {/* buttons  */}

          <div className="flex w-full  justify-between md:justify-end items-center  space-x-4">
            <Link
              to={''}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer  text-[#104B53]"
            >
              Back
            </Link>
            <p
              onClick={() => handleJobBoardSubmit()}
              className="flex justify-center items-center w-full md:w-28 h-8  text-xs rounded-full cursor-pointer bg-[#E9F358] "
            >
              {companyDescritionMutation.isPending ? 'Saving...' : 'Continue'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;

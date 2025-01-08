import { useEffect, useState } from 'react';

import { IoMdClose } from 'react-icons/io';

import { Link } from 'react-router-dom';
import SentRTR from './RTR/SentRtr';
import ReceiveRTR from './RTR/ReceivedRtr';
import AcceptedRTR from './RTR/AcceptedRTR';
import DeclineRTR from './RTR/DeclineRTR';
import ExpireRTR from './RTR/ExpireRTR';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchPostedJob } from '../../../utils/jobposters/jobboards/getJobs';
import JobsList from '../../../utils/jobposters/Jobs';

import AllApplicants from '../../../utils/jobposters/AllApplicants';
import {
  fetchOneApplicants,
  fetchOneEmployers,
} from '../../../utils/jobposters/jobboards/miscellaneous';
import axiosrecruiterinstance from '../../../axios/axiosrecruiterinstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import AllEmployer from '../../../utils/jobposters/AllEmployer';

type SendRTRModalProps = {
  isRTROpen: boolean;
  setIsRTROpen: (e: boolean) => void;
};

type JobDetials = {
  jobLocation: string;
  accommodationType: string;
};

const SendRTRModal: React.FC<SendRTRModalProps> = ({ isRTROpen, setIsRTROpen }) => {
  const [jobId, setJobId] = useState<number>(0);
  const [candidateId, setCandidateId] = useState<string>('');
  const [recruiterId, setRecruiterId] = useState<string>('');

  const [jobDetails, setJobDetails] = useState<JobDetials>({
    jobLocation: '',
    accommodationType: '',
  });
  const [rtrDetails, setRtrDetails] = useState<RTRAgreement>({
    jobID: 0,
    vendorID: 0,
    candidateID: 0,
    employerID: 0,
    agreedUponRateForCandidate: 0,
    agreedUponRateForVendor: 1000,
    clientCompany: '',
    implementationCompany: '',
    primeVendorCompany: '',
    vendorCompany: '',
    typeOfRTR: 'Fixed',
    sentToCandidate: false,
    sentToRecruiter: false,
    rtrContents: '',
    validityPeriod: '',
    isSignedByEmployer: false,
    isSignedByCandidate: false,
    isActive: true,
  });

  const { data: viewjobs } = useQuery({
    queryKey: ['viewjobs'],
    queryFn: fetchPostedJob,
  });

  const { data: applicant } = useQuery({
    queryKey: ['applicant'],
    queryFn: () => fetchOneApplicants(candidateId),
    enabled: !!candidateId,
  });

  const { data: employer } = useQuery({
    queryKey: ['employer'],
    queryFn: () => fetchOneEmployers(recruiterId),
    enabled: !!recruiterId,
  });

  console.log('employer', employer);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;

    setRtrDetails((prev) => {
      if (name === 'selection') {
        // Handle radio button logic
        switch (value) {
          case 'employerOnly':
            return {
              ...prev,
              sentToRecruiter: true,
              sentToCandidate: false,
            };
          case 'applicantOnly':
            return {
              ...prev,
              sentToRecruiter: false,
              sentToCandidate: true,
            };
          case 'applicantAndEmployer':
            return {
              ...prev,
              sentToRecruiter: true,
              sentToCandidate: true,
            };
          default:
            return prev;
        }
      }

      // Handle other input types (text, checkbox, etc.)
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const rtrmutation = useMutation({
    mutationFn: async (rtrdetails: RTRAgreement) => {
      const response = await axiosrecruiterinstance.post(
        '/api/recruiter/rtr/create-rtr',
        rtrdetails,
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success('RTR Sent Succeccfully');
    },
    onError: (error) => {
      console.log('error', error);
      const axiosError = error as AxiosError<{ errors: string[] }>;
      toast.error(axiosError.response?.data.errors[0]);
    },
  });

  useEffect(() => {
    if (viewjobs) {
      const job = viewjobs?.jobs?.filter(
        (item: {
          id: number;
          jobRoleName: string;
          jobLocation: string;
          employmentType: string;
          accommodationType: string;
        }) => item.id === jobId,
      )?.[0];

      setRtrDetails({
        ...rtrDetails,
        jobID: job?.id,
        candidateID: applicant?.[0]?.id,
        employerID: employer?.[0]?.id,
        vendorID: employer?.[0]?.id,
      });

      setJobDetails({
        ...jobDetails,
        accommodationType: job?.accommodationType,
        jobLocation: job?.jobLocation,
      });
    }
  }, [jobId, candidateId, applicant]);

  const handleSendRTR = () => {
    setIsRTROpen(false);
    rtrmutation.mutate(rtrDetails);
  };

  return (
    <div
      className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 ${isRTROpen ? 'opacity-1 scale-[1.01] z-[10]' : 'opacity-0 z-[-100]'}   `}
    >
      <div className="w-full h-screen hidden md:block absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

      <div
        className="   z-[10] w-full h-[98%] max-w-[500px]  relative shadow-xl
                          overflow-auto  bg-white rounded-lg"
      >
        <div className="flex justify-between items-center p-5 sticky top-0 bg-white z-10">
          <div className="flex flex-col space-y-3">
            <h1 className="text-sm font-[500]">Send RTR</h1>
          </div>

          <IoMdClose
            size={20}
            color="#6B7588"
            className="cursor-pointer"
            onClick={() => setIsRTROpen(false)}
          />
        </div>

        <hr />

        <div className="w-full flex flex-col space-y-4  p-4">
          <div className="w-full grid grid-cols-2 gap-3">
            {/* Job Title  */}
            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Job Title</label>
              </div>

              <JobsList setJobId={setJobId} />
            </div>

            {/* Job Id  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Job Id</label>
              </div>

              <input
                type="text"
                placeholder="Job Id"
                disabled
                value={rtrDetails?.jobID}
                name="JobId"
                onChange={handleChange}
                className="p-2 border text-xs border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            {/* Location  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Location</label>
              </div>

              <input
                type="email"
                disabled
                value={jobDetails.jobLocation}
                placeholder="Enter your Location"
                className="p-2  text-xs border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Job type  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Job Type</label>
              </div>

              <input
                type="text"
                placeholder="Job Type"
                disabled
                value={jobDetails.accommodationType}
                className="p-2 text-xs border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-4">
            <div className="flex text-xs space-x-1">
              <input
                type="radio"
                name="selection"
                value="employerOnly"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
              />
              <label htmlFor="">Employer only</label>
            </div>

            <div className="flex col-span-2 justify-center items-center text-xs space-x-1">
              <input
                type="radio"
                name="selection"
                onChange={handleChange}
                value="applicantAndEmployer"
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
              />
              <label htmlFor="">Applicant and Employer</label>
            </div>

            <div className="flex text-xs space-x-1">
              <input
                type="radio"
                name="selection"
                value="applicantOnly"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
              />
              <label htmlFor="">Applicant only</label>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            {/* Applicant name  */}
            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Applicant name</label>
              </div>
              <AllApplicants setCandidateId={setCandidateId} />
            </div>

            {/* Employer name  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Employer name</label>
              </div>

              <AllEmployer setEmployerId={setRecruiterId} />

              {/* <input
                type="text"
                placeholder="Employer name "
                disabled={
                  !(rtrDetails.sentToCandidate && rtrDetails.sentToRecruiter) &&
                  !rtrDetails.sentToRecruiter
                }
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              /> */}
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            {/* Applicant Email  */}
            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Applicant Email</label>
              </div>

              <input
                type="email"
                placeholder="Applicant Email"
                value={applicant?.[0]?.email}
                className="p-2 text-xs border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Employer Email  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Employer Email</label>
              </div>

              <input
                type="email"
                placeholder="Employer Email"
                value={employer?.[0]?.email}
                disabled={
                  !(rtrDetails.sentToCandidate && rtrDetails.sentToRecruiter) &&
                  !rtrDetails.sentToRecruiter
                }
                className="p-2 text-xs border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            {/* Applicant Company  */}
            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Applicant Company</label>
              </div>

              <input
                type="text"
                placeholder="Applicant Company"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Employer Company  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Employer Company</label>
              </div>

              <input
                type="text"
                placeholder="Employer Company"
                disabled={
                  !(rtrDetails.sentToCandidate && rtrDetails.sentToRecruiter) &&
                  !rtrDetails.sentToRecruiter
                }
                className="p-2 text-xs border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            {/* RTR Validity (in Days)  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">RTR Validity (in Days)</label>
              </div>

              <input
                type="date"
                placeholder="Submission (in Days)"
                name="validityPeriod"
                onChange={handleChange}
                className="p-2 text-xs border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-3">
            {/* Show pay by  */}
            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Show pay by</label>
              </div>

              <input
                type="number"
                placeholder="Show pay by"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Amount  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Amount</label>
              </div>

              <input
                type="number"
                placeholder="Amount"
                name="agreedUponRateForCandidate"
                value={rtrDetails.agreedUponRateForCandidate}
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Rate
             */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Rate</label>
              </div>

              <input
                type="email"
                placeholder=" Rate"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            {/* Client */}
            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Client</label>
              </div>

              <input
                type="text"
                placeholder="Client"
                value={rtrDetails.clientCompany}
                name="clientCompany"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Implementation  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Implementation</label>
              </div>

              <input
                type="email"
                placeholder="Implementation"
                value={rtrDetails.implementationCompany}
                name="implementationCompany"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-3">
            {/* Prime Vendor */}
            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Prime Vendor</label>
              </div>

              <input
                type="text"
                placeholder="Prime Vendor"
                value={rtrDetails.primeVendorCompany}
                name="primeVendorCompany"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/*  Vendor  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Vendor</label>
              </div>

              <input
                type="email"
                placeholder="Vendor"
                value={rtrDetails.vendorCompany}
                name="vendorCompany"
                onChange={handleChange}
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="flex flex-col w-full  border ">
            <div className="flex justify-end items-center p-1 bg-[#F2F2F5]">
              <p className="w-32  h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full font-[500]">
                Ask AI to generate
              </p>
            </div>

            <textarea
              value={rtrDetails.rtrContents}
              name="rtrContents"
              onChange={handleChange}
              className="w-full  text-[10px] p-2 min-h-44 text-[#3A3A3C] tracking-wide"
            ></textarea>
          </div>
        </div>

        {/* Button submit  */}

        <div className="p-4">
          <div className="w-full flex justify-center md:justify-end md:mt-4">
            <p
              onClick={() => handleSendRTR()}
              className="flex justify-center items-center w-full md:w-36 h-8 text-xs  rounded-full cursor-pointer bg-[#E9F358] "
            >
              Send
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const RTR: React.FC = () => {
  const [isRTROpen, setIsRTROpen] = useState(false);
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const [receivedRTRIdx, setReceivedRTRIdx] = useState<number>(0);

  const tags = [
    { label: 'News', count: 2, components: <ReceiveRTR /> },
    { label: 'Accepted', count: 3, components: <AcceptedRTR /> },
    { label: 'Decline ', count: 3, components: <DeclineRTR /> },
    { label: 'Expire', count: 1, components: <ExpireRTR /> },
  ];
  const rtrFilters = [
    {
      label: 'Sent',
      count: 3,
      component: <SentRTR />,
    },
    {
      label: 'Received',
      count: 2,
      component: <ReceiveRTR />,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-sm font-semibold">Right To Represent</h1>
        <Link
          to="/job-poster/job-basis"
          className="w-24 h-8 flex justify-center items-center bg-[#E9F358] text-[#104B53] rounded-full text-xs"
        >
          Post a Job
        </Link>
      </div>
      <hr />

      {/* tabs  */}
      <div className="p-1 flex justify-between items-center">
        <ul className="max-w-[300px]  w-full  rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
          {rtrFilters?.map((item, i) => {
            return (
              <li
                key={i}
                className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                onClick={() => setJobFilterIdx(i)}
              >
                <span>{item.label}</span>{' '}
                <span
                  className={`bg-[#104B53]  w-6   text-center rounded-lg ${jobFilterIdx === i ? 'bg-white text-[#104B53] ' : 'text-white'} `}
                >
                  {item.count}
                </span>
              </li>
            );
          })}
        </ul>
        <p
          className="w-28 h-8 rounded-full   bg-[#104B53] text-white flex justify-center items-center text-xs cursor-pointer"
          onClick={() => setIsRTROpen(true)}
        >
          Send RTR
        </p>
        <SendRTRModal setIsRTROpen={setIsRTROpen} isRTROpen={isRTROpen} />
      </div>

      {/* received rtr tabs  */}
      {jobFilterIdx === 1 && (
        <div className="  w-full overflow-auto flex justify-between px-2 items-center relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC] ">
          <ul className="w-screen md:w-auto overflow-auto flex items-center space-x-7 p-2  ">
            {tags?.map((item, id) => {
              return (
                <p
                  onClick={() => setReceivedRTRIdx(id)}
                  className={` text-xs  font-[600] cursor-pointer  ${receivedRTRIdx === id ? 'text-[#104B53]' : ''}`}
                  key={id}
                >
                  {item.label} ({item.count})
                </p>
              );
            })}
          </ul>
        </div>
      )}

      {/* filters  */}
      <div className=" p-3    flex  space-x-4   ">
        <div className="w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <select name="" id="" className="text-xs text-[#6B7588] outline-none">
            <option value="">All jobs</option>
          </select>
        </div>

        <div className="w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <select name="" id="" className="text-xs text-[#6B7588] outline-none">
            <option value="">Valid</option>
          </select>
        </div>

        <div className="w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <select name="" id="" className="text-xs text-[#6B7588] outline-none">
            <option value="">Employer Company</option>
          </select>
        </div>

        <div className="w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold text-[#6B7588]">Applicant :</p>
          <select name="" id="" className="text-xs text-[#6B7588] outline-none">
            <option value="">Any</option>
          </select>
        </div>

        <div className="w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold text-[#6B7588]">Sent by :</p>
          <select name="" id="" className="text-xs text-[#6B7588] outline-none">
            <option value="">Any</option>
          </select>
        </div>

        <div className="w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full">
          <p className="text-xs font-semibold text-[#6B7588]">Sent Date :</p>
          <select name="" id="" className="text-xs text-[#6B7588] outline-none">
            <option value="">Anytime</option>
          </select>
        </div>
      </div>

      {jobFilterIdx === 1 ? (
        <div className="w-full   px-3 space-y-3 overflow-auto h-[60vh]">
          {tags?.map((item, i) => {
            if (receivedRTRIdx === i) return <div key={i}>{item.components}</div>;
          })}
        </div>
      ) : (
        <div className="w-full   px-3 space-y-3 overflow-auto h-[60vh]">
          {rtrFilters?.map((item, i) => {
            if (jobFilterIdx === i) {
              return <div key={i}>{item.component}</div>;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default RTR;

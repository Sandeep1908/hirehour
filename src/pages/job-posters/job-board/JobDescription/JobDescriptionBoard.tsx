import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import Select from 'react-select';
import { FaPlus } from 'react-icons/fa6';
import { MultiValue } from 'react-select';
import {
  rateOption,
  showPayByOption,
  workStackOptions,
} from '../../../../config/jobposters/jobdescrioptionboardoptions';
import axiosrecruiterinstance from '../../../../axios/axiosrecruiterinstance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import ScreeningQuestions from './Questionaries';
import Spinner from '../../../../components/Spinner';

type JobDescriptionRequest = {
  salaryOfferedRangeStart: number;
  salaryOfferedRangeEnd: number;
  salaryOfferedRangeType: string;
  jobDescription: string;
  workStack: string[];
  additionalBenefits: string[];
};

const JobDescriptionBoard: React.FC = () => {
  const [formData, setFormData] = useState<JobDescriptionRequest>({
    salaryOfferedRangeStart: 0,
    salaryOfferedRangeEnd: 0,
    salaryOfferedRangeType: '',
    jobDescription: '',
    workStack: [],
    additionalBenefits: [],
  });

  const [range, setRange] = useState<'fixed' | 'range'>('range');
  

  const navigate = useNavigate();
  const jobId = useLocation().state?.jobId;

  const [benefitOptions, setBenefitOptions] = useState([
    { value: 'Health Insurance', label: 'Health Insurance' },
    { value: 'Paid Time Off', label: 'Paid Time Off' },
  ]);

  const [suggestedBenefits, setSuggestedBenefits] = useState([
    'Visa Sponsorship',
    'Remote Work',
    'Flexible Hours',
  ]);

  const handleSuggestedBenefitClick = (benefit: string) => {
    setFormData((prev) => {
      const updatedBenefits = new Set([...prev.additionalBenefits, benefit]);
      return { ...prev, additionalBenefits: Array.from(updatedBenefits) };
    });

    // Add to benefitOptions dynamically if not already present
    setBenefitOptions((prev) => {
      const exists = prev.some((option) => option.value === benefit);
      if (!exists) {
        return [...prev, { value: benefit, label: benefit }];
      }
      return prev;
    });

    setSuggestedBenefits((prev) => prev.filter((item) => item !== benefit));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' && (e.target as HTMLInputElement).checked;
    
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'radio' ? value === 'true' : value,
    }));
  };

  const jobDescriptionMutation = useMutation({
    mutationFn: async (jobDescription: JobDescriptionRequest) => {
      const response = await axiosrecruiterinstance.post(
        `/api/recruiter/jobs/part2/${jobId}`,
        jobDescription,
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success('Job Description Data Saved');
      navigate('/job-poster/company-profile', { state: { jobId: jobId } });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ errors: [{ message: string }] }>;
      toast.error(axiosError?.response?.data?.errors[0].message);
    },
  });

  const handleJobBoardSubmit = () => {
    jobDescriptionMutation.mutate(formData);
  };

  const handleSelectChange = (selectedOption: MultiValue<{ value: string; label: string }>) => {
    const selectedBenefits = selectedOption.map((option) => option.value);

    const removedBenefits = formData.additionalBenefits.filter(
      (benefit) => !selectedBenefits.includes(benefit),
    );

    setSuggestedBenefits((prev) => [...prev, ...removedBenefits]);

    setFormData((prev) => ({
      ...prev,
      additionalBenefits: selectedBenefits,
    }));
  };

  return (
    <div className="w-full md:pb-20 bg-[#F6F6F8]">
      <div className="max-w-[1080px] pt-2 rounded-lg m-auto">
        <div className="bg-white">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center p-4">
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
                className="w-28 h-7 text-[10px] bg-[#104B53] md:bg-transparent text-white rounded-full md:text-[#104B53] flex justify-center items-center border border-[#104B53]"
              >
                Save & Exit
              </p>
            </div>
          </div>
          <hr />

          <div className="w-full p-3">
            <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-sm">
              <li className="flex md:w-full items-center text-[#104B53] sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 md:w-7 text-xs h-7 bg-[#104B53] text-white rounded-full">
                    <TiTick />
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block">Job Basis</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                  <span className="me-2 p-2 w-7 h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full">
                    2
                  </span>
                  <p className="hidden text-[10px] w-[100px] md:block"> Job Description</p>
                </span>
              </li>
              <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
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

      <div className="max-w-[1080px] h-full rounded-lg mt-3 bg-white m-auto pb-2">
        <div className="w-full max-w-[1064px] m-auto flex flex-col space-y-5">
          <div className="flex flex-col space-y-3">
            <div className="w-full flex flex-col space-y-3 p-2">
              {/* Pay range */}
              <div className="flex flex-col space-y-2">
                <div className="flex">
                  <label htmlFor="" className="text-xs">
                    Pay range
                  </label>
                  <span className="text-red-500">*</span>
                </div>

                <div className="w-full grid sm:grid-cols-4 gap-3">
                  <div className="flex flex-col space-y-2">
                    <div className="flex text-xs ">
                      <label htmlFor="">Show pay by</label>
                    </div>

                    <Select
                      onChange={(e) => setRange((e?.value as 'fixed' | 'range') || 'range')}
                      options={showPayByOption}
                      className="text-xs text-[#9CA3AF]"
                    />
                  </div>

                  {range === 'range' ? (
                    <>
                      {/* Min */}
                      <div className="flex flex-col space-y-2">
                        <div className="flex text-xs">
                          <label htmlFor="salaryOfferedRangeStart">Minimum Salary</label>
                        </div>
                        <div className="flex items-center border border-[#EBEBF0] rounded-md">
                          <span className="px-2 text-sm text-[#104B53]">$</span>
                          <input
                            type="number"
                            id="salaryOfferedRangeStart"
                            name="salaryOfferedRangeStart"
                            value={formData.salaryOfferedRangeStart}
                            onChange={handleChange}
                            placeholder="Minimum Salary ($/hour)"
                            className="p-2 text-sm border-none placeholder:text-[10px] w-full"
                          />
                        </div>
                      </div>

                      {/* Max */}
                      <div className="flex flex-col space-y-2">
                        <div className="flex text-xs">
                          <label htmlFor="salaryOfferedRangeEnd">Maximum Salary</label>
                        </div>
                        <div className="flex items-center border border-[#EBEBF0] rounded-md">
                          <span className="px-2 text-sm text-[#104B53]">$</span>
                          <input
                            type="number"
                            id="salaryOfferedRangeEnd"
                            name="salaryOfferedRangeEnd"
                            value={formData.salaryOfferedRangeEnd}
                            onChange={handleChange}
                            placeholder="Maximum Salary ($/hour)"
                            className="p-2 text-sm border-none placeholder:text-[10px] w-full"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col space-y-2 col-span-2">
                      <div className="flex text-xs">
                        <label htmlFor="fixed">Amount</label>
                      </div>
                      <div className="flex items-center border border-[#EBEBF0] rounded-md">
                        <span className="px-2 text-sm text-[#104B53]">$</span>
                        <input
                          type="number"
                          id="fixed"
                          name="salaryOfferedRangeStart"
                          value={formData.salaryOfferedRangeStart}
                          onChange={handleChange}
                          placeholder="Maximum Salary ($/hour)"
                          className="p-2 text-sm border-none placeholder:text-[10px] w-full"
                        />
                      </div>
                    </div>
                  )}

                  {/* Pay type */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex text-xs ">
                      <label htmlFor="">Rate</label>
                    </div>

                    <Select
                      options={rateOption}
                      value={{
                        value: formData.salaryOfferedRangeType,
                        label: formData.salaryOfferedRangeType,
                      }}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          salaryOfferedRangeType: e ? e.value : '',
                        }))
                      }
                      className="text-xs text-[#9CA3AF]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="w-full p-2">
              <div className="flex justify-between bg-[#F2F2F5] p-2 rounded-md">
                <div>
                  <label htmlFor="jobDescription" className="text-xs">
                    Job Description
                  </label>

                  
                </div>
                <p className='bg-[#104B53] text-white px-4 rounded-full flex justify-center items-center text-xs'>Ask AI to generate</p>
              </div>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                placeholder="Job Description"
                className="text-xs min-h-44 text-[#9CA3AF] w-full rounded-md border p-3 placeholder:text-[10px] focus:outline-none"
              />
            </div>
            {/* Work Stack */}
            <div className="w-full p-2">
              <div className="flex justify-between">
                <div>
                  <label htmlFor="workStack" className="text-xs">
                    Work Stack
                  </label>
                </div>
              </div>
              <Select
                options={workStackOptions}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    workStack: e ? e.map((option) => option.value) : [],
                  }))
                }
                isMulti
                className="w-full text-xs"
              />
            </div>

            {/* Benefits selection */}
            <div className="w-full p-2">
              <div className="flex justify-between">
                <div>
                  <label htmlFor="additionalBenefits" className="text-xs">
                    Selected Benefits
                  </label>
                </div>
              </div>
              <Select
                isMulti
                name="additionalBenefits"
                value={formData.additionalBenefits.map((benefit) => ({
                  value: benefit,
                  label: benefit,
                }))}
                onChange={handleSelectChange}
                options={benefitOptions}
                className="text-xs text-[#9CA3AF]"
              />
            </div>

            {/* Suggested Benefits */}
            <div className="w-full p-2">
              <div className="flex justify-between">
                <div>
                  <label htmlFor="" className="text-xs">
                    Suggested Benefits
                  </label>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {suggestedBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 px-4 border rounded-md cursor-pointer"
                    onClick={() => handleSuggestedBenefitClick(benefit)}
                  >
                    <p className="text-xs text-[#104B53]">{benefit}</p>
                    <FaPlus className="text-xs text-[#104B53]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full p-2">
              <ScreeningQuestions />
            </div>

            <div className="p-4 flex justify-end space-x-2 items-center">
              <button
                onClick={() => navigate('/job-poster/job-basis')}
                className="w-28 border border-[#104B53] py-2 rounded-full text-[#104B53] text-xs"
              >
                Back
              </button>

              <button
                onClick={handleJobBoardSubmit}
                className="w-36 bg-[#E9F358] text-[#104B53] py-2 rounded-full text-xs"
              >
                {jobDescriptionMutation.isPending ? (
                  <div className="flex space-x-1 justify-center items-center">
                    <p>Saving...</p>
                    <Spinner size={5} color="#104B53" />
                  </div>
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionBoard;

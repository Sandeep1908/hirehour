import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { fetchUserDetails } from '../../../utils/jobseekers/getUserDetails';
import axiosInstance from '../../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type AddSummary = {
  setSummaryPopup: (agr: boolean) => void;
};

const Summary: React.FC<AddSummary> = ({ setSummaryPopup }) => {
  const [summary, setSummary] = useState<SummaryDetails>({ summary: '' });
  const maxLength = 2000;
  const { data: userDetails } = useQuery({ queryKey: ['userDetails'], queryFn: fetchUserDetails });
  const queryClient = useQueryClient();

  useEffect(() => {
    setSummary({ summary: userDetails?.summary });
  }, [userDetails?.summary]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setSummary({ summary: value });
    }
  };

  const summeryMuation = useMutation({
    mutationFn: async (summery: SummaryDetails) => {
      const response = await axiosInstance.post('/api/candidate/details/update-details', summery);
      return response.data;
    },
    onSuccess: () => {
      toast.success('Summary Edited Succesfully');
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
      setSummaryPopup(false);
    },
    onError: (error) => {
      const axiosError= error as AxiosError<{message:string}>
      toast.error(axiosError?.response?.data?.message)
    },
  });

  const handleContinue = () => {
    summeryMuation.mutate(summary);
  };

  return (
    <div className="w-full h-full flex p-3 justify-center items-center fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40]">
      <div className="w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black"></div>

      <div className="max-w-[700px] h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-4">
        <div className="flex justify-between items-center">
          <div className="text-base md:text-xl font-bold">
            <p>Summary</p>
          </div>
          <IoMdClose
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setSummaryPopup(false);
            }}
          />
        </div>
        <hr className="mt-3" />
        <div className="py-4">
          {/* Editable textarea */}
          <textarea
            name="summary"
            id="summary"
            className="text-base w-full h-[280px] rounded-xl border-[1px] border-[#E1E1E2] mt-3 p-4"
            value={summary.summary}
            onChange={handleTextareaChange}
            maxLength={maxLength}
          ></textarea>
          {/* Character count */}
          <p
            className={`text-base font-normal text-right mr-2 ${summary?.summary?.length === maxLength ? 'text-red-500' : ''}`}
          >
            {summary?.summary?.length}/{maxLength}
          </p>
        </div>

        <div className="w-full flex justify-end gap-10 items-center">
          <div
            className="bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer"
            onClick={handleContinue}
          >
            <p className="text-base font-semibold text-[#114B53] cursor-pointer">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

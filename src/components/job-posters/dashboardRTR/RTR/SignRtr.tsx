import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchAllRTR } from '../../../../utils/jobposters/jobboards/RTR';
import axiosrecruiterinstance from '../../../../axios/axiosrecruiterinstance';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { MdOutlineFileDownload } from 'react-icons/md';

import { IoMdClose } from 'react-icons/io';
import Logo from '../../../../assets/logo/hirehour.png';

import Spinner from '../../../Spinner';

const SignRTR: React.FC<{
  setSignRTR: (e: boolean) => void;
  isSignRTR: boolean;
  rtrId: number | null;
}> = ({ setSignRTR, isSignRTR, rtrId }) => {
  const [signature, setSignature] = useState('');
  const queryClient = useQueryClient();

  const { data: rtr } = useQuery({
    queryKey: ['all-rtr'],
    queryFn: fetchAllRTR,
  });

  const viewRTR = rtr?.data?.filter((i: ALLRTRTYPES) => i.ID === rtrId)?.[0];

  const signMutation = useMutation({
    mutationFn: async (signRTR: {
      rtrId: number;
      employerSignatureName: string;
      status: boolean;
    }) => {
      const response = await axiosrecruiterinstance.post('/api/recruiter/rtr/sign-rtr', signRTR);
      return response.data;
    },
    onSuccess: () => {
      toast.success('RTR Signed Successfully');
      queryClient.invalidateQueries({ queryKey: ['all-rtr'] });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const handleSign = () => {
    if (rtrId) {
      signMutation.mutate({ rtrId, employerSignatureName: signature, status: true });
    }
  };

  return (
    <div
      className={`w-full h-full p-3  flex justify-center items-center   fixed inset-0 transition-all ease-in-out duration-300  ${isSignRTR ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'} `}
    >
      <div
        className="   z-[10] w-full max-w-[670px] overflow-auto   shadow-xl
          h-[95%]  md:h-[99%]  bg-[#F2F2F5] rounded-lg"
      >
        <div className="flex justify-between items-start p-2  bg-[#F2F2F5]">
          <div className="w-full flex justify-center items-center">
            <img src={Logo} className="w-10 h-10" alt="img-logo" />
          </div>
          <IoMdClose size={30} color="#585858" onClick={() => setSignRTR(false)} />
        </div>

        <div className="w-full max-w-[975px]  h-auto m-auto border border-[#E1E1E2] rounded-lg">
          <div className="w-full bg-white flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-5   rounded-t-lg">
            <div className="flex items-center space-x-4">
              <span className="text-xs text-[#6B7588]">Job Title: </span>
              <p className="text-xs font-semibold">{viewRTR?.job?.jobRoleName}</p>
              <span className="text-xs text-[#7B8496]">- {viewRTR?.job?.jobLocation}</span>
            </div>

            <div>
              <p className="text-xs">Rate : $60 / HR</p>
            </div>
          </div>

          <div className="w-full bg-white mt-3 flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-start p-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-xs">From</h1>
              <p className="text-xs">
                <strong>Send by</strong>: Erika Less
              </p>
              <p className="text-xs">
                <strong>Sender email</strong>: Erika@insightGlobal.com
              </p>
              <p className="text-xs">
                <strong>Company</strong>:Insight Global
              </p>
            </div>

            <div className="flex flex-col items-start space-y-2">
              <h1 className="text-xs">To</h1>
              <p className="text-xs">
                <strong>Employer Name</strong>: Mathew
              </p>
              <p className="text-xs">
                <strong>Employer Email</strong>: Mathew@xyz.com
              </p>
              <p className="text-xs">
                <strong>Employer Company</strong>: AA Tech
              </p>
              <p className="text-xs">
                <strong>Applicant Name</strong>: Johnson
              </p>
              <p className="text-xs">
                <strong>Applicant Email</strong>: Johnson@zys.com
              </p>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="flex  items-center">
                <MdOutlineFileDownload size={20} color="#104B53" />
                <p className="text-[#104B53] text-xs font-[600]">Export</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="w-full flex flex-col space-y-3 bg-white md:flex-row  items-start md:justify-between md:items-end p-5">
            <div className="flex flex-col space-y-1">
              <p className="text-xs">
                <strong>Client</strong>: AT & T
              </p>
              <p className="text-xs">
                <strong>Prime Vendor </strong>: Insight Global
              </p>

              <p className="text-xs">
                <strong>Implementation</strong>: TCS
              </p>
              <p className="text-xs">
                <strong>Vendor </strong>: AA Tech
              </p>
            </div>

            <p className="text-xs">
              <strong>Valid Till</strong>:30 days (08/26/2024)
            </p>
          </div>

          {/* Acceptance  */}

          <div className="w-full flex flex-col space-y-2 p-5 bg-white mt-2">
            <p className="text-xs">
              I, give the exclusive permission to {viewRTR?.candidate?.firstName} (
              {viewRTR?.job?.jobRoleName}) ({viewRTR?.candidate?.firstName}) resume and
              qualification to position located in (Location) to represent (Client) for the
            </p>

            <p className="text-xs">
              I confirm that neither I have submitted my resume or application for this specific
              position to any other recruitment agency within the period of the last 30 days, nor I
              submitted Right to Represent form with any other recruitment agency for this job
              requisition.
            </p>

            <p className="text-xs">
              As a candidate, my handwritten signature, date and requisition number acknowledges my
              authorization for the above-listed vendor to represent me for this posted requisition
              from the date on the form till 30 days.
            </p>

            <p className="text-xs">
              {' '}
              <strong>Note:</strong> If RTR is submitted to more than one staffing vendor for the
              same job requisition, then you will be pulled out of the consideration. You might be
              no longer eligible for this requisition.
            </p>

            <div className="flex justify-start items-center space-x-3">
              <input type="checkbox" className="w-[20px] h-[20px]" />{' '}
              <p className="text-[#7D8697] text-xs">
                By accepting this and proceeding further you agreed to the terms & condition
              </p>
            </div>
          </div>

          {/* Signature  */}

          <div className="w-full  p-4 bg-white mt-2 flex justify-between items-end">
            <div className="flex flex-col justify-start items-start space-y-2">
              <h1 className="text-xs font-semibold">Employer</h1>

              <div className="flex justify-center items-center space-x-3">
                {viewRTR?.isSignedByEmployer ? (
                  <>
                    <p className="text-xs font-sans font-[100] tracking-widest border-b-2 w-full text-center">
                      {viewRTR?.employerSignatureName}
                    </p>

                    <p className="text-xs">{viewRTR?.employerSignatureName} - 08/16/2024</p>

                    <p className="text-[#104B53] text-[10px] w-[100px] p-2 rounded-full text-center bg-[#B4FEDD]">
                      Signed
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <input
                        type="text"
                        placeholder="Type you name and sign"
                        value={signature}
                        onChange={(e) => setSignature(e.target.value)}
                        className="max-w-[240px] w-full outline-none rounded-lg  text-xs p-2 border border-[#7D8697]"
                      />
                    </div>

                    <p
                      onClick={() => handleSign()}
                      className="text-white text-[10px] w-24 p-2 cursor-pointer flex justify-center items-center rounded-full text-center bg-[#07A561]"
                    >
                      {signMutation.isPending ? (
                        <Spinner  color={'white'} size={5} />
                      ) : (
                        'Sign'
                      )}
                     
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-start items-start space-y-3">
              <h1 className="text-xs font-semibold">Applicant</h1>

              <div className="flex justify-center items-center space-x-3">
                <div className="flex flex-col items-center justify-center space-y-2">
                  {viewRTR?.isSignedByCandidate ? (
                    <>
                      <p className="text-xs font-sans font-[100] tracking-widest border-b-2 w-full text-center">
                        {viewRTR?.candidateSignatureName}
                      </p>

                      <p className="text-xs">{viewRTR?.candidateSignatureName} - 08/16/2024</p>

                      <p className="text-[#104B53] text-[10px] w-[100px] p-2 rounded-full text-center bg-[#B4FEDD]">
                        Signed
                      </p>
                    </>
                  ) : (
                    <p className="text-[#FFB51F] text-[10px] font-bold w-[100px] p-2 rounded-full text-center bg-[#FFF1C6]">
                      Pending
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignRTR;

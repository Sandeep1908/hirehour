import { useState } from 'react';
import SignRTR from './SignRtr';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { fetchAllRTR } from '../../../../utils/jobposters/jobboards/RTR';

const ReceiveRTR: React.FC = () => {
  const [isSignRTR, setIsSignRTR] = useState<boolean>(false);
 const [rtrId, setRTRId] = useState<number | null>(null);
  const { data: rtr } = useQuery({
    queryKey: ['all-rtr'],
    queryFn: fetchAllRTR,
  });

  const handleViewSign = (Id: number) => {
    setRTRId(Id);
    setIsSignRTR(true);
  };
  return (
    <div className="w-full">
      {rtr?.data?.map((item: ALLRTRTYPES, i: number) => {
        if (!item?.isSignedByEmployer) {
          return (
            <div key={i} className="w-full   h-full m-auto border border-[#E1E1E2] rounded-lg">
              <div className="w-full flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-3 bg-[#F2F2F5] rounded-t-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-[#6B7588]">Job Title: </span>
                  <p className="text-xs font-semibold">{item?.job?.jobRoleName}</p>
                  <span className="text-xs text-[#7B8496]">- {item?.job?.jobLocation}</span>
                </div>

                <div>
                  <p className="text-xs">Rate : $60 / HR</p>
                </div>
              </div>

              <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start p-3">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-xs">From</h1>
                  <p className="text-xs">
                    <strong>Send by</strong>: {item?.employer?.user?.firstName}
                  </p>
                  <p className="text-xs">
                    <strong>Company</strong>:Insight Global
                  </p>
                </div>

                <div className="flex flex-col space-y-1">
                  <h1 className="text-xs">To</h1>
                  <p className="text-xs">
                    <strong>Employer name</strong>: {item?.employer?.user?.firstName}
                  </p>
                  <p className="text-xs">
                    <strong>Employer Company</strong>: AA Tech
                  </p>
                  <p className="text-xs">
                    <strong>Applicant Name</strong>: {item?.candidate?.firstName}
                  </p>
                </div>

                <div className="flex flex-col space-y-3  ">
                  <div className="flex justify- space-x-3 items-center">
                    <MdOutlineFileDownload size={20} color="#104B53" />
                    <p className="text-[#104B53] text-sm font-[600]">Export</p>
                    <p className="border text-sm text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full">
                      View
                    </p>
                  </div>

                  <p className="text-sm">
                    <strong>Valid Till</strong>: 30 days (08/26/2024)
                  </p>
                </div>
              </div>

              <hr />

              <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center p-5">
                <div className="flex justify-center items-center space-x-5">
                  <div className="flex flex-col space-y-3">
                    <p className="text-sm">
                      <strong>Client</strong>: AT & T
                    </p>
                    <p className="text-sm">
                      <strong>Prime Vendor </strong>: Insight Global
                    </p>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <p className="text-sm">
                      <strong>Implementation</strong>: TCS
                    </p>
                    <p className="text-sm">
                      <strong>Vendor </strong>: AA Tech
                    </p>
                  </div>
                </div>

                <div className="flex w-full md:w-auto items-center justify-center space-x-5">
                  <p className="w-full sm:w-[80px] text-sm bg-[#FF3837] text-white p-2 text-center rounded-full">
                    Decline
                  </p>
                  <p
                    onClick={() => handleViewSign(item?.ID)}
                    className="w-full sm:w-[120px] cursor-pointer text-sm bg-[#07A560] text-white p-2 text-center rounded-full"
                  >
                    View & Sign
                  </p>
                </div>
              </div>
              <SignRTR setSignRTR={setIsSignRTR} isSignRTR={isSignRTR} rtrId={rtrId} />
            </div>
          );
        }
      })}
    </div>
  );
};
export default ReceiveRTR;

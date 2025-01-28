import React, {  useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineFileDownload } from 'react-icons/md';
import { fetchCreatedRTR } from '../../../../utils/jobposters/jobboards/RTR';
import Spinner from '../../../Spinner';
import NoRTRImg from '../../../../assets/dashboard/NoRTR.png';
import { AxiosError } from 'axios';
import ViewRTR from '../../../common/ViewRTR';
 

const SentRTR: React.FC = () => {
  const [isViewRTROpen, setIsViewRTROpen] = useState<boolean>(false);

  const {
    data: sentRTR,
    isPending,
    error,
  } = useQuery<{ data: ALLRTRTYPES[] }, AxiosError<{ message: string }>>({
    queryKey: ['sentrtr'],
    queryFn: fetchCreatedRTR,
  });

  // const componentRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  //   documentTitle: 'Invoice', // Title of the PDF
  //   onAfterPrint: () => alert('PDF generated successfully!'), // Optional callback after printing
  // });

  return (
    <div className="w-full" >
      <div className="flex flex-col space-y-4">
        {isPending && (
          <div className="flex justify-center items-center w-full h-[60vh]">
            <Spinner size={6} color="#104B53" />
            <p className="ml-2">Loading RTRs...</p>
          </div>
        )}

        {!isPending && !error && (
          <>
            {sentRTR?.data?.length > 0 ? (
              sentRTR.data.map((item, i) => (
                <div key={i} className="w-full h-full m-auto border border-[#E1E1E2] rounded-lg">
                  <div className="w-full flex flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-3 bg-[#F2F2F5] rounded-t-lg">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-[#6B7588]">Job:</span>
                      <p className="text-xs font-semibold">{item.job.jobRoleName}</p>
                      <span className="text-xs text-[#7B8496]"> - {item.job.jobLocation}</span>
                    </div>
                    <div>
                      <p className="text-xs">Rate: $60 / HR</p>
                    </div>
                  </div>

                  <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start p-3">
                    <div className="flex flex-col space-y-1">
                      <h1 className="text-xs">From</h1>
                      <p className="text-xs">
                        <strong>Send by:</strong> {item.recruiter.user.firstName}
                      </p>
                      <p className="text-xs">
                        <strong>Company:</strong> {/* Replace with actual company data */}
                      </p>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <h1 className="text-xs">To</h1>
                      <p className="text-xs">
                        <strong>Employer name: </strong> {item.employer.user.firstName}
                      </p>
                      <p className="text-xs">
                        <strong>Employer Company:</strong>{' '}
                        {/* Replace with actual employer company data */}
                      </p>
                      <p className="text-xs">
                        <strong>Applicant Name:</strong> {item.candidate.firstName}
                      </p>
                    </div>

                    <div className="flex flex-col space-y-3 justify-between h-full">
                      <div className="flex w-full md:w-auto items-center justify-center space-x-4">
                        <div className="flex flex-col space-y-2 justify-center items-center">
                          <p className="text-xs">Employer Status</p>
                          <p
                            className={`w-24 h-7 text-xs flex justify-center items-center rounded-full 
                                       ${item.isSignedByEmployer ? 'bg-[#B4FEDD] text-[#07A560]' : 'bg-[#FFF1C6] text-[#FFB522] cursor-pointer'}`}
                          >
                            {item.isSignedByEmployer ? 'Signed' : 'Pending'}
                          </p>
                        </div>

                        <div className="flex flex-col space-y-2 justify-center items-center">
                          <p className="text-xs">Applicant Status</p>
                          <p
                            className={`w-24 h-7 text-xs flex justify-center items-center rounded-full 
                                       ${item.isSignedByCandidate ? 'bg-[#B4FEDD] text-[#07A560]' : 'bg-[#FFF1C6] text-[#FFB522] cursor-pointer'}`}
                          >
                            {item.isSignedByCandidate ? 'Signed' : 'Pending'}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs">
                        <strong>Valid Till:</strong>{' '}
                        {new Date(item.validityPeriod).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center p-5">
                    <div className="flex justify-center items-center space-x-5">
                      <div className="flex flex-col space-y-3">
                        <p className="text-xs">
                          <strong>Client:</strong> {item.clientCompany}
                        </p>
                        <p className="text-xs">
                          <strong>Prime Vendor:</strong> {item.primeVendorCompany}
                        </p>
                      </div>

                      <div className="flex flex-col space-y-3">
                        <p className="text-xs">
                          <strong>Implementation:</strong> {item.implementationCompany}
                        </p>
                        <p className="text-xs">
                          <strong>Vendor:</strong> {item.vendorCompany}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify- space-x-3 items-center">
                      <MdOutlineFileDownload size={20} color="#104B53" />
                      <p
                        
                        className="text-[#104B53] text-xs font-[600]"
                      >
                        Export
                      </p>
                      <p
                        onClick={() => setIsViewRTROpen(true)}
                        className="border cursor-pointer text-xs text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full"
                      >
                        View
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="h-[60vh] w-full flex flex-col justify-center items-center max-w-5xl space-y-5">
                <img src={NoRTRImg} className="w-56 h-48" alt="no RTR" />
                <h1 className="text-sm font-semibold text-center">No RTRs Sent</h1>
                <p className="text-xs text-center">
                  Start sending RTRs to candidates and employers.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <ViewRTR isViewRTROpen={isViewRTROpen} setIsViewRTROpen={setIsViewRTROpen} />
    </div>
  );
};

export default SentRTR;

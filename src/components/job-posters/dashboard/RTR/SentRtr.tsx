import { useQuery } from '@tanstack/react-query';
import { MdOutlineFileDownload } from 'react-icons/md';
import { fetchAllRTR } from '../../../../utils/jobposters/jobboards/RTR';

const SentRTR: React.FC = () => {

  const {data:sentRTR}=useQuery({
    queryKey:['sentrtr'],
    queryFn:fetchAllRTR
  })


 
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">

        {
          sentRTR?.data?.map((item:ALLRTRTYPES,i:number)=>{
            return(
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
    
                <div className="flex flex-col space-y-3 justify-between h-full  ">
                  <div className="flex w-full md:w-auto items-center justify-center space-x-7">
                    <div className="flex flex-col space-y-2 justify-center items-center">
                      <p className="text-xs">Employer Statue</p>
                      {item?.isSignedByEmployer?
                         <p className=" w-24 h-7 text-xs bg-[#B4FEDD] text-[#07A560]  flex justify-center items-center rounded-full">
                       Signed
                       </p>
                       :
                       <p className=" w-24 h-7  cursor-pointer text-xs bg-[#FFF1C6] text-[#FFB522] p-2 flex justify-center items-center rounded-full">
                       Pending
                     </p>
                    }
                   
                    </div>
    
                    <div className="flex flex-col space-y-2 justify-center items-center">
                      <p className="text-xs">Applicant Status</p>

                      {item?.isSignedByCandidate?
                         <p className=" w-24 h-7 text-xs bg-[#B4FEDD] text-[#07A560]  flex justify-center items-center rounded-full">
                        Signed
                       </p>
                       :
                       <p className=" w-24 h-7  cursor-pointer text-xs bg-[#FFF1C6] text-[#FFB522] p-2 flex justify-center items-center rounded-full">
                       Pending
                     </p>
                    }
                    
                    </div>
                  </div>
    
                  <p className="text-xs">
                    <strong>Valid Till</strong>: {new Date(item?.validityPeriod).toLocaleDateString()}
                  </p>
                </div>
              </div>
    
              <hr />
    
              <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center p-5">
                <div className="flex justify-center items-center space-x-5">
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs">
                      <strong>Client</strong>: {item?.clientCompany}
                    </p>
                    <p className="text-xs">
                      <strong>Prime Vendor </strong>: {item?.primeVendorCompany}
                    </p>
                  </div>
    
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs">
                      <strong>Implementation</strong>: {item?.implementationCompany}
                    </p>
                    <p className="text-xs">
                      <strong>Vendor </strong>: {item?.vendorCompany}
                    </p>
                  </div>
                </div>
    
                <div className="flex justify- space-x-3 items-center">
                  <MdOutlineFileDownload size={20} color="#104B53" />
                  <p className="text-[#104B53] text-xs font-[600]">Export</p>
                  <p className="border text-xs text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full">
                    View
                  </p>
                </div>
              </div>
            </div>
            )
          })
        }
   

        
      </div>
    </div>
  );
};

export default SentRTR;
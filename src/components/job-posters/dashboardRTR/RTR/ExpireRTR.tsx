import { MdOutlineFileDownload } from 'react-icons/md';

const ExpireRTR: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="w-full    h-full m-auto border border-[#E1E1E2] rounded-lg">
          <div className="w-full flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-3 bg-[#F2F2F5] rounded-t-lg">
            <div className="flex items-center space-x-4">
              <span className="text-xs text-[#6B7588]">Job Title: </span>
              <p className="text-xs font-semibold">Full Stack Java Developer</p>
              <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
            </div>

            <div>
              <p className="text-xs">Rate : $60 / HR</p>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start px-2 p-1">
            <div className="flex flex-col space-y-1">
              <h1 className="text-xs">From</h1>
              <p className="text-xs">
                <strong>Send by</strong>: Erika Less
              </p>
              <p className="text-xs">
                <strong>Company</strong>:Insight Global
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              <h1 className="text-xs">To</h1>
              <p className="text-xs">
                <strong>Employer name</strong>: Mathew
              </p>
              <p className="text-xs">
                <strong>Employer Company</strong>: AA Tech
              </p>
              <p className="text-xs">
                <strong>Applicant Name</strong>: Johnson
              </p>
            </div>

            <div className="flex flex-col space-y-3  ">
              <div className="flex justify- space-x-3 items-center">
                <MdOutlineFileDownload size={20} color="#104B53" />
                <p className="text-[#104B53] text-xs font-[600]">Export</p>
                <p className="border text-xs text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full">
                  View
                </p>
              </div>

              <p className="text-xs">
                <strong>Valid Till</strong>: 30 days (08/26/2024)
              </p>
            </div>
          </div>

          <hr />

          <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center px-2 p-2">
            <div className="flex justify-center items-center space-x-5">
              <div className="flex flex-col space-y-3">
                <p className="text-xs">
                  <strong>Client</strong>: AT & T
                </p>
                <p className="text-xs">
                  <strong>Prime Vendor </strong>: Insight Global
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                <p className="text-xs">
                  <strong>Implementation</strong>: TCS
                </p>
                <p className="text-xs">
                  <strong>Vendor </strong>: AA Tech
                </p>
              </div>
            </div>

            <div className="flex w-full md:w-auto items-center justify-center space-x-5">
              <p className="w-full sm:w-[100px] cursor-pointer text-xs bg-[#FEF1C6] text-[#FFB51F] p-1 text-center rounded-full">
                Expire
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpireRTR
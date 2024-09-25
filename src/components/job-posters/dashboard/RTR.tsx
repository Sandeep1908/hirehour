import { useState } from 'react';
 
import { IoMdClose } from 'react-icons/io';

import { MdOutlineFileDownload } from 'react-icons/md';

type SendRTRModalProps = {
  isRTROpen: boolean;
  setIsRTROpen: (e: boolean) => void;
};

const SentRTR: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <div className="w-full   h-full m-auto border border-[#E1E1E2] rounded-lg">
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

          <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start p-3">
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

            <div className="flex flex-col space-y-3 justify-between h-full  ">
              <div className="flex w-full md:w-auto items-center justify-center space-x-7">
                <div className="flex flex-col space-y-2 justify-center items-center">
                  <p className="text-xs">Employer Statue</p>
                  <p className=" w-24 h-7 text-xs bg-[#B4FEDD] text-[#07A560]  flex justify-center items-center rounded-full">
                    Signed
                  </p>
                </div>

                <div className="flex flex-col space-y-2 justify-center items-center">
                  <p className="text-xs">Applicant Status</p>
                  <p className=" w-24 h-7  cursor-pointer text-xs bg-[#FFF1C6] text-[#FFB522] p-2 flex justify-center items-center rounded-full">
                    Pending
                  </p>
                </div>
              </div>

              <p className="text-xs">
                <strong>Valid Till</strong>: 30 days (08/26/2024)
              </p>
            </div>
          </div>

          <hr />

          <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center p-5">
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

            <div className="flex justify- space-x-3 items-center">
              <MdOutlineFileDownload size={20} color="#104B53" />
              <p className="text-[#104B53] text-xs font-[600]">Export</p>
              <p className="border text-xs text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full">
                View
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReceiveRTR: React.FC = () => {
   
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

          <div className="w-full flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-start px-2 p-1">
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
              <p className="w-full sm:w-[80px] text-xs bg-[#FF3837] text-white p-1 text-center rounded-full">
                Decline
              </p>
              <p
                
                className="w-full sm:w-[120px] cursor-pointer text-xs bg-[#07A560] text-white p-1 text-center rounded-full"
              >
                View & Sign
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SendRTRModal: React.FC<SendRTRModalProps> = ({ isRTROpen, setIsRTROpen }) => {
  return (
    <div
      className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 ${isRTROpen ? 'opacity-1 scale-[1.01] z-[10]' : 'opacity-0 z-[-100]'}   `}
    >
      <div className="w-full h-screen hidden md:block absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

      <div
        className="   z-[10] w-full h-[98%] max-w-[500px]  relative shadow-xl
                          overflow-auto  bg-white rounded-lg"
      >
        <div className="flex justify-between items-center p-5 sticky top-0 bg-white">
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

              <input
                type="text"
                placeholder="Job title"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Job Id  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Job Id</label>
              </div>

              <input
                type="text"
                placeholder="Job Id"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
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
                placeholder="Enter your Location"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
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
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-4">
  <div className="flex text-xs space-x-1">
    <input
      type="radio"
      name="selection"
      className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
    />
    <label htmlFor="">Employer only</label>
  </div>

  <div className="flex col-span-2 justify-center items-center text-xs space-x-1">
    <input
      type="radio"
      name="selection"
      className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-[10px]"
    />
    <label htmlFor="">Applicant and Employer</label>
  </div>

  <div className="flex text-xs space-x-1">
    <input
      type="radio"
      name="selection"
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

              <input
                type="text"
                placeholder="Applicant name"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Employer name  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Employer name</label>
              </div>

              <input
                type="text"
                placeholder="Employer name "
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
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
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Employer Email  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">Employer Email</label>
              </div>

              <input
                type="email"
                placeholder="Vendor Email"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
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
                type="email"
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
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
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
                type="email"
                placeholder="Submission (in Days)"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
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
                type="text"
                placeholder="Show pay by"
                className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
              />
            </div>

            {/* Amount  */}

            <div className="flex flex-col space-y-2">
              <div className="flex text-xs ">
                <label htmlFor="">
                  Amount
                </label>
              </div>

              <input
                type="email"
                placeholder="Amount"
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

                  <textarea className="w-full  text-[10px] p-2 min-h-44 text-[#3A3A3C] tracking-wide">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making it over 2000 years
                    old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words, consectetur, from a
                    Lorem Ipsum passage, and going through the cites of the word in classical
                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                    Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
                    ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                  </textarea>
                </div>
        </div>

        {/* Button submit  */}

        <div className="p-4">
          <div className="w-full flex justify-center md:justify-end md:mt-4">
            <p
              onClick={() => setIsRTROpen(false)}
              className="flex justify-center items-center w-full md:w-36 h-8 text-xs  rounded-full cursor-pointer bg-[#E9F358] "
            >
              Preview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AcceptedRTR:React.FC=()=>{
  return(
    <div className="w-full">

<div className='flex flex-col space-y-4'>
  <div className="w-full    h-full m-auto border border-[#E1E1E2] rounded-lg">
<div className="w-full flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-3 bg-[#F2F2F5] rounded-t-lg">
  <div className="flex items-center space-x-4">
    <span className="text-xs text-[#6B7588]">Job Title: </span>
    <p className="text-xs font-semibold">Full Stack Java Developer</p>
    <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
  </div>

  <div>
    <p className='text-xs'>Rate : $60 / HR</p>
  </div>
</div>

<div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start px-2 p-1">
  <div className="flex flex-col space-y-1">
    <h1 className="text-xs">From</h1>
    <p className='text-xs'>
      <strong >Send by</strong>: Erika Less
    </p>
    <p className='text-xs'>
      <strong>Company</strong>:Insight Global
    </p>
  </div>

  <div className="flex flex-col space-y-1">
    <h1 className="text-xs">To</h1>
    <p className='text-xs'>
      <strong>Employer name</strong>: Mathew
    </p>
    <p className='text-xs'>
      <strong>Employer Company</strong>: AA Tech
    </p>
    <p className='text-xs'>
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

    <p className='text-xs'>
      <strong>Valid Till</strong>: 30 days (08/26/2024)
    </p>
  </div>
</div>

<hr />

<div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center px-2 p-2">
  <div className="flex justify-center items-center space-x-5">
    <div className="flex flex-col space-y-3">
      <p className='text-xs'>
        <strong>Client</strong>: AT & T
      </p>
      <p className='text-xs'>
        <strong>Prime Vendor </strong>: Insight Global
      </p>
    </div>

    <div className="flex flex-col space-y-3">
      <p className='text-xs'>
        <strong>Implementation</strong>: TCS
      </p>
      <p className='text-xs'>
        <strong>Vendor </strong>: AA Tech
      </p>
    </div>
  </div>

  <div className="flex w-full md:w-auto items-center justify-center space-x-5">
     
    <p   className="w-full sm:w-[100px] cursor-pointer text-xs bg-[#B4FEDD] text-[#07A560] p-1 text-center rounded-full">
      Signed
    </p>
  </div>
</div>
</div>





  </div>
    </div>
  )
}

const DeclineRTR:React.FC=()=>{
  return(
    <div className="w-full">

<div className='flex flex-col space-y-4'>
  <div className="w-full    h-full m-auto border border-[#E1E1E2] rounded-lg">
<div className="w-full flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-3 bg-[#F2F2F5] rounded-t-lg">
  <div className="flex items-center space-x-4">
    <span className="text-xs text-[#6B7588]">Job Title: </span>
    <p className="text-xs font-semibold">Full Stack Java Developer</p>
    <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
  </div>

  <div>
    <p className='text-xs'>Rate : $60 / HR</p>
  </div>
</div>

<div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start px-2 p-1">
  <div className="flex flex-col space-y-1">
    <h1 className="text-xs">From</h1>
    <p className='text-xs'>
      <strong >Send by</strong>: Erika Less
    </p>
    <p className='text-xs'>
      <strong>Company</strong>:Insight Global
    </p>
  </div>

  <div className="flex flex-col space-y-1">
    <h1 className="text-xs">To</h1>
    <p className='text-xs'>
      <strong>Employer name</strong>: Mathew
    </p>
    <p className='text-xs'>
      <strong>Employer Company</strong>: AA Tech
    </p>
    <p className='text-xs'>
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

    <p className='text-xs'>
      <strong>Valid Till</strong>: 30 days (08/26/2024)
    </p>
  </div>
</div>

<hr />

<div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center px-2 p-2">
  <div className="flex justify-center items-center space-x-5">
    <div className="flex flex-col space-y-3">
      <p className='text-xs'>
        <strong>Client</strong>: AT & T
      </p>
      <p className='text-xs'>
        <strong>Prime Vendor </strong>: Insight Global
      </p>
    </div>

    <div className="flex flex-col space-y-3">
      <p className='text-xs'>
        <strong>Implementation</strong>: TCS
      </p>
      <p className='text-xs'>
        <strong>Vendor </strong>: AA Tech
      </p>
    </div>
  </div>

  <div className="flex w-full md:w-auto items-center justify-center space-x-5">
     
    <p   className="w-full sm:w-[100px] cursor-pointer text-xs bg-[#B4FEDD] text-[#07A560] p-1 text-center rounded-full">
      Decline
    </p>
  </div>
</div>
</div>





  </div>
    </div>
  )
}

const ExpireRTR:React.FC=()=>{
  return(
    <div className="w-full">

    <div className='flex flex-col space-y-4'>
      <div className="w-full    h-full m-auto border border-[#E1E1E2] rounded-lg">
    <div className="w-full flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-3 bg-[#F2F2F5] rounded-t-lg">
      <div className="flex items-center space-x-4">
        <span className="text-xs text-[#6B7588]">Job Title: </span>
        <p className="text-xs font-semibold">Full Stack Java Developer</p>
        <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
      </div>
    
      <div>
        <p className='text-xs'>Rate : $60 / HR</p>
      </div>
    </div>
    
    <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start px-2 p-1">
      <div className="flex flex-col space-y-1">
        <h1 className="text-xs">From</h1>
        <p className='text-xs'>
          <strong >Send by</strong>: Erika Less
        </p>
        <p className='text-xs'>
          <strong>Company</strong>:Insight Global
        </p>
      </div>
    
      <div className="flex flex-col space-y-1">
        <h1 className="text-xs">To</h1>
        <p className='text-xs'>
          <strong>Employer name</strong>: Mathew
        </p>
        <p className='text-xs'>
          <strong>Employer Company</strong>: AA Tech
        </p>
        <p className='text-xs'>
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
    
        <p className='text-xs'>
          <strong>Valid Till</strong>: 30 days (08/26/2024)
        </p>
      </div>
    </div>
    
    <hr />
    
    <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center px-2 p-2">
      <div className="flex justify-center items-center space-x-5">
        <div className="flex flex-col space-y-3">
          <p className='text-xs'>
            <strong>Client</strong>: AT & T
          </p>
          <p className='text-xs'>
            <strong>Prime Vendor </strong>: Insight Global
          </p>
        </div>
    
        <div className="flex flex-col space-y-3">
          <p className='text-xs'>
            <strong>Implementation</strong>: TCS
          </p>
          <p className='text-xs'>
            <strong>Vendor </strong>: AA Tech
          </p>
        </div>
      </div>
    
      <div className="flex w-full md:w-auto items-center justify-center space-x-5">
         
        <p   className="w-full sm:w-[100px] cursor-pointer text-xs bg-[#FEF1C6] text-[#FFB51F] p-1 text-center rounded-full">
          Expire
        </p>
      </div>
    </div>
    </div>
    
    
    
    
    
      </div>
        </div>
  )
}

const RTR: React.FC = () => {
  const [isRTROpen, setIsRTROpen] = useState(false);
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const [receivedRTRIdx,setReceivedRTRIdx]=useState<number>(0)
  const tags = [
    { label: 'News (2)', count:2,components: <ReceiveRTR/> },
    { label: 'Accepted (3)',count:3, components: <AcceptedRTR/> },
    { label: 'Decline (3)',count:3, components: <DeclineRTR/> },

    
    { label: 'Expire (1)',count:1, components: <ExpireRTR/> },
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
        <p className="w-24 h-8 flex justify-center items-center bg-[#E9F358] text-[#104B53] rounded-full text-xs">
          Post a Job
        </p>
      </div>
      <hr />

      {/* tabs  */}
      <div className="p-1 flex justify-between items-center">
        <ul className="max-w-[300px]  w-full  rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
          {rtrFilters?.map((item, i) => {
            return (
              <li
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
                onClick={()=>setReceivedRTRIdx(id)}
                  className={` text-xs  font-[600] cursor-pointer  ${receivedRTRIdx === id ? 'text-[#104B53]' : ''}`}
                  key={id}
                >
                  {item.label}
                </p>
              );
            })}
          </ul>
        </div>

      )}

  {/* filters  */}
  <div className=" p-3    flex  space-x-4   ">
          



          <div className='w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full'>
 
              <select name="" id="" className='text-xs text-[#6B7588] outline-none'>
                <option value="">All jobs</option>
              </select>
          </div>

          <div className='w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full'>
       
              <select name="" id="" className='text-xs text-[#6B7588] outline-none'>
                <option value="">Valid</option>
              </select>
          </div>

          <div className='w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full'>
              
              <select name="" id="" className='text-xs text-[#6B7588] outline-none'>
                <option value="">Company</option>
              </select>
          </div>


          <div className='w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full'>
              <p className='text-xs font-semibold text-[#6B7588]'>Applicant :</p>
              <select name="" id="" className='text-xs text-[#6B7588] outline-none'>
                <option value="">Any</option>
              </select>
          </div>

          <div className='w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full'>
              <p className='text-xs font-semibold text-[#6B7588]'>Sent by :</p>
              <select name="" id="" className='text-xs text-[#6B7588] outline-none'>
                <option value="">Any</option>
              </select>
          </div>

          <div className='w-full px-2 max-w-fit flex items-center justify-start space-x-2 border border-[#6B7588]  rounded-full'>
              <p className='text-xs font-semibold text-[#6B7588]'>Sent Date :</p>
              <select name="" id="" className='text-xs text-[#6B7588] outline-none'>
                <option value="">Anytime</option>
              </select>
          </div>
      </div>

      


      {
        jobFilterIdx === 1 ?

 
          <div className="w-full   px-3 space-y-3 overflow-auto h-[60vh]">
          {tags?.map((item, i) => {
            if(receivedRTRIdx===i)
              return <div key={i}>{item.components}</div>;
         
          })}

          </div>
          :
          
          <div className="w-full   px-3 space-y-3 overflow-auto h-[60vh]">
          {rtrFilters?.map((item, i) => {
            if (jobFilterIdx === i) {
              return <div key={i}>{item.component}</div>;
            }
          })}
          </div>
      }


     

     

    

     
    </div>
  );
};

export default RTR;

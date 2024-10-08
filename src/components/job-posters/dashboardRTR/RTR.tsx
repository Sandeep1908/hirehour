import { useState } from 'react';
 
import { IoMdClose } from 'react-icons/io';

import { MdOutlineFileDownload } from 'react-icons/md';
import Logo from '../../../assets/logo/hirehour.png';
import { Link } from 'react-router-dom';

 
type SendRTRModalProps = {
  isRTROpen: boolean;
  setIsRTROpen: (e: boolean) => void;
};

type SignRTRPops={
  isSignRTR:boolean,
  setIsSignRTR:(e:boolean)=>void
}

 
const ReceiveRTR: React.FC = () => {
  const [isSignRTR,setIsSignRTR]=useState<boolean>(false)
   
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
                onClick={()=>setIsSignRTR(true)}
                className="w-full sm:w-[120px] cursor-pointer text-xs bg-[#07A560] text-white p-1 text-center rounded-full"
              >
                View & Sign
              </p>

              <SignRTR setIsSignRTR={setIsSignRTR} isSignRTR={isSignRTR}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddRTRModal: React.FC<SendRTRModalProps> = ({ isRTROpen, setIsRTROpen }) => {
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
            <h1 className="text-sm font-[500]">Add RTR</h1>
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


const SignRTR:React.FC<SignRTRPops>=({isSignRTR,setIsSignRTR})=>{
  return(
    <div
        className={`w-full h-full p-3  flex justify-center items-center   fixed inset-0 transition-all ease-in-out duration-300  ${isSignRTR ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'} `}
      >
        <div className="w-full h-full hidden md:block absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

        <div
          className="   z-[10] w-full max-w-[670px] overflow-auto   shadow-xl
              h-[95%]  md:h-[99%]  bg-[#F2F2F5] rounded-lg"
        >
          <div className="flex justify-between items-start p-2  bg-[#F2F2F5]">
            <div className="w-full flex justify-center items-center">
              <img src={Logo} className="w-10 h-10" alt="img-logo" />
            </div>
            <IoMdClose size={30} color="#585858" onClick={() => setIsSignRTR(false)} />
          </div>

          <div className="w-full max-w-[975px]  h-auto m-auto border border-[#E1E1E2] rounded-lg">
            <div className="w-full bg-white flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-5   rounded-t-lg">
              <div className="flex items-center space-x-4">
                <span className="text-xs text-[#6B7588]">Job Title: </span>
                <p className="text-xs font-semibold">Full Stack Java Developer</p>
                <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
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
                I, give the exclusive permission to (Candidates name) (Job Title) (Recruitment
                agency) resume and qualification to position located in (Location) to represent
                (Client) for the
              </p>

              <p className="text-xs">
                I confirm that neither I have submitted my resume or application for this specific
                position to any other recruitment agency within the period of the last 30 days, nor
                I submitted Right to Represent form with any other recruitment agency for this job
                requisition.
              </p>

              <p className="text-xs">
                As a candidate, my handwritten signature, date and requisition number acknowledges
                my authorization for the above-listed vendor to represent me for this posted
                requisition from the date on the form till 30 days.
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
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="text-xs font-sans font-[100] tracking-widest border-b-2 w-full text-center">
                      Mathew
                    </p>

                    <p className="text-xs">Mathew - 08/16/2024</p>
                  </div>

                  <p className="text-[#104B53] text-[10px] w-[100px] p-2 rounded-full text-center bg-[#B4FEDD]">
                    Signed
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-start items-start space-y-3">
                <h1 className="text-xs font-semibold">Applicant</h1>

                <div className="flex justify-center items-center space-x-3">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <input
                      type="text"
                      placeholder="Type you name and sign"
                      className="max-w-[240px] w-full outline-none rounded-lg  text-xs p-2 border border-[#7D8697]"
                    />
                  </div>

                  <p className="text-white text-[10px] w-[100px] p-2 rounded-full text-center bg-[#07A561]">
                    Sign
                  </p>
                </div>
              </div>

              <div>
                <p className="text-white w-[100px] text-[10px] p-2 rounded-full text-center bg-[#FF3837]">
                  Decline
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const RTR: React.FC = () => {
   
  const [receivedRTRIdx,setReceivedRTRIdx]=useState<number>(0)
  const [isAddRTROpen,setIsAddRTROpen]=useState(false)

  const tags = [
    { label: 'News (2)', count:2,components: <ReceiveRTR/> },
    { label: 'Accepted (3)',count:3, components: <AcceptedRTR/> },
    { label: 'Decline (3)',count:3, components: <DeclineRTR/> },

    
    { label: 'Expire (1)',count:1, components: <ExpireRTR/> },
  ];
 
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-sm font-semibold">Right To Represent</h1>
        <p onClick={()=>setIsAddRTROpen(true)}  className="w-24 h-8 flex justify-center items-center bg-[#E9F358] text-[#104B53] rounded-full text-xs">
          + Add RTR
        </p>

        <AddRTRModal isRTROpen={isAddRTROpen} setIsRTROpen={setIsAddRTROpen}/>
      </div>
      <hr />

      <div className="  w-full overflow-auto flex justify-between px-5 py-3 items-center relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC] ">
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

      


      <div className="w-full   px-3 space-y-3 overflow-auto h-[60vh]">
           
                {
                    tags?.map((item,i)=>{
                        if(receivedRTRIdx === i){
                            return(
                                <div key={i}>
                                    {item.components}
                                    </div>
                            )
                        }
                       
                    })
                }
          </div>


     

     

    

     
    </div>
  );
};

export default RTR;

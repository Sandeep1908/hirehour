import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../assets/logo/hirehour.png';

const RightToRepresent: React.FC = () => {
  const [isRTROpen, setIsRTROpen] = useState<boolean>(false);
  const [isSignRTR, setIsSignRTR] = useState<boolean>(false);
  const [isPreviewRTR,isSetPreviewRTR]=  useState<boolean>(false);

  const titles = [
    {
      label: 'My Jobs',
      link: '/myjobs',
    },
    {
      label: 'Right To Represent',
      link: '/right-to-represent',
    },
    {
      label: 'Messages',
      link: '/messages',
    },
  ];
  const tags = ['New (2)', 'Accepted (1)', 'Expired (1)'];
  return (
    <div className="w-full  h-full bg-[#F2F2F5] p-2 relative  ">
      <div className=" w-full max-w-[1280px]  bg-white  m-auto mt-10 rounded-lg p-2 md:p-5">
        <div className="w-full flex justify-between p-2 ">
          <ul className="w-full  flex justify-start items-center space-x-6  relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC]">
            {titles?.map((item, id) => {
              return (
                <Link
                  to={item.link}
                  className={` text-sm p-1 md:text-xl font-[600]  ${id == 1 ? 'border-[#104B53] border-b-4' : ''}  md:p-5`}
                  key={id}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>

          <p
            className="hidden md:flex justify-center items-center space-x-2 bg-[#E9F358] w-[150px] h-[50px] text-sm text-[#104B53] rounded-full "
            onClick={() => setIsRTROpen(true)}
          >
            <BiPlus color="#104B53" /> <span>Add RTR</span>
          </p>
        </div>

        <div className="w-full overflow-auto relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC] p-3">
          <ul className="w-full flex">
            {tags?.map((item, id) => {
              return (
                <li className=" text-sm md:text-lg font-[600]  p-5" key={id}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
           
        <div className=' p-5 flex justify-start space-x-3   items-center'>
          <p>Recevied</p>
              <select name="" id="" className='p-3 border outline-none '>
                <option  className="p-2" value="">Anytime</option>


                <option value="">24 Hours</option>
                <option value="">Past 3 days</option>

                <option value="">Past week</option>

                <option value="">Past Month</option>



              </select>
        </div>

        <div className="w-full pb-10 pt-5 md:hidden">
          <p
            className="flex w-full justify-center items-center space-x-2 bg-[#E9F358]   h-[50px] text-sm text-[#104B53] rounded-full "
            onClick={() => setIsRTROpen(true)}
          >
            <BiPlus color="#104B53" /> <span>Add RTR</span>
          </p>
        </div>
        {/*RTR */}
        <div className="w-full max-w-[1200px]  h-full m-auto border border-[#E1E1E2] rounded-lg">
          <div className="w-full flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-5 bg-[#F2F2F5] rounded-t-lg">
            <div className="flex items-center space-x-4">
              <span className="text-lg text-[#6B7588]">Job Title: </span>
              <p className="text-lg font-semibold">Full Stack Java Developer</p>
              <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
            </div>

            <div>
              <p>Rate : $60 / HR</p>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-10 md:flex-row md:justify-between md:items-start p-5">
            <div className="flex flex-col space-y-3">
              <h1 className="text-lg">From</h1>
              <p>
                <strong>Send by</strong>: Erika Less
              </p>
              <p>
                <strong>Company</strong>:Insight Global
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <h1 className="text-lg">To</h1>
              <p>
                <strong>Employer name</strong>: Mathew
              </p>
              <p>
                <strong>Employer Company</strong>: AA Tech
              </p>
              <p>
                <strong>Applicant Name</strong>: Johnson
              </p>
            </div>

            <div className="flex flex-col space-y-3 ">
              <div className="flex justify-between items-center">
                <MdOutlineFileDownload size={20} color="#104B53" />
                <p className="text-[#104B53] font-[600]">Export</p>
                <p className="border text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full">
                  View
                </p>
              </div>

              <p>
                <strong>Valid Till</strong>: 30 days (08/26/2024)
              </p>
            </div>
          </div>

          <hr />

          <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center p-5">
            <div className="flex justify-center items-center space-x-5">
              <div className="flex flex-col space-y-3">
                <p>
                  <strong>Client</strong>: AT & T
                </p>
                <p>
                  <strong>Prime Vendor </strong>: Insight Global
                </p>
              </div>

              <div className="flex flex-col space-y-3">
                <p>
                  <strong>Implementation</strong>: TCS
                </p>
                <p>
                  <strong>Vendor </strong>: AA Tech
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-5">
              <p className="w-[100px] bg-[#FF3837] text-white p-2 text-center rounded-full">
                Decline
              </p>
              <p onClick={()=>setIsSignRTR(true)} className="w-[140px] bg-[#07A560] text-white p-2 text-center rounded-full">
                View & Sign
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ADD RTR FORM  */}

      <div
        className={`w-full h-fit flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isRTROpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-100]'}   `}
      >
        <div
          className="   z-[10] w-full max-w-[1000px] shadow-xl
                        h-screen overflow-auto  bg-white rounded-lg"
        >
          <div className="flex justify-between items-center p-5">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl font-semibold">Create RTR</h1>
            </div>

            <IoMdClose size={30} className="cursor-pointer" onClick={() => setIsRTROpen(false)} />
          </div>

          <hr />

          <div className="w-full flex flex-col space-y-4  p-4">
            <div className="w-full grid grid-cols-2 gap-3">
              {/* Job Title  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Job Title</label>
                </div>

                <input
                  type="text"
                  placeholder="Job title"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Job Id  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Job Id</label>
                </div>

                <input
                  type="text"
                  placeholder="Job Id"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            {/* Location  */}

            <div className="flex flex-col space-y-2">
              <div className="flex ">
                <label htmlFor="">Location</label>
              </div>

              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 border border-[#EBEBF0] rounded-md"
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Applicant Name  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Applicant Name</label>
                </div>

                <input
                  type="text"
                  placeholder="Applicant Name"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Applicant Email  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Applicant Email</label>
                </div>

                <input
                  type="email"
                  placeholder="Applicant Email"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Employer Name  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Employer Name</label>
                </div>

                <input
                  type="text"
                  placeholder="Employer Name"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Employer Email  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Employer Email</label>
                </div>

                <input
                  type="email"
                  placeholder="Employer Email"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Job type  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Job type</label>
                </div>

                <input
                  type="text"
                  placeholder="Job type"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Submission (in Days)  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Submission (in Days)</label>
                </div>

                <input
                  type="email"
                  placeholder="Submission (in Days)"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-3">
              {/* Show pay by  */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Show pay by</label>
                </div>

                <input
                  type="text"
                  placeholder="Show pay by"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Max  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Max</label>
                </div>

                <input
                  type="email"
                  placeholder="Max"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Min
               */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Min</label>
                </div>

                <input
                  type="email"
                  placeholder="Per hour"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Client */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Client</label>
                </div>

                <input
                  type="text"
                  placeholder="Client"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/* Implementation  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Implementation</label>
                </div>

                <input
                  type="email"
                  placeholder="Implementation"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Prime Vendor */}
              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Prime Vendor</label>
                </div>

                <input
                  type="text"
                  placeholder="Prime Vendor"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>

              {/*  Vendor  */}

              <div className="flex flex-col space-y-2">
                <div className="flex ">
                  <label htmlFor="">Vendor</label>
                </div>

                <input
                  type="email"
                  placeholder="Vendor"
                  className="p-4 border border-[#EBEBF0] rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Button submit  */}

          <div className="p-4">
            <div className="w-full flex justify-center md:justify-end md:mt-4">
              <Link
                to={''}
                onClick={()=>isSetPreviewRTR(true)}
                className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer bg-[#E9F358] "
              >
                Preview
              </Link>
            </div>
          </div>
        </div>
      </div>


         {/* View Preview RTR  */}



      <div
        className={`w-full h-full   flex justify-center items-center   fixed inset-0 transition-all ease-in-out duration-300  ${isPreviewRTR ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-1000]'} `}
      >
              <div className='w-full h-screen absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
       
        <div
          className="   z-[30] w-full max-w-[1000px] h-full shadow-xl
                         overflow-auto  bg-[#F2F2F5] rounded-lg"
        >
          <div className="flex justify-between items-start p-10">
            <div className="w-full flex justify-center items-center">
              <img src={Logo} className="w-20 h-20" alt="img-logo" />
            </div>
            <IoMdClose size={40} color="#585858" onClick={()=>setIsSignRTR(false)} />
          </div>

          <div className="w-full max-w-[975px]  h-full m-auto border border-[#E1E1E2] rounded-lg">
            <div className="w-full bg-white flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-5   rounded-t-lg">
              <div className="flex items-center space-x-4">
                <span className="text-lg text-[#6B7588]">Job Title: </span>
                <p className="text-lg font-semibold">Full Stack Java Developer</p>
                <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
              </div>

              <div>
                <p>Rate : $60 / HR</p>
              </div>
            </div>

            <div className="w-full bg-white mt-3 flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-start p-5">
              <div className="flex flex-col space-y-3">
                <h1 className="text-lg">From</h1>
                <p>
                  <strong>Send by</strong>: Erika Less
                </p>
                <p>
                  <strong>Sender email</strong>: Erika@insightGlobal.com
                </p>
                <p>
                  <strong>Company</strong>:Insight Global
                </p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <h1 className="text-lg">To</h1>
                <p>
                  <strong>Employer Name</strong>: Mathew
                </p>
                <p>
                  <strong>Employer Email</strong>: Mathew@xyz.com
                </p>
                <p>
                  <strong>Employer Company</strong>: AA Tech
                </p>
                <p>
                  <strong>Applicant Name</strong>: Johnson
                </p>
                <p>
                  <strong>Applicant Email</strong>: Johnson@zys.com
                </p>
              </div>

              <div className="flex flex-col space-y-3 ">
                <div className="flex  items-center">
                  <MdOutlineFileDownload size={20} color="#104B53" />
                  <p className="text-[#104B53] font-[600]">Export</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="w-full flex flex-col space-y-5 bg-white md:flex-row  items-start md:justify-between md:items-end p-5">
            <div className="flex flex-col space-y-3">
                  <p>
                    <strong>Client</strong>: AT & T
                  </p>
                  <p>
                    <strong>Prime Vendor </strong>: Insight Global
                  </p>

                  <p>
                    <strong>Implementation</strong>: TCS
                  </p>
                  <p>
                    <strong>Vendor </strong>: AA Tech
                  </p>
                </div>

              <p>
                <strong>Valid Till</strong>:30 days (08/26/2024)
              </p>
            </div>


          {/* Acceptance  */}

            <div className="w-full  flex flex-col space-y-4 p-5 bg-white mt-2">
             

              <div className='flex justify-start items-center space-x-3'>
                <input type="checkbox"  className='w-[32px] h-[32px]'/> <p className='text-[#7D8697]'>By accepting this and proceeding further you agreed to the terms &  condition</p>
              </div>
            </div>

             {/* Button submit  */}

          <div className="p-4">
            <div className="w-full flex justify-center md:justify-end md:mt-4">
              <Link
                to={''}
                onClick={()=>isSetPreviewRTR(false)}
                className="flex justify-center items-center w-full md:w-36 h-10  rounded-full cursor-pointer bg-[#E9F358] "
              >
                Add
              </Link>
            </div>
          </div>
          

          </div>
        </div>
      </div>





      {/* View Sign RTR  */}



      <div
        className={`w-full h-full  flex justify-center items-center   fixed inset-0 transition-all ease-in-out duration-300  ${isSignRTR ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'} `}
      >
              <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
       
        <div
          className="   z-[10] w-full max-w-[1000px] h-full shadow-xl
                         overflow-auto  bg-[#F2F2F5] rounded-lg"
        >
          <div className="flex justify-between items-start p-10">
            <div className="w-full flex justify-center items-center">
              <img src={Logo} className="w-20 h-20" alt="img-logo" />
            </div>
            <IoMdClose size={40} color="#585858" onClick={()=>setIsSignRTR(false)} />
          </div>

          <div className="w-full max-w-[975px]  h-full m-auto border border-[#E1E1E2] rounded-lg">
            <div className="w-full bg-white flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-5   rounded-t-lg">
              <div className="flex items-center space-x-4">
                <span className="text-lg text-[#6B7588]">Job Title: </span>
                <p className="text-lg font-semibold">Full Stack Java Developer</p>
                <span className="text-xs text-[#7B8496]">- Allen, Texas, US</span>
              </div>

              <div>
                <p>Rate : $60 / HR</p>
              </div>
            </div>

            <div className="w-full bg-white mt-3 flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-start p-5">
              <div className="flex flex-col space-y-3">
                <h1 className="text-lg">From</h1>
                <p>
                  <strong>Send by</strong>: Erika Less
                </p>
                <p>
                  <strong>Sender email</strong>: Erika@insightGlobal.com
                </p>
                <p>
                  <strong>Company</strong>:Insight Global
                </p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <h1 className="text-lg">To</h1>
                <p>
                  <strong>Employer Name</strong>: Mathew
                </p>
                <p>
                  <strong>Employer Email</strong>: Mathew@xyz.com
                </p>
                <p>
                  <strong>Employer Company</strong>: AA Tech
                </p>
                <p>
                  <strong>Applicant Name</strong>: Johnson
                </p>
                <p>
                  <strong>Applicant Email</strong>: Johnson@zys.com
                </p>
              </div>

              <div className="flex flex-col space-y-3 ">
                <div className="flex  items-center">
                  <MdOutlineFileDownload size={20} color="#104B53" />
                  <p className="text-[#104B53] font-[600]">Export</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="w-full flex flex-col space-y-5 bg-white md:flex-row  items-start md:justify-between md:items-end p-5">
            <div className="flex flex-col space-y-3">
                  <p>
                    <strong>Client</strong>: AT & T
                  </p>
                  <p>
                    <strong>Prime Vendor </strong>: Insight Global
                  </p>

                  <p>
                    <strong>Implementation</strong>: TCS
                  </p>
                  <p>
                    <strong>Vendor </strong>: AA Tech
                  </p>
                </div>

              <p>
                <strong>Valid Till</strong>:30 days (08/26/2024)
              </p>
            </div>


          {/* Acceptance  */}

            <div className="w-full flex flex-col space-y-4 p-5 bg-white mt-2">
              <p>
                I, give the exclusive permission to (Candidates name) (Job Title) (Recruitment
                agency) resume and qualification to position located in (Location) to represent
                (Client) for the
              </p>

              <p>
                I confirm that neither I have submitted my resume or application for this specific
                position to any other recruitment agency within the period of the last 30 days, nor
                I submitted Right to Represent form with any other recruitment agency for this job
                requisition.
              </p>

              <p>
                As a candidate, my handwritten signature, date and requisition number acknowledges
                my authorization for the above-listed vendor to represent me for this posted
                requisition from the date on the form till 30 days.
              </p>

              <p>
                {' '}
                <strong>Note:</strong> If RTR is submitted to more than one staffing vendor for the
                same job requisition, then you will be pulled out of the consideration. You might be
                no longer eligible for this requisition.
              </p>

              <div className='flex justify-start items-center space-x-3'>
                <input type="checkbox"  className='w-[32px] h-[32px]'/> <p className='text-[#7D8697]'>By accepting this and proceeding further you agreed to the terms &  condition</p>
              </div>
            </div>

           
           {/* Signature  */}


                  <div className='w-full  p-5 bg-white mt-2 flex justify-between items-end'>
                          <div className='flex flex-col justify-start items-start space-y-3'>
                              <h1 className='text-lg font-semibold'>Employer</h1>

                              <div className='flex justify-center items-center space-x-3'>
                                  <div className='flex flex-col items-center justify-center space-y-2'>
                                        <p className='text-lg font-sans font-[100] tracking-widest border-b-2 w-full text-center'>Mathew</p>
                                        
                                        <p className='text-xs'>Mathew - 08/16/2024</p>
                                  </div>

                                  <p className='text-[#104B53] w-[100px] p-2 rounded-full text-center bg-[#B4FEDD]'>Signed</p>
                              </div>
                          </div>




                          <div className='flex flex-col justify-start items-start space-y-3'>
                              <h1 className='text-lg font-semibold'>Applicant</h1>

                              <div className='flex justify-center items-center space-x-3'>
                                  <div className='flex flex-col items-center justify-center space-y-2'>
                                       <input type="text" placeholder='Type you name and sign' className='max-w-[240px] w-full rounded-lg  text-sm p-2 border border-[#7D8697]' />
                                  </div>

                                  <p className='text-white w-[100px] p-2 rounded-full text-center bg-[#07A561]'>Sign</p>
                              </div>
                          </div>

                          <div>
                          <p className='text-white w-[100px] p-2 rounded-full text-center bg-[#FF3837]'>Decline</p>
                          </div>
                  </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RightToRepresent;

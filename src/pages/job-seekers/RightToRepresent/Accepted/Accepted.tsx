import React, { useState, useEffect } from 'react';
import { BiPlus } from 'react-icons/bi';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../../../assets/logo/hirehour.png';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { fetchRTRs } from '../../../../utils/jobseekers/getRTR';
import ViewRTR from '../../../../components/common/ViewRTR';

const Accepted: React.FC = () => {
  const [isRTROpen, setIsRTROpen] = useState<boolean>(false);
  const [isViewRTROpen, setIsViewRTROpen] = useState<boolean>(false);
  const [rtrId,setRTRId]=useState<number>()
  const [isPreviewRTR, isSetPreviewRTR] = useState<boolean>(false);
  const { data: rtr } = useQuery({
    queryKey: ['all-rtr'],
    queryFn: fetchRTRs,
  });

  const acceptedRtrCount = rtr?.data?.filter((i: ALLRTRTYPES) => i.isSignedByCandidate);
  const newRTRCount = rtr?.data?.filter((i: ALLRTRTYPES) => !i.isSignedByCandidate);

  useEffect(() => {
    if (isRTROpen || isPreviewRTR) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isRTROpen, isPreviewRTR]);

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
  const tags = [
    { label: 'New', count: newRTRCount?.length, link: '/right-to-represent' },
    { label: 'Accepted', count: acceptedRtrCount?.length, link: '/rtr-accepted' },
    { label: 'Decline', count: '', link: '/rtr-decline' },
    { label: 'Expire', count: '', link: '/rtr-expired' },
  ];

  const handlePreview = () => {
    isSetPreviewRTR(true);
    setIsRTROpen(false);
  };

  const handleViewRtr=(rtrId:number)=>{
    setRTRId(rtrId)
    setIsViewRTROpen(true)
  }
  return (
    <div className="w-full  min-h-screen bg-[#F2F2F5]  relative  ">
      <div className=" w-full max-w-[1280px]  flex     m-auto mt-3 rounded-lg   ">
        <div className="hidden sm:flex justify-between bg-white h-fit rounded-lg w-full sticky top-2   mr-2 max-w-[200px] ">
          <ul className="w-full  flex flex-col justify-start items-end      relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC]">
            {titles?.map((item, id) => {
              return (
                <Link
                  to={item.link}
                  className={`w-full text-xs  text-center p-4 border-b      transition-all duration-300    font-[500]  ${id == 1 ? ' border-[#104B53]  text-[#104B53] ' : ' '}  `}
                  key={id}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="w-full  p-3 bg-white  ">
          <div className="w-full overflow-auto sm:hidden">
            <ul className="w-full  flex justify-start items-center space-x-6  relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC]">
              {titles?.map((item, id) => {
                return (
                  <Link
                    to={item.link}
                    className={`text-sm p-2 w-full font-[500]  ${id == 1 ? 'border-[#104B53] border-b-4' : ''}  md:p-2`}
                    key={id}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="w-full overflow-auto flex justify-between items-center relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC] mt-3">
            <ul className="w-screen md:w-auto overflow-auto flex items-center space-x-7 p-2 sm:p-3">
              {tags?.map((item, id) => {
                return (
                  <Link
                    to={item.link}
                    className={` text-xs   font-[600] cursor-pointer  ${id === 1 ? 'text-[#104B53]' : ''}`}
                    key={id}
                  >
                    {item.label}({item.count})
                  </Link>
                );
              })}
            </ul>

            <p
              className="hidden md:flex justify-center cursor-pointer items-center  bg-[#E9F358] w-[130px] h-[30px] text-sm text-[#104B53] rounded-full "
              onClick={() => setIsRTROpen(true)}
            >
              <BiPlus color="#104B53" /> <span className="text-sm font-[600]">Add RTR</span>
            </p>
          </div>

          <div className=" p-4 flex justify-start space-x-4 w-full overflow-auto    items-center">
            <div className="w-full sm:w-auto  flex justify-center items-center border border-[#A2A9B4] p-1 rounded-full">
              <p className="text-[10px]  text-[#6B7588] font-[500]">Recevied Date:</p>

              <select
                name=""
                id=""
                className=" text-[10px] text-end  text-[#6B7588]  outline-none "
              >
                <option className="p-1" value="">
                  Anytime
                </option>

                <option value="">24 Hours</option>
                <option value="">Past 3 days</option>

                <option value="">Past week</option>

                <option value="">Past Month</option>
              </select>
            </div>

            <div className="w-full md:w-auto flex justify-center items-center border border-[#A2A9B4] p-1 rounded-full">
              <p className="text-[10px] text-[#6B7588] font-[500]">Sent By:</p>

              <select
                name=""
                id=""
                className=" text-[10px] text-end  text-[#6B7588]  outline-none "
              >
                <option className="p-1" value="">
                  Month
                </option>

                <option value="">24 Hours</option>
                <option value="">Past 3 days</option>

                <option value="">Past week</option>

                <option value="">Past Month</option>
              </select>
            </div>

            <div className="w-full md:w-auto flex justify-center items-center border border-[#A2A9B4] p-1 rounded-full">
              <p className="text-[10px] text-[#6B7588] font-[500]">Sent By:</p>

              <select
                name=""
                id=""
                className=" text-[10px] text-end  text-[#6B7588]  outline-none "
              >
                <option className="p-1" value="">
                  Year
                </option>

                <option value="">24 Hours</option>
                <option value="">Past 3 days</option>

                <option value="">Past week</option>

                <option value="">Past Month</option>
              </select>
            </div>
          </div>

          <div className="w-full pb-5 pt-3 md:hidden">
            <p
              className="flex w-full justify-center items-center space-x-2 bg-[#E9F358]   h-10 text-sm text-[#104B53] rounded-lg "
              onClick={() => setIsRTROpen(true)}
            >
              <BiPlus color="#104B53" /> <span className="font-[600]">Add RTR</span>
            </p>
          </div>
          {/*RTR */}

          <div className="flex flex-col space-y-4">
            {rtr?.data?.map((item: ALLRTRTYPES, i: number) => {
              if (item?.isSignedByCandidate) {
                return (
                  <div
                    key={i}
                    className="w-full max-w-[1200px]  h-full m-auto border border-[#E1E1E2] rounded-lg"
                  >
                    <div className="w-full flex  flex-col justify-end items-end space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-3 bg-[#F2F2F5] rounded-t-lg">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-[#6B7588]">Job Title: </span>
                        <p className="text-sm font-semibold">{item?.job?.jobRoleName}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-[#7B8496]">- {item?.job?.jobLocation}</span>
                          <p className="w-8 h-4 bg-[#E9F358] text-[#104B53] rounded-full text-[10px] font-semibold flex justify-center items-center">
                            RTR
                          </p>
                          <BsInfoCircleFill fill="#104B53" />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm">Rate : ${item?.agreedUponRateForCandidate} / HR</p>
                      </div>
                    </div>

                    <div className="w-full flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:items-start p-3">
                      <div className="flex flex-col space-y-1">
                        <h1 className="text-sm">From</h1>
                        <p className="text-sm">
                          <strong>Send by</strong>: {item?.recruiter?.user?.firstName}
                        </p>
                        <p className="text-sm">
                          <strong>Company</strong>:Insight Global
                        </p>
                      </div>

                      <div className="flex flex-col space-y-1">
                        <h1 className="text-sm">To</h1>
                        <p className="text-sm">
                          <strong>Employer name</strong>: {item?.employer?.user?.firstName}
                        </p>
                        <p className="text-sm">
                          <strong>Employer Company</strong>: AA Tech
                        </p>
                        <p className="text-sm">
                          <strong>Applicant Name</strong>: {item?.candidate?.firstName}
                        </p>
                      </div>

                      <div className="flex flex-col space-y-3  ">
                        <div className="flex justify- space-x-3 items-center">
                          <MdOutlineFileDownload size={20} color="#104B53" />
                          <p className="text-[#104B53] text-sm font-[600]">Export</p>
                          <p onClick={()=>handleViewRtr(item?.ID)} className="border text-sm text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full">
                            View
                          </p>
                        </div>

                        <p className="text-sm">
                          <strong>Valid Till</strong>: {item?.validityPeriod}
                        </p>
                      </div>
                    </div>

                    <hr />

                    <div className="w-full flex flex-col space-y-5 md:flex-row justify-between items-center p-5">
                      <div className="flex justify-center items-center space-x-5">
                        <div className="flex flex-col space-y-3">
                          <p className="text-sm">
                            <strong>Client</strong>: {item?.clientCompany}
                          </p>
                          <p className="text-sm">
                            <strong>Prime Vendor </strong>: {item?.primeVendorCompany}
                          </p>
                        </div>

                        <div className="flex flex-col space-y-3">
                          <p className="text-sm">
                            <strong>Implementation</strong>: {item?.implementationCompany}
                          </p>
                          <p className="text-sm">
                            <strong>Vendor </strong>: {item?.vendorCompany}
                          </p>
                        </div>
                      </div>

                      <div className="flex w-full md:w-auto items-center justify-center space-x-5">
                        <p className="w-full sm:w-[120px] cursor-pointer text-sm bg-[#B4FEDD] text-[#07A560] p-2 text-center rounded-full">
                          Signed
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* ADD RTR FORM  */}

      <div
        className={`w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 ${isRTROpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-100]'}   `}
      >
        <div className="w-full h-screen hidden md:block absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

        <div
          className="   z-[10] w-full h-[98%] max-w-[600px]  relative shadow-xl
                          overflow-auto  bg-white rounded-lg"
        >
          <div className="flex justify-between items-center p-5 sticky top-0 bg-white">
            <div className="flex flex-col space-y-3">
              <h1 className="text-xl font-[500]">Create RTR</h1>
            </div>

            <IoMdClose
              size={30}
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

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Sender Name  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Sender Name</label>
                </div>

                <input
                  type="text"
                  placeholder="Sender Name"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>

              {/* Vendor Name  */}

              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Vendor Name</label>
                </div>

                <input
                  type="text"
                  placeholder="Vendor Email "
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Sender Email  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Sender Email</label>
                </div>

                <input
                  type="email"
                  placeholder="Sender Email"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>

              {/* Vendor Email  */}

              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Vendor Email</label>
                </div>

                <input
                  type="email"
                  placeholder="Vendor Email"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Sender Company  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Sender Company</label>
                </div>

                <input
                  type="email"
                  placeholder="Sender Company"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>

              {/* Vendor Company  */}

              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Vendor Company</label>
                </div>

                <input
                  type="text"
                  placeholder="Vendor Company"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Job type  */}
              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Job type</label>
                </div>

                <input
                  type="text"
                  placeholder="Job type"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>

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

              {/* Max  */}

              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Max</label>
                </div>

                <input
                  type="email"
                  placeholder="Max"
                  className="p-2 border border-[#EBEBF0] rounded-md  placeholder:text-[10px]"
                />
              </div>

              {/* Min
               */}

              <div className="flex flex-col space-y-2">
                <div className="flex text-xs ">
                  <label htmlFor="">Min</label>
                </div>

                <input
                  type="email"
                  placeholder="Per hour"
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
          </div>

          {/* Button submit  */}

          <div className="p-4">
            <div className="w-full flex justify-center md:justify-end md:mt-4">
              <Link
                to={''}
                onClick={handlePreview}
                className="flex justify-center items-center w-full md:w-36 h-8 text-xs  rounded-full cursor-pointer bg-[#E9F358] "
              >
                Preview
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* View Preview RTR  */}

      <div
        className={`w-full h-full p-3    flex justify-center items-center   fixed inset-0 transition-all ease-in-out duration-300  ${isPreviewRTR ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-1000]'} `}
      >
        <div className="w-full h-screen hidden md:block absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

        <div
          className="   z-[30] w-full max-w-[600px] overflow-auto h-[98%] p-3  shadow-xl
                          bg-[#F2F2F5] rounded-lg"
        >
          <div className="flex justify-between items-start p-2 sticky top-0 bg-[#F2F2F5] z-[10]">
            <div className="w-full flex justify-center items-center">
              <img src={Logo} className="w-10 h-10" alt="img-logo" />
            </div>
            <IoMdClose
              size={20}
              color="#585858"
              className="hover:scale-[1.1] cursor-pointer"
              onClick={() => isSetPreviewRTR(false)}
            />
          </div>

          <div className="w-full max-w-[975px] h-auto  m-auto border   rounded-lg">
            <div className="w-full bg-white flex  flex-col justify-end items-start space-y-3 md:space-y-0 md:flex-row md:justify-between md:items-center p-5   rounded-t-lg">
              <div className="flex   items-center space-x-4">
                <span className="text-[10px] text-[#6B7588]">Job Title: </span>
                <p className="text-[10px] font-semibold">Full Stack Java Developer</p>
                <span className="text-[8px] text-[#7B8496]">- Allen, Texas, US</span>
              </div>

              <div>
                <p className="text-[10px]">Rate : $60 / HR</p>
              </div>
            </div>

            <div className="w-full bg-white mt-3 flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between md:items-start p-5">
              <div className="flex flex-col space-y-1">
                <h1 className="text-[10px]">From</h1>
                <p className="text-[10px]">
                  <strong>Send by</strong>: Erika Less
                </p>
                <p className="text-[10px]">
                  <strong>Sender email</strong>: Erika@insightGlobal.com
                </p>
                <p className="text-[10px]">
                  <strong>Company</strong>:Insight Global
                </p>
              </div>

              <div className="flex flex-col items-start space-y-3">
                <h1 className="text-[10px]">To</h1>
                <p className="text-[10px]">
                  <strong>Employer Name</strong>: Mathew
                </p>
                <p className="text-[10px]">
                  <strong>Employer Email</strong>: Mathew@xyz.com
                </p>
                <p className="text-[10px]">
                  <strong>Employer Company</strong>: AA Tech
                </p>
                <p className="text-[10px]">
                  <strong>Applicant Name</strong>: Johnson
                </p>
                <p className="text-[10px]">
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

            <div className="w-full flex flex-col space-y-5 bg-white md:flex-row  items-start md:justify-between md:items-end p-5">
              <div className="flex flex-col space-y-2">
                <p className="text-[10px]">
                  <strong>Client</strong>: AT & T
                </p>
                <p className="text-[10px]">
                  <strong>Prime Vendor </strong>: Insight Global
                </p>

                <p className="text-[10px]">
                  <strong>Implementation</strong>: TCS
                </p>
                <p className="text-[10px]">
                  <strong>Vendor </strong>: AA Tech
                </p>
              </div>

              <p className="text-[10px]">
                <strong>Valid Till</strong>:30 days (08/26/2024)
              </p>
            </div>

            {/* Acceptance  */}

            <div className="w-full  flex flex-col space-y-4 p-5 bg-white mt-2">
              <div className="flex justify-start items-center space-x-3">
                <input type="checkbox" className="w-[10px] h-[10px]" />{' '}
                <p className="text-[#7D8697] text-xs">
                  By accepting this and proceeding further you agreed to the terms & condition
                </p>
              </div>
            </div>

            {/* Button submit  */}

            <div className="p-2">
              <div className="w-full flex justify-center md:justify-end md:mt-4">
                <Link
                  to={''}
                  onClick={() => isSetPreviewRTR(false)}
                  className="flex justify-center text-[10px] items-center w-full md:w-36 h-7  rounded-full cursor-pointer bg-[#E9F358] "
                >
                  Add
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <ViewRTR isViewRTROpen={isViewRTROpen} setIsViewRTROpen={setIsViewRTROpen} rtrId={rtrId} />

    </div>
  );
};

export default Accepted;

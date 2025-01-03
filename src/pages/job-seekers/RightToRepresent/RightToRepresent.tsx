import React, { useState, useEffect } from 'react';
import { BiPlus } from 'react-icons/bi';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../../assets/logo/hirehour.png';
import ViewRTR from '../../../components/common/ViewRTR';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchRTRs } from '../../../utils/jobseekers/getRTR';
import axiosInstance from '../../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import Spinner from '../../../components/Spinner';

const SignRTR: React.FC<{
  setSignRTR: (e: boolean) => void;
  isSignRTR: boolean;
  rtrId: number | null;
}> = ({ setSignRTR, isSignRTR, rtrId }) => {
  const [signature, setSignature] = useState('');
  const queryClient = useQueryClient();

  const { data: rtr } = useQuery({
    queryKey: ['all-rtr'],
    queryFn: fetchRTRs,
  });
  const viewRTR = rtr?.data?.filter((i: ALLRTRTYPES) => i.ID === rtrId)?.[0];

  //mutation

  const signMutation = useMutation({
    mutationFn: async (signRTR: { rtrId: number; candidateSignatureLink: string }) => {
      const response = await axiosInstance.post('/api/candidate/rtr/sign-rtr', signRTR);
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
      signMutation.mutate({ rtrId, candidateSignatureLink: `https://${signature}.png` });
    }
  };

  return (
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
                <div className="flex flex-col items-center justify-center space-y-2">
                  {viewRTR?.isSignedByEmployer ? (
                    <>
                      <p className="text-xs font-sans font-[100] tracking-widest border-b-2 w-full text-center">
                        {signature}
                      </p>

                      <p className="text-xs">Mathew - 08/16/2024</p>

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

            <div className="flex flex-col justify-start items-start space-y-3">
              <h1 className="text-xs font-semibold">Applicant</h1>

              <div className="flex justify-center items-center space-x-3">
                {viewRTR?.isSignedByCandidate ? (
                  <>
                    <p className="text-xs font-sans font-[100] tracking-widest border-b-2 w-full text-center">
                      {viewRTR?.candidateSignatureImgLink}
                    </p>

                    <p className="text-xs">Mathew - 08/16/2024</p>

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
                      className="text-white text-[10px] w-[100px] p-2 cursor-pointer rounded-full text-center bg-[#07A561]"
                    >
                      {signMutation.isPending ? (
                        <Spinner loading={signMutation.isPending} color={'#000000'} size={15} />
                      ) : (
                        'Sign'
                      )}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RightToRepresent: React.FC = () => {
  const [isRTROpen, setIsRTROpen] = useState<boolean>(false);
  const [isSignRTR, setIsSignRTR] = useState<boolean>(false);
  const [isPreviewRTR, isSetPreviewRTR] = useState<boolean>(false);
  const [isViewRTROpen, setIsViewRTROpen] = useState<boolean>(false);
  const [rtrId, setRTRId] = useState<number | null>(null);
  const { data: rtr } = useQuery({
    queryKey: ['all-rtr'],
    queryFn: fetchRTRs,
  });

  useEffect(() => {
    if (isRTROpen || isSignRTR || isPreviewRTR) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isRTROpen, isSignRTR, isPreviewRTR]);

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
    { label: 'New (2)', link: '/right-to-represent' },
    { label: 'Accepted (2)', link: '/rtr-accepted' },
    { label: 'Decline (2)', link: '/rtr-decline' },
    { label: 'Expire (2)', link: '/rtr-expired' },
  ];

  const handleViewSign = (Id: number) => {
    setRTRId(Id);
    setIsSignRTR(true);
  };

  const handlePreview = () => {
    isSetPreviewRTR(true);
    setIsRTROpen(false);
  };
  return (
    <div className="w-full  min-h-screen bg-[#F2F2F5]  relative  ">
      <div className=" w-full max-w-[1280px]  flex     m-auto mt-3 rounded-lg  ">
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
                    className={` text-xs  font-[600] cursor-pointer  ${id === 0 ? 'text-[#104B53]' : ''}`}
                    key={id}
                  >
                    {item.label}
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
              return (
                <div
                  key={i}
                  className="w-full max-w-[1200px]  h-full m-auto border border-[#E1E1E2] rounded-lg"
                >
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
                        <p
                          onClick={() => setIsViewRTROpen(true)}
                          className="border text-sm text-[#104B53] border-[#104B53] p-1 flex justify-center items-center w-[80px] rounded-full"
                        >
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
                </div>
              );
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

            <div className="flex flex-col w-full  border ">
              <div className="flex justify-end items-center p-1 bg-[#F2F2F5]">
                <p className="w-32  h-7 bg-[#104B53] text-white text-[10px] flex justify-center items-center rounded-full font-[500]">
                  Ask AI to generate
                </p>
              </div>

              <textarea className="w-full  text-[10px] p-2 min-h-44 text-[#3A3A3C] tracking-wide">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                from a line in section 1.10.32.
              </textarea>
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

      {/* View Sign RTR  */}

      <SignRTR setSignRTR={setIsSignRTR} isSignRTR={isSignRTR} rtrId={rtrId} />

      <ViewRTR isViewRTROpen={isViewRTROpen} setIsViewRTROpen={setIsViewRTROpen} />
    </div>
  );
};

export default RightToRepresent;

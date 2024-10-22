import { useRef, useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import Logo from '../../../assets/logo/logo.png';
import { useReactToPrint } from 'react-to-print';
import { FaDownload } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { MdOutlineFileCopy } from "react-icons/md";


const Plan: React.FC = () => {
  const [selector, setSelector] = useState<boolean>(false);
  return (
    <div className="w-full h-full">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center">
        <div className="w-full md:max-w-[80%] border flex justify-between items-center p-4 rounded-lg ">
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Current Plan</p>
            <div className="flex justify-center items-center space-x-3">
              <p className="text-sm font-semibold">
                $Free / <span className="text-[10px]">Month</span>{' '}
              </p>
              <p className="text-sm">Post a Job for Free</p>
            </div>
          </div>

          <p className="w-32 text-xs flex justify-center items-center rounded-full h-8 bg-[#CAFDFC] text-[#1C565E]">
            Active Plan
          </p>
        </div>

        <div className="w-full md:max-w-[15%] border p-4 rounded-lg flex flex-col justify-start ">
          <p className="text-sm font-semibold">Credits</p>
          <p className="text-end">0</p>
        </div>
      </div>

      <div className="max-w-[1280px] mt-2 m-auto">
        <div className="flex flex-wrap gap-10 items-center justify-center  ">
          <div
            onClick={() => {
              setSelector(!selector);
            }}
            className={` border ${!selector && 'border-[1px] border-black'} max-w-[260px] h-96   w-full rounded-lg  p-3 bg-white flex justify-between flex-col`}
          >
            <div className="flex-col">
              <p className="text-lg font-semibold ">Post a Job for Free</p>
              <p className="text-sm font-semibold ">
                Free / <span className="text-xs">Month</span>
              </p>
              <p className="text-xs font-normal text-[#6B7588] mt-1">
                Post a Job and track the applicant
              </p>
              <div className="w-full flex flex-col gap-4 mt-6">
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">
                    Distribution of job to multiple boards
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">
                    In-built AI Applicant tracking system
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">Co-Hiring access</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">
                    Digital Right to Represents(RTR)
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCheckCircle className="text-black" size={16} />
                  <p className="text-xs font-normal text-black ">All you can take profiles</p>
                </div>
              </div>
            </div>

            <div
              className={`${!selector && 'bg-[#114B53]  text-white'} w-full h-8 border-[1px] text-[#114B53] border-[#114B53] rounded-full flex justify-center items-center mt-10`}
            >
              <p className=" text-xs">Select package</p>
            </div>
          </div>

          <div
            onClick={() => {
              setSelector(!selector);
            }}
            className={` border ${selector && 'border-[1px] border-black'} max-w-[260px] h-96   w-full rounded-lg  p-3 bg-white flex justify-between flex-col`}
          >
            <div className="flex-col ">
              <p className="text-sm font-semibold ">Resume Sourcing</p>
              <p className="text-sm font-semibold  ">
                $99 / <span className="text-xs">Month</span>
              </p>
              <p className="text-xs font-normal text-[#6B7588] mt-1">
                You can find perfect applicant for you job match by sourcing the resume{' '}
              </p>

              <p className="text-lg font-semibold text-black mt-[150px] ">Credits : 100</p>
            </div>

            <div
              className={` ${selector && 'bg-[#114B53]  text-white'} w-full h-8 border-[1px] text-[#114B53] border-[#114B53] rounded-full flex justify-center items-center mt-10`}
            >
              <p className=" text-xs">Select package</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-xl border rounded-lg p-2   m-auto mt-2 flex justify-between items-center">
        <div className="flex flex-col space-y-1">
          <h1 className="text-sm">Card in the bag</h1>
          <p className="text-xs">xxxx-xxxx-xxxx-8912</p>
        </div>
        <p className="text-[#104B53] border border-[#104B53] w-28 text-xs flex justify-center items-center rounded-full h-8">
          Replace Card
        </p>
      </div>

      <div className="max-w-xl border rounded-lg p-2   m-auto mt-2 flex justify-between items-center">
        <h1 className="text-sm">Bulk Hiring ?</h1>
        <p className="text-[#104B53] text-white bg-[#104B53] w-28 text-xs flex justify-center items-center rounded-full h-8">
          Contact Us
        </p>
      </div>
    </div>
  );
};

const Invoice: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null); // Reference to the component for printing
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle printing
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Invoice', // Title of the PDF
    onAfterPrint: () => alert('PDF generated successfully!'), // Optional callback after printing
  });
  return (
    <div className="w-full h-full ">
      <table className="table-auto w-full border rounded-lg ">
        <thead className="bg-[#F2F2F5] pt-3 ">
          <tr className="text-sm ">
            <th className="p-2 text-sm text-[#3C3C3D]">S.No</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Invoice number</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Date</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Plan</th>
            <th className="p-2 text-sm text-[#3C3C3D]">Payment type</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <tr className=" border" key={i}>
                <td className="text-xs p-3">{i + 1}</td>
                <td className="text-xs p-2 cursor-pointer" onClick={() => setIsOpen(true)}>
                  SN2608921
                </td>
                <td className="text-xs p-2">06/20/2024</td>
                <td className="text-xs p-2">Resume sourcing</td>
                <td className="text-xs p-2">Debit card</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Invoice preview  */}
      <div
        className={`w-full h-full absolute   inset-0 transition-all duration-500 ${isOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}  `}
      >
        <div
          ref={componentRef}
          className="max-w-[500px] relative m-auto h-[95%] overflow-auto bg-white   shadow-lg"
        >
          <div className="w-full  px-4 py-2 flex justify-between items-center">
            <FaDownload onClick={handlePrint} className="cursor-pointer" />
            <RxCross1 onClick={() => setIsOpen(false)} className="cursor-pointer" />
          </div>

          <div className="px-5">
            <img src={Logo} alt="logo-topequator" className="w-32" />
          </div>

          <div className="flex justify-center items-center space-x-3 px-2">
            <div className="flex-1 bg-[#104B53] h-[5px]"></div>
            <p className="text-lg font-[500]">Sales Invoice</p>
          </div>

          <div className="flex justify-between items-center px-5">
            <div className="flex flex-col ">
              <p className="text-[10px]">
                <strong>Invoice Number:</strong>SN2608921
              </p>
              <p className="text-[10px]">
                <strong>Invoice Date:</strong>06-09-20224
              </p>
            </div>

            <div className="flex flex-col ">
              <p className="text-[10px]">
                <strong>Due Date:</strong>06-09-2024
              </p>
              <p className="text-[10px]">
                <strong>Payment:</strong>Immediate
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full gap-10 px-5  py-2">
            <div className="flex flex-col space-y-2">
              <h1 className="text-lg underline text-[#3A3A3C]">INVOICE TO:</h1>
              <div className="flex flex-col space-y-1 items-start justify-start">
                <p className="text-[10px]">ABHYANTH SOLUTION</p>
                <p className="text-[8px]">
                  Machael Baily 5201 waterford District Dr Fl 8 Miami, Florida 33126-2064 United
                  STates mba@abhyanthsolutions.com
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h1 className="text-lg underline text-[#3A3A3C]">DELIVER TO:</h1>
              <div className="flex flex-col space-y-1">
                <p className="text-[10px]">ABHYANTH SOLUTION</p>
                <p className="text-[8px]">
                  Machael Baily 5201 waterford District Dr Fl 8 Miami, Florida 33126-2064 United
                  STates mba@abhyanthsolutions.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2 px-5  py-1">
            <p className="text-xs ">
              {' '}
              <strong>Account Number: </strong>A00049601{' '}
            </p>
            <div className="flex flex-col space-y-2">
              <p className="text-xs">For any questions about</p>
              <ul className="flex flex-col list-disc px-10">
                <li className="text-[8px]">
                  <strong>Your Invoice:</strong>HirehoursIV@Hirehours.com
                </li>
                <li className="text-[8px]">
                  <strong>Your Invoice:</strong>Customer service@Hirehours.com/Tel : 800-666-7837
                </li>
              </ul>
            </div>
          </div>

          <div className="px-5">
            <div className="bg-[#022931]">
              <h1 className="text-xs p-1 text-center text-white">TRANSACTION SUMMERY</h1>
            </div>
            <table className="table-auto w-full border rounded-lg ">
              <thead className="bg-[#EFFDFD] pt-3 ">
                <tr className="text-sm ">
                  <th className="p-1 text-[8px] text-[#3C3C3D]">Item Description</th>
                  <th className="p-1 text-[8px] text-[#3C3C3D]">Service Period</th>
                  <th className="p-1 text-[8px] text-[#3C3C3D]">Total</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {Array.from({ length: 2 }).map((_, i) => {
                  return (
                    <tr className=" border bg-[#F2F2F5]" key={i}>
                      <td className="text-[8px] p-1">06/20/2024</td>
                      <td className="text-[8px] p-1">Resume sourcing</td>
                      <td className="text-[8px] p-1">Debit card</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="w-full flex justify-end items-end mt-2 flex-col">
              <p className="text-[10px] w-full max-w-[50%] flex justify-between items-center">
                <strong>Subtotal:</strong> <span className="text-[10px]">$392.44</span>
              </p>

              <p className="text-[10px] w-full max-w-[50%] flex justify-between items-center">
                <strong>Tax:</strong> <span className="text-[10px]">$392.44</span>
              </p>

              <p className="text-[10px] w-full max-w-[50%] flex justify-between items-center">
                <strong>Total:</strong> <span className="text-[10px]">$392.44</span>
              </p>
            </div>
          </div>

          <div className="px-5 pt-2">
            <div className="bg-[#022931]">
              <h1 className="text-xs p-1 text-center text-white">TAX DETAILS</h1>
            </div>
            <table className="table-auto w-full border rounded-lg ">
              <thead className="bg-[#EFFDFD] pt-3 ">
                <tr className="text-sm ">
                  <th className="p-1 text-[8px] text-[#3C3C3D]">Tax Name</th>
                  <th className="p-1 text-[8px] text-[#3C3C3D]">Charge Info</th>
                  <th className="p-1 text-[8px] text-[#3C3C3D]">Tax Rate</th>
                  <th className="p-1 text-[8px] text-[#3C3C3D]">Tax Amout</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {Array.from({ length: 3 }).map((_, i) => {
                  return (
                    <tr className=" border bg-[#F2F2F5]" key={i}>
                      <td className="text-[8px] p-1">06/20/2024</td>
                      <td className="text-[8px] p-1">Resume sourcing</td>
                      <td className="text-[8px] p-1">Debit card</td>
                      <td className="text-[8px] p-1">$34</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="w-full flex justify-end items-end mt-1 flex-col">
              <p className="text-[10px] w-full max-w-[50%] flex justify-between items-center">
                <strong>Total:</strong> <span className="text-[10px]">$392.44</span>
              </p>
            </div>
          </div>
          <div className="w-full h-3 bg-[#E9F358] absolute bottom-0 "></div>
        </div>
      </div>
    </div>
  );
};
const BulkHiring: React.FC = () => {
  const columns = [
    'Full name',
    'Email',
    'Date',
    'Job Posting',
    'Resume sourcing',
    'Amount',
    'Action',
  ];
  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [isHireCodeOpen, setIsHireCodeOpen] = useState<boolean>(false);

  const handleCopyCode = () => {
    const hireCode = 'X1X2X3X4';
    navigator.clipboard.writeText(hireCode);
    alert('Hire code copied to clipboard!');
  };
  return (
    <div className="w-full h-full ">
      <table className="table-auto w-full border rounded-lg ">
        <thead className="bg-[#F2F2F5] pt-3 ">
          <tr className="text-sm ">
            {columns?.map((col, i) => {
              return (
                <th key={i} className="p-2 text-xs text-[#3C3C3D]">
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="text-center ">
          {Array.from({ length: 1 }).map((_, i) => {
            return (
              <tr className=" border  " key={i}>
                <td className="text-xs p-3 ">Mathew Albert</td>
                <td className="text-xs p-3 cursor-pointer">mathew@zyx.com</td>
                <td className="text-xs p-3">06/20/2024</td>
                <td className="text-xs p-3">50</td>
                <td className="text-xs p-3">50</td>
                <td className="text-xs p-3">$400</td>
                <td className="flex justify-center items-center p-3 space-x-2">
                  <p
                    className="w-20 h-7 bg-[#104B53] text-white rounded-full text-[10px] flex justify-center items-center"
                    onClick={() => setIsPaymentOpen(true)}
                  >
                    View & Pay
                  </p>
                  <p className="w-20 h-7 bg-[#104B53] text-white rounded-full text-[10px] flex justify-center items-center" onClick={()=>setIsHireCodeOpen(true)}>
                    View Hirecode
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Action modal  */}
      <div
        className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isPaymentOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'} `}
      >
        <div
          className="   z-[10] w-full max-w-[400px] shadow-xl
                        h-[70%] bg-white rounded-lg"
        >
          <div className="flex justify-between items-center p-3">
            <div className="flex flex-col space-y-1">
              <h1 className="text-lg font-semibold">Payment</h1>
            </div>
          </div>

          <div className="w-full flex flex-col space-y-4  p-3">
            <div className="w-full space-y-3  ">
              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Company name</p>
                <p className="text-[10px] font-semibold">Infotech</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Full Name</p>
                <p className="text-[10px] font-semibold">Mathew Albert</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Email</p>
                <p className="text-[10px] font-semibold">Mathew@xyz.com</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Date</p>
                <p className="text-[10px] font-semibold">10/21/2024</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Phone number</p>
                <p className="text-[10px] font-semibold">+1 xxx-xxx-xxxx</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px] text-[#8F90A6]">Sales person</p>
                <p className="text-[10px] font-semibold">Peter</p>
              </div>
            </div>

            <div className="grid w-full grid-cols-2">
              <div className="flex flex-col space-y-1">
                <p className="text-[10px]  ">Estimated Job posts</p>
                <p className="text-[10px] font-semibold">50</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px]  ">Count</p>
                <p className="text-[10px] font-semibold">Per month</p>
              </div>
            </div>

            <div className="grid w-full grid-cols-2">
              <div className="flex flex-col space-y-1">
                <p className="text-[10px]  ">Estimated resume Sourcing</p>
                <p className="text-[10px] font-semibold">50</p>
              </div>

              <div className="flex flex-col space-y-1">
                <p className="text-[10px]  ">Count</p>
                <p className="text-[10px] font-semibold">Per month</p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 ">
              <p className="text-sm font-semibold">Payment</p>

              <div className="flex justify-between items-center">
                <p className="text-xs">Amount in Dollar</p>

                <p className="text-xs">
                  $ <span>100</span>
                </p>
              </div>
            </div>

            <div className="flex justify-around items-center ">
              <p
                className="text-xs text-[#104B53] font-semibold"
                onClick={() => setIsPaymentOpen(false)}
              >
                Cancle
              </p>

              <p className="w-40 h-8 flex justify-center items-center bg-[#104B53] text-white text-xs rounded-full">
                Make Payment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hire Code Modal */}
      <div
        className={`w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 ${
          isHireCodeOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'
        }`}
      >
        <div className="z-[10] w-full max-w-[300px] shadow-xl bg-white rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Hire Code</h1>
            <button
              onClick={() => setIsHireCodeOpen(false)}
              className="text-lg font-bold text-gray-400"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col items-center space-y-3 mt-4 w-full">
            <div className="w-full border-dashed border border-gray-400 p-2 rounded-md flex justify-between items-center">
              <p className="text-lg w-full font-bold tracking-widest text-center">X1X2X3X4</p>
              <MdOutlineFileCopy onClick={handleCopyCode} className='cursor-pointer' />
            </div>
         

            <div className="flex justify-between w-full text-xs mt-4">
              <div>
                <p className="text-gray-500 text-xs">Created date</p>
                <p className=" text-[10px]">10/21/2024</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Expired date</p>
                <p className=" text-[10px]">11/20/2024</p>
              </div>
            </div>
            <button className="bg-[#EEF344] text-[10px] w-32 h-7 rounded-full mt-4">
              View Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Subscription: React.FC = () => {
  const jobFilters = [
    {
      label: 'Subscription plan',
      component: <Plan />,
      count: '',
    },
    {
      label: 'Invoice',
      component: <Invoice />,
      count: '',
    },
    {
      label: 'Bulk Hiring',
      component: <BulkHiring />,
      count: '1',
    },
  ];
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  return (
    <div>
      {/* filters  */}
      <div className="p-3">
        <ul className="max-w-[600px]   rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
          {jobFilters?.map((item, i) => {
            return (
              <li
                key={i}
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
      </div>

      {/* all jobs  */}
      <div className="w-full h-full   px-2 space-y-3 overflow-auto md:h-[75vh]">
        {jobFilters?.map((item, i) => {
          if (jobFilterIdx === i) {
            return <div key={i}>{item.component}</div>;
          }
        })}
      </div>
    </div>
  );
};

export default Subscription;

import { useRef, useState } from 'react';

import { FaCheckCircle } from 'react-icons/fa';
import Logo from '../../../assets/logo/logo.png';
import { useReactToPrint } from "react-to-print";

const Plan: React.FC = () => {
  const [selector, setSelector] = useState<boolean>(false);
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center">
        <div className="w-full max-w-[80%] border flex justify-between items-center p-4 rounded-lg ">
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

        <div className="w-full max-w-[15%] border p-4 rounded-lg flex flex-col justify-start ">
          <p className="text-sm font-semibold">Credits</p>
          <p className="text-end">0</p>
        </div>
      </div>

      <div className="max-w-[1280px] m-auto pt-5">
        <div className="flex gap-10 items-center justify-center  ">
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
            className={` border ${selector && 'border-[1px] border-black'} max-w-[260px]   w-full rounded-lg p-3 bg-white flex justify-between flex-col`}
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

      <div className="max-w-xl border rounded-lg p-4   m-auto mt-5 flex justify-between items-center">
        <h1>Bulk Hiring ?</h1>
        <p className="text-[#104B53] border border-[#104B53] w-28 text-xs flex justify-center items-center rounded-full h-8">
          Contact Us
        </p>
      </div>
    </div>
  );
};

const Invoice: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null); // Reference to the component for printing

  // Function to handle printing
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Invoice', // Title of the PDF
    onAfterPrint: () => alert("PDF generated successfully!"), // Optional callback after printing
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
                <td className="text-xs p-2">SN2608921</td>
                <td className="text-xs p-2">06/20/2024</td>
                <td className="text-xs p-2">Resume sourcing</td>
                <td className="text-xs p-2">Debit card</td>
              </tr>
            );
          })}
        </tbody>
      </table>


      {/* Invoice preview  */}
      <div className="w-full h-full absolute   inset-0 ">  
    
    
        <div ref={componentRef} className="max-w-[500px] relative m-auto h-[95%] overflow-auto bg-white   shadow-lg">

          <div className='w-full  px-4 flex justify-end items-center'>
          <button
        className="bg-[#022931] w-20 h-6 rounded-full text-white text-xs "
        onClick={handlePrint}
      >
        download
      </button>
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

            <div className='w-full flex justify-end items-end mt-2 flex-col' >
                    <p className='text-[10px] w-full max-w-[50%] flex justify-between items-center'><strong>Subtotal:</strong> <span className='text-[10px]'>$392.44</span></p>

                    <p className='text-[10px] w-full max-w-[50%] flex justify-between items-center'><strong>Tax:</strong> <span className='text-[10px]'>$392.44</span></p>

                    <p className='text-[10px] w-full max-w-[50%] flex justify-between items-center'><strong>Total:</strong> <span className='text-[10px]'>$392.44</span></p>
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



            <div className='w-full flex justify-end items-end mt-1 flex-col' >
                    <p className='text-[10px] w-full max-w-[50%] flex justify-between items-center'><strong>Total:</strong> <span className='text-[10px]'>$392.44</span></p>

                    
            </div>

           
 
          </div>
          <div className='w-full h-3 bg-[#E9F358] absolute bottom-0 '></div>
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
    },
    {
      label: 'Invoice',
      component: <Invoice />,
    },
  ];
  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  return (
    <div>
      {/* filters  */}
      <div className="p-7">
        <ul className="max-w-[400px]   rounded-full flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
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
                  {i}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* all jobs  */}
      <div className="w-full   p-5 space-y-3 overflow-auto h-[66vh]">
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

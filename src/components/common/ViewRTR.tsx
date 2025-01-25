import { useQuery } from '@tanstack/react-query';
import Logo from '../../assets/logo/hirehour.png';
import { fetchAllRTR } from '../../utils/jobposters/jobboards/RTR';


type ViewRTRProps={
    isViewRTROpen:boolean,
    setIsViewRTROpen:(e:boolean)=>void,
    rtrId?:number
}
 
const ViewRTR:React.FC<ViewRTRProps>=({isViewRTROpen,setIsViewRTROpen,rtrId})=>{

      const {data:rtr}=useQuery({
        queryKey:['all-rtr'],
        queryFn:fetchAllRTR
      })

      const rtrOne=rtr?.data?.filter((i:ALLRTRTYPES)=>i.ID===rtrId)?.[0]
      console.log("rtrOne",rtrOne);
    return(
        <div
        className={`w-full h-full p-3    flex justify-center items-center   fixed inset-0 transition-all ease-in-out duration-300  ${isViewRTROpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}  `}
      >
        <div className="w-full h-screen hidden md:block absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "  onClick={()=>setIsViewRTROpen(false)}></div>

        <div
          className="   z-[30] w-full max-w-[500px]  h-[99%] overflow-auto  p-4  shadow-xl
                          bg-white  "
        >
          <div className="flex justify-between items-start p-2 sticky top-0   z-[10]">
            <div className="w-full flex items-center space-x-2  ">
              <img src={Logo} className="w-8 h-8" alt="img-logo" />
              <p className='font-[500] text-lg'>TopEquators</p>
            </div>


            <p className='text-lg font-semibold w-full text-end'>Insight Global</p>
            
          </div>

          <hr />

          <div className="w-full max-w-[975px] h-auto  m-auto mt-2     ">
             

            <div className="w-full bg-white   flex  h-64     justify-start items-start ">

                <div className='flex w-full flex-col space-y-5'>


                <div className="flex flex-col space-y-1">
                <h1 className="text-[15px]">From</h1>
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
                <h1 className="text-[14px]">To</h1>
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
                </div>
            

                <div className=" flex flex-col space-y-5  bg-white w-full max-w-56  h-full  items-start justify-between  p-5">
              <div className="flex flex-col space-y-2 w-full">
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

             

              
            </div>

            <hr />


            {/* Acceptance  */}

            

            <div className="w-full flex flex-col space-y-6  bg-white mt-2">
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

            
            </div>


            <div className='w-full flex justify-between items-center mt-3'>

                <div className='flex flex-col space-y-1'>
                    <p className='text-xs'>Date: 08/16/2024 </p>
                    <p className='text-xs'>Employer Signature :<span className='text-xs font-[200] italic'>Mathew</span></p>
                </div>

                <div>
                    <p className='text-xs'>Date: 08/16/2024 </p>
                    <p className='text-xs'>Applicant Signature :<span className='text-xs font-[200] italic'>Johnson</span></p>
                </div>
            </div>

           
          </div>
        </div>
      </div>
    )
}

export default ViewRTR;
import VerifyJobIco from '../../../assets/dashboardrtr/verifyjob.png'
const CreateNewJob: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-sm font-semibold">Create New Job</h1>
      </div>
      <hr />


      <div className="w-full h-[82vh]  flex justify-center items-center ">
            <div className='flex flex-col justify-center items-center max-w-5xl space-y-5'>
                <img src={VerifyJobIco} className='w-56 h-48' alt="verify-job" />
                <h1 className='text-sm font-semibold text-center'>Access Limited: <br />
                Please Complete Verification to Unlock Full Features</h1>

                <p className='text-xs text-center'>You're currently viewing a limited version of TopEquator. To gain full access to all job postings, employer tools, and exclusive features, please verify your account.Take a moment to verify now and start enjoying the complete benefits of our platform.</p>

                <p className='text-[10px] font-[500] w-32 flex justify-center items-center rounded-full  h-7 bg-[#E9F358] text-[#104B53]'>Post a Job </p>
            </div>
      </div>
    </div>
  );
};

export default CreateNewJob;

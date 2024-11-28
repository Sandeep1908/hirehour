
import { BsUpload } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';


type ResumeUploadProps={
    setIsUploadResumeOpen:(e:boolean)=>void
}

const ResumeUpload:React.FC<ResumeUploadProps>=({setIsUploadResumeOpen})=>{
    return(
        <div className="bg-white w-full p-5 rounded-lg mt-3  ">
              <div className="p-3 flex justify-between items-center relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#F0F1F3] pb-5">
                <h1 className="text-2xl font-semibold">Resume</h1>

                <div className="flex justify-center items-center space-x-3">
                  <p className="text-xs text-[#A4A5B8]">Pdf, Doc, DocX (2MB)</p>

                  <label
                    onClick={()=>setIsUploadResumeOpen(true)}
                    className={` flex justify-center items-center w-36 h-8 space-x-2    rounded-full cursor-pointer border-2 border-[#104B53]   `}
                  >
                    <BsUpload size={13} color="#104B53" />
                    <span className={`text-xs font-semibold text-[#104B53]   `}>Upload Resume</span>
                    
                  </label>
                </div>
              </div>

              <div className="w-full h-full flex space-x-3 justify-center items-center p-3 ">
                <div className="flex  h-[60px] justify-between items-center w-full border border-black overflow-hidden rounded-lg ">
                  <div className=" w-[100px] h-full flex justify-center items-center bg-[#E3EDFF]">
                    <p className="text-sm font-semibold text-[#1F4AF1] ">PDF</p>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h1 className="text-sm font-semibold">Resume 1</h1>
                    <p className="text-xs text-[#6B7588]">Default Resume</p>
                  </div>

                  <div className="flex justify-center items-center space-x-4 pr-4">
                    <p className="text-xs text-[#104B53]">Preview</p>
                    <MdDeleteOutline size={20} />
                  </div>
                </div>

                <div className="flex  h-[60px] justify-between items-center w-full border border-[#D1D1D1] rounded-lg ">
                  <div className=" w-[100px] h-full flex justify-center items-center bg-[#E3EDFF]">
                    <p className="text-sm font-semibold text-[#1F4AF1] ">PDF</p>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <h1 className="text-sm font-semibold">Resume 1</h1>
                    <p className="text-xs text-[#6B7588]">Default Resume</p>
                  </div>

                  <div className="flex justify-center items-center space-x-4 pr-4">
                    <p className="text-xs text-[#104B53]">Preview</p>
                    <MdDeleteOutline size={20} />
                  </div>
                </div>
              </div>
            </div>
    )
}


export default ResumeUpload
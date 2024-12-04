import { BsUpload } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { fetchResumes, fetchUserDetail } from '../../../../utils/jobseekers/getUserDetails';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type ResumeUploadProps = {
  setIsUploadResumeOpen: (e: boolean) => void;
};

const ResumeUpload: React.FC<ResumeUploadProps> = ({ setIsUploadResumeOpen }) => {
  const { data: resumes } = useQuery({
    queryKey: ['resumes'],
    queryFn: fetchResumes,
  });

  const { data: userDetail } = useQuery({
    queryKey: ['userdetail'],
    queryFn: fetchUserDetail,
  });

  const queryClient = useQueryClient();

  const defaultResumeMutation = useMutation({
    mutationFn: async (selectedResume:string) => {
      const response = await axiosInstance.post('/api/candidate/details/update-details', {
        selectedResume: selectedResume,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success('Marked as default resume!');
      queryClient.invalidateQueries({ queryKey: ['resumes','userdetail'] });
       
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const handleDefaultResume = (resumeLink: string) => {
    defaultResumeMutation.mutate(resumeLink);
  };

  return (
    <div className="bg-white w-full p-5 rounded-lg mt-3  ">
      <div className="p-3 flex justify-between items-center relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#F0F1F3] pb-5">
        <h1 className="text-2xl font-semibold">Resume</h1>

        <div className="flex justify-center items-center space-x-3">
          <p className="text-xs text-[#A4A5B8]">Pdf, Doc, DocX (2MB)</p>

          <label
            onClick={() => setIsUploadResumeOpen(true)}
            className={` flex justify-center items-center w-36 h-8 space-x-2    rounded-full cursor-pointer border-2 border-[#104B53]   `}
          >
            <BsUpload size={13} color="#104B53" />
            <span className={`text-xs font-semibold text-[#104B53]   `}>Upload Resume</span>
          </label>
        </div>
      </div>

      <div className="w-full h-full     grid grid-cols-2 gap-2 p-3 ">
        {resumes?.resumes?.map((res: { resumeLink: string }, i: number) => {
          return (
            <div
              key={i}
              className={`flex w-full  h-[60px] justify-between items-center  border ${userDetail?.selectedResume === res?.resumeLink ? 'border-black' : ''}  overflow-hidden rounded-lg `}
            >
              <div className=" w-[50px] h-full flex justify-center items-center bg-[#E3EDFF]">
                <p className="text-sm font-semibold text-[#1F4AF1] ">PDF</p>
              </div>

              <div className="flex flex-col space-y-1">
                <h1 className="text-sm font-semibold">{res.resumeLink.split('@@')[1]}</h1>
                <p className="text-xs text-[#6B7588] hover:text-blue-500 cursor-pointer">
                  {userDetail?.selectedResume === res?.resumeLink ? (
                    'Default'
                  ) : (
                    <span onClick={() => handleDefaultResume(res?.resumeLink)}>
                      Mark as default
                    </span>
                  )}
                </p>
              </div>

              <div className="flex justify-center items-center space-x-4 pr-4">
                <a href={res?.resumeLink} className="text-xs text-[#104B53]">
                  Preview
                </a>
                <MdDeleteOutline size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeUpload;

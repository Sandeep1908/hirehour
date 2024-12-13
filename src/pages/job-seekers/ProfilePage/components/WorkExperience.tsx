import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BiPlus } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import {
  fetchDomains,
  fetchRoles,
  fetchRoleTypes,
  fetchUserDetails,
} from '../../../../utils/jobseekers/getUserDetails';
import axiosInstance from '../../../../axios/axiosInstance';
import { toast } from 'react-toastify';

type WorkExperience = {
  setExperiencePopup: (e: boolean) => void;
  setAddExperiencePopup: (e: boolean) => void;
  setExperienceId:(e:number)=>void
};

const WorkExperience: React.FC<WorkExperience> = ({ setExperiencePopup,setExperienceId,setAddExperiencePopup }) => {
  const { data: userDetails } = useQuery({
    queryKey: ['userDetails'],
    queryFn: fetchUserDetails,
  });

  const queryClient = useQueryClient();

  const { data: role } = useQuery({
    queryKey: ['roles'],
    queryFn: fetchRoles,
  });

  const { data: domains } = useQuery({
    queryKey: ['domains'],
    queryFn: fetchDomains,
  });

  const { data: jobTypes } = useQuery({
    queryKey: ['jobtypes'],
    queryFn: fetchRoleTypes,
  });

  const getRoleNameById = (id: number) =>
    role?.jobRoles?.find((role: { id: number; roleName: string }) => role.id === id)?.roleName ||
    'N/A';

  const getDomainNameById = (id: number) =>
    domains?.domains?.find((domain: { id: number; domainName: string }) => domain.id === id)
      ?.domainName || 'N/A';

  const getJobTypeById = (id: number) =>
    jobTypes?.jobRoles?.find((type: { id: number; typeName: string }) => type.id === id)
      ?.typeName || 'N/A';

  //deleting experience
  const mutation = useMutation({
    mutationFn: async (experienceID: number) => {
      const response = await axiosInstance.post('/api/candidate/details/delete-experience', {
        experienceID: experienceID,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
      toast.success('Experience Deleted Successfylly!');
    },
    onError: () => {
      toast.error('Failed to delete experience. Please try again.');
    },
  });
  const handleDeleteExperience = (id: number) => {
    mutation.mutate(id);
  };

  const handleEdit=(Id:number)=>{
    setExperienceId(Id)
    setExperiencePopup(true)
  }

  return (
    <div className="bg-white w-full p-5 rounded-lg mt-3">
      <div className=" flex flex-col space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            Work Experience (Total 4 years 4 months of experience)
          </h1>

          <div className="flex justify-end items-center space-x-2" onClick={()=>{setAddExperiencePopup(true)}}>
            <BiPlus size={14} color="#104B53" />
            <p className="text-[#104B53] text-xs font-semibold">Add</p>
          </div>
        </div>

        {userDetails?.candidatedetailsexperiences?.map((item: WorkExperienceDetail, i: number) => {
          return (
            <div key={i} className="border p-7 border-[#EBEBF0] rounded-lg">
              <div className="flex justify-end items-center space-x-4">
                <div className="flex items-center  cursor-pointer " onClick={()=>handleEdit(item?.ID)}>
                  <FaEdit size={14} color="#104B53" />
                  <p className="text-[#104B53] text-xs">Edit</p>
                </div>

                <div
                  className="flex items-center cursor-pointer  "
                  onClick={() => handleDeleteExperience(item?.ID)}
                >
                  <MdDeleteOutline color="#104B53" />
                  <p className="text-[#104B53] text-xs">Delete</p>
                </div>
              </div>

              <div className="flex flex-col space-y-5 ">
                <div className="flex flex-col space-y-4">
                  <h1 className="text-sm font-semibold">{getRoleNameById(item?.role)}</h1>
                  <p className="text-[#6B7588] text-xs">
                    {item?.companydetails} - {item?.place}
                  </p>
                  <div className="flex space-x-3 flex-wrap  items-center w-full">
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-2 rounded-full font-semibold text-xs">
                      {getDomainNameById(item?.domain)}
                    </p>
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-2 rounded-full font-semibold text-xs">
                      {getJobTypeById(item?.jobType)}
                    </p>
                    <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-2 rounded-full font-semibold text-xs">
                      {new Date(item?.durationStart).toISOString().split('T')[0]} -{' '}
                      {item?.presentEmployer ? 'Present' : item?.durationEnd?.split('T')[0]}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 ">
                  <h1 className="text-sm ">Job summery</h1>
                  <ul className="flex flex-col space-y-3">
                    <li className="text-[#3A3A3C] text-xs">{item?.descriptionOfExperience}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;

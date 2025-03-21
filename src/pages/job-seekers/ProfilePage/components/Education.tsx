import { BiPlus } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useQuery, useQueryClient,useMutation } from "@tanstack/react-query";
import { fetchUserDetails } from "../../../../utils/jobseekers/getUserDetails";
import axiosInstance from "../../../../axios/axiosInstance";
import { toast } from "react-toastify";
import { useState } from "react";
import EducationEdit from '../../../../components/job-seekers/profile/Education';



type EducationProps={
    // setEducationPopup:(e:boolean)=>void
    setAddEducationPopup:(e:boolean)=>void
}
const Education:React.FC<EducationProps>=({setAddEducationPopup})=>{

    const [educationPopup, setEducationPopup] = useState<boolean>(false);
    const [degreeName, setDegreeName] = useState<string>("");
  

    const { data: userDetails } = useQuery({
        queryKey: ['userDetails'],
        queryFn: fetchUserDetails,
      });

      const queryClient=useQueryClient()
      

 
      const educationMutation = useMutation({
        mutationFn: async (educationId: number) => {
          const response = await axiosInstance.post('/api/candidate/details/delete-education', {
            educationID: educationId,
          });
          return response.data;
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['userDetails'] });
          toast.success('Education Deleted Susseccfully!');
        },
        onError: () => {
          toast.error('Failed to delete experience. Please try again.');
        },
      });
      const handleDeleteEducation = (id: number) => {
        educationMutation.mutate(id);
      };
      const handleEditEducation = (degreeName: string) => {
        setEducationPopup(true)
        setDegreeName(degreeName)
        // educationMutation.mutate(id);
      };
    

    return(
        <div className="bg-white w-full p-5 rounded-lg mt-3">
              <div className=" flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Education</h1>

              <div className="flex justify-end items-center space-x-2" onClick={()=>{setAddEducationPopup(true)}}>
                <BiPlus size={14} color="#104B53" />
                <p className="text-[#104B53] text-xs font-semibold">Add</p>
              </div>
            </div>

            {userDetails?.candidatedetailseducationdetails?.map((item:EducationDetail, i: number) => {
              return (
                <div className="border p-7 border-[#EBEBF0] rounded-lg" key={i}>
                  <div className="flex justify-end items-center space-x-4">
                    <div className="flex items-center  " onClick={()=>handleEditEducation(item?.degree)}>
                      <FaEdit size={14} color="#104B53" />
                      <p className="text-[#104B53] text-xs">Edit</p>
                    </div>

                    <div
                      className="flex items-center cursor-pointer "
                      onClick={() => handleDeleteEducation(item?.id)}
                    >
                      <MdDeleteOutline color="#104B53" size={14} />
                      <p className="text-[#104B53] text-xs">Delete</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-sm font-semibold">{item?.degree}</h1>
                      <p className="text-[#6B7588] text-xs">
                        {item?.schoolName} - {item?.schoolLocation}
                      </p>
                      <div className="flex space-x-3 items-center">
                        <p className="text-[#7C8596] bg-[#F2F2F5] p-2 rounded-full font-semibold text-xs">
                          {new Date(item?.durationStart).toISOString().split('T')[0]} -{' '}
                          {item?.isCurrentlyAttending ? 'Present' : item?.durationEnd?.split('T')[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div></div>
                </div>
              );
            })}
          </div>

          {educationPopup && <EducationEdit setEducationPopup={setEducationPopup} degreeName={degreeName} />}
            </div>
    )
}

export default Education
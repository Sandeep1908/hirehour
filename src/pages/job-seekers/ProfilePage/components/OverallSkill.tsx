import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import axiosInstance from '../../../../axios/axiosInstance'
import { toast } from 'react-toastify'


type SkillsProps = {
    userDetails:any
}

const OverallSkill:React.FC<SkillsProps> = ({userDetails}) => {

    const skillMutation = useMutation({
        mutationFn: async (skillID: number) => {
          const response = await axiosInstance.post('/api/candidate/details/delete-skill', {
            skillID: skillID,
          });
          return response.data;
        },
        onSuccess: () => {
        //   queryClient.invalidateQueries({ queryKey: ['userDetails'] });
          toast.success('Education Deleted Susseccfully!');
        },
        onError: () => {
          toast.error('Failed to delete experience. Please try again.');
        },
      });
      const handleDeleteSkill = (id: number) => {
        skillMutation.mutate(id);
      };
    

   
  return (
  <>
       {userDetails?.candidatedetailsskills.map((item:any,id:number)=>{
        return(
            <div key={id} className="mt-4">
                 <div className="flex justify-end items-center space-x-4 mb-2">
                                    <div className="flex items-center  " >
                                      <FaEdit size={14} color="#104B53" />
                                      <p className="text-[#104B53] text-xs">Edit</p>
                                    </div>
                
                                    <div
                                      className="flex items-center cursor-pointer "
                                      onClick={() => handleDeleteSkill(item?.id)}
                                    >
                                      <MdDeleteOutline color="#104B53" size={14} />
                                      <p className="text-[#104B53] text-xs">Delete</p>
                                    </div>
                                  </div>
                <div className="flex justify-between">
               <div>
               <p className="text-[#3A3A3C] text-xs "><span className='font-semibold'>Skill Name: </span> {item.skillName}</p> 
               <p className="text-[#3A3A3C] text-xs  mt-1"><span className='font-semibold'>Skill Type: </span> {item.skillType}</p>
               </div>
                <p className="text-[#3A3A3C] text-xs font-semibold">{item.yearsOfExperience} years</p>
                </div>
                <div className="rounded-full bg-[#EBEBF0] w-full h-1 mt-2">
                <div className={`rounded-full h-1 w-[${Math.round((item.yearsOfExperience/ 30) * 100)}%] bg-[#114B53]`}></div>
                </div>
           </div>
        )
       })}
        

  </>
  )
}

export default OverallSkill
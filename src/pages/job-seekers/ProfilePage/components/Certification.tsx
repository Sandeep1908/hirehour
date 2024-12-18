import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { fetchUserDetails } from '../../../../utils/jobseekers/getUserDetails';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import axiosInstance from '../../../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';



type CertificationProps = {

    setAddCertificationPopup:(agr:boolean) => void
    setCertificationPopup:(agr:boolean) => void
  }

const Certification:React.FC<CertificationProps> = ({setAddCertificationPopup}) => {

    const { data: userDetails } = useQuery({
        queryKey: ['userDetails'],
        queryFn: fetchUserDetails,
      });

      const queryClient=useQueryClient()

      const certificateMutation = useMutation({
        mutationFn: async (certID: number) => {
          const response = await axiosInstance.post('/api/candidate/details/delete-license-cert', {
            certID: certID,
          });
          return response.data;
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['userDetails'] });
          toast.success('Certification Deleted Susseccfully!');
        },
        onError: (error) => {
          const axiosError = error as AxiosError<{ message: string }>;
          toast.error(axiosError?.response?.data?.message);
          
        },
      });
      const handleDeleteCertificate = (id: number) => {
        certificateMutation.mutate(id);
      };

  return (
  <div className="bg-white w-full p-5 rounded-lg mt-3">
              <div className=" flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Ceritification</h1>

                  <div
                    className="flex justify-end items-center space-x-2"
                    onClick={() => {
                      setAddCertificationPopup(true);
                    }}
                  >
                    <BiPlus size={14} color="#104B53" />
                    <p className="text-[#104B53] text-sm font-semibold">Add</p>
                  </div>
                </div>
                {userDetails?.candidatedetailslicensescerts.length > 0 ?
                  <div>
                    {userDetails?.candidatedetailslicensescerts?.map((item:any,i:number)=>{
                        return(<div className="border p-7 border-[#EBEBF0] rounded-lg" key={i}>
                             <div className="flex justify-end items-center space-x-4">
                                                <div className="flex items-center  " >
                                                  <FaEdit size={14} color="#104B53" />
                                                  <p className="text-[#104B53] text-xs">Edit</p>
                                                </div>
                            
                                                <div onClick={()=>{handleDeleteCertificate(item?.id)}}
                                                  className="flex items-center cursor-pointer "
                                                
                                                >
                                                  <MdDeleteOutline color="#104B53" size={14} />
                                                  <p className="text-[#104B53] text-xs">Delete</p>
                                                </div>
                                              </div>


                                              <div className="flex flex-col">
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-sm font-semibold">{item?.certName}</h1>
                      <p className='text-xs'>{item?.certType }</p>
                      <a href={item?.certLink} target='_blank' className='text-xs cursor-pointer'>{item?.certLink }</a>
                      {/* <p className="text-[#6B7588] text-xs">
                        Year Of Completion: {item?.yearOfCompletion} <br /> <br /> Expiration date: {item?.validity.split('T')[0]}
                      </p> */}
                      <div className="flex space-x-3 items-center">
                        <p className="text-[#7C8596] bg-[#F2F2F5] p-2 rounded-full font-semibold text-xs">
                        Year Of Completion: {item?.yearOfCompletion}
                        </p>
                        <p className="text-[#7C8596] bg-[#F2F2F5] p-2 rounded-full font-semibold text-xs">
                        Expiration date: {item?.validity.split('T')[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                        </div>)
                    })}
                  </div>
                  :
                  <div className="border p-7 border-[#EBEBF0] rounded-lg">
                  <div
                    className="w-full max-w-[765px] h-[80px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              "
                  >
                    <p className="text-xs">Added certificate will be shown here</p>
                  </div>
                </div>
                 }
                
              </div>
            </div>  )
}

export default Certification
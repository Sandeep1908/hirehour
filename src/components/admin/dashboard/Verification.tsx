import React, { useEffect, useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import {  FaCaretDown } from 'react-icons/fa'
import {  IoMdMore } from 'react-icons/io'

import ViewJob from './ViewJob'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAllUserDetails } from '../../../utils/admin/getAllUserDetails'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import axiosAdmin from '../../../axios/axiosadmin'



type verifyProps={
  
  users: Users[];
  
}

type recruiterdetail = {
  isVerifiedByUs: boolean;
};

interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string; 
  createdAt: string; 
  userProfileReference: string; 
  isUserVerified:boolean;
  recruiterdetail:recruiterdetail[];


}


const AwaitingVerification: React.FC<verifyProps> = ({users}) => {

 
  const [actionID, setActionID] = useState<number>(0);
  const [isVerifiedByUs, setIsVerifiedByUs] = useState<boolean>(false); 
  const [moreOption, setMoreOption] = useState<boolean>(false);
  const [selectPermId, setSelectPermId] = useState<number|null>();
  
  const [viewJobPopup, setViewJobPopup] = useState<boolean>(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; 
  };

  const handleMoreOption = (id:number) => {
    setMoreOption(!moreOption)
    setSelectPermId(id)

  };

 

const actionMutation = useMutation({
  mutationFn: async (action: {userId:number;updateData:{isVerifiedByUs:any}}) => {
    const response = await axiosAdmin.post("/api/admin/user-management/update-user-details", action);
    return response.data;
  },
  onSuccess: (success) => {
    const axiosError = success as AxiosError<{ message: string }>;
    toast.success(axiosError?.response?.data?.message);
    toast.success("Action updated successfully");

  },
  onError: (error) => {
    const axiosError = error as AxiosError<{ message: string }>;
    toast.error(axiosError?.response?.data?.message)
   
  },
});

const handleAction = (type: boolean,id:number) => {
  setIsVerifiedByUs(type);
  setActionID(id)
  const actionTaken = {
    userId: id, // Pass the user ID directly
    updateData: 
      {
        isVerifiedByUs: type, 
       
      },
    
  };
  actionMutation.mutate(actionTaken)

};





  
  return (
    <div className=''>
    
  <div className='w-full h-auto'>
      <div className='w-full h-auto'>

     

        <div className='w-full h-auto px-3 '>

          <div className='w-full  mt-2'>


            <table className=" w-full  table-auto">
              <thead className=''>
                <tr className='bg-[#F2F2F5] border-[1px] border-[#D6DBDE] mt-2  rounded-full'>
                  <th className=' px-4  py-2 w-[20%]'> <div className='flex items-center gap-4'> 
                     <p className='text-[12px]' >Full name</p> </div></th>

                  <th className='text-[12px] text-start w-[15%]'>Email Address</th>
                  <th className='text-[12px] text-start w-[10%]'> Date</th>
                  <th className='text-[12px] text-start' >Position</th>
                  <th className='text-[12px] text-start ' >Account Verified</th>
                  <th className='text-[12px] text-start' >Action</th>
                </tr>
              </thead>


              {users?.map((user:any,id:number)=>{
                if( user.userProfileReference === "recruiter" && user?.recruiterdetail?.isVerifiedByUs === false ){
                  return(
                    <tbody key={id}  className='mt-2'>
                    <tr   className='border-[1px] border-[#D6DBDE] mt-2 '>
                      <td className='px-4 align-top py-3'>
                         <div className='flex gap-4 '>
                        <div  className='text-[12px] cursor-pointer'  >
                          <p >{user.firstName || "N/A"}</p>
                          <p></p>
                         
                        </div>
                      </div> </td>
                      <td className='align-top py-3'>
                        <p className='text-[12px] cursor-pointer'>{user.email || "N/A"}</p>
                      </td>
                      <td className='align-top py-3'><p className='text-[12px] font-medium'><span className='font-normal'>{user.createdAt ? formatDate(user.createdAt) : "N/A"}</span></p>
                        </td>
    
                        <td onClick={()=>{setViewJobPopup(true)}} className='align-top py-3'>
                          <div>
                          <p className='text-[12px] font-semibold' >Java Full stack developer</p>
                          <div className='flex gap-2 text-[12px] '>
                            <p>Figma</p>
                            <p>Hybrid</p>
                            <p>Allen, Texas, US</p>
                          </div>
                          </div>
                        </td>
                        <td className='align-top py-3'>
                          <div>
                          <p className='text-[12px] font-semibold' >Yes</p>
                          
                          </div>
                        </td>
    
                      <td className='py-3'>
                       <div className='flex flex-col gap-2'>
                       <div className='relative flex gap-2'>
                          <div className='flex gap-2'>
                           

                            <div onClick={() => { handleAction(true,user.id) }} className={`${isVerifiedByUs===true && actionID===user.id ? "border-[#06A560] bg-green-100 text-[#06A560]" : "border-[#D6DBDE] hover:bg-green-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineLike size={20} />
    
                            </div>
                            <div onClick={() => { handleAction(false,user.id) }} className={`${isVerifiedByUs===false && actionID===user.id ? "border-yellow-500 bg-yellow-100 text-yellow-500" : "border-[#D6DBDE] hover:bg-yellow-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineLike  size={20} className='rotate-90 ' />
    
                            </div>
                            <div onClick={() => { handleAction(false,user.id) }} className={`${isVerifiedByUs===false && actionID===user.id ? "border-red-500 bg-red-100 text-red-500" : "border-[#D6DBDE] hover:bg-red-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineDislike  size={20} />
    
                            </div>
                          </div>
                          <div className='flex gap-10 items-center'>
                           
                           
    
                            <div className='relative' onClick={()=>{handleMoreOption(user.id)}}>
                              <IoMdMore size={25} />
                              <div className={`absolute w-36 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[20px] top-5 transition-all duration-500 bg-white ${selectPermId===user.id&&moreOption ?  "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
                                  <div className='px-3 py-2'>
                                    <p className='text-sm font-semibold'>Undo</p>
                                  </div>
                                  <hr />
                                  <div className='px-3 py-2'>
                                    <p className='text-sm font-semibold'> Delete</p>
                                  </div>
                            </div>
                            </div>
    
                          </div>
    
                        </div>
                        <p className='text-[12px] font-medium' >Action done by : <span className='font-normal'>Arla</span></p>
    
                       </div>
                      </td>
                    </tr>
                    
    
    
    
                  </tbody>
                  )
                }
              })}

             
            </table>
          
          </div>
        </div>

      </div>
    
    </div>


  
       
         {viewJobPopup &&  <ViewJob setViewJobPopup ={setViewJobPopup}/>}
 
    </div>
  )
}
const VerifiedAccount: React.FC<verifyProps> = ({users}) => {

  const [actionID, setActionID] = useState<number>(0);
  const [isVerifiedByUs, setIsVerifiedByUs] = useState<string>(""); 
  const [moreOption, setMoreOption] = useState<boolean>(false);
  const [selectPermId, setSelectPermId] = useState<number|null>();
  
  const [viewJobPopup, setViewJobPopup] = useState<boolean>(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; 
  };

  const handleMoreOption = (id:number) => {
    setMoreOption(!moreOption)
    setSelectPermId(id)

  };

 

const actionMutation = useMutation({
  mutationFn: async (action: {userId:number;updateData:{isVerifiedByUs:any}}) => {
    const response = await axiosAdmin.post("/api/admin/user-management/update-user-details", action);
    return response.data;
  },
  onSuccess: (success) => {
    const axiosError = success as AxiosError<{ message: string }>;
    toast.success(axiosError?.response?.data?.message);
    toast.success("Action updated successfully");

  },
  onError: (error) => {
    const axiosError = error as AxiosError<{ message: string }>;
    toast.error(axiosError?.response?.data?.message)
   
  },
});

const handleAction = (type: string,id:number) => {
  setIsVerifiedByUs(type);
  setActionID(id)
  const actionTaken = {
    userId: id, 
    updateData: 
      {
        isVerifiedByUs: type, 
       
      },
    
  };
  actionMutation.mutate(actionTaken)

};

  return (
    <div className=''>
    
    <div className='w-full h-auto'>
        <div className='w-full h-auto'>
  
       
  
          <div className='w-full h-auto px-3 '>
  
            <div className='w-full  mt-2'>
  
  
              <table className=" w-full  table-auto">
                <thead className=''>
                  <tr className='bg-[#F2F2F5] border-[1px] border-[#D6DBDE] mt-2  rounded-full'>
                    <th className=' px-4  py-2 w-[20%]'> <div className='flex items-center gap-4'> 
                       <p className='text-[12px]' >Full name</p> </div></th>
  
                    <th className='text-[12px] text-start w-[15%]'>Email Address</th>
                    <th className='text-[12px] text-start'> Date</th>
                    <th className='text-[12px] text-start' >Position</th>
                    <th className='text-[12px] text-start' >Account Verified</th>
                    <th className='text-[12px] text-start' >Action</th>
                  </tr>
                </thead>
  
                {users?.map((user:any,id:number)=>{
                if( user.userProfileReference === "recruiter" && user?.recruiterdetail?.isVerifiedByUs === true ){
                  return(
                    <tbody key={id}  className='mt-2'>
                    <tr   className='border-[1px] border-[#D6DBDE] mt-2 '>
                      <td className='px-4 align-top py-3'>
                         <div className='flex gap-4 '>
                        <div  className='text-[12px] cursor-pointer'  >
                          <p >{user.firstName || "N/A"}</p>
                          <p></p>
                         
                        </div>
                      </div> </td>
                      <td className='align-top py-3'>
                        <p className='text-[12px] cursor-pointer'>{user.email || "N/A"}</p>
                      </td>
                      <td className='align-top py-3'><p className='text-[12px] font-medium'><span className='font-normal'>{user.createdAt ? formatDate(user.createdAt) : "N/A"}</span></p>
                        </td>
    
                        <td onClick={()=>{setViewJobPopup(true)}} className='align-top py-3'>
                          <div>
                          <p className='text-[12px] font-semibold' >Java Full stack developer</p>
                          <div className='flex gap-2 text-[12px] '>
                            <p>Figma</p>
                            <p>Hybrid</p>
                            <p>Allen, Texas, US</p>
                          </div>
                          </div>
                        </td>
                        <td className='align-top py-3'>
                          <div>
                          <p className='text-[12px] font-semibold' >Yes</p>
                          
                          </div>
                        </td>
    
                      <td className='py-3'>
                       <div className='flex flex-col gap-2'>
                       <div className='relative flex gap-2'>
                          <div className='flex gap-2'>
                           

                            <div onClick={() => { handleAction("true",user.id) }} className={`${isVerifiedByUs==="true" && actionID===user.id ? "border-[#06A560] bg-green-100 text-[#06A560]" : "border-[#D6DBDE] hover:bg-green-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineLike size={20} />
    
                            </div>
                            <div onClick={() => { handleAction("false",user.id) }} className={`${isVerifiedByUs==="false" && actionID===user.id ? "border-yellow-500 bg-yellow-100 text-yellow-500" : "border-[#D6DBDE] hover:bg-yellow-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineLike  size={20} className='rotate-90 ' />
    
                            </div>
                            <div onClick={() => { handleAction("false",user.id) }} className={`${isVerifiedByUs==="false" && actionID===user.id ? "border-red-500 bg-red-100 text-red-500" : "border-[#D6DBDE] hover:bg-red-100"}  rounded-full border-[1px]  w-[40px] h-[40px] flex justify-center items-center`}>
                              <AiOutlineDislike  size={20} />
    
                            </div>
                          </div>
                          <div className='flex gap-10 items-center'>
                           
                           
    
                            <div className='relative' onClick={()=>{handleMoreOption(user.id)}}>
                              <IoMdMore size={25} />
                              <div className={`absolute w-36 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[20px] top-5 transition-all duration-500 bg-white ${selectPermId===user.id&&moreOption ?  "opacity-1 scale-[1.01] z-[40]" : "opacity-0 z-[-10]"}`}>
                                  <div className='px-3 py-2'>
                                    <p className='text-sm font-semibold'>Undo</p>
                                  </div>
                                  <hr />
                                  <div className='px-3 py-2'>
                                    <p className='text-sm font-semibold'> Delete</p>
                                  </div>
                            </div>
                            </div>
    
                          </div>
    
                        </div>
                        <p className='text-[12px] font-medium' >Action done by : <span className='font-normal'>Arla</span></p>
    
                       </div>
                      </td>
                    </tr>
                    
    
    
    
                  </tbody>
                  )
                }
              })}
             
  
               
              </table>
            
            </div>
          </div>
  
        </div>
      
      </div>
  
  
    
         
           {viewJobPopup &&  <ViewJob setViewJobPopup ={setViewJobPopup}/>}
   
      </div>
  )
}

const Verification: React.FC = () => {



  const { data: allUserDetail } = useQuery({ queryKey: ['allUserDetail'], queryFn: fetchAllUserDetails });
 

  const [usersDetail, setUsersDetail] = useState<Users[]>([]); 
  useEffect(() => {
    if(allUserDetail){
      
      setUsersDetail(allUserDetail.users);
    }

  }, [allUserDetail]);


  const jobFilters = [
    {
      label: 'Awaiting Verification',
      component: <AwaitingVerification users={usersDetail} />,
    },
    {
      label: 'Verified Account',
      component: <VerifiedAccount users={usersDetail}/>,
    },
  ];

  const [jobFilterIdx, setJobFilterIdx] = useState<number>(0);
  const [selectedOptionVisa, setSelectedOptionVisa] = useState<string>("");
  const [selectedOptionDate, setSelectedOptionDate] = useState<string>("");
  const [selectedOptionAllJob, setSelectedOptionAllJob] = useState<string>("");

  const [isSelected, setIsSelected] = useState(0);
  const [dropdown, setDropdown] = useState<number>(0);



  const handleOptionAllJob = (value: string) => {
    setSelectedOptionAllJob(value);
    setDropdown(0);
    setIsSelected(3);
  };
  const handleOptionVisa = (value: string) => {
    setSelectedOptionVisa(value);
    setDropdown(0);
    setIsSelected(3);
  };
  const handleOptionDate = (value: string) => {
    setSelectedOptionDate(value);
    setDropdown(0);
    setIsSelected(3);
  };

  const handleResetDate = () => {
    setSelectedOptionDate("");
    setDropdown(0);

  };
  const handleResetVisa = () => {
    setSelectedOptionVisa("");
    setDropdown(0);

  };



  return (


    <div className='w-full  bg-white rounded-lg'>


      <div className='  w-full h-auto'>
        <div className="flex flex-col md:flex-row justify-between md:items-center p-3">
          <h1 className="text-sm font-semibold">Verification </h1>
          <hr className='mb-2' />
         
         
        </div>
        <hr />
        <div className="p-2 mt-1  flex justify-between">
          <ul className="max-w-[350px]  w-full rounded-full px-1 flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
            {jobFilters?.map((item, i) => {
              return (
                <li key={i}
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


        <div>
       


        <div className='hidden   md:flex gap-2 mt-3 px-4  overflow-auto'>

          <div className='relative z-[20] '>
            <div onClick={() => setDropdown(1)} className={`w-fi cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
                ${isSelected === 1 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}>
              <p className="w-fit text-[12px] font-semibold text-[#114B53]"> {selectedOptionAllJob ? selectedOptionAllJob : "Full name"} </p>
              <FaCaretDown onClick={() => setDropdown(1)} className={`${dropdown === 1 ? 'rotate-180 transition-all duration-500' : ''}`} />
            </div>

            {dropdown === 1 && (
              <div className='absolute top-12 left-0 w-[120px]'>
                <div className='w-full  bg-[#FFFFFF] rounded-lg shadow-lg' >
                  {["All", " Active", "Paused", "Closed", "Co - Hiring"]?.map(option => (
                    <div key={option} className='w-full px-4 py-2 flex gap-2' onClick={() => handleOptionAllJob(option)}>
                      <input
                        type="radio"
                        name="value1"
                        checked={selectedOptionAllJob === option}
                      //   onChange={() => handleOptionClick(option)}
                      />
                      <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className='relative z-[20]'>
            <div
              onClick={() => setDropdown(2)}
              className={`cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
                                 ${selectedOptionDate.length > 0 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
            >
              <p className="text-[12px] font-semibold text-[#114B53]"> {selectedOptionDate ? selectedOptionDate : "Company"}</p>
              <FaCaretDown className={`${dropdown === 2 ? 'rotate-180 transition-all duration-500' : ''}`} />
            </div>

            {dropdown === 2 && (
              <div className='absolute top-12 left-0 w-[150px]'>
                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                  {[
                    "Today", "Yesterday", "Last 3 days", "Last week", "Last 2 week"
                  ]?.map((option) => (
                    <div key={option} onClick={() => handleOptionDate(option)} className='w-full px-4 py-2 flex gap-2'>
                      <input
                        type="radio"
                        name="distance"
                        checked={selectedOptionDate === option}
                      //   onChange={() => handleOptionDistance(distance)}
                      />
                      <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                    </div>
                  ))}
                  <div className='w-full px-6 py-2 flex justify-end'>
                    <button onClick={handleResetDate} className='text-[12px] text-[#114B53] font-semibold cursor-pointer'>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>


          <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
            <p className="text-[12px] font-semibold text-[#114B53]"> Date</p>
            <FaCaretDown className='text-[#114B53]' />

          </div>
          <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
            <p className="text-[12px] font-semibold text-[#114B53]">Status</p>
            <FaCaretDown className='text-[#114B53]' />

          </div>


          <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
            <p className="text-[12px] font-semibold text-[#114B53]">Verification</p>
            <FaCaretDown className='text-[#114B53]' />

          </div>


          <div className='relative z-[20]'>
            <div
              onClick={() => setDropdown(5)}
              className={`cursor-pointer flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
                                 ${selectedOptionVisa.length > 0 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
            >
              <p className="text-[12px] font-semibold text-[#114B53]">Action done by :  {selectedOptionVisa ? selectedOptionVisa : "Any"}</p>
              <FaCaretDown className={`${dropdown === 5 ? 'rotate-180 transition-all duration-500' : ''}`} />
            </div>

            {dropdown === 5 && (
              <div className='absolute top-12 left-0 w-[150px]'>
                <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                  {[
                    "Required", "Not required",
                  ]?.map((option) => (
                    <div key={option} onClick={() => handleOptionVisa(option)} className='w-full px-4 py-2 flex gap-2'>
                      <input
                        type="radio"
                        name="distance"
                        checked={selectedOptionVisa === option}
                      //   onChange={() => handleOptionDistance(distance)}
                      />
                      <label className='text-[#333333] text-[10px] font-medium'>{option}</label>
                    </div>
                  ))}
                  <div className='w-full px-6 py-2 flex justify-end'>
                    <button onClick={handleResetVisa} className='text-[12px] text-[#114B53] font-semibold cursor-pointer'>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>


        </div>
      
        </div>

        {/* all Applicants  */}


          <div className={`w-full mt-1 overflow-auto h-[67vh]  `}>
          {jobFilters?.map((item, i) => {
            if (jobFilterIdx === i) {
              return <div key={i}>{item.component}</div>;
            }
          })}
          </div>

      </div>

      
    </div>

  )
}

export default Verification

import React, { useEffect, useState } from 'react'
import {  FaCaretDown } from 'react-icons/fa'
import {  IoMdMore } from 'react-icons/io'

import ViewJob from './ViewJob'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAllUserDetails } from '../../../utils/admin/getAllUserDetails'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import ViewProfilePopup from './ViewProfilePopup'
import axiosAdmin from '../../../axios/axiosadmin'



type userProps={
  
  users: Users[];
  
}

type recruiterdetail = {
  isVerifiedByUs: boolean;
  permTagName: string; 

};

interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string; 
  createdAt: string; 
  updatedAt: string; 
  userProfileReference: string; 
 
  isUserVerified:boolean;
  recruiterdetail:recruiterdetail[];
  userpermlabelsacrossapplications:recruiterdetail[];
}


const Candidate: React.FC<userProps> = ({users}) => {

 
  const [viewJobPopup, setViewJobPopup] = useState<boolean>(false);


  
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

                  <th className='text-[12px] text-start w-[18%]'>Email Address</th>
                  <th className='text-[12px] text-start w-[17%]'> Role</th>
                  <th className='text-[12px] text-start' >Company</th>
                  <th className='text-[12px] text-start ' >Last Activity</th>
                
                </tr>
              </thead>


              {users?.map((user,id)=>{
                if( user.userProfileReference === "candidate"  ){
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
                      <td className='align-top py-3'>
                        <p className='text-[12px] font-medium'><span className='font-normal'>Java Developer</span></p>
                        </td>
    
                        <td onClick={()=>{setViewJobPopup(true)}} className='align-top py-3'>
                        
                          <p className='text-[12px] font-semibold' >TCS <br />
                          From : 04/10/2024</p>
                         
                        </td>
                        <td className='align-top py-3'>
                         <p className='text-[12px] font-semibold'>
                          {user?.updatedAt.split("T")[0]}
                         
                         </p>                         </td>
    
                     
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

const LookingforCandidate: React.FC<userProps> = ({users}) => {

  const [viewPrfilePopup, setViewPrfilePopup] = useState<boolean>(false);
  const [infoPopupId, setInfoPopupId] = useState<number| undefined>();
  const [moreOption, setMoreOption] = useState<boolean>(false);
  const [selectPermId, setSelectPermId] = useState<number|null>();


  const [userId, setUserId] = useState<number | null >();
  const [roleID, setRoleID] = useState<number | null | undefined>();
  const [permissions, setPermissions] = useState<number | null | undefined>();

  const mutation = useMutation({
    mutationFn: async (userPermission: {userId:number;rolePermissionsToAdd:{roleID:number;permissions:any}[]}) => {
      console.log("userPermission",userPermission)
      const response = await axiosAdmin.post("/api/admin/user-management/update-user-permissions", userPermission);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Upgrade to Owner");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message)
     
    },
  });
  const mutationDownToHire = useMutation({
    mutationFn: async (userPermission: {userId:number;rolePermissionsToRemove:{roleID:number;permissions:any}[]}) => {
      console.log("userPermission",userPermission)
      const response = await axiosAdmin.post("/api/admin/user-management/update-user-permissions", userPermission);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Downgrade to Hiring Partner");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message)
     
    },
  });

 
    const handleMoreOption = (id:number) => {
      setMoreOption(!moreOption)
      setSelectPermId(id)
  
    };

    const handleUpgradeToOwner = (id:number) => {
      setUserId(id)
      setRoleID(5)
      setPermissions(5)
      const userPermission = {
        userId: id, 
        rolePermissionsToAdd: [
          {
            roleID: 5, 
            permissions: [5],
          },
        ],
      };
      console.log("userId",userId)
      console.log("roleID",roleID)
      console.log("permissions",permissions)
      mutation.mutate( userPermission );
    };

    const handleDownToHire = (id:number) => {
      setUserId(id)
      setRoleID(5)
      setPermissions(5)
      const userPermission = {
        userId: id,
        rolePermissionsToRemove: [
          {
            roleID: 5, 
            permissions: [5],
          },
        ],
      };
      console.log("userId",userId)
      console.log("roleID",roleID)
      console.log("permissions",permissions)
      mutationDownToHire.mutate( userPermission );
    };

    const handleInfoPopup = (id:number) => {
      setViewPrfilePopup(true)
      setInfoPopupId(id)
    }
 
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

                  <th className='text-[12px] text-start w-[18%]'>Email Address</th>
                  <th className='text-[12px] text-start w-[17%]'> Company</th>
                  <th className='text-[12px] text-start w-[15%]' >Role</th>
                  <th className='text-[12px] text-start w-[15%]' >Verified</th>
                  <th className='text-[12px] text-start' >Last Activity</th>
                  <th className='text-[12px] text-start' ></th>
                </tr>
              </thead>


    {users
  .filter((user) => {
    // Check if the user has 'advanced_recruiter_perms' in their permissions
    
    return (
    
      user.userProfileReference === "recruiter" &&
      user.userpermlabelsacrossapplications?.some(
        (item) => item.permTagName === "advanced_recruiter_perms"
      )
    );
  })?.map((user:any, id:number) => (
    
    <tbody key={id} className="mt-2">
      <tr className="border-[1px] border-[#D6DBDE] mt-2">
        <td onClick={() => handleInfoPopup(user.id)} className="px-4 align-top py-3">
          <div className="flex gap-4">
            <div className="text-[12px] cursor-pointer">
              <p>{user.firstName || "N/A"}</p>
            </div>
          </div>
        </td>
        <td className="align-top py-3">
          <p className="text-[12px] cursor-pointer">{user.email || "N/A"}</p>
        </td>
        <td className="align-top py-3">
          <p className="text-[12px] font-medium">
            <span className="font-normal">{user.recruiterdetail?.companyWorkingFor || "N/A"}</span>
          </p>
        </td>
        <td  className="align-top py-3">
          <p className="text-[12px] font-semibold">
          {user.userpermlabelsacrossapplications?.some(
              (user:any) => user.permTagName === "advanced_owner_recruiter_perms"
            )
              ? "Owner"
              : "Hiring Partner"}
          </p>
        </td>
        <td className="align-top py-3">
          <p className="text-[12px] font-semibold">
            {user.isUserVerified === true ? "Yes" : "No"}
          </p>
        </td>
        <td className="align-top py-3 flex gap-5">
          <p className="text-[12px] font-semibold">{user?.updatedAt.split("T")[0]}</p>
        </td>
        <td className="relative py-3">
          <IoMdMore onClick={() => handleMoreOption(user.id)} />
          <div
            className={`absolute w-60 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[40px] top-[10px] transition-all duration-500 bg-white ${
              selectPermId === user.id && moreOption
                ? "opacity-1 scale-[1.01] z-[40]"
                : "opacity-0 z-[-10]"
            }`}
          >
            <div onClick={() => handleUpgradeToOwner(user.id)} className="px-3 py-2">
              <p className="text-xs font-semibold">Upgrade to Owner</p>
            </div>
            <hr />
            <div className="px-3 py-2" onClick={() => handleDownToHire(user.id)}  >
              <p className="text-xs font-semibold">Downgrade to Hiring Partner</p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  ))}

         

             
            </table>


          
          </div>
        </div>

      </div>
    
    </div>


  
         
         {viewPrfilePopup &&  <ViewProfilePopup setViewPrfilePopup ={setViewPrfilePopup} users={users} infoPopupId={infoPopupId}/>}
 
    </div>
  )
}

const RepresentingCandidate: React.FC<userProps> = ({users})=> {
 
  const [infoPopupId, setInfoPopupId] = useState<number| undefined>();
  const [viewPrfilePopup, setViewPrfilePopup] = useState<boolean>(false);
  const [moreOption, setMoreOption] = useState<boolean>(false);
  const [selectPermId, setSelectPermId] = useState<number|null>();


  const [userId, setUserId] = useState<number | null >();
  const [roleID, setRoleID] = useState<number | null | undefined>();
  const [permissions, setPermissions] = useState<number | null | undefined>();

  const mutation = useMutation({
    mutationFn: async (userPermission: {userId:number;rolePermissionsToAdd:{roleID:number;permissions:any}[]}) => {
      console.log("userPermission",userPermission)
      const response = await axiosAdmin.post("/api/admin/user-management/update-user-permissions", userPermission);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Upgrade to Owner");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message)
     
    },
  });

  const mutationDownToHire = useMutation({
    mutationFn: async (userPermission: {userId:number;rolePermissionsToRemove:{roleID:number;permissions:any}[]}) => {
      console.log("userPermission",userPermission)
      const response = await axiosAdmin.post("/api/admin/user-management/update-user-permissions", userPermission);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Downgrade to Hiring Partner");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(axiosError?.response?.data?.message)
     
    },
  });

    const handleMoreOption = (id:number) => {
      setMoreOption(!moreOption)
      setSelectPermId(id)
  
    };

    const handleUpgradeToOwner = async(id:number) => {
      setUserId(id)
      setRoleID(5)
      setPermissions(5)
      const userPermission = {
        userId: id, 
        rolePermissionsToAdd: [
          {
            roleID: 5, 
            permissions: [5], 
          },
        ],
      };
      console.log("userId",userId)
      console.log("roleID",roleID)
      console.log("permissions",permissions)
      mutation.mutate( userPermission );
    };

    const handleDownToHire = (id:number) => {
      setUserId(id)
      setRoleID(5)
      setPermissions(5)
      const userPermission = {
        userId: id,
        rolePermissionsToRemove: [
          {
            roleID: 5, 
            permissions: [5], 
          },
        ],
      };
      console.log("userId",userId)
      console.log("roleID",roleID)
      console.log("permissions",permissions)
      mutationDownToHire.mutate( userPermission );
    };


    const handleInfoPopup = (id:number) => {
      setViewPrfilePopup(true)
      setInfoPopupId(id)
    }
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
  
                    <th className='text-[12px] text-start w-[18%]'>Email Address</th>
                    <th className='text-[12px] text-start w-[17%]'> Company</th>
                    <th className='text-[12px] text-start w-[15%]' >Role</th>
                    <th className='text-[12px] text-start w-[15%]' >Verified</th>
                    <th className='text-[12px] text-start' >Last Activity</th>
                    <th className='text-[12px] text-start' ></th>
                  </tr>
                </thead>
  
                {users
  .filter((user) => {
    // Check if the user does NOT have 'advanced_recruiter_perms' in their permissions
    return (
      user.userProfileReference === "recruiter" &&
      !user.userpermlabelsacrossapplications?.some(
        (item) => item.permTagName === "advanced_recruiter_perms"
      )
    );
  })?.map((user:any, id:number) => (
    <tbody key={id} className="mt-2">
      <tr className="border-[1px] border-[#D6DBDE] mt-2">
        <td onClick={() => handleInfoPopup(user.id)}  className="px-4 align-top py-3">
          <div className="flex gap-4">
            <div className="text-[12px] cursor-pointer">
              <p>{user.firstName || "N/A"}</p>
            </div>
          </div>
        </td>
        <td className="align-top py-3">
          <p className="text-[12px] cursor-pointer">{user.email || "N/A"}</p>
        </td>
        <td className="align-top py-3">
          <p className="text-[12px] font-medium">
            <span className="font-normal">{user.recruiterdetail?.companyWorkingFor || "N/A"}</span>
          </p>
        </td>
        <td className="align-top py-3">
          <p className="text-[12px] font-semibold"> {user.userpermlabelsacrossapplications?.some(
              (user:any) => user.permTagName === "advanced_owner_recruiter_perms"
            )
              ? "Owner"
              : "Hiring Partner"} </p>
        </td>
        <td className="align-top py-3">
          <p className="text-[12px] font-semibold">
            {user.isUserVerified === true ? "Yes" : "No"}
          </p>
        </td>
        <td className="align-top py-3 flex gap-5">
          <p className="text-[12px] font-semibold">{user?.updatedAt.split("T")[0]}</p>
        </td>
        <td className="relative py-3">
          <IoMdMore onClick={() => handleMoreOption(user.id)} />
          <div
            className={`absolute w-60 h-auto border-[1px] border-[#C7C9D9] rounded-lg right-[40px] top-[10px] transition-all duration-500 bg-white ${
              selectPermId === user.id && moreOption
                ? "opacity-1 scale-[1.01] z-[40]"
                : "opacity-0 z-[-10]"
            }`}
          >
            <div onClick={() => handleUpgradeToOwner(user.id)} className="px-3 py-2">
              <p className="text-xs font-semibold">Upgrade to Owner</p>
            </div>
            <hr />
            <div onClick={() => handleDownToHire(user.id)} className="px-3 py-2">
              <p className="text-xs font-semibold">Downgrade to Hiring Partner</p>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  ))}

           
  
               
              </table>
  
  
            
            </div>
          </div>
  
        </div>
      
      </div>
  
  
    
         
           {viewPrfilePopup &&  <ViewProfilePopup setViewPrfilePopup ={setViewPrfilePopup} users={users} infoPopupId={infoPopupId}/>}
   
      </div>
  )
}

const Users: React.FC = () => {



  const { data: allUserDetail } = useQuery({ queryKey: ['allUserDetail'], queryFn: fetchAllUserDetails });
 

  const [usersDetail, setUsersDetail] = useState<Users[]>([]); 
  useEffect(() => {
    if(allUserDetail){
      
      setUsersDetail(allUserDetail.users);
      console.log("object",usersDetail)
    }

  }, [allUserDetail]);


  const jobFilters = [
    {
      label: 'Candidate',
      component: <Candidate users={usersDetail} />,
    },
    {
      label: 'Looking for Candidate ',
      component: <LookingforCandidate users={usersDetail} />,
    },
    {
      label: 'Representing Candidate ',
      component: <RepresentingCandidate users={usersDetail} />,
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
          <h1 className="text-sm font-semibold">Users </h1>
          <hr className='mb-2' />
         
         
        </div>
        <hr />
        <div className="p-2 mt-1  flex justify-between">
          <ul className="max-w-[450px]  w-full rounded-full px-1 flex text-xs justify-around items-center space-x-6 bg-[#F2F2F5]">
            {jobFilters?.map((item, i) => {
              return (
                <li key={i}
                  className={`text-[10px] rounded-full   w-full p-1   cursor-pointer  flex justify-center items-center space-x-4 transition-all duration-300 ${jobFilterIdx === i ? 'bg-[#104B53] text-white' : ''}`}
                  onClick={() => setJobFilterIdx(i)}
                >
                  <span>{item.label}</span>{' '}
                 
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
                  {["All", " Active", "Paused", "Closed", "Co - Hiring"].map(option => (
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

export default Users

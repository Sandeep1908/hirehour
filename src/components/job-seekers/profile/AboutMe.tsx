import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, {  useState } from 'react';
import { FaBehanceSquare, FaCheck } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiChrome } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
import { fetchSocialDetail, fetchUserDetails } from '../../../utils/jobseekers/getUserDetails';
import axiosInstance from '../../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

type AboutMeProps = {
  setAboutPop: (arg: boolean) => void;
};

type ProfileDetails = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  needVisaSponsorship: string;
};

type WorkDetails ={
  WorkPlatformName: string | null |undefined;
  WorkLink: string | null |undefined;
}
 

const AboutMe: React.FC<AboutMeProps> = ({ setAboutPop }) => {
  const { data: userDetails } = useQuery({ queryKey: ['userDetails'], queryFn: fetchUserDetails });
  
  const { data: socialDetails } = useQuery({ queryKey: ['socialDetail'], queryFn: fetchSocialDetail });

  const queryClient = useQueryClient();

  const [profileDetails, setProfileDetails] = useState<ProfileDetails>({
    firstName: userDetails?.user?.firstName,
    lastName: userDetails?.user?.lastName,
    phoneNumber: userDetails?.user?.phoneNumber,
    needVisaSponsorship: userDetails?.needVisaSponsorship,
  });

 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
   
    const { name, value } = e.target;
    setProfileDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  // Mutation for submitting form data
  const editProfileMutation = useMutation({
    mutationFn: async (formData: ProfileDetails) => {
      const response = await axiosInstance.post(
        '/api/candidate/details/update-main-details',
        formData,
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success('Information Saved');
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
    },
    onError: (error) => {
      const axiosError=error as AxiosError<{message:string}>
      toast.error(axiosError?.response?.data?.message);
    },
  });


   //for Socail Links

 
      // const gitHub = socialDetails?.[1]?.WorkLink
      const gitHub = socialDetails?.find(
        (item: { WorkPlatformName: string; WorkLink: string }) =>
          item.WorkPlatformName === 'GitHub'
      )?.WorkLink;
    
    const [WorkPlatformName, setWorkPlatformName] = useState<string | null |undefined>()
    const [WorkLink, setWorkLink] = useState<string | null>()

    // const  = socialDetails?.[5]?.WorkLink
    const linkedIn = socialDetails?.find(
      (item: { WorkPlatformName: string; WorkLink: string }) =>
        item.WorkPlatformName === 'LinkedIn'
    )?.WorkLink;
    const [linkedInName, setLinkedInName] = useState<string | null |undefined>()
    const [linkedInLink, setLinkedInLink] = useState<string | null>()

    // const behance = socialDetails?.[6]?.WorkLink
    const behance = socialDetails?.find(
      (item: { WorkPlatformName: string; WorkLink: string }) =>
        item.WorkPlatformName === 'Behance'
    )?.WorkLink;
    const [behanceName, setBehanceName] = useState<string | null |undefined>()
    const [behancenLink, setBehanceLink] = useState<string | null>()

    
    // Mutation for work details
    const workDetailsMutation = useMutation({
      mutationFn: async (workData: WorkDetails) => {
        console.log("workData",workData)
        const response = await axiosInstance.post(
          '/api/candidate/details/work',
          workData
        );
        return response.data;
      },
      onSuccess: () => {
        toast.success('Work details saved');
      },
      onError: (error) => {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error(axiosError?.response?.data?.message);
      },
    });
  

  const handleProfileEdit = () => {
    editProfileMutation.mutate(profileDetails);
    console.log("socialDetails",socialDetails)
    setAboutPop(false);
  };
  
  const handleSocialLinkEdit = () => {

  // Check if the platform already exists
  const isPlatformPresent = socialDetails.some(
    (links:any) => links.WorkPlatformName === WorkPlatformName
  );

  if (isPlatformPresent) {
    toast.error("This Link Is Already Available");
    return; // Skip mutation
  }

  const socialDetaill = {WorkPlatformName, WorkLink}
  workDetailsMutation.mutate(socialDetaill);
    
  };

  const handleLinkedInLinkEdit = () => {
    setWorkPlatformName(linkedInName)
    setWorkLink(linkedInLink)
      // Check if the platform already exists
  const isPlatformPresent = socialDetails.some(
    (links:any) => links.WorkPlatformName === WorkPlatformName
  );

  if (isPlatformPresent) {
    toast.error("This Link Is Already Available");
    return; // Skip mutation
  }
    const socialDetaill = {WorkPlatformName, WorkLink}
    workDetailsMutation.mutate(socialDetaill);
    
  };
  const handleBehanceLinkEdit = () => {
    setWorkPlatformName(behanceName)
    setWorkLink(behancenLink)
      // Check if the platform already exists
  const isPlatformPresent = socialDetails.some(
    (links:any) => links.WorkPlatformName === WorkPlatformName
  );

  if (isPlatformPresent) {
    toast.error("This Link Is Already Available");
    return; // Skip mutation
  }
    const socialDetaill = {WorkPlatformName, WorkLink}
    workDetailsMutation.mutate(socialDetaill);
    
  };



  //upload avatar mutation
  const uploadAvatar = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axiosInstance.post(
        `/api/candidate/details/profile-picture`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
      toast.success('Profile Picture uploaded successfully!');
    },
    onError: (error) => {
      const axiosError=error as AxiosError<{message:string}>
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.warning('File size must be less than 2MB');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    uploadAvatar.mutate(formData);
  };


  // Delete Social links


  const deleteSocialLinkMutation = useMutation({
    mutationFn: async (workID: number) => {
      const response = await axiosInstance.post('/api/candidate/details/delete-work', {
        workID: workID,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
      toast.success('Social Link Deleted Susseccfully!');
    },
    onError: () => {
      toast.error('Failed to delete Social Link. Please try again.');
    },
  });
  const handleDeleteSocialLink = (linkName: string) => {

    const id = socialDetails?.find(
      (item: { WorkPlatformName: string; WorkLink: string }) =>
        item.WorkPlatformName === linkName
    )?.id;

    deleteSocialLinkMutation.mutate(id);
  };


  return (
    <div className="w-full h-full flex p-3   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] ">
      <div className="w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black "></div>

      <div className="max-w-[700px] h-full w-full bg-white rounded-lg overflow-y-auto z-[30] p-4">
        <div className="  flex justify-between items-center">
          <div className="text-base md:text-xl font-bold">
            <p>About me</p>
          </div>
          <IoMdClose
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setAboutPop(false);
            }}
          />
        </div>
        <hr className="mt-3" />
        <div className=" py-3 flex flex-col gap-5">
          <div>
            <p className="text-[14px] md:text-base font-semibold">Profile picture</p>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-3 ">
              <div className="w-[100px] h-[100px] rounded-full bg-[#CBFFFC] flex justify-center items-center ">
                {/* <p className="text-[40px] font-extrabold">J</p> */}
                <img className='rounded-full' src={userDetails?.profilePictureLink} alt="" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="border-[1px] border-[#114B53] rounded-full px-5 py-2 h-[42px] ">
                  <label
                    className={`flex justify-center items-center px-5  p-0.5 rounded-full cursor-pointer    `}
                  >
                    <span className={`text-sm text-[#104B53]  font-[500] pl-2`}>Upload Here</span>
                    <input type="file" className="hidden" onChange={handleAvatarChange} />
                  </label>
                </div>
                <div className="border-[1px] border-[#114B53] rounded-full px-5 h-[42px] flex justify-center items-center">
                  <p className="text-[#114B53] text-sm font-[500]">Delete profile</p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex gap-4 mt-3 flex-col md:flex-row">
                <div className="w-full ">
                  <p className="text-sm font-medium">
                    First name <span className="text-red-600">*</span>
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    value={profileDetails.firstName}
                    onChange={handleInputChange}
                    className="w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  px-4 text-sm "
                  />
                </div>
                <div className="w-full ">
                  <p className="text-sm font-medium">
                    Last name <span className="text-red-600">*</span>
                  </p>
                  <input
                    type="text"
                    name="lastName"
                    value={profileDetails.lastName}
                    onChange={handleInputChange}
                    className="w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 text-sm "
                  />
                </div>
              </div>
              <div className="w-full flex gap-4 mt-5 flex-col md:flex-row">
                <div className="w-full ">
                  <p className="text-sm font-medium">
                    Phone number <span className="text-red-600">*</span>
                  </p>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={profileDetails.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4  text-sm"
                  />
                </div>
                <div className="w-full ">
                  <p className="text-sm font-medium">
                    Email <span className="text-red-600">*</span>
                  </p>
                  <input
                    type="email"
                    value={userDetails?.user?.email}
                    disabled
                    className="w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 text-sm "
                  />
                </div>
              </div>
              <div className="w-full flex gap-4 mt-3 ">
                <div className="w-full ">
                  <p className="text-sm font-medium">
                    Location <span className="text-red-600">*</span>
                  </p>
                  <select
                    name=""
                    id=""
                    className="w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 text-sm"
                  >
                    <option value=""> Texas, US</option>
                    <option value=""> Londan, Uk</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex gap-4 mt-3 flex-col md:flex-row">
                <div className="w-full ">
                  <p className="text-sm font-medium">
                    Experience <span className="text-red-600">*</span>
                  </p>
                  <div className="w-full flex gap-4">
                    <select
                      name=""
                      id=""
                      className="w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 text-sm"
                    >
                      <option value=""> 1 year</option>
                      <option value=""> 2 year</option>
                      <option value=""> 3 year</option>
                      <option value=""> 4 year</option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="w-full h-[40px] rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 text-sm "
                    >
                      <option value=""> 1 Months</option>
                      <option value=""> 2 Months</option>
                      <option value=""> 3 Months</option>
                      <option value=""> 4 Months</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-base font-medium">Social Profiles </p>
                <div className="mt-4">
                  <div className="flex gap-4 items-center relative text-sm">
                    <div className="w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 ">
                      <FaLinkedin size={20} />
                      <input className='w-full h-full pl-2 text-sm' type="text" name="" id="" 
                       value={linkedIn} disabled={linkedIn ? true : false}
                       onChange={(e) => {
                         const inputValue = e.target.value;

                         if (inputValue.includes("linkedin.com")) {
                           setLinkedInLink(inputValue); 
                           setLinkedInName("Linkedin"); 
                         } 
                       }} 
                       placeholder="Your Linkedin profile url" />
                    </div>
                    <FaCheck  onClick={handleLinkedInLinkEdit} className="absolute right-12 top-4 " size={13} />
                    <ImCross className="absolute right-4 top-4"onClick={()=>{handleDeleteSocialLink("Linkedin")}}  size={13} />
                  </div>
                  <div className=" gap-4 items-center relative ">
                    <div className="w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 mt-3">
                      <FaGithub size={20} />
                      <input className='w-full h-full pl-2 text-sm' type="text" name="" id="" 
                       value={gitHub} disabled={gitHub ? true : false}
                        onChange={(e) => {
                          const inputValue = e.target.value;

                          if (inputValue.includes("github.com")) {
                            setWorkLink(inputValue); 
                            setWorkPlatformName("GitHub"); 
                          } 
                        }} 
                        placeholder="Your Github profile url" />
                    </div>
                    <FaCheck  onClick={handleSocialLinkEdit} className="absolute right-12 top-4 " size={13} />
                    <ImCross className="absolute right-4 top-4" onClick={()=>{handleDeleteSocialLink("GitHub")}}  size={13} />
                  </div>

                
                 
                  <div className="flex gap-4 items-center relative text-sm" >
                    <div className="w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 mt-3">
                      <FaBehanceSquare size={20} />
                      <input className='w-full h-full pl-2 text-sm' type="text" name="" id=""
                        value={behance} disabled={behance ? true : false }
                        onChange={(e) => {
                          const inputValue = e.target.value;
 
                          if (inputValue.includes("behance.com")) {
                            setBehanceLink(inputValue); 
                            setBehanceName("Behance"); 
                          } 
                        }} 
                       placeholder="Your Behance profile url" />
                    </div>
                    <FaCheck  onClick={handleBehanceLinkEdit} className="absolute right-12 top-4 " size={13} />
                    <ImCross className="absolute right-4 top-4 "  onClick={()=>{handleDeleteSocialLink("Behance")}}  size={13} />                  </div>
                  <div className="flex gap-4 items-center text-sm">
                    <div className="w-[465px] border-[1px] border-[#E1E1E2] rounded-lg flex items-center gap-3 px-5 py-3 mt-3">
                      <FiChrome size={20} />
                      <input type="text" name="" id=""  placeholder="Other web profile url" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end  gap-10  items-center">
          <div
            className="bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer "
            onClick={() => {
              setAboutPop(false);
            }}
          >
            <p
              className="text-base font-semibold text-[#114B53] cursor-pointer"
              onClick={() => handleProfileEdit()}
            >
              Continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

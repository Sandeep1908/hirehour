import React, { useEffect, useState } from 'react';

import { FaEdit } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import { TbPhoneCalling } from 'react-icons/tb';
import { PiSuitcase } from 'react-icons/pi';


import { BiPlus } from 'react-icons/bi';
import publicEye from '../../../assets/icon/public.png';
import privateEye from '../../../assets/icon/private.png';

import AboutMe from '../../../components/job-seekers/profile/AboutMe';
import AdditionalDetails from '../../../components/job-seekers/profile/AdditionalDetails';
import Experience from '../../../components/job-seekers/profile/Experience';
import SummaryEdit from '../../../components/job-seekers/profile/Summary';
import ProfileComplition from '../../../components/job-seekers/profile/ProfileComplition';
import Achievement from '../../../components/job-seekers/profile/Achievement';
import Skills from '../../../components/job-seekers/profile/Skills';
import ResumeUpload from './components/ResumeUploads';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certification from './components/Certification';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUserDetails } from '../../../utils/jobseekers/getUserDetails';
import AddEducation from '../../../components/job-seekers/profile/AddEducation';
import AddExperience from '../../../components/job-seekers/profile/AddExperience';
import axiosInstance from '../../../axios/axiosInstance';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import AddCertification from '../../../components/job-seekers/profile/AddCertification';
import CertificationEdit from '../../../components/job-seekers/profile/Certification';
import OverallSkill from './components/OverallSkill';
import CurrentSkill from './components/CurrentSkill';
import { AiOutlinePlus } from 'react-icons/ai';
import EditCertification from '../../../components/job-seekers/profile/edit/EditCertification';



type AdditionalDetailsProps = {
  isVisibleToRecruiters: boolean | null;
  needVisaSponsorship: boolean | null;

};

type PublicPrivateProps = {
  isVisibleToRecruiters: boolean | null;


};


const Profile: React.FC = () => {

  const { data: userDetails } = useQuery({
    queryKey: ['userDetails'],
    queryFn: fetchUserDetails,
  });
  const queryClient = useQueryClient();

  const [profilePopup, setProfilePopup] = useState<boolean>(false);
  const [aboutusPop, setAboutusPop] = useState<boolean>(false);
  const [additionalInfoPopup, setAdditionalInfoPopup] = useState<boolean>(false);
  const [skillsPopup, setSkillsPopup] = useState<boolean>(false);
  const [summaryPopup, setSummaryPopup] = useState<boolean>(false);
  const [experiencePopup, setExperiencePopup] = useState<boolean>(false);
  // const [educationPopup, setEducationPopup] = useState<boolean>(false);
  const [certificationPopup, setCertificationPopup] = useState<boolean>(false);
  const [achievementPopup, setAchievementPopup] = useState<boolean>(false);
  // const [isVisibleToRecruiters, setIsVisibleToRecruiters] = useState<boolean>(true);
  const [isUploadResumeOpen, setIsUploadResumeOpen] = useState(false);

  const [editCertData, setEditCertData] = useState<any>()
  const [editCertPopup, setEditCertPopup] = useState<boolean>(false)


  // Checek Profile Complition

  const [signingUpwithTopEquator, setSigningUpWithTopEquator] = useState<boolean>(false);
  const [addResume, setAddResume] = useState<boolean>(false);
  const [addAboutMe, setAddAboutMe] = useState<boolean>(false);
  // const [jobPreference,setJobPreference] = useState<boolean>(false);
  const [addSkillSet, setAddSkillSet] = useState<boolean>(false);
  const [addSociallinks, setAddSociallinks] = useState<boolean>(false);
  const [addDomain, setAddDomain] = useState<boolean>(false);
  const [completionPercentage, setCompletionPercentage] = useState<number>(0);
  const [counttotal, setCountTotal] = useState<number>(0);




  // const [skillDetails, setSkillDetails] = useState<any>()
  const [skillSectionId, setSkillSectionId] = useState<number>(0)
  // setSkillDetails(userDetails)
  const skillSection = [
    {
      id: 0,
      label: "Overall Skill",
      component: <OverallSkill userDetails={userDetails} />
    },
    {
      id: 1,
      label: "Current Skill",
      component: <CurrentSkill />
    }
  ]

  let count = 0;

  const handelProfileComplition = () => {

    console.log("userDetails", userDetails);


    // Check and update count based on conditions
    if (userDetails.user?.firstName) {
      setSigningUpWithTopEquator(true)
      count++;
      console.log("signingUpwithTopEquator", signingUpwithTopEquator)
    }

    if (userDetails.selectedResume) {
      setAddResume(true);
      count++;
    } else {
      setAddResume(false);
    }

    if (userDetails.profilePictureLink) {
      setAddAboutMe(true);
      count++;
      console.log("addAboutMe", addAboutMe)
    } else {
      setAddAboutMe(false);
    }


    if (userDetails.candidatedetailsskills?.length > 0) {
      setAddSkillSet(true);
      count++;
      console.log("addSkillSet", addSkillSet)
    } else {
      setAddSkillSet(false);
    }

    if (userDetails.candidatedetailsworks.length > 0) {
      setAddSociallinks(true);
      count++;
      console.log("addSociallinks", addSociallinks)
    } else {
      setAddSociallinks(false);
    }

    if (userDetails.candidatedetailsexperiences.length > 0) {
      setAddDomain(true);
      count++;
      console.log("addDomain", addDomain)
    } else {
      setAddDomain(false);
    }

    calculateCompletion(count)

    console.log("Profile Completion Count:", count);
  };


  const calculateCompletion = (count: number) => {
    const percentage = Math.round((count / 7) * 100);
    setCompletionPercentage(percentage);
    setCountTotal(count)
    console.log("percentage", completionPercentage)
    console.log("count", count)
  };

  useEffect(() => {
    if (userDetails) {
      handelProfileComplition();
    }

  }, [userDetails]);


  // Add State 

  const [addEducationPopup, setAddEducationPopup] = useState<boolean>(false);
  const [addExperiencePopup, setAddExperiencePopup] = useState<boolean>(false);
  const [addCertificationPopup, setAddCertificationPopup] = useState<boolean>(false);



  const [isVisibleToRecruiters, setIsVisibleToRecruiters] = useState<boolean | null>(null);
  const [needVisaSponsorship, setNeedVisaSponsorship] = useState<boolean | null>(null);


  //Edit states

  const [experienceId, setExperienceId] = useState<number | null>(null)



  // Mutation for submitting form data
  const additionaldetailsMutation = useMutation({
    mutationFn: async (AddData: AdditionalDetailsProps) => {
      console.log("add", AddData)
      const response = await axiosInstance.post(
        '/api/candidate/details/update-details',
        AddData,
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success('Information Saved');
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>
      toast.error(axiosError?.response?.data?.message);
    },
  });


  const handleAdditionalDetails = () => {
    const additionalDetails = { isVisibleToRecruiters, needVisaSponsorship }
    additionaldetailsMutation.mutate(additionalDetails);
    setAdditionalInfoPopup(false);
  };

  // Mutation for submitting form data
  const publicPrivateMutation = useMutation({
    mutationFn: async (AddData: PublicPrivateProps) => {
      console.log("add", AddData)
      const response = await axiosInstance.post(
        '/api/candidate/details/update-details',
        AddData,
      );
      return response.data;
    },
    onSuccess: () => {
      toast.success('Information Saved');
      queryClient.invalidateQueries({ queryKey: ['userDetails'] });
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message: string }>
      toast.error(axiosError?.response?.data?.message);
    },
  });

  const handlePublicPrivate = (p: boolean) => {
    setIsVisibleToRecruiters(!p)
    const additionalDetails = { isVisibleToRecruiters }
    publicPrivateMutation.mutate(additionalDetails);

  };





  return (
    <div className="w-full h-full relative ">
      <div className="w-full max-w-[1280px] m-auto p-5 grid grid-cols-1 ">
        <div className="flex pb-3  relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#C7C9D9] ">
          <p className="text-lg font-semibold">Profile</p>
        </div>

        <div className="flex relative">
          {/* //left section */}

          <div className="w-[450px] h-full pt-10     ">
            <div className="bg-white w-full mb-3   rounded-lg md:hidden  ">
              <div className="p-3">
                <h1 className="text-lg font-semibold">Hello {userDetails?.user?.firstName},</h1>
                <p className="text-[#6B7588] text-sm">
                  Recruiters are looking for Candidates like you, Complete your profile to Stand out
                </p>
              </div>

              <div className="w-full flex flex-col justify-between items-center p-3">
                <div className="w-full flex justify-center items-center space-x-3">
                  <div className="w-full bg-[#FFF1C6] rounded-full  ">
                    <div
                      className="bg-[#FFD05B] text-xs  text-black text-center  leading-none rounded-full"
                      style={{ width: completionPercentage + "%" }}
                    >
                      {' '}
                      {completionPercentage}%
                    </div>
                  </div>
                  <p className="text-xs">{counttotal}/7 Completed</p>
                </div>

                <div className=" pt-4 flex justify-end items-end w-full">
                  <p
                    className="w-32 text-sm h-8 bg-[#E9F358] text-[#104B53] font-semibold rounded-full flex justify-center items-center p-3 "
                    onClick={() => { setProfilePopup(true) }}
                  >
                    Let's Go{' '}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start bg-white p-3 rounded-lg  ">
              <div className="flex flex-col space-y-2">
                <h1 className="text-sm font-semibold">{userDetails?.isVisibleToRecruiters ? 'Public' : 'Private'}</h1>
                <p className="text-xs text-[#A4A5B7]">
                  {userDetails?.isVisibleToRecruiters ? 'Visible to employers' : 'Not Visible to employers'}
                </p>
              </div>

              <img
                src={userDetails?.isVisibleToRecruiters ? publicEye : privateEye}
                className="w-8 h-8"
                alt="public-eye"
                onClick={() => handlePublicPrivate(userDetails?.isVisibleToRecruiters)}
              />
            </div>

            {/* About me  */}

            <div className="  bg-white p-3 rounded-lg mt-3 ">
              <div className="flex w-full justify-between items-center pb-3 relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#EFF1F3]">
                <h1 className="text-sm font-semibold">About me</h1>
                <div className="flex justify-center items-center space-x-2 cursor-pointer">
                  <FaEdit size={16} color="#104B53" />{' '}
                  <span
                    className="text-[#104B53] text-sm"
                    onClick={() => {
                      setAboutusPop(true);
                    }}
                  >
                    Edit
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col  space-y-3 justify-center items-center p-5 relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:mb-3 before:bg-[#EFF1F3]">
                <div className="w-16 h-16 bg-[#CBFFFC] rounded-full flex justify-center items-center">
                  {userDetails?.profilePictureLink ? <img src={userDetails?.profilePictureLink} className='w-full h-full rounded-full object-cover' alt="profile-alt" /> : userDetails?.user.firstName.charAt(0)}

                </div>

                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-lg font-semibold">{userDetails?.user?.firstName}</h1>
                  <div className="flex justify-center items-center space-x-2">
                    <IoLocationOutline />

                    <p className="text-xs">{userDetails?.location}</p>
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-3">
                  <FaLinkedin size={18} />

                  <FaGithub size={18} />
                </div>
              </div>

              <div className="w-full flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <MdOutlineEmail size={18} color="#3A3A3C" />
                    <p className="text-[#3A3A3C] text-xs">{userDetails?.user?.email}</p>
                  </div>

                  <span className=" w-4  flex justify-center items-center  h-4 bg-[#07A560] text-white rounded-full">
                    <TiTick size={12} />
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <TbPhoneCalling size={18} color="#3A3A3C" />
                    <p className="text-[#3A3A3C] text-xs">{userDetails?.user?.phoneNumber}</p>
                  </div>

                  <span className=" w-4  flex justify-center items-center  h-4 bg-[#07A560] text-white rounded-full">
                    <TiTick size={12} />
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-2 items-center">
                    <PiSuitcase size={18} color="#3A3A3C" />
                    <p className="text-[#3A3A3C] text-xs">Exp: 4 Year 5 Months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additonal Info  */}

            <div className="  bg-white p-3 rounded-lg mt-3  ">
              <div className="flex w-full justify-between items-center pb-5 relative before:absolute before:bottom-0 before:w-full before:h-0.5  before:bg-[#EFF1F3]">
                <h1 className="text-sm font-semibold">Additonal Information</h1>
                <div
                  className="flex justify-center items-center space-x-2"
                  onClick={() => {
                    setAdditionalInfoPopup(true);
                  }}
                >
                  <FaEdit size={16} color="#104B53" />{' '}
                  <span className="text-[#104B53] text-sm">Edit</span>
                </div>
              </div>

              <div className="flex flex-col space-y-5 p-2">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-[#8F90A6]">Willing to work / Looking for job change</p>
                  <h1 className="text-xs font-semibold">{userDetails?.isVisibleToRecruiters === true ? "Yes" : "No"} </h1>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-[#8F90A6]">Visa Sponsorship</p>
                  <h1 className="text-xs font-semibold">{userDetails?.needVisaSponsorship === true ? "Yes" : "No"} </h1>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-[#8F90A6]">Security clearance</p>
                  <h1 className="text-xs font-semibold">Yes</h1>
                </div>
              </div>
            </div>

            {/* Skill section  */}

            <div className="  bg-white p-3 rounded-lg mt-3 ">
              <div className="flex w-full justify-between items-center pb-5 relative before:absolute before:bottom-0 before:w-full   before:bg-[#EFF1F3]">
                <h1 className="text-sm font-semibold">Skills</h1>
                <div
                  className="flex justify-center items-center space-x-2"
                  onClick={() => {
                    setSkillsPopup(true);
                  }}
                >
                  <AiOutlinePlus size={16} color="#104B53" />{' '}
                  <span className="text-[#104B53] text-sm">Add</span>
                </div>
              </div>
              <div className="flex gap-1 ">
                {skillSection?.map((item, id) => {
                  return (
                    <div key={id} onClick={() => { setSkillSectionId(id) }} className={` ${item.id === skillSectionId ? "bg-[#114B53]" : ""} pt-1  rounded-tl-lg rounded-tr-lg`}>
                      <p className="text-[#114B53] text-sm px-3 py-1 bg-white">{item.label}</p>
                    </div>
                  )
                })}

              </div>
              <hr className="mt-2" />

              {skillSection?.map((item, id) => {
                if (item.id === skillSectionId) {
                  return (
                    <div key={id}>
                      {item.component}
                    </div>
                  )
                }
              })}
              <div>

              </div>

              {/* <div className="flex gap-2 items-center justify-center mt-5">
                <SlArrowDown size={15} />

                <p className="text-sm text-[#114B53] font-semibold">View all 20</p>
              </div> */}
            </div>
          </div>

          {/* right Section  */}

          <div className="w-full h-full pt-10 p-3 hidden md:block ">
            {/* Hello Section  */}
            <div className="bg-white w-full p-3 rounded-lg  ">
              <div className="p-2">
                <h1 className="text-2xl font-semibold">Hello {userDetails?.user?.firstName},</h1>
                <p className="text-[#6B7588] text-xs">
                  Recruiters are looking for Candidates like you, Complete your profile to Stand out
                </p>
              </div>

              <div className="w-full flex justify-between items-center p-2">
                <div className="max-w-96 w-full flex items-center space-x-3">
                  <div className="w-full bg-[#FFF1C6] rounded-full  ">
                    <div
                      className="bg-[#FFD05B] text-xs  text-black text-center  leading-none rounded-full"
                      style={{ width: completionPercentage + "%" }}
                    >
                      {' '}
                      {completionPercentage}%
                    </div>
                  </div>
                  <p className="text-sm">{counttotal}/7 Completed</p>
                </div>

                <div className="w-1/4 flex justify-end items-center">
                  <p
                    className="w-36 h-10 bg-[#E9F358] text-[#104B53] font-semibold rounded-full flex justify-center text-xs cursor-pointer items-center p-3 "
                    onClick={() => { setProfilePopup(true) }}
                  >
                    Let's Go{' '}
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Upload Section  */}
            <ResumeUpload setIsUploadResumeOpen={setIsUploadResumeOpen} />

            {/* Summery  */}

            <Summary setSummaryPopup={setSummaryPopup} summary={userDetails?.summary} />

            {/* Experience  */}

            <WorkExperience setExperiencePopup={setExperiencePopup} setExperienceId={setExperienceId} setAddExperiencePopup={setAddExperiencePopup} />

            {/* Education  */}

            <Education setAddEducationPopup={setAddEducationPopup} />

            {/* Certification  */}

            <Certification setCertificationPopup={setCertificationPopup} setAddCertificationPopup={setAddCertificationPopup} setEditCertData={setEditCertData} setEditCertPopup={setEditCertPopup} />


            {/* Acheivment  */}

            <div className="bg-white w-full p-5 rounded-lg mt-3">
              <div className=" flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Achievement</h1>

                  <div
                    className="flex justify-end items-center space-x-2"
                    onClick={() => {
                      setAchievementPopup(true);
                    }}
                  >
                    <BiPlus size={14} color="#104B53" />
                    <p className="text-[#104B53] font-semibold text-sm">Add</p>
                  </div>
                </div>

                <div className="border p-7 border-[#EBEBF0] rounded-lg">
                  <div
                    className="w-full max-w-[765px] h-[80px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              "
                  >
                    <p className="text-xs">Added Achievement will be shown here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Add More Section  */}

            <div className="bg-white w-full p-5 rounded-lg mt-3">
              <div className=" flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">Add More Section</h1>

                  <div className="flex justify-end items-center space-x-2">
                    <BiPlus size={14} color="#104B53" />
                    <p className="text-[#104B53] font-semibold text-xs">Add</p>
                  </div>
                </div>

                <div className="border p-7 border-[#EBEBF0] rounded-lg">
                  <div
                    className="w-full max-w-[765px] h-[80px] m-auto flex justify-center items-center border border-dashed border-[#C7C9D9] bg-[#F2F2F5] rounded-lg
              "
                  >
                    <p className="text-xs">Added more section will be shown here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit About us Popup */}

      {profilePopup && <ProfileComplition setAboutusPop={setAboutusPop} setSkillsPopup={setSkillsPopup} setProfilePopup={setProfilePopup} setAddExperiencePopup={setAddExperiencePopup} signingUpwithTopEquator={signingUpwithTopEquator} addResume={addResume} addAboutMe={addAboutMe} addSkillSet={addSkillSet} addSociallinks={addSociallinks} addDomain={addDomain} completionPercentage={completionPercentage} count={counttotal} />}
      {aboutusPop && <AboutMe setAboutPop={setAboutusPop} />}
      {additionalInfoPopup && <AdditionalDetails setAdditionalInfoPopup={setAdditionalInfoPopup} handleAdditionalDetails={handleAdditionalDetails} setIsVisibleToRecruiters={setIsVisibleToRecruiters} setNeedVisaSponsorship={setNeedVisaSponsorship} />}
      {skillsPopup && <Skills setSkillsPopup={setSkillsPopup} />}
      {summaryPopup && <SummaryEdit setSummaryPopup={setSummaryPopup} />}
      {experiencePopup && <Experience setExperiencePopup={setExperiencePopup} expeirenceId={experienceId} />}
      {/* {educationPopup && <EducationEdit setEducationPopup={setEducationPopup} />} */}
      {certificationPopup && <CertificationEdit setCerticationPopup={setCertificationPopup} />}
      {achievementPopup && <Achievement setAchievementPopup={setAchievementPopup} />}

      {/* Add Popus  */}


      {addEducationPopup && <AddEducation setAddEducationPopup={setAddEducationPopup} />}
      {addExperiencePopup && <AddExperience setAddExperiencePopup={setAddExperiencePopup} />}
      {addCertificationPopup && <AddCertification setAddCertificationPopup={setAddCertificationPopup} />}


      {/* edit popups */}

      {editCertPopup && <EditCertification setEditCertPopup={setEditCertPopup} editCertData={editCertData} />}



      <div
        className={`w-full h-full flex justify-center items-center fixed inset-0 transition-all duration-500 ${isUploadResumeOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'
          }`}
      >
        <div className="z-[10] w-full max-w-[500px] shadow-xl bg-white rounded-lg space-y-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg  text-center  w-full ">Overwrite Profile ?</h1>
            <button
              onClick={() => setIsUploadResumeOpen(false)}
              className="text-lg font-bold text-gray-400"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-center text-[#6B7588]">
              Once the hiring partner accept the invite it will show in the co-hiring page{' '}
            </p>

            <div className="flex justify-between items-center w-full p-3 gap-5">
              <p className="text-xs w-full h-7 border border-[#104B53] rounded-full flex justify-center items-center text-[#104B53] font-[500]">
                Just Upload
              </p>
              <p className="w-full h-7 bg-[#E9F358] text-xs text-[#104B53] rounded-full flex justify-center items-center">
                Upload and Overwrite
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

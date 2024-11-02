import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { HeaderContextProvider } from './context/HeaderContext.tsx';

//Chart js
import 'chart.js/auto';

 
 import { Tooltip,Legend,BarElement,CategoryScale,LinearScale,Chart as ChartJS,ArcElement } from 'chart.js/auto';

import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  BarElement,
  CategoryScale,
  LinearScale,
);

// components
import Home from './pages/job-seekers/home/Home.tsx';
import Signup from './pages/auth/Signup/Signup.tsx';
import Signin from './pages/auth/Signin/Signin.tsx';
import SignupPoster from './pages/job-posters/Signup/Signup.tsx';
import SigninPoster from './pages/job-posters/Signin/Signin.tsx';
import JobDescription from './pages/job-seekers/JobDescription/JobDescription.tsx';
import AdditionalInfo from './pages/job-seekers/ProfileSetting/AdditionalInformation/AdditionalInfo.tsx';
import UploadResume from './pages/job-seekers/ProfileSetting/UploadResume/UploadResume.tsx';
import ReviewInfo from './pages/job-seekers/ProfileSetting/ReviewInfo/ReviewInfo.tsx';
import MyJobs from './pages/job-seekers/MyJobs/MyJobs.tsx';
import RightToRepresent from './pages/job-seekers/RightToRepresent/RightToRepresent.tsx';
import Message from './pages/job-seekers/Messages/Message.tsx';
import AccountSetting from './pages/job-seekers/AccountSettings/AccountSettings.tsx';
import ProfileVisibility from './pages/job-seekers/AccountSettings/ProfileVisibility/ProfileVisibility.tsx';
import Profile from './pages/job-seekers/ProfilePage/Profile.tsx';
import JobPreference from './pages/job-seekers/Job Preference/JobPreference.tsx';
import Accepted from './pages/job-seekers/RightToRepresent/Accepted/Accepted.tsx';
import Decline from './pages/job-seekers/RightToRepresent/Decline/Decline.tsx';
import Expired from './pages/job-seekers/RightToRepresent/Expired/Expired.tsx';
import JobPosterHome from './pages/job-posters/home/Home.tsx';
import JobBoard from './pages/job-posters/job-board/JobBasis.tsx';
import JobDescriptionBoard from './pages/job-posters/job-board/JobDescription/JobDescriptionBoard.tsx';
import CompanyProfile from './pages/job-posters/job-board/CompanyProfile/CompanyProfile.tsx';
import DashBoard from './pages/job-posters/dashboard/Dashboard.tsx';
import Payment from './pages/job-posters/payment/Payment.tsx';
import Pricing from './pages/job-posters/pricing/Pricing.tsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ProfileSetting from './pages/job-posters/userprofile/Profile.tsx';
import CompanyProfileSettings from './pages/job-posters/userprofile/CompanyProfielSettings.tsx';
import Review from './pages/job-posters/job-board/Review/Review.tsx';
import JobPreferenceTemplate from './pages/emails/JobPreferenceTemplate.tsx';
import SavedJobs from './pages/job-seekers/MyJobs/Saved/SavedJobs.tsx';
import ApplicationStarted from './pages/job-seekers/MyJobs/ApplicationStarted/ApplicationStarted.tsx';
import Interviewing from './pages/job-seekers/MyJobs/Interviewing/Interviewing.tsx';
import OfferReceived from './pages/job-seekers/MyJobs/OfferReceived/OfferReceived.tsx';
import JobPostedTemplates from './pages/emails/JobPostedTemplates.tsx';
import MessageTemplate from './pages/emails/MessageTemplates.tsx';
import MessageOneTemplate from './pages/emails/MessageOneTemplate.tsx';
import MessageJP from './pages/job-posters/Messages/MessageJP.tsx';
import DashBoardRTR from './pages/job-posters/dashboard/dashboardRTR/DashboardRTR.tsx';
import JobPreview from './pages/job-posters/jobPreveiw/JobPreveiw.tsx';
import AdminDashboard from './pages/admin/dashboard/Dashboard.tsx';
import PrivacySetting from './pages/job-seekers/AccountSettings/PrivacySetting/PrivacySetting.tsx';
import ReceivedNewRTR from './pages/emails/ReceivedNewRTR.tsx';
import PrivacySettingJP from './pages/job-posters/dashboard/dashboardRTR/userprofile/RTRPrivacySetting.tsx';
import IntrestedRecruiter from './pages/emails/IntrestedRecruiter.tsx';
import RTRProfile from './pages/job-posters/dashboard/dashboardRTR/userprofile/RTRProfile.tsx';
import RTRCompanyProfile from './pages/job-posters/dashboard/dashboardRTR/userprofile/RTRCompanyProfile.tsx';
import RTRPrivacySetting from './pages/job-posters/dashboard/dashboardRTR/userprofile/RTRPrivacySetting.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />

      <Route path="/searchjob" element={<JobDescription />} />

      {/* Uploading resumes  */}
      <Route path="/upload-resume" element={<UploadResume />} />
      <Route path="/additional-information" element={<AdditionalInfo />} />
      <Route path="/review-form" element={<ReviewInfo />} />
      {/* Myjobs  */}
      <Route path="/myjobs" element={<MyJobs />} />
      <Route path="/myjobs-saved" element={<SavedJobs />} />
      <Route path="/myjobs-application-started" element={<ApplicationStarted />} />

      <Route path="/myjobs-interviewing" element={<Interviewing />} />
      <Route path="/myjobs-offer-received" element={<OfferReceived />} />

      {/* Right To Represent  */}
      <Route path="/right-to-represent" element={<RightToRepresent />} />
      <Route path="/rtr-accepted" element={<Accepted />} />
      <Route path="/rtr-decline" element={<Decline />} />
      <Route path="/rtr-expired" element={<Expired />} />
      {/* Messages  */}
      <Route path="/messages" element={<Message />} />
      {/* Account Setting  */}
      <Route path="/account" element={<AccountSetting />} />
      <Route path="/profile-visibility" element={<ProfileVisibility />} />
      <Route path="/privacy-setting" element={<PrivacySetting />} />



      {/* Pofile Page  */}
      <Route path="/profile" element={<Profile />} />
      {/* Job preference  */}
      <Route path="/job-preference" element={<JobPreference />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      {/*  *****************************job posters routes *************************************  */}
      <Route path="/job-poster" element={<JobPosterHome />} />
      <Route path="/job-poster/job-basis" element={<JobBoard />} />
      <Route path="/job-poster/job-description" element={<JobDescriptionBoard />} />
      <Route path="/job-poster/company-profile" element={<CompanyProfile />} />
      <Route path="/job-poster/review" element={<Review />} />
      <Route path="/job-poster/job-review" element={<JobPreview />} />
      <Route path="/job-poster/messages" element={<MessageJP />} />
      <Route path="/job-poster/job-preview" element={<JobPreview />} />

      <Route path="/job-poster/dashboard" element={<DashBoard />} />
      <Route path="/job-poster/payment" element={<Payment />} />
      <Route path="/job-poster/pricing" element={<Pricing />} />
      <Route path="/job-poster/profile-setting" element={<ProfileSetting />} />
      <Route path="/job-poster/company-profile-info" element={<CompanyProfileSettings />} />
      <Route path="/job-poster/privacy-setting" element={<PrivacySettingJP />} />

   
      <Route path="/job-poster/signup" element={<SignupPoster />} />
      <Route path="/job-poster/signin" element={<SigninPoster />} />

      <Route path="/job-poster/signup" element={<SignupPoster />} />
      <Route path="/job-poster/signin" element={<SigninPoster />} />


     {/* ****************************** Dashboard rtr ***************************** */}
      <Route path="/dashboard-rtr" element={<DashBoardRTR />} />
      <Route path="/dashboard-rtr/profile-setting" element={<RTRProfile />} />
      <Route path="/dashboard-rtr/company-profile-info" element={<RTRCompanyProfile />} />
      <Route path="/dashboard-rtr/privacy-setting" element={<RTRPrivacySetting />} />


      {/* Email Templates  */}

      <Route path="/email/job-preference" element={<JobPreferenceTemplate />} />
      <Route path="/email/job-posted" element={<JobPostedTemplates />} />
      <Route path="/email/messages" element={<MessageTemplate />} />
      <Route path="/email/messages-one" element={<MessageOneTemplate />} />
      <Route path="/email/received-new-rtr" element={<ReceivedNewRTR />} />
      <Route path="/email/recruiter-interested" element={<IntrestedRecruiter />} />



      {/* Admin Pannel  */}

      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderContextProvider>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
    </HeaderContextProvider>
  </StrictMode>,
);

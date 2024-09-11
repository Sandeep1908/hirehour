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
import Home from './pages/job-seekers/home/Home.tsx';
 
import Signup from './pages/auth/Signup/Signup.tsx';
import Signin from './pages/auth/Signin/Signin.tsx';
 
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
       <Route path="/myjobs" element={<MyJobs/>}/> 

      {/* Right To Represent  */}
      <Route path="/right-to-represent" element={<RightToRepresent/>}/> 
      <Route path="/rtr-accepted" element={<Accepted/>}/>
      <Route path="/rtr-decline" element={<Decline/>}/>

      <Route path="/rtr-expired" element={<Expired/>}/>



    {/* Messages  */}
      <Route path="/messages" element={<Message/>}/> 

      {/* Account Setting  */}
      <Route path="/account" element={<AccountSetting/>}/> 
      <Route path="/profile-visibility" element={<ProfileVisibility/>}/> 

    {/* Pofile Page  */}

    <Route path="/profile" element={<Profile/>}/> 

    {/* Job preference  */}

    <Route path="/job-preference" element={<JobPreference/>}/> 






      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Route>,
  ),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

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
import Home from './pages/home/Home.tsx';
import JobDescription from './pages/JobDescription/JobDescription.tsx';
import Signup from './pages/Signup/Signup.tsx';
import Signin from './pages/Signin/Signin.tsx';
import AdditionalInfo from './pages/ProfileSetting/AdditionalInformation/AdditionalInfo.tsx';
import UploadResume from './pages/ProfileSetting/UploadResume/UploadResume.tsx';
import ReviewInfo from './pages/ProfileSetting/ReviewInfo/ReviewInfo.tsx';
import MyJobs from './pages/MyJobs/MyJobs.tsx';
import RightToRepresent from './pages/RightToRepresent/RightToRepresent.tsx';
import Message from './pages/Messages/Message.tsx';
import AccountSetting from './pages/AccountSettings/AccountSettings.tsx';
import ProfileVisibility from './pages/AccountSettings/ProfileVisibility/ProfileVisibility.tsx';

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

    {/* Messages  */}
      <Route path="/messages" element={<Message/>}/> 

      {/* Account Setting  */}
      <Route path="/account" element={<AccountSetting/>}/> 
      <Route path="/profile-visibility" element={<ProfileVisibility/>}/> 




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

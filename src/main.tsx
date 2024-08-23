import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import JobDescription from "./pages/JobDescription/JobDescription.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import Signin from "./pages/Signin/Signin.tsx";
import ProfileSetting from "./pages/ProfileSetting/ProfileSetting.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/searchjob" element={<JobDescription />} />
      <Route path='/account' element={<ProfileSetting/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Route>
  ),
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

import axiosrecruiterinstance from "../../axios/axiosrecruiterinstance";

export const fetchRecruiterDetails = async () => {
  const response = await axiosrecruiterinstance.get('/api/recruiter/profile/view-profile');
  return response.data;
};
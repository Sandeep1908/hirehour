import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance";

export const fetchAllTeamMembers = async () => {
    const response = await axiosrecruiterinstance.get(`/api/recruiter/team-management/company-menbers`);
    return response.data;
  };



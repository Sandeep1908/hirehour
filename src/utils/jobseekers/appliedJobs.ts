import axiosInstance from "../../axios/axiosInstance";

export const appliedJobs = async () => {
    const respons = await axiosInstance.get('/api/candidate/jobs/applied-jobs');
    return respons.data;
  };
  
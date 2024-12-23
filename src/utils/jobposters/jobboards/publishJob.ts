import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance";


export const publishJob = async (jobId:number) => {
    const response = await axiosrecruiterinstance.get(`/api/recruiter/jobs/part3/${jobId}`);
    return response.data;
  };
import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance";

export const fetchAllAppliedJobs=async()=>{
    const respose= await axiosrecruiterinstance.get('/api/recruiter/job-actions/get-applications')
    return respose.data
}
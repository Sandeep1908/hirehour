import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance";

export const fetchPostedJob=async()=>{
    const respose= await axiosrecruiterinstance.get('/api/recruiter/jobs/view')
    return respose.data
}
import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance";

export const fetchListResumeSoucing=async()=>{
    const respose= await axiosrecruiterinstance.get('/api/recruiter/resume-sourcing/resume')
    return respose.data
}
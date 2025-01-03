import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance"
export const fetchAllRTR=async()=>{
    const response = await axiosrecruiterinstance.get('/api/recruiter/rtr/see-created-rtr')
    return response.data
}
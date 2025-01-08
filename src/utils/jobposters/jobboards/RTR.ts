import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance"
export const fetchCreatedRTR=async()=>{
    const response = await axiosrecruiterinstance.get('/api/recruiter/rtr/see-created-rtr')
    return response.data
}

export const fetchAllRTR=async()=>{
    const response = await axiosrecruiterinstance.get('/api/recruiter/rtr/view-sent-rtr')
    return response.data
}
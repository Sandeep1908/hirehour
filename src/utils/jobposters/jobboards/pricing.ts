import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance"
export const fetchPricing=async()=>{
    const response = await axiosrecruiterinstance.get('/api/recruiter/owner-recruiter/subscribe-request')
    return response.data
}
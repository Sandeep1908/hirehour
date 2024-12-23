 
import axiosInstance from "../../axios/axiosInstance";


export const getGeolocationStats=async()=>{
    const response =await axiosInstance.get('/api/misc/logger/user-location-stats')
    return response
}



export const getUserStats=async()=>{
    const response =await axiosInstance.get('/api/misc/logger/user-stats')
    return response
}

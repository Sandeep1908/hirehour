import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance"

export const FileUploader= async(formdata:FormData)=>{
    console.log("inside file Uploader",formdata);
    const response= await axiosrecruiterinstance.post('/api/misc/uploader/upload',formdata,{
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
    return response.data
}
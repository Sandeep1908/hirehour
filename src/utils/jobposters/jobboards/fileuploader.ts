import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance"

export const FileUploader= async(formdata:{file:File})=>{
            console.log("inside uploaed",formdata);
    const response= await axiosrecruiterinstance.post('/api/misc/uploader/upload',formdata)
    return response.data
}
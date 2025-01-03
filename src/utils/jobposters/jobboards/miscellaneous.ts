import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance";


export const fetchApplicants  = async () => {
    const response = await axiosrecruiterinstance.get(`/api/misc/dropdown/candidates?search=`);
    return response.data;
  };


  export const fetchOneApplicants  = async (search:string) => {
    const response = await axiosrecruiterinstance.get(`/api/misc/dropdown/candidates?search=${search}`);
    return response.data;
  };





export const fetchEmployers = async () => {
    const response = await axiosrecruiterinstance.get(`/api/misc/dropdown/recruiters?search=`);
    return response.data;
  };

  export const fetchOneEmployers = async (searcn:string) => {
    const response = await axiosrecruiterinstance.get(`/api/misc/dropdown/recruiters?search=${searcn}`);
    return response.data;
  };






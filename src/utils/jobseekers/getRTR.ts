import axiosInstance from "../../axios/axiosInstance";

export const fetchRTRs = async () => {
    const respons = await axiosInstance.get('/api/candidate/rtr/view');
    return respons.data;
  };
  
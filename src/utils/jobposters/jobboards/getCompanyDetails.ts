import axiosrecruiterinstance from "../../../axios/axiosrecruiterinstance";

export const fetchCompanies = async () => {
    const response = await axiosrecruiterinstance.get('/api/recruiter/company-management/companies');
    return response.data;
  };


  export const fetchOneCompany = async (id:number) => {
    const response = await axiosrecruiterinstance.get(`/api/recruiter/company-management/company?companyId=${id}`);
    return response.data;
  };
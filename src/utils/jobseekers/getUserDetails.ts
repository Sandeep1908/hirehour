import axiosInstance from '../../axios/axiosInstance';

export const fetchUserDetails = async () => {
  const response = await axiosInstance.get('/api/candidate/details/get-all-details');
  return response.data;
};

export const fetchSocialDetail = async () => {
  const response = await axiosInstance.get('/api/candidate/details/work');
  return response.data;
};

export const fetchUserDetail = async () => {
  const response = await axiosInstance.get('/api/candidate/details/get-details');
  return response.data;
};
export const fetchJobsList = async () => {
  const response = await axiosInstance.get('/api/candidate/jobs/jobs');
  return response.data;
};

export const fetchRoles = async () => {
  const respons = await axiosInstance.get('/api/misc/dropdown/jobroles');
  return respons.data;
};

export const fetchDomains = async () => {
  const respons = await axiosInstance.get('/api/misc/dropdown/domains');
  return respons.data;
};

export const fetchRoleTypes = async () => {
  const respons = await axiosInstance.get('/api/misc/dropdown/jobroletypes');
  return respons.data;
};


export const fetchResumes = async () => {
  const respons = await axiosInstance.get('/api/candidate/details/resumes');
  return respons.data;
};

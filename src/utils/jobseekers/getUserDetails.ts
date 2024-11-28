import axiosInstance from '../../axios/axiosInstance';

export const fetchUserDetails = async () => {
  const response = await axiosInstance.get('/api/candidate/details/get-all-details');
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

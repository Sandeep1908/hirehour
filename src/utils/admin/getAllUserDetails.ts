import axiosInstance from '../../axios/axiosadmin';

export const fetchAllUserDetails = async () => {
  const response = await axiosInstance.get('/api/admin/user-management/users');
  console.log(response)
  return response.data;
};



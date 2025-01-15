import axiosInstance from '../../axios/axiosInstance';

export const fetchAllJobPreferenceDetails = async () => {
  const response = await axiosInstance.get('/api/candidate/details/view-job-preference');
  return response.data;
};

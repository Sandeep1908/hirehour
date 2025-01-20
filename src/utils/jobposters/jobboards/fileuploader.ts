import axiosrecruiterinstance from '../../../axios/axiosrecruiterinstance';

export const fileUploader = async (formdata: FormData) => {
  const response = await axiosrecruiterinstance.post('/api/misc/uploader/upload', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

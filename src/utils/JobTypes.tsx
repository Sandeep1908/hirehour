import React from 'react';

import Select, { SingleValue } from 'react-select';
import axiosInstance from '../axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

type JobRolesProps = {
  setType: (e: number) => void;
};
type OptionType = {
  value: number;
  label: string;
};

const fetchJobTypes = async () => {
  const response = await axiosInstance.get('/api/misc/dropdown/jobroletypes');
  return response.data;
};

const JobTypes: React.FC<JobRolesProps> = ({ setType }) => {
  const { data: jobTypes } = useQuery({
    queryKey: ['jobtypes'],
    queryFn: fetchJobTypes,
  });

  const options = jobTypes?.jobRoles?.map((item: { typeName: string; id: number }) => {
    return {
      label: item?.typeName,
      value: item?.id,
    };
  });

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setType(e.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Select Role"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default JobTypes;

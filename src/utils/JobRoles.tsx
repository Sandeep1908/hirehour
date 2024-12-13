import React from 'react';

import Select, { SingleValue } from 'react-select';
import axiosInstance from '../axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

type JobRolesProps = {
  setRole: (e: number) => void;
};
type OptionType = {
  value: number;
  label: string;
};

const fetchRoles = async () => {
  const response = await axiosInstance.get('/api/misc/dropdown/jobroles');
  return response.data;
};

const JobRoles: React.FC<JobRolesProps> = ({ setRole }) => {
  const { data: jobRoles } = useQuery({
    queryKey: ['jobroles'],
    queryFn: fetchRoles,
  });

  const options = jobRoles?.jobRoles?.map((item: { roleName: string; id: number }) => {
    return {
      label: item?.roleName,
      value: item?.id,
    };
  });

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setRole(e.value);
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

export default JobRoles;

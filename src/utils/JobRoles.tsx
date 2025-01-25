import React, { useState, useEffect } from 'react';
import Select, { SingleValue } from 'react-select';
import axiosInstance from '../axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

type JobRolesProps = {
  setRole: (e: string) => void;
  JobRoleName?: string;
};
type OptionType = {
  value: string;
  label: string;
};

const fetchRoles = async () => {
  const response = await axiosInstance.get('/api/misc/dropdown/jobroles');
  return response.data;
};

const JobRoles: React.FC<JobRolesProps> = ({ setRole, JobRoleName }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(JobRoleName || null);
  const { data: jobRoles } = useQuery({
    queryKey: ['jobroles'],
    queryFn: fetchRoles,
  });

  const options = jobRoles?.jobRoles?.map((item: { roleName: string; id: number }) => {
    return {
      label: item?.roleName,
      value: item?.roleName,
    };
  });

 

  useEffect(() => {
    if (JobRoleName) {
      setSelectedRole(JobRoleName);
    }
  }, [JobRoleName]);

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setSelectedRole(e.value); // Update local state
      setRole(e.value); // Update parent component state
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        value={selectedRole ? { value: selectedRole, label: selectedRole } : null}
        placeholder="Select Role"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default JobRoles;

import React, { useState } from 'react';

import Select, { SingleValue } from 'react-select';
import axiosInstance from '../axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

type JobRolesProps = {
  setDomain: (e: string) => void;
  domainName?:string
};
type OptionType = {
  value: string;
  label: string;
};

const fetchDomains = async () => {
  const response = await axiosInstance.get('/api/misc/dropdown/domains');
  return response.data;
};

const Domains: React.FC<JobRolesProps> = ({ setDomain,domainName }) => {
  const { data: domains } = useQuery({
    queryKey: ['domains'],
    queryFn: fetchDomains,
  });

  const [selectedRole, setSelectedRole] = useState<string | null>(domainName || null);

   
  const options = domains?.domains?.map((item: { domainName: string; id: number }) => {
    return {
      label: item?.domainName,
      value: item?.domainName,
    };
  });

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setSelectedRole(e.value)
      setDomain(e.value);
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

export default Domains;

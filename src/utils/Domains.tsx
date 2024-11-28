import React from 'react';

import Select, { SingleValue } from 'react-select';
import axiosInstance from '../axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

type JobRolesProps = {
  setDomain: (e: number) => void;
};
type OptionType = {
  value: number;
  label: string;
};

const fetchDomains = async () => {
  const response = await axiosInstance.get('/api/misc/dropdown/domains');
  return response.data;
};

const Domains: React.FC<JobRolesProps> = ({ setDomain }) => {
  const { data: domains } = useQuery({
    queryKey: ['domains'],
    queryFn: fetchDomains,
  });

   
  const options = domains?.domains?.map((item: { domainName: string; id: number }) => {
    return {
      label: item?.domainName,
      value: item?.id,
    };
  });

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setDomain(e.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Select Role"
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default Domains;

import React from 'react';

import Select, { SingleValue } from 'react-select';
import { useQuery } from '@tanstack/react-query';
 
import {  fetchEmployers } from './jobboards/miscellaneous';

type Employer = {
  setEmployerId: (e: string) => void;
};

type OptionType = {
  value: string;
  label: string;
};

const AllEmployer: React.FC<Employer> = ({ setEmployerId }) => {
  const { data: employer } = useQuery({
    queryKey: ['employer'],
    queryFn: fetchEmployers,
  });

 

  const options = employer?.map((item: { firstName: string }) => {
    return {
      label: item?.firstName,
      value: item?.firstName
    };
  });

  

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setEmployerId(e.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Employer"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default AllEmployer;

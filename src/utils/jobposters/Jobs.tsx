import React from 'react';

import Select, { SingleValue } from 'react-select';
import { useQuery } from '@tanstack/react-query';
import { fetchPostedJob } from './jobboards/getJobs';

type CompanyProps = {
  setJobId: (e: number) => void;
};
type OptionType = {
  value: number;
  label: string;
};

const JobsList: React.FC<CompanyProps> = ({ setJobId }) => {
  const { data: jobs } = useQuery({
    queryKey: ['viewjobs'],
    queryFn: fetchPostedJob,
  });

 

  const options = jobs?.jobs?.map((item: { jobRoleName: string; id: number }) => {
    return {
      label: item?.jobRoleName,
      value: item?.id,
    };
  });

  

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setJobId(e.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Select Job"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default JobsList;

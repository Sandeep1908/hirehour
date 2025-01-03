import React from 'react';

import Select, { SingleValue } from 'react-select';
import { useQuery } from '@tanstack/react-query';
 
import { fetchApplicants } from './jobboards/miscellaneous';

type ApplicantsProps = {
  setCandidateId: (e: string) => void;
};

type OptionType = {
  value: string;
  label: string;
};

const AllApplicants: React.FC<ApplicantsProps> = ({ setCandidateId }) => {
  const { data: applicants } = useQuery({
    queryKey: ['applicants'],
    queryFn: fetchApplicants,
  });

 

  const options = applicants?.map((item: { firstName: string }) => {
    return {
      label: item?.firstName,
      value: item?.firstName
    };
  });

  

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setCandidateId(e.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Applicants"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default AllApplicants;

import React from 'react';

import Select, { SingleValue } from 'react-select';
import { useQuery } from '@tanstack/react-query';
import { fetchCompanies } from './jobboards/getCompanyDetails';

type CompanyProps = {
  setCompanyId: (e: number | null) => void;
};
type OptionType = {
  value: number;
  label: string;
};

const Companies: React.FC<CompanyProps> = ({ setCompanyId }) => {
  const { data: companies } = useQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  });

  const options = companies?.map((item: { companyName: string; id: number }) => {
    return {
      label: item?.companyName,
      value: item?.id,
    };
  });

  options?.push({
    value: 0,
    label: 'OHTER',
  });

  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setCompanyId(e.value);
    }
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Select Company"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default Companies;

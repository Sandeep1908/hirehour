// import React from 'react'
// import Select, { SingleValue } from 'react-select';
// import axiosInstance from '../axios/axiosInstance';
// import { useQuery } from '@tanstack/react-query';


// type SkillTypeProps = {
//     setSkillType: (e: number) => void;
//   };
//   type OptionType = {
//     value: number;
//     label: string;
//   };
  
//   const fetchSkillType = async () => {
//     const response = await axiosInstance.get('/api/misc/dropdown/skilltypes');
//     return response.data;
//   };

// const SkillTypes:React.FC<SkillTypeProps> = ({setSkillType}) => {
//       const { data: skilltypes } = useQuery({
//         queryKey: ['skilltypes'],
//         queryFn: fetchSkillType,
//       });
    
//       const options = skilltypes?.skillTypes?.map((item: { skillTypeName: string; id: number }) => {
//         return {
//           label: item?.skillTypeName,
//           value: item?.id,
//         };
//       });
    
//       const handleSelectChange = (e: SingleValue<OptionType>) => {
//         if (e?.value !== undefined) {
//             setSkillType(e.value);
//         }
//       };
//   return (
//     <div className="w-full">
//       <Select
//         options={options}
//         onChange={handleSelectChange}
//         placeholder="Select Skill Type"
//         className="react-select-container text-xs"
//         classNamePrefix="react-select"
//       />
//     </div>
//   )
// }


// export default SkillTypes


import React from 'react';
import Select, { SingleValue } from 'react-select';
import axiosInstance from '../axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

// Props for SkillTypes component
type SkillTypeProps = {
  setSkillType: (e: string) => void; // Function to set selected skill type
};

// Type for react-select options
type OptionType = {
  value: number;
  label: string;
};

// API function to fetch skill types
const fetchSkillType = async () => {
  const response = await axiosInstance.get('/api/misc/dropdown/skilltypes');
  return response.data;
};

// Main Component
const SkillTypes: React.FC<SkillTypeProps> = ({ setSkillType }) => {
  const { data: skilltypes } = useQuery({
    queryKey: ['skilltypes'],
    queryFn: fetchSkillType,
  });

  // Safely map fetched skill types into Select options
  const options: OptionType[] = skilltypes?.skillTypes?.map(
    (item: { skillTypeName: string; id: number }) => ({
      label: item?.skillTypeName,
      value: item?.id,
    })
  ) || [];

  // Handle the onChange event for the Select component
  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setSkillType(e.label); // Update selected skill type
    }
  };

 

  // Render the react-select dropdown
  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Select Skill Type"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
        isClearable
      />
    </div>
  );
};

export default SkillTypes;

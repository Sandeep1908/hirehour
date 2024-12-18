// import React from 'react'
// import Select, { SingleValue } from 'react-select';
// import axiosInstance from '../axios/axiosInstance';
// import { useQuery } from '@tanstack/react-query';


// type SkillNameProps = {
//     setSkillName: (e: string) => void;
//   };
//   type OptionType = {
//     label: string;
//     value: number;
//   };
  
//   const fetchSkillName = async () => {
//     const response = await axiosInstance.get('/api/misc/dropdown/skills');
//     return response.data;
//   };


// const SkillName:React.FC<SkillNameProps>  = ({setSkillName}) => {
//     const { data: skillName } = useQuery({
//     queryKey: ['skillName'],
//     queryFn: fetchSkillName,
//   });

//   const options = skillName?.skills?.map((item: { skillName: string; id: number }) => {
//     return {
//       label: item?.skillName,
//       // value: item?.id,
//     };
//   });

//   const handleSelectChange = (e: SingleValue<OptionType>) => {
//     if (e?.value !== undefined) {
//         setSkillName(e.value);
//     }
//   };
// return (
// <div className="w-full">
//   <Select
//     options={options}
//     onChange={handleSelectChange}
//     placeholder="Select Skill Name"
//     className="react-select-container text-xs"
//     classNamePrefix="react-select"
//   />
// </div>
// )
// }

// export default SkillName


import React from 'react';
import Select, { SingleValue } from 'react-select';
import axiosInstance from '../axios/axiosInstance';
import { useQuery } from '@tanstack/react-query';

// Props for the SkillName component
type SkillNameProps = {
  setSkillName: (e: string) => void; // Function to set selected skill name
};

// Type for each option in react-select
type OptionType = {
  label: string;
  value: number;
};

// API function to fetch skills
const fetchSkillName = async () => {
  const response = await axiosInstance.get('/api/misc/dropdown/skills');
  return response.data; // Assuming this returns a list of skills
};

// Main SkillName Component
const SkillName: React.FC<SkillNameProps> = ({ setSkillName }) => {
  // Fetch skill names using TanStack Query
  const { data: skillData } = useQuery({
    queryKey: ['skillName'],
    queryFn: fetchSkillName,
  });

  // Transform API data into react-select options
  const options: OptionType[] = skillData?.skills?.map(
    (item: { skillName: string; id: number }) => ({
      label: item?.skillName, // Display text
      value: item?.id,        // Unique value
    })
  ) || [];

  // Handle change event for the Select component
  const handleSelectChange = (e: SingleValue<OptionType>) => {
    if (e?.value !== undefined) {
      setSkillName(e.label); // Set the selected skill's label
    }
  };


  // Render the Select component
  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={handleSelectChange}
        placeholder="Select Skill Name"
        className="react-select-container text-xs"
        classNamePrefix="react-select"
        isClearable
      />
    </div>
  );
};

export default SkillName;

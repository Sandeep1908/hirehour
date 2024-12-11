import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

type JobAlertProps = {
    setJobAlertPopup:(agr:boolean) => void
 }

const AddJobAlert:React.FC<JobAlertProps> = ({setJobAlertPopup}) => {


   const employmentTypes = ['Full-time', 'Part-time'];
   type EmploymentType = typeof employmentTypes[number];
   
     const [selectedTypes, setSelectedTypes] = useState<EmploymentType[]>([]);
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const [isJobAlertChecked, setIsJobAlertChecked] = useState<boolean>(false);

   
     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
   
     const handleSelect = (type: EmploymentType) => {
       if (!selectedTypes.includes(type)) {
         setSelectedTypes([...selectedTypes, type]);
       }
     };
   
     const handleDeselect = (type: EmploymentType) => {
       setSelectedTypes(selectedTypes.filter((selectedType) => selectedType !== type));
     };
   


  return (
    <div className='w-full h-full flex p-3  justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
      <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

        <div className='max-w-[600px]  h-full md:h-auto w-full  bg-white rounded-lg  shadow-lg overflow-y-auto z-30'>
            <div className=' p-4 flex justify-between items-center'>
                 <p className='text-xl font-bold'>Add Job Alert</p>
                 <IoMdClose size={30}  className="cursor-pointer" onClick={()=>{setJobAlertPopup(false)}} />
            </div>
            <hr />
            <div className='w-full p-4'>
              
              <div className='border-[1px] rounded-lg p-3 border-black flex justify-between items-center'>
                <p className='text-[#3A3A3C] text-sm font-semibold'> Alert Active</p>
                <div>
                <label className="inline-flex items-center cursor-pointer outline-none">
                  <input
                    type="checkbox"
                    checked={isJobAlertChecked}
                    className="sr-only peer outline-none"
                    onChange={() => {setIsJobAlertChecked(!isJobAlertChecked)}}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#114B53]"></div>
                </label>
              </div>
              </div>
              <div>
              <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Job Tittle</p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Java Full stack </option>
                      <option value=""> Web Developer </option>
                   </select>                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Employment type </p>
                   <div className="relative inline-block w-full mt-2">
      <div
        className="flex items-center justify-between h-[40px] px-2 py-2 bg-white border rounded-xl cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap items-center gap-1">
          {selectedTypes.length === 0 ? (
            <span className="text-gray-400">Select types...</span>
          ) : (
            selectedTypes.map((type) => (
              <span
                key={type}
                className="flex items-center gap-1 justify-center px-3 py-1  bg-[#F2F2F5] text-[#6B7588] rounded-full text-xs"
              >
                {type}

                <RxCross2 size={12} className='mt-[2px] '
                 onClick={(e) => {
                  e.stopPropagation();
                  handleDeselect(type);
                }}
                 />

                {/* <span
                  className="ml-1 text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeselect(type);
                  }}
                >
                  &#10005;
                </span> */}
              </span>
            ))
          )}
        </div>
        <span className="ml-2">{isDropdownOpen ? <SlArrowUp size={10} /> : <SlArrowDown size={10} />      }</span>
      </div>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {employmentTypes.map((type) => (
            <div
              key={type}
              className="flex items-center px-4 py-2 cursor-pointer "
              onClick={() => handleSelect(type)}
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleSelect(type)}
                className="mr-2"
              />
              <span>{type}</span>
            </div>
          ))}
        </div>
      )}
    </div>        
                </div>
             </div>

          

              <div className='w-full flex gap-4 mt-5 flex-col md:flex-row'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Work mode </p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> On Site  </option>
                      <option value=""> Remote </option>
                   </select>                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Experience level </p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Associate Level </option>
                      <option value=""> Senior </option>
                   </select>
                                   </div>
             </div>
            <div className='w-full mt-5'>
            <p className='text-sm font-medium'>Salary preference</p>

            <div className='w-full flex gap-4 mt-1'>
                <div className='w-full '>
                   <p className='text-[12px] font-medium'>Min</p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> $80.00 </option>
                      <option value=""> $90.00 </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-[12px] font-medium'>Max </p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> $100.00</option>
                      <option value=""> $200.00</option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-[12px] font-medium'>Rate </p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Per Year</option>
                      <option value=""> 2 Year</option>
                   </select>
                </div>
             </div>
            </div>

             <div className='w-full flex gap-4 mt-5'>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Work authorization</p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> H1 Visa </option>
                      <option value=""> H2 Visa </option>
                   </select>
                </div>
                <div className='w-full '>
                   <p className='text-sm font-medium'>Location </p>
                   <select name="" id="" className='w-full h-[40px] text-xs rounded-xl border-[1px] border-[#E1E1E2] mt-2 px-4 ' >
                      <option value=""> Texas, US</option>
                      <option value=""> Londan, Uk</option>
                   </select>
                </div>
             </div>
              </div>

            </div>

            <hr />
            <div className='w-full flex justify-end p-4'>
                <div  className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full '>
                    <p className='text-sm font-semibold text-[#114B53]'>Add</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddJobAlert

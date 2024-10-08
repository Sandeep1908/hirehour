import React, { useEffect,  useState } from 'react'
import search_icon from '../../../assets/search-icon.svg'
import Location from '../../../assets/location.svg'
import Location2 from '../../../assets/location2.svg'
import JobCard from '../../../components/job-seekers/JobCard'
import Job_banner from '../../../assets/Rectangle.png'
// import { FaChevronUp } from "react-icons/fa6";
// import { FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io'
import Logo from '../../../assets/logo/hirehour.png';
import { LuUpload } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from 'react-icons/io5'
import Footer from '../../../components/Footer'
import { JobDescriptionDetails } from '../../../config/jobdescription'


const JobDescription: React.FC = () => {

    const [isQuickApply, setQuickApply] = useState<boolean>(false);
    const [isQuickApplyStep2, setQuickApplyStep2] = useState<boolean>(false);
    const [isQuickApplyStep3, setQuickApplyStep3] = useState<boolean>(false);
    const [isQuickApplyEdit, setQuickApplyEdit] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<number>(0);
   

    const [jobData, setJobData] = useState<jobDescriptionTypes[]>([]);
    const [jobDataId, setJobDataId] = useState<number>(1);
    const [jobFilterData, setFilterData] = useState<jobDescriptionTypes[]>([]);




    useEffect(() => {

     setJobData(JobDescriptionDetails)
    
     if(!jobFilterData){
        setFilterData([jobData[0]])
     }
       
   
    if(jobData && jobDataId){
        const filterData=jobData.filter(item=>item.id===jobDataId)
        setFilterData(filterData)
    }


    


    }, [jobDataId,jobData,setJobData]);



    const step2 = () => {
        setQuickApply(false);
        setQuickApplyStep2(true);
        setQuickApplyEdit(false);
    }
    const step3 = () => {
        setQuickApplyStep2(false);
        setQuickApplyStep3(true)
    }
    const editPop = () => {
        setQuickApplyStep2(false);
        setQuickApplyEdit(true)
    }
    const backToStep = () => {
        setQuickApplyStep2(false);
        setQuickApply(true)
    }
    const quickApplyDone = () => {
        setQuickApplyStep3(false);
    }



    // const [dropdown, setDropdown] = useState(0);
    const [selectedOptionMode, setSelectedOptionMode] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [selectedOptionQuickApply, setSelectedOptionQuickApply] = useState<boolean>(false);
    const [selectedOptionVisa, setSelectedOptionVisa] = useState<boolean>(false);
    const [selectedOptionEx, setSelectedOptionEx] = useState<string>("");
    const [selectedOptionDistance, setSelectedOptionDistance] = useState<string>("");
    const [selectedOptionSalary, setSelectedOptionSalary] = useState<string>("");
    const [selectedOptionEmployee, setSelectedOptionEmployee] = useState<string[]>([]); 

    const [isSelected, setIsSelected] = useState(0);

    const handleOptionMode = (value: string) => {
        setSelectedOptionMode(value);
        setDropdown(0);
      
    };
    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setDropdown(0);
        setIsSelected(1);
    };

    const handleOptionEx = (value: string) => {
        setSelectedOptionEx(value);
        setDropdown(0);
        // setIsSelected(2);
    };
    const handleOptionDistance = (value: string) => {
        setSelectedOptionDistance(value);
        setDropdown(0);
        setIsSelected(3);
    };
    const handleOptionSalary = (value: string) => {
        setSelectedOptionSalary(value);
        setDropdown(0);
        setIsSelected(5);
    };

    const handleReset = () => {
        setSelectedOptionDistance("");
        setDropdown(0);
        
    };
    const handleResetEx = () => {
        setSelectedOptionEx("");
        setDropdown(0);
        
    };
    const handleResetSalary = () => {
        setSelectedOptionSalary("");
            setDropdown(0);
        // setIsSelected(1);
    };
    const handleDropDown = () => {
        
            setDropdown(0);
            // alert("Please select")
      
    };



    const employmentTypes = [
        "Full time",
        "Contract - Corp to Corp(C2C)",
        "Contract to Hire(C2H)",
        "Contract - W-2",
        "Contract - 1099 / Independent",
        "Internships",
        "Temporary",
        "Part time"
    ];
    const handleCheckboxChange = (value:string) => {

        setSelectedOptionEmployee((prevSelected) => prevSelected.includes(value)
            ? prevSelected.filter((item) => item !== value)
            : [...prevSelected, value]
        );
    };
    const handleResetEmployee = () => {
        setSelectedOptionEmployee([]);
    };


    // const [isOpen, setIsOpen] = useState(true); 
    // const [height, setHeight] = useState('0px');
    // const contentRef = useRef(null);
  
    // const handleScroll = () => {
    //   if (window.scrollY > 300) {
    //     setIsOpen(false);
    //   }else{
    //     setIsOpen(true);
    //   }
    // };
  
    // useEffect(() => {
    //   // Set initial height to open the description
    //   setHeight(isOpen ? '225px' : '0px');
    // }, [isOpen]);
  
    // useEffect(() => {
    //   // Add scroll event listener
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  


    return (
        <>

            <div className='w-full h-full pb-10 bg-white'>
                <div className=' w-full max-w-[1280px] md:h-auto m-auto rounded-xl shadow-lg p-5'  >
                    <div className='w-full h-[60px] border-2 border-[##DFDFDF] rounded-xl flex flex-col md:flex-row justify-between px-4 py-2 md:py-0'>
                        <div className='flex md:justify-center items-center gap-2'>
                            <img src={search_icon} alt="" />
                            <p className='font-normal text-[#3A3A3C]'>UI/UX Designer</p>
                        </div>
                        <div className='flex md:justify-center items-center gap-2'>
                            <img src={Location} alt="" />
                            <p className='font-normal text-[#3A3A3C]'>Allen, TX, US</p>
                        </div>
                        <div className='hidden  md:flex justify-center items-center gap-4 '>
                            {/* <div className='relative'>


                                <div onClick={() => { setDropdownLoc(!dropdownLoc) }} className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                                    <p className="text-[14px] font-normal text-[#114B53]">Remote</p>
                                    <MdOutlineKeyboardArrowDown
                                        className={`${dropdownLoc ? 'rotate-180 transition-all duration-500' : ''}`}
                                    />
                                </div>
                                {dropdownLoc ?
                                    <div className='absolute top-12 left-0 w-[302px] h-5 '>

                                        <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg py-2' >
                                            <div className='w-full px-6 py-3 flex gap-2 '>

                                                <input type="radio" name="value1" id="" />
                                                <label htmlFor="" className='text-[#333333] text-base font-semibold'>All Jobs   </label>
                                            </div>
                                            <div className='w-full px-6 py-3 flex gap-2 '>

                                                <input type="radio" name="value1" id="" />
                                                <label htmlFor="" className='text-[#333333] text-base font-semibold'>Remote jobs</label>
                                            </div>
                                            <div className='w-full px-6 py-3 flex gap-2 '>

                                                <input type="radio" name="value1" id="" />
                                                <label htmlFor="" className='text-[#333333] text-base font-semibold'>Hybrid jobs</label>
                                            </div>
                                            <div className='w-full px-6 py-3 flex gap-2 '>

                                                <input type="radio" name="value1" id="" />
                                                <label htmlFor="" className='text-[#333333] text-base font-semibold'>onsite jobs</label>
                                            </div>
                                        </div>

                                    </div>
                                     : ""}

                            </div> */}

                            <div className='relative'>
                            <div onClick={() => setDropdown(6)} className={`flex justify-center items-center gap-2 px-4 py-1 border border-[#114B53] rounded-full 
                                  ${selectedOptionMode.length > 0 ? 'bg-[#114B53] text-white'  : 'bg-white text-[#114B53]'} transition-colors duration-500`}>
                                <p className="text-[14px] font-normal "> {selectedOptionMode ? selectedOptionMode : "Remote"} </p>
                                <MdOutlineKeyboardArrowDown onClick={() => setDropdown(0)} className={`${dropdown === 6 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 6 && (
                                <div className='absolute top-12 left-0 w-[302px] h-5 z-40'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg py-2' >
                                        {["All Jobs", "Remote jobs", "Hybrid jobs", "On Site jobs"].map(option => (
                                            // <div key={option} className='w-full px-4 py-3 flex gap-2' onClick={() => handleOptionClick(option)}>
                                            //     <input
                                            //         type="radio"
                                            //         name="value1"
                                            //         checked={selectedOption === option}
                                            //     //   onChange={() => handleOptionClick(option)}
                                            //     />
                                            //     <label className='text-[#333333] text-[12px] font-medium'>{option}</label>
                                            // </div>

                                             <div key={option}  className='w-full px-6 py-3 flex gap-2 ' onClick={() => handleOptionMode(option)}>

                                             <input type="radio" name="value1" id="" checked={selectedOptionMode === option} />
                                             <label htmlFor="" className='text-[#333333] text-base font-semibold'>{option}   </label>
                                         </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                            <div className='hidden  w-[300px] py-1 md:flex justify-center bg-[#114B53] rounded-full'>
                                <p className='text-white font-semibold'>Search</p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden  w-full md:flex flex-wrap mt-4 gap-3'>


                        <div className='relative z-[10]'>
                            <div onClick={() => setDropdown(1)} className={`flex justify-center items-center gap-2 px-4 py-1 border  rounded-full 
  ${isSelected === 1 ? 'bg-[#effefd] text-[#114B53] border-[#114B53]' : 'bg-white text-[#6B7588] border-[#6B7588]'} transition-colors duration-500`}>
                                <p  className="text-[12px] font-semibold "> {selectedOption ? selectedOption : "24 hours"} </p>
                                <MdOutlineKeyboardArrowDown onClick={handleDropDown} className={`${dropdown === 1 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 1 && (
                                <div className='absolute top-12 left-0 w-[140px]'>
                                    <div className='w-full  bg-[#FFFFFF] rounded-lg shadow-lg' >
                                        {["24 hours", "Past 3 days", "Past week", "Past month", "Anytime"].map(option => (
                                            <div key={option} className='w-full px-4 py-2 flex gap-2' onClick={() => handleOptionClick(option)}>
                                                <input
                                                    type="radio"
                                                    name="value1"
                                                    checked={selectedOption === option}
                                                //   onChange={() => handleOptionClick(option)}
                                                />
                                                <label className='text-[#333333] text-[12px] font-medium'>{option}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>


                    


                        <div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(2)}
                                className={`flex justify-center items-center gap-2 px-4 py-1 border rounded-full 
        ${selectedOptionEx.length > 0 ? 'bg-[#effefd] text-[#114B53] border-[#114B53]' : 'bg-white  text-[#6B7588] border-[#6B7588]'} transition-colors duration-500`}
                            >
                                <p className="text-[12px] font-semibold"> {selectedOptionEx ? selectedOptionEx : "Experience Level"}</p>
                                <MdOutlineKeyboardArrowDown className={`${dropdown === 2 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 2 && (
                                <div className='absolute top-12 left-0 w-[194px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                        {[
                                            "Entry level", "Associate level", "Mid-Senior level", "Lead level", "Manager/ Director Level"
                                        ].map((option) => (
                                            <div key={option} onClick={() => handleOptionEx(option)} className='w-full px-4 py-2 flex gap-2'>
                                                <input
                                                    type="radio"
                                                    name="distance"
                                                    checked={selectedOptionDistance === option}
                                                //   onChange={() => handleOptionDistance(distance)}
                                                />
                                                <label className='text-[#333333] text-[12px] font-medium'>{option}</label>
                                            </div>
                                        ))}
                                        <div className='w-full px-6 py-2 flex justify-end'>
                                            <button onClick={handleResetEx} className='text-[14px] text-[#114B53] font-semibold cursor-pointer'>
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(3)}
                                className={`flex justify-center items-center gap-2 px-4 py-1 border  rounded-full 
        ${selectedOptionDistance.length > 0 ? 'bg-[#effefd] text-[#114B53] border-[#114B53]' : 'bg-white text-[#6B7588] border-[#6B7588]'} transition-colors duration-500`}
                            >
                                <p className="text-[12px] font-semibold"> {selectedOptionDistance ? selectedOptionDistance : "Distance"}</p>
                                <MdOutlineKeyboardArrowDown className={`${dropdown === 3 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 3 && (
                                <div className='absolute top-12 left-0 w-[194px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                        {[
                                            "Any distance", "Less than 5 miles", "Less than 10 miles", "Less than 25 miles", "Less than 50 miles","Less than 100 miles"
                                        ].map((option) => (
                                            <div key={option} onClick={() => handleOptionDistance(option)} className='w-full px-4 py-2 flex gap-2'>
                                                <input
                                                    type="radio"
                                                    name="distance"
                                                    checked={selectedOptionDistance === option}
                                                //   onChange={() => handleOptionDistance(distance)}
                                                />
                                                <label className='text-[#333333] text-[12px] font-medium'>{option}</label>
                                            </div>
                                        ))}
                                        <div className='w-full px-6 py-2 flex justify-end'>
                                            <button onClick={handleReset} className='text-sm text-[#114B53] font-semibold cursor-pointer'>
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* <div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(3)}
                                className={`flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
        ${selectedOptionDistance.length > 0 ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
                            >
                                <p className="text-[14px] font-normal text-[#114B53]">Distance</p>
                                <MdOutlineKeyboardArrowDown className={`${dropdown === 3 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 3 && (
                                <div className='absolute top-12 left-0 w-[194px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                        {[
                                            "Any distance",
                                            "Less than 5 miles",
                                            "Less than 10 miles",
                                            "Less than 25 miles",
                                            "Less than 50 miles",
                                            "Less than 100 miles"
                                        ].map((distance) => (
                                            <div key={distance} onClick={() => handleOptionDistance(distance)} className='w-full px-4 py-3 flex gap-2'>
                                                <input
                                                    type="radio"
                                                    name="distance"
                                                    checked={selectedOptionDistance === distance}
                                                //   onChange={() => handleOptionDistance(distance)}
                                                />
                                                <label className='text-[#333333] text-[12px] font-medium'>{distance}</label>
                                            </div>
                                        ))}
                                        <div className='w-full px-6 py-4 flex justify-end'>
                                            <button onClick={handleReset} className='text-base text-[#114B53] font-semibold cursor-pointer'>
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> */}



                        <div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(4)}
                                className={`${selectedOptionEmployee.length > 0 ?"bg-[#effefd] text-[#114B53] border-[#114B53]" :"bg-white text-[#6B7588] border-[#6B7588]"}  flex justify-center items-center gap-2 px-4 py-1 border  rounded-full`}
                            >
                                <div className="text-[12px] font-semibold flex gap-2">
                                    <p>Employment type</p>
                                    {selectedOptionEmployee.length > 0 && (
                                        <div className='bg-[#114B53] w-[18px] h-[18px] text-[10px] rounded-full text-white flex justify-center items-center'>
                                            {selectedOptionEmployee.length}
                                        </div>
                                    )}
                                </div>
                                <MdOutlineKeyboardArrowDown className={`${dropdown === 4 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 4 && (
                                <div className='absolute top-12 left-0 w-[269px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                        {employmentTypes.map((type) => (
                                            <div key={type} onClick={() => handleCheckboxChange(type)} className='w-full px-4 py-2 flex gap-2'>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedOptionEmployee.includes(type)}
                                                //   onChange={() => handleCheckboxChange(type)}
                                                />
                                                <label className='text-[#333333] text-[12px] font-medium'>{type}</label>
                                            </div>
                                        ))}
                                        <div className='w-full  flex gap-2 px-4 py-3 justify-end'>
                                            <div className='px-4 py-1 bg-[#E9F358] rounded-full cursor-pointer' onClick={() => setDropdown(0)}>
                                                <p className='text-sm text-[#114B53] font-semibold'> Apply</p>
                                            </div>
                                            <button onClick={handleResetEmployee} className='text-sm text-[#114B53] font-semibold cursor-pointer'>
                                                <p onClick={() => setDropdown(0)}>Reset</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>



                        <div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(5)}
                                className={`flex justify-center items-center gap-2 px-4 py-1 border  rounded-full 
        ${selectedOptionSalary.length > 0 ? 'bg-[#effefd] text-[#114B53] border-[#114B53]' : 'bg-white text-[#6B7588] border-[#6B7588]'} transition-colors duration-500`}
                            >
                                <p className="text-[12px] font-semibold "> {selectedOptionSalary ? selectedOptionSalary : "Salary"}</p>
                                <MdOutlineKeyboardArrowDown className={`${dropdown === 5 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 5 && (
                                <div className='absolute top-12 left-0 w-[194px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                        {[
                                           "$ 40,000 +/ per year",
                                            "$ 60,000 +/ per year",
                                            "$ 80,000 +/ per year",
                                            "$ 100,000 +/ per year",
                                            "$ 120,000 +/ per year",
                                            "$ 140,000 +/ per year",
                                            "$ 160,000 +/ per year",
                                            "$ 180,000 +/ per year",
                                            "$ 200,000 +/ per year"
                                        ].map((option) => (
                                            <div key={option} onClick={() => handleOptionSalary(option)} className='w-full px-4 py-2 flex gap-2'>
                                                <input
                                                    type="radio"
                                                    name="distance"
                                                    checked={selectedOptionSalary === option}
                                                //   onChange={() => handleOptionDistance(distance)}
                                                />
                                                <label className='text-[#333333] text-[12px] font-medium'>{option}</label>
                                            </div>
                                        ))}
                                        <div className='w-full px-6 py-2 flex justify-end'>
                                            <button onClick={handleResetSalary} className='text-sm text-[#114B53] font-semibold cursor-pointer'>
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* <div className='relative z-[20]'>
                            <div
                                onClick={() => setDropdown(5)}
                                className={`flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full 
        ${selectedOptionSalary.length > 0  ? 'bg-[#effefd]' : 'bg-white'} transition-colors duration-500`}
                            >
                                <p className="text-[14px] font-normal text-[#114B53]">Salary</p>
                                <MdOutlineKeyboardArrowDown className={`${dropdown === 3 ? 'rotate-180 transition-all duration-500' : ''}`} />
                            </div>

                            {dropdown === 5 && (
                                <div className='absolute top-12 left-0 w-[194px]'>
                                    <div className='w-full bg-[#FFFFFF] rounded-lg shadow-lg'>
                                        {[
                                            "$ 40,000 +/ per year",
                                            "$ 60,000 +/ per year",
                                            "$ 80,000 +/ per year",
                                            "$ 100,000 +/ per year",
                                            "$ 120,000 +/ per year",
                                            "$ 140,000 +/ per year",
                                            "$ 160,000 +/ per year",
                                            "$ 180,000 +/ per year",
                                            "$ 200,000 +/ per year"
                                        ].map((salary) => (
                                            <div key={salary} onClick={() => handleOptionSalary(salary)} className='w-full px-4 py-3 flex gap-2'>
                                                <input
                                                    type="radio"
                                                    name="distance"
                                                    checked={selectedOptionSalary === salary}
                                                //   onChange={() => handleOptionDistance(distance)}
                                                />
                                                <label className='text-[#333333] text-[12px] font-medium'>{salary}</label>
                                            </div>
                                        ))}
                                        <div className='w-full px-6 py-4 flex justify-end'>
                                            <button onClick={handleResetSalary} className='text-base text-[#114B53] font-semibold cursor-pointer'>
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> */}

                       

                        <div onClick={()=>{setSelectedOptionQuickApply(!selectedOptionQuickApply)}} className={`${selectedOptionQuickApply ?"bg-[#effefd] text-[#114B53] border-[#114B53]":"text-[#6B7588] border-[#6B7588] bg-white"} flex justify-center items-center gap-2 px-4 py-1 border  rounded-full cursor-pointer`}>
                            <p className="text-[12px] font-semibold">Quick Apply</p>
                        </div>
                        <div onClick={()=>{setSelectedOptionVisa(!selectedOptionVisa)}} className={`${selectedOptionVisa ? "bg-[#effefd] text-[#114B53] border-[#114B53]":"text-[#6B7588] border-[#6B7588] bg-white"} flex justify-center items-center gap-2 px-4 py-1 border border-[#114B53] rounded-full cursor-pointer`}>
                            <p className="text-[12px] font-semibold ">Visa Sponsorship</p>
                        </div>
                        <div className="flex justify-center items-center gap-2 px-4 py-1 border text-[#6B7588] border-[#6B7588] bg-white rounded-full">
                            <p className="text-[12px] font-semibold">All Filters</p>
                            <CiFilter className='text-[#6B7588]' />

                        </div>





                    </div>

                </div>

                {/* Job Cards And Job Description */}


                <div className='w-fullh-full sticky top-[10px]'>
                <div id='mainJobDescription' className='w-full max-w-[1280px] m-auto   h-full flex justify-center md:justify-between pt-7  md:px-0'>

                    {/* Job Card Component */}

                    <div className=' md:max-w-[411px] md:w-full ' id='job-card'>
                        <div className=' w-full h-[840px] overflow-y-auto'>
                            <p className='text-[12px] '><span className='font-extrabold'>Upload Your Resume -</span> Let employers find you.</p>
                            <p className='text-[12px] mt-2 '><span className='font-extrabold'> 400+ Jobs</span> showing result for UI/UX Jobs , Allen, TX, US</p>
                            <div className='mt-4 flex flex-col gap-4 justify-center'>
                                {jobData.map((details, id) => (
                                    <JobCard key={id} setIsOpen={setQuickApply} data={details} setId={setJobDataId} jobDataId={jobDataId} />
                                ))}

                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-28 justify-end mt-4'>
                                <div className='flex gap-2'>
                                    <div className='w-[30px] h-[30px] rounded-lg bg-[#F2F2F5] flex justify-center items-center'>
                                        <p className='text-base text-[#114B53] '>1</p>
                                    </div>
                                    <div className='w-[30px] h-[30px] rounded-lg  flex justify-center items-center'>
                                        <p className='text-base text-[#6B7588] '>2</p>
                                    </div>
                                    <div className='w-[30px] h-[30px] rounded-lg  flex justify-center items-center'>
                                        <p className='text-base text-[#6B7588] '>3</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 justify-center items-center'>
                                    <p className='text-base text-[#6B7588] '>Next</p>
                                    <FaArrowRight className='text-[#6B7588]' />

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Description  */}

               <div className='hidden md:block max-w-[845px] w-full'  >
               {jobFilterData.map((details,id)=>{
                        return(
                            <div key={id} className=' max-w-[845px]   w-full rounded-lg  border'>
                                <div className='w-full min-h-[100vh]'>
                                <div className=' w-full  '>
                                <div className='w-full shadow-lg '>
                                    <img src={Job_banner} alt="" />
                                    <div className='w-[95%] m-auto transition-all ease-in-out duration-1000'>
                                        <div className=' flex  justify-between '>
                                            <div className='flex gap-2 items-center'>
                                                <div className='relative w-[100px] h-[100px] '>

                                                    <img className='absolute top-[-20px]  w-full h-full' src={details.img} alt="" />
                                                </div>
                                                <div>
                                                    <p className='font-bold text-[20px]'>{details.title}</p>
                                                    <ul className='flex list-disc gap-8 text-sm mt-1'>
                                                        <li>{details.company}</li>
                                                        <li>{details.designation}</li>
                                                        <li>{details.location}</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center gap-4">
                                                <p className="text-[#A9A9A9] text-[12px] font-normal ">Posted 1 day ago</p>
                                                <div className=" px-6 py-2 bg-[#E9F358] rounded-full">
                                                    <p className="text-[#114B53] text-sm font-semibold">Quick Apply</p>
                                                </div>
                                            </div>
                                        </div>


                                        {/* <div className="job-description my-4">

                                     <div
                                        ref={contentRef}
                                        style={{ height: height }}
                                        className="overflow-hidden transition-height duration-700 ease-in-out"
                                    >
                                        <div className="description">
                                        <div className={`w-full  transition-all ease-in-out duration-700    `} >
                                            <div className={`flex h-auto relative transition-all delay-75   `}>
                                                <div className='flex flex-col gap-4 mt-2 max-w-[350px] w-full'>

                                                    <div className='flex gap-2'>
                                                        <img src={Location2} alt="" />
                                                        <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                            <p className='text-[12px]'>{details.mode}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <img src={Location2} alt="" />
                                                        <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                            <p className='text-[12px]'>{details.pay} / hours</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <img src={Location2} alt="" />
                                                        <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                            <p className='text-[12px]'>{details.workTime}</p>
                                                        </div>
                                                    </div>


                                                </div>

                                                <div className='border  bg-[#D6DBDE] '>

                                                </div>


                                                <div className={`flex flex-col  gap-7 ml-4 justify-center  `}>

                                                    <div className=''>

                                                        <p className='text-[14px] text-[#3A3A3C] font-semibold'>Employment Type</p>

                                                        <div className='flex gap-2 mt-3'>

                                                            <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                <p className='text-[12px] text-[#3A3A3C] font-medium'>Crop to Crop </p>
                                                            </div>
                                                            <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                <p className='text-[12px] text-[#3A3A3C] font-medium'>Contract to Hire </p>
                                                            </div>
                                                            <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                <p className='text-[12px] text-[#3A3A3C] font-medium'>Contract W2 </p>
                                                            </div>


                                                        </div>

                                                    </div>




                                                    <div className=''>

                                                        <p className='text-[14px] text-[#3A3A3C] font-semibold'>Accepting Work Authorization    </p>

                                                        <div className='flex gap-2 mt-3'>
                                                            {details.workAuthorization.map((value, id) => (
                                                                <div key={id} className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                    <p className='text-[12px] text-[#3A3A3C] font-medium'>{value} </p>
                                                                </div>
                                                            ))}

                                                         
                                                        </div>

                                                    </div>



                                                </div>
                                            </div>

                                            <div className={`mt-4 delay-75 `}>

                                                <p className='text-[14px] font-semibold'>Tech Stacks</p>

                                                <div className='flex gap-2 mt-1'>
                                                    {details.techStacks.map((value, id) => (
                                                        <div key={id} className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                                            <p className='text-[12px] font-semibold'>{value} </p>
                                                        </div>
                                                    ))}

                                                  

                                                </div>

                                            </div>
                                        </div>
                                        </div>
                                    </div> 
                                    </div> */}

                                     




                                       



                                        {/* <div className='w-full flex justify-center items-center mt-8' >
                                            <FaChevronUp className={`${!isOpen ? "hidden" : ""}`} onClick={() => { setIsOpen(!isOpen) }} />

                                            <FaChevronDown className={`${isOpen ? "hidden" : ""}`} onClick={() => { setIsOpen(!isOpen) }} />

                                        </div> */}



                                    </div>
                                </div>

                             
                                      

                                <div className='p-5 overflow-x-hidden overflow-y-auto h-[550px] '>
                                <div
                                        
                                        className="overflow-hidden transition-height duration-700 ease-in-out "
                                    >
                                        <div className="description">
                                        <div className={`w-full  transition-all ease-in-out duration-700    `} >
                                            <div className={`flex h-auto relative transition-all delay-75   `}>
                                                <div className='flex flex-col gap-4 mt-2 max-w-[350px] w-full'>

                                                    <div className='flex gap-2'>
                                                        <img src={Location2} alt="" />
                                                        <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                            <p className='text-[12px]'>{details.mode}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <img src={Location2} alt="" />
                                                        <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                            <p className='text-[12px]'>{details.pay} / hours</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex gap-2'>
                                                        <img src={Location2} alt="" />
                                                        <div className=' px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                            <p className='text-[12px]'>{details.workTime}</p>
                                                        </div>
                                                    </div>


                                                </div>

                                                <div className='border  bg-[#D6DBDE] '>

                                                </div>


                                                <div className={`flex flex-col  gap-7 ml-4 justify-center  `}>

                                                    <div className=''>

                                                        <p className='text-[14px] text-[#3A3A3C] font-semibold'>Employment Type</p>

                                                        <div className='flex gap-2 mt-3'>

                                                            <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                <p className='text-[12px] text-[#3A3A3C] font-medium'>Crop to Crop </p>
                                                            </div>
                                                            <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                <p className='text-[12px] text-[#3A3A3C] font-medium'>Contract to Hire </p>
                                                            </div>
                                                            <div className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                <p className='text-[12px] text-[#3A3A3C] font-medium'>Contract W2 </p>
                                                            </div>


                                                        </div>

                                                    </div>




                                                    <div className=''>

                                                        <p className='text-[14px] text-[#3A3A3C] font-semibold'>Accepting Work Authorization    </p>

                                                        <div className='flex gap-2 mt-3'>
                                                            {details.workAuthorization.map((value, id) => (
                                                                <div key={id} className='px-4 py-1 bg-[#F2F2F5] rounded-full'>
                                                                    <p className='text-[12px] text-[#3A3A3C] font-medium'>{value} </p>
                                                                </div>
                                                            ))}

                                                         
                                                        </div>

                                                    </div>



                                                </div>
                                            </div>

                                            <div className={`mt-4 delay-75 `}>

                                                <p className='text-[14px] font-semibold'>Tech Stacks</p>

                                                <div className='flex gap-2 mt-1'>
                                                    {details.techStacks.map((value, id) => (
                                                        <div key={id} className='px-4 py-1 bg-[#CAFDFC] rounded-full'>
                                                            <p className='text-[12px] font-semibold'>{value} </p>
                                                        </div>
                                                    ))}

                                                  

                                                </div>

                                            </div>
                                        </div>
                                        </div>
                                    </div> 
                                    <p className='text-base font-semibold mt-5'>Summary</p>
                                    <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>{details.summary}</p>

                                    <p className='text-base font-semibold mt-3'>Job description</p>
                                    <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>{details.jobDescription}</p>

                                    <p className='text-base font-semibold mt-3'>Additional benefits</p>
                                    <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>{details.additionalBenefits}</p>

                                    <p className='text-base font-semibold mt-3'>Notes</p>
                                    <p className='text-sm text-[#3A3A3C] mt-3 text-justify'>{details.notes}</p>

                                    <div className='w-full flex justify-between items-center mt-10'>
                                        <p className='text-[#8F90A6] text-xs font-normal '>Posted 1 day ago</p>
                                        <div className=' px-6 py-2 bg-[#114B53] rounded-full'>
                                            <p className='text-white text-sm font-semibold'>Report</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                          

                        </div>
                        )
                      
                    })}
               </div>

                    

                </div>
                </div>



                {/* Screening Questions  */}
                <div
                    className={`w-full h-full flex p-3 md:p-3    justify-center items-center  fixed inset-0 transition-all duration-500 ${isQuickApply ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
                >
                    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
                    <div className='max-w-[600px] h-full md:h-auto w-full bg-white rounded-lg overflow-auto z-[30]'>
                        <div className=' p-4  flex justify-between items-center'>
                            <p className='text-base font-bold'>Apply to xyz Company</p>
                            <IoMdClose size={30} onClick={() => { setQuickApply(false) }} className="cursor-pointer" />
                        </div>
                        <hr />
                        <div className='w-full p-4'>


                            <div className="w-full flex justify-between items-center">
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center'>
                                        <p className='text-[12px] text-white font-semibold'>1</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#114B53]'>Screening Questions</p>
                                </div>
                                <div className='border-t-[1px] max-w-[30px] w-full border-dashed border-[#C7C9D9]'>

                                </div>
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#C7C9D9] rounded-full flex justify-center items-center'>
                                        <p className='text-[12px] text-white font-semibold'>2</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#C7C9D9]'>Review Application</p>
                                </div>
                                <div className='border-t-[1px] max-w-[30px] w-full border-dashed border-[#C7C9D9]'>

                                </div>
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#C7C9D9] rounded-full flex justify-center items-center'>
                                        <p className='text-[12px] text-white font-semibold'>3</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#C7C9D9]'>Applied Successfully</p>
                                </div>
                            </div>


                            <p className='text-base font-semibold mt-5'>
                                Screening Questions
                            </p>
                            <p className='text-[12px] font-normal mt-2'>
                                Answer the Screening questions
                            </p>

                            <div className='mt-5'>
                                <label htmlFor="" className='text-[14px] font-medium'>How many years of experience do you have in Java ? ( in years) <span className='text-red-600'> *</span></label>
                                <input type="text" className='w-full h-[40px] mt-2 border-[1px] rounded-lg' />
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="" className='text-[14px] font-medium'>Can you able to Relocate the Job Location ? <span className='text-red-600'> *</span></label>
                                {/* <input type="text" className='w-full h-[40px] mt-2 border-[1px] rounded-lg' /> */}
                                <select name="" id="" className='w-full h-[40px] mt-2 border-[1px] rounded-lg'>
                                    <option value="">Select an option</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>
                            <div className='mt-5'>
                                <label htmlFor="" className='text-[14px] font-medium'>Immediate Joiner ? <span className='text-red-600'> *</span></label>
                                {/* <input type="text" className='w-full h-[40px] mt-2 border-[1px] rounded-lg' /> */}
                                <select name="" id="" className='w-full h-[40px] mt-2 border-[1px] rounded-lg'>
                                    <option value="">Select an option</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                            </div>

                        </div>
                        <hr />
                        <div className='w-full flex justify-end p-4'>
                            <div onClick={step2} className='bg-[#E9F358] w-[120px] h-[32px] flex justify-center items-center rounded-full cursor-pointer'>
                                <p className='text-sm font-semibold text-[#114B53]'>Continue</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Review your application 2 */}
                <div
                    className={`w-full h-full flex p-3 md:p-3 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-500 ${isQuickApplyStep2 ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
                >
                    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

                    <div className='z-[30] max-w-[600px] w-full h-full bg-white rounded-lg overflow-auto relative top-[0px]'>
                        <div className=' p-4  flex justify-between items-center'>
                            <p className='text-base font-bold'>Apply to xyz Company</p>
                            <IoMdClose size={30} onClick={() => { setQuickApplyStep2(false) }} className="cursor-pointer" />
                        </div>
                        <hr />
                        <div className='w-full p-4'>


                            <div className="w-full flex justify-between items-center">
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center'>
                                        <p className='text-[14px] text-white font-semibold'>1</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#114B53]'>Screening Questions</p>
                                </div>
                                <div className='border-t-[1px] max-w-[30px] w-full border-dashed border-[#114B53]'>

                                </div>
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center'>
                                        <p className=' text-[14px] text-white font-semibold'>2</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#114B53]'>Review Application</p>
                                </div>
                                <div className='border-t-[1px] max-w-[30px] w-full border-dashed border-[#C7C9D9]'>

                                </div>
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#C7C9D9] rounded-full flex justify-center items-center'>
                                        <p className='text-[14px] text-white font-semibold'>3</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#C7C9D9]'>Applied Successfully</p>
                                </div>
                            </div>


                            <p className='text-base font-semibold mt-5'>
                                Review your application
                            </p>
                            <p className='text-[10px] font-normal mt-1'>
                                Before Submit please review carefully
                            </p>

                            <div className='w-full mt-3'>
                                <div className='w-full flex flex-col md:flex-row gap-5'>
                                    <div className='md:max-w-[276px] w-full border-[1px] border-[#D6DBDE] rounded-lg px-3 py-2 md:px-3 md:py-2 '>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-sm font-semibold'>Personal Information</p>
                                            <div onClick={editPop} className='cursor-pointer text-base font-semibold flex items-center gap-2 text-[#114B53]'><FaRegEdit />
                                                <p className='text-sm'>Edit</p></div>
                                        </div>
                                        <hr className='mt-3' />
                                        <div className='flex flex-col justify-center items-center mt-3'>
                                            <div className='w-[100px] h-[100px] rounded-full bg-[#CBFFFC] flex justify-center items-center '>
                                                <p className='text-[40px] font-extrabold'>J</p>
                                            </div>
                                            <p className='text-base font-semibold mt-3'>John S Mathew</p>
                                        </div>
                                        <hr className='mt-3' />
                                        <div className='mt-3 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 '>
                                                <MdOutlineMail size={20} />

                                                <p className='text-sm font-medium text-[#3A3A3C] '>John@xyz.com</p>
                                            </div>

                                        </div>
                                        <div className='mt-3 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 '>
                                                <IoCallOutline size={20} />

                                                <p className='text-sm font-medium text-[#3A3A3C] '>+1 xxx-xxx-xxxx</p>
                                            </div>

                                        </div>
                                        <p className='text-sm font-medium text-[#8F90A6] mt-3'>Visa sponsorship</p>
                                        <p className='text-sm font-semibold text-[#000000] mt-2'>Required</p>
                                    </div>
                                    <div className='md:max-w-[276px] w-full border-[1px] border-[#D6DBDE] rounded-lg px-2 py-3 md:px-3 md:py-2'>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-sm font-semibold hidden md:block'>Resume</p>
                                            <div className='flex flex-row-reverse md:flex-row items-center justify-between gap-2'>
                                                <div className=' text-xs font-semibold flex items-center gap-2 px-2 py-1 border-2 border-[#114B53] rounded-full'> <LuUpload size={15} />
                                                    <p className=''>upload resume</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-[#8F90A6] text-[10px] text-end mt-2'>Pdf, Doc, DocX (2MB)</p>

                                        <hr className='mt-2' />
                                        <div className='flex flex-col gap-4 mt-2'>
                                            <div className='w-full border-2 border-black rounded-xl flex'>
                                                <div className='w-[60px] bg-[#E3EDFF] flex justify-center items-center rounded-tl-lg rounded-bl-lg'>
                                                    <p className='text-[#1F4AF1] text-sm font-bold'>PDF</p>
                                                </div>
                                                <div className='w-full flex justify-between items-center px-3 py-2'>
                                                    <div>
                                                        <p className='text-black text-sm font-medium'>Resume 1</p>
                                                        <p className='text-[#6B7588] text-[10px] font-medium mt-1'> Selected Resume</p>
                                                    </div>
                                                    <div className='flex gap-4'>
                                                        {/* <p className='text-[#114B53] text-[12px] font-semibold'> Preview</p> */}
                                                        <RiDeleteBin6Line size={20} />



                                                    </div>
                                                </div>
                                            </div>

                                            <div className='w-full border-2 border-black rounded-xl flex'>
                                                <div className='w-[60px] bg-[#E3EDFF] flex justify-center items-center rounded-tl-lg rounded-bl-lg'>
                                                    <p className='text-[#1F4AF1] text-sm font-bold'>PDF</p>
                                                </div>
                                                <div className='w-full flex justify-between items-center px-3 py-2'>
                                                    <div>
                                                        <p className='text-black text-sm font-medium'>Resume 1</p>
                                                        <p className='text-[#6B7588] text-[10px] font-medium mt-1'> Selected Resume</p>
                                                    </div>
                                                    <div className='flex gap-4'>
                                                        {/* <p className='text-[#114B53] text-[12px] font-semibold'> Preview</p> */}
                                                        <RiDeleteBin6Line size={20} />



                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='w-full border-[1px] border-[#D6DBDE] rounded-lg px-5 py-3 md:px-4 md:py-3 mt-5'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[14px] md:text-base font-semibold'>Screening Questions</p>
                                        <div onClick={backToStep} className=' cursor-pointer text-base font-semibold flex items-center gap-2 text-[#114B53]'><FaRegEdit />
                                            <p className='text-base'>Edit</p></div>
                                    </div>
                                    <hr className='mt-3' />

                                    <p className='text-[#8F90A6] text-[12px] md:text-[14px] font-normal mt-3'>How many years of experience do you have in Java ? ( in years)</p>
                                    <p className='text-[#000000] text-[12px] md:text-[14px] font-normal mt-2'>4 years</p>
                                    <p className='text-[#8F90A6] text-[12px] md:text-[14px] font-normal mt-5'>Can you able to Relocate the Job Location ?</p>
                                    <p className='text-[#000000] text-[12px] md:text-[14px] font-normal mt-2'>Yes</p>

                                    <p className='text-[#8F90A6] text-[12px] md:text-[14px] font-normal mt-5'>Immediate Joiner ?</p>
                                    <p className='text-[#000000] text-[12px] md:text-[14px] font-normal mt-2'>Yes</p>

                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className='w-full flex justify-end p-3 gap-10  items-center'>
                            <p onClick={backToStep} className='cursor-pointer text-[#114B53] font-semibold text-sm'> Back</p>
                            <div onClick={step3} className='bg-[#E9F358] w-[120px] h-[32px] flex justify-center items-center rounded-full cursor-pointer '>
                                <p className='text-sm font-semibold text-[#114B53] cursor-pointer'>Continue</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Applied Successfully 3 */}
                <div
                    className={`w-full h-full flex p-3 md:p-0 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-500 ${isQuickApplyStep3 ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
                >
                    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>


                    <div className='z-[30] max-w-[600px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px]'>
                        <div className='p-4  flex justify-between items-center'>
                            <p className='text-base font-bold'>Apply to xyz Company</p>
                            <IoMdClose size={30} onClick={() => { setQuickApplyStep3(false) }} className="cursor-pointer" />
                        </div>
                        <hr />
                        <div className='w-full p-4 '>


                            <div className="w-full flex justify-between items-center">
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center'>
                                        <p className='text-base text-white font-semibold'>1</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#114B53]'>Screening Questions</p>
                                </div>
                                <div className='border-t-[1px] max-w-[30px] w-full border-dashed border-[#114B53]'>

                                </div>
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center'>
                                        <p className='text-base text-white font-semibold'>2</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#114B53]'>Review Application</p>
                                </div>
                                <div className='border-t-[1px] max-w-[30px] w-full border-dashed border-[#114B53]'>

                                </div>
                                <div className='w-[167px] flex justify-center items-center gap-2'>
                                    <div className='w-8 h-8 bg-[#114B53] rounded-full flex justify-center items-center'>
                                        <p className='text-base text-white font-semibold'>3</p>
                                    </div>
                                    <p className='hidden md:block text-[12px] font-medium text-[#114B53]'>Applied Successfully</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-center items-center p-4'>
                            <p className='text-[14px]  font-semibold text-[#3A3A3C] mt-2'>Applied Successfully</p>
                            <img className='mt-5' src={Logo} alt="" />
                            <p className='text-[14px]  font-semibold text-[#3A3A3C] mt-5'>Your application was submitted to xyz company</p>
                            <p className='text-[12px]  font-normal text-[#6B7588] mt-2'>You can track you application any time from my jobs</p>
                        </div>

                        <div className='w-full flex justify-center p-4'>
                            <div onClick={quickApplyDone} className='cursor-pointer bg-[#E9F358] w-[120px] h-[32px] flex justify-center items-center rounded-full '>
                                <p className='text-sm font-semibold text-[#114B53]'>Done</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Edit Personal Information */}
                <div
                    className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isQuickApplyEdit ? 'opacity-1 scale-[1.01] z-[40]' : 'opacity-0 z-[-10]'} `}
                >
                    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>
                    <div className='max-w-[600px] w-full bg-white rounded-lg overflow-auto z-[30]'>
                        <div className=' p-4 flex justify-between items-center'>
                            <p className='text-xl font-bold'>Apply to xyz Company</p>
                            <IoMdClose size={30} onClick={step2} className="cursor-pointer" />
                        </div>
                        <hr />
                        <div className='w-full px-4 py-3'>

                            <p className='text-base font-semibold '>
                                Personal information
                            </p>
                            <p className='text-[12px] font-normal mt-2'>
                                Confirm the personal detail before apply
                            </p>
                            <div className='w-full flex gap-4 mt-3'>
                                <div className='w-full '>
                                    <p className='text-[14px] font-medium'>First name <span className='text-red-600'>*</span></p>
                                    <input type="text" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                                </div>
                                <div className='w-full '>
                                    <p className='text-[14px] font-medium'>Last name <span className='text-red-600'>*</span></p>
                                    <input type="text" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                                </div>
                            </div>
                            <div className='w-full flex gap-4 mt-3'>
                                <div className='w-full '>
                                    <p className='text-[14px] font-medium'>Email<span className='text-red-600'>*</span></p>
                                    <input type="email" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                                </div>
                                <div className='w-full '>
                                    <p className='text-[14px] font-medium'>Phone number <span className='text-red-600'>*</span></p>
                                    <input type="number" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' />
                                </div>
                            </div>
                            <div className='w-full flex gap-4 mt-3'>
                                <div className='w-full '>
                                    <p className='text-[14px] font-medium'>Visa Sponsership <span className='text-red-600'>*</span></p>
                                    {/* <input type="text" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2  ' /> */}
                                    <select name="" id="" className='w-full h-[48px] rounded-xl border-[1px] border-[#E1E1E2] mt-2'>
                                    <option value="">Select an option</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                                </div>

                            </div>


                        </div>
                        <hr />
                        <div className='w-full flex justify-end p-4'>
                            <div onClick={step2} className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                                <p className='text-base font-semibold text-[#114B53]'>Update</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <Footer />
        </>

    );
};

export default JobDescription;
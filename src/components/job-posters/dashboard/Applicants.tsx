import React, { useState } from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { BiMessageDetail } from 'react-icons/bi'
import { CiFilter, CiSearch } from 'react-icons/ci'
import { FaCaretDown } from 'react-icons/fa'
import { IoIosArrowForward, IoMdMore } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'


const Applicants:React.FC = () => {


  const filterItems = [
    {
      label: 'All Applicants ',
      Number: "8",
    },
    {
      label: 'Great match ',
      Number: "2",
    },
    {
      label: 'New Applicants ',
      Number: "1",
    },
    {
      label: 'Shortlisted ',
      Number: "4",
    },
    {
      label: 'Unsure ',
      Number: "0",
    },
    {
      label: 'Rejected ',
      Number: "2",
    },

  ];

  const[itemId ,setItemId] =useState(0)

  return (
    <div className='w-full h-full p-5 '>
      <div className='flex gap-2 items-center'>
      <IoHomeOutline />
      <IoIosArrowForward size={10} className='' />
      <p className='text-sm'>Applicants</p>
      <IoIosArrowForward size={10} className='' />
      <p className='text-sm'>All Applicants</p>


      </div>
      <div className='w-full mt-5 bg-white rounded-lg'>
           <div className='p-4 flex justify-between bg-white  rounded-lg'>
                 <p className='text-xl font-semibold'>
                 Applicants 
                 </p>
                 <div className='flex gap-3'>
                     <div className='flex items-center max-w-[330px] w-full border-[1px] border-[#6B7588] rounded-lg px-4 py-1 bg-white gap-2 text-sm'>
                     <CiSearch />
                      <input type="text" placeholder='Search Candidate'/>
                     </div>

                     <div className='w-[140px] flex justify-center p-2 bg-[#E9F358] rounded-full'>
                         <p className='text-sm'>Post a Job</p>
                     </div>
                 </div>
           </div>

           <div className='p-4 w-full'>
                  <div className='flex'>
                    {filterItems.map((items,id)=>{
                      return(
                        <div key={id} onClick={()=>{setItemId(id)}} className={`flex items-center gap-2 py-2 px-4 border-b-[1px] ${itemId===id ?"border-b-[#114B53]":"border-b-white"}`}>
                        <p className='text-sm text-[#114B53]'>{items.label} </p>
                        <div className={`${itemId===id ?"bg-[#CAFDFC]":"bg-[#F2F2F5]"}  rounded-full px-3  `}>
                         <p className='text-sm '>{items.Number}</p>
                        </div>
                       </div>
                      )
                       
                    })}
                     
                  </div>


                  <div className=' flex gap-2 mt-5'>


                  <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] bg-[#effefd] rounded-full">
                            <p className="text-[14px] font-semibold text-[#114B53]">All Filters</p>
                            <FaCaretDown className='text-[#114B53]' />

                        </div>

                  <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53] rounded-full">
                            <p className="text-[14px] font-semibold text-[#114B53]">Date Applied</p>
                            <FaCaretDown className='text-[#114B53]' />

                        </div>

                  <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                            <p className="text-[14px] font-semibold text-[#114B53]">Location</p>
                            <FaCaretDown className='text-[#114B53]' />

                        </div>


                  <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                            <p className="text-[14px] font-semibold text-[#114B53]">Domain Experience</p>
                            <FaCaretDown className='text-[#114B53]' />

                        </div>


                  <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                            <p className="text-[14px] font-semibold text-[#114B53]">Companies worked</p>
                            <FaCaretDown className='text-[#114B53]' />

                        </div>


                  <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                            <p className="text-[14px] font-semibold text-[#114B53]">Visa Sponsorship</p>
                            <FaCaretDown className='text-[#114B53]' />

                        </div>


                  <div className="flex justify-center items-center gap-2 px-4 py-2 border border-[#114B53]  rounded-full">
                            <p className="text-[14px] font-semibold text-[#114B53]">All Filters</p>
                            <CiFilter className='text-[#114B53]' />

                        </div>


                  </div>

                  <div className='w-full mt-5'>
                        

                           <table className="w-full table-auto">
  <thead className=''>
    <tr className='bg-[#F2F2F5] rounded-tl-lg rounded-tr-lg '>
      <th className=' px-4  py-2 w-[35%]'> <div className='flex items-center gap-4'> <input className='border-[#D6DBDE] w-[18px] h-[18px]' type="checkbox" name="" id="" /> <p className='text-sm'>Candidate Name</p> </div></th>

      <th className='text-sm text-start w-[15%]'>AI Score</th>
      <th className='text-sm text-start'> Job Applied</th>
      <th className='text-sm text-start' >Action</th>
    </tr>
  </thead>
  <br />
  <tbody className='mt-2'>
    <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
      <td className='px-4 py-3'> <div className='flex gap-4 items-center'>  
              <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" /> 
                  <div>
                                           <p>Johnson</p>
                                           <p>Senior Full Stack Develoer <br />
                                           Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                                      </div> </td>
      <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
           <p className='text-[10px] font-semibold'>100%</p>
        </div></td>
      <td><p className='text-sm font-medium'>Java Full Stack Developer</p>
      <p className='text-sm font-normal'>Qualification met 3/3</p></td>

      <td>
        <div className='flex gap-2'>
            <div className='flex gap-2'>
                <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} />

                </div>
                <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} className='rotate-90' />

                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineDislike size={20} />

                </div>
                <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <BiMessageDetail size={20} />

                </div>

                <IoMdMore size={25} />

            </div>
        </div>
      </td>
    </tr>
   
  </tbody>
  <br />
  <tbody className='mt-2'>
    <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
      <td className='px-4 py-3'> <div className='flex gap-4 items-center'>  
              <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" /> 
                  <div>
                                           <p>Johnson</p>
                                           <p>Senior Full Stack Develoer <br />
                                           Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                                      </div> </td>
      <td>
        <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
           <p className='text-[10px] font-semibold'>100%</p>
        </div>
      </td>
      <td><p className='text-sm font-medium'>Java Full Stack Developer</p>
      <p className='text-sm font-normal'>Qualification met 3/3</p></td>

      <td>
        <div className='flex gap-2'>
            <div className='flex gap-2'>
                <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} />

                </div>
                <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} className='rotate-90' />

                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineDislike size={20} />

                </div>
                <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <BiMessageDetail size={20} />

                </div>

                <IoMdMore size={25} />

            </div>
        </div>
      </td>
    </tr>
   
  </tbody>
  <br />
  <tbody className='mt-2'>
    <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
      <td className='px-4 py-3'> <div className='flex gap-4 items-center'>  
              <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" /> 
                  <div>
                                           <p>Johnson</p>
                                           <p>Senior Full Stack Develoer <br />
                                           Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                                      </div> </td>
      <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
           <p className='text-[10px] font-semibold'>100%</p>
        </div></td>
      <td><p className='text-sm font-medium'>Java Full Stack Developer</p>
      <p className='text-sm font-normal'>Qualification met 3/3</p></td>

      <td>
        <div className='flex gap-2'>
            <div className='flex gap-2'>
                <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} />

                </div>
                <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} className='rotate-90' />

                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineDislike size={20} />

                </div>
                <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <BiMessageDetail size={20} />

                </div>

                <IoMdMore size={25} />

            </div>
        </div>
      </td>
    </tr>
   
  </tbody>
  <br />
  <tbody className='mt-2'>
    <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
      <td className='px-4 py-3'> <div className='flex gap-4 items-center'>  
              <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" /> 
                  <div>
                                           <p>Johnson</p>
                                           <p>Senior Full Stack Develoer <br />
                                           Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                                      </div> </td>
      <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
           <p className='text-[10px] font-semibold'>100%</p>
        </div></td>
      <td><p className='text-sm font-medium'>Java Full Stack Developer</p>
      <p className='text-sm font-normal'>Qualification met 3/3</p></td>

      <td>
        <div className='flex gap-2'>
            <div className='flex gap-2'>
                <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} />

                </div>
                <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} className='rotate-90' />

                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineDislike size={20} />

                </div>
                <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <BiMessageDetail size={20} />

                </div>

                <IoMdMore size={25} />

            </div>
        </div>
      </td>
    </tr>
   
  </tbody>
  <br />
  <tbody className='mt-2'>
    <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
      <td className='px-4 py-3'> <div className='flex gap-4 items-center'>  
              <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" /> 
                  <div>
                                           <p>Johnson</p>
                                           <p>Senior Full Stack Develoer <br />
                                           Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                                      </div> </td>
      <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
           <p className='text-[10px] font-semibold'>100%</p>
        </div></td>
      <td><p className='text-sm font-medium'>Java Full Stack Developer</p>
      <p className='text-sm font-normal'>Qualification met 3/3</p></td>

      <td>
        <div className='flex gap-2'>
            <div className='flex gap-2'>
                <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} />

                </div>
                <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} className='rotate-90' />

                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineDislike size={20} />

                </div>
                <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <BiMessageDetail size={20} />

                </div>

                <IoMdMore size={25} />

            </div>
        </div>
      </td>
    </tr>
   
  </tbody>
  <br />
  <tbody className='mt-2'>
    <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
      <td className='px-4 py-3'> <div className='flex gap-4 items-center'>  
              <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" /> 
                  <div>
                                           <p>Johnson</p>
                                           <p>Senior Full Stack Develoer <br />
                                           Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                                      </div> </td>
      <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
           <p className='text-[10px] font-semibold'>100%</p>
        </div></td>
      <td><p className='text-sm font-medium'>Java Full Stack Developer</p>
      <p className='text-sm font-normal'>Qualification met 3/3</p></td>

      <td>
        <div className='flex gap-2'>
            <div className='flex gap-2'>
                <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} />

                </div>
                <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} className='rotate-90' />

                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineDislike size={20} />

                </div>
                <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <BiMessageDetail size={20} />

                </div>

                <IoMdMore size={25} />

            </div>
        </div>
      </td>
    </tr>
   
  </tbody>
  <br />
  <tbody className='mt-2'>
    <tr className='border-[1px] border-[#D6DBDE] pt-4 mt-4'>
      <td className='px-4 py-3'> <div className='flex gap-4 items-center'>  
              <input type="checkbox" className='w-[18px] h-[18px]' name="" id="" /> 
                  <div>
                                           <p>Johnson</p>
                                           <p>Senior Full Stack Develoer <br />
                                           Allen, TX - Date Applied : 05/06/2024</p>
                    </div>
                                      </div> </td>
      <td> <div className='w-[39px] h-[39px] border-4 boreder-[80%] border-[#06A560] rounded-full flex justify-center items-center'>
           <p className='text-[10px] font-semibold'>100%</p>
        </div></td>
      <td><p className='text-sm font-medium'>Java Full Stack Developer</p>
      <p className='text-sm font-normal'>Qualification met 3/3</p></td>

      <td>
        <div className='flex gap-2'>
            <div className='flex gap-2'>
                <div className='hover:bg-green-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} />

                </div>
                <div className='hover:bg-yellow-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineLike size={20} className='rotate-90' />

                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='hover:bg-red-100 rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <AiOutlineDislike size={20} />

                </div>
                <div className='rounded-full border-[1px] border-[#D6DBDE] w-[40px] h-[40px] flex justify-center items-center'>
                <BiMessageDetail size={20} />

                </div>

                <IoMdMore size={25} />

            </div>
        </div>
      </td>
    </tr>
   
  </tbody>

</table>
                  </div>
           </div>
      </div>
    </div>
  )
}

export default Applicants

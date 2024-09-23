import React from 'react';
import { Link } from 'react-router-dom';
 
import { FaEdit } from 'react-icons/fa';
import bgCompany from '../../../assets/bg-company.png';
import bgIcon from '../../../assets/icon-company.png';
import locationIco from '../../../assets/companyprofile/location.png'
import headquaterIco from '../../../assets/companyprofile/Building.png'

import companywebsiteIco from '../../../assets/companyprofile/Website.png'

import companysizeIco from '../../../assets/companyprofile/companysize.png'

import foundedIco from '../../../assets/companyprofile/founded.png'
import companyDescriptionIcon from '../../../assets/companyprofile/companydescription.png'



const CompanyProfileSettings: React.FC = () => {
  
  const titles = [
    {
      label: 'User Profile',
      link: '/job-poster/profile-setting',
    },
    {
      label: 'Company Profile',
      link: '/job-poster/company-profile-info',
    },
  ];

  const data=[
    {
        lable:'Location',
        icon:locationIco,
        description:'Street name 1, allen, TX, United States'
    },

    {
        lable:'Headquarters',
        icon:headquaterIco,
        description:'Street name 1, allen, TX, United States'
    },
    {
        lable:'Company Websites',
        icon:companywebsiteIco,
        description:'xyzcompany.com'
    },
    {
        lable:'Company Size',
        icon:companysizeIco,
        description:'11-30'
    },
    {
        lable:'Founded',
        icon:foundedIco,
        description:'2018'
    },
    {
        lable:'Company Description',
        icon:companyDescriptionIcon,
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'
    },
  ]

  return (
    <div className="w-full  h-screen   bg-[#F2F2F5] p-2  relative">
      <div className=" w-full max-w-[1280px]  bg-white  m-auto  rounded-lg p-5">
        <div className="w-full overflow-auto md:flex md:justify-between ">
          <ul className="w-screen  md:w-auto flex justify-start items-center space-x-6   ">
            {titles?.map((item, id) => {
              return (
                <Link
                  to={item.link}
                  className={` text-xs p-1  font-[500]  ${id == 1 ? 'border-[#104B53] border-b-2' : ''}  `}
                  key={id}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>

          <div className="flex  text-xs text-[#104B53] justify-center items-center space-x-1">
            <FaEdit color="#104B53" size={15} />
            Edit
          </div>
        </div>

        <hr className="mt-5" />

        {/* Company Box  */}

        <div className="w-full   max-w-[1200px] mt-10  h-full m-auto  ">
          <div className="w-full h-40 border bg-white relative">
            <div className="w-full h-24 bg-[#F2F2F5] rounded-tl-lg">
              <img src={bgCompany} alt="" className="  w-full h-full object-cover" />
            </div>

            <div className='w-full h-full '>
            <div className="w-full flex justify-center items-center   absolute top-20 left-14   space-x-4">
              <img src={bgIcon} alt="" className="  object-contain  w-20 h-20" />
              <p className="w-full text-xs font-semibold">XYZ company</p>
            </div>
     
            </div>
          </div>

          {/* table data  */}

          <div className='w-full h-full space-y-3 mt-10 '>

            {data?.map((item,i)=>{
                return(
                    <div key={i} className='w-full flex items-center space-x-4 border '>
                    <div className='max-w-60 w-full bg-[#F2F2F5]  h-full  p-2  space-x-1  flex justify-start items-center'>
                        <img src={item.icon} alt='' className='w-5 h-6'/>
                        <p className='text-xs '>{item.lable}</p>
                    </div>

                    <div className='flex-1 w-full'>
                        <p className='text-[10px]'>{item.description}</p>
                    </div>
            </div>
                )
            })}
                           

          </div>


        </div>




      </div>

      
    </div>
  );
};

export default CompanyProfileSettings;

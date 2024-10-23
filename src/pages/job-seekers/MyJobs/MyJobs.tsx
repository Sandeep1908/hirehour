import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";


const MyJobs: React.FC = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
  const titles = [
    {
      label: 'My Jobs',
      link: '/myjobs',
    },
    {
      label: 'Right To Represent',
      link: '/right-to-represent',
    },
    {
      label: 'Messages',
      link: '/messages',
    },
  ];
  const tags = [
    {
      lable:'Applied',
      link:'/myjobs',
      count:8
    },
    {
      lable:'Saved',
      link:'/myjobs-saved',
      count:5
    },
    {
      lable:'Application Started',
      link:'/myjobs-application-started',
      count:2
    },

 
    {
      lable:'Interviewing',
      link:'/myjobs-interviewing',

      count:''
    },

    {
      lable:'Offer Received',
      link:'/myjobs-offer-received',
      count:''
    }
    
 
   
 
   
    
  ];

  const moreSection:string[]=['Saved','Application Started','Shortlisted','Interviewing','Offer Received']
  return (
    <div className="w-full  h-full bg-[#F2F2F5]  ">
      <div className=" w-full max-w-[1280px] flex  h-full   m-auto mt-3 rounded-lg">


      <div className="hidden sm:flex justify-between bg-white h-fit rounded-lg w-full sticky top-2   mr-2 max-w-[200px] ">
          <ul className="w-full  flex flex-col justify-start items-end      relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC]">
            {titles?.map((item, id) => {
              return (
                <Link
                  to={item.link}
                  className={`w-full text-xs  text-center p-4 border-b      transition-all duration-300    font-[500]  ${id == 0 ? ' border-[#104B53]  text-[#104B53] ' : ' '}  `}
                  key={id}
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
        </div>

    

        {/* Job Cards  */}

        <div className='w-full h-full p-3 bg-white'>


        <div className="w-full overflow-auto sm:hidden">
            <ul className="w-full  flex justify-start items-center space-x-6  relative before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-[#ECECEC]">
              {titles?.map((item, id) => {
                return (
                  <Link
                    to={item.link}
                    className={`text-sm p-2 w-full font-[500]  ${id == 1 ? 'border-[#104B53] border-b-4' : ''}  md:p-2`}
                    key={id}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </ul>
          </div>



        <div className="w-full overflow-auto">
          <ul className="w-full flex">
            {tags?.map((item, id) => {
              return (
                <Link to={item.link} className={` text-xs  font-[500]  p-5 ${id===0?'text-[#104B53]':''}`} key={id} >
                  {item.lable} {item.count}
                </Link>
              );
            })}
          </ul>
        </div>




        <div className="w-full max-w-[1200px] p-5 h-[100vh] m-auto border border-[#E1E1E2] rounded-lg">
          <div className="flex flex-col space-y-3">
            <h1 className="text-sm font-semibold">Applied</h1>
            <div className="flex items-center space-x-5">
              <p className="text-xs">8 Job</p>
              <div className="w-full sm:w-auto  flex justify-center items-center border border-[#A2A9B4] p-1 rounded-full">
              <p className="text-[10px]  text-[#6B7588] font-[500]">Recevied Date:</p>

              <select
                name=""
                id=""
                className=" text-[10px] text-end  text-[#6B7588]  outline-none "
              >
                <option className="p-1" value="">
                  Anytime
                </option>

                <option value="">24 Hours</option>
                <option value="">Past 3 days</option>

                <option value="">Past week</option>

                <option value="">Past Month</option>
              </select>
            </div>
            </div>
          </div>

          <div className="w-full mt-10 flex justify-around flex-wrap items-center gap-5">
            {Array.from({ length: 9 }).map((_, id) => {
              return (
                <div
                  key={id}
                  className="relative w-full  max-w-[310px] h-[197px] bg-white border border-[#E1E1E2]   rounded-lg p-3 flex flex-col justify-between"
                >
                  <div className="flex w-full space-x-3 items-center">
                    <img src="/images/emplogo.png" className="w-12 h-12" alt="emp-logo" />
                    <div className="flex flex-col space-y-1">
                      <h1 className="text-sm font-semibold">UI/UX Designer</h1>
                      <ul className="flex space-x-2">
                        <li className="text-xs  ">Figma</li>
                        <li className="text-xs  ">Allen, Texas, United States</li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-full">
                    <ul className="flex items-center space-x-4">
                      <li className="p-2 pl-2 pr-2 text-xs bg-[#F2F2F5] text-[#3A3A3C] rounded-full">
                        Full Time
                      </li>
                      <li className="p-2 pl-3 pr-3  text-xs bg-[#F2F2F5] text-[#3A3A3C] rounded-full">
                        $50-$60 per hour
                      </li>
                    </ul>
                  </div>

                  <div className="w-full flex justify-between items-center space-x-6 ">
               

                            <p className="w-full border border-[#104B53] rounded-full p-1 flex justify-center items-center text-xs">
                            View
                            </p>
                    

               

                            <p className="w-full border border-[#104B53] rounded-full p-1 flex justify-center items-center text-xs"
                            onClick={() => setActiveCard(id === activeCard ? null : id)}
                            >
                            More
                            </p>

                             
                             {/* more section  */}

                             {activeCard ===id && (


<div className='w-36   bg-white absolute  top-0 right-[-140px] rounded-lg  z-[10] transition-all '>
<ul className='flex flex-col p-3 space-y-4 text-xs '>
    {moreSection.map((item,id)=>{
        return(
            <li key={id} className=' p-1 w-full text-xs border-b'>{item}</li>
        )
    })}
   
   
    <li className='p-1 w-full text-xs border-b flex  space-x-2 items-center text-red-500'><MdDeleteOutline size={20} />
    <p>Delete</p>
    </li>

</ul>
</div>
                             )}

                           

                            

                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>

       
      </div>
    </div>
  );
};

export default MyJobs;

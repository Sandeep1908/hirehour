import { useState } from 'react';
 
import AccountSetting from './help/AccountSetting';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


type HelpCard = {
  label: string;
  
  content: string;
};

type CreateTopicProps = {
  isTopicModalOpen: boolean;
  setIsTopicModalOpen: (e: boolean) => void;
};
const CreateTopic: React.FC<CreateTopicProps> = ({ isTopicModalOpen, setIsTopicModalOpen }) => {
  return (
    <div
      className={`w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 ${isTopicModalOpen ? 'opacity-1 scale-[1.01]' : 'opacity-0 z-[-10]'}  `}
    >
      <div
        className="   z-[10] w-full max-w-[400px] shadow-xl
                          bg-white rounded-lg"
      >
        <div className="flex justify-between items-center p-5">
          <div className="flex flex-col space-y-3">
            <h1 className="text-sm font-semibold">Create Topic</h1>
          </div>

          <IoMdClose
            size={20}
            className="cursor-pointer"
            onClick={() => setIsTopicModalOpen(false)}
          />
        </div>

        <hr />

        <div className="w-full flex flex-col space-y-4  p-4">
          <div className="w-full  flex flex-col space-y-5  ">
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-xs">
                Topic
              </label>

              <input
                type="text"
                placeholder="Topic"
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-xs">
                Sub text
              </label>

              <textarea
                placeholder="Topic"
                className="p-2 border border-[#EBEBF0] rounded-md placeholder:text-xs min-h-32"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center p-4 space-x-3">
          <p className="text-xs text-[#104B53] font-[500]">Cancel</p>
          <p className="text-xs w-20 h-7 flex justify-center items-center bg-[#E9F358] rounded-full">
            Create
          </p>
        </div>
      </div>
    </div>
  );
};

const Help: React.FC = () => {
  const [itemId, setItemId] = useState<number>(10);
  const [isTopicModalOpen, setIsTopicModalOpen] = useState<boolean>(false);

  const helpCards: HelpCard[] = [
    {
      label: 'Account Setting',
      
      content: 'Everything you need to know to getting started with Hire hours',
    },

    {
      label: 'Security',
 
      content: 'FAQ shows how specific features work',
    },

    {
      label: 'Billing Help',
   
      content: 'Everything you need to know to getting started with Hire hours',
    },

    {
      label: 'Email',
    
      content: 'Send you all the updates instantly to your email',
    },

    {
      label: '24/7 Support',
      
      content: 'Get support instantly form qualified team',
    },

    {
      label: 'FAQS',
      
      content: 'FAQ shows how specific features work',
    },

    {
      label: 'Blog',
  
      content: 'Stay up with latest updates on community ',
    },
  ];

  return (
    <div className="w-full h-full">
      {itemId === 0 ? (
        <div className="w-full h-full">
          <AccountSetting />
        </div>
      ) : (
        <div className="w-full h-full">
          <div className="flex justify-between items-center p-3">
            <h1 className="text-sm font-semibold">Help</h1>
            <div className="flex justify-center items-center space-x-3">
              <div className=" border rounded-lg ">
                <input
                  type="text"
                  className=" broder border-black  placeholder:text-xs placeholder:text-center p-1 rounded-lg  "
                  placeholder="🔍 Search help"
                />
              </div>

              <p
                onClick={() => setIsTopicModalOpen(true)}
                className="text-[10px] w-24 h-7 bg-[#E9F358] text-[#104B53] flex justify-center items-center rounded-full cursor-pointer"
              >
                Create Topic
              </p>
            </div>
          </div>
          <hr />

          {/* all jobs  */}
          <div className="w-full   p-5   overflow-auto md:h-[60vh] grid grid-cols-2 md:grid-cols-4 place-items-center gap-3">
            {helpCards?.map((item, i) => {
              return (
                <div
                  onClick={() => {
                    setItemId(i);
                  }}
                  className="flex flex-col   p-3 space-y-3 border rounded-lg max-w-44 h-36 "
                  key={i}
                >
                  
                  <h1 className="text-sm font-[500] text-[#104B53]">{item.label}</h1>
                  <p className="text-[10px] text-[#6B7588]">{item.content} </p>

                  <div className='w-full h-full flex justify-between items-center'>
                    <div className='flex space-x-1 items-center'><MdOutlineDeleteOutline color='#104B53' />
                      <span className='text-xs text-[#104B53]'>Delete</span>
                    </div>
                    <div className='flex space-x-1 items-center'><FaEdit size={14} color='#104B53' />
                    <span className='text-xs text-[#104B53]'>Edit</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <CreateTopic setIsTopicModalOpen={setIsTopicModalOpen} isTopicModalOpen={isTopicModalOpen} />
    </div>
  );
};

export default Help;

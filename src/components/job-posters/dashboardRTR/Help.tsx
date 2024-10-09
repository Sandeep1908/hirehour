import { Component, useState } from 'react';
import accountsetting from '../../../assets/dashboard/help/accoutsetting.png';
import billing from '../../../assets/dashboard/help/billing.png';

import blog from '../../../assets/dashboard/help/blog.png';

import email from '../../../assets/dashboard/help/email.png';

import faq from '../../../assets/dashboard/help/faq.png';

import security from '../../../assets/dashboard/help/security.png';

import support from '../../../assets/dashboard/help/support.png';
import AccountSetting from './help/AccountSetting';

type HelpCard = {
  label: string;
  icon: string; // Assuming 'icon' is a string (could be an imported image or icon name)
  content: string;

};

const Help: React.FC = () => {

  const [itemId , setItemId] = useState<number>(10);

  const helpCards: HelpCard[] = [
    {
      label: 'Account Setting',
      icon: accountsetting,
      content: 'Everything you need to know to getting started with Hire hours',
      component:<AccountSetting/>
    },

    {
      label: 'Security',
      icon: security,
      content: 'FAQ shows how specific features work',
    },

    {
      label: 'Billing Help',
      icon: billing,
      content: 'Everything you need to know to getting started with Hire hours',
    },

    {
      label: 'Email',
      icon: email,
      content: 'Send you all the updates instantly to your email',
    },

    {
      label: '24/7 Support',
      icon: support,
      content: 'Get support instantly form qualified team',
    },

    {
      label: 'FAQS',
      icon: faq,
      content: 'FAQ shows how specific features work',
    },

    {
      label: 'Blog',
      icon: blog,
      content: 'Stay up with latest updates on community ',
    },
  ];

  return (
    <div className='w-full h-full'>
       {itemId ===0?
        <div className='w-full h-full'>
           <AccountSetting/>
       </div>
       :
       <div className='w-full h-full'>
          <div className="flex justify-between items-center p-3">
            <h1 className="text-sm font-semibold">Help</h1>
            <div className=" border rounded-lg ">
              <input
                type="text"
                className=" broder border-black  placeholder:text-xs placeholder:text-center p-1 rounded-lg  "
                placeholder="🔍search for help"
              />
            </div>
          </div>
          <hr />
   
          {/* all jobs  */}
         <div className="w-full   p-5   overflow-auto md:h-[60vh] grid grid-cols-2 md:grid-cols-4 place-items-center gap-3">
           {helpCards?.map((item, i) => {
             return (
               <div onClick={()=>{setItemId(i)}} className="flex flex-col p-3 space-y-3 border rounded-lg max-w-44 h-36 " key={i}>
                 <img src={item.icon} alt="" className="w-8 h-8" />
                 <h1 className="text-sm font-[500] text-[#104B53]">{item.label}</h1>
                 <p className="text-[10px] text-[#6B7588]">{item.content} </p>
               </div>
             );
           })}
         </div>
        </div>
       
       }
    </div>
  
   
  );
};

export default Help;

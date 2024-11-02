type HelpCard = {
  label: string;

  content: string;
};

const Help: React.FC = () => {
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
            <div className="flex flex-col justify-between p-3 space-y-3 border rounded-lg max-w-44 h-44 " key={i}>
              
              <h1 className="text-sm font-[500] text-[#104B53]">{item.label}</h1>
              <p className="text-[10px] text-[#6B7588]">{item.content} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Help;

 
import { MdOutlineFileDownload } from 'react-icons/md';

 
 

const Reports: React.FC = () => {
    const columns=['Full Name','Email Address','Reason','Reson in Detials', 'Action']
  
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-sm font-semibold">Reports</h1>
        <p  className=" flex justify-center items-center font-[500] space-x-1  text-[#104B53] rounded-full text-xs">
        <MdOutlineFileDownload size={15}/>   <span>Export</span>
        </p>
      </div>
      <hr />

      
     



      {/* all jobs  */}
      <div className="w-full   p-3 space-y-3       ">
      <div className="space-y-3 ">
                 <table className="table-auto w-full border rounded-lg   ">
            <thead className="bg-[#F2F2F5] rounded-md  ">
              <tr className="text-sm ">
                {columns?.map((col,i)=>{
                    return(
                        <th key={i} className="p-2 font-[400] text-xs text-[#3C3C3D]">{col}</th>
                    )
                })}
               
                 
          
              </tr>
            </thead>
            <tbody className="text-center">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <tr className=" border" key={i}>
                    <td className="text-[10px] p-3">Victor</td>
                  
                    <td className="text-[10px] p-2">Victor@gmail.com</td>
                    <td className="text-[10px] p-2">Seems like fake job</td>
                    <td className="text-[10px] p-2">Lorem Ipsum is simply dummy te....</td>
                     
                    <td className="flex justify-center items-center p-2">
                      <p className='text-[10px]   w-20 h-6 rounded-full border border-[#104B53] flex justify-center items-center'>View Job</p>
                    </td>


                   
                  </tr>
                );
              })}
            </tbody>
          </table> 
    </div>
      </div>
    </div>
  );
};

export default  Reports;

import ProgressBar from '../../../../../common/Progressbar';

const TrafficByLocation: React.FC = () => {
  const columns = ['Search Location', 'Number of Traffic', 'Stats','Action'];
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <h1 className="text-lg font-semibold">Traffic by Location</h1>
       
      </div>
      <hr />

      <div className="p-4 bg-white  rounded-lg space-y-3">
        <div className="px-2">
          <select
            name=""
            id=""
            className="  text-[10px] w-16 text-center h-6 rounded-full border border-[#6B7588] text-[#6B7588] outline-none"
          >
            <option value="">Date</option>
          </select>
        </div>

        <div className="w-full   p-3 space-y-3    overflow-y-auto h-[90vh] md:h-[75vh]">
          <table className="table-auto w-full border rounded-lg   ">
            <thead className="bg-[#F2F2F5] rounded-md  ">
              <tr className="text-sm ">
                {columns?.map((col, i) => {
                  return (
                    <th key={i} className="p-2 font-[400] text-xs text-[#3C3C3D]">
                      {col}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="text-center">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <tr className=" border" key={i}>
                    <td className="text-[10px] p-3">Java Developer</td>

                    <td className="text-[10px] p-2">20</td>
                    

                    <td className="text-[10px] p-2 flex justify-center items-center">
                      <ProgressBar percentage={24} />
                    </td>
                    <td className="text-[10px] p-2">
                        <p className='text-[10px] w-18 flex justify-center items-center rounded-full border border-[#2A4A51] text-[#2A4A51] h-7'>View Stats</p>
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

export default TrafficByLocation;

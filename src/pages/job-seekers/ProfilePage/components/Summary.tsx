import { FaEdit } from "react-icons/fa";

type SummaryProps={
    setSummaryPopup:(e:boolean)=>void
    summary:string
}

const Summary:React.FC<SummaryProps>=({setSummaryPopup,summary})=>{
    return(
        <div className="bg-white w-full p-4 rounded-lg mt-3">
              <div className=" flex flex-col space-y-3">
                <h1 className="text-lg font-semibold">Summery</h1>
                <div className="border p-3 border-[#EBEBF0] rounded-lg">
                  <div
                    className="flex justify-end items-center space-x-2 cursor-pointer"
                    onClick={() => {
                      setSummaryPopup(true);
                    }}
                  >
                    <FaEdit size={14} color="#104B53 " />
                    <p className="text-[#104B53] text-xs">Edit</p>
                  </div>
                  <p className="text-[#535354] text-justify text-sm">
                    {summary}
                  </p>
                </div>
              </div>
            </div>
    )
}

export default Summary
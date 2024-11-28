import { FaEdit } from "react-icons/fa";

type SummaryProps={
    setSummaryPopup:(e:boolean)=>void
}

const Summary:React.FC<SummaryProps>=({setSummaryPopup})=>{
    return(
        <div className="bg-white w-full p-4 rounded-lg mt-3">
              <div className=" flex flex-col space-y-3">
                <h1 className="text-lg font-semibold">Summery</h1>
                <div className="border p-3 border-[#EBEBF0] rounded-lg">
                  <div
                    className="flex justify-end items-center space-x-2"
                    onClick={() => {
                      setSummaryPopup(true);
                    }}
                  >
                    <FaEdit size={14} color="#104B53" />
                    <p className="text-[#104B53] text-xs">Edit</p>
                  </div>
                  <p className="text-[#535354] text-justify text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
    )
}

export default Summary
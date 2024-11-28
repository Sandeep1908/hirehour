import { BiPlus } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";


type WorkExperience={
    setExperiencePopup:(e:boolean)=>void
}

const WorkExperience:React.FC<WorkExperience>=({setExperiencePopup})=>{
    return(
        <div className="bg-white w-full p-5 rounded-lg mt-3">
              <div className=" flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">
                    Work Experience (Total 4 years 4 months of experience)
                  </h1>

                  <div
                    className="flex justify-end items-center space-x-2"
                    onClick={() => {
                      setExperiencePopup(true);
                    }}
                  >
                    <BiPlus size={14} color="#104B53" />
                    <p className="text-[#104B53] text-xs font-semibold">Add</p>
                  </div>
                </div>

                <div className="border p-7 border-[#EBEBF0] rounded-lg">
                  <div className="flex justify-end items-center space-x-4">
                    <div
                      className="flex items-center  "
                      onClick={() => {
                        setExperiencePopup(true);
                      }}
                    >
                      <FaEdit color="#104B53" size={14} />
                      <p className="text-[#104B53] text-xs">Edit</p>
                    </div>

                    <div className="flex items-center ">
                      <MdDeleteOutline color="#104B53" size={14} />
                      <p className="text-[#104B53] text-xs">Delete</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-5 ">
                    <div className="flex flex-col space-y-4">
                      <h1 className="text-sm font-semibold">Java Fullstack</h1>
                      <p className="text-[#6B7588] text-xs">xyz Company - Texas, United States</p>
                      <div className="flex space-x-3 flex-wrap  items-center w-full">
                        <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                          Health Care
                        </p>
                        <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                          Full Time
                        </p>
                        <p className="flex justify-center items-center text-[#7C8596] bg-[#F2F2F5] p-[6px] md:p-3 rounded-full font-semibold text-xs">
                          12/2022 - Present
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-4 ">
                      <h1 className="text-sm font-[600] ">Job summery</h1>
                      <ul className="flex flex-col space-y-3">
                        <li className="text-[#3A3A3C] text-sm text-justify">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type and scrambled it to
                          make a type specimen book.{' '}
                        </li>

                        <li className="text-[#3A3A3C] text-sm text-justify">
                          It has survived not only five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged. It was popularised in the
                          1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                          and more recently with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}


export default WorkExperience
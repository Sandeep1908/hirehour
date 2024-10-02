

const JobPreferenceTemplate:React.FC=()=>{
    const statistic=[
        {
            label:'Job Views',
            count:'20'
        },
        {
            label:'All Applicants',
            count:'10'
        },
        {
            label:'New Applicants',
            count:'8'
        },
        {
            label:'Great Match',
            count:'6'
        },
        {
            label:'Reviewed ',
            count:'4'
        },
        {
            label:'Pending',
            count:'7'
        },
      
    ]
    return(
        <div className="w-full h-full ">
                <div className="max-w-72  p-2 m-auto mt-2 bg-white">

                        <div className="w-full flex flex-col space-y-2 justify-center items-center pt-2">
                            <h1 className="text-sm font-[600] text-[#104B53]">Hi John</h1>
                            <p className="text-xs text-[#3A3A3C] ">Here are the jobs matches your job preference</p>
                                <p className="text-[10px] text-[#9097A6]">Modify your job preference <a  className="text-[#356CFC]" href="#">Click here</a> </p>
                        </div>


                        <div className="w-full h-56 border mt-2 p-2 space-y-2 rounded-lg ">

                            <div className="flex flex-col ">
                                <h1 className="text-sm text-[#104B53] font-[500]">Java Full Stack</h1>
                                <ul className="flex space-x-2 text-[10px]">
                                    <li>Dribbble</li>
                                    <li>Allen, Texas, United States</li>
                             </ul>
                            </div>

                            <div className="w-full h-full flex flex-col space-y-1">

                                {statistic?.map((item,i)=>{
                                    return(
<div className="flex justify-between items-center" key={i}>
                                        <p className="text-xs">{item.label}</p>
                                        <p className="text-sm font-semibold">{item.count}</p>
                                    </div>
                                    )
                                })}
                                    
                            </div>

                               

                        </div>

                        <div className="flex flex-col  space-y-3 pb-4  mt-4 justify-center items-center">
                                <p className="w-40  h-6 text-white font-semibold flex justify-center items-center bg-[#104B53] rounded-full text-[10px]">Review all Applicants</p>
                                <div className="flex flex-col justify-center items-center space-y-2">
                                    <p className="text-xs font-[400] ">We have 1000+ Talents looking for Job
                                    Match !</p>
                                    <p className="text-xs font-[400] ">All the best for hire right talent!</p>

                                    <p className="text-xs font-[400]">Team Hirehours.</p>


                                </div>
                        </div>

                </div>

                <div className="max-w-72  m-auto mt-5 ">
                            <p className="text-[8px] text-[#7B8596] text-center">Beware of fake job postings that get listed online from time to time and require you to share your personal information.</p>
                </div>


                <div className="max-w-72 h-36  flex flex-col justify-between  m-auto mt-5 bg-[#104B53] rounded-lg ">
                            
                            <div className="flex flex-col space-y-3 w-full h-full justify-center items-center">
                                    <div className="flex justify-center space-x-5 items-center">
                                        <img src="/emailfooter/twitter.png" className="w-4" alt="" />
                                        <img src="/emailfooter/insta.png" className="w-4" alt="" />

                                        <img src="/emailfooter/Facebook.png" className="w-4" alt="" />

                                    </div>
                                    <p className="text-white text-xs">www.topequators.com</p>
                            </div>

                            <hr />


                            <div className="flex flex-col justify-center items-center w-full h-full">
                                    <p className="text-[8px] text-[#E1E8E9]">unsubscribe</p>
                                    <p className="text-[10px] text-center text-[#C7C9D9]">Copyright © 2024 HireHours. All rights reserved.</p>
                            </div>
                </div>


        </div>
    )
}


export default JobPreferenceTemplate;
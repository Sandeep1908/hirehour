

import { GrLineChart } from "react-icons/gr";


type SummeryCards={
    name:string,
    total:string,
    bgColor:string,
}


const SummeryCards:React.FC<SummeryCards>=({name,total,bgColor})=>{
    return(
        <div className={`flex flex-col w-full max-w-56 h-24 rounded-md justify-between p-2 bg-[${bgColor}] `}>

        <p className='text-xs text-[#3A3A3C] font-[400]'>{name}</p>
        <div className='flex justify-between items-center'>
            <p className='text-sm font-semibold text-[#3A3A3C]'>{total}</p>
            <p className='flex justify-center items-center space-x-1 text-xs'><span> + 10 %</span><GrLineChart />
            </p>
        </div>
</div>
    )
}

export  default SummeryCards;
import React from 'react'
import Logo from '../../assets/logo/hirehour.png';
import { IoMdClose } from 'react-icons/io';


const JobSubmit:React.FC = () => {
  return (
    <div
    className={`w-full h-full flex p-3 md:p-0 overflow-scroll justify-center items-center fixed inset-0 transition-all duration-500'opacity-1 scale-[1.01] z-[40] `}
>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>


    <div className='z-[30] max-w-[600px] w-full h-auto bg-white rounded-lg overflow-auto relative top-[0px]'>
        <div className='p-4  flex justify-between items-center'>
            <p className='text-xl font-bold'>Apply to xyz Company</p>
            <IoMdClose size={30}  className="cursor-pointer" />
        </div>
        <hr />
        <div className='w-full p-4 '>


            

        </div>
        <div className='flex flex-col justify-center items-center p-4'>
            {/* <p className='text-[14px] md:text-base font-semibold text-[#3A3A3C] mt-2'>Applied Successfully</p> */}
            <img className='mt-5' src={Logo} alt="" />
            <p className='text-[12px] md:text-base font-semibold text-[#3A3A3C] mt-5'>Your Job Was Posted Successfully</p>
            <p className='text-[12px] md:text-[14px] font-normal text-[#6B7588] mt-2'>After a verification by our team your job will goes live</p>
        </div>

        <div className='w-full flex justify-center p-4'>
            <div  className='cursor-pointer bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full '>
                <p className='text-base font-semibold text-[#114B53]'>Done</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default JobSubmit

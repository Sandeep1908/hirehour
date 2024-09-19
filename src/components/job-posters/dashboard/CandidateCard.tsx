import React from 'react'
import { HiOutlineStar } from 'react-icons/hi'

const CandidateCard:React.FC = () => {
  return (
    <div className='w-full border-[1px] border-[#114B53] p-4 rounded-lg'>
    <div className='flex w-full justify-between'>
        <div className='flex gap-3'>
            <div className='w-16 h-16 bg-[#95FAF9] rounded-full flex justify-center items-center'>
                <p className='text-lg font-semibold text-[#3A3A3C]'>J</p>
            </div>
            <div>  <p className='text-[14px] font-semibold text-[#3A3A3C]'> Johnson</p>
                <div className='  mt-1'>

                    <p className='text-[12px]  text-[#6B7588]'>Senior Java Developer</p>
                    <p className='text-[12px]  text-[#6B7588]'>Allen, TX, USA</p>

                </div></div>
        </div>

        <HiOutlineStar size={20} />

    </div>
    <div className='mt-3'>
        <p className='text-[12px] font-semibold text-[#3A3A3C] ' >Experience (Total 4 Years)</p>
        <p className='text-[12px] font-semibold text-[#6B7588] mt-1'>Sr. Java Full Stack </p>
        <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>xyz company 12/2020 - Present   Domain : Health Care</p>

    </div>
    <div className='mt-3'>
        <p className='text-[12px] font-semibold text-[#3A3A3C]'>Education</p>
        <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>Masters, xyz university</p>

    </div>
    <div className='mt-3'>
        <p className='text-[12px] font-semibold text-[#3A3A3C]'>Skills</p>
        <div className='flex gap-2 items-center'>
            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                <p className='text-[10px] text-[#6B7588] font-semibold'>Java</p>
            </div>
            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                <p className='text-[10px] text-[#6B7588] font-semibold'>React Js</p>
            </div>
            <div className='px-2 py-1 rounded-full bg-[#F2F2F5] '>
                <p className='text-[10px] text-[#6B7588] font-semibold'>Angular</p>
            </div>
            <p className='text-[10px] text-[#6B7588] font-semibold'>+20 More</p>

        </div>
    </div >
    <div className='mt-3 flex justify-between'>
        <div>
            <p className='text-[12px] font-semibold text-[#3A3A3C]'>Licence & Certificate</p>
            <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>Web Development Certificate</p>
        </div>
        <div>
            <p className='text-[10px] font-semibold text-[#6B7588] mt-1'>Viwed by</p>
            <p className='text-[12px] font-semibold text-[#3A3A3C]'>Mathew</p>
        </div>

    </div>
</div>
  )
}

export default CandidateCard

import React from 'react'
import { IoMdClose } from 'react-icons/io'


type AddSummary={
    setSummaryPopup:(agr:boolean) => void
}

const Summary:React.FC<AddSummary> = ({setSummaryPopup}) => {
  return (
    <div className='w-full h-full flex   justify-center items-center  fixed inset-0 transition-all duration-500 opacity-1 scale-[1.01] z-[40] '>
    <div className='w-full h-full absolute opacity-[.7] after:absolute after:left-0 after:w-full after:h-full after:bg-black '></div>

    <div className='max-w-[1005px] h-auto w-full bg-white rounded-lg overflow-y-auto z-[30] p-8'>
        <div className='  flex justify-between items-center'>
            <div className='text-base md:text-2xl font-bold'><p>Summary</p></div>
            <IoMdClose size={30} className="cursor-pointer" onClick={()=>{setSummaryPopup(false)}} />
        </div>
        <hr className='mt-5' />
       <div className='py-6 '>
       <p className='hidden text-base font-normal text-[#717171] cursor-pointer'>Edit your summary: You can mention your years of experience, the industry you work in, and your skills. Additionally, it's common to highlight your achievements and previous job experiences.</p>
       <p className='md:block text-base font-normal text-[#717171] cursor-pointer'>Edit your summary.</p>
      
        <textarea name="" id="" className='text- w-full h-[280px] rounded-xl border-[1px] border-[#E1E1E2] mt-5 p-5' value={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}></textarea>
        <p className='text-base font-normal text-right mr-2'>574/2000</p>
       </div>

        <div className='w-full flex justify-end  gap-10  items-center'>
            <div className='bg-[#E9F358] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                <p className='text-base font-semibold text-[#114B53] cursor-pointer'>Continue</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Summary

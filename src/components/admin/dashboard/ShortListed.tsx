import React from 'react'
import { Container } from './Container'
import { IoMdAdd } from 'react-icons/io'

const ShortListed:React.FC = () => {
  return (
    <div id="filter" className=' px-3 max-w-[1200px] w-full flex gap-0 overflow-x-auto  '>
    <div className='flex'>

      <Container />
    </div>

    <div className='p-3 border-[1px] border-[#D6DBDE] rounded-tr-lg min-w-24  '>
      <div className='flex justify-between gap-10'>
        <p className='text-sm text-[#114B53] font-semibold'> <IoMdAdd size={15} className='font-bold' /></p>


      </div>
      <p className='text-xs text-[#114B53] font-semibold mt-5'>Add More </p>
    </div>

  </div>
  )
}

export default ShortListed

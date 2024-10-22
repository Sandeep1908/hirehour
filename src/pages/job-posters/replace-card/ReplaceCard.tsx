import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
// import { CgFileDocument } from 'react-icons/cg'
import { FaRegCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ReplaceCard:React.FC = () => {

   const [paymentType, setPaymentType ] = useState("");

  return (
    <div className='relative w-full h-[92vh]' >
       <div className='max-w-[1280px] px-2 m-auto'>
         <div className='w-full mt-3 md:px-5 py-3 bg-white rounded-lg'>
               <p className='text-base font-semibold '>Choose your payment method</p>
         </div>
         <div className='w-full  py-3  bg-white mt-3 rounded-lg'>
               <div className='px-5 flex gap-3 items-center'>
               <BsArrowLeft size={20} />
               <p className='text-base font-semibold'>Addresses</p>

               </div>
               <div className='w-full px-5 mt-3 flex flex-col md:flex-row gap-5 md:gap-0 \'>

                  <div className='max-w-[700px] w-full h-fit border-[1px] border-[#EBEBF0] rounded-lg'>
                          <div onClick={()=>{setPaymentType("Paypal")}} className={`p-3 ${paymentType==="Paypal" ? "bg-[#EBEBF0]":"bg-white"}  `}>
                         <div className='flex   gap-3'>
                                <FaRegCheckCircle size={20} className={`${paymentType === "Paypal" ?"text-green-500":"text-[#EBEBF0]"}  mt-1`} />
                                <div>
                                    <p className='font-semibold text-sm'>Added card</p>
                                    <p className='font-normal text-xs'>Mathew </p>
                                    <p className='font-normal text-xs'>xxxx-xxxx-xxxx-8790  </p>

                                </div>
                         </div>

                         {/* <div className={`${paymentType ==="Paypal" ?"flex ":" hidden"} flex-col md:flex-row justify-between mt-3`}>
                              <div>
                                   <p className='text-sm font-normal'>Paypal ID</p>
                                   <p className='text-[12px] font-normal text-[#6B7588]'>Enter the Paypal ID</p>
                              </div>
                           
                              <div className='flex gap-2'>
                                 <div>
                                    <input type="text" className=' w-full md:w-[336px] h-[40px]  border-[1px] border-[#EBEBF0] p-2 rounded-lg' />
                                    <div className='flex gap-2 md:justify-end items-center mt-2 '>
                                        <input type="checkbox" className='w-4 h-4 rounded-lg border-[#EBEBF0] ' name="" id="" />
                                        <label htmlFor="" className='text-xs font-normal'>Set us default</label>
                                    </div>
                                 </div>

                                 <FaRegCheckCircle size={20} className='text-green-500 mt-3' />
                              </div>
                         </div> */}

                          </div>
                          <div onClick={()=>{setPaymentType("card")}} className={`p-3 ${paymentType==="card" ? "bg-[#EBEBF0]":"bg-white"}  `}>
                         <div className='flex gap-3'>
                                <FaRegCheckCircle size={20} className={`${paymentType === "card" ?"text-green-500":"text-[#EBEBF0]"}  mt-1`} />
                                <div>
                                    <p className='font-semibold text-sm'>Credit/Debit Card</p>
                                    <p className='font-normal text-xs'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 Extremes of Good <br /> and Evil) by Cicero, written in 45 BC.</p>

                                </div>
                         </div>

                         <div className={`${paymentType ==="card" ?"flex flex-col ":" hidden"}  justify-between mt-6`}>
                            <div className='flex  flex-col md:flex-row justify-between'>
                                    <div>
                                        <p className='text-sm font-normal'>Credit/Debit Card</p>
                                        <p className='text-[12px] font-normal text-[#6B7588]'>Enter the 16-digit card number on the card </p>
                                    </div>
                                
                                    <div className='flex gap-2'>
                                        <div>
                                            <input type="text" className=' md:w-[336px] h-[40px]  border-[1px] border-[#EBEBF0] p-2 rounded-lg' />
                                            
                                        </div>

                                        <FaRegCheckCircle size={20} className='text-green-500 mt-3' />
                                    </div>
                            </div>
                            <div className='flex justify-between mt-4  flex-col md:flex-row '>
                                    <div>
                                        <p className='text-sm font-normal'>Card owner</p>
                                        <p className='text-[12px] font-normal text-[#6B7588]'>Enter the name on the card </p>
                                    </div>
                                
                                    <div className='flex gap-2'>
                                        <div>
                                            <input type="text" className='md:w-[336px] h-[40px]  border-[1px] border-[#EBEBF0] p-2 rounded-lg' />
                                           
                                        </div>

                                        <FaRegCheckCircle size={20} className='text-green-500 mt-3' />
                                    </div>
                            </div>

                            <div className='flex justify-between mt-4 flex-col md:flex-row  '>
                                    <div>
                                        <p className='text-sm font-normal'>Expiry date</p>
                                        <p className='text-[12px] font-normal text-[#6B7588]'>Enter the expiration date of the card </p>
                                    </div>
                                
                                    <div className='flex gap-2 '>
                                        <div>
                                            <div className='md:w-[336px] h-[100px] md:h-[40px]  flex flex-col md:flex-row justify-between rounded-lg'>
                                               <div className='flex gap-2'>
                                                    <input type="text" className='w-[50px] h-[40px] rounded-lg' /> <p className='text-2xl mt-2'>/</p>  <input type="text" className='w-[50px] h-[40px] rounded-lg' />
                                               </div>
                                               <div className='flex gap-2 '>
                                                <div className='mt-1'>
                                                <p className='text-sm font-normal'>CVV2</p>
                                                <p className='text-[12px] font-normal text-[#6B7588]'>Security code </p>
                                                </div>
                                                <input type="text" className='w-[50px] h-[40px] rounded-lg' />
                                               </div>
                                            </div>
                                            <div className='flex gap-2 md:justify-end items-center mt-4 '>
                                                <input type="checkbox" className='w-4 h-4 rounded-lg border-[#EBEBF0] ' name="" id="" />
                                                <label htmlFor="" className='text-sm font-normal'>Set us default</label>
                                            </div>
                                        </div>

                                        <FaRegCheckCircle size={20} className='text-green-500 mt-3' />
                                    </div>
                            </div>
                            
                         </div>

                          </div>

                          <div onClick={()=>{setPaymentType("topequator")}} className={`p-3 ${paymentType==="topequator" ? "bg-[#EBEBF0]":"bg-white"}  `}>
                         <div className='flex gap-3'>
                                <FaRegCheckCircle size={20} className={`${paymentType === "topequator" ?"text-green-500":"text-[#EBEBF0]"}  mt-1`} />
                                <div>
                                    <p className='font-semibold text-sm'>Hire Code</p>
                                    <p className='font-normal text-xs'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 Extremes of Good <br /> and Evil) by Cicero, written in 45 BC.</p>

                                </div>
                         </div>

                         <div className={`${paymentType ==="topequator" ?"flex flex-col md:flex-row":" hidden"}  justify-between mt-3`}>
                              <div>
                                   <p className='text-sm font-normal'>Hire Code</p>
                                   <p className='text-[12px] font-normal text-[#6B7588]'>Enter the Credit/Debit Card </p>
                              </div>
                           
                              <div className='flex gap-2'>
                                 <div>
                                    <input type="text" className='md:w-[336px] h-[40px]  border-[1px] border-[#EBEBF0] p-2 rounded-lg' />
                                    <div className='flex gap-2 md:justify-end items-center mt-2 '>
                                        <input type="checkbox" className='w-4 h-4 rounded-lg border-[#EBEBF0] ' name="" id="" />
                                        <label htmlFor="" className='text-sm font-normal'>Set us default</label>
                                    </div>
                                 </div>

                                 <FaRegCheckCircle size={20} className='text-green-500 mt-3' />
                              </div>
                         </div>

                          </div>



                          {/* <div className='p-5 flex gap-3 border-t-[1px] border-[#EBEBF0] '>
                          <FaRegCheckCircle size={20} className='text-[#EBEBF0] mt-1' />
                          <div>
                            <p className='font-semibold text-base'>Credit/Debit Card</p>
                            <p className='font-normal text-sm'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 Extremes of Good <br /> and Evil) by Cicero, written in 45 BC.</p>

                          </div>

                          </div> */}
                          {/* <div className='p-5 flex gap-3  border-t-[1px] border-[#EBEBF0]'>
                          <FaRegCheckCircle size={20} className='text-[#EBEBF0] mt-1' />
                          <div>
                            <p className='font-semibold text-base'>Hire Code</p>
                            <p className='font-normal text-sm'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 Extremes of Good <br /> and Evil) by Cicero, written in 45 BC.</p>

                          </div>

                          </div> */}
                  </div>
                  {/* <div className='max-w-[400px] w-full   '>
                          
                       <div className='w-full p-5  border-[1px] border-[#EBEBF0] rounded-lg'>
          

                       <div className=' flex gap-3 '>
                          <CgFileDocument size={20} className=' mt-1' />

                            <p className='font-medium text-base'>Order Detail</p>


                          </div>

                       <div className=' flex justify-between gap-3 border-b-[1px] border-[#EBEBF0] py-4 '>

                            <p className='font-medium text-sm'>Plan name</p>
                            <p className='font-medium text-sm'>Price</p>


                          </div>
                       <div className=' flex justify-between gap-3 border-b-[1px] border-[#EBEBF0] py-5 '>

                            <p className='font-medium text-sm'>Hire Plus</p>
                            <p className='font-medium text-sm'>$ 14.99 </p>


                          </div>
                          <div className='flex justify-end pt-3'>
                          <p className='font-semibold text-base'> Total: $ 14.99 </p>

                          </div>
                       </div>
                       <div  className={`bg-[#114B53]  w-full h-[45px] border-[1px] text-white border-[#114B53] rounded-lg flex justify-center items-center mt-2`}>
                <p className=' text-sm'>Confirm Payment</p>
              </div>
                        
                  </div> */}

               </div>
               {/* <div className='mt-3 px-5 pb-5'>
            <p className='text-base text-[#114B53] font-semibold'>
            + Add More Payment method
            </p>
         </div> */}
         <div className='fixed bottom-0 bg-white md:relative py-2 md:py-0 justify-center w-full flex md:justify-end md:px-10 mt-3 md:gap-10  items-center'>
                            {/* <p  className='hidden md:block cursor-pointer text-[#114B53] font-semibold text-base'> Back</p> */}
                            <div  className='bg-[#114B53] w-[140px] h-[42px] flex justify-center items-center rounded-full cursor-pointer '>
                                <Link to={'/job-poster/dashboard?key=myjobs'}  className='text-base font-semibold text-white cursor-pointer'>save</Link>
                            </div>
                        </div>
         </div>
         
        
        

       </div>
    </div>
  )
}

export default ReplaceCard

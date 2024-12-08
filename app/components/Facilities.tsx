import React from 'react'

const Facilities = () => {
  return (
    <div>
        <div className='h-[300px] flex justify-around bg-[#FAF4F4] items-center px-10 mt-20'>
            <div className='w-[360px] flex flex-col items-start gap-3'>
                    <p className='text-3xl font-medium'>Free Delivery</p>
                    <p className='text-[18px] font-normal w-[376px] text-[#9F9F9F9F]'>If goods have problems, consectetur adipim scing elit.</p>
                </div>
                <div className='w-[360px] flex flex-col items-start gap-3'>
                    <p className='text-3xl font-medium'>90 Days Return</p>
                    <p className='text-[18px] font-normal w-[376px] text-[#9F9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</p>
                </div>
                <div className='w-[360px] flex flex-col items-start gap-3'>
                    <p className='text-3xl font-medium'>Secure Payment</p>
                    <p className='text-[18px] font-normal w-[376px] text-[#9F9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
                </div>
               
            </div>
    </div>
  )
}

export default Facilities
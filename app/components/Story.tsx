import React from 'react'

import Image from 'next/image'
import bgImage from '../images/Rectangle 17.png'
const Story = () => {
  return (
    <div>
        <div className='h-[300px] sm:h-[450px] w-full flex flex-col items-center'>
        <Image
        src={bgImage}
        alt=""
        objectFit="cover" 
        quality={100} 
      />
      <div className='flex flex-col gap-1 xl:gap-5 items-center -mt-28 sm:-mt-52  xl:-mt-80'>
      <p className='text-[20px] sm:text-[60px] font-bold'>Our Instagram</p>
        <p className='text-[20px] font-normal'>Follow our store on Instagram</p>
        <button className='w-[110px] sm:w-[255px] sm:h-[64px] text-[20px] font-normal text-center rounded-full shadow-xl bg-[#FAF4F4]'>Follow Us</button>
        </div>
        </div>
        
    </div>
  )
}

export default Story
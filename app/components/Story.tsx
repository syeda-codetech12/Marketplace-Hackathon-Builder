import React from 'react'

import Image from 'next/image'
import bgImage from '../images/Rectangle 17.png'
const Story = () => {
  return (
    <div>
        <div className='h-[450px] w-full flex flex-col items-center'>
        <Image
        src={bgImage}
        alt=""
        objectFit="cover" // Ensures the image covers the area
        quality={100} // High-quality rendering
      />
      <div className='flex flex-col gap-5 items-center -mt-80'>
      <p className='text-[60px] font-bold'>Our Instagram</p>
        <p className='text-[20px] font-normal'>Follow our store on Instagram</p>
        <button className='w-[255px] h-[64px] text-[20px] font-normal text-center rounded-full shadow-lg bg-[#FAF4F4]'>Follow Us</button>
        </div>
        </div>
        
    </div>
  )
}

export default Story
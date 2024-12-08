import React from 'react'

import Image from 'next/image'
import sofa from '../images/Rocket single seater 1.png'
const Hero = () => {
  return (
    <div className='w-full h-screen relative flex  justify-center bg-[#FBEBB5] -z-0'>
        <div className=' flex  item-center justify-center '>
        <div className='flex flex-col gap-10 justify-center ml-32'>
            <div className='w-[440px] text-6xl font-medium'>Rocket single seater</div>
            <p className='w-[120px] h-[49px] border-black border-b-2 font-medium text-2xl cursor-pointer'>Shop Now</p>
        </div>
        <div className='mr-20'>
            <Image
            src={sofa}
            alt='sofa'
            width={800}
            height={400}
            />
        </div>
        </div>
    </div>
  )
}

export default Hero
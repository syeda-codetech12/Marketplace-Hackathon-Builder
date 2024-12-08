import React from 'react'

import Image from 'next/image'
import product1 from '../images/Granite square side table 1.png'
import product2 from '../images/Cloud sofa three seater + ottoman_3 1.png'
const Pieces = () => {
  return (
    <div className='h-screen flex items-center justify-around bg-[#FAF4F4]'>
        <div className='w-[605px] h-[562px] mt-16'>
        <div>
            <Image
            src={product1}
            alt='product1'
            width={605}
            height={562}
            />
        </div>
        <div className='flex flex-col gap-5 -mt-40 ml-32'>
            <p className='text-4xl font-medium'>Side Table</p>
            <p className='w-fit h-10 text-2xl font-medium border-black border-b-2 cursor-pointer'>View More</p>
        </div>
        </div>

        <div className='w-[605px] h-[562px] mr-36 flex flex-col gap-10 mt-16'>
        <div>
            <Image
            src={product2}
            alt='product2'
            width={605}
            height={562}
            />
        </div>
        <div className='flex flex-col gap-5 -mt-40 ml-32'>
            <p className='text-4xl font-medium'>Side Table</p>
            <p className='w-fit h-10 text-2xl font-medium border-black border-b-2 cursor-pointer'>View More</p>
        </div>
        </div>

       
    </div>
  )
}

export default Pieces
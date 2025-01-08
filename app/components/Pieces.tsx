import React from 'react'

import Image from 'next/image'
import product1 from '../images/Granite square side table 1.png'
import product2 from '../images/Cloud sofa three seater + ottoman_3 1.png'
import Link from 'next/link'
const Pieces = () => {
  return (
    <div className=' md:h-screen flex flex-col md:flex-row items-center gap-20 md:justify-around bg-[#FAF4F4]'>
        <div className='w-[60%] h-[70%] md:w-[605px] md:h-[562px] mr-14 flex flex-col md:mt-16'>
        <div>
            <Image
            src={product1}
            alt='product1'
            width={605}
            height={562}
            />
        </div>
        <div className='w-full flex flex-col gap-2 sm:gap-5 -mt-16 sm:-mt-40 md:-mt-5 xl:-mt-40 md:ml-20 '>
            <p className=' text-2xl md:text-4xl font-medium'>Side Table</p>
            <Link href="/shop"> <p className='w-fit h-10 md:text-2xl font-medium border-black border-b-2 cursor-pointer'>View More</p></Link>
        </div>
        </div>

        <div className='w-[60%] h-[70%] md:w-[605px] md:h-[562px] mr-14 lg:mr-36 flex flex-col md:mt-16 '>
        <div>
            <Image
            src={product2}
            alt='product2'
            width={605}
            height={562}
            />
        </div>
        <div className='w-full flex flex-col gap-2 sm:gap-5 -mt-14 sm:-mt-40 md:-mt-1 xl:-mt-[125px] md:ml-20'>
            <p className='w-full text-2xl md:text-4xl font-medium'>Side Table</p>
            <Link href="/shop"><p className='w-fit h-10 md:text-2xl font-medium border-black border-b-2 cursor-pointer mb-10 md:mb-0'>View More</p></Link>
        </div>
        </div>

       
    </div>
  )
}

export default Pieces
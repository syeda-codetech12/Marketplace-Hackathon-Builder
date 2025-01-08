import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <div className='max-w-screen xl:w-[1100px] flex flex-col md:flex-row items-center justify-center md:items-start  gap-10 xl:justify-around mx-20'>
                <div className='flex items-center justify-center'>
            <p className='xl:w-[285px] xl:h-[72px] text-[#9F9F9F] font-normal text-center md:text-start'>
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
            </p>
            </div>
            <div className='flex flex-col gap-8 items-center md:items-start'>
                <p className='text-[#9F9F9F] font-medium'>Links</p>
                <Link href="/"><p  className='text-black font-medium cursor-pointer'>Home</p></Link>
                <Link href="/shop"><p  className='text-black font-medium cursor-pointer'>Shop</p></Link>
                <Link href="/blog"><p  className='text-black font-medium cursor-pointer'>Blogs</p></Link>
                <Link href="/contact"><p  className='text-black font-medium cursor-pointer'>Contact</p></Link>
            </div>
            <div className='flex flex-col gap-8 items-center md:items-start'>
                <p className='text-[#9F9F9F] font-medium'>Help</p>
                <p  className='text-black font-medium'>Payment Options</p>
                <p  className='text-black font-medium'>Returns</p>
                <p  className='text-black font-medium'>Privacy Policies</p>
            </div>
            <div className='flex flex-col gap-8  items-center md:items-start '>
                <p className='text-[#9F9F9F] font-medium'>Newsletter</p>
                <div className='flex flex-col gap-14 items-center xl:items-start xl:flex-row xl:gap-0'>
                <pre className='w-fit h-16 xl:h-8 border-black border-b-[1px] text-[#9F9F9F] pb-2 font-sans xl:mr-4 cursor-pointer'>Enter Your Email Address        </pre>
                <span className='w-fit h-16 xl:h-8 border-black border-b-[1.75px] pb-2 cursor-pointer'>SUBSCRIBE</span>
                </div>
            </div>
            </div>
            <div className='max-w-screen xl:w-[1100px] h-20 border-t-[1px] border-[#D9D9D9] my-10 mx-auto'>
                <p className='pt-10 text-center xl:text-start'>2022 Meubel House. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer












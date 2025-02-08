import Image from 'next/image'
import React from 'react'
import bed from '../images/Screenshot (67).png'
import table from '../images/Screenshot (68).png'
import sofa from '../images/Screenshot (69).png'
import chair from '../images/Screenshot (70).png'
import Link from 'next/link'

export default function Category() {
  return (
    <div className='py-20 px-10 lg:px-16'>
              <h2 className="text-4xl font-medium text-black mb-10 mx-auto text-center">Our Categories</h2>
              {/* Categories starts from here */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {/* Category 1 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                  <Link href={"/bed"}>
                  <Image
                  src={bed}
                  alt='Category Bed'
                  width={350}
                  height={350}
                  className='lg:w-[350px] h-[250px] lg:h-[350px] rounded-xl duration-500 group-hover:scale-125'
                  />
                  <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Bed</h1>
                  </div>
                  <div className='lg:hidden block absolute bottom-6 duration-500 scroll-m-20 z-[100] text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Bed</h1>
                  </div>
                  </Link>
                </div>
                 {/* Category 2 */}
                 <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                  <Link href={"/table"}>
                  <Image
                  src={table}
                  alt='Category Table'
                  width={350}
                  height={350}
                  className='h-[250px] lg:h-[350px] rounded-xl duration-500 group-hover:scale-125'
                  />
                  <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Table</h1>
                  </div>
                  <div className='lg:hidden block absolute bottom-6 duration-500 scroll-m-20 z-[100] text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Table</h1>
                  </div>
                  </Link>
                </div>
                {/* Category 3 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                  <Link href={"/chair"}>
                  <Image
                  src={chair}
                  alt='Category Chair'
                  width={350}
                  height={350}
                  className='h-[250px] lg:h-[350px] rounded-xl duration-500 group-hover:scale-125'
                  />
                  <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Chair</h1>
                  </div>
                  <div className='lg:hidden block absolute bottom-6 duration-500 scroll-m-20 z-[100] text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Chair</h1>
                  </div>
                  </Link>
                </div>
                {/* Category 4 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                  <Link href={"/sofa"}>
                  <Image
                  src={sofa}
                  alt='Category Sofa'
                  width={350}
                  height={350}
                  className='h-[250px] lg:h-[350px] rounded-xl duration-500 group-hover:scale-125'
                  />
                  <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Sofa</h1>
                  </div>
                  <div className='lg:hidden block absolute bottom-6 duration-500 scroll-m-20 z-[100] text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-4 w-full'>
                    <h1 className='text-2xl font-medium uppercase'>Sofa</h1>
                  </div>
                  </Link>
                </div>



              </div>
    </div>
  )
}





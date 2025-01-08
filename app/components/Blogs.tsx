import React from 'react'

import Image from 'next/image'

import blog1 from '../images/Rectangle 13.png'
import blog2 from '../images/Rectangle 14.png'
import blog3 from '../images/Rectangle 15.png'

import { IoCalendarClearOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from 'react-icons/ai'
import Link from 'next/link'

const Blogs = () => {
  return (
    <div>
        <div>
            <div className='mt-20'>
                <p className='text-center font-medium text-4xl mb-6'>Our Blogs</p>
                <p className='font-medium text-[#9F9F9F] text-center mb-8 px-5 md:mx-0'>Find a bright ideal to suit your taste with our great selection</p>
            </div>
            <div>
                <div className='flex flex-col md:flex-row  gap-20 md:gap-10 items-center justify-center px-5 xl:px-0'>
                    <div className='px-12 md:px-0 flex flex-col gap-5 items-center'>
                        <div>
                            <Image
                                src={blog1}
                                alt='blog1'
                                width={350}
                                height={393}
                                className='object-cover'
                            />
                        </div>
                        <div className='lg:text-[20px] font-normal text-center xl:text-start'>Going all-in with millennial design</div>
                        <div className='cursor-pointer xl:w-[130px] xl:h-[46px] border-black border-b-2 xl:text-2xl font-medium'>Read More</div>
                        <div>
                        <AiOutlineClockCircle className='size-5 inline mr-2'/>
                            <span className='font-light mr-4 lg:mr-8 '>5 min </span>

                            <IoCalendarClearOutline className='size-5 inline mr-2'/>
                            <span className='font-light'>12<sup>th</sup> Oct 2022</span>
                        </div>
                    </div>








                    <div className='px-12 md:px-0  flex flex-col gap-5 items-center'>
                        <div>
                            <Image
                                src={blog2}
                                alt='blog1'
                                width={350}
                                height={393}
                                className='object-cover'
                            />
                        </div>
                        <div className='lg:text-[20px] font-normal text-center xl:text-start'>Going all-in with millennial design</div>
                        <div className='cursor-pointer xl:w-[130px] xl:h-[46px] border-black border-b-2 xl:text-2xl font-medium'>Read More</div>
                        <div>
                        <AiOutlineClockCircle className='size-5 inline mr-2'/>
                            <span className='font-light mr-4  lg:mr-8'>5 min </span>

                            <IoCalendarClearOutline className='size-5 inline mr-2'/>
                            <span className='font-light'>12<sup>th</sup> Oct 2022</span>
                        </div>
                    </div>




                    
                    <div className='px-12 md:px-0 flex flex-col gap-5 items-center'>
                        <div>
                            <Image
                                src={blog3}
                                alt='blog1'
                                width={350}
                                height={393}
                                className='object-cover'
                            />
                        </div>
                        <div className='lg:text-[20px] font-normal text-center xl:text-start'>Going all-in with millennial design</div>
                        <div className='cursor-pointer xl:w-[130px] xl:h-[46px] border-black border-b-2 xl:text-2xl font-medium'>Read More</div>
                        <div>
                        <AiOutlineClockCircle className='size-5 inline mr-2'/>
                            <span className=' font-light mr-4 lg:mr-8'>5 min </span>

                            <IoCalendarClearOutline className='size-5 inline mr-2'/>
                            <span className='font-light'>12<sup>th</sup> Oct 2022</span>
                        </div>
                    </div>



                </div>
            </div>


            <div className='w-full flex items-center justify-center mt-14 mb-16'>
            <Link href="/blog"><button className='w-fit h-[49px] border-black border-b-2 text-2xl font-medium cursor-pointer'>View All Posts</button></Link>
      </div>
        </div>
    </div>
  )
}

export default Blogs
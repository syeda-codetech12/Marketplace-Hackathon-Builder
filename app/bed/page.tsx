



'use client'

import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { PiCirclesFourFill } from 'react-icons/pi'
import { BsViewList } from 'react-icons/bs'
import Facilities from '../components/Facilities'
import Main from '../components/Main'
import Bedslisting from '../components/BedsListings'

const category = () => {
  

  return (
    <div>
      <div className='mb-20'>
        <Main heading='Bed Category' page='Bed Category' />

        <div className='h-auto xl:h-[100px] w-full bg-[#FAF4F4] flex flex-col gap-5 lg:flex-row lg:gap-0 lg:justify-around py-3'>
          <div className='flex gap-2 sm:gap-4 items-center justify-center'>
            <HiOutlineAdjustmentsHorizontal className='size-5' />
            <span className='font-normal sm:text-[20px]'>Filter</span>
            <PiCirclesFourFill className='size-5' />
            <BsViewList className='size-5' />
            <pre className='font-sans sm:text-[18px]'>|    Showing 1–16 of 32 results</pre>
          </div>
          <div className='flex gap-4 items-center justify-center'>
            <span className='font-normal sm:text-[20px]'>Show</span>
            <span className='w-[55px] h-[55px] bg-white text-[20px] text-[#9F9F9F] p-[14px]'>16</span>
            <span className='font-normal sm:text-[20px]'>Sort by</span>
            <span className='w-auto h-auto sm:w-[185px] sm:h-[55px] bg-white sm:text-[20px] text-[#9F9F9F] p-[14px]'>Default</span>
          </div>
        </div>

        <div>
          <Bedslisting />
        </div>
        <Facilities />
      </div>
    </div>
  )
}

export default category

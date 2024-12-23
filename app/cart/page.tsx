import React from 'react'
import Main from '../components/Main'

import Image from 'next/image'
import image from '../images/Mask group (5).png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import Facilities from '../components/Facilities';


const cart = () => {
  return (
    <div className='max-w-screen overflow-hidden mb-20'>
      <div>
      <Main heading='Cart' page='Cart'/>
      </div>
      <div className='xl:w-[1150px] flex flex-row lg:gap-10 xl:justify-between items-center justify-center mx-auto '>
        <div className='w-fit h-auto p-7 xl:w-[720px] xl:h-[55px] bg-[#FFF9E5] flex items-center justify-center pr-10'>
          <div className='xl:w-[420px] flex justify-around'>
            <span className='mr-5 sm:mr-20 font-medium'>Product</span>
            <span className='mr-5 sm:mr-28 font-medium'>Price</span>
            <span className='mr-5 sm:mr-16 font-medium'>Quantity</span>
            <span className='mr-5 font-medium'>Subtotal</span>
          </div>
          <div>
           
          </div>
        </div>

        <div className='w-auto h-auto xl:w-[395px] xl:h-[390px] bg-[#FFF9E5] p-10 xl:pt-5 xl:p-0 flex flex-col items-center justify-start gap-7'>
          <p className='mb-5 text-4xl font-semibold'>
            Cart Totals
        </p>
        <div className='w-[250px] flex justify-between'>
          <p className='font-medium'>Subtotal</p>
          <p className='text-[#9F9F9F] font-medium'>Rs. 250,000.00</p>
        </div>
        <div className='w-[250px] flex justify-between'>
          <p className='font-medium'>Total</p>
          <p className='text-[20px] text-[#B88E2F] font-medium'>Rs. 250,000.00</p>
        </div>
        <button className='w-[220px] h-[55px] border-black border-[1.3px] text-[20px] rounded-lg'>Check Out</button>
        </div>

      </div>
      <div className='pl-14 -mt-32 mb-60 flex flex-row lg:gap-0 items-center'>
            <div className='w-[105px] h-[105px] bg-[#FBEBB5] flex items-center justify-center rounded-md'>
                        <Image
                            src={image}
                            alt='productImage'
                            width={100}
                            height={100}
                            quality={100}
                            className=''
                        />
                    </div>
                    <div className='lg:w-auto lg:h-auto xl:w-[610px] xl:h-[25px] flex gap-3 sm:gap-[70px] lg:gap-5 xl:gap-10 2xl:gap-16 xl:pl-10'>
                      <span className='xl:w-full text-nowrap text-[#9F9F9F]'>Asgaard sofa</span>
                      <span className='xl:w-full text-nowrap text-[#9F9F9F]'>Rs. 250,000.00</span>
                      <span className='w-fit h-fit border-2 rounded-sm p-1 pl-3 pr-3 ml-6'>1</span>
                      <span className='xl:w-full text-nowrap ml-9'>Rs. 250,000.00</span>
                      <span><RiDeleteBin7Fill className='inline text-[#FBEBB5] size-6 mb-1'/> </span>
                    </div>
            </div>

            <Facilities/>
         
    </div>
  )
}

export default cart
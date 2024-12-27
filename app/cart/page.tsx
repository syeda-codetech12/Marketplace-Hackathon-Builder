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
      <div className='w-screen xl:w-[1150px] flex flex-col gap-40 md:flex-row md:gap-10 xl:gap-0 xl:justify-between items-center justify-center mx-auto md:items-start'>
        <div className='h-fit w-fit py-20 px-10 xl:w-[720px] xl:h-16  bg-[#FFF9E5] xl:px-0 xl:py-0'>
          <div>
            <div className=' grid gap-y-2  mt-16 xl:grid-cols-[140px,130px,140px,125px,90px] xl:gap-y-14 xl:pt-6 xl:mt-0'>
              <p className=' xl:col-start-2 font-medium'>Product</p>
              <p className=' font-medium'>Price</p>
              <p className='font-medium'>Quantity</p>
              <p className='font-medium'>Subtotal</p>
              <div className='ml-40 flex flex-col gap-3 xl:grid xl:grid-cols-6 xl:gap-x-[135px] xl:items-center xl:ml-0 '>
              <div className='w-[105px] h-[105px] bg-[#FBEBB5]  -mt-64 xl:flex items-center xl:justify-center xl:rounded-md xl:-mt-0'>
                        <Image
                            src={image}
                            alt='productImage'
                            width={100}
                            height={100}
                            quality={100}
                            className='col-start-2'
                        />
                    </div>
              <p className='text-[#9F9F9F] text-nowrap mt-2 xl:mt-0'>Asgaard sofa</p>
              <p className='text-[#9F9F9F] text-nowrap'>Rs. 250,000.00</p>
              <span className='xl:w-fit xl:h-fit xl:border-2 xl:rounded-sm xl:p-1 xl:pl-3 xl:pr-3 xl:ml-6'>1</span>
              <p className='text-nowrap -mt-2 xl:-mt-0'>Rs. 250,000.00 </p>
              <RiDeleteBin7Fill className=' text-[#FBEBB5] size-6 ml-12 -mt-2'/>
             
            </div>
          </div>
          </div>
        
        </div>
        <div>
        <div className='w-fit h-fit xl:w-[395px] xl:h-[390px] bg-[#FFF9E5] p-10 xl:pt-5 xl:p-0 flex flex-col items-center justify-start gap-7'>
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
        

         
    </div>
    <Facilities/>

    </div>
  )
}

export default cart


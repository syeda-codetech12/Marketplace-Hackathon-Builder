'use client'
import React, { useState, useEffect } from 'react'

import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { PiCirclesFourFill } from 'react-icons/pi'
import { BsViewList } from 'react-icons/bs'
import Facilities from '../components/Facilities'
import Main from '../components/Main'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/Products'
import { allProducts } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const shop = () => {


      
      const [products, setProducts] = useState<Product[]>([]);
    
      useEffect(() => {
        async function fetchProducts() {
          const fetchedProduct : Product[] = await client.fetch(allProducts)
          setProducts(fetchedProduct);
        }
        fetchProducts();
      }, []);
    

  return (
    <div>
        <div className='mb-20'>

        <Main heading='Shop' page='Shop'/>

            
            <div className='h-auto xl:h-[100px] w-full bg-[#FAF4F4] flex flex-col gap-5 lg:flex-row lg:gap-0 lg:justify-around py-3'>
            <div className='flex gap-2 sm:gap-4 items-center justify-center'>
            <HiOutlineAdjustmentsHorizontal className='size-5'/>
            <span className='font-normal sm:text-[20px]'>Filter</span>
            <PiCirclesFourFill className='size-5'/>
            <BsViewList className='size-5'/>
            <pre className='font-sans sm:text-[18px] '>|    Showing 1–16 of 32 results</pre>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <span className='font-normal sm:text-[20px] '>Show</span>
                <span className='w-[55px] h-[55px] bg-white text-[20px] text-[#9F9F9F] p-[14px]'>16</span>
                <span className='font-normal sm:text-[20px] '>Sort by</span>
                <span  className='w-auto h-auto sm:w-[185px] sm:h-[55px] bg-white sm:text-[20px] text-[#9F9F9F] p-[14px]'>Default</span>
            </div>
            </div>
            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10 ">
  {products.map((product) => (
    <div key={product._id} className="w-full h-auto flex flex-col p-5">
      {/* Product Image */}
      <div className="flex items-center justify-center mb-4">
        <Image
          src={urlFor(product.image).url()}
          alt="Product Image"
          width={200}
          height={190}
          className="object-cover h-[190px]"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 items-center">
        <h3 className="font-normal text-black">{product.name}</h3>
        <p className="text-black font-medium text-2xl">Rs. {product.price}</p>
      </div>
    </div>
  ))}
</div>

            <div>
                <div className='flex gap-5 items-center justify-center'>
                    <span className='w-[60px] h-[60px] bg-[#FBEBB5] rounded-md text-[20px] font-normal p-4 pl-6'>1</span>
                    <span className='w-[60px] h-[60px] bg-[#FFF9E5] rounded-md text-[20px] font-normal p-4 pl-6'>2</span>
                    <span className='w-[60px] h-[60px] bg-[#FFF9E5] rounded-md text-[20px] font-normal p-4 pl-6'>3</span>
                    <span className='w-[98px] h-[60px] bg-[#FFF9E5] rounded-md text-[20px] font-light p-4'>Next</span>
                </div>
            </div>
            <Facilities/>
        </div>
    </div>
    </div>
  )
}

export default shop
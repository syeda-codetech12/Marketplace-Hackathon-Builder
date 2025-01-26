'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/Products';
import { client } from '@/sanity/lib/client';
import { fourProducts } from '@/sanity/lib/queries';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const TopPicks = () => {
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct : Product[] = await client.fetch(fourProducts)
      setProducts(fetchedProduct);
    }
    fetchProducts();
  }, []);


  return (
    <div className="min-h-screen bg-gray-50">
       <section className="xl:w-[1150px] mx-auto mt-12 pt-16 pb-20">
      {/* Heading */}
      <h2 className="text-4xl font-medium text-black mb-10 mx-auto text-center">Top Picks for you</h2>
      <p className="text-[#9F9F9F] font-medium mb-12 text-center px-5 lg:px-0">Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.</p>

      {/* Products Grid */}
      <div className="flex justify-center px-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
          {products.map((product) => (
            <div key={product._id}>
                {product.image && (
                  <Image
                  src={urlFor(product.image).url()}
                  alt='Product image'
                  width={400}
                  height={190}
                  className="object-cover h-[190px]"/>
                )
                }
                <h3 className=" font-normal text-black text-2xl my-2">{product.name}</h3>
                <p className="text-black font-medium text-[20px]">Rs.{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      <div className='w-full flex items-center justify-center '>
      <Link href="/shop"><button className='w-[115px] h-[49px] border-black border-b-2 text-2xl font-medium cursor-pointer -mt-20 lg:-mt-10 mb-10'>View All</button></Link>
      </div>
    </div>
  );
};

export default TopPicks;

import React from 'react'

import TopPicksProps from './TopPickProps'


import item1 from '../images/Mask group.png';
import item2 from '../images/Granite dining table with dining chair 1.png';
import item3 from '../images/Mask group (1).png';
import item4 from '../images/Plain console with teak mirror 1.png';





const products = [
    {
      imageSrc: item1,
      altText: 'Sofa',
      title: 'Trenton modular sofa_3',
      price: '25,000.00',
    },
    {
      imageSrc: item2,
      altText: 'Dining Table',
      title: 'Granite dining table with dining chair',
      price: '25,000.00',
    },
    {
      imageSrc: item3,
      altText: 'Table And Stool',
      title: 'Outdoor bar table and stool',
      price: '25,000.00',
    },
    {
      imageSrc: item4,
      altText: 'Console',
      title: 'Plain console with teak mirror',
      price: '25,000.00',
    },
  ];

const RelatedProducts: React.FC = () => {
  return (
    <div>
        <div className=" min-h-screen">
      <TopPicksProps
      heading='Related Products'
      des=''
        products={products}
      />
      
      </div>
      <div className='w-full flex items-center justify-center -mt-8'>
      <button className='w-[115px] h-[49px] border-black border-b-2 text-2xl font-medium cursor-pointer '>View All</button>
      </div>
    </div>
  )
}

export default RelatedProducts
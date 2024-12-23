
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import Link from 'next/link'

interface ProductCardProps {
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  price: string;
  link: string
}



const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, altText, title, price, link }) => {
  return (
    <div className="w-[270px] h-[300px] flex flex-col   p-5">
      {/* Product Image */}
      <div className="flex items-center justify-center mb-4">
      <Link href={link}> 
      <Image
          src={imageSrc}
          alt={altText}
          width={172}
          height={140}
          className="object-cover h-[140px]"
        />
      </Link>
      </div>

      
      {/* Product Details */}
      <div className="flex flex-col gap-2 lg:w-[194px] lg:h-[71px] items-center lg:items-start">
        <h3 className=" font-normal text-black">{title}</h3>
        <p className="text-black font-medium text-2xl">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

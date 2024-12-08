




import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProductCardProps {
  imageSrc: StaticImageData;
  altText: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, altText, title, price }) => {
  return (
    <div className="w-[270px] h-[300px] flex flex-col   p-5">
      {/* Product Image */}
      <div className="flex items-center justify-center mb-4">
        <Image
          src={imageSrc}
          alt={altText}
          width={172}
          height={140}
          className="object-cover h-[140px]"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 w-[194px] h-[71px]">
        <h3 className=" font-normal text-black">{title}</h3>
        <p className="text-black font-medium text-2xl">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;

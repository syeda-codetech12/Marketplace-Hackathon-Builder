import React from 'react';
import ProductCard from './ProductCard';
import { StaticImageData } from 'next/image';

interface TopPicksProps {
  heading?: string;
  des?: string;
  products: {
    imageSrc: StaticImageData;
    altText: string;
    title: string;
    price: string;
  }[];
}

const TopPicksProps: React.FC<TopPicksProps> = ({ heading, des, products }) => {
  return (
    <section className="w-[1150px] mx-auto mt-12 pt-16 pb-20">
      {/* Heading */}
      <h2 className="text-4xl font-medium text-black mb-10 text-center">{heading}</h2>
      <p className="text-[#9F9F9F] font-medium mb-12 text-center">{des}</p>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-6 ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            altText={product.altText}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default TopPicksProps;

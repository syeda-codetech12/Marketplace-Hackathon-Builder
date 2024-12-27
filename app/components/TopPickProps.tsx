

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
    link?: string;
  }[];
}

const TopPicksProps: React.FC<TopPicksProps> = ({ heading, des, products }) => {
  return (
    <section className="xl:w-[1150px] mx-auto mt-12 pt-16 pb-20">
      {/* Heading */}
      <h2 className="text-4xl font-medium text-black mb-10 mx-auto text-center">{heading}</h2>
      <p className="text-[#9F9F9F] font-medium mb-12 text-center px-5 lg:px-0">{des}</p>

      {/* Products Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard
                imageSrc={product.imageSrc}
                altText={product.altText}
                title={product.title}
                price={product.price}
                link={product.link || '#'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicksProps;

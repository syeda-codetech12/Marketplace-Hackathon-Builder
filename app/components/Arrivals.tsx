
import React from 'react';
import Image from 'next/image';
import arrival from '../images/Asgaard sofa 1.png';
import Link from 'next/link';

const Arrivals = () => {
  return (
    <section className="bg-[#FFF9E5]">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-20 py-12 md:py-20 h-auto md:h-screen">
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-start items-center mb-8 md:mb-0">
          <Image
            src={arrival}
            alt="Arrival"
            width={1500}
            height={800}
            className="w-full h-auto max-w-[600px] lg:w-[650px]  object-cover md:ml-10"
            priority // Improves loading performance for important images
          />
        </div>
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left flex flex-col md:items-center">
          <h1 className="text-2xl font-medium text-black mb-4">
            New Arrivals
          </h1>
          <p className="text-xl md:text-3xl xl:text-5xl font-bold leading-snug mb-6">
            Asgaard Sofa
          </p>
          <Link href="/shop"><button className="w-[250px] h-[65px] text-black  border-black border-[1px] text-2xl font-normal flex items-center justify-center">
Order Now
        </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;


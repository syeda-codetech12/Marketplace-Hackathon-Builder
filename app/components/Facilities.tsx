

import React from 'react';

const Facilities = () => {
  return (
    <div>
      <div className="h-auto flex flex-col md:flex-row justify-around bg-[#FAF4F4] items-center px-6  lg:px-10 py-10 lg:py-20 mt-20 gap-8 lg:gap-0">
        <div className="w-full lg:w-[360px] flex flex-col items-start gap-3 text-center lg:text-left">
          <p className="text-2xl lg:text-3xl font-medium mx-auto lg:mx-0">Free Delivery</p>
          <p className="text-[16px] lg:text-[18px] font-normal w-full xl:w-[376px] text-[#9F9F9F9F]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div className="w-full lg:w-[360px] flex flex-col items-start gap-3 text-center lg:text-left">
          <p className="text-2xl lg:text-3xl font-medium mx-auto lg:mx-0">90 Days Return</p>
          <p className="text-[16px] lg:text-[18px] font-normal w-full xl:w-[376px] text-[#9F9F9F9F]">
            For all orders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div className="w-full lg:w-[360px] flex flex-col items-start gap-3 text-center lg:text-left">
          <p className="text-2xl lg:text-3xl font-medium mx-auto lg:mx-0">Secure Payment</p>
          <p className="text-[16px] lg:text-[18px] font-normal w-full xl:w-[376px] text-[#9F9F9F9F]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;

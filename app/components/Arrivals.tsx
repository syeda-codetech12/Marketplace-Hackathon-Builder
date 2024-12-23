// import React from 'react'

// import Image from 'next/image'

// import arrival from '../images/Asgaard sofa 1.png'
// const Arrivals = () => {
//   return (
//         <section>
//   <div className="w-screen h-screen bg-[#FFF9E5] container flex  md:flex-row flex-col items-center">
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-32">
//       <Image
//       src={arrival}
//       alt='Arrival'
//       width={1500}
//       height={799}
//       className='w-[1500px] '
//       />

//     </div>
//     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center justify-center text-center">
//       <h1 className=" sm:text-4xl text-2xl mb-6 font-medium text-black ml-10">
//         New Arrivals
//       </h1>
//       <p className="mb-8 leading-relaxed lg:text-5xl font-bold">
//       Asgaard sofa
//       </p>
//       <div className="flex w-full md:justify-start ml-4">
//         <button className="w-[250px] h-[65px] text-black  border-black border-[1px] text-2xl font-normal flex items-center justify-center">
//           Order Now
//         </button>
//       </div>
      
      
//     </div>
//   </div>
// </section>

//   )
// }

// export default Arrivals



import React from 'react';
import Image from 'next/image';
import arrival from '../images/Asgaard sofa 1.png';

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
          <button className="w-[250px] h-[65px] text-black  border-black border-[1px] text-2xl font-normal flex items-center justify-center">
Order Now
        </button>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;


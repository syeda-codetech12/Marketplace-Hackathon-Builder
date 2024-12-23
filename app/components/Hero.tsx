import React from 'react'

import Image from 'next/image'
import sofa from '../images/Rocket single seater 1.png'
const Hero = () => {
  return (
    <div className='w-full h-screen relative flex items-center justify-center bg-[#FBEBB5] -z-0'>
        <div className=' flex  flex-col sm:flex-row  item-center justify-center mt-36 sm:mt-0'>
        <div className='flex flex-col gap-5 sm:gap-10 justify-center sm:ml-10 md:ml-32 mx-auto '>
            <div className='w-[300px] sm:[100px] text-3xl lg:w-[440px] lg:text-6xl font-medium text-center sm:text-start mx-auto sm:mx-0 ml-5 '>Rocket single seater</div>
            <p className='w-fit h-fit pb-3 border-black border-b-2 font-medium text-2xl cursor-pointer  mx-auto sm:mx-0'>Shop Now</p>
        </div>
        <div className='lg:mr-20 md:mb-0 md:pt-40'>
            <Image
            src={sofa}
            alt='sofa'
            width={800}
            height={400}
              className='w-[90%] h-[80%] sm:w-[150%] sm:h-[120%] md:pb-60 lg:w-[800px] lg:h-[800px] lg:mt-40   xl:w-[800px] xl:h-[800px] mx-auto sm:mx-0'/>
        </div>
        </div>
    </div>
  )
}

export default Hero




















// import React from 'react'
// import Image from 'next/image'
// import sofa from '../images/Rocket single seater 1.png'

// const Hero = () => {
//   return (
//     <div className="w-full h-screen relative flex justify-center items-center bg-[#FBEBB5]">
//       <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 w-full max-w-7xl">
//         {/* Text Section */}
//         <div className="text-center md:text-left flex flex-col gap-6 md:gap-10">
//           <h1 className="text-4xl md:text-6xl font-medium">
//             Rocket single seater
//           </h1>
//           <p className="text-xl md:text-2xl font-medium border-b-2 border-black inline-block cursor-pointer w-max">
//             Shop Now
//           </p>
//         </div>
        
//         {/* Image Section */}
//         <div className="mt-10 md:mt-0">
//           <Image
//             src={sofa}
//             alt="Sofa"
//             width={800}
//             height={400}
//             className="max-w-full h-auto"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

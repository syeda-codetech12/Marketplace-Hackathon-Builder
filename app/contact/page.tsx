import React from 'react'
import Main from '../components/Main'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa6'
import Facilities from '../components/Facilities'

const contact = () => {
  return (
    <div>
        <div>
            <Main heading='Contact' page='Contact'/>
            <div className='mb-20'>
                <div >
                <h2 className="text-2xl xl:text-4xl font-medium text-black mb-10 text-center">Get In Touch With Us</h2>
                <div className="flex items-center justify-center text-[#9F9F9F] font-medium mb-12 text-center px-5 xl:px-0"><p className='xl:w-[644px]'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p></div>
                </div>
                <div className=' flex items-center justify-center mt-20'>
                    <div className='xl:w-[900px] flex flex-col gap-10  sm:flex-row md:gap-20 xl:gap-0 items-start'>
                        <div className='flex flex-col gap-14 '>
                            <div className='flex gap-5 xl:w-[393px] xl:items-start xl:justify-start'>
                            <IoLocationSharp className='size-6 mt-1'/>
                            <div className='xl:w-[212px] flex flex-col items-start'>
                                <p className='font-medium text-2xl'>Address</p>
                                <p className='w-[212px] font-normal'>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                            </div>

                            <div className='flex gap-5 xl:w-[393px] xl:items-start xl:justify-start'>
                            <FaPhoneAlt className='size-6 mt-1'/>
                            <div className='xl:w-[212px] flex flex-col items-start'>
                                <p className='font-medium text-2xl'>Phone</p>
                                <p className='w-[212px] font-normal'>Mobile: +(84) 546-6789
                                Hotline: +(84) 456-6789</p>
                            </div>
                            </div>

                            <div className='flex gap-5 xl:w-[393px] xl:items-start xl:justify-start'>
                            <FaClock className='size-6 mt-1'/>
                            <div className='xl:w-[212px] flex flex-col items-start'>
                                <p className='font-medium text-2xl'>Working Time</p>
                                <p className='w-[199px] font-normal'>Monday-Friday: 9:00 - 22:00
                                    <br />
                                Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                            </div>
                            
                        </div>
                        <div className='mx-auto xl:w-[635px] xl:mx-0'>
                            <div>
                                <p className='font-medium mb-8'>Your Name</p>
                                <input type="text" placeholder='abc' className='bg-white w-[70vw] h-[20%] sm:w-[50vw] xl:w-[525px] xl:h-[75px] rounded-md border-black border-[1px] p-4 mb-10' />

                                <p className='font-medium mb-8'>Email Address</p>
                                <input type="text" placeholder='Abc@def.com' className=' bg-white w-[70vw] h-[20%] sm:w-[50vw] xl:w-[525px] xl:h-[75px] rounded-md border-black border-[1px] p-4 mb-10' />

                                <p className='font-medium mb-8'>Subject</p>
                                <input type="text" placeholder='This is an optional' className='bg-white w-[70vw] h-[20%] sm:w-[50vw] xl:w-[525px] xl:h-[75px] rounded-md border-black border-[1px] p-4 mb-10' />

                                <p className='font-medium mb-10'>Message</p>
                                <input type="text" placeholder='Hi! i’d like to ask about' className='bg-white w-[70vw] h-[20%] sm:w-[50vw] xl:w-[525px] xl:h-[115px] rounded-md border-black border-[1px] p-4 mb-5' />

                                <button className='w-[50%] md:w-[230px] md:h-[45px] rounded-lg border-black border-[1.35px] mt-8 block mx-auto md:mx-0'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <Facilities/>
            </div>
        </div>
    </div>
  )
}

export default contact
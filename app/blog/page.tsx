import React from 'react'
import Main from '../components/Main'

import Image from 'next/image'
import blogimage from '../images/Rectangle 68 (2).png'
import blogimage2 from '../images/Rectangle 68 (1).png'
import blogimage3 from '../images/Rectangle 68.png'
import blogimage4 from '../images/Rectangle 69 (4).png'
import blogimage5 from '../images/Rectangle 69 (3).png'
import blogimage6 from '../images/Rectangle 69 (2).png'
import blogimage7 from '../images/Rectangle 69 (1).png'
import blogimage8 from '../images/Rectangle 69.png'


import { FaCalendar } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { FaTag } from 'react-icons/fa6'
import Facilities from '../components/Facilities'
import { IoSearch } from 'react-icons/io5'

const blog = () => {
  return (
    <div className='mb-20'>
      <div>
      <Main heading='Blog' page='Blog'/>
      </div>
      <div className='xl:w-[1150px] p-7 sm:p-10 md:p-20 flex flex-col lg:flex-row gap-20'>

        <div>
          <div>
            <div>
              <Image
                src={blogimage}
                alt='blogimage'
                width={700}
                height={500}
                className='w-[70%] h-[70%] xl:w-[700px] xl:h-[500px] object-cover'
                quality={100}
                objectFit='cover'

              />
            </div>
            <div className='mt-5 mb-7 flex flex-col gap-3 sm:flex-row sm:gap-10 lg:gap-0'>
                       <div className='flex'> <BsPersonFill className='size-6 inline mr-2 text-[#9F9F9F]'/>
                            <span className='font-medium sm:mr-8 size-6 text-[#9F9F9F]'>Admin </span>
                            </div>

                            <div className='flex'> <FaCalendar className='size-5 inline mr-2 text-[#9F9F9F]'/>
                            <span className='font-medium sm:mr-8 text-[#9F9F9F]'>14 Oct 2022</span>
                            </div>

                            <div className='flex'><FaTag className='size-6 inline mr-2 text-[#9F9F9F]'/>
                            <span className=' sm:mr-8 font-medium text-[#9F9F9F]'  >Wood</span>
                            </div>
                        </div>
          
                        <div>
                          <h1 className='font-semibold text-2xl lg:text-3xl mb-5'>Going all-in with millennial design</h1>
                          <p className='xl:w-[700px] md:text-justify tracking-tight text-[#9F9F9F] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim quibusdam cupiditate inventore quisquam deleniti repudiandae neque optio reiciendis facere, odio voluptas itaque, eius tempore officia aperiam architecto, est expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo deserunt quis eius vero enim repellat reprehenderit maxime repellendus, temporibus provident veritatis qui neque quod cupiditate quaerat voluptatem? Placeat, fugit.</p>
                        </div>
                        <div className='cursor-pointer w-fit lg:w-[130px] h-[46px] border-black border-b-2 lg:text-2xl font-medium mb-20'>Read More</div>

          </div>

          <div>
            <div>
              <Image
                src={blogimage2}
                alt='blogimage'
                width={700}
                height={500}
                className='w-[70%] h-[70%] xl:w-[700px] xl:h-[500px] object-cover'
                quality={100}

              />
            </div>
            <div className='mt-5 mb-7 flex flex-col gap-3 sm:flex-row sm:gap-10 lg:gap-0'>
                       <div className='flex'> <BsPersonFill className='size-6 inline mr-2 text-[#9F9F9F]'/>
                            <span className='font-medium sm:mr-8 size-6 text-[#9F9F9F]'>Admin </span>
                            </div>

                            <div className='flex'> <FaCalendar className='size-5 inline mr-2 text-[#9F9F9F]'/>
                            <span className='font-medium sm:mr-8 text-[#9F9F9F]'>14 Oct 2022</span>
                            </div>

                            <div className='flex'><FaTag className='size-6 inline mr-2 text-[#9F9F9F]'/>
                            <span className=' sm:mr-8 font-medium text-[#9F9F9F]'  >Handmade</span>
                            </div>
                        </div>
                        <div>
                          <h1 className='font-semibold text-2xl lg:text-3xl mb-5'>Exploring news ways of decorating</h1>
                          <p className='xl:w-[700px] md:text-justify tracking-tight text-[#9F9F9F] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim quibusdam cupiditate inventore quisquam deleniti repudiandae neque optio reiciendis facere, odio voluptas itaque, eius tempore officia aperiam architecto, est expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo deserunt quis eius vero enim repellat reprehenderit maxime repellendus, temporibus provident veritatis qui neque quod cupiditate quaerat voluptatem? Placeat, fugit.</p>
                        </div>
                        <div className='cursor-pointer w-fit lg:w-[130px] h-[46px] border-black border-b-2 lg:text-2xl font-medium mb-20'>Read More</div>

          </div>

          <div>
            <div>
              <Image
                src={blogimage3}
                alt='blogimage'
                width={700}
                height={500}
                className='w-[70%] h-[70%] xl:w-[700px] xl:h-[500px] object-cover'
                quality={100}
              />
            </div>
            <div className='mt-5 mb-7 flex flex-col gap-3 sm:flex-row sm:gap-10 lg:gap-0'>
                       <div className='flex'> <BsPersonFill className='size-6 inline mr-2 text-[#9F9F9F]'/>
                            <span className='font-medium sm:mr-8 size-6 text-[#9F9F9F]'>Admin </span>
                            </div>

                            <div className='flex'> <FaCalendar className='size-5 inline mr-2 text-[#9F9F9F]'/>
                            <span className='font-medium sm:mr-8 text-[#9F9F9F]'>14 Oct 2022</span>
                            </div>

                            <div className='flex'><FaTag className='size-6 inline mr-2 text-[#9F9F9F]'/>
                            <span className=' sm:mr-8 font-medium text-[#9F9F9F]'  >Wood</span>
                            </div>
                        </div>
                        <div>
                          <h1 className='font-semibold text-2xl lg:text-3xl mb-5'>Handmade pieces that took time to make</h1>
                          <p className='xl:w-[700px] md:text-justify tracking-tight text-[#9F9F9F] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam enim quibusdam cupiditate inventore quisquam deleniti repudiandae neque optio reiciendis facere, odio voluptas itaque, eius tempore officia aperiam architecto, est expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo deserunt quis eius vero enim repellat reprehenderit maxime repellendus, temporibus provident veritatis qui neque quod cupiditate quaerat voluptatem? Placeat, fugit.</p>
                        </div>
                        <div className='cursor-pointer w-fit lg:w-[130px] h-[46px] border-black border-b-2 lg:text-2xl font-medium mb-20'>Read More</div>

          </div>
        </div>
        <div>
          <div>


<div className="flex items-center border-black border-[1px] rounded-lg shadow-sm w-[250px] max-w-md p-2">
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow outline-none bg-transparent px-1 py-2"
      />
      <button className="text-black hover:text-gray-700">
        <IoSearch size={20} />
      </button>
    </div>

    <div>
      <h2 className="text-2xl font-semibold mb-8 mt-8">Categories</h2>
    </div>
    <div className=' grid grid-cols-2  gap-y-7 gap-x-52 text-[#9F9F9F]'>
      <p>Crafts</p>
      <p>2</p>
      <p>Design</p>
      <p>8</p>
      <p>Handmade</p>
      <p>7</p>
      <p>Interior</p>
      <p>1</p>
      <p>Wood</p>
      <p>6</p>
    </div>
    <div className='mt-48 flex flex-col gap-10'>
    <h2 className="text-2xl font-semibold mt-8">Recent Posts</h2>
    <div className='flex gap-5 w-[250px]'>
      <Image
                src={blogimage4}
                alt='blogimage'
                width={80}
                height={80}
                className='w-[80px] h-[80px] rounded-lg'
                quality={100}/>
                <div>
                  <h2>Going all-in with millennial design</h2>
                  <p className='text-[#9F9F9F]'>03 Aug 2022</p>
                </div>

                
    </div>

    <div className='flex gap-5 w-[250px]'>
      <Image
                src={blogimage5}
                alt='blogimage'
                width={80}
                height={80}
                className='w-[80px] h-[80px] rounded-lg'
                quality={100}/>
                <div>
                  <h2>Exploring news ways of decorating</h2>
                  <p className='text-[#9F9F9F]'>03 Aug 2022</p>
                </div>

                
    </div>



    <div className='flex gap-5 w-[270px]'>
      <Image
                src={blogimage6}
                alt='blogimage'
                width={80}
                height={80}
                className='w-[80px] h-[80px] rounded-lg'
                quality={100}/>
                <div>
                  <h2>Handmade pieces that took time to make</h2>
                  <p className='text-[#9F9F9F]'>03 Aug 2022</p>
                </div>

                
    </div>



    <div className='flex gap-5 w-[250px]'>
      <Image
                src={blogimage7}
                alt='blogimage'
                width={80}
                height={80}
                className='w-[80px] h-[80px] rounded-lg'
                quality={100}/>
                <div>
                  <h2>Modern home in Milan </h2>
                  <p className='text-[#9F9F9F]'>03 Aug 2022</p>
                </div>

                
    </div>


    <div className='flex gap-5 w-[250px]'>
      <Image
                src={blogimage8}
                alt='blogimage'
                width={80}
                height={80}
                className='w-[80px] h-[80px] rounded-lg'
                quality={100}/>
                <div>
                  <h2>Colorful office redesign</h2>
                  <p className='text-[#9F9F9F]'>03 Aug 2022</p>
                </div>

                
    </div>


    </div>
    <div>
    </div>
          </div>
        </div>
      </div>
      <div className='flex gap-5 items-center justify-center mx-auto ml-3'>
                    <span className='w-[60px] h-[60px] bg-[#FBEBB5] rounded-md text-[20px] font-normal p-4 pl-6'>1</span>
                    <span className='w-[60px] h-[60px] bg-[#FFF9E5] rounded-md text-[20px] font-normal p-4 pl-6'>2</span>
                    <span className='w-[60px] h-[60px] bg-[#FFF9E5] rounded-md text-[20px] font-normal p-4 pl-6'>3</span>
                    <span className='w-[98px] h-[60px] bg-[#FFF9E5] rounded-md text-[20px] font-light p-4'>Next</span>
                </div>

                <Facilities/>
    </div>
  )
}

export default blog
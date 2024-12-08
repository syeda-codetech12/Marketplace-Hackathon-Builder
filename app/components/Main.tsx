import React from 'react'

import Image from 'next/image'

import BgImage from '../images/Rectangle 1.png'
import logo from '../images/Meubel House_Logos-05.png'
import { RiArrowDropRightLine } from 'react-icons/ri'

const Main = ({heading, page} : {heading : string, page: string}) => {
  return (
    <div>
        <div>
        <div className='w-full h-[450px] py-20'>
                <Image
                src={BgImage}
                alt=''
                width={1000}
                height={450}
                className='w-full h-full object-cover'
                quality={100}
                />
                <div className='flex flex-col items-center -mt-56'>
                    <Image
                    src={logo}
                    alt=''
                    width={77}
                    height={77}/>
                    <h1 className='text-5xl font-medium mb-5 '>{heading}</h1>
                    <p className='font-medium'>Home <RiArrowDropRightLine className='size-9 inline' /> 
                    <span className='inline font-light'>{page}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
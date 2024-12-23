import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'

import Image, { StaticImageData } from 'next/image'
import productImage from '../images/Outdoor sofa set 2.png'
import productImage2 from '../images/Outdoor sofa set_2 1.png'
import productImage3 from '../images/Stuart sofa 1.png'
import productImage4 from '../images/Maya sofa three seater (1) 1.png'

import stars from '../images/Group 88.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import RelatedProducts from './RelatedProducts'

import sofa from '../images/Cloud sofa three seater + ottoman_1 1.png'
import sofa2 from '../images/Cloud sofa three seater + ottoman_2 1.png'

const SingleProduct = ({ product , imageSrc, productname, price} : { product : string, imageSrc : StaticImageData, productname: string, price: string}) => {
  return (
    <div className='w-full mb-20'>
        <div>
        <div className='w-[1150px]  p-20 '>
            <div className='mb-10'>
            <p className='text-[#9F9F9F] font-normal'>Home <RiArrowDropRightLine className='size-9 inline text-black' /> Shop
            <RiArrowDropRightLine className='size-9 inline text-black'/>
           <span  className='size-9 inline text-black font-light ml-3 mr-3 text-2xl'>    | </span>
                    <span className='inline font-normal text-black'> {product}</span>
                    </p>

            </div>
            <div className='w-[1150px]  flex items-start justify-center gap-20'>
                <div className='flex flex-col gap-10'>
                    <div className='w-[75px] h-[80px] bg-[#FFF9E5] flex items-center justify-center rounded-md'>
                        <Image
                            src={productImage}
                            alt='productImage'
                            width={83}
                            height={55}
                            quality={100}
                            className=''
                        />
                    </div>
                    <div className='w-[75px] h-[80px] bg-[#FFF9E5] flex items-center justify-center rounded-md'>
                        <Image
                            src={productImage2}
                            alt='productImage'
                            width={83}
                            height={55}
                            quality={100}
                            className=''
                        />
                    </div>
                    <div className='w-[75px] h-[80px] bg-[#FFF9E5] flex items-center justify-center rounded-md'>
                        <Image
                            src={productImage3}
                            alt='productImage'
                            width={83}
                            height={55}
                            quality={100}
                            className=''
                        />
                    </div>
                    <div className='w-[75px] h-[80px] bg-[#FFF9E5] flex items-center justify-center rounded-md'>
                        <Image
                            src={productImage4}
                            alt='productImage'
                            width={83}
                            height={55}
                            quality={100}
                            className=''
                        />
                    </div>
                </div>
                <div className='w-[445px] h-[500px] bg-[#FFF9E5] flex items-center justify-center'>
                    <Image
                        src={imageSrc}
                        alt='productImage'
                        width={480}
                        height={390}
                    />
                </div>
                <div>
                    <div className='w-[580px] h-[730px]'>
                        <div className='flex flex-col justify-between h-[480px]'>
                        <p className='text-5xl font-normal'>{productname}</p>
                        <p className='text-2xl font-medium text-[#9F9F9F]'>Rs. {price}</p>
                        <span>
                            <Image
                                src={stars}
                                alt='productImage'
                                width={124}
                                height={20}
                                className='inline'
                            />
                            <span className='text-[#9F9F9F] font-normal'> | </span>
                            <span className='text-[#9F9F9F] text-[14px] font-normal'> 5 Customer Review </span>
                        </span>
                        <p className='w-[425px] text-[14px] text-black font-normal text-pretty'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                       <div> <p className='text-[#9F9F9F] font-normal text-[14px]'>Size</p>
                        <div className='flex gap-7'>
                            <div className='w-[30px] h-[30px] bg-[#FBEBB5] rounded-md pl-[10px] '>L</div>
                            <div className='w-[30px] h-[30px] bg-[#FAF4F4] rounded-md pl-[7px] '>XL</div>
                            <div className='w-[30px] h-[30px] bg-[#FAF4F4] rounded-md pl-[7px] '>XS</div>
                        </div>
                        </div>
                        <div>
                        <p>Color</p>
                        <div className='flex gap-7'>
                            <div className='w-[30px] h-[30px] bg-[#816DFA] rounded-full  '></div>
                            <div className='w-[30px] h-[30px] bg-[#000000] rounded-full  '></div>
                            <div className='w-[30px] h-[30px] bg-[#CDBA7B] rounded-full  '></div>
                        </div>
                        </div>
                        <div><button className='w-[125px] h-[65px] border-black border-[0.5px] rounded-md mr-7'><pre>-    1    +</pre></button>
                        <button className='w-[215px] h-[65px] border-black border-[1.5px] rounded-md text-[20px]'>Add to Cart</button></div>
                        </div>
                        <div className='w-[540px] border-t-2 mt-10 pt-10'>
                            <div className=' text-[#9F9F9F] flex flex-col gap-2'>
                            <pre>SKU       :  SS001</pre>
                            <pre>Category  :  Sofas</pre>
                            <pre>Tags      :  Sofa, Chair, Home, Shop</pre>
                            <pre>Share     :  <FaFacebook className='inline text-black'/>  <FaLinkedin className='inline text-black'/>  <AiFillTwitterCircle className='inline text-black'/></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='w-[1263px] border-[1.5px] pb-20 -mt-16'>
            <div className='w-[650px] h-[35px] flex justify-between items-center mx-auto pt-10'>
                <p className='text-2xl font-normal text-black'>Description</p>
                <p className='text-2xl font-normal text-[#9F9F9F]'>Additional Information</p>
                <p className='text-2xl font-normal text-[#9F9F9F]'>Reviews [5]</p>
            </div>
            <div className='w-[1150px]  mx-auto'>
                <p className='p-16 text-justify'>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                <br />
                <br />
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
                <div className='flex gap-10'>
                <div className='w-[605px] h-[350px] bg-[#FFF9E5] flex items-center justify-center'>
                    <Image
                            src={sofa2}
                            alt='productImage'
                            width={660}
                            height={435}
                            quality={100}
                            className=''
                        />
                    </div>
                    <div className='w-[605px] h-[350px] bg-[#FFF9E5] flex items-center justify-center'>
                    <Image
                            src={sofa}
                            alt='productImage'
                            width={660}
                            height={435}
                            quality={100}
                            className=''
                        />
                    </div>
                </div>
            </div>
        </div>
        <div>
        <RelatedProducts/>
        </div>
    </div>
  )
}

export default SingleProduct
import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'



import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  

import Image, { StaticImageData } from 'next/image'
import image from '../images/Mask group (5).png';
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
import { TbXboxXFilled } from 'react-icons/tb';
import Link from 'next/link';

const SingleProduct = ({ product , imageSrc, productname, price} : { product : string, imageSrc : StaticImageData, productname: string, price: string}) => {
  return (
    <div className='w-full overflow-hidden mb-20'>
        <div>
        <div className='xl:w-[1150px] p-7 sm:p-20 '>
            <div className='mt-10 sm:mt-0 mb-10'>
            <p className='text-[#9F9F9F] font-normal'>Home <RiArrowDropRightLine className='size-9 inline text-black' /> Shop
            <RiArrowDropRightLine className='size-9 inline text-black'/>
           <span  className='size-9 inline text-black font-light ml-3 mr-3 text-2xl'>    | </span>
                    <span className='inline font-normal text-black'> {product}</span>
                    </p>

            </div>
            <div className='xl:w-[1150px]  flex flex-col xl:flex-row items-start justify-center gap-20'>
                <div className='grid grid-cols-2 gap-5  sm:flex  xl:flex-col sm:gap-10 mx-auto sm:mx-0'>
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
                <div className='w-52 h-52 sm:w-[445px] sm:h-[500px] bg-[#FFF9E5] flex items-center justify-center mx-auto sm:mx-0'>
                    <Image
                        src={imageSrc}
                        alt='productImage'
                        width={480}
                        height={390}
                    />
                </div>
                <div>
                    <div className=' lg:w-[580px] lg:h-[730px]'>
                        <div className='flex flex-col justify-between h-[480px]'>
                        <p className='w-[50%] sm:w-auto text-3xl sm:text-5xl font-normal'>{productname}</p>
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
                        <p className='w-[50%] sm:w-[425px] text-[14px] text-black font-normal text-pretty'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                       <div> <p className='text-[#9F9F9F] font-normal text-[14px]'>Size</p>
                        <div className='flex gap-7'>
                            <div className='w-[30px] h-[30px] bg-[#FBEBB5] rounded-md pl-[10px] '>L</div>
                            <div className='w-[30px] h-[30px] bg-[#FAF4F4] rounded-md pl-[7px] '>XL</div>
                            <div className='w-[30px] h-[30px] bg-[#FAF4F4] rounded-md pl-[7px] '>XS</div>
                        </div>
                        </div>
                        <div>
                        <p>Color</p>
                        <div className='flex gap-7 mb-2'>
                            <div className='w-[30px] h-[30px] bg-[#816DFA] rounded-full  '></div>
                            <div className='w-[30px] h-[30px] bg-[#000000] rounded-full  '></div>
                            <div className='w-[30px] h-[30px] bg-[#CDBA7B] rounded-full  '></div>
                        </div>
                        </div>
                        <div><button className='p-2 sm:w-[125px] sm:h-[65px] sm:p-0 border-black border-[0.5px] rounded-md mr-7'><pre>-    1    +</pre></button>




                        <Sheet>
  <SheetTrigger> <button className='p-2 sm:w-[215px] sm:h-[65px] sm:p-0 border-black border-[1.5px] rounded-md sm:text-[20px]'>Add to Cart</button></SheetTrigger>
  <SheetContent>
    <SheetHeader>   
      <SheetTitle className='text-3xl font-semibold w-full p-5 border-b-[1.5px]'>Shopping Cart</SheetTitle>
      <SheetDescription className='flex flex-col sm:flex-row gap-5 items-center pt-10'>
      <div className='w-[105px] h-[105px] bg-[#FBEBB5] xl:flex items-center xl:justify-center xl:rounded-md xl:-mt-0'>
                        <Image
                            src={image}
                            alt='productImage'
                            width={100}
                            height={100}
                            quality={100}
                            className='col-start-2'
                        />
                    </div>
                    <div>
                        <p className='text-black'>Asgaard sofa</p>
                        <pre className='text-black'>1  x   <span className='text-[#B88E2F]'>Rs. 250,000.00</span></pre>
                    </div>
                    <div>
                    <TbXboxXFilled className='size-5 hidden sm:inline'/>

                    </div>
      </SheetDescription>
      <div className='flex justify-between pt-10 sm:pt-48 w-full border-b-[1.5px] pb-5'>
        <p>Subtotal</p>
        <p className='text-[#B88E2F] font-semibold'>Rs. 250,000.00</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-10'>
        <Link href="/cart"> <button className='w-[130px] h-[30px] border-black border-[1.5px] rounded-full text-[14px]'>View Cart</button></Link>
        <Link href="/checkout"> <button className='w-[130px] h-[30px] border-black border-[1.5px] rounded-full text-[14px]'>Checkout</button></Link>
      </div>
    </SheetHeader>
  </SheetContent>
</Sheet>

                       </div>




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
        <div className='xl:w-[1263px] sm:border-t-[1.5px] border-b-[1.5px] pb-20 sm:-mt-16'>
            <div className='sm:w-[650px] sm:h-[35px] flex gap-7 lg:gap-0  lg:justify-between lg:items-center mx-auto pt-10 pl-7 sm:pl-16 md:pl-0'>
                <p className='lg:text-2xl font-normal text-black'>Description</p>
                <p className='lg:text-2xl font-normal text-[#9F9F9F]'>Additional Information</p>
                <p className='lg:text-2xl font-normal text-[#9F9F9F] hidden sm:block'>Reviews [5]</p>
            </div>
            <div className='w-auto xl:w-[1150px]  mx-auto'>
                <p className='px-7 sm:p-16 text-justify mb-10 sm:mb-0'>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                <br />
                <br />
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
                <div className='flex flex-col xl:flex-row gap-10 items-center xl:items-start'>
                <div className='w-1/2 lg:w-[605px] lg:h-[350px] bg-[#FFF9E5] flex items-center justify-center'>
                    <Image
                            src={sofa2}
                            alt='productImage'
                            width={660}
                            height={435}
                            quality={100}
                            className=''
                        />
                    </div>
                    <div className='w-1/2 lg:w-[605px] lg:h-[350px] bg-[#FFF9E5] flex items-center justify-center'>
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







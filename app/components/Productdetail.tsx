

// import React from 'react';
// import { RiArrowDropRightLine } from 'react-icons/ri';
// import Image from 'next/image';
// import { FaFacebook, FaLinkedin } from 'react-icons/fa';
// import { AiFillTwitterCircle } from 'react-icons/ai';
// import { TbXboxXFilled } from 'react-icons/tb';
// import Link from 'next/link';
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import stars from '../images/Group 88.png';
// import { urlFor } from '@/sanity/lib/image';

// const Productdetail = ({ product }: { product: any }) => {
//   return (
//     <div className='w-full overflow-hidden mb-20'>
//       <div>
//         <div className='xl:w-[1150px] p-7 sm:p-20'>
//           <div className='mt-10 sm:mt-0 mb-10'>
//             <p className='text-[#9F9F9F] font-normal'>
//               Home <RiArrowDropRightLine className='size-9 inline text-black' /> Shop
//               <RiArrowDropRightLine className='size-9 inline text-black' />
//               <span className='size-9 inline text-black font-light ml-3 mr-3 text-2xl'> | </span>
//               <span className='inline font-normal text-black'>{product.name}</span>
//             </p>
//           </div>

//           <div className='xl:w-[1150px] flex flex-col xl:flex-row items-start justify-center gap-20'>
//             {/* Product Image */}
//             <div className='w-52 h-52 sm:w-[445px] sm:h-[500px] bg-[#FFF9E5] flex items-center justify-center mx-auto sm:mx-0'>
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={480}
//                 height={380}
//                 className='h-[380px]'
//               />
//             </div>

//             <div>
//               <div className='lg:w-[580px] lg:h-[730px]'>
//                 <div className='flex flex-col justify-between h-[480px]'>
//                   <p className='w-[50%] sm:w-auto text-3xl sm:text-5xl font-normal'>{product.name}</p>
//                   <p className='text-2xl font-medium text-[#9F9F9F]'>Rs. {product.price}</p>
//                   <span>
//                     <Image
//                       src={stars}
//                       alt='Rating'
//                       width={124}
//                       height={20}
//                       className='inline'
//                     />
//                     <span className='text-[#9F9F9F] font-normal'> | </span>
//                     <span className='text-[#9F9F9F] text-[14px] font-normal'> 5 Customer Review </span>
//                   </span>
//                   <p className='w-[50%] sm:w-[425px] text-[14px] text-black font-normal'>
//                     {product.description}
//                   </p>


//                   <div>
//                     <button className='p-2 sm:w-[125px] sm:h-[65px] sm:p-0 border-black border-[0.5px] rounded-md mr-7'>
//                       <pre>- 1 +</pre>
//                     </button>
//                     <Sheet>
//                       <SheetTrigger>
//                         <button className='p-2 sm:w-[215px] sm:h-[65px] sm:p-0 border-black border-[1.5px] rounded-md sm:text-[20px]'>
//                           Add to Cart
//                         </button>
//                       </SheetTrigger>
//                       <SheetContent>
//                         <SheetHeader>
//                           <SheetTitle className='text-3xl font-semibold w-full p-5 border-b-[1.5px]'>
//                             Shopping Cart
//                           </SheetTitle>
//                           <SheetDescription className='flex flex-col sm:flex-row gap-5 items-center pt-10'>
//                             <div className='w-[105px] h-[90px] xl:flex items-center xl:justify-center xl:rounded-md xl:-mt-0'>
//                               <Image
//                                 src={urlFor(product.image).url()}
//                                 alt={product.name}
//                                 width={100}
//                                 height={85}
//                                 quality={100}
//                                 className='col-start-2 h-[85px]'
//                               />
//                             </div>
//                             <div>
//                               <p className='text-black'>{product.name}</p>
//                               <pre className='text-black'>
//                                 1 x <span className='text-[#B88E2F]'>Rs. {product.price}</span>
//                               </pre>
//                             </div>
//                             <div>
//                               <TbXboxXFilled className='size-5 hidden sm:inline' />
//                             </div>
//                           </SheetDescription>
//                           <div className='flex justify-between pt-10 sm:pt-48 w-full border-b-[1.5px] pb-5'>
//                             <p>Subtotal</p>
//                             <p className='text-[#B88E2F] font-semibold'>Rs. {product.price}</p>
//                           </div>
//                           <div className='flex flex-col sm:flex-row gap-3 sm:gap-10'>
//                             <Link href='/cart'>
//                               <button className='w-[130px] h-[30px] border-black border-[1.5px] rounded-full text-[14px]'>
//                                 View Cart
//                               </button>
//                             </Link>
//                             <Link href='/checkout'>
//                               <button className='w-[130px] h-[30px] border-black border-[1.5px] rounded-full text-[14px]'>
//                                 Checkout
//                               </button>
//                             </Link>
//                           </div>
//                         </SheetHeader>
//                       </SheetContent>
//                     </Sheet>
//                   </div>
//                 </div>
//                 <div className='w-[540px] border-t-2 mt-10 pt-10'>
//                   <div className=' text-[#9F9F9F] flex flex-col gap-2'>
//                     <pre>SKU : {product.id}</pre>
//                     <pre>Category : {product.category}</pre>
//                     <pre>Tags : Sofa, Chair, Home, Shop</pre>
//                     <pre>
//                       Share : <FaFacebook className='inline text-black' />{' '}
//                       <FaLinkedin className='inline text-black' />{' '}
//                       <AiFillTwitterCircle className='inline text-black' />
//                     </pre>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='xl:w-[1263px] sm:border-t-[1.5px] border-b-[1.5px] pb-20 sm:-mt-16'>
//           <div className='sm:w-[650px] sm:h-[35px] flex gap-7 lg:gap-0 lg:justify-between lg:items-center mx-auto pt-10 pl-7 sm:pl-16 md:pl-0'>
//             <p className='lg:text-2xl font-normal text-black'>Description</p>
//             <p className='lg:text-2xl font-normal text-[#9F9F9F]'>Additional Information</p>
//             <p className='lg:text-2xl font-normal text-[#9F9F9F] hidden sm:block'>Reviews [5]</p>
//           </div>
//           <div className='w-auto xl:w-[1150px] mx-auto'>
//             <p className='px-7 sm:p-16 text-justify mb-10 sm:mb-0'>
//               {product.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productdetail;
















// 'use client'

// import React, { useState, useEffect } from 'react';
// import { RiArrowDropRightLine } from 'react-icons/ri';
// import Image from 'next/image';
// import { FaFacebook, FaLinkedin } from 'react-icons/fa';
// import { AiFillTwitterCircle } from 'react-icons/ai';
// import { TbXboxXFilled } from 'react-icons/tb';
// import Link from 'next/link';
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import stars from '../images/Group 88.png';
// import { urlFor } from '@/sanity/lib/image';

// const Productdetail = ({ product }: { product: any }) => {
//   const [cart, setCart] = useState<any[]>([]);

//   // Load cart from localStorage on page load
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(storedCart);
//   }, []);

//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(prevQuantity => prevQuantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prevQuantity => prevQuantity - 1);
//     }
//   };

//   const addToCart = (product: any) => {
//     const existingProductIndex = cart.findIndex((item) => item.id === product.id);

//     if (existingProductIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingProductIndex].quantity += quantity; // ✅ User-selected quantity added
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     } else {
//       const updatedCart = [...cart, { ...product, quantity }]; // ✅ User-selected quantity stored
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
//   };

//   return (
//     <div className='w-full overflow-hidden mb-20'>
//       <div>
//         <div className='xl:w-[1150px] p-7 sm:p-20'>
//           <div className='mt-10 sm:mt-0 mb-10'>
//             <p className='text-[#9F9F9F] font-normal'>
//               Home <RiArrowDropRightLine className='size-9 inline text-black' /> Shop
//               <RiArrowDropRightLine className='size-9 inline text-black' />
//               <span className='size-9 inline text-black font-light ml-3 mr-3 text-2xl'> | </span>
//               <span className='inline font-normal text-black'>{product.name}</span>
//             </p>
//           </div>

//           <div className='xl:w-[1150px] flex flex-col xl:flex-row items-start justify-center gap-20'>
//             {/* Product Image */}
//             <div className='w-52 h-52 sm:w-[445px] sm:h-[500px] bg-[#FFF9E5] flex items-center justify-center mx-auto sm:mx-0'>
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={480}
//                 height={380}
//                 className='h-[380px]'
//               />
//             </div>

//             <div>
//               <div className='lg:w-[580px] lg:h-[730px]'>
//                 <div className='flex flex-col justify-between h-[480px]'>
//                   <p className='w-[50%] sm:w-auto text-3xl sm:text-5xl font-normal'>{product.name}</p>
//                   <p className='text-2xl font-medium text-[#9F9F9F]'>Rs. {product.price}</p>
//                   <span>
//                     <Image
//                       src={stars}
//                       alt='Rating'
//                       width={124}
//                       height={20}
//                       className='inline'
//                     />
//                     <span className='text-[#9F9F9F] font-normal'> | </span>
//                     <span className='text-[#9F9F9F] text-[14px] font-normal'> 5 Customer Review </span>
//                   </span>
//                   <p className='w-[50%] sm:w-[425px] text-[14px] text-black font-normal'>
//                     {product.description}
//                   </p>

//                   <div>
//                     <div>
//                       <button 
//                         className='p-2 sm:w-[125px] sm:h-[65px] sm:p-0 border-black border-[0.5px] rounded-md mr-7 flex justify-center items-center gap-2 my-5'
//                       >
//                         <span onClick={decreaseQuantity} className="cursor-pointer">-</span>
//                         <span>{quantity}</span>
//                         <span onClick={increaseQuantity} className="cursor-pointer">+</span>
//                       </button>
//                     </div>

//                     <Sheet>
//                       <SheetTrigger>
//                         <button
//                           onClick={() => addToCart(product)}
//                           className='p-2 sm:w-[215px] sm:h-[65px] sm:p-0 border-black border-[1.5px] rounded-md sm:text-[20px]'
//                         >
//                           Add to Cart
//                         </button>
//                       </SheetTrigger>
//                       <SheetContent>
//                         <SheetHeader>
//                           <SheetTitle className='text-3xl font-semibold w-full p-5 border-b-[1.5px]'>
//                             Shopping Cart
//                           </SheetTitle>
//                           <SheetDescription className='flex flex-col sm:flex-row gap-5 items-center pt-10'>
//                             <div className='w-[105px] h-[90px] xl:flex items-center xl:justify-center xl:rounded-md xl:-mt-0'>
//                               <Image
//                                 src={urlFor(product.image).url()}
//                                 alt={product.name}
//                                 width={100}
//                                 height={85}
//                                 quality={100}
//                                 className='col-start-2 h-[85px]'
//                               />
//                             </div>
//                             <div>
//                               <p className='text-black'>{product.name}</p>
//                               <pre className='text-black'>
//                                 {quantity} x <span className='text-[#B88E2F]'>Rs. {product.price}</span> {/* ✅ Dynamic Quantity */}
//                               </pre>
//                             </div>
//                             <div>
//                               <TbXboxXFilled className='size-5 hidden sm:inline' />
//                             </div>
//                           </SheetDescription>
//                           <div className='flex justify-between pt-10 sm:pt-48 w-full border-b-[1.5px] pb-5'>
//                             <p>Subtotal</p>
//                             <p className='text-[#B88E2F] font-semibold'>Rs. {product.price * quantity}</p> {/* ✅ Subtotal Updated */}
//                           </div>
//                           <div className='flex flex-col sm:flex-row gap-3 sm:gap-10'>
//                             <Link href='/cart'>
//                               <button className='w-[130px] h-[30px] border-black border-[1.5px] rounded-full text-[14px]'>
//                                 View Cart
//                               </button>
//                             </Link>
//                             <Link href='/checkout'>
//                               <button className='w-[130px] h-[30px] border-black border-[1.5px] rounded-full text-[14px]'>
//                                 Checkout
//                               </button>
//                             </Link>
//                           </div>
//                         </SheetHeader>
//                       </SheetContent>
//                     </Sheet>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productdetail;







'use client'

import React, { useState, useEffect } from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import Image from 'next/image';
import { TbXboxXFilled } from 'react-icons/tb';
import Link from 'next/link';
import Swal from 'sweetalert2'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import stars from '../images/Group 88.png';
import { urlFor } from '@/sanity/lib/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Product } from '@/types/Products';

const Productdetail = ({ product }: { product: Product }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);

  // On component mount, load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);


  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Add the product to cart (or update quantity if it exists)
 const addToCart = (prod: Product) => {
    const existingIndex = cart.findIndex((item) => item.id === prod.id);
    let newCart;
    if (existingIndex !== -1) {
      newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart = [...cart, { ...prod, quantity }];
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    Swal.fire({
      title: "Added to Cart!",
      text: `${prod.name} has been added to your cart.`,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
      timer: 2000, // Auto-close after 2 seconds
      showConfirmButton: false, // Hide the confirm button for auto-close
    });

  };

  // Remove the product from the cart and update localStorage
  const removeProduct = () => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Check if the product is in the cart
  const productInCart = cart.find((item) => item.id === product.id);

  return (
    <div className='w-full overflow-hidden mb-20'>
      <div>
        <div className='xl:w-[1150px] p-7 sm:p-20'>
          <div className='mt-10 sm:mt-0 mb-10'>
            <p className='text-[#9F9F9F] font-normal'>
              Home{' '}
              <RiArrowDropRightLine className='inline text-black' /> Shop{' '}
              <RiArrowDropRightLine className='inline text-black' />
              <span className='inline text-black font-light ml-3 mr-3 text-2xl'> | </span>
              <span className='inline font-normal text-black'>{product.name}</span>
            </p>
          </div>

          <div className='xl:w-[1150px] flex flex-col xl:flex-row items-start justify-center gap-20'>
            {/* Product Image */}
            <div className='w-52 h-52 sm:w-[445px] sm:h-[500px] bg-[#FFF9E5] flex items-center justify-center mx-auto sm:mx-0'>
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={480}
                height={380}
                priority 
                className='h-[380px]'
              />
            </div>

            <div>
              <div className='lg:w-[580px] lg:h-[730px]'>
                <div className='flex flex-col justify-between h-[480px]'>
                  <p className='w-[50%] sm:w-auto text-3xl sm:text-5xl font-normal'>
                    {product.name}
                  </p>
                  <p className='text-2xl font-medium text-[#9F9F9F]'>Rs. {product.price}</p>
                  <span>
                    <Image
                      src={stars}
                      alt='Rating'
                      width={124}
                      height={20}
                      className='inline'
                    />
                    <span className='text-[#9F9F9F] font-normal'> | </span>
                    <span className='text-[#9F9F9F] text-[14px] font-normal'>
                      5 Customer Review
                    </span>
                  </span>
                  <p className='w-[50%] sm:w-[425px] text-[14px] text-black font-normal'>
                    {product.description}
                  </p>

                  <div>
                    <div>
                      <button
                        className='p-2 sm:w-[125px] sm:h-[65px] sm:p-0 border border-black rounded-md mr-7 flex justify-center items-center gap-2 my-5'
                      >
                        <span onClick={decreaseQuantity} className='cursor-pointer'>
                          -
                        </span>
                        <span>{quantity}</span>
                        <span onClick={increaseQuantity} className='cursor-pointer'>
                          +
                        </span>
                      </button>
                    </div>

                    <Sheet>
                      <SheetTrigger>
                        <button
                          onClick={() => addToCart(product)}
                          className='p-2 sm:w-[215px] sm:h-[65px] border border-black rounded-md sm:text-[20px]'
                        >
                          Add to Cart
                        </button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle className='text-3xl font-semibold w-full p-5 border-b border-black'>
                            Shopping Cart
                          </SheetTitle>
                          {productInCart ? (
                            <SheetDescription className='flex flex-col sm:flex-row gap-5 items-center pt-10'>
                              <div className='w-[105px] h-[90px] xl:flex items-center justify-center rounded-md'>
                                <Image
                                  src={urlFor(product.image).url()}
                                  alt={product.name}
                                  width={100}
                                  height={85}
                                  quality={100}
                                  className='h-[85px]'
                                />
                              </div>
                              <div>
                                <p className='text-black'>{product.name}</p>
                                <pre className='text-black'>
                                  {productInCart.quantity} x{' '}
                                  <span className='text-[#B88E2F]'>Rs. {product.price}</span>
                                </pre>
                              </div>
                              <div>
                                {/* X icon to remove the product */}
                                <TbXboxXFilled
                                  onClick={removeProduct}
                                  className='cursor-pointer text-black'
                                />
                              </div>
                            </SheetDescription>
                          ) : (
                            <div className='p-5 text-center'>
                              <p>Product removed from cart.</p>
                            </div>
                          )}

                          {/* Subtotal Section */}
                          {productInCart ? (
                            <div className='flex justify-between pt-10 sm:pt-48 w-full border-b border-black pb-5'>
                              <p>Subtotal</p>
                              <p className='text-[#B88E2F] font-semibold'>
                                Rs. {product.price * productInCart.quantity}
                              </p>
                            </div>
                          ) : (
                            <div className='flex justify-between pt-10 sm:pt-48 w-full border-b border-black pb-5'>
                              <p>Subtotal</p>
                              <p className='text-[#B88E2F] font-semibold'>Rs. 0</p>
                            </div>
                          )}

                          <div className='flex flex-col sm:flex-row gap-3 sm:gap-10'>
                            <Link href='/cart'>
                              <button className='w-[130px] h-[30px] border border-black rounded-full text-[14px]'>
                                View Cart
                              </button>
                            </Link>
                            <Link href='/checkout'>
                              <button className='w-[130px] h-[30px] border border-black rounded-full text-[14px]'>
                                Checkout
                              </button>
                            </Link>
                          </div>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
                <div className='w-[540px] border-t-2 mt-10 pt-10'>
                  <div className=' text-[#9F9F9F] flex flex-col gap-2'>
                    <pre>SKU : {product.id}</pre>
                    <pre>Category : {product.category}</pre>
                    <pre>Tags : Sofa, Chair, Home, Shop</pre>
                    <pre>
                      Share : <FaFacebook className='inline text-black' />{' '}
                      <FaLinkedin className='inline text-black' />{' '}
                      <AiFillTwitterCircle className='inline text-black' />
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:w-[1263px] sm:border-t-[1.5px] border-b-[1.5px] pb-20 sm:-mt-16'>
          <div className='sm:w-[650px] sm:h-[35px] flex gap-7 lg:gap-0 lg:justify-between lg:items-center mx-auto pt-10 pl-7 sm:pl-16 md:pl-0'>
            <p className='lg:text-2xl font-normal text-black'>Description</p>
            <p className='lg:text-2xl font-normal text-[#9F9F9F]'>Additional Information</p>
            <p className='lg:text-2xl font-normal text-[#9F9F9F] hidden sm:block'>Reviews [5]</p>
          </div>
          <div className='w-auto xl:w-[1150px] mx-auto'>
            <p className='px-7 sm:p-16 text-justify mb-10 sm:mb-0'>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;


















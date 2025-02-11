// import React from 'react'

// import Link from 'next/link';

// import { IoHeartOutline, IoPersonOutline, IoSearchOutline, IoMenuSharp } from "react-icons/io5";



// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"



// const Header = () => {
//   return (
//         <header className='fixed w-screen  h-[70px] flex items-center justify-center z-50'>
//   <div className=" flex lg:w-[1200px] lg:flex gap-40 items-end justify-end">
   
//     <nav className=" lg:flex gap-14 text-black font-medium lg:justify-center hidden">
//       <Link href="/" className='hover:text-[#fbbf24] duration-300'>Home</Link>
//       <Link href="/shop" className='hover:text-[#fbbf24] duration-300'>Shop</Link>
//       <Link href="/blog"  className='hover:text-[#fbbf24] duration-300'>Blog</Link>
//       <Link href="/contact" className='hover:text-[#fbbf24] duration-300'>Contact</Link>
//     </nav>
   
//        <div className='lg:w-[230px] flex flex-row items-center gap-8'>
//        <Link href="/account"> <IoPersonOutline className='size-6'/> </Link>
//        <IoSearchOutline className='size-6 cursor-pointer'/>
//        <Link href="/checkout"><IoHeartOutline className='size-6'/></Link>
//        <Link href="/cart">
//        <div className='-ml-4'>
//        <div className="dropdown dropdown-end">
//   <div tabIndex={0} role="button" className="btn btn-ghost btn-circle group cursor-pointer">
//     <div className="indicator">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5 group-hover:text-[#fbbf24] duration-300" 
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor">
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//       </svg>
//       <span className="badge badge-sm indicator-item">8</span>
//     </div>
//   </div>
//   <div
//     tabIndex={0}
//     className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
//     <div className="card-body">
//       <span className="text-lg font-bold">8 Items</span>
//       <span className="text-info">Subtotal: $999</span>
//       <div className="card-actions">
//         <button className="btn btn-primary btn-block">View cart</button>
//       </div>
//     </div>
//   </div>
// </div>

//        </div>
//        </Link>
//        </div>

//   </div>

//   <Sheet>
//   <SheetTrigger className='lg:hidden'>       <IoMenuSharp className='fixed right-5 top-8'/>
//   </SheetTrigger>
//   <SheetContent >
//     <SheetHeader>
//       <SheetTitle ></SheetTitle>
//       <SheetDescription>
//       <nav className=" flex flex-col gap-5">
//       <Link href="/">Home</Link>
//       <Link href="/shop">Shop</Link>
//       <Link href="/blog">Blog</Link>
//       <Link href="/contact">Contact</Link>
//     </nav>
//       </SheetDescription>
//     </SheetHeader>
//   </SheetContent>
// </Sheet>
// </header>

//   )
// }

// export default Header























// 'use client'
// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { IoHeartOutline, IoPersonOutline, IoSearchOutline, IoMenuSharp } from "react-icons/io5"
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"

// import { getCartItems } from '../../app/actions/actions' // Ensure this function exists

// const Header = () => {
//   const [cartCount, setCartCount] = useState<number>(0)
//   const [cartSubtotal, setCartSubtotal] = useState<number>(0)

//   // Function to update cart values dynamically
//   const updateCart = () => {
//     const cart = getCartItems()  
//     const count = cart.reduce((acc, item) => acc + (item.quantity || 1), 0)
//     const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    
//     setCartCount(count)
//     setCartSubtotal(subtotal)
//   }

//   useEffect(() => {
//     updateCart() // Fetch initial cart data

//     // Listen for cart updates
//     const handleStorageChange = () => updateCart()

//     // Listen for localStorage changes
//     window.addEventListener("storage", handleStorageChange)

//     // Listen for custom events (if cart is updated in the same tab)
//     window.addEventListener("cartUpdated", handleStorageChange)

//     return () => {
//       window.removeEventListener("storage", handleStorageChange)
//       window.removeEventListener("cartUpdated", handleStorageChange)
//     }
//   }, [])

//   return (
//     <header className='fixed w-screen h-[70px] flex items-center justify-center z-50'>
//       <div className="flex lg:w-[1200px] lg:flex gap-40 items-end justify-end">
//         <nav className="lg:flex gap-14 text-black font-medium lg:justify-center hidden">
//           <Link href="/" className='hover:text-[#fbbf24] duration-300'>Home</Link>
//           <Link href="/shop" className='hover:text-[#fbbf24] duration-300'>Shop</Link>
//           <Link href="/blog" className='hover:text-[#fbbf24] duration-300'>Blog</Link>
//           <Link href="/contact" className='hover:text-[#fbbf24] duration-300'>Contact</Link>
//         </nav>

//         <div className='lg:w-[230px] flex flex-row items-center gap-8'>
//           <Link href="/account">
//             <IoPersonOutline className='size-6'/>
//           </Link>
//           <IoSearchOutline className='size-6 cursor-pointer'/>
//           <Link href="/checkout">
//             <IoHeartOutline className='size-6'/>
//           </Link>
//           <Link href="/cart">
//             <div className='-ml-4'>
//               <div className="dropdown dropdown-end">
//                 <div tabIndex={0} role="button" className="btn btn-ghost btn-circle group cursor-pointer">
//                   <div className="indicator">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 group-hover:text-[#fbbf24] duration-300" 
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                     {/* Show the actual cart count */}
//                     <span className="badge badge-sm indicator-item">{cartCount}</span>
//                   </div>
//                 </div>
//                 <div
//                   tabIndex={0}
//                   className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
//                   <div className="card-body">
//                     <span className="text-lg font-bold">{cartCount} Items</span>
//                     {/* Show actual subtotal */}
//                     <span className="text-info">Subtotal: ${cartSubtotal}</span>
//                     <div className="card-actions">
//                       <button className="btn btn-primary btn-block">View cart</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <Sheet>
//         <SheetTrigger className='lg:hidden'>
//           <IoMenuSharp className='fixed right-5 top-8'/>
//         </SheetTrigger>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle></SheetTitle>
//             <SheetDescription>
//               <nav className="flex flex-col gap-5">
//                 <Link href="/">Home</Link>
//                 <Link href="/shop">Shop</Link>
//                 <Link href="/blog">Blog</Link>
//                 <Link href="/contact">Contact</Link>
//               </nav>
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </header>
//   )
// }

// export default Header













'use client'
import React from 'react'
import Link from 'next/link'
import { IoHeartOutline, IoPersonOutline, IoSearchOutline, IoMenuSharp } from "react-icons/io5"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useCart} from '../actions/CartContext'

const Header = () => {
  

  const { cartCount, cartSubtotal } = useCart();


  return (
    <header className='fixed w-screen h-[70px] flex items-center justify-center z-50'>
      <div className="flex lg:w-[1200px] lg:flex gap-40 items-end justify-end">
        <nav className="lg:flex gap-14 text-black font-medium lg:justify-center hidden">
          <Link href="/" prefetch={true} className='hover:text-[#B88E2F] duration-300'>Home</Link>
          <Link href="/shop" prefetch={true} className='hover:text-[#B88E2F] duration-300'>Shop</Link>
          <Link href="/blog" prefetch={true} className='hover:text-[#B88E2F] duration-300'>Blog</Link>
          <Link href="/contact" prefetch={true} className='hover:text-[#B88E2F] duration-300'>Contact</Link>
        </nav>

        <div className='lg:w-[230px] flex flex-row items-center gap-8'>
          <Link href="/account">
            <IoPersonOutline className='size-6'/>
          </Link>
          <IoSearchOutline className='size-6 cursor-pointer'/>
          <Link href="/checkout">
            <IoHeartOutline className='size-6'/>
          </Link>
          <Link href="/cart" prefetch={true}>
            <div className='-ml-4'>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle group cursor-pointer">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:text-[#B88E2F] duration-300" 
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {/* Show the actual cart count */}
                    <span className="badge badge-sm indicator-item">{cartCount || 0}</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                  <div className="card-body bg-white border-[1px] border-[#B88E2F] rounded-sm">
                    <span className="text-lg font-bold">{cartCount || 0} Items</span>
                    {/* Show actual subtotal */}
                    <span className=" text-[#B88E2F]">Subtotal: ${cartSubtotal}</span>
                    <div className="card-actions">
                    <Link href="/cart" prefetch={true}>  <button className="btn btn-block bg-[#B88E2F] text-black hover:bg-[#B88E2F]/80">View cart</button> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Sheet>
        <SheetTrigger className='lg:hidden'>
          <IoMenuSharp className='fixed right-5 top-8'/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <nav className="flex flex-col gap-5">
                <Link href="/" prefetch={true}>Home</Link>
                <Link href="/shop" prefetch={true}>Shop</Link>
                <Link href="/blog" prefetch={true}>Blog</Link>
                <Link href="/contact" prefetch={true}>Contact</Link>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Header





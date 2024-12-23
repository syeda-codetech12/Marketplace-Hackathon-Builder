import React from 'react'

import Link from 'next/link';

import { IoCartOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline, IoMenuSharp } from "react-icons/io5";



import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Header = () => {
  return (
        <header className='fixed w-screen  h-[70px] flex items-center justify-center z-50'>
  <div className=" flex lg:w-[1200px] lg:flex gap-40 items-end justify-end">
   
    <nav className=" lg:flex gap-14 text-black font-medium lg:justify-center hidden">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
   
       <div className='lg:w-[230px] flex flex-row  gap-8'>
       <Link href="/account"> <IoPersonOutline className='size-6'/> </Link>
       <IoSearchOutline className='size-6 cursor-pointer'/>
       <Link href="/checkout"><IoHeartOutline className='size-6'/></Link>
       <Link href="/cart"><IoCartOutline className='size-6'/></Link>
       </div>

  </div>

  <Sheet>
  <SheetTrigger className='lg:hidden'>       <IoMenuSharp className='fixed right-5 top-8'/>
  </SheetTrigger>
  <SheetContent >
    <SheetHeader>
      <SheetTitle ></SheetTitle>
      <SheetDescription>
      <nav className=" flex flex-col gap-5">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</header>

  )
}

export default Header
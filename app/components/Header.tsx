import React from 'react'

import Link from 'next/link';

import { IoCartOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";


const Header = () => {
  return (
        <header className='fixed h-[70px] flex items-center justify-center z-50'>
  <div className="w-[1200px] flex gap-40 items-end justify-end">
   
    <nav className=" flex gap-14 text-black font-medium justify-center">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
   
       <div className='flex gap-9 '>
       <Link href="/account"> <IoPersonOutline className='size-6'/> </Link>
       <IoSearchOutline className='size-6 cursor-pointer'/>
       <Link href="/checkout"><IoHeartOutline className='size-6'/></Link>
       <Link href="/cart"> <IoCartOutline className='size-6'/> </Link>
       </div>
  </div>
</header>

  )
}

export default Header
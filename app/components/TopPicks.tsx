// 'use client'

// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { Product } from '@/types/Products';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';
// import Swal from 'sweetalert2'
// import { ShoppingCart } from 'lucide-react';

// const TopPicks = () => {
  
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [quantity] = useState(1);

//   // On component mount, load cart from localStorage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCart(storedCart);
//   }, []);

//   // Add the product to cart (or update quantity if it exists)
//  const addToCart = (prod: Product) => {
//     const existingIndex = cart.findIndex((item) => item.id === prod.id);
//     let newCart;
//     if (existingIndex !== -1) {
//       newCart = [...cart];
//       newCart[existingIndex].quantity += quantity;
//     } else {
//       newCart = [...cart, { ...prod, quantity }];
//     }
//     setCart(newCart);
//     localStorage.setItem('cart', JSON.stringify(newCart));
//     Swal.fire({
//       title: "Added to Cart!",
//       text: `${prod.name} has been added to your cart.`,
//       icon: "success",
//       confirmButtonColor: "#3085d6",
//       confirmButtonText: "OK",
//       timer: 1000, // Auto-close after 1 seconds
//       showConfirmButton: false, // Hide the confirm button for auto-close
//     });
//   }
  

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProduct : Product[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true]{
//           _id,
//           "id": id,
//           name, 
//           price,
//           "image": image.asset._ref,
// }[0..3]`)
//       setProducts(fetchedProduct);
//     }
//     fetchProducts();
//   }, []);


//   return (
//     <div className="min-h-screen bg-gray-50">
//        <section className="xl:w-[1150px] mx-auto mt-12 pt-16 pb-20">
//       {/* Heading */}
//       <h2 className="text-4xl font-medium text-black mb-10 mx-auto text-center">Top Picks for you</h2>
//       <p className="text-[#9F9F9F] font-medium mb-12 text-center px-5 lg:px-0">Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.</p>

//       {/* Products Grid */}
//       <div className="flex justify-center px-7">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
//           {products.map((product) => (
//             <div key={product._id} className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
//               <div>
//                 <Link href={`/product/${product.id}`}>
//                 {product.image && (
//                   <Image
//                   src={urlFor(product.image).url()}
//                   alt='Product image'
//                   width={400}
//                   height={190}
//                   priority 
//                   className="object-cover h-[190px] lg:h-[250px] md:rounded-2xl duration-500 group-hover:scale-110 "/>
//                 )
//                 }
//                 <h3 className=" font-normal text-black text-2xl my-2 pt-3">{product.name}</h3>
//                 <p className="text-black font-medium text-[20px]">Rs.{product.price}</p>
//                 </Link>
//                 </div>
//                 <div className='hidden lg:block absolute -top-20 group-hover:top-5 duration-500 scroll-m-20 text-4xl font-bold tracking-tight bg-zinc-900/70 text-center text-white py-2 w-full h-14'>
//                     <button 
//                                               onClick={() => addToCart(product)}
//                     className='text-[17px] font-bold uppercase text-white'>
//                       <ShoppingCart className='inline-block mr-2'/>
//                       Add to Cart</button>
//                   </div>
                 
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//       <div className='w-full flex items-center justify-center '>
//       <Link href="/shop"><button className='w-[115px] h-[49px] border-black border-b-2 text-2xl font-medium cursor-pointer -mt-20 lg:-mt-10 mb-10'>View All</button></Link>
//       </div>
//     </div>
//   );
// };

// export default TopPicks;











'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/Products';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Swal from 'sweetalert2'
import { ShoppingCart, Heart } from 'lucide-react';
import { addToWishlist, getWishlistItems } from '../actions/wishlist';

const TopPicks = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [quantity] = useState(1);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const handleWishlist = (product: Product) => {
    const wishlist = getWishlistItems();
    const exists = wishlist.some((item) => item._id === product._id);

    if (exists) {
      Swal.fire({
        title: 'Already Added!',
        text: 'This item is already in your wishlist.',
        icon: 'info',
        confirmButtonText: 'OK',
      });
    } else {
      addToWishlist(product);
      Swal.fire({
        title: 'Added!',
        text: 'Item has been added to your wishlist.',
        icon: 'success',
        timer: 1000,
        confirmButtonText: 'OK',

      });
    }
  };

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
      timer: 1000,
      showConfirmButton: false,
    });
  }

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Product[] = await client.fetch(`*[_type == "product" && isFeaturedProduct == true]{
          _id,
          "id": id,
          name, 
          price,
          "image": image.asset._ref,
      }[0..3]`);
      setProducts(fetchedProduct);
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="xl:w-[1150px] mx-auto mt-12 pt-16 pb-20">
        <h2 className="text-4xl font-medium text-black mb-10 mx-auto text-center">Top Picks for you</h2>
        <p className="text-[#9F9F9F] font-medium mb-12 text-center px-5 lg:px-0">Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.</p>

        <div className="flex justify-center px-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">
            {products.map((product) => (           

              <div key={product._id} className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
  <div>
    <Link href={`/product/${product.id}`}>
      {product.image && (
        <Image
          src={urlFor(product.image).url()}
          alt='Product image'
          width={400}
          height={190}
          priority 
          className="object-cover h-[190px] lg:h-[250px] md:rounded-2xl duration-500 group-hover:scale-110"
        />
      )}
      <h3 className="font-normal text-black text-2xl my-2 pt-3">{product.name}</h3>
      <p className="text-black font-medium text-[20px]">Rs.{product.price}</p>
    </Link>
  </div>

  {/* Wishlist Button Placed Separately Below Image */}
  <button 
    onClick={(e) => {
      e.preventDefault();
      handleWishlist(product);
    }} 
    className="absolute bottom-24 mb-2 left-2 p-2 bg-white rounded-full shadow-md"
  >
    <Heart className="w-6 h-6 text-black hover:text-red-700" />
  </button>

  {/* Hover Effect Div (Now Only for Add to Cart) */}
  <div className='hidden lg:block absolute -top-28 group-hover:top-0 duration-500 bg-zinc-900/70 w-full h-14'>
    <div className='flex flex-col items-center justify-center gap-2 h-full'>
      <button 
        onClick={() => addToCart(product)}
        className="text-[17px] font-bold uppercase text-white hover:text-gray-200 transition-colors"
      >
        <ShoppingCart className="inline-block mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
</div>

            ))}
          </div>
        </div>
      </section>
      
      <div className='w-full flex items-center justify-center '>
        <Link href="/shop">
          <button className='w-[115px] h-[49px] border-black border-b-2 text-2xl font-medium cursor-pointer -mt-20 lg:-mt-10 mb-10'>
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopPicks;
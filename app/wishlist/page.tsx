// 'use client';

// import React, { useEffect, useState } from 'react';
// import Main from '../components/Main';
// import Image from 'next/image';
// import { RiDeleteBin7Fill } from 'react-icons/ri';
// import Facilities from '../components/Facilities';
// import { urlFor } from '@/sanity/lib/image';
// import { Product } from '../../types/Products';
// import Swal from 'sweetalert2';
// import { useRouter } from 'next/navigation';
// import { getWishlistItems, removeFromWishlist } from '../actions/wishlist'; 

// const Wishlist = () => {
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setWishlistItems(getWishlistItems());
//   }, []);

//   const handleRemove = (productId: string) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       icon: 'warning',
//       showCancelButton: true,
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, remove it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setWishlistItems(removeFromWishlist(productId));
//         Swal.fire('Removed!', 'Item has been removed', 'success');
//       }
//     });
//   };

//   const router = useRouter();
//   const handleProceed = () => {
//     Swal.fire({
//       title: 'Proceed to Checkout?',
//       text: 'Move wishlist items to cart before checkout.',
//       icon: 'question',
//       showCancelButton: true,
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, proceed!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         router.push('/shop'); 
//       }
//     });
//   };

//   return (
//     <div className="h-auto">
//       <Main heading="Wishlist" page="Wishlist" />

//       <div className="flex flex-col lg:flex-row p-6 md:p-14 lg:py-28 gap-6 lg:gap-[6rem]">
//         <div className="flex flex-col gap-10 w-full lg:w-2/3">
//           <div className="bg-[#F9F1E7] w-full px-4 md:px-6 h-[55px] flex items-center">
//             <div className="flex flex-wrap justify-between items-center px-4 lg:px-20 md:px-10 font-poppins font-medium w-full text-sm md:text-base">
//               <p className="flex-1 text-center">Product</p>
//               <p className="text-right pr-10">Price</p>
//             </div>
//           </div>

//           {wishlistItems.length > 0 ? (
//             wishlistItems.map((product) => (
//               <div
//                 key={product._id}
//                 className="flex items-center gap-4 p-4 rounded-lg bg-white"
//               >
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.name}
//                   width={60}
//                   height={60}
//                   className="w-[60px] h-[60px]"
//                 />
//                 <p className="text-xs md:text-base flex-grow">{product.name}</p>
//                 <p className="text-xs md:text-base">Rs. {product.price.toLocaleString()}</p>
//                 <RiDeleteBin7Fill
//                   className="text-[#B88E2F] cursor-pointer"
//                   onClick={() => handleRemove(product._id)}
//                 />
//               </div>
//             ))
//           ) : (
//             <div className="text-xl text-[#9F9F9F] text-center p-10 font-semibold">
//               Your Wishlist is Empty
//             </div>
//           )}
//         </div>

//         <div className="w-full lg:w-1/3 flex justify-center">
//           <div className="w-full h-40 max-w-md p-6 bg-[#F9F1E7] rounded-lg">
//             <h1 className="text-xl font-bold text-center mb-4">Wishlist</h1>
//             <button
//               className="block mt-4 w-full py-3 border border-black rounded-md hover:text-white hover:bg-black transition"
//               onClick={handleProceed}
//             >
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="my-20">
//         <Facilities />
//       </div>
//     </div>
//   );
// };

// export default Wishlist;





















// 'use client';

// import React, { useEffect, useState } from 'react';
// import Main from '../components/Main';
// import Image from 'next/image';
// import { RiDeleteBin7Fill } from 'react-icons/ri';
// import Facilities from '../components/Facilities';
// import { urlFor } from '@/sanity/lib/image';
// import { Product } from '../../types/Products';
// import Swal from 'sweetalert2';
// import { useRouter } from 'next/navigation';
// import { getWishlistItems, removeFromWishlist, addToWishlist } from '../actions/wishlist';

// const Wishlist = () => {
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setWishlistItems(getWishlistItems());
//   }, []);

//   const handleRemove = (productId: string) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       icon: 'warning',
//       showCancelButton: true,
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, remove it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setWishlistItems(removeFromWishlist(productId));
//         Swal.fire('Removed!', 'Item has been removed', 'success');
//       }
//     });
//   };

//   const handleAddToWishlist = (product: Product) => {
//     const exists = wishlistItems.some((item) => item._id === product._id);
//     if (exists) {
//       Swal.fire({
//         title: 'Already Added!',
//         text: 'This item is already in your wishlist.',
//         icon: 'info',
//         confirmButtonText: 'OK',
//       });
//     } else {
//       addToWishlist(product);
//       setWishlistItems([...wishlistItems, product]);
//       Swal.fire({
//         title: 'Added!',
//         text: 'Item has been added to your wishlist.',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   const router = useRouter();
//   const handleProceed = () => {
//     Swal.fire({
//       title: 'Proceed to Checkout?',
//       text: 'Move wishlist items to cart before checkout.',
//       icon: 'question',
//       showCancelButton: true,
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, proceed!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         router.push('/shop');
//       }
//     });
//   };

//   return (
//     <div className="h-auto">
//       <Main heading="Wishlist" page="Wishlist" />

//       <div className="flex flex-col lg:flex-row p-6 md:p-14 lg:py-28 gap-6 lg:gap-[6rem]">
//         <div className="flex flex-col gap-10 w-full lg:w-2/3">
//           <div className="bg-[#F9F1E7] w-full px-4 md:px-6 h-[55px] flex items-center">
//             <div className="flex flex-wrap justify-between items-center px-4 lg:px-20 md:px-10 font-poppins font-medium w-full text-sm md:text-base">
//               <p className="flex-1 text-center">Product</p>
//               <p className="text-right pr-10">Price</p>
//             </div>
//           </div>

//           {wishlistItems.length > 0 ? (
//             wishlistItems.map((product) => (
//               <div
//                 key={product._id}
//                 className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.name}
//                   width={60}
//                   height={60}
//                   className="w-[60px] h-[60px] object-cover"
//                 />
//                 <p className="text-xs md:text-base flex-grow">{product.name}</p>
//                 <p className="text-xs md:text-base">Rs. {product.price.toLocaleString()}</p>
//                 <RiDeleteBin7Fill
//                   className="text-[#B88E2F] cursor-pointer hover:text-red-500 transition-colors"
//                   onClick={() => handleRemove(product._id)}
//                 />
//                 {/* Add to Wishlist Button */}
//                 <button
//                   className="bg-[#B88E2F] text-white px-4 py-2 rounded-md hover:bg-[#9F7A2F] transition-colors"
//                   onClick={() => handleAddToWishlist(product)}
//                 >
//                   Add to Wishlist
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div className="text-xl text-[#9F9F9F] text-center p-10 font-semibold">
//               Your Wishlist is Empty
//             </div>
//           )}
//         </div>

//         <div className="w-full lg:w-1/3 flex justify-center">
//           <div className="w-full h-40 max-w-md p-6 bg-[#F9F1E7] rounded-lg shadow-md">
//             <h1 className="text-xl font-bold text-center mb-4">Wishlist</h1>
//             <button
//               className="block mt-4 w-full py-3 border border-black rounded-md hover:text-white hover:bg-black transition"
//               onClick={handleProceed}
//             >
//               Continue Shopping
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="my-20">
//         <Facilities />
//       </div>
//     </div>
//   );
// };

// export default Wishlist;























'use client';

import React, { useEffect, useState } from 'react';
import Main from '../components/Main';
import Image from 'next/image';
import { RiDeleteBinLine, RiShoppingCartLine } from 'react-icons/ri';
import Facilities from '../components/Facilities';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../types/Products';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { getWishlistItems, removeFromWishlist } from '../actions/wishlist';
import { addToCart } from '../actions/cart';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
  }, []);

  const handleRemove = (productId: string) => {
    Swal.fire({
      title: 'Remove Item?',
      text: 'This will remove the item from your wishlist',
      icon: 'question',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove',
    }).then((result) => {
      if (result.isConfirmed) {
        setWishlistItems(removeFromWishlist(productId));
        Swal.fire('Removed!', 'Item removed from wishlist', 'success');
      }
    });
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Added to Cart!',
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      background: '#F9F1E7',
    });
  };

  const router = useRouter();
  const handleProceed = () => {
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-white">
      <Main heading="Your Wishlist" page="Wishlist" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Wishlist Items Section */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-black mb-8 border-b-2 border-[#B88E2F] pb-4">
              {wishlistItems.length} Items in Wishlist
            </h2>

            {wishlistItems.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {wishlistItems.map((product) => (
                  <div
                    key={product._id}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    <div className="relative h-64 overflow-hidden rounded-t-xl">
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {product.name}
                      </h3>
                      <p className="text-xl font-bold text-black mt-2">
                        Rs. {product.price.toLocaleString()}
                      </p>
                      
                      <div className="flex justify-between items-center mt-4 space-x-2">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="flex items-center justify-center border-black border-[1px] hover:font-semibold px-4 py-2 rounded-lg transition-colors flex-1"
                        >
                          <RiShoppingCartLine className="mr-2" />
                          Add to Cart
                        </button>
                        
                        <button
                          onClick={() => handleRemove(product._id)}
                          className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                          title="Remove"
                        >
                          <RiDeleteBinLine className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl text-gray-300 mb-4">🛍️</div>
                <h3 className="text-2xl font-semibold text-gray-500 mb-2">
                  Your Wishlist is Empty
                </h3>
                <p className="text-gray-400 mb-4">
                  Start adding items you love!
                </p>
                <button
                  onClick={() => router.push('/shop')}
                  className="bg-[#B88E2F] text-white px-6 py-3 rounded-lg hover:bg-[#9F7A2F] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-[#F9F1E7] p-6 rounded-xl shadow-lg border border-[#F9F1E7]">
              <h3 className="text-xl font-bold text-black mb-6">
                Wishlist Summary
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Items:</span>
                  <span className="font-semibold">{wishlistItems.length}</span>
                </div>
                
                <button
                  onClick={handleProceed}
                  className="w-full border-[1px] border-black py-3 rounded-lg hover:bg-[#FFF6E5] hover:font-semibold cursor-pointer transition-colors flex items-center justify-center"
                  disabled={wishlistItems.length === 0}
                >
                  <RiShoppingCartLine className="mr-2" />
                  Move All to Cart
                </button>
                
                <button
                  onClick={() => router.push('/shop')}
                  className="w-full border-2 border-[#B88E2F] text-[#B88E2F] cursor-pointer py-3 rounded-lg hover:bg-[#FFF6E5] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <Facilities />
      </div>
    </div>
  );
};

export default Wishlist;
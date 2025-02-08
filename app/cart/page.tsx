// import React, { useEffect, useState } from 'react'
// import Main from '../components/Main'

// import Image from 'next/image'
// import image from '../images/Mask group (5).png';
// import { RiDeleteBin7Fill } from 'react-icons/ri';
// import Facilities from '../components/Facilities';
// import { urlFor } from '@/sanity/lib/image';


// const cart = () => {
//   return (
//     <div className='max-w-screen overflow-hidden mb-20'>
//       <div>
//       <Main heading='Cart' page='Cart'/>
//       </div>
//       <div className='w-screen xl:w-[1150px] flex flex-col gap-40 md:flex-row md:gap-10 xl:gap-0 xl:justify-between items-center justify-center mx-auto md:items-start'>
//         <div className='h-fit w-fit py-20 px-10 xl:w-[720px] xl:h-16  bg-[#FFF9E5] xl:px-0 xl:py-0'>
//           <div>
//             <div className=' grid gap-y-2  mt-16 xl:grid-cols-[140px,130px,140px,125px,90px] xl:gap-y-14 xl:pt-6 xl:mt-0'>
//               <p className=' xl:col-start-2 font-medium'>Product</p>
//               <p className=' font-medium'>Price</p>
//               <p className='font-medium'>Quantity</p>
//               <p className='font-medium'>Subtotal</p>
//               <div className='ml-40 flex flex-col gap-3 xl:grid xl:grid-cols-6 xl:gap-x-[135px] xl:items-center xl:ml-0 '>
//               <div className='w-[105px] h-[105px] bg-[#FBEBB5]  -mt-64 xl:flex items-center xl:justify-center xl:rounded-md xl:-mt-0'>
//                         <Image
//                             src={image}
//                             alt='productImage'
//                             width={100}
//                             height={100}
//                             quality={100}
//                             className='col-start-2'
//                         />
//                     </div>
//               <p className='text-[#9F9F9F] text-nowrap mt-2 xl:mt-0'>Asgaard sofa</p>
//               <p className='text-[#9F9F9F] text-nowrap'>Rs. 250,000.00</p>
//               <span className='xl:w-fit xl:h-fit xl:border-2 xl:rounded-sm xl:p-1 xl:pl-3 xl:pr-3 xl:ml-6'>1</span>
//               <p className='text-nowrap -mt-2 xl:-mt-0'>Rs. 250,000.00 </p>
//               <RiDeleteBin7Fill className=' text-[#FBEBB5] size-6 ml-12 -mt-2'/>
             
//             </div>
//           </div>
//           </div>
        
//         </div>
//         <div>
//         <div className='w-fit h-fit xl:w-[395px] xl:h-[390px] bg-[#FFF9E5] p-10 xl:pt-5 xl:p-0 flex flex-col items-center justify-start gap-7'>
//           <p className='mb-5 text-4xl font-semibold'>
//             Cart Totals
//         </p>
//         <div className='w-[250px] flex justify-between'>
//           <p className='font-medium'>Subtotal</p>
//           <p className='text-[#9F9F9F] font-medium'>Rs. 250,000.00</p>
//         </div>
//         <div className='w-[250px] flex justify-between'>
//           <p className='font-medium'>Total</p>
//           <p className='text-[20px] text-[#B88E2F] font-medium'>Rs. 250,000.00</p>
//         </div>
//         <button className='w-[220px] h-[55px] border-black border-[1.3px] text-[20px] rounded-lg'>Check Out</button>
//         </div>
//         </div>
        

         
//     </div>
//     <Facilities/>

//     </div>
//   )
// }

// export default cart









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

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [total, setTotal] = useState(0);

//   // On mount, load cart from localStorage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCartItems(storedCart);
//   }, []);

//   // Recalculate total whenever cartItems changes
//   useEffect(() => {
//     calculateTotal(cartItems);
//   }, [cartItems]);

//   // Get product identifier using _id if available, otherwise use id
//   const getProductId = (product: Product) => product._id || product.id;

//   // Remove the specific product from state and localStorage
//   const handleRemoveFromCart = (productId: string) => {
//     const updatedCart = cartItems.filter(
//       (item) => getProductId(item) !== productId
//     );
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Update the quantity of a product and update localStorage
//   const handleQuantityChange = (productId: string, quantity: number) => {
//     if (quantity < 1) return;
//     const updatedCart = cartItems.map((item) =>
//       getProductId(item) === productId ? { ...item, quantity } : item
//     );
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   // Calculate total price from current cart items
//   const calculateTotal = (items: Product[]) => {
//     const totalPrice = items.reduce(
//       (acc, item) => acc + item.price * (item.quantity || 1),
//       0
//     );
//     setTotal(totalPrice);
//   };

//   // Handle item removal confirmation
//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, remove it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         handleRemoveFromCart(id);
//         Swal.fire('Removed!', 'Item has been removed', 'success');
//       }
//     });
//   };

//   // Handle checkout process

//   const router = useRouter();
//   const handleProceed = () => {
//     Swal.fire({
//       title: 'Proceed to Checkout?',
//       text: 'Please review your cart before checkout',
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, proceed!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setCartItems([]); // Clear cart state
//         localStorage.removeItem('cart'); // Clear cart in localStorage
//         Swal.fire('Success!', 'Your order has been successfully placed.', 'success');
//       }
//       router.push('/checkout');
//     });
//   };

//   return (
//     <div className="h-auto">
//       {/* Hero Section */}
//       <Main heading="Cart" page="Cart" />

//       {/* Main Cart Section */}
//       <div className="flex flex-col lg:flex-row p-6 md:p-16 lg:py-28 gap-6 lg:gap-16">
//         {/* Cart Items Section */}
//         <div className="flex flex-col gap-10 w-full lg:w-2/3">
//           {/* Cart Headings */}
//           <div className="bg-[#F9F1E7] w-full px-4 md:px-6 h-[55px] flex items-center">
//             <div className="flex flex-wrap justify-between items-center px-4 lg:px-20 md:px-10 font-poppins font-medium w-full text-sm md:text-base">
//               <div className="flex items-center md:ml-6 md:flex-1 md:justify-around justify-between w-full">
//                 <p>Product</p>
//                 <p className="pr-10">Price</p>
//               </div>
//               <div className="md:flex items-center gap-5 justify-end md:gap-10 hidden">
//                 <p>Quantity</p>
//                 <p>Subtotal</p>
//               </div>
//             </div>
//           </div>

//           {/* Cart Items */}
//           {cartItems.length > 0 ? (
//             cartItems.map((product) => {
//               const prodId = getProductId(product);
//               return (
//                 <div
//                   key={prodId}
//                   className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-10 lg:gap-20 p-4 md:p-6 rounded-lg font-poppins bg-white"
//                 >
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt={product.name}
//                     width={60}
//                     height={60}
//                     className="flex-shrink-0"
//                   />
//                   <p className="text-xs md:text-base text-[#9F9F9F] flex-grow">
//                     {product.name}
//                   </p>
//                   <p className="text-xs md:text-base text-[#9F9F9F]">
//                     Rs. {product.price.toLocaleString()}
//                   </p>
//                   <div className="flex items-center gap-10 sm:gap-20 md:gap-4 lg:gap-16">
//                     <input
//                       type="number"
//                       value={product.quantity || 1}
//                       min="1"
//                       className="w-12 border border-gray-500 text-center rounded-md bg-white"
//                       onChange={(e) =>
//                         handleQuantityChange(prodId, Number(e.target.value))
//                       }
//                     />
//                     <p className="text-sm md:text-base text-black">
//                       Rs. {(product.price * (product.quantity || 1)).toLocaleString()}
//                     </p>
//                     <RiDeleteBin7Fill
//                       className="text-[#B88E2F] cursor-pointer size-8"
//                       onClick={() => handleRemove(prodId)}
//                     />
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <div className="text-xl text-[#9F9F9F] font-poppins text-center p-10 font-semibold">
//               Your Cart is Empty
//             </div>
//           )}
//         </div>

//         {/* Cart Totals Section */}
//         <div className="w-full lg:w-1/3 flex justify-center">
//           <div className="w-full h-96 max-w-md p-6 md:p-8 bg-[#F9F1E7] rounded-lg">
//             <h1 className="text-xl md:text-2xl font-bold text-center mb-8">Cart Totals</h1>
//             <div className="flex flex-col gap-6">
//               <div className="flex justify-between items-center">
//                 <p className="text-sm md:text-lg font-semibold">Subtotal</p>
//                 <p className="text-sm md:text-base text-[#9F9F9F]">
//                   Rs. {total.toLocaleString()}
//                 </p>
//               </div>
//               <div className="flex justify-between items-center">
//                 <p className="text-sm md:text-lg font-semibold">Total</p>
//                 <p className="text-lg md:text-xl text-[#B88E2F]">
//                   Rs. {total.toLocaleString()}
//                 </p>
//               </div>
//             </div>
//             <button
//               className="block mt-8 w-full py-3 text-center text-sm md:text-base border border-black rounded-md hover:text-white hover:bg-black transition"
//               onClick={handleProceed}
//             >
//               Check Out
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

// export default Cart;









'use client';

import React, { useEffect, useState } from 'react';
import Main from '../components/Main';
import Image from 'next/image';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import Facilities from '../components/Facilities';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '../../types/Products';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { getCartItems, removeFromCart, updateCartQuantity, calculateTotal } from '../actions/cart'; // ✅ Import cart utils


const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  // Load cart items from localStorage on mount
  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  // Recalculate total whenever cartItems change
  useEffect(() => {
    setTotal(calculateTotal(cartItems));
  }, [cartItems]);

  const handleRemove = (productId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setCartItems(removeFromCart(productId));  // ✅ Use cart.ts function
        Swal.fire('Removed!', 'Item has been removed', 'success');
      }
    });
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(updateCartQuantity(productId, quantity));  // ✅ Use cart.ts function
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout?',
      text: 'Please review your cart before checkout',
      icon: 'question',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        // setCartItems([]); 
        // localStorage.removeItem('cart');
        // Swal.fire('Success!', 'Your order has been successfully placed.', 'success');
        router.push('/checkout');
      }
    });
  };

  return (





    <div className="h-auto">
      {/* Hero Section */}
      <Main heading="Cart" page="Cart" />

      {/* Main Cart Section */}
      <div className="flex flex-col lg:flex-row p-6 md:p-14 lg:py-28 gap-6 lg:gap-[6rem]">
        {/* Cart Items Section */}
        <div className="flex flex-col gap-10 w-full lg:w-2/3">
          {/* Cart Headings */}
          <div className="bg-[#F9F1E7] w-full px-4 md:px-6 h-[55px] flex items-center">
            <div className="flex flex-wrap justify-between items-center px-4 lg:px-20 md:px-10 font-poppins font-medium w-full text-sm md:text-base">
              <div className="flex items-center md:ml-6 md:flex-1 md:justify-around justify-between w-full">
                <p>Product</p>
                <p className="pr-10">Price</p>
              </div>
              <div className="md:flex items-center gap-5 justify-end md:gap-10 hidden">
                <p>Quantity</p>
                <p>Subtotal</p>
              </div>
            </div>
          </div>

          {/* Cart Items */}
          {cartItems.length > 0 ? (
            cartItems.map((product) => {
              return (
                <div
                  key={product._id}
                  className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-10 lg:gap-20 p-4 md:p-6 rounded-lg font-poppins bg-white"
                >
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="flex-shrink-0 w-[60px] h-[60px]"
                  />
                  <p className="text-xs md:text-base text-[#9F9F9F] flex-grow">
                    {product.name}
                  </p>
                  <p className="text-xs md:text-base text-[#9F9F9F]">
                    Rs. {product.price.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-10 sm:gap-20 md:gap-4 lg:gap-16">
                    <input
                      type="number"
                      value={product.quantity || 1}
                      min="1"
                      className="w-12 border border-gray-500 text-center rounded-md bg-white"
                      onChange={(e) => handleQuantityChange(product._id, Number(e.target.value))}
                      />
                    <p className="text-sm md:text-base text-black">
                      Rs. {(product.price * (product.quantity || 1)).toLocaleString()}
                    </p>
                    <RiDeleteBin7Fill
                      className="text-[#B88E2F] cursor-pointer  sm:size-8"
                      onClick={() => handleRemove(product._id)}
                    />
                  </div>
                </div>
              )
})
          ) : (
            <div className="text-xl text-[#9F9F9F] font-poppins text-center p-10 font-semibold">
              Your Cart is Empty
            </div>
          )}
        </div>

        {/* Cart Totals Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-full h-96 max-w-md p-6 md:p-6 bg-[#F9F1E7] rounded-lg">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-8">Cart Totals</h1>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg font-semibold">Subtotal</p>
                <p className="text-sm md:text-base text-[#9F9F9F] ">
                  Rs. {total.toLocaleString()}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg font-semibold">Total</p>
                <p className="text-lg md:text-xl text-[#B88E2F]">
                  Rs. {total.toLocaleString()}</p>
              </div>
            </div>
            <button
              className="block mt-8 w-full py-3 text-center text-sm md:text-base border border-black rounded-md hover:text-white hover:bg-black transition"
              onClick={handleProceed}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        <Facilities />
      </div>
    </div>
  );
};


export default Cart;

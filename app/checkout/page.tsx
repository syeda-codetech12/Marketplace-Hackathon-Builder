// import React from 'react'
// import Main from '../components/Main'
// import Facilities from '../components/Facilities'

// const checkout = () => {
//   return (
//     <div>
//         <div>
//         <Main heading='Checkout' page='Checkout'/>
//         </div>

//         <div className='flex items-center justify-center mb-24'>
//         <div className='xl:w-[1100px] flex flex-col lg:flex-row justify-around mx-20'>
//             <div className='lg:w-[500px] '>
//                 <h1 className='text-2xl md:text-4xl font-semibold mb-16'>Billing details</h1>

//                 <div className='flex gap-8'>
//                 <div>
//                 <p className='font-medium mb-8'>First name</p>
//                 <input type="text" className='w-full min-w-32 md:w-[210px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0'/>
//                 </div>

//                 <div>
//                 <p className='font-medium mb-8'>Last name</p>
//                 <input type="text" className='w-full min-w-32 md:w-[210px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0'/>
//                 </div>
//                 </div>

//                 <p className='font-medium mb-8'>Company Name (Optional)</p>
//                 <input  className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl  p-4 md:p-0'/>


//                 <p className='font-medium mb-8'>Country / Region</p>
//                 <select name="" id="" className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl px-5 p-4 md:p-0'>
//                     <option value="">Srilanka</option>
//                     <option value="">Pakistan</option>
//                 </select>

//                 <p className='font-medium mb-8'>Street address</p>
//                 <input type="text" className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0'/>

//                 <p className='font-medium mb-8'>Town / City</p>
//                 <input type="text" className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0'/>

//                 <p className='font-medium mb-8'>Province</p>
//                 <select name="" id="" className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl px-5 p-4 md:p-0'>
//                     <option value="Western Province">Western Province</option>
//                     <option value="Eastern Province">Eastern Province</option>
//                     <option value="South Province">North Province</option>
//                 </select>

//                 <p className='font-medium mb-8'>ZIP code</p>
//                 <input type="text" className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0'/>

//                 <p className='font-medium mb-8'>Phone</p>
//                 <input type="text" className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0'/>
                
//                 <p className='font-medium mb-8'>Email address</p>
//                 <input type="text" className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0'/>

//                 <input type="text" placeholder='Additional Information' className='w-full min-w-52 md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 mt-10'/>
                
               
//                 </div>
//             <div className='w-full  lg:w-[475px]'>
//                 <div className=' flex justify-between mb-8'>
//                     <div className='flex flex-col gap-5'>
//                         <h1 className='text-2xl font-medium'>Product</h1>
//                         <div><span className='text-[#9F9F9F] inline'>Asgaard sofa</span><span className='inline'> x 1</span></div>
//                         <p>Subtotal</p>
//                         <p>Total</p>
//                     </div>
//                     <div className='flex flex-col gap-5 justify-end items-end'>
//                         <h1 className='text-2xl font-medium'>Subtotal</h1>
//                         <span className='text-[#9F9F9F] inline'>Rs. 250,000.00</span>
//                         <p>Rs. 250,000.00</p>
//                         <p className='text-[#B88E2F] text-2xl font-bold'>Rs. 250,000.00</p>
//                     </div>
//                 </div>

//                <li className='xl:w-[474px] border-[#9F9F9F] border-t-[1px]  pt-5 mb-5'>Direct Bank Transfer</li>
//                 <p className='xl:w-[475px] text-[#9F9F9F] font-light mb-5 text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

//                 <input type="radio" className=' text-[#9F9F9F] mr-2'/><span  className='text-[#9F9F9F] font-medium'>Direct Bank Transfer</span> 
//                 <br />
//                 <input type="radio" className=' text-[#9F9F9F] mb-10 mr-1'/> <span className='text-[#9F9F9F] font-medium'>Cash On Delivery</span>

                

//                 <p className='text-justify xl:w-[475px] font-light mb-8'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong> .</p>
//                 <div>
//                 <button className='w-[315px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16'>Place Order</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//                 <div className='mb-20'>
//                     <Facilities/>
//                 </div>
//         </div>
//   )
// }

// export default checkout

















// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { getCartItems } from "@/app/actions/cart";
// import Link from "next/link";
// import { Product } from "@/types/Products";
// import { urlFor } from "@/sanity/lib/image";


// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<Product[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     address: false,
//     city: false,
//     zipCode: false,
//     phone: false,
//     email: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       address: !formValues.address,
//       city: !formValues.city,
//       zipCode: !formValues.zipCode,
//       phone: !formValues.phone,
//       email: !formValues.email,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handlePlaceOrder = () => {
//     if (validateForm()) {
//       localStorage.removeItem("appliedDiscount");
//     //   toast.success("Order placed successfully!");
//     } else {
//     //   toast.error("Please fill in all the fields.");
//     }
//   };

//   return (
//     <div className={`min-h-screen bg-gray-50`}>
//       {/* Breadcrumb */}
//       <div className="mt-6">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex items-center gap-2 py-4">
//             <Link
//               href="/cart"
//               className="text-[#666666] hover:text-black transition text-sm"
//             >
//               Cart
//             </Link>
//             <span className="text-sm">Checkout</span>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Order Summary */}
//           <div className="bg-white border rounded-lg p-6 space-y-4">
//             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="flex items-center gap-4 py-3 border-b"
//                 >
//                   <div className="w-16 h-16 rounded overflow-hidden">
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt={item.name}
//                         width={64}
//                         height={64}
//                         className="object-cover w-full h-full"
//                       />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-sm font-medium">{item.name}</h3>
//                     <p className="text-xs text-gray-500">
//                       Quantity: {item.quantity}
//                     </p>
//                   </div>
//                   <p className="text-sm font-medium">
//                     ${item.price * item.quantity}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-sm text-gray-500">Your cart is empty.</p>
//             )}
//             <div className="text-right pt-4">
//               <p className="text-sm">
//                 Subtotal: <span className="font-medium">${subtotal}</span>
//               </p>
//               <p className="text-sm">
//                 Discount: <span className="font-medium">-${discount}</span>
//               </p>
//               <p className="text-lg font-semibold">
//                 Total: ${total.toFixed(2)}
//               </p>
//             </div>
//           </div>

//           {/* Billing Form */}
//           <div className="bg-white border rounded-lg p-6 space-y-6">
//             <h2 className="text-xl font-semibold">Billing Information</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   id="firstName"
//                   placeholder="Enter your first name"
//                   value={formValues.firstName}
//                   onChange={handleInputChange}
//                   className="border"
//                 />
//                 {formErrors.firstName && (
//                   <p className="text-sm text-red-500">
//                     First name is required.
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="lastName">Last Name </label>
//                 <input
//                   id="lastName"
//                   placeholder="Enter your last name"
//                   value={formValues.lastName}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.lastName && (
//                   <p className="text-sm text-red-500">
//                     Last name is required.
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <label htmlFor="address">Address </label>
//               <input
//                 id="address"
//                 placeholder="Enter your address"
//                 value={formValues.address}
//                 onChange={handleInputChange}
//               />
//               {formErrors.address && (
//                 <p className="text-sm text-red-500">Address is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="city">City</label>
//               <input
//                 id="city"
//                 placeholder="Enter your city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//               />
//               {formErrors.city && (
//                 <p className="text-sm text-red-500">City is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="zipCode">Zip Code</label>
//               <input
//                 id="zipCode"
//                 placeholder="Enter your zip code"
//                 value={formValues.zipCode}
//                 onChange={handleInputChange}
//               />
//               {formErrors.zipCode && (
//                 <p className="text-sm text-red-500">Zip Code is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="phone">Phone</label>
//               <input
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//               />
//               {formErrors.phone && (
//                 <p className="text-sm text-red-500">Phone is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//               />
//               {formErrors.email && (
//                 <p className="text-sm text-red-500">Email is required.</p>
//               )}
//             </div>
//             <button
//               className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// 'use client'


// import React, { useState, useEffect } from "react";
// import Main from "../components/Main";
// import Facilities from "../components/Facilities";
// import { Product } from "@/types/Products";

// const Checkout = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     country: "Srilanka",
//     address: "",
//     city: "",
//     province: "Western Province",
//     postalCode: "",
//     phone: "",
//     email: "",
//     additionalInfo: "",
//   });

//   // Fetch cart data from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Calculate total price
//   const totalPrice = cart.reduce((total, product) => {
//     return total + product.price * product.quantity;
//   }, 0);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Order Submitted:", { formData, cart, totalPrice });
//   };

//   return (
//     <div>
//       <div>
//         <Main heading="Checkout" page="Checkout" />
//       </div>

//       <div className="flex items-center justify-center mb-24">
//         <div className="xl:w-[1100px] flex flex-col lg:flex-row justify-around mx-20">
//           {/* Billing Details Form */}
//           <div className="lg:w-[500px]">
//             <h1 className="text-2xl md:text-4xl font-semibold mb-16">Billing details</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="flex gap-8">
//                 <div>
//                   <p className="font-medium mb-8">First name</p>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full min-w-32 md:w-[210px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <p className="font-medium mb-8">Last name</p>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full min-w-32 md:w-[210px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0"
//                     required
//                   />
//                 </div>
//               </div>

//               <p className="font-medium mb-8">Company Name (Optional)</p>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 md:p-0"
//               />

//               <p className="font-medium mb-8">Country / Region</p>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl px-5"
//               >
//                 <option value="Srilanka">Srilanka</option>
//                 <option value="Pakistan">Pakistan</option>
//               </select>

//               <p className="font-medium mb-8">Street address</p>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4"
//                 required
//               />

//               <p className="font-medium mb-8">Town / City</p>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4"
//                 required
//               />

//               <p className="font-medium mb-8">Province</p>
//               <select
//                 name="province"
//                 value={formData.province}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl px-5"
//               >
//                 <option value="Western Province">Western Province</option>
//                 <option value="Eastern Province">Eastern Province</option>
//                 <option value="South Province">North Province</option>
//               </select>

//               <p className="font-medium mb-8">ZIP code</p>
//               <input
//                 type="text"
//                 name="postalCode"
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4"
//                 required
//               />

//               <p className="font-medium mb-8">Phone</p>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4"
//                 required
//               />

//               <p className="font-medium mb-8">Email address</p>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4"
//                 required
//               />

//               <input
//                 type="text"
//                 name="additionalInfo"
//                 value={formData.additionalInfo}
//                 onChange={handleChange}
//                 placeholder="Additional Information"
//                 className="w-full md:w-[450px] md:h-[75px] border-[1px] border-black mb-10 rounded-xl p-4 mt-10"
//               />
//             </form>
//           </div>

//           {/* Order Summary */}
//           <div className="w-full lg:w-[475px]">
//             <div className="flex justify-between mb-8">
//               <div className="flex flex-col gap-5">
//                 <h1 className="text-2xl font-medium">Product</h1>
//                 {cart.map((product) => (
//                   <div key={product.id}>
//                     <span className="text-[#9F9F9F]">{product.name}</span>
//                     <span> x {product.quantity}</span>
//                   </div>
//                 ))}
//                 <p>Subtotal</p>
//                 <p>Total</p>
//               </div>
//               <div className="flex flex-col gap-5 items-end">
//                 <h1 className="text-2xl font-medium">Subtotal</h1>
//                 <p className="text-[#9F9F9F]">Rs. {totalPrice.toFixed(2)}</p>
//                 <p>Rs. {totalPrice.toFixed(2)}</p>
//                 <p className="text-[#B88E2F] text-2xl font-bold">Rs. {totalPrice.toFixed(2)}</p>
//               </div>
//             </div>

//             <button type="submit" className="w-[315px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16">
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mb-20">
//         <Facilities />
//       </div>
//     </div>
//   );
// };

// export default Checkout;











// 'use client'

// import React, { useState, useEffect } from "react";
// import Main from "../components/Main";
// import Facilities from "../components/Facilities";
// import { Product } from "@/types/Products";

// const Checkout = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     country: "Srilanka",
//     address: "",
//     city: "",
//     province: "Western Province",
//     postalCode: "",
//     phone: "",
//     email: "",
//     additionalInfo: "",
//   });

//   // Fetch cart data from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Calculate total price dynamically
//   const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);


//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Order Submitted:", { formData, cart, totalPrice });
//   };

//   return (
//     <div>
//       <Main heading="Checkout" page="Checkout" />

//       <div className="flex items-center justify-center mb-24">
//         <div className="xl:w-[1100px] flex flex-col lg:flex-row justify-around mx-20">
//           {/* Billing Details Form */}
//           <div className="lg:w-[500px]">
//             <h1 className="text-2xl md:text-4xl font-semibold mb-16">Billing Details</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="flex gap-8">
//                 <div>
//                   <p className="font-medium mb-8">First Name</p>
//                   <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
//                     className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" required />
//                 </div>
//                 <div>
//                   <p className="font-medium mb-8">Last Name</p>
//                   <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
//                     className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" required />
//                 </div>
//               </div>

//               <p className="font-medium mb-8">Company Name (Optional)</p>
//               <input type="text" name="companyName" value={formData.companyName} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" />

//               <p className="font-medium mb-8">Country / Region</p>
//               <select name="country" value={formData.country} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4">
//                 <option value="Srilanka">Srilanka</option>
//                 <option value="Pakistan">Pakistan</option>
//               </select>

//               <p className="font-medium mb-8">Street Address</p>
//               <input type="text" name="address" value={formData.address} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" required />

//               <p className="font-medium mb-8">Town / City</p>
//               <input type="text" name="city" value={formData.city} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" required />

//               <p className="font-medium mb-8">Province</p>
//               <select name="province" value={formData.province} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4">
//                 <option value="Western Province">Western Province</option>
//                 <option value="Eastern Province">Eastern Province</option>
//               </select>

//               <p className="font-medium mb-8">ZIP Code</p>
//               <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" required />

//               <p className="font-medium mb-8">Phone</p>
//               <input type="text" name="phone" value={formData.phone} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" required />

//               <p className="font-medium mb-8">Email Address</p>
//               <input type="email" name="email" value={formData.email} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" required />

//               <p className="font-medium mb-8">Additional Information</p>
//               <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4" />
//             </form>
//           </div>

//           {/* Order Summary */}
//           <div className="w-full lg:w-[475px]">
// <div className="grid grid-cols-2 gap-10 border-t border-gray-300 pt-6">
//   {/* First Column - Product Details */}
//   <div className="flex flex-col gap-4">
//     <h1 className="text-2xl font-medium mb-4">Product</h1>
//     {cart.map((product) => (
//       <div key={product.id} className="flex justify-between ">
//         <span className="text-gray-600">{product.name}</span>
//         <span className="text-black">x {product.quantity}</span>
//       </div>
//     ))}
//     <p className="font-medium mt-4">Subtotal</p>
//     <p className="font-medium text-lg">Total</p>
//   </div>

//   {/* Second Column - Amount Details */}
//   <div className="flex flex-col gap-4 items-end">
//     <h1 className="text-2xl font-medium mb-4">Amount</h1>
//     {cart.map((product) => (
//       <span key={product.id} className="text-gray-600">
//         Rs. {(product.price * product.quantity).toFixed(2)}
//       </span>
//     ))}
//     <p className="text-gray-600 mt-4">Rs. {totalPrice.toFixed(2)}</p>
//     <p className="text-[#B88E2F] sm:text-2xl font-bold">Rs. {totalPrice.toFixed(2)}</p>
//   </div>
// </div>
// <div className="mt-7">
// <li className='xl:w-[474px] border-[#9F9F9F] border-t-[1px]  pt-5 mb-5'>Direct Bank Transfer</li>           
//      <p className='xl:w-[475px] text-[#9F9F9F] font-light mb-5 text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
//                 <input type="radio" className=' text-[#9F9F9F] mr-2'/>
//                 <span  className='text-[#9F9F9F] font-medium'>Direct Bank Transfer</span> 
//                <br />
//                <input type="radio" className=' text-[#9F9F9F] mb-10 mr-1'/>
//                 <span className='text-[#9F9F9F] font-medium'>Cash On Delivery</span>

                
//                 <p className='text-justify xl:w-[475px] font-light mb-8'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong> .</p>             
//                    <div>
//                <button className='w-[315px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16'>Place Order</button>
// </div>

          
//           </div>
//           </div>
//         </div>
//       </div>
//       <div className="my-20"> 
//       <Facilities />
//       </div>
//     </div>
//   );
// };

// export default Checkout;














// 'use client'

// import React, { useState, useEffect } from "react";
// import Main from "../components/Main";
// import Facilities from "../components/Facilities";
// import { Product } from "@/types/Products";

// const Checkout = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     country: "USA",
//     address: "",
//     city: "",
//     province: "Western Province",
//     postalCode: "",
//     phone: "",
//     email: "",
//     additionalInfo: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     phone: "",
//     email: "",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("");

//   // Fetch cart data from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Calculate total price dynamically
//   const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // Clear error when user starts typing
//     setFormErrors({ ...formErrors, [name]: "" });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: formData.firstName ? "" : "First name is required",
//       lastName: formData.lastName ? "" : "Last name is required",
//       address: formData.address ? "" : "Address is required",
//       city: formData.city ? "" : "City is required",
//       postalCode: formData.postalCode ? "" : "Postal code is required",
//       phone: formData.phone ? "" : "Phone is required",
//       email: formData.email ? (/\S+@\S+\.\S+/.test(formData.email) ? "" : "Invalid email") : "Email is required",
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }
//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }
//     console.log("Order Submitted:", { formData, cart, totalPrice, paymentMethod });
//     alert("Order placed successfully!");
//   };

//   return (
//     <div>
//       <Main heading="Checkout" page="Checkout" />

//       <div className="flex items-center justify-center mb-24">
//         <div className="xl:w-[1100px] flex flex-col lg:flex-row justify-around mx-20">
//           {/* Billing Details Form */}
//           <div className="lg:w-[500px]">
//             <h1 className="text-2xl md:text-4xl font-semibold mb-16">Billing Details</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="flex gap-8">
//                 <div>
//                   <p className="font-medium mb-8">First Name</p>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//                   />
//                   {formErrors.firstName && <p className="text-red-500 text-sm mb-6">{formErrors.firstName}</p>}
//                 </div>
//                 <div>
//                   <p className="font-medium mb-8">Last Name</p>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//                   />
//                   {formErrors.lastName && <p className="text-red-500 text-sm mb-6">{formErrors.lastName}</p>}
//                 </div>
//               </div>

             
//               <p className="font-medium mb-8">Country / Region</p>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
//               >
//                 <option value="Srilanka">USA</option>
//               </select>

//               <p className="font-medium mb-8">Street Address</p>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.address && <p className="text-red-500 text-sm mb-6">{formErrors.address}</p>}

//               <p className="font-medium mb-8">Town / City</p>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.city && <p className="text-red-500 text-sm mb-6">{formErrors.city}</p>}

//               <p className="font-medium mb-8">Province</p>
//               <select
//                 name="province"
//                 value={formData.province}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
//               >
//                 <option value="Western Province">Western Province</option>
//                 <option value="Eastern Province">Eastern Province</option>
//               </select>

//               <p className="font-medium mb-8">ZIP Code</p>
//               <input
//                 type="text"
//                 name="postalCode"
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.postalCode && <p className="text-red-500 text-sm mb-6">{formErrors.postalCode}</p>}

//               <p className="font-medium mb-8">Phone</p>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.phone && <p className="text-red-500 text-sm mb-6">{formErrors.phone}</p>}

//               <p className="font-medium mb-8">Email Address</p>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.email && <p className="text-red-500 text-sm mb-6">{formErrors.email}</p>}

//               <p className="font-medium mb-8">Additional Information</p>
//               <input
//                 type="text"
//                 name="additionalInfo"
//                 value={formData.additionalInfo}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
//               />
//             </form>
//           </div>

//           {/* Order Summary */}
//           <div className="w-full lg:w-[475px]">
//             <div className="grid grid-cols-2 gap-10 border-t border-gray-300 pt-6">
//               {/* First Column - Product Details */}
//               <div className="flex flex-col gap-4">
//                 <h1 className="text-2xl font-medium mb-4">Product</h1>
//                 {cart.map((product) => (
//                   <div key={product.id} className="flex justify-between">
//                     <span className="text-gray-600">{product.name}</span>
//                     <span className="text-black">x {product.quantity}</span>
//                   </div>
//                 ))}
//                 <p className="font-medium mt-4">Subtotal</p>
//                 <p className="font-medium text-lg">Total</p>
//               </div>

//               {/* Second Column - Amount Details */}
//               <div className="flex flex-col gap-4 items-end">
//                 <h1 className="text-2xl font-medium mb-4">Amount</h1>
//                 {cart.map((product) => (
//                   <span key={product.id} className="text-gray-600">
//                     Rs. {(product.price * product.quantity).toFixed(2)}
//                   </span>
//                 ))}
//                 <p className="text-gray-600 mt-4">Rs. {totalPrice.toFixed(2)}</p>
//                 <p className="text-[#B88E2F] sm:text-2xl font-bold">Rs. {totalPrice.toFixed(2)}</p>
//               </div>
//             </div>

//             <div className="mt-7">
//               <li className="xl:w-[474px] border-[#9F9F9F] border-t-[1px] pt-5 mb-5">Direct Bank Transfer</li>
//               <p className="xl:w-[475px] text-[#9F9F9F] font-light mb-5 text-justify">
//                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//               </p>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Direct Bank Transfer"
//                 onChange={() => setPaymentMethod("Direct Bank Transfer")}
//                 className="text-[#9F9F9F] mr-2"
//               />
//               <span className="text-[#9F9F9F] font-medium">Direct Bank Transfer</span>
//               <br />
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Cash On Delivery"
//                 onChange={() => setPaymentMethod("Cash On Delivery")}
//                 className="text-[#9F9F9F] mb-10 mr-1"
//               />
//               <span className="text-[#9F9F9F] font-medium">Cash On Delivery</span>

//               <p className="text-justify xl:w-[475px] font-light mb-8">
//                 Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.
//               </p>

//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="w-[315px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16"
//               >
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="my-20">
//         <Facilities />
//       </div>
//     </div>
//   );
// };

// export default Checkout;














// 'use client'

// import React, { useState, useEffect } from "react";
// import Main from "../components/Main";
// import Facilities from "../components/Facilities";
// import { Product } from "@/types/Products";
// import Swal from "sweetalert2"; 
// import { client } from "@/sanity/lib/client";

// const Checkout = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     country: "Srilanka",
//     address: "",
//     city: "",
//     province: "Western Province",
//     postalCode: "",
//     phone: "",
//     email: "",
//     additionalInfo: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     phone: "",
//     email: "",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("");

//   // Fetch cart data from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Calculate total price dynamically
//   const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // Clear error when user starts typing
//     setFormErrors({ ...formErrors, [name]: "" });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: formData.firstName ? "" : "First name is required",
//       lastName: formData.lastName ? "" : "Last name is required",
//       address: formData.address ? "" : "Address is required",
//       city: formData.city ? "" : "City is required",
//       postalCode: formData.postalCode
//       ? /^\d{5,6}(?:[-\s]\d{4})?$/.test(formData.postalCode) // ZIP code validation
//         ? ""
//         : "Invalid postal code"
//       : "Postal code is required",
//       phone: formData.phone
//       ? /^\+?[0-9]{10,15}$/.test(formData.phone) // Phone number validation
//         ? ""
//         : "Invalid phone number"
//       : "Phone is required",
//       email: formData.email ? (/\S+@\S+\.\S+/.test(formData.email) ? "" : "Invalid email") : "Email is required",
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validate form
//     if (!validateForm()) {
//       return;
//     }

//     // Check if payment method is selected
//     if (!paymentMethod) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Please select a payment method!",
//       });
//       return;
//     }

//     // Show processing popup
//     Swal.fire({
//       title: "Processing your order",
//       text: "Please wait a moment...",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Proceed",
//       cancelButtonText: "Cancel",
//       cancelButtonColor: "#d33",
//       showLoaderOnConfirm: true,
//       preConfirm: () => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             resolve(true);
//           }, 2000); // Simulate a 2-second delay for processing
//         });
//       },
//       allowOutsideClick: () => !Swal.isLoading(),
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           icon: "success",
//           title: "Success!",
//           text: "Your order has been successfully processed!",
//         });
//       }
//     });
//   };

//   const HandlePlaceOrder = async () => {

//     const orderData = {
//         _type : 'order',
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         address: formData.address,
//         city: formData.city,
//         postalCode: formData.postalCode,
//         phone: formData.phone,
//         email: formData.email,
//         zipCode : formData.postalCode,
//         cartItems : cart.map(item => ({
//             _ref : item._id,
//             _type : 'reference'
//         })),
//         total : totalPrice,
//         orderDate : new Date().toISOString
//     }

//     try {
//         await client.create(orderData)
//         localStorage.removeItem('');

//     } catch (error) {
//         console.error('Error creating order:', error);
//     }

//   };

//   return (
//     <div>
//       <Main heading="Checkout" page="Checkout" />

//       <div className="flex items-center justify-center mb-24">
//         <div className="xl:w-[1100px] flex flex-col lg:flex-row justify-around mx-20">
//           {/* Billing Details Form */}
//           <div className="lg:w-[500px]">
//             <h1 className="text-2xl md:text-4xl font-semibold mb-16">Billing Details</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="flex gap-8">
//                 <div>
//                   <p className="font-medium mb-8">First Name</p>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//                   />
//                   {formErrors.firstName && <p className="text-red-500 text-sm mb-6">{formErrors.firstName}</p>}
//                 </div>
//                 <div>
//                   <p className="font-medium mb-8">Last Name</p>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//                   />
//                   {formErrors.lastName && <p className="text-red-500 text-sm mb-6">{formErrors.lastName}</p>}
//                 </div>
//               </div>


//               <p className="font-medium mb-8">Country / Region</p>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
//               >
//                 <option value="Srilanka">U.S.A</option>
//               </select>

//               <p className="font-medium mb-8">Street Address</p>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.address && <p className="text-red-500 text-sm mb-6">{formErrors.address}</p>}

//               <p className="font-medium mb-8">Town / City</p>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.city && <p className="text-red-500 text-sm mb-6">{formErrors.city}</p>}

//               <p className="font-medium mb-8">Province</p>
//               <select
//                 name="province"
//                 value={formData.province}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
//               >
//                 <option value="Western Province">Western Province</option>
//               </select>

//               <p className="font-medium mb-8">ZIP Code</p>
//               <input
//                 type="text"
//                 name="postalCode"
//                 value={formData.postalCode}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.postalCode && <p className="text-red-500 text-sm mb-6">{formErrors.postalCode}</p>}

//               <p className="font-medium mb-8">Phone</p>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.phone && <p className="text-red-500 text-sm mb-6">{formErrors.phone}</p>}

//               <p className="font-medium mb-8">Email Address</p>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
//               />
//               {formErrors.email && <p className="text-red-500 text-sm mb-6">{formErrors.email}</p>}

//               <p className="font-medium mb-8">Additional Information</p>
//               <input
//                 type="text"
//                 name="additionalInfo"
//                 value={formData.additionalInfo}
//                 onChange={handleChange}
//                 className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
//               />
//             </form>
//           </div>

//           {/* Order Summary */}
//           <div className="w-full lg:w-[475px]">
//             <div className="grid grid-cols-2 gap-10 border-t border-gray-300 pt-6">
//               {/* First Column - Product Details */}
//               <div className="flex flex-col gap-4">
//                 <h1 className="text-2xl font-medium mb-4">Product</h1>
//                 {cart.map((product) => (
//                   <div key={product.id} className="flex justify-between">
//                     <span className="text-gray-600">{product.name}</span>
//                     <span className="text-black">x {product.quantity}</span>
//                   </div>
//                 ))}
//                 <p className="font-medium mt-4">Subtotal</p>
//                 <p className="font-medium text-lg">Total</p>
//               </div>

//               {/* Second Column - Amount Details */}
//               <div className="flex flex-col gap-4 items-end">
//                 <h1 className="text-2xl font-medium mb-4">Amount</h1>
//                 {cart.map((product) => (
//                   <span key={product.id} className="text-gray-600">
//                     Rs. {(product.price * product.quantity).toFixed(2)}
//                   </span>
//                 ))}
//                 <p className="text-gray-600 mt-4">Rs. {totalPrice.toFixed(2)}</p>
//                 <p className="text-[#B88E2F] sm:text-2xl font-bold">Rs. {totalPrice.toFixed(2)}</p>
//               </div>
//             </div>

//             <div className="mt-7">
//               <li className="xl:w-[474px] border-[#9F9F9F] border-t-[1px] pt-5 mb-5">Direct Bank Transfer</li>
//               <p className="xl:w-[475px] text-[#9F9F9F] font-light mb-5 text-justify">
//                 Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//               </p>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Direct Bank Transfer"
//                 onChange={() => setPaymentMethod("Direct Bank Transfer")}
//                 className="text-[#9F9F9F] mr-2"
//               />
//               <span className="text-[#9F9F9F] font-medium">Direct Bank Transfer</span>
//               <br />
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Cash On Delivery"
//                 onChange={() => setPaymentMethod("Cash On Delivery")}
//                 className="text-[#9F9F9F] mb-10 mr-1"
//               />
//               <span className="text-[#9F9F9F] font-medium">Cash On Delivery</span>

//               <p className="text-justify xl:w-[475px] font-light mb-8">
//                 Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.
//               </p>

//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="w-[315px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16"
//               >
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="my-20">
//         <Facilities />
//       </div>
//     </div>
//   );
// };

// export default Checkout;


















'use client';

import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Facilities from "../components/Facilities";
import { Product } from "@/types/Products";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "Srilanka",
    address: "",
    city: "",
    province: "Western Province",
    postalCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  // Fetch cart data from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Calculate total price dynamically
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {
      firstName: formData.firstName ? "" : "First name is required",
      lastName: formData.lastName ? "" : "Last name is required",
      address: formData.address ? "" : "Address is required",
      city: formData.city ? "" : "City is required",
      postalCode: formData.postalCode
        ? /^\d{5,6}(?:[-\s]\d{4})?$/.test(formData.postalCode) // ZIP code validation
          ? ""
          : "Invalid postal code"
        : "Postal code is required",
      phone: formData.phone
        ? /^\+?[0-9]{10,15}$/.test(formData.phone) // Phone number validation
          ? ""
          : "Invalid phone number"
        : "Phone is required",
      email: formData.email
        ? /\S+@\S+\.\S+/.test(formData.email) // Email validation
          ? ""
          : "Invalid email"
        : "Email is required",
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Check if payment method is selected
    if (!paymentMethod) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a payment method!",
      });
      return;
    }

    // Show processing popup
    Swal.fire({
      title: "Processing your order",
      text: "Please wait a moment...",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed",
      cancelButtonText: "Cancel",
      cancelButtonColor: "#d33",
      showLoaderOnConfirm: true,
      backdrop: true, 
      preConfirm: async () => {
        try {
          // Call HandlePlaceOrder to create the order
          await HandlePlaceOrder();
          return true; // Resolve the promise if successful
        } catch (error) {
          console.error('Error creating order:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to place the order. Please try again.',
          });
          return false; // Reject the promise if there's an error
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your order has been successfully processed!",
        });
      }
    });
  };

  const HandlePlaceOrder = async () => {
    const orderData = {
      _type: 'order',
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      city: formData.city,
      postalCode: formData.postalCode,
      phone: formData.phone,
      email: formData.email,
      zipCode: formData.postalCode,
      cartItems: cart.map((item) => ({
        _ref: item._id, 
        _type: 'reference',
      })),
      total: totalPrice,
      orderDate: new Date().toISOString(),
      status: 'pending', // Add status field
    };
    console.log('Order Data:', orderData); // Log the order data


    try {
      const result = await client.create(orderData);
      console.log('Order created:', result); // Log the result
      localStorage.removeItem('cart'); // Clear the cart
    } catch (error) {
      console.error('Error creating order:', error);
      throw error; // Throw the error to handle it in handleSubmit
    }
  };

  return (
    <div>
      <Main heading="Checkout" page="Checkout" />

      <div className="flex items-center justify-center mb-24">
        <div className="xl:w-[1100px] flex flex-col lg:flex-row justify-around mx-20">
          {/* Billing Details Form */}
          <div className="lg:w-[500px]">
            <h1 className="text-2xl md:text-4xl font-semibold mb-16">Billing Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <div>
                  <p className="font-medium mb-8">First Name</p>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
                  />
                  {formErrors.firstName && <p className="text-red-500 text-sm mb-6">{formErrors.firstName}</p>}
                </div>
                <div>
                  <p className="font-medium mb-8">Last Name</p>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full md:w-[210px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
                  />
                  {formErrors.lastName && <p className="text-red-500 text-sm mb-6">{formErrors.lastName}</p>}
                </div>
              </div>

              <p className="font-medium mb-8">Country / Region</p>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
              >
                <option value="Srilanka">U.S.A</option>
              </select>

              <p className="font-medium mb-8">Street Address</p>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
              />
              {formErrors.address && <p className="text-red-500 text-sm mb-6">{formErrors.address}</p>}

              <p className="font-medium mb-8">Town / City</p>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
              />
              {formErrors.city && <p className="text-red-500 text-sm mb-6">{formErrors.city}</p>}

              <p className="font-medium mb-8">Province</p>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
              >
                <option value="Western Province">Western Province</option>
              </select>

              <p className="font-medium mb-8">ZIP Code</p>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
              />
              {formErrors.postalCode && <p className="text-red-500 text-sm mb-6">{formErrors.postalCode}</p>}

              <p className="font-medium mb-8">Phone</p>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
              />
              {formErrors.phone && <p className="text-red-500 text-sm mb-6">{formErrors.phone}</p>}

              <p className="font-medium mb-8">Email Address</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-2 rounded-xl p-4"
              />
              {formErrors.email && <p className="text-red-500 text-sm mb-6">{formErrors.email}</p>}

              <p className="font-medium mb-8">Additional Information</p>
              <input
                type="text"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full md:w-[450px] md:h-[75px] border border-black bg-white mb-10 rounded-xl p-4"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[475px]">
            <div className="grid grid-cols-2 gap-10 border-t border-gray-300 pt-6">
              {/* First Column - Product Details */}
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-medium mb-4">Product</h1>
                {cart.map((product) => (
                  <div key={product.id} className="flex justify-between">
                    <span className="text-gray-600">{product.name}</span>
                    <span className="text-black">x {product.quantity}</span>
                  </div>
                ))}
                <p className="font-medium mt-4">Subtotal</p>
                <p className="font-medium text-lg">Total</p>
              </div>

              {/* Second Column - Amount Details */}
              <div className="flex flex-col gap-4 items-end">
                <h1 className="text-2xl font-medium mb-4">Amount</h1>
                {cart.map((product) => (
                  <span key={product.id} className="text-gray-600">
                    Rs. {(product.price * product.quantity).toFixed(2)}
                  </span>
                ))}
                <p className="text-gray-600 mt-4">Rs. {totalPrice.toFixed(2)}</p>
                <p className="text-[#B88E2F] sm:text-2xl font-bold">Rs. {totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-7">
              <li className="xl:w-[474px] border-[#9F9F9F] border-t-[1px] pt-5 mb-5">Direct Bank Transfer</li>
              <p className="xl:w-[475px] text-[#9F9F9F] font-light mb-5 text-justify">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
              <input
                type="radio"
                name="paymentMethod"
                value="Direct Bank Transfer"
                onChange={() => setPaymentMethod("Direct Bank Transfer")}
                className="text-[#9F9F9F] mr-2"
              />
              <span className="text-[#9F9F9F] font-medium">Direct Bank Transfer</span>
              <br />
              <input
                type="radio"
                name="paymentMethod"
                value="Cash On Delivery"
                onChange={() => setPaymentMethod("Cash On Delivery")}
                className="text-[#9F9F9F] mb-10 mr-1"
              />
              <span className="text-[#9F9F9F] font-medium">Cash On Delivery</span>

              <p className="text-justify xl:w-[475px] font-light mb-8">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <strong>privacy policy</strong>.
              </p>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-[315px] h-[65px] rounded-2xl border-black border-[1.35px] text-[20px] mt-16"
              >
                Place Order
              </button>
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

export default Checkout;
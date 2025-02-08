"use client";

import React from "react";
import Image from "next/image";
import { RiDeleteBin7Fill } from "react-icons/ri";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
}

const CartComponent: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  return (
    <div className="h-fit w-fit py-20 px-10 xl:w-[720px] xl:h-16 bg-[#FFF9E5] xl:px-0 xl:py-0">
      {cartItems.length > 0 ? (
        <div className="grid gap-y-2 mt-16 xl:grid-cols-[140px,130px,140px,125px,90px] xl:gap-y-14 xl:pt-6 xl:mt-0">
          <p className="xl:col-start-2 font-medium">Product</p>
          <p className="font-medium">Price</p>
          <p className="font-medium">Quantity</p>
          <p className="font-medium">Subtotal</p>

          {cartItems.map((item) => (
            <div key={item.id} className="ml-40 flex flex-col gap-3 xl:grid xl:grid-cols-6 xl:gap-x-[135px] xl:items-center xl:ml-0">
              <div className="w-[105px] h-[105px] bg-[#FBEBB5] xl:flex items-center xl:justify-center xl:rounded-md">
                <Image src={item.image} alt={item.name} width={100} height={100} quality={100} />
              </div>
              <p className="text-[#9F9F9F] text-nowrap">{item.name}</p>
              <p className="text-[#9F9F9F] text-nowrap">Rs. {item.price.toLocaleString()}</p>
              <span className="xl:w-fit xl:h-fit xl:border-2 xl:rounded-sm xl:p-1 xl:pl-3 xl:pr-3 xl:ml-6">{item.quantity}</span>
              <p className="text-nowrap">Rs. {(item.price * item.quantity).toLocaleString()}</p>
              <RiDeleteBin7Fill className="text-[#FBEBB5] size-6 ml-12 cursor-pointer" onClick={() => removeFromCart(item.id)} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-[#9F9F9F] mt-5">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartComponent;

"use client"; // ✅ Ensure this runs on the client side

import React from "react";
import { CartProvider } from "./CartContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

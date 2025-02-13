
import { Product } from '../../types/Products';

export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};

export const addToCart = (product: Product, selectedQuantity: number = 1) => {
  if (selectedQuantity < 1) selectedQuantity = 1; // Ensure quantity is valid
  const cart: Product[] = getCartItems();
  const existingProduct = cart.find((item) => item._id === product._id);

  if (existingProduct) {
    existingProduct.quantity += selectedQuantity;
  } else {
    cart.push({ ...product, quantity: selectedQuantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (productId: string): Product[] => {
  const cart = getCartItems();
  const productExists = cart.some((item) => item._id === productId);

  if (!productExists) {
    console.warn(`Product with ID ${productId} not found in cart.`);
    return cart; // Return the original cart if product doesn't exist
  }

  const updatedCart = cart.filter((item) => item._id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export const updateCartQuantity = (productId: string, quantity: number): Product[] => {
  if (quantity < 1) quantity = 1; // Ensure quantity is valid
  const cart = getCartItems();
  const productExists = cart.some((item) => item._id === productId);

  if (!productExists) {
    console.warn(`Product with ID ${productId} not found in cart.`);
    return cart; // Return the original cart if product doesn't exist
  }

  const updatedCart = cart.map((item) =>
    item._id === productId ? { ...item, quantity } : item
  );
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  return updatedCart;
};

export const calculateTotal = (cart: Product[]): number => {
  return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};
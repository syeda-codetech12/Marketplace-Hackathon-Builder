import { Product } from '../../types/Products';

export const getWishlistItems = (): Product[] => {
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
};

export const addToWishlist = (product: Product) => {
  const wishlist: Product[] = getWishlistItems();
  const exists = wishlist.some((item) => item._id === product._id);

  if (!exists) {
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (productId: string): Product[] => {
  const wishlist = getWishlistItems();
  const updatedWishlist = wishlist.filter((item) => item._id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  return updatedWishlist;
};

export const clearWishlist = () => {
  localStorage.removeItem('wishlist');
};









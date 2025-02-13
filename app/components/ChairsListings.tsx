

// 'use client'
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Product } from '@/types/Products'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'

// export default function Chairslisting() {
//   const [products, setProducts] = useState<Product[]>([])
//   const [searchQuery, setSearchQuery] = useState<string>('')

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProduct: Product[] = await client.fetch(
//         `*[_type == "product" && category == "Chair"] {
//           _id,
//           "id": id,
//           name, 
//           price,
//           "image": image.asset._ref
//         }`
//       )
//       setProducts(fetchedProduct)
//     }
//     fetchProducts()
//   }, [])

//   // Filter products based on the search query (by name)
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   return (
//     <div>
//       {/* Search Bar */}
//       <div className="my-5 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search chairs..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 p-2 rounded w-full max-w-md bg-white"
//         />
//       </div>
//       {/* Products Grid */}
//       {filteredProducts.length === 0 ? (
//         <div className="flex flex-col items-center justify-center my-20">
//           <p className="text-gray-500 text-lg font-semibold">🚫 No products found</p>
//           <p className="text-gray-400 text-sm mt-2">Try searching other keywords</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
//           {filteredProducts.map((product) => (
//             <div key={product._id} className="w-full h-auto flex flex-col p-5">
//               {/* Product Image */}
//               <Link href={`/product/${product.id}`}>
//                 <div className="flex items-center justify-center mb-4">
//                   <Image
//                     src={urlFor(product.image).url()}
//                     alt="Product Image"
//                     width={200}
//                     height={190}
//                     priority 
//                     className="object-cover h-[190px]"
//                   />
//                 </div>
//               </Link>
//               {/* Product Details */}
//               <div className="flex flex-col gap-2 items-center">
//                 <h3 className="font-normal text-black">{product.name}</h3>
//                 <p className="text-black font-medium text-2xl">Rs. {product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }













// For Chairslisting.tsx
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/Products'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { HeartIcon, ShoppingCartIcon } from 'lucide-react'
import { addToWishlist, getWishlistItems } from '../actions/wishlist'
import Swal from 'sweetalert2'
import { addToCart } from '../actions/cart'

export default function Chairslisting() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleWishlist = (product: Product) => {
    const wishlist = getWishlistItems()
    const exists = wishlist.some((item) => item._id === product._id)

    if (exists) {
      Swal.fire({
        title: 'Already Added!',
        text: 'This item is already in your wishlist.',
        icon: 'info',
        confirmButtonText: 'OK',
      })
    } else {
      addToWishlist(product)
      Swal.fire({
        title: 'Added!',
        text: 'Item has been added to your wishlist.',
        icon: 'success',
        timer: 1000,
        confirmButtonText: 'OK',
      })
    }
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    Swal.fire({
      title: 'Added to Cart!',
      text: 'Item has been added to your cart.',
      icon: 'success',
      timer: 1000,
      confirmButtonText: 'OK',
    })
  }

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Product[] = await client.fetch(
        `*[_type == "product" && category == "Chair"] {
          _id,
          "id": id,
          name, 
          price,
          "image": image.asset._ref
        }`
      )
      setProducts(fetchedProduct)
    }
    fetchProducts()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="my-5 flex justify-center">
        <input
          type="text"
          placeholder="Search chairs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full max-w-md bg-white"
        />
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-20">
          <p className="text-gray-500 text-lg font-semibold">🚫 No products found</p>
          <p className="text-gray-400 text-sm mt-2">Try searching other keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
          {filteredProducts.map((product) => (
            <div key={product._id} className="w-full h-auto flex flex-col p-5 relative">
              <div className="absolute top-7 right-[5rem] z-10 flex flex-col gap-2">
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    handleWishlist(product)
                  }}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <HeartIcon className="w-6 h-6 text-black hover:text-red-600" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleAddToCart(product)
                  }}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <ShoppingCartIcon className="w-6 h-6 text-black hover:text-green-600" />
                </button>
              </div>

              <Link href={`/product/${product.id}`}>
                <div className="flex items-center justify-center mb-4 relative">
                  <Image
                    src={urlFor(product.image).url()}
                    alt="Product Image"
                    width={300}
                    height={250}
                    priority
                    className="object-cover h-[250px]"
                  />
                </div>
              </Link>

              <div className="flex flex-col gap-2 items-center">
                <h3 className="font-normal text-black">{product.name}</h3>
                <p className="text-black font-medium text-2xl">Rs. {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
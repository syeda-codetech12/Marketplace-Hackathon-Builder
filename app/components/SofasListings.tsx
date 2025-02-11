

'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/Products'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

export default function Sofaslisting() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Product[] = await client.fetch(
        `*[_type == "product" && category == "Sofa"] {
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

  // Filter products based on the search query (by name)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      {/* Search Bar */}
      <div className="my-5 flex justify-center">
        <input
          type="text"
          placeholder="Search Sofas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full max-w-md bg-white"
        />
      </div>
      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-20">
          <p className="text-gray-500 text-lg font-semibold">🚫 No products found</p>
          <p className="text-gray-400 text-sm mt-2">Try searching other keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
          {filteredProducts.map((product) => (
            <div key={product._id} className="w-full h-auto flex flex-col p-5">
              {/* Product Image */}
              <Link href={`/product/${product.id}`}>
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src={urlFor(product.image).url()}
                    alt="Product Image"
                    width={200}
                    height={190}
                    priority 
                    className="object-cover h-[190px]"
                  />
                </div>
              </Link>
              {/* Product Details */}
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

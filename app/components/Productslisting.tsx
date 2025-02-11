

// 'use client'
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Product } from '@/types/Products'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'

// interface ProductsListingProps {
//   searchQuery: string;
// }

// export default function Productslisting({ searchQuery }: ProductsListingProps) {

//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProduct: Product[] = await client.fetch(`*[_type == "product"]{
//         _id,
//         "id": id,
//         name, 
//         price,
//         category,
//         "image": image.asset._ref,
//       }`);
//       setProducts(fetchedProduct);
//     }
//     fetchProducts();
//   }, []);

//   // Filter products based on the search query
//   const filteredProducts = products.filter((product) => {
//     const productName = product.name.toLowerCase();
//     const productCategory = product.category?.toLowerCase() || '';
//     const searchTerm = searchQuery.toLowerCase();

//     return (
//       productName.includes(searchTerm) || productCategory.includes(searchTerm)
//     );
//   });

//   return (
//     <div>
//       {filteredProducts.length === 0 ? (

//          <div className="flex flex-col items-center justify-center my-20">
//          <p className="text-gray-500 text-lg font-semibold">🚫 No products found</p>
//          <p className="text-gray-400 text-sm mt-2">Try searching with different keywords.</p>
//        </div>
        
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10 ">
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
//   );
// }














// 'use client'
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Product } from '@/types/Products'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'

// interface ProductsListingProps {
//   searchQuery: string;
// }

// export default function Productslisting({ searchQuery }: ProductsListingProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6; // Change this value to show more/less products per page

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProduct: Product[] = await client.fetch(`*[_type == "product"]{
//         _id,
//         "id": id,
//         name, 
//         price,
//         category,
//         "image": image.asset._ref,
//       }`);
//       setProducts(fetchedProduct);
//     }
//     fetchProducts();
//   }, []);

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) => {
//     const productName = product.name.toLowerCase();
//     const productCategory = product.category?.toLowerCase() || '';
//     const searchTerm = searchQuery.toLowerCase();

//     return productName.includes(searchTerm) || productCategory.includes(searchTerm);
//   });

//   // Pagination Logic
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div>
//       {filteredProducts.length === 0 ? (
//         <div className="flex flex-col items-center justify-center my-20">
//           <p className="text-gray-500 text-lg font-semibold">🚫 No products found</p>
//           <p className="text-gray-400 text-sm mt-2">Try searching with different keywords.</p>
//         </div>
//       ) : (
//         <>
//           {/* Product Listing */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
//             {paginatedProducts.map((product) => (
//               <div key={product._id} className="w-full h-auto flex flex-col p-5">
//                 {/* Product Image */}
//                 <Link href={`/product/${product.id}`}>
//                   <div className="flex items-center justify-center mb-4">
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt="Product Image"
//                       width={200}
//                       height={190}
//                       className="object-cover h-[190px]"
//                     />
//                   </div>
//                 </Link>

//                 {/* Product Details */}
//                 <div className="flex flex-col gap-2 items-center">
//                   <h3 className="font-normal text-black">{product.name}</h3>
//                   <p className="text-black font-medium text-2xl">Rs. {product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center space-x-2 mt-4">
//               {/* Previous Button */}
//               <button
//                 onClick={() => setCurrentPage(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-2 bg-gray-300 rounded disabled:opacity-50"
//               >
//                 Previous
//               </button>

//               {/* Page Numbers */}
//               {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`px-3 py-2 rounded ${
//                     currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}

//               {/* Next Button */}
//               <button
//                 onClick={() => setCurrentPage(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-2 bg-gray-300 rounded disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }











// 'use client'
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Product } from '@/types/Products'
// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import Pagination from './Pagination'
// import LoadingSpinner from './LoaderSpinner'

// interface ProductsListingProps {
//   searchQuery: string;
// }

// export default function ProductsListing({ searchQuery }: ProductsListingProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const itemsPerPage = 6;

//   // Fetch products from Sanity
//   useEffect(() => {
//     async function fetchProducts() {
//       setLoading(true);
//       const fetchedProducts: Product[] = await client.fetch(`*[_type == "product"]{
//         _id,
//         "id": id,
//         name, 
//         price,
//         category,
//         "image": image.asset._ref,
//       }`);
//       setProducts(fetchedProducts);
//       setLoading(false);
//     }
//     fetchProducts();
//   }, []);

//   // Filter products based on search query
//   const filteredProducts = products.filter((product) => {
//     const productName = product.name.toLowerCase();
//     const productCategory = product.category?.toLowerCase() || '';
//     const searchTerm = searchQuery.toLowerCase();

//     return productName.includes(searchTerm) || productCategory.includes(searchTerm);
//   });

//   // Reset pagination to page 1 whenever searchQuery changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchQuery]);

//   // Calculate total pages and paginated products
//   const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

//   return (
//     <div>
//       {loading ? (
//         <LoadingSpinner />
//       ) : filteredProducts.length === 0 ? (
//         <div className="flex flex-col items-center justify-center my-20">
//           <p className="text-gray-500 text-lg font-semibold">🚫 No products found</p>
//           <p className="text-gray-400 text-sm mt-2">Try searching with different keywords.</p>
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
//             {paginatedProducts.map((product) => (
//               <div key={product._id} className="w-full h-auto flex flex-col p-5">
//                 <Link href={`/product/${product.id}`}>
//                   <div className="flex items-center justify-center mb-4">
//                     <Image
//                       src={urlFor(product.image).url()}
//                       alt="Product Image"
//                       width={200}
//                       height={190}
//                       priority
//                       className="object-cover h-[190px]"
//                     />
//                   </div>
//                 </Link>

//                 <div className="flex flex-col gap-2 items-center">
//                   <h3 className="font-normal text-black">{product.name}</h3>
//                   <p className="text-black font-medium text-2xl">Rs. {product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Pagination (Always Visible) */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={setCurrentPage}
//             searchQuery={searchQuery} // Pass searchQuery to Pagination
//           />
//         </>
//       )}
//     </div>
//   );
// }











'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/Products'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Pagination from './Pagination'
import LoadingSpinner from './LoaderSpinner'

interface ProductsListingProps {
  searchQuery: string;
}

export default function ProductsListing({ searchQuery }: ProductsListingProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 6;

  // Fetch products from Sanity
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const fetchedProducts: Product[] = await client.fetch(`*[_type == "product"]{
        _id,
        "id": id,
        name, 
        price,
        category,
        "image": image.asset._ref,
      }`);
      setProducts(fetchedProducts);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const productCategory = product.category?.toLowerCase() || '';
    const searchTerm = searchQuery.toLowerCase();

    return productName.includes(searchTerm) || productCategory.includes(searchTerm);
  });

  // Wrap setCurrentPage in useCallback for better performance
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  // Reset pagination to page 1 whenever searchQuery changes
  useEffect(() => {
    handlePageChange(1);
  }, [searchQuery, handlePageChange]);

  // Calculate total pages and paginated products
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-20">
          <p className="text-gray-500 text-lg font-semibold">🚫 No products found</p>
          <p className="text-gray-400 text-sm mt-2">Try searching with different keywords.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-10">
            {paginatedProducts.map((product) => (
              <div key={product._id} className="w-full h-auto flex flex-col p-5">
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

                <div className="flex flex-col gap-2 items-center">
                  <h3 className="font-normal text-black">{product.name}</h3>
                  <p className="text-black font-medium text-2xl">Rs. {product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (Always Visible) */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange} // Optimized function
            searchQuery={searchQuery} // Pass searchQuery to Pagination
          />
        </>
      )}
    </div>
  );
}

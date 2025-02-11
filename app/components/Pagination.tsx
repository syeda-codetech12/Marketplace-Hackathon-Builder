// 'use client'
// import React from 'react'

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
//   return (
//     <div className="flex justify-center items-center space-x-2 mt-4">
//       {/* Previous Button */}
//       <button
//         onClick={() => onPageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className="px-3 py-2 bg-[#ffe5d9] rounded disabled:opacity-50"
//       >
//         Previous
//       </button>

//       {/* Page Numbers */}
//       {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//         <button
//           key={page}
//           onClick={() => onPageChange(page)}
//           className={`px-3 py-2 rounded ${
//             currentPage === page ? 'bg-[#f7c2ba] text-white' : 'bg-[#ffe5d9]'
//           }`}
//         >
//           {page}
//         </button>
//       ))}

//       {/* Next Button */}
//       <button
//         onClick={() => onPageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className="px-3 py-2 bg-[#f5cac3] rounded disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//   )
// }







'use client'
import React, { useEffect } from 'react'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  searchQuery: string; // Add searchQuery as a prop
}

export default function Pagination({ currentPage, totalPages, onPageChange, searchQuery }: PaginationProps) {
  // Reset pagination to page 1 whenever the searchQuery changes
  useEffect(() => {
    onPageChange(1); // Reset to page 1
  }, [searchQuery]); // Triggered when searchQuery changes

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 bg-[#ffe5d9] rounded disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 rounded ${
            currentPage === page ? 'bg-[#f7c2ba] text-white' : 'bg-[#ffe5d9]'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 bg-[#f5cac3] rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}
// "use client";

// import { useState, useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";

// export default function Providers({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 800);

//     return () => clearTimeout(timer);
//   }, [pathname, searchParams]);

//   if (loading) {
//     return (
//      <div className="fixed inset-0 flex items-center justify-center bg-[#FBF9E5] z-50">
//      <div className="relative w-16 h-16 flex items-center justify-center">
//        {/* Three Spinning Circles */}
//        <div className="absolute w-4 h-4 bg-[#B88E2F] rounded-full animate-spin-loader delay-200"></div>
//        {/* <div className="absolute w-6 h-6 bg-[#D8B67B] rounded-full animate-spin-loader delay-200"></div> */}
//        <div className="absolute w-8 h-8 bg-[#E5CBAF] rounded-full animate-spin-loader delay-400"></div>
//      </div>
//    </div>
//     );
//   }

//   return <>{children}</>;
// }









"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";


export function LoadingIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#FBF9E5] z-50">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Two Spinning Circles */}
          <div className="absolute w-4 h-4 bg-[#B88E2F] rounded-full animate-spin-loader delay-200"></div>
          <div className="absolute w-8 h-8 bg-[#E5CBAF] rounded-full animate-spin-loader delay-400"></div>
        </div>
      </div>
    );
  }

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Suspense fallback={null}>
      <LoadingIndicator />
      {children}
      </Suspense>
    </>
  );
}
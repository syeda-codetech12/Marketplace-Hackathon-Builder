"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Adjust delay based on API response

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#FBF9E5] z-50">
        <div className="relative w-20 h-20 scale-animation">
          {/* Outer Thin Ring */}
          <div className="absolute inset-0 border-[3px] border-transparent border-t-[#B88E2F] border-b-[#B88E2F] rounded-full animate-spin-slow"></div>

          {/* Inner Bold Ring */}
          <div className="absolute inset-2 border-[6px] border-[#B88E2F] rounded-full animate-spin-reverse"></div>

          {/* Center Pulsating Dot */}
          <div className="w-6 h-6 bg-[#B88E2F] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

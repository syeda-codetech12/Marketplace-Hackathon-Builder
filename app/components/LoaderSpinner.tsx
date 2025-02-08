import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-16 h-16 border-4 border-[#B88E2F] border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;

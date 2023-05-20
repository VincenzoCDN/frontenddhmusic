import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="h-screen w-screen bg-red-800">
      <Navbar />
      <div className="secondContainer bg-gradient-to-b from-blue-900 to-blue-400 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5">
        <div className="flex flex-col justify-center items-center mt-5 md:mt-0 h-1/3 md:h-2/3 w-3/4 sm:w-2/4 md:w-1/4 border-violet-900 border-2">
          <div className="h-2/3 w-full border-b-white border-b bgMain1"></div>
          <div className="flex justify-center items-center h-1/3 w-full">
            <div className="w-1/3 bgMainA1 h-full"></div>
            <div className="w-1/3 bgMainA2 h-full border-8 border-yellow-100"></div>
            <div className="w-1/3 bgMainA3 h-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-1/3 md:h-2/3  w-3/4 sm:w-2/4 md:w-1/4 border-violet-900 border-2">
          <div className="h-2/3 w-full border-b-white border-b bgMain2"></div>
          <div className="flex justify-center items-center h-1/3 w-full">
            <div className="w-1/3 bgMainB1 h-full"></div>
            <div className="w-1/3 bgMainB2 h-full border-8 border-violet-300"></div>
            <div className="w-1/3 bgMainB3 h-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-5 md:mb-0 h-1/3 md:h-2/3  w-3/4 sm:w-2/4 md:w-1/4 border-violet-900 border-2">
          <div className="h-2/3 w-full border-b-white border-b bgMain3"></div>
          <div className="flex justify-center items-center h-1/3 w-full">
            <div className="w-1/3 bgMainC1 h-full"></div>
            <div className="w-1/3 bgMainC2 h-full border-8 border-orange-300"></div>
            <div className="w-1/3 bgMainC3 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

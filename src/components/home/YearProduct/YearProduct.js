import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";

const YearProduct = () => {
   return (
    <Link to="/shop">
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        {/* Blurred Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            className="w-full h-full object-cover blur-lg hidden md:inline-block"
            imgSrc={productOfTheYear}
          />
          {/* Optional Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Section (Text & Button) */}
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 
  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  flex flex-col items-center justify-center text-center z-10">
  <h1 style={{ color: "white" }} className="text-3xl font-semibold text-primeColor">
    Product of The Year
  </h1>
  <button className=" mt-5 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
    Shop Now
  </button>
</div>
      </div>
    </Link>
  );
};

export default YearProduct;

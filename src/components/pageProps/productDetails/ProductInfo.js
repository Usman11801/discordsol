import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => { // Added userId as a prop
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  const dispatch = useDispatch();

  const highlightStyle = {
    color: "#d0121a",
    fontWeight: "bold",
  };

  const renderDescription = () => {
    if (!productInfo.des) {
      return null;
    }

    return <>Your trusted partner for web & mobile app development and digital marketing. We specialize in creating custom solutions using the latest technologies like ReactJS, NodeJS, and React Native. Let us help you build engaging digital experiences and boost your online presence!</>;
  };

  const handleMouseEnter = (index) => {
    setHoveredStars(index);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const handleClick = async (index) => {
    setSelectedStars(index);
    
    // Call the review API
    const token = localStorage.getItem("accessToken"); // Get the access token from local storage
    const productId = productInfo._id; // Assuming the product ID is stored in productInfo._id
    const rating = index; // The selected star rating

    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/product/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
        body: JSON.stringify({ productId, userId, rating }), // Send the productId, userId, and rating in the request body
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const data = await response.json();
      console.log("Review submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-6 h-6 cursor-pointer ${
            i <= (hoveredStars || selectedStars) ? "text-yellow-400" : "text-gray-300"
          }`}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-2xl font-semibold">
        {productInfo.price} Dt
        <span className="text-xl font-semibold line-through ml-2">
          {parseFloat(productInfo.price) + 8}
        </span>
        <span className="text-xs ml-2 inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white">
          Save 8.00
        </span>
      </p>
      <hr />
      <p className="text-base text-gray-600">{renderDescription()}</p>

      <div className="flex items-center">
        <p className="text-sm mr-2">Leave a review:</p>
        <div className="flex">{renderStars()}</div>
      </div>

      <p className="text-base text-green-600 font-medium">Available</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Service:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo._id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    style={{
      position: "relative",
      backgroundColor: "#F5F5F3", // Gray background color
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center vertically
    }}
  >
    <div
      style={{
        maxWidth: "450px", // Adjust the maxWidth as needed
        marginRight: "100px", // Add margin between text/button and image
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem", // Adjust the font size as needed
          color: "#000", // Black color
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem", // Adjust the font size as needed
          color: "#666", // Gray color
        }}
      >
        {Subtext}
      </p>

      <Link to="/shop">
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    <div style={{ marginLeft: "100px",marginBottom:'7%',marginTop:'4%'}}>
      <Image className="w-[550px] rounded-3xl" imgSrc={imgSrc} />
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Elevate Your Digital Presence",
      Subtext: "Empower your business with our cutting-edge web and mobile solutions",
      buttonLink: "/services",
      buttonText: "Our Services",
    },
    {
      imgSrc: bannerImgOne,
      text: "Engage & Grow",
      Subtext: "Boost engagement with our targeted digital marketing strategies",
      buttonLink: "/services",
      buttonText: "Our Services",
    },
    {
      imgSrc: bannerImgOne,
      text: "Innovate with Confidence",
      Subtext: "Discover high-performance apps designed to scale and succeed",
      buttonLink: "/services",
      buttonText: "Our Services",
    },
  ];
  
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

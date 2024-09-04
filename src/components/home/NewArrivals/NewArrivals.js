import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Classic earbirds"
            price="5.00"
            color="Green"
            badge={true}
            des="Earbirds with two mic and quality sound with the care of you ear health"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Quad mic earbirds"
            price="8.00"
            color="White"
            badge={true}
            des="Earbirds with Quad mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Head phones"
            price="6.00"
            color="White"
            badge={true}
            des="Headphones with excellent mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Handsfree"
            price="2.00"
            color="grey"
            badge={false}
            des="Handsfree with excellent mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Quad mic earbirds"
            price="8.00"
            color="white"
            badge={false}
            des="Earbirds with Quad mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

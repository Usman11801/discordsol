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
      <Heading heading="Digital Marketing Services" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Social Media Management"
            price="24.99 - 32.50"
            color="Managing and creating content for platforms like Instagram, Facebook, LinkedIn, and Twitter, which includes strategy, scheduling, engagement, and performance reporting."
            badge={true}
            des="Earbirds with two mic and quality sound with the care of you ear health"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Search Engine Optimization (SEO)"
            price="29.99 - 36.99"
            color="Improving website rankings on search engines "
            badge={true}
            des="Earbirds with Quad mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Content Marketing"
            price="34.99 - 42.99"
            color="Creating and promoting high-quality content (blog posts, articles, videos) that aligns with the brand's goals and SEO strategy."
            badge={true}
            des="Headphones with excellent mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Email Marketing"
            price="149.70 - 179.64"
            color="Developing email campaigns, including newsletters, automations, and A/B testing, focused on increasing customer engagement and conversions."
            badge={false}
            des="Handsfree with excellent mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Pay-Per-Click (PPC) Advertising Management"
            price="59.88 - 179.64"
            color="Managing ads "
            badge={false}
            des="Earbirds with Quad mic and quality sound with the care of you ear health and good call experiance"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Orebi</span>{" "}
          is a premier destination for all your electronic needs, offering a
          curated selection of top-quality products designed to enhance your
          digital experience. Our mission is to bring the latest in technology
          to your doorstep, with a focus on products that combine style,
          functionality, and innovation.
        </h1>
        <p className="text-base text-lightText mb-4">
          At Orebi, we understand the importance of reliable and efficient tools
          in your everyday life. Whether you're working from home, gaming with
          friends, or simply enjoying music on the go, our range of
          products—including keyboards, mice, headphones, and handsfree
          earbuds—are crafted to meet the highest standards of performance and
          durability. We believe in offering products that not only meet your
          technical requirements but also reflect your personal style.
        </p>
        <p className="text-base text-lightText mb-4">
          Our commitment to quality is evident in every product we offer. Each
          item in our collection is carefully selected for its superior
          craftsmanship and cutting-edge technology, ensuring that you receive
          nothing but the best. We collaborate with leading brands and
          manufacturers who share our vision of excellence, bringing you
          products that you can trust.
        </p>
        <p className="text-base text-lightText mb-4">
          But Orebi is more than just a store—it's a community of tech
          enthusiasts who share a passion for innovation and a love for
          well-designed products. We strive to provide our customers with an
          exceptional shopping experience, from the moment you browse our
          website to the moment your order arrives at your door. Our
          user-friendly platform makes it easy to find exactly what you're
          looking for, and our dedicated customer service team is always here to
          help with any questions or concerns.
        </p>
        <p className="text-base text-lightText mb-4">
          Join us on this journey of discovery and find the perfect tools to
          elevate your digital lifestyle. At Orebi, we're not just selling
          products—we're creating experiences that connect people with the
          technology they love. Explore our collection today and see how we can
          help you make the most of your digital world.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center">
          <Link to="/shop">
            <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
              Continue Shopping
            </button>
          </Link>
          {/* <Link
            to="/contact"
          >
            <button
            className="w-52 h-10 bg-white text-primeColor border-2 border-primeColor hover:bg-black hover:text-white duration-300 mt-4 sm:mt-0 sm:ml-4 flex justify-center items-center"
            
            >
            Contact Us
            </button>
            
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default About;

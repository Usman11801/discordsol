import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Discord Solutions</span> is your trusted partner in the digital world, specializing in top-notch mobile and web application development and comprehensive digital marketing services.
        </h1>
        <p className="text-base text-lightText mb-4">
          At Discord Solutions, we are committed to transforming your ideas into powerful digital solutions. Our expert team delivers custom mobile and web applications tailored to meet your business objectives, utilizing the latest frameworks and technologies like ReactJS, NodeJS, Angular, and React Native.
        </p>
        <p className="text-base text-lightText mb-4">
          Our digital marketing services are designed to help your business grow in the online space. From SEO and content marketing to social media management, we provide strategies that enhance visibility, engagement, and customer loyalty.
        </p>
        <p className="text-base text-lightText mb-4">
          We believe in building strong, lasting partnerships with our clients. By combining innovative technology with a customer-centric approach, Discord Solutions is here to support your journey toward digital transformation.
        </p>
        <p className="text-base text-lightText mb-4">
          Discover how we can drive your business forward. Let Discord Solutions be your go-to resource for cutting-edge mobile and web applications and effective digital marketing that amplifies your brand’s online presence.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center">
          <Link to="/shop">
            <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

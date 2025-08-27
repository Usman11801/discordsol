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
        
        {/* LinkedIn Section */}
        <div className="mt-8 mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-primeColor mb-3">Connect With Us</h3>
          <p className="text-base text-lightText mb-4">
            Stay connected with our team and get the latest updates on our services, industry insights, and success stories.
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/nouman-ahmad-a16aa31b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-md hover:bg-[#005885] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
            <span className="text-sm text-gray-500">Follow Nouman Ahmad</span>
          </div>
        </div>
        
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

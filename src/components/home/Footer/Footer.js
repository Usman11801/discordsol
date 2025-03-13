import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  const handleCategoryClick = (category) => {
    navigate({
      pathname: "/shop",
      // search: `?category=${category}`, 
    });
  };

  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title="More about DiscordSolutions" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
            where innovative digital solutions meet seamless user experiences. We specialize in mobile and web application development and digital marketing. Our team of experienced developers utilizes cutting-edge technologies. In digital marketing, we offer strategic, data-driven solutions to enhance brand presence, engage audiences, and drive results. With a commitment to quality and innovation, we're here to help you achieve success in the digital world.</p>
            <ul className="flex items-center gap-2">
              {/* Social Media Icons */}
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div>
          <FooterListTitle title="Services" />
          <ul className="flex flex-col gap-2">
            <li
              onClick={() => handleCategoryClick("Keyboards")}
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              {/* Keyboards */}
            </li>
            <li
              onClick={() => handleCategoryClick("Mouse")}
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Software Services
            </li>
            <li
              onClick={() => handleCategoryClick("Handsfree")}
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              {/* Handsfree */}
            </li>
            <li
              onClick={() => handleCategoryClick("Headphones")}
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              {/* Headphones */}
            </li>
            <li
              onClick={() => handleCategoryClick("Earbuds")}
              className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Digital Marketing Services
            </li>
          </ul>
        </div>

        <div>
          <FooterListTitle title="Contact US" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              <a
                style={{
                  marginLeft: "-20%",
                  fontSize: "1.1rem",
                  color: "#007bff",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support@discordsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@discordsolutions.com
              </a>
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              <p>+92333442712</p>
            </li>
             <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              <p><span>Adress:</span>House No. 200 P Model Town</p>
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
  <a href="/terms-and-conditions" style={{color:"#007bff"}} target="_blank" rel="noopener noreferrer">
    Terms and Conditions
  </a>
</li>
<li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
  <a href="/privacy-policy" style={{color:"#007bff"}} target="_blank" rel="noopener noreferrer">
    Privacy Policy
  </a>
</li>
<li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
  <a href="/refund-policy" style={{color:"#007bff"}} target="_blank" rel="noopener noreferrer">
    Refund Policy
  </a>
</li>

            {/* <Link to="/privacy-policy" style={{color:"#007bff"}}>Privacy Policy</Link>
              <Link to="/refund-policy" style={{color:"#007bff"}}>Refund policy</Link> */}
          </ul>
        </div>

        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full">
            {/* <p className="text-center mb-4">
              A at pellentesque et mattis porta enim elementum.
            </p> */}
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            )}
            <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${subscription ? "mt-2" : "mt-6"}`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

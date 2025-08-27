import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ContactPayment = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  
  // Get cart data from Redux store
  const cartItems = useSelector((state) => state.orebiReducer.products);
  const totalAmount = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const contactInfo = {
    email: "support@discordsolutions.com",
    phone: "+92333442712",
    whatsapp: "+92333442712",
    linkedin: "https://www.linkedin.com/in/nouman-ahmad-a16aa31b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    address: "House No. 200 P Model Town"
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact for Payment" prevLocation={prevLocation} />
      
      <div className="pb-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primeColor mb-4">
            Ready to Get Started?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for choosing Discord Solutions! Please contact us to discuss your project requirements 
            and complete the payment process. Our team is ready to help you bring your vision to life.
          </p>
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-primeColor mb-4">Your Selected Services</h2>
            <div className="space-y-3">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.colors}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${item.price}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300">
                <h3 className="text-xl font-bold text-primeColor">Total Amount:</h3>
                <p className="text-2xl font-bold text-primeColor">${totalAmount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-primeColor mb-6">Contact Information</h2>
            
            {/* Email */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {contactInfo.email}
                </a>
                <p className="text-sm text-gray-600">For project discussions and quotes</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <FaPhone className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-sm text-gray-600">Call for immediate assistance</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <FaWhatsapp className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                <a 
                  href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  {contactInfo.whatsapp}
                </a>
                <p className="text-sm text-gray-600">Quick messaging for project details</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaLinkedin className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                <a 
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Connect with Nouman Ahmad
                </a>
                <p className="text-sm text-gray-600">Professional networking and updates</p>
              </div>
            </div>
          </motion.div>

          {/* Process Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-primeColor mb-6">Next Steps</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-800 mb-2">1. Project Discussion</h3>
                <p className="text-blue-700 text-sm">
                  Contact us via email or phone to discuss your project requirements, timeline, and specific needs.
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-green-800 mb-2">2. Quote & Proposal</h3>
                <p className="text-green-700 text-sm">
                  We'll provide a detailed quote and project proposal based on your requirements.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-purple-800 mb-2">3. Payment & Agreement</h3>
                <p className="text-purple-700 text-sm">
                  Once you're satisfied with the proposal, we'll proceed with payment and project agreement.
                </p>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-orange-800 mb-2">4. Project Start</h3>
                <p className="text-orange-700 text-sm">
                  After payment confirmation, we'll begin working on your project immediately.
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Office Address</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
                     <a 
             href={`mailto:${contactInfo.email}?subject=Project Discussion - ${cartItems.length > 0 ? cartItems.map(item => item.name).join(', ') : 'General Inquiry'}`}
             className="inline-flex items-center gap-2 px-6 py-3 bg-primeColor text-white rounded-md hover:bg-black transition-colors duration-300"
           >
            <FaEnvelope />
            Send Email
          </a>
          
          <a 
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            <FaPhone />
            Call Now
          </a>
          
          <a 
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            <FaLinkedin />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Back to Cart */}
        <div className="mt-8 text-center">
          <Link to="/cart">
            <button className="px-6 py-2 text-primeColor border border-primeColor rounded-md hover:bg-primeColor hover:text-white transition-colors duration-300">
              ← Back to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPayment;

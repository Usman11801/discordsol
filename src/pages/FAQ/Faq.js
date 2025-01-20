import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Discord Solutions offer?",
    answer:
      "Discord Solutions specializes in mobile and web application development using ReactJS, NodeJS, Angular, and React Native. We also offer digital marketing services, including SEO, content marketing, and social media management.",
  },
  {
    question: "How can Discord Solutions help grow my business?",
    answer:
      "Our team provides tailored digital solutions that enhance online presence, improve customer engagement, and drive business growth through cutting-edge technology and marketing strategies.",
  },
  {
    question: "Which industries does Discord Solutions cater to?",
    answer:
      "We work with a wide range of industries, including e-commerce, healthcare, finance, education, and more, delivering customized digital solutions.",
  },
  {
    question: "What technologies does Discord Solutions use?",
    answer:
      "We leverage the latest frameworks and technologies such as ReactJS, NodeJS, Angular, React Native, and cloud-based solutions to build high-performance applications.",
  },
  {
    question: "How can I get started with Discord Solutions?",
    answer:
      "You can reach out to us via our website or contact our team directly to discuss your project requirements. We offer consultations to understand your needs and provide tailored solutions.",
  },
  {
    question: "Do you provide ongoing support after development?",
    answer:
      "Yes, we offer post-development support, maintenance, and updates to ensure your application remains up-to-date and functions smoothly.",
  },
  {
    question: "Can you help with UI/UX design?",
    answer:
      "Absolutely! Our design team creates user-friendly and visually appealing interfaces to enhance user experience.",
  },
  {
    question: "What makes Discord Solutions different from other agencies?",
    answer:
      "We focus on delivering customized solutions with a customer-centric approach, ensuring your specific business needs are met.",
  },
  {
    question: "How long does it take to develop an application?",
    answer:
      "The timeline varies based on project complexity, but we always strive to deliver within the agreed timeframe.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing models, including fixed-price, hourly, and retainer-based plans depending on project requirements.",
  },
  {
    question: "Can you integrate third-party services into our application?",
    answer:
      "Yes, we can integrate various third-party APIs and services, ensuring seamless functionality.",
  },
  {
    question: "Do you build e-commerce platforms?",
    answer:
      "Yes, we develop scalable e-commerce solutions with secure payment gateways and user-friendly designs.",
  },
  {
    question: "What security measures do you implement in applications?",
    answer:
      "We implement industry-standard security practices, including encryption, authentication, and secure API access.",
  },
  {
    question: "Can you migrate my existing application to a new technology?",
    answer:
      "Yes, we can modernize and migrate your application to a more efficient and scalable technology stack.",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "We offer hosting consultations and setup services, ensuring your application runs smoothly on reliable servers.",
  },
  {
    question: "Can I request a custom feature for my application?",
    answer:
      "Of course! We develop custom features based on your specific needs and business goals.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes, we offer SEO optimization services to enhance your website's visibility and ranking on search engines.",
  },
  {
    question: "Can you develop a mobile app for both iOS and Android?",
    answer:
      "Yes, we develop cross-platform applications using React Native, ensuring seamless functionality on both platforms.",
  },
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We provide SEO, content marketing, social media management, PPC advertising, and email marketing services.",
  },
  {
    question: "How do I contact Discord Solutions?",
    answer:
      "You can reach us through our website, email, or social media channels for inquiries and consultations.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes, we offer website redesign services to improve performance, aesthetics, and user experience.",
  },
  {
    question: "Do you offer content writing services?",
    answer:
      "Yes, our content team provides high-quality content tailored to your business needs.",
  },
  {
    question: "Can you integrate AI solutions into my business?",
    answer:
      "Yes, we develop AI-powered solutions to enhance automation and efficiency.",
  },
  {
    question: "Do you offer blockchain development services?",
    answer:
      "Yes, we provide blockchain solutions for secure and decentralized applications.",
  },
  {
    question: "How do you handle project management?",
    answer:
      "We use agile methodologies and project management tools to ensure smooth execution and timely delivery.",
  },
  {
    question: "Can you integrate CRM solutions?",
    answer:
      "Yes, we can integrate CRM platforms like Salesforce and HubSpot into your business workflow.",
  },
  {
    question: "Do you provide training for using the developed applications?",
    answer:
      "Yes, we offer training sessions and documentation to help you manage and use your application effectively.",
  },
  {
    question: "What support options do you provide?",
    answer:
      "We offer various support plans, including 24/7 assistance and on-demand troubleshooting.",
  }
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-8">
          At Discord Solutions, we are committed to transforming your ideas into powerful digital solutions.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <span className="text-gray-600 text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;

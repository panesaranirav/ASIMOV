import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";

const CustomerService = () => {
  return (
    <>
      
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: "url('/Banner3.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-[80px] max-w-[90%] font-bold text-[#ffffff9c] leading-snug text-center shadow-md px-4 py-2 rounded-md">
          CUSTOMER <p>SERVICE</p>
        </h1>
      </div>

      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10">
        <h1 className="text-center text-2xl md:text-3xl font-bold font-serif py-8">
          Is there anything we can help you with?
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Orders & Shipping",
            "Sellers & Partners",
            "Returns & Refunds",
            "Payment",
            "General Information",
            "Offers & Gifts",
            "FAQ",
            "Shopping on Asimov.com",
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 w-full sm:w-[300px] text-center rounded-2xl border-gray-300 text-lg hover:text-black hover:border-black cursor-pointer text-gray-400 border-2"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 mt-12">
        <h1 className="text-center text-2xl md:text-3xl font-bold font-serif py-8">
          Need any other help?
        </h1>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          
          <div className="border-2 border-gray-300 p-6 w-full sm:w-[300px] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <TfiEmail />
              <h1>Email</h1>
            </div>
            <p className="ml-6 break-words">patelnirav3501@gmail.com</p>
          </div>

        
          <div className="border-2 border-gray-300 p-6 w-full sm:w-[300px] rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <FaPhone />
              <h1>Mobile Number</h1>
            </div>
            <p className="ml-6">1234567891</p>
          </div>
        </div>
      </div>

      
      <div className="w-[90%] md:w-[80%] h-[300px] sm:h-[400px] mx-auto my-10 rounded-md overflow-hidden shadow-md">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197330098595!2d-122.4194153846793!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d0a6c30f7%3A0x403cfd8d24b4b00!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1669951900533!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default CustomerService;

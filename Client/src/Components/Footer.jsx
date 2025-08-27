import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import images from "../assets/Assets";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { RiPaypalFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="w-full py-10 px-4 border-y-[1px] border-gray-200">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <div className="relative w-full lg:w-1/2 text-center font-bold">
            <h1 className="text-xl sm:text-2xl mb-4">Join together with us</h1>
            <div className="relative w-[80%] mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 pr-10 py-2 border-b border-black focus:outline-none"
              />
              <FaArrowRight className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-right px-2">
            <h1 className="text-base sm:text-lg">
              By subscribing to our website, you agree to the terms and
              conditions.
            </h1>
          </div>
        </div>
      </div>
      <hr />

      <div className=" text-black px-6 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
    
    <div className="items-center mt-5">
      <img src={images.logo} alt="logo" className="mb-4 " />
      <div className="flex gap-4 ml-2 mt-2.5 text-xl">
        <FaFacebook className="hover:text-blue-500 cursor-pointer rounded-full" />
        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        <RiInstagramFill className="hover:text-pink-500 cursor-pointer" />
      </div>
    </div>

    <div>
      <h1 className="text-lg font-semibold mb-2">Payment Methods</h1>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2"><RiVisaLine className="text-2xl hover:text-blue-800" /> Visa</li>
        <li className="flex items-center gap-2"><RiMastercardFill className="text-1xl hover:text-orange-500" /> MasterCard</li>
        <li className="flex items-center gap-2"><BsCashCoin className="text-1xl hover:text-green-500"/> COD</li>
        <li className="flex items-center gap-2"><RiPaypalFill className="text-1xl hover:text-blue-900"/> PayPal</li>
      </ul>
    </div>

    <div>
      <h1 className="text-lg font-semibold mb-2">Help?</h1>
      <ul className="space-y-1 text-sm">
        <li className="cursor-pointer hover:underline">Customer Service</li>
        <li className="cursor-pointer hover:underline">FAQ</li>
        <li className="cursor-pointer hover:underline">Terms & Conditions</li>
      </ul>
    </div>

    <div>
      <h1 className="text-lg font-semibold mb-2">About Us</h1>
      <ul className="space-y-1 text-sm">
        <li className="cursor-pointer hover:underline">nirav.com/about</li>
        <li className="cursor-pointer hover:underline">Work with Us</li>
      </ul>
    </div>

    <div>
      <h1 className="text-lg font-semibold mb-2">Contact Us</h1>
      <div className="text-sm space-y-3">
        <div className="flex items-center gap-2">
          <IoCall /> <span>+91 000 0000 000</span>
        </div>
        <div className="flex items-center gap-2">
          <IoMdMail /> <span>patelnirav3501@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Footer;

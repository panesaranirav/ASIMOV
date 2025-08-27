import React from "react";
import images from "../assets/Assets";
// import background from '../assets/Background-store.jpg'
import { BsShopWindow } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router";

const StoreDescription = () => {
  const navigate = useNavigate();
  const handleProduct = () => {
    navigate("/fashion");
  };
  return (
    <div className="flex flex-col md:flex-row w-full h-full overflow-x-hidden">
      <div className="bg-white w-full md:w-1/2 mt-12 md:mt-20 px-4">
        <div className="flex justify-center w-full px-4">
          <div className="border-2 rounded-md border-gray-300 w-full max-w-[600px] p-4 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[60%]">
              <div className="flex items-center gap-2 font-bold text-xl md:text-2xl">
                <BsShopWindow />
                <span>You Ready</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <FaLocationDot />
                  <span className="text-gray-600 text-sm sm:text-base">
                    Kota Bandung
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShareFromSquare />
                  <span className="text-gray-600 text-sm sm:text-base">
                    Dibalas ± 6 menit
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="w-[100px] bg-black text-white rounded-md text-sm">
                  Follow
                </button>
                <button className="w-[100px] bg-black text-white rounded-md text-sm">
                  SellerChat
                </button>
              </div>
            </div>

            <div className="hidden md:block w-[1px] bg-gray-300" />

            <div className="w-full md:w-[40%] flex items-center justify-center gap-2">
              <span className="text-gray-600 text-sm sm:text-base">
                Nirav Patel
              </span>
              <FaStar className="text-amber-300" />
              <span className="font-bold text-sm sm:text-base">4.9</span>
            </div>
          </div>
        </div>

        <div className="h-auto justify-center flex w-full mt-6 ml-4">
          <div className="w-full max-w-[600px] m-auto">
            <h2 className="font-bold text-2xl md:text-3xl">Shop Description</h2>
            <p className="text-start text-gray-600 mt-3 text-sm sm:text-base">
              Shop a wide range of products from YouReady Store online now! You
              can safely and easily purchase products from YouReady Store right
              from Bandung City...
            </p>
            <button
              onClick={handleProduct}
              className="bg-transparent cursor-pointer text-black rounded-md w-[160px] h-[30px] border border-gray-500 mt-3 text-sm"
            >
              View All Products
            </button>
          </div>
        </div>

        <div className="h-auto justify-center flex w-full mt-6 ml-4">
          <div className="w-full max-w-[600px] m-auto">
            <div className="w-full mt-5">
              <h2 className="font-bold text-xl md:text-2xl">Business Hours</h2>
              <div className="flex items-center gap-2 pt-2">
                <FaRegClock className="text-xl" />
                <span className="text-gray-500 text-sm sm:text-base">
                  10 AM - 5 PM
                </span>
              </div>
            </div>

            <div className="w-full mt-6 cursor-pointer">
              <h2 className="font-bold text-xl md:text-2xl">Social Media</h2>
              <div className="flex flex-col sm:flex-row gap-5 mt-3">
                <div className="flex items-center gap-2">
                  <FaInstagram className="text-xl" />
                  <h2 className="text-gray-500 text-sm sm:text-base">
                    Patel_nirav_999
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <IoMailUnreadOutline className="text-xl" />
                  <h2 className="text-gray-500 text-sm sm:text-base">
                    nirav@gmail.com
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  <h2 className="text-gray-500 text-sm sm:text-base">
                    +91 9876543210
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-auto">
        <img
          className="w-full h-full object-cover"
          src={images.BackgroundStore}
          alt="BackgroundStore"
        />
      </div>
    </div>
  );
};

export default StoreDescription;

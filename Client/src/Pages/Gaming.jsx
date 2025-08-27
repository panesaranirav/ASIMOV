import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gamingImages } from "../assets/Assets";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import KeybordTemplet from "../Data/KeybordTemplet.json"
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Gaming = () => {
  
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/category/keyboard'); 
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
<>
    <div className="relative w-11/12 max-w-6xl mx-auto py-10 border-b-[1px] border-gray-300">
      <Slider {...settings}>
        {gamingImages.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full flex justify-center">
              <div className="w-60 h-64 rounded-xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-full object-cover px-4"
                />
              </div>
            </div>
            <p className="mt-2 text-center text-white font-semibold">
              {img.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>

    <div className="w-full h-aut">
  <div className="w-[95%] h-auto m-auto flex justify-around py-4  gap-8 flex-wrap">
    {KeybordTemplet.map((details, index) => (
      <div onClick={handleRedirect} key={index} className="h-[330px] w-[280px] flex flex-col items-start border-[1px] border-gray-300 rounded-b-md cursor-pointer">
        <img src={details.image} alt={details.name} className="h-54 w-[280px] rounded-b-md border-b-2 border-gray-300" />
        <p className="text-black mx-2 text-start">{details.name}</p>
      <div className="flex gap-4 mx-2 justify-between mt-2 ">
         <p className="text-gray-500">{details.brand}</p>
        <p className="flex text-gray-400 items-center gap-2"><IoStarSharp className="text-yellow-500" />{details.rating}</p>
         <p className="text-gray-400 font-semibold mx-2 m-auto">{details.price}</p>
      </div>
      </div>
    ))}
  </div>
</div>
</>
  );
};

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 text-gray-500 p-3 rounded-full transition 
               right-2 sm:right-4 md:right-8 lg:-right-12"
    style={{ border: "none" }}
  >
    <FaArrowRight size={18} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 text-gray-500 p-3 rounded-full transition 
               -left-3 sm:left-4 md:left-8 lg:-left-12 z-10"
    style={{ border: "none" }}
  >
    <FaArrowLeft size={18} />
  </button>
);

export default Gaming;

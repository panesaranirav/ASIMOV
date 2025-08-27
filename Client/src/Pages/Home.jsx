import React from "react";
import images from "../assets/Assets";
import { useNavigate } from "react-router";

const Home = () => {

   const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/Shop")
    }
    const handleOrder = () =>{
      navigate("/Check-Order")
    }
    const handleCustomerServic = () =>{
      navigate("/customer-service")
    }
  return (
    <>
      <div
        className="relative h-[400px] sm:h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${images.banner})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h3
            className="text-[#ffffff9c] font-[Pacifico] text-4xl md:text-5xl mb-1"
            style={{ alignSelf: "flex-start", marginLeft: "12%" }}
          >
            CHOOSE
          </h3>
          <h1 className="text-[#ffffff9c] text-[5rem] md:text-[10rem] font-extrabold leading-none text-center tracking-tight">
            YOUR STYLE.
          </h1>
          <button onClick={handleClick} className=" text-[#ffffff9c] font-semibold transition-all mt-2 cursor-pointer underline">
            Shop Now &raquo;
          </button>
        </div>
      </div>

      <div>
        <div
          className="relative h-[400px] sm:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images.banner2})` }}
        >
          <div className="relative min-h-full px-4 py-4">
            <h1 className="text-[#ffffff9c] text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-bold leading-tight absolute bottom-10 left-4 sm:left-10">
              SIMPLE
              <br />
              TO ORDER
            </h1>

            <div className="absolute bottom-40 left-[52%] transform -translate-x-1/2">
              <button onClick={handleOrder} className="text-[#ffffff9c] font-semibold px-6 py-3 cursor-pointer transition-all duration-300 underline">
                Check your orders &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className="relative h-[400px] sm:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images.banner3})` }}
        >
          <div className="relative min-h-full px-4 py-4">
            <h1 className="text-[#ffffff9c] text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-bold leading-tight absolute bottom-10 right-4 sm:right-10 text-right">
              CUSTOMER
              <br />
              SERVICE
            </h1>
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
              <button onClick={handleCustomerServic} className="text-[#ffffff9c] font-semibold px-6 py-3 cursor-pointer transition-all duration-300 underline">
                Contact us &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import images from "../assets/Assets"
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  
    const handleredirect = () =>{
        navigate('/')
    }
  return (
    <>
      <div className="bg-white-800 text-black p-4 flex justify-between items-center">
        <button className="text-3xl cursor-pointer" onClick={() => setMenuOpen(true)}>
          ☰
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-[330px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="p-4 flex justify-between items-center bg-white-800 text-white">
          <button className="text-2xl cursor-pointer " onClick={() => setMenuOpen(false)}>
            <IoClose className="text-black font-normal text-4xl"  />
          </button>
        </div>

        <div className="flex flex-col space-y-8 p-10 text-black">
          <Link to="/home"  onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/fashion" onClick={() => setMenuOpen(false)}>Fashion</Link>
          <Link to="/gaming" onClick={() => setMenuOpen(false)}>Gaming</Link>
          <Link to="/customer-service" onClick={() => setMenuOpen(false)}>Customer Services</Link>
          <Link to="/Store-Description" onClick={() => setMenuOpen(false)}>Store Description</Link>
          <Link to="/Check-Order" onClick={() => setMenuOpen(false)}>Check Order</Link>
        </div>
      </div>
     <div>
     <img
  className="cursor-pointer mx-auto items-center w-40 sm:w-56 md:w-56 lg:w-45"
  src={images.logo}
  alt="Logo"
  onClick={handleredirect}
/>
     </div>
    </>
  );
};

export default Navbar;

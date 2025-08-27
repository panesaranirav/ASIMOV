import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import assets from "../assets/Assets";
import { slugify } from "../utils/slugify";

const Shop = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catError, setCatError] = useState(null);

  const [popularItems, setPopularItems] = useState([]);
  const [popLoading, setPopLoading] = useState(true);
  const [popError, setPopError] = useState(null);

  const handleCategoryClick = (category) => {
    navigate(`/category/${slugify(category)}`);
  };

  const handlePopularClick = (name) => {
    navigate(`/category/${slugify(name)}`);
  };

  const handleOrder = () => {
    navigate("/Check-Order");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/products`
        );
        setCategories(res.data);
      } catch (err) {
        console.error("❌ Category fetch failed:", err);
        setCatError("Failed to load categories.");
      } finally {
        setCatLoading(false);
      }
    };

    const fetchPopularItems = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/popular`
        );
        setPopularItems(res.data);
      } catch (err) {
        console.error("❌ Popular items fetch failed:", err);
        setPopError("Failed to load popular items.");
      } finally {
        setPopLoading(false);
      }
    };

    fetchCategories();
    fetchPopularItems();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch mx-[5%] w-[90%] h-[420px] md:h-[400px] lg:h-[300px] bg-black rounded-4xl overflow-hidden">
          <div className="text-white w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 py-4 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Let's Shop at Asimov!
            </h1>
            <p className="text-base md:text-lg lg:text-[20px] py-2">
              Check out products from various categories
            </p>
            <button
              onClick={handleOrder}
              className="border border-white rounded-lg p-2 w-[120px] font-semibold hover:bg-white hover:text-black cursor-pointer transition"
            >
              Check Now
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center gap-4 px-4 py-6 relative">
            <img src={assets.Cat} alt="Cat" className="z-10" />
            <img src={assets.Bag} alt="Bag" className="hidden lg:block z-0" />
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div>
        <h1 className="text-4xl mx-20 font-semibold my-5 text-center items-center">
          Category
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
          justify-items-center bg-[#55555521] border-2 border-[#bbb7b749] backdrop-blur-md 
          m-w-[1200px] h-auto p-4 mx-[5%] gap-2 rounded-4xl"
        >
          {catLoading ? (
            <p className="text-center col-span-full py-10 text-lg font-medium">
              🔄 Loading...
            </p>
          ) : catError ? (
            <p className="text-center text-red-600 font-semibold col-span-full">
              {catError}
            </p>
          ) : categories.length === 0 ? (
            <p className="text-center text-gray-600 font-medium col-span-full">
              No categories found.
            </p>
          ) : (
            categories.map((product, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(product.name)}
                className="bg-white/70 border-[1px] border-gray-200 
                   w-[200px] h-[250px] 
                   rounded-3xl cursor-pointer flex flex-col items-center justify-center 
                   hover:scale-105 transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[160px] h-[150px] object-contain mb-2"
                />
                <h2 className="text-center font-semibold capitalize text-sm">
                  {product.name}
                </h2>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Popular Searches */}
      <div className="px-4 my-4">
        <h1 className="text-3xl sm:text-4xl font-semibold my-8 ml-0 sm:ml-14 text-center sm:text-left">
          Popular Searches
        </h1>
        <div className="bg-[#55555521] w-[92%] m-auto rounded-3xl flex flex-wrap justify-center gap-6 sm:gap-8 py-6">
          {popLoading ? (
            <p className="text-center text-lg font-medium">🔄 Loading...</p>
          ) : popError ? (
            <p className="text-center text-red-600 font-semibold">{popError}</p>
          ) : popularItems.length === 0 ? (
            <p className="text-center text-gray-600 font-medium">
              No popular items found.
            </p>
          ) : (
            popularItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handlePopularClick(item.alt)}
                className="bg-white/70 h-[260px] w-[80%] 
               sm:h-[200px] sm:w-[150px] 
               rounded-3xl cursor-pointer flex flex-col items-center justify-center p-2 
               hover:scale-105 transition"
              >
                <img
                  className="w-[70%] max-h-[120px] object-contain sm:h-[250px] sm:w-[200px]"
                  src={item.src}
                  alt={item.alt}
                />
                <h2 className="text-center mt-4 font-semibold text-lg sm:text-sm md:text-base">
                  {item.alt}
                </h2>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;

import productData from "../data/productPage.json";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FashionPage = () => {
  const [products] = useState(productData);
    const navigate = useNavigate();

    const handleCardClick = (product) => {
    navigate(`/product/${product.category.toLowerCase()}/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-10 ">
      <h1 className="text-4xl font-bold text-center text-black mb-12 font-serif">
        Explore Our Fashion Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#ffffff6b] rounded-2xl overflow-hidden shadow-xl duration-300 border-2 border-gray-300 cursor-pointer"
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[70%] h-[300px] m-auto "
            />

            <div className="p-6 text-black bg-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest">{product.category}</p>
              <h2 className="text-2xl font-semibold mt-2 mb-1">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>

              <div className="flex items-center text-gray-400 text-sm">
                <FaStar className="text-yellow-400 text-[14px]" /><span className="ml-1 text-[12px]">{product.review}</span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="text-xl font-bold text-black">₹{product.discountPrice}</div>
                <div className="line-through text-gray-400 text-sm">₹{product.price}</div>
              </div>

              {product.size.length > 0 && (
                <div className="mt-3 text-sm text-gray-400">
                  Sizes: {product.size.join(", ")}
                </div>
              )}

              <button className="mt-5 w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl ">
                See Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionPage;

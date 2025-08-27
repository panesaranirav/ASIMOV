import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
import { useCart } from "../context/CartContext";


const ProductDetails = () => {
  const { category, id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
   const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
  if (!category || !id) {
    console.error("Missing params:", { category, id });
    setLoading(false);
    return;
  }
  
  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products/${category}/${id}`
      );
      setProduct(res.data);
    } catch (err) {
      console.error("Failed to load product details:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [category, id]);

  if (loading)
    return <p className="text-center py-10 text-lg font-medium">🔄 Loading...</p>;
  if (!product)
    return (
      <p className="text-center text-red-500 text-lg font-semibold">
        Product not found
      </p>
    );

      const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} to cart!`);
};

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white/80 rounded-2xl shadow-lg mt-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex justify-center items-center bg-gray-50 rounded-lg p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 sm:w-80 h-72 sm:h-80 object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {product.name}
          </h1>
          {product.brand && (
            <p className="text-gray-600 mt-1 text-base">
              Brand: <span className="font-medium">{product.brand}</span>
            </p>
          )}

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <p className="text-2xl font-semibold text-green-600">
              ₹{product.discountPrice}
            </p>
            {product.price && (
              <p className="text-lg text-gray-500 line-through">
                ₹{product.price}
              </p>
            )}
          </div>

          <p className="mt-2 text-gray-700 leading-relaxed flex gap-2 ">
            <p className="text-[20px]">Review: </p>
           <p className="text-yellow-300 text-[20px]">★</p>
           <h3 className="text-[20px]">{product.review}</h3>
          </p>

          {/* Sizes */}
           {product.size && product.size.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-gray-800">Available Sizes:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.size.map((s, idx) => (
                  <span
                    key={idx}
                    onClick={() => setSelectedSize(s)}
                    className={`px-4 py-1 border rounded-full cursor-pointer text-sm font-medium transition-colors ${
                      selectedSize === s
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}


          {/* Add to Cart */}
          <button 
            onClick={handleAddToCart}
            className="mt-8 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition w-full sm:w-auto cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

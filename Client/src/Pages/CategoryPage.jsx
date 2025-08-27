import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikes } from "../Context/LikesContext"; 

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { likedItems, toggleLike } = useLikes(); 

  useEffect(() => {
    let apiCategory = category.toLowerCase();
    if (apiCategory === "tshirt") apiCategory = "t-shirt";

    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/category/${apiCategory}`
        );
        setProducts(res.data);
      } catch (err) {
        console.error("❌ Failed to load category products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <div className="flex justify-center items-center py-10">
  <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
</div>
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="px-2 mx-2 mb-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative bg-white/80 border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
           
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(product);
              }}
              className="absolute top-3 right-3 text-xl text-red-500 hover:scale-110 transition cursor-pointer"
            >
              {likedItems.some((item) => item._id === product._id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}
            </button>

            <div
              onClick={() => {
                if (!product.category || !product._id) {
                  console.error("Invalid product data", product);
                  return;
                }
                navigate(`/category/${product.category}/${product._id}`);
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain bg-gray-100"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500 text-sm">Brand: {product.brand}</p>

                <div className="flex items-center gap-3 mt-2">
                  <p className="text-lg font-bold text-green-600">
                    ₹{product.discountPrice}
                  </p>
                  {product.price && (
                    <p className="text-sm text-gray-500 line-through">
                      ₹{product.price}
                    </p>
                  )}
                </div>

                {product.review && (
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < product.review
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">
                      {product.review} / 5
                    </span>
                  </div>
                )}

                {product.description && (
                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {product.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

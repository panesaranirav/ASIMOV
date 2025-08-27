import React from "react";
import { useLikes } from "../Context/LikesContext";
import { IoIosHeartDislike } from "react-icons/io";

const Like = () => {
  const { likedItems, toggleLike } = useLikes();

  const likedArray = Object.values(likedItems);

  return (
   <div className="p-6 w-full">
  <h1 className="text-3xl font-bold mb-6 text-center font-serif capitalize text-gray-800">
    Liked Products
  </h1>

  {likedArray.length === 0 ? (
    <p className="text-red-400 text-center text-lg">No liked products.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {likedArray.map((item) => (
        <div
          key={item.id}
          className="bg-white/70 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-4 flex flex-col items-center"
        >
          <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-44 object-contain"
            />
          </div>
          <div className="pt-4 flex flex-col items-center text-center">
            <h2 className="text-lg font-semibold text-gray-700 truncate w-full">
              {item.name}
            </h2>
            <button
              onClick={() => toggleLike(item)}
              className="mt-3 px-4 py-1 rounded-full bg-red-100 text-red-500 font-medium hover:bg-red-200 transition"
            >
             <IoIosHeartDislike />
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default Like;

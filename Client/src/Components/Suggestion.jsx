// import React, { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import { TiStarFullOutline } from "react-icons/ti";
// import TShartData from "../Data/TShartSuggest.json";
// import PaintData from "../Data/PaintSuggest.json";

// const Suggestion = ({ category, onSelectProduct }) => {
//   const suggestionData =
//     category === "paint" ? PaintData : category === "tshirt" ? TShartData : [];

//   const [likedItems, setLikedItems] = useState({});

//   const handleLikeToggle = (id) => {
//     setLikedItems((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <>
//       <div className="flex justify-center my-4">
//         <h1 className="font-bold text-3xl font-serif">You May Also Like</h1>
//       </div>
//       <div className="flex flex-wrap gap-2 justify-center cursor-pointer">
//         {suggestionData.map((suggest) => (
//           <div className="px-6" key={suggest.id}>
//             <div
//               className="border-[1px] border-gray-200 h-92 w-62 mb-4 rounded-[5px]"
//               onClick={() => onSelectProduct(suggest)}
//             >
//               <div className="h-62">
//                 <img className="w-full h-[90%] pt-4 object-contain " src={suggest.image} alt={suggest.brand} />
//               </div>
//               <div className="h-auto">
//                 <div className="flex justify-between px-2 ">
//                   <div>
//                     <p className="text-gray-600 font-medium mt-2">
//                       {suggest.brand}
//                     </p>
//                   </div>
//                   <div
//                     className="text-[20px] items-center mt-2"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleLikeToggle(suggest.id);
//                     }}
//                   >
//                     <FaHeart
//                       className={
//                         likedItems[suggest.id]
//                           ? "text-red-500"
//                           : "text-gray-400"
//                       }
//                     />
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center p-2">
//                   <div>
//                     <h1 className="font-semibold">{suggest.name}</h1>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <p className="font-semibold">{suggest.review}</p>
//                     <TiStarFullOutline className="text-yellow-500 text-[20px]" />
//                   </div>
//                 </div>
//                 <div className="flex px-2 justify-between">
//                   <h2 className="text-gray-500 line-through">
//                     RS: {suggest.price}
//                   </h2>
//                   <h2 className="font-semibold">RS: {suggest.discountPrice}</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Suggestion;

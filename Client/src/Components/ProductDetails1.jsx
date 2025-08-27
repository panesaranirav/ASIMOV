// import React, { useState } from "react";
// import { FaHeart, FaStar } from "react-icons/fa";
// import { useParams, useLocation } from "react-router-dom";
// import Suggestion from "./Suggestion";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { state: initialProduct } = useLocation();
//   const [product, setProduct] = useState(initialProduct);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [liked, setLiked] = useState(false);

//   if (!product) return <div className="p-8">No product selected.</div>;

//   return (
//     <>
     
//       <div className="md:flex w-full sm:block">
//         <div className="bg-gray-200 w-full h-screen flex items-center justify-center">
//           <div className="bg-[#ffffff94] h-110 w-100 flex items-center justify-center">
//             <img
//               className="h-95 w-100 drop-shadow-xl filter"
//               src={product.image}
//               alt={product.name}
//             />
//           </div>
//         </div>

//         <div className="w-full h-screen border-y border-gray-200">
//           <div className="h-[480px] mx-6 mt-14">
//             <p className="h-10 pt-5 text-gray-600">{product.ref}</p>

//             <div className="h-20 pt-10 flex items-center gap-16">
//               <h1 className="text-2xl font-bold">{product.name}</h1>
//               <div
//                 onClick={() => setLiked(!liked)}
//                 className="text-white text-2xl cursor-pointer"
//               >
//                 <FaHeart className={liked ? "text-red-500" : "text-gray-400"} />
//               </div>
//             </div>

//             <div className="flex items-center gap-4 mt-4">
//               <h2 className="font-bold">{product.brand}</h2>
//               <FaStar className="text-yellow-400" />
//               <span>{product.review}</span>
//             </div>

//             <div className="flex gap-5 h-20 pt-12">
//               <h2>Rs: {product.discountPrice}</h2>
//               <h2 className="text-gray-500 line-through">Rs: {product.price}</h2>
//             </div>

//             <div className="flex gap-5 h-20 pt-10">
//               {product.size.map((size, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setSelectedSize(size)}
//                   className={`transition-all duration-200 ease-in-out 
//                     h-[40px] w-[40px] rounded-full border 
//                     flex items-center justify-center cursor-pointer text-sm font-medium
//                     ${
//                       selectedSize === size
//                         ? "bg-black text-white scale-110 border-black"
//                         : "bg-white text-black border-gray-400 hover:scale-105"
//                     }`}
//                 >
//                   {size}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 text-center text-[15px] text-gray-600 underline">
//               <h2>Choose According to Your Size.</h2>
//             </div>

//             <div className="h-[30%] flex justify-center items-end mt-4">
//               <button className="border border-gray-500 h-[40px] w-[300px] font-bold hover:bg-black hover:text-white">
//                 ADD TO CART
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10">
//         <Suggestion category={product.category} onSelectProduct={(newProduct) => setProduct(newProduct)} />
//         <hr className="text-gray-200 mt-10" />
//       </div>
//     </>
//   );
// };

// export default ProductDetails;

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  FaTshirt,
  FaShoePrints,
  FaHatCowboy,
  FaShoppingBag,
  FaGlasses
} from "react-icons/fa";
import { MdOutlineBackspace } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();

  const icons = [
    { Icon: FaTshirt, color: "text-pink-400" },
    { Icon: FaShoePrints, color: "text-blue-400" },
    { Icon: FaHatCowboy, color: "text-yellow-400" },
    { Icon: FaShoppingBag, color: "text-green-400" },
    { Icon: FaGlasses, color: "text-indigo-400" },
    { Icon: FaTshirt, color: "text-red-400" },
    { Icon: FaShoePrints, color: "text-purple-400" },
    { Icon: FaHatCowboy, color: "text-orange-400" },
    { Icon: FaShoppingBag, color: "text-teal-400" },
    { Icon: FaGlasses, color: "text-rose-400" }
  ];

  const iconPositions = useMemo(() => {
    return icons.map(() => ({
      top: Math.floor(Math.random() * 85),  
      left: Math.floor(Math.random() * 85), 
    }));
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center bg-white px-4 py-10 text-center overflow-hidden">
      
      
      <div className="absolute inset-0 overflow-hidden z-0">
        {icons.map(({ Icon, color }, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6 + (index % 5), repeat: Infinity }}
            className={`absolute text-6xl opacity-20 ${color}`}
            style={{
              top: `${iconPositions[index].top}%`,
              left: `${iconPositions[index].left}%`
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>


      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="text-[120px] md:text-[180px] font-black text-gray-800 drop-shadow-lg"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-md"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Lost in the Fashion Aisle?
          </h2>
          <p className="text-gray-600 mb-6">
            Oops! The page you’re looking for doesn’t exist or was moved. Maybe it’s gone out of style.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-pink-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-pink-700 transition"
            >
              <MdOutlineBackspace className="text-xl" />
              Back to Home
            </button>
          </motion.div>
        </motion.div>

        
      </div>
    </div>
  );
};

export default NotFound;

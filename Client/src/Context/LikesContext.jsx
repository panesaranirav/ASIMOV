import React, { createContext, useContext, useState, useEffect } from "react";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedLikes = localStorage.getItem("likedItems");
    if (storedLikes) {
      setLikedItems(JSON.parse(storedLikes));
    }
  }, []);

  // Save to localStorage when likedItems changes
  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  // Toggle like/unlike
  const toggleLike = (product) => {
    setLikedItems((prev) => {
      const exists = prev.some((item) => item._id === product._id);
      if (exists) {
        return prev.filter((item) => item._id !== product._id); // remove
      }
      return [...prev, product]; // add
    });
  };

  return (
    <LikesContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

// Custom hook to use likes
export const useLikes = () => useContext(LikesContext);

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import popularItemsRoutes from "./routes/popularItems.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const PORT = 5000;
dotenv.config();

// Enable CORS and JSON
app.use(cors());
app.use(express.json());
app.use("/api/popular", popularItemsRoutes);
app.use("/api/orders" ,orderRoutes)

// Product API route
app.use("/api/products", productRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

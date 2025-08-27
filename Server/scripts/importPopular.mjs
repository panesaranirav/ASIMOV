import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs/promises";
import PopularItem from "../models/Popular.js";

dotenv.config();

const importPopularItems = async () => {
  try {
    const data = await fs.readFile("./scripts/popularItems.json", "utf-8");
    const items = JSON.parse(data);

    await mongoose.connect(process.env.MONGO_URI);
    await PopularItem.insertMany(items);

    console.log("✅ Popular items imported successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Error importing popular items:", err.message);
    process.exit(1);
  }
};

importPopularItems();

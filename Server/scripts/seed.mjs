import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import productSchema from "../models/Product.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readJSON = async (filename) => {
  const filePath = path.join(__dirname, filename); 
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data);
};

const MONGO_URI = "mongodb+srv://niravpanesaranirav:nirav777@cluster0.poi2r.mongodb.net/ASIMVO"; // ⛔️ Replace with your actual URI
await mongoose.connect(MONGO_URI);
console.log("✅ Connected to MongoDB");

const datasets = [
  { name: "Dress", file: "Dress.json" },
  { name: "FPaint", file: "FPaint.json" },
  { name: "Haircare", file: "Haircare.json" },
  { name: "KeyBord", file: "KeyBord.json" },
  { name: "KeybordTemplet", file: "KeybordTemplet.json" },
  { name: "Laptop", file: "Laptop.json" },
  { name: "MPaint", file: "MPaint.json" },
  { name: "Perfume", file: "Perfume.json" },
  { name: "Phone", file: "Phone.json" },
  { name: "PopulerWatch", file: "PopulerWatch.json" },
  { name: "ProductPage", file: "ProductPage.json" },
  { name: "Products", file: "Products.json" },
  { name: "Shoes", file: "Shoes.json" },
  { name: "Sofa", file: "Sofa.json" },
  { name: "Sunglassic", file: "Sunglassic.json" },
  { name: "TShartSuggest", file: "TShartSuggest.json" },

];

for (const { name, file } of datasets) {
  try {
    const Model = mongoose.model(name, productSchema);
    const data = await readJSON(file);
    await Model.deleteMany({});
    await Model.insertMany(data);
    console.log(`✅ Inserted ${data.length} documents into '${name}' collection`);
  } catch (err) {
    console.error(`❌ Failed to insert for ${file}:`, err.message);
  }
}

await mongoose.disconnect();
console.log("🔌 Disconnected from MongoDB");

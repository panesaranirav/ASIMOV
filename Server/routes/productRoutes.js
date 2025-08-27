// routes/productRoutes.js
import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    // Allowed categories ka list
    const allowedCategories = [
      "tshirt",
      "pant",
      "womens-pant",
      "smartphone", 
      "laptop",
      "haircare-kit", 
      "Shoes",
      "dress", 
      "perfume",
      "sofa"     ];

    // MongoDB se allowed categories ka unique list nikalo
    const categories = await Product.distinct("category", {
      category: { $in: allowedCategories }
    });

    // Har category ka ek sample product lo
    const categoryData = await Promise.all(
      categories.map(async (cat) => {
        const product = await Product.findOne({ category: cat });
        return {
          name: cat,
          image: product?.image || ""
        };
      })
    );

    res.json(categoryData);
  } catch (error) {
    console.error("❌ Category fetch failed:", error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});


router.get("/category/:category", async (req, res) => {
  try {
    const categoryParam = req.params.category;

    // Make dash-space-insensitive regex
    const searchPattern = categoryParam.replace(/-/g, "[- ]?");
    const regex = new RegExp(`^${searchPattern}$`, "i");

    const products = await Product.find({ category: { $regex: regex } });

    res.json(products);
  } catch (err) {
    console.error("Category fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/:category/:id", async (req, res) => {
  try {
    const { category, id } = req.params;

    const product = await Product.findOne({
      _id: id,
      category: category
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

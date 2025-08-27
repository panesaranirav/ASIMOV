import express from "express";
import PopularItem from "../models/Popular.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await PopularItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch popular items", details: err.message });
  }
});

export default router;

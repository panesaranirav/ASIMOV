import mongoose from "mongoose";

const popularItemSchema = new mongoose.Schema({
  src: String,
  alt: String,
});

const PopularItem = mongoose.model("PopularItem", popularItemSchema, "popularitems");

export default PopularItem;

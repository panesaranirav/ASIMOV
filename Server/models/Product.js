import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  category: String,
  image: String,
  price: String,
  discountPrice: String,
  review: Number,
  size: [String],
});

const Product = mongoose.model("Product", productSchema);
export default Product;

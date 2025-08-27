import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    note: { type: String },
    shippingOption: { type: String },
    paymentMethod: { type: String },
    paymentDetails: {
      cardNumber: { type: String },
      expiry: { type: String },
      cvv: { type: String },
      upiId: { type: String },
    },
    items: [
      {
        id: String,
        name: String,
        image: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalAmount: { type: Number },
    date: { type: String },
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

// routes/orderRoute.js
import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/place-order", async (req, res) => {
  try {
    const {
      name,
      address,
      note,
      shippingOption,
      paymentMethod,
      paymentDetails,
      items,
      totalAmount,
      date,
    } = req.body;

    const newOrder = new Order({
      name,
      address,
      note,
      shippingOption,
      paymentMethod,
      paymentDetails,
      items,
      totalAmount,
      date,
      status: "Pending",
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Order failed", error: err.message });
  }
});

// ✅ Get All Orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(orders);
  } catch (error) {
    console.error("Order Fetch Error:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// ✅ Cancel Order
router.patch("/:id/cancel", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelled" },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order cancelled", order });
  } catch (error) {
    console.error("Cancel Order Error:", error);
    res.status(500).json({ message: "Failed to cancel order" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete order" });
  }
});

export default router;

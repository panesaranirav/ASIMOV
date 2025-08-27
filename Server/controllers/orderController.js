import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const { userId, items, totalAmount } = req.body;

  const order = await Order.create({ userId, items, totalAmount });
  res.json({ success: true, order });
};

export const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  const orders = await Order.find({ userId });
  res.json(orders);
};

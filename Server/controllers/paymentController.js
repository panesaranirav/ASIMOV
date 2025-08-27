export const payNow = (req, res) => {
  const { amount } = req.body;
  res.json({
    success: true,
    message: "Payment simulated successfully",
    amount,
  });
};

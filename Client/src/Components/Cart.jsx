import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import OrderSuccessModal from "./OrderSuccess";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [shippingOption, setShippingOption] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  
  const [showSuccess, setShowSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    if (!name || !address || !paymentMethod) {
      toast.error("Please fill in all required fields before placing your order.");
      return;
    }

    if (paymentMethod === "card" && (!cardNumber || !expiry || !cvv)) {
      alert("Please fill in all card details.");
      return;
    }
    if (paymentMethod === "upi" && !upiId) {
      alert("Please enter your UPI ID.");
      return;
    }

    const order = {
      name,
      address,
      note,
      shippingOption,
      paymentMethod,
      paymentDetails: {
        cardNumber: paymentMethod === "card" ? cardNumber : "",
        expiry: paymentMethod === "card" ? expiry : "",
        cvv: paymentMethod === "card" ? cvv : "",
        upiId: paymentMethod === "upi" ? upiId : "",
      },
      items: cart,
      totalAmount: total,
      date: new Date().toISOString(),
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/orders/place-order",
        order
      );

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        localStorage.removeItem("cart");
        navigate("/shop");
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Order failed");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          <div className="bg-white p-4 rounded-lg shadow space-y-3">
            <h3 className="font-semibold text-lg">Checkout</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Address"
              className="border p-2 rounded w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <textarea
              placeholder="Order Note (Optional)"
              className="border p-2 rounded w-full"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <select
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="standard">Standard Shipping</option>
              <option value="express">Express Shipping</option>
            </select>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="">Select Payment Method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>

            {paymentMethod === "card" && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border p-2 rounded w-full"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  className="border p-2 rounded w-full"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="border p-2 rounded w-full"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            )}

            {paymentMethod === "upi" && (
              <input
                type="text"
                placeholder="UPI ID"
                className="border p-2 rounded w-full"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            )}

            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      {/* ✅ Success Modal */}
      {showSuccess && (
        <OrderSuccessModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
          orderId="12345"
          orderNumber="67890"
        />
      )}
    </div>
  );
};

export default Cart;

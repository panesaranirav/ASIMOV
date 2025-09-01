import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import OrderSuccessModal from "../Components/OrderSuccess";


const Cart = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [shippingOption, setShippingOption] = useState("Standard Delivery");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, item) => total + item.discountPrice * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 45 : 0;
  const total = subtotal + shipping;

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
      await axios.post("http://localhost:5000/api/orders/place-order", order);

      setShowSuccessModal(true); 

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
    <div className="min-h-screen bg-white text-black flex flex-col items-center">
      <div className="w-[90%] max-w-6xl mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left - Address & Payment */}
        <div className="space-y-4">
          <h2 className="text-gray-400 text-sm font-semibold">PAYMENT</h2>

          <input
            type="text"
            placeholder="Enter full name"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter full address"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="Note or directions"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <select
            className="w-full border-b-2 border-gray-300 py-2 bg-transparent focus:outline-none"
            value={shippingOption}
            onChange={(e) => setShippingOption(e.target.value)}
          >
            <option value="Standard Delivery">Standard Delivery</option>
            <option value="Express Delivery">Express Delivery</option>
          </select>

          <select
            className="w-full border-b-2 border-gray-300 py-2 bg-transparent focus:outline-none"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
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
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === "upi" && (
            <input
              type="text"
              placeholder="Enter your UPI ID"
              className="w-full border-b-2 border-gray-300 py-2 focus:outline-none"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          )}

          <button
            className="w-full border mt-6 py-2 text-black font-semibold hover:bg-gray-100 cursor-pointer"
            onClick={handlePlaceOrder}
          >
            {paymentMethod === "cod" ? "Place Order" : "Proceed to Pay"}
          </button>
        </div>

        {/* Right - Cart Items */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Cart ({cart.length})</h3>

          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() =>
                      updateQuantity(item._id, Math.max(1, item.quantity - 1))
                    }
                  >
                    <FaMinus className="cursor-pointer" />
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item._id, item.quantity + 1)
                    }
                  >
                    <FaPlus className="cursor-pointer" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  ₹{(item.discountPrice * item.quantity).toLocaleString()}
                </p>
                <button
                  className="text-red-500 mt-2"
                  onClick={() => removeFromCart(item._id)}
                >
                  <FaTrash className="cursor-pointer" />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-sm space-y-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping.toLocaleString()}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <OrderSuccessModal
  isOpen={showSuccessModal}
  onClose={() => setShowSuccessModal(false)}
  orderId="12345"
  orderNumber="7890"
/>

    </div>
  );
};

export default Cart;

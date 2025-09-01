import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = ({ isOpen, onClose, orderId, orderNumber }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md text-center shadow-lg">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-xl font-bold">Payment Successfull</h2>
        <p className="text-lg text-gray-600 font-semibold mt-2">
          #{orderId}
        </p>
        <p className="text-gray-500 text-sm mb-4">
          
No. Order {orderNumber}
        </p>
        <p className="text-gray-700">
        Thank you for shopping at asimov.com. <br /> We look forward to your next order.
        </p>
        <button
          onClick={onClose}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Closed
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;

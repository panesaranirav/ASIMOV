import { useOrders } from "../Context/OrderContext";
import { useState, useEffect } from "react";
import { FaBoxOpen, FaTrashAlt } from "react-icons/fa";

const CheckOrder = () => {
  const { orders, cancelOrder, deleteOrder, fetchOrders } = useOrders();
  const [confirmCancel, setConfirmCancel] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  

  useEffect(() => {
    fetchOrders();
  }, []);

  if (!Array.isArray(orders)) {
    return (
      <div className="p-6 min-h-screen bg-gray-100 text-center text-red-500">
        <p>Error: Orders not loaded correctly.</p>
      </div>
    );
  }

  const activeOrders = orders.filter(order => order.status !== "Cancelled");

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
        <FaBoxOpen className="mr-4" /> My Orders
      </h1>

      {activeOrders.length === 0 ? (
        <p className="text-center text-gray-600">No active orders found.</p>
      ) : (
        <div className="space-y-4">
          {activeOrders.map(order => (
            <div key={order._id} className="bg-white shadow rounded-lg p-4 border border-gray-200">
              <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h2 className="font-bold text-lg">Order #{order._id}</h2>
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full
                    ${order.status === "Pending" ? "bg-yellow-100 text-yellow-600" : ""}
                    ${order.status === "Completed" ? "bg-green-100 text-green-600" : ""}
                    ${order.status === "Cancelled" ? "bg-red-100 text-red-600" : ""}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="text-gray-700 text-sm mb-3">
                <p><strong>Name:</strong> {order.name || "N/A"}</p>
                <p><strong>Address:</strong> {order.address || "N/A"}</p>
                <p><strong>Total:</strong> ₹{order.totalAmount || 0}</p>
                <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(order.items?.length ? order.items : order.cartItems)?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-100 p-2 rounded">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity || 1}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                {order.status === "Pending" && (
                  <button
                    onClick={() => setConfirmCancel(order._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel Order
                  </button>
                )}
                <button
                  onClick={() => setConfirmDelete(order._id)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  <FaTrashAlt className="inline mr-1" />
                  Delete
                </button>
              </div>

              {confirmCancel === order._id && (
                <div className="fixed inset-0 bg-[#000000aa] flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg text-center w-[300px]">
                    <h3 className="font-bold text-lg mb-3">Cancel Order?</h3>
                    <p className="text-gray-600 mb-4">Are you sure you want to cancel this order?</p>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={async () => {
                          await cancelOrder(order._id);
                          await fetchOrders();
                          setConfirmCancel(null);
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Yes, Cancel
                      </button>
                      <button
                        onClick={() => setConfirmCancel(null)}
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirm Delete */}
              {confirmDelete === order._id && (
                <div className="fixed inset-0 bg-[#000000aa] flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg text-center w-[300px]">
                    <h3 className="font-bold text-lg mb-3">cencel Order?</h3>
                    <p className="text-gray-600 mb-4">This will permanently remove the order.</p>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={async () => {
                          await deleteOrder(order._id);
                          setConfirmDelete(null);
                        }}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Yes, Delete
                      </button>
                      <button
                        onClick={() => setConfirmDelete(null)}
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckOrder;

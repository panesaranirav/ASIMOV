import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
     const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders`);
      if (Array.isArray(res.data)) {
        setOrders(res.data);
      } else {
        console.error("Invalid orders response", res.data);
        setOrders([]);
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setOrders([]); 
    }
  };

  const cancelOrder = async (orderId) => {
    try {
     await axios.put(
      `${import.meta.env.VITE_API_URL}/api/orders/${orderId}/cancel`
    );
      fetchOrders();
    } catch (err) {
      console.error("Error cancelling order:", err);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/orders/${orderId}`
    );
      fetchOrders();
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  useEffect(() => {
    fetchOrders(); 
  }, []);

  return (
    <OrderContext.Provider value={{ orders, fetchOrders, cancelOrder, deleteOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);

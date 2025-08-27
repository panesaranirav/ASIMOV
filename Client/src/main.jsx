import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import { LikesProvider } from "./Context/LikesContext";
import { CartProvider } from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import { OrderProvider } from "./Context/OrderContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk publishable key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <LikesProvider>
        <CartProvider>
          <OrderProvider>
            <RouterProvider router={router} />
            <Toaster position="top-center" reverseOrder={false} />
          </OrderProvider>
        </CartProvider>
      </LikesProvider>
    </ClerkProvider>
  </StrictMode>
);

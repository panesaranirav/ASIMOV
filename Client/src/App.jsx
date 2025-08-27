import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignIn,
  SignUp,
  UserProfile,
} from "@clerk/clerk-react";
import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Fashion from "./Pages/Fashion";
import Gaming from "./Pages/Gaming";
import CustomerService from "./Pages/CustomerService";
import Login from "./Pages/Login";
import Shop from './Pages/Shop'
import CheckOrder from "./Pages/CheckOrder";
import StoreDescription from "./Pages/StoreDescription";
import Like from "./Pages/Like";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetails from "./Pages/ProductDetails";

// MyAccount nested
import MyAccount from "./Pages/MyAccount/MyAccount";
import Transactions from "./Pages/MyAccount/Transactions";
import Address from "./Pages/MyAccount/Address";
import Favorites from "./Pages/MyAccount/Favorites";
import BankCards from "./Pages/MyAccount/BankCards";

// Components
import Navbar from "./Components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Cart from "./Components/Cart";
import NotFound from "./Pages/NotFound";



function Layout({ children }) {
const nevigate = useNavigate()
  const handleClickLike = () =>{
    nevigate('/like')
  }
  const HandelCart =()=>{
    nevigate('/cart')
  }

  return (
    <>
    <ScrollToTop /> 
      <header className="flex justify-between items-center p-[5px]">
        <Navbar />
        <div className=" flex justify-around gap-2 items-center lg:gap-8">
          <MdShoppingBag onClick={HandelCart} className="items-center text-[28px] cursor-pointer" />
          <FaHeart onClick={handleClickLike} className="items-center text-red-600 text-[26px] cursor-pointer " />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
      {children}
      <Footer/>
    </>
  );
}

export const router = createBrowserRouter([
  { path: "/", Component: Login },
  {
    path: "/sign-in/*",
    Component: () => <SignIn routing="path" path="/sign-in" />,
  },
  {
    path: "/sign-up/*",
    Component: () => <SignUp routing="path" path="/sign-up" />,
  },
  {
  path: "/factor-one/*",
  Component: () => <SignIn routing="path" path="/sign-in" />,
},

  { path: "/sso-callback" },

  {
    path: "/home",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <Home />
        </Layout>
      </ProtectedRoute>
    ),
    errorElement: <div>Something went wrong </div>,
  },
  {
    path: "/cart/",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <Cart />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/category/:category/",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <CategoryPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  
  {
    path: "/category/:category/:id",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <ProductDetails />
        </Layout>
      </ProtectedRoute>
    ),
     errorElement: <div className="p-8 text-red-600">⚠️ Product not found.</div>,
  },
  {
    path: "/dashboard",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <Dashboard />
        </Layout>
      </ProtectedRoute>
    ),
  },
   {
    path: "/Check-Order",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <CheckOrder />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/Shop",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <Shop />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/fashion",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <Fashion />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/Suggestion-For-You",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <TShartSuggestion />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/gaming",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <Gaming />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/like",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <Like />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/Store-Description",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <StoreDescription />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/customer-service",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <CustomerService />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/my-account",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <MyAccount />
        </Layout>
      </ProtectedRoute>
    ),
    children: [
      { path: "transactions", Component: Transactions },
      { path: "address", Component: Address },
      { path: "favorites", Component: Favorites },
      { path: "bank-cards", Component: BankCards },
    ],
  },
   {
    path: "*",
    Component: () => (
      <ProtectedRoute>
        <Layout>
          <NotFound />
        </Layout>
      </ProtectedRoute>
    ),
  },
]);

export default null;

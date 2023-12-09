import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.js";

// Pages
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import OurStore from "./pages/OurStore.js";
import SingleProduct from "./pages/SingleProduct.js";
import Blog from "./pages/Blog.js";
import Cart from "./pages/Cart.js";
import Checkout from "./pages/Checkout.js";
import SingleBlog from "./pages/SingleBlog.js";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist.js";
import Login from "./pages/Login.js";
import ForgotPassword from "./pages/ForgotPassword.js";
import Signup from "./pages/Signup.js";
import ResetPassword from "./pages/ResetPassword.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import RefundPolicy from "./pages/RefundPolicy.js";
import ShippingPolicy from "./pages/ShippingPolicy.js";
import TermAndConditions from "./pages/TermAndConditions.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

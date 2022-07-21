import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound.jsx"
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Cart from "./pages/Cart.jsx"
import Footer from "./components/footer/Footer.jsx"
import ProductView from "./pages/ProductView.jsx"
import Profile from "./pages/customer-pages/Profile.jsx";
import Orders from "./pages/customer-pages/Orders.jsx";
import Messages from "./pages/customer-pages/Messages.jsx";
import WishList from "./pages/customer-pages/WishList.jsx";
import SellerRegister from "./pages/seller-pages/SellerRegister.jsx";


function App() {

    return (
        <div className="App">
            <div className="bg-base-100 w-full mx-auto">
                <Router>
                    <Routes>
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:categoryId/:productId/:productName" element={<ProductView />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-profile/:accessToken" element={<Profile />} />
                        {/* Customer pages */}
                        <Route path="/my-orders/:accessToken" element={<Orders />} />
                        <Route path="/my-messages/:accessToken" element={<Messages />} />
                        <Route path="/my-wishlist/:accessToken" element={<WishList />} />
                        {/* Seller pages */}
                        <Route path="/seller-register" element={<SellerRegister />} />
                        
                    </Routes>
                </Router>
                <Footer/>
            </div>
        </div>
    );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound.jsx"
import Home from "./pages/home/Home.jsx";
import Login from "./pages/auth/login/Login.jsx";
import Register from "./pages/auth/register/Register.jsx";
import Cart from "./pages/cart/Cart.jsx"
import Footer from "./components/footer/Footer.jsx"
import ProductView from "./pages/product-view/ProductView.jsx"
import Profile from "./pages/customer-pages/profile/Profile.jsx";
import Orders from "./pages/customer-pages/orders/Orders.jsx";
import OrderView from "./pages/customer-pages/orders/OrderView.jsx";
import Messages from "./pages/customer-pages/messages/Messages.jsx";
import WishList from "./pages/customer-pages/wishlist/WishList.jsx";
import SellerRegister from "./pages/seller-pages/SellerRegister.jsx";
import AdminDashBoard from "./pages/admin-pages/dash-board/DashBoard.jsx";


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
                        <Route path="/my-orders/:accessToken/:orderId" element={<OrderView />} />
                        <Route path="/my-messages/:accessToken" element={<Messages />} />
                        <Route path="/my-wishlist/:accessToken" element={<WishList />} />
                        {/* Seller pages */}
                        <Route path="/seller-register" element={<SellerRegister />} />
                        {/* Admin pages */}
                        <Route path="/admin/dashboard" element={<AdminDashBoard />} />
                    </Routes>
                </Router>
                <Footer/>
            </div>
        </div>
    );
}

export default App;

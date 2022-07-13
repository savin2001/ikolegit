import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound.jsx"
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Profile from "./pages/customer-pages/Profile.jsx";
import Cart from "./pages/Cart.jsx"
import Footer from "./components/footer/Footer.jsx"
import ProductView from "./pages/ProductView.jsx"


function App() {

    return (
        <div className="App">
            <div className="bg-base-100 w-full mx-auto">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:categoryId/:productId/:productName" element={<ProductView />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/my-profile/:accessToken" element={<Profile />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
                <Footer/>
            </div>
        </div>
    );
}

export default App;

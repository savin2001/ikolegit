import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import PageNotFound from "./pages/PageNotFound.jsx"

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="bg-base-100 w-full mx-auto">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;

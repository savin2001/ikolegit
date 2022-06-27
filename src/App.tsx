import { useState } from "react";
import PrimaryNavbar from "./components/navbars/PrimaryNavbar";
import Home from "./pages/Home"

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="bg-base-100 w-full mx-auto">
                <PrimaryNavbar />
                <Home/>
            </div>
        </div>
    );
}

export default App;

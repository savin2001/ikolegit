import { useState } from "react";
import PrimaryNavbar from "./components/navbars/PrimaryNavbar"

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="bg-base-100">
              <PrimaryNavbar/>
                <h1 className="font-bold text-2xl text-primary">
                    React and Tailwind with Vitejs!
                </h1>
            </div>
        </div>
    );
}

export default App;

import { useState } from "react";
import PrimaryNavbar from "./components/navbars/PrimaryNavbar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <div className="bg-base-100 w-full mx-auto">
                <PrimaryNavbar />
                <div className="mt-16">
                    <div className="carousel w-full">
                        <div
                            id="slide1"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide2"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide3"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide4"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
                                className="w-full"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

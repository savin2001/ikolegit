import { useEffect, useState } from "react";
import useFetch from "../components/axios-custom-hooks/useFetch.js";
import PrimaryNavbar from "../components/navbars/PrimaryNavbar.jsx";

import { AiOutlineMenu } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

const slides = [
    {
        id: 0,
        title: "Amazon Fire TV 43 inch smart TV",
        description:
            "Amazon Fire TV 4-Series comes with a 1-year limited warranty and a 30-day Amazon Device return policy.",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
    {
        id: 1,
        title: "iPhone XR, 64GB, Black",
        description:
            "The product is refurbished, is fully functional and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
        img: "https://m.media-amazon.com/images/I/717KHGCJ6eL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Acoustic Bluetooth Speaker",
        description:
            "Enhanced bass boost design, front panel controls, illuminated display, bass, treble and main volume controls, stereo auxiliary input, pro surround function.",
        img: "https://m.media-amazon.com/images/I/51M5O+wl7dL._AC_SL1000_.jpg",
    },
    {
        id: 3,
        title: "Computer Intel Core-i5",
        description:
            "2022 Newest HP 15.6 HD Laptop Computer, Intel Core-i5 Quad-Core N4120(up to 2.6GHz), 8GB DDR4 RAM, 128GB SSD, HDMI, Bluetooth, Webcam, USB-C, RJ45 Ethernet, Windows 11S, Silver, JVQ Mousepad",
        img: "https://m.media-amazon.com/images/I/71IyteItZhL._AC_SL1500_.jpg",
    },
    {
        id: 4,
        title: "EVGA Z12 RGB Gaming Keyboard",
        description:
            "RGB Backlit LED, 5 Programmable Macro Keys, Dedicated Media Keys, Water Resistant, 834-W0-12US-KR",
        img: "https://m.media-amazon.com/images/I/61mko8+Uf6L._AC_SL1500_.jpg",
    },
    {
        id: 5,
        title: "LED Wireless Mouse",
        description:
            "Uiosmuph G12 Slim Rechargeable Wireless Silent Mouse, 2.4G Portable USB Optical Wireless Computer Mice with USB Receiver and Type C Adapter (Matte Black)",
        img: "https://m.media-amazon.com/images/I/51KCV2cdDsS._AC_SL1500_.jpg",
    },
    {
        id: 6,
        title: "Sony Wired Headphones",
        description:
            "Lightweight 1.38 in neodymium dynamic drivers deliver a punchy, rhythmic response to even the most demanding tracks. Driver Unit: Dome type",
        img: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
];
const Home = () => {
    const { response, loading, error } = useFetch({
        method: "get",
        url: "/category/list",
    });
    const {
        response: isProduct,
        loading: isLoading,
        error: isError,
    } = useFetch({
        method: "get",
        url: "/product/",
    });
    const [categories, setCategories] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);

    // Fetching categories from the api

    useEffect(() => {
        if (response !== null) {
            setCategories(response);
            // console.log(categories);
        }
    }, [response]);
    useEffect(() => {
        if (isProduct !== null) {
            setProducts(isProduct);
            console.log(products);
        }
    }, [isProduct]);

    // Adding items to cart

    const handleAddCart = () => {
        const cart = localStorage.getItem("cartItems");
    };

    return (
        <>
            <PrimaryNavbar />
            {/* Landing section */}
            <header className="mt-36 w-full mb-9">
                {isLoading ? (
                    <>
                        <div id="loading ">
                            <div className="carousel-item relative w-full flex lg:flex-row sm:flex-col-reverse animate-pulse">
                                <div className="lg:ml-24 my-auto w-1/2 sm:w-2/3 lg:w-1/2 sm:mx-auto sm:text-center lg:text-left p-4">
                                    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl pb-4 text-neutral sm:text-left">
                                        Loading offers...
                                    </h1>
                                    <div className="text-neutral h-4  w-1/2 bg-secondary"></div>
                                    <br />
                                    <div className="text-neutral h-4  w-3/4 bg-secondary"></div>
                                    <br />
                                    <div className="text-neutral h-4  w-full bg-secondary"></div>
                                </div>
                                <figure className="h-60 w-fit lg:right-0 lg:mr-48 sm:mx-auto sm:w-2/3 lg:w-1/2 md:max-w-fit  flex justify-center items-center">
                                    <FaSpinner className="lg:h-24 lg:w-24 sm:h-12 sm:w-12 animate-spin text-neutral" />
                                </figure>

                                <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a
                                        href={`#slide1`}
                                        className="btn btn-circle bg-secondary shadow-lg btn-disabled"
                                    >
                                        ❮
                                    </a>

                                    <a
                                        href="#"
                                        className="btn btn-circle bg-secondary shadow-lg btn-disabled"
                                    >
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {isError && (
                            <div className="w-full flex justify-center items-center p-5 bg-error rounded-2xl">
                                <p className="text-centertext-base-100">
                                    {isError.response.data}
                                </p>
                            </div>
                        )}

                        {products.length > 0 && (
                            <div className="carousel w-full h-full lg:h-72 max-w-7xl mx-auto">
                                {products.map((item) => (
                                    <div
                                        id={`slide${item.id}`}
                                        className="carousel-item relative w-full flex lg:flex-row sm:flex-col-reverse"
                                        key={item.id}
                                    >
                                        <div className="lg:ml-24 my-auto w-1/2 sm:w-2/3 lg:w-1/2 sm:mx-auto sm:text-center lg:text-left p-4">
                                            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl pb-4 text-primary">
                                                {item.name}
                                            </h1>
                                            <p className="text-neutral">
                                                {item.description}
                                            </p>
                                        </div>
                                        <img
                                            src={item.imageUrl}
                                            className="w-fit lg:right-0 lg:mr-24 sm:mx-auto sm:w-2/3 lg:w-1/2 md:max-w-fit "
                                        />

                                        <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                            {item.id > 1 ? (
                                                <a
                                                    href={`#slide${
                                                        item.id - 1
                                                    }`}
                                                    className="btn btn-circle bg-primary shadow-lg hover:bg-white hover:text-primary border-none"
                                                >
                                                    ❮
                                                </a>
                                            ) : (
                                                <a
                                                    href={`#slide1`}
                                                    className="btn btn-circle bg-secondary shadow-lg btn-disabled"
                                                >
                                                    ❮
                                                </a>
                                            )}
                                            {/* {slide.id } */}
                                            <a
                                                href={`#slide${item.id + 1}`}
                                                className="btn btn-circle bg-primary shadow-lg hover:bg-white hover:text-primary border-none"
                                            >
                                                ❯
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </header>

            {/* categories section */}

            <main className="w-full relative">
                <div className="max-w-7xl mx-auto">
                    <div className="divider"></div>
                </div>
                <div className="max-w-7xl mx-auto py-4  px-6">
                    {isLoading ? (
                        <>
                            <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                <span className="flex justify-center">
                                    <FaSpinner className="h-8 w-8 animate-spin" />
                                    <span className="ml-6">
                                        Products will load in a few...
                                    </span>
                                </span>
                            </h3>
                            <div className="sm:block md:hidden lg:hidden">
                                <div className="carousel relative carousel-center sm:max-w-xl md:max-w-4xl lg:max-w-7xl p-4 space-x-4 rounded-box animate-pulse">
                                    {Array.from(Array(6)).map((_, index) => (
                                        <div
                                            className="carousel-item h-32 w-64 bg-secondary rounded-lg"
                                            key={index}
                                        >
                                            <div className="text-neutral h-4  w-1/2 bg-base-100"></div>
                                            <br />
                                            <div className="text-neutral h-4  w-3/4 bg-base-100"></div>
                                            <br />
                                            <div className="text-neutral h-4  w-full bg-base-100"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {isError && (
                                <div className="w-full flex justify-center items-center p-5 bg-error rounded-2xl">
                                    <p className="text-centertext-base-100">
                                        {isError.response.data}
                                    </p>
                                </div>
                            )}
                            {products.length > 0 && (
                                <div>
                                    <h3 className="lg:text-2xl sm:text-xl text-primary text-center mb-6">
                                        Special for you
                                    </h3>
                                    <div className="sm:block md:hidden lg:hidden">
                                        <div className="carousel relative carousel-center sm:max-w-xl md:max-w-4xl lg:max-w-7xl p-4 space-x-4 rounded-box">
                                            {products.map((item) => (
                                                <div
                                                    className="carousel-item w-64 h-64 bg-secondary rounded-box "
                                                    key={item.id}
                                                >
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    <div className="mx-auto sm:hidden md:block lg:block">
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
                            {slides.map((slide) => (
                                <div
                                    className="card w-fit bg-base-100 shadow-xl m-5"
                                    key={slide.id}
                                >
                                    <figure>
                                        <img
                                            src={slide.img}
                                            alt={slide.title}
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <p className="card-title text-base">
                                            {slide.title}
                                            <div className="badge badge-primary sm:hidden lg:block">
                                                NEW
                                            </div>
                                        </p>
                                        <div className="rating md:rating-sm sm:rating-xs ">
                                            <input
                                                type="radio"
                                                name="rating-1"
                                                className="mask mask-star bg-primary"
                                            />
                                            <input
                                                type="radio"
                                                name="rating-1"
                                                className="mask mask-star bg-primary"
                                            />
                                            <input
                                                type="radio"
                                                name="rating-1"
                                                className="mask mask-star bg-primary"
                                                defaultChecked
                                            />
                                            <input
                                                type="radio"
                                                name="rating-1"
                                                className="mask mask-star bg-primary"
                                            />
                                            <input
                                                type="radio"
                                                name="rating-1"
                                                className="mask mask-star bg-primary"
                                            />
                                        </div>
                                        <div className="justify-start">
                                            <div
                                                className="badge badge-outline badge-sm text-accent

 mr-2"
                                            >
                                                Electronics
                                            </div>
                                            <div
                                                className="badge badge-outline badge-sm text-accent

 mr-2"
                                            >
                                                Products
                                            </div>
                                        </div>

                                        <div className="card-actions">
                                            <button className="btn  w-full btn-primary text-sm rounded-full btn-sm">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
                {loading ? (
                    <div id="loading ">
                        <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                            <span className="flex justify-center">
                                <FaSpinner className="h-8 w-8 animate-spin" />
                                <span className="ml-6">Wait a moment...</span>
                            </span>
                        </h3>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6  animate-pulse">
                            {Array.from(Array(4)).map((_, index) => (
                                <div
                                    className="card bg-base-100 shadow-2xl border-2 m-5"
                                    key={index}
                                >
                                    <figure className="h-48 bg-secondary"></figure>
                                    <div className="card-body">
                                        <h3 className="card-title"></h3>
                                        <div className="justify-start">
                                            <div className="badge badge-outline badge-sm text-accent mr-2">
                                                product
                                            </div>
                                            <div className="badge badge-outline badge-sm text-accent mr-2">
                                                tag
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="card-actions">
                                            <button className="btn  gap-2 w-full btn-neutral text-sm rounded-full btn-sm">
                                                Loading...
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        {error && (
                            <div className="w-full flex justify-center items-center p-5 bg-error rounded-2xl">
                                <p className="text-centertext-base-100">
                                    {error.response.data}
                                </p>
                            </div>
                        )}
                        <div className="w-full bg-secondary  pb-4">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex  mt-6 relative">
                                    <div className="drawer lg:grid sm:hidden">
                                        <input
                                            id="my-drawer"
                                            type="checkbox"
                                            className="drawer-toggle"
                                        />
                                        <div className="drawer-content relative">
                                            <div className=" flex justify-start sticky top-6 left-0 z-50 ">
                                                <label
                                                    htmlFor="my-drawer"
                                                    className="btn btn-primary flex relative justify-between text-white rounded-full btn-md sm:btn-sm drawer-button"
                                                >
                                                    <AiOutlineMenu className="h-5 w-5 hover rounded-full" />
                                                </label>
                                            </div>
                                            <div className="">
                                                <div id="latest">
                                                    <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                                        Latest
                                                    </h3>
                                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
                                                        {slides.map((slide) => (
                                                            <div
                                                                className="card w-fit bg-base-100 shadow-xl m-5"
                                                                key={slide.id}
                                                            >
                                                                <figure>
                                                                    <img
                                                                        src={
                                                                            slide.img
                                                                        }
                                                                        alt={
                                                                            slide.title
                                                                        }
                                                                    />
                                                                </figure>
                                                                <div className="card-body">
                                                                    <p className="card-title text-base">
                                                                        {
                                                                            slide.title
                                                                        }
                                                                    </p>
                                                                    <div className="rating md:rating-sm sm:rating-xs ">
                                                                        <input
                                                                            type="radio"
                                                                            name="rating-1"
                                                                            className="mask mask-star bg-primary"
                                                                        />
                                                                        <input
                                                                            type="radio"
                                                                            name="rating-1"
                                                                            className="mask mask-star bg-primary"
                                                                        />
                                                                        <input
                                                                            type="radio"
                                                                            name="rating-1"
                                                                            className="mask mask-star bg-primary"
                                                                            defaultChecked
                                                                        />
                                                                        <input
                                                                            type="radio"
                                                                            name="rating-1"
                                                                            className="mask mask-star bg-primary"
                                                                        />
                                                                        <input
                                                                            type="radio"
                                                                            name="rating-1"
                                                                            className="mask mask-star bg-primary"
                                                                        />
                                                                    </div>
                                                                    <div className="justify-start">
                                                                        <div
                                                                            className="badge badge-outline badge-sm text-accent

 mr-2"
                                                                        >
                                                                            electronics
                                                                        </div>
                                                                        <div
                                                                            className="badge badge-outline badge-sm text-accent

 mr-2"
                                                                        >
                                                                            Products
                                                                        </div>
                                                                    </div>

                                                                    <div className="card-actions">
                                                                        <button className="btn  w-full btn-primary text-sm rounded-full btn-sm">
                                                                            Add
                                                                            to
                                                                            cart
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div id="popular">
                                                    <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                                        Popular products
                                                    </h3>
                                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
                                                        {slides.map((slide) => (
                                                            <div
                                                                className="card w-fit bg-base-100 shadow-xl m-5"
                                                                key={slide.id}
                                                            >
                                                                <figure>
                                                                    <img
                                                                        src={
                                                                            slide.img
                                                                        }
                                                                        alt={
                                                                            slide.title
                                                                        }
                                                                    />
                                                                </figure>
                                                                <div className="card-body">
                                                                    <p className="card-title text-base">
                                                                        {
                                                                            slide.title
                                                                        }
                                                                    </p>
                                                                    <div className="justify-start">
                                                                        <div
                                                                            className="badge badge-outline badge-sm text-accent

 mr-2"
                                                                        >
                                                                            electronics
                                                                        </div>
                                                                        <div className="rating md:rating-sm sm:rating-xs ">
                                                                            <input
                                                                                type="radio"
                                                                                name="rating-1"
                                                                                className="mask mask-star bg-primary"
                                                                            />
                                                                            <input
                                                                                type="radio"
                                                                                name="rating-1"
                                                                                className="mask mask-star bg-primary"
                                                                            />
                                                                            <input
                                                                                type="radio"
                                                                                name="rating-1"
                                                                                className="mask mask-star bg-primary"
                                                                                defaultChecked
                                                                            />
                                                                            <input
                                                                                type="radio"
                                                                                name="rating-1"
                                                                                className="mask mask-star bg-primary"
                                                                            />
                                                                            <input
                                                                                type="radio"
                                                                                name="rating-1"
                                                                                className="mask mask-star bg-primary"
                                                                            />
                                                                        </div>
                                                                        <div
                                                                            className="badge badge-outline badge-sm text-accent

 mr-2"
                                                                        >
                                                                            Products
                                                                        </div>
                                                                    </div>
                                                                    <div className="card-actions">
                                                                        <button className="btn  w-full btn-primary text-sm rounded-full btn-sm">
                                                                            Add
                                                                            to
                                                                            cart
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="drawer-side">
                                            <label
                                                htmlFor="my-drawer"
                                                className="drawer-overlay"
                                            />
                                            {categories && (
                                                <ul className="menu p-4 overflow-y-auto lg:w-1/5 sm:w-1/2 bg-base-100 text-base-content">
                                                    <h3 className="lg:text-2xl sm:text-xl text-primary">
                                                        Categories
                                                    </h3>
                                                    {categories.map((cat) => (
                                                        <li key={cat.id}>
                                                            <a
                                                                href={`#${cat.id}`}
                                                                className="text-neutral hover:text-primary"
                                                            >
                                                                {
                                                                    cat.categoryName
                                                                }
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:hidden sm:block px-6 mx-auto">
                                        <h3 className="lg:text-2xl sm:text-xl text-primary mb-6 text-center">
                                            Categories
                                        </h3>
                                        {categories && (
                                            <>
                                                <div className="carousel carousel-center sm:w-72 md:w-96 lg:max-w-7xl p-4 space-x-4 rounded-box">
                                                    {categories.map((cat) => (
                                                        <div
                                                            className="carousel-item"
                                                            key={cat.id}
                                                        >
                                                            <div className="rounded-box">
                                                                <a
                                                                    href={`#${cat.id}`}
                                                                    className="btn btn-circle border-none text-xs bg-base-100 text-neutral w-fit px-2 hover:bg-primary hover:text-base-100"
                                                                >
                                                                    {
                                                                        cat.categoryName
                                                                    }
                                                                </a>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="w-fit">
                                                    <div>
                                                        <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center capitalize">
                                                            latest
                                                        </h3>
                                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
                                                            {slides.map(
                                                                (slide) => (
                                                                    <div
                                                                        className="card w-fit bg-base-100 shadow-xl m-5"
                                                                        key={
                                                                            slide.id
                                                                        }
                                                                    >
                                                                        <figure>
                                                                            <img
                                                                                src={
                                                                                    slide.img
                                                                                }
                                                                                alt={
                                                                                    slide.title
                                                                                }
                                                                            />
                                                                        </figure>
                                                                        <div className="card-body">
                                                                            <p className="card-title text-base">
                                                                                {
                                                                                    slide.title
                                                                                }
                                                                            </p>
                                                                            <div className="rating md:rating-sm sm:rating-xs ">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                    defaultChecked
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                            </div>
                                                                            <div className="justify-start">
                                                                                <div
                                                                                    className="badge badge-outline badge-sm text-accent

mr-2"
                                                                                >
                                                                                    electronics
                                                                                </div>
                                                                                <div
                                                                                    className="badge badge-outline badge-sm text-accent

mr-2"
                                                                                >
                                                                                    Products
                                                                                </div>
                                                                            </div>
                                                                            <div className="card-actions">
                                                                                <button className="btn  w-full btn-primary text-sm rounded-full btn-sm">
                                                                                    Add
                                                                                    to
                                                                                    cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center capitalize">
                                                            popular
                                                        </h3>
                                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
                                                            {slides.map(
                                                                (slide) => (
                                                                    <div
                                                                        className="card w-fit bg-base-100 shadow-xl m-5"
                                                                        key={
                                                                            slide.id
                                                                        }
                                                                    >
                                                                        <figure>
                                                                            <img
                                                                                src={
                                                                                    slide.img
                                                                                }
                                                                                alt={
                                                                                    slide.title
                                                                                }
                                                                            />
                                                                        </figure>
                                                                        <div className="card-body">
                                                                            <p className="card-title text-base">
                                                                                {
                                                                                    slide.title
                                                                                }
                                                                            </p>
                                                                            <div className="rating md:rating-sm sm:rating-xs">
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                    defaultChecked
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                                <input
                                                                                    type="radio"
                                                                                    name="rating-1"
                                                                                    className="mask mask-star bg-primary"
                                                                                />
                                                                            </div>
                                                                            <div className="justify-start">
                                                                                <div
                                                                                    className="badge badge-outline badge-sm text-accent

mr-2"
                                                                                >
                                                                                    electronics
                                                                                </div>
                                                                                <div
                                                                                    className="badge badge-outline badge-sm text-accent

mr-2"
                                                                                >
                                                                                    Products
                                                                                </div>
                                                                            </div>
                                                                            <div className="card-actions">
                                                                                <button className="btn  w-full btn-primary text-sm rounded-full btn-sm">
                                                                                    Add
                                                                                    to
                                                                                    cart
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </>
    );
};

export default Home;

import PrimaryNavbar from "../components/navbars/PrimaryNavbar";
import { AiOutlineMenu } from "react-icons/ai";

const categories = [
    { id: "all", name: "All categories" },
    { id: "latest", name: "Latest" },
    { id: "popular", name: "Popular" },
    { id: "phones", name: "Phones and Tablets" },
    { id: "comps", name: "Computers and Monitors" },
    { id: "access", name: "Computer Accessories" },
    { id: "tvs", name: "TVs and Sound Systems" },
];
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
    return (
        <>
            <PrimaryNavbar />
            {/* Landing section */}
            <header className="mt-36 w-full mb-9">
                <div className="carousel w-full h-full lg:h-72 max-w-7xl mx-auto">
                    {slides.map((slide) => (
                        <div
                            id={`slide${slide.id}`}
                            className="carousel-item relative w-full flex lg:flex-row sm:flex-col-reverse"
                            key={slide.id}
                        >
                            <div className="lg:ml-24 my-auto w-1/2 sm:w-2/3 lg:w-1/2 sm:mx-auto sm:text-center lg:text-left p-4">
                                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl pb-4 text-primary">
                                    {slide.title}
                                </h1>
                                <p className="text-neutral">
                                    {slide.description}
                                </p>
                            </div>
                            <img
                                src={slide.img}
                                className="w-fit lg:right-0 lg:mr-24 sm:mx-auto sm:w-2/3 lg:w-1/2 md:max-w-fit "
                            />

                            <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                {slide.id > 0 ? (
                                    <a
                                        href={`#slide${slide.id - 1}`}
                                        className="btn btn-circle bg-primary shadow-lg hover:bg-white hover:text-primary border-none"
                                    >
                                        ❮
                                    </a>
                                ) : (
                                    <a
                                        href={`#slide1`}
                                        className="btn btn-circle bg-grey shadow-lg btn-disabled"
                                    >
                                        ❮
                                    </a>
                                )}
                                {/* {slide.id } */}
                                <a
                                    href={`#slide${slide.id + 1}`}
                                    className="btn btn-circle bg-primary shadow-lg hover:bg-white hover:text-primary border-none"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </header>

            {/* categories section */}
            <main className="w-full relative">
                <div className="max-w-7xl mx-auto">
                    <div className="divider"></div>
                </div>
                <div className="max-w-7xl mx-auto py-4  px-6">
                    <h3 className="lg:text-2xl sm:text-xl text-primary text-center mb-6">
                        Special for you
                    </h3>
                    <div className="sm:block md:hidden lg:hidden">
                        <div className="carousel relative carousel-center sm:max-w-xl md:max-w-4xl lg:max-w-7xl p-4 space-x-4 rounded-box">
                            {slides.map((slide) => (
                                <>
                                    <div
                                        className="carousel-item w-64 relative"
                                        key={slide.id}
                                    >
                                        <div className="absolute">
                                            <h3></h3>
                                        </div>
                                        <img
                                            src={slide.img}
                                            alt={slide.title}
                                            className="rounded-box"
                                        />
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
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
                                        <h3 className="card-title">
                                            {slide.title}
                                            <div className="badge badge-primary sm:hidden lg:block">
                                                NEW
                                            </div>
                                        </h3>
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
                                        {/* <p>{slide.description}</p> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
                <div className="w-full bg-secondary  py-4">
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
                                            className="btn btn-primary text-white rounded-full btn-md sm:btn-sm drawer-button"
                                        >
                                            <AiOutlineMenu className="h-5 w-5 rounded-full" />
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
                                                                src={slide.img}
                                                                alt={
                                                                    slide.title
                                                                }
                                                            />
                                                        </figure>
                                                        <div className="card-body">
                                                            <h3 className="card-title">
                                                                {slide.title}
                                                            </h3>
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
                                                            <p>
                                                                {
                                                                    slide.description
                                                                }
                                                            </p>
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
                                                                src={slide.img}
                                                                alt={
                                                                    slide.title
                                                                }
                                                            />
                                                        </figure>
                                                        <div className="card-body">
                                                            <h3 className="card-title">
                                                                {slide.title}
                                                            </h3>
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
                                                            <p>
                                                                {
                                                                    slide.description
                                                                }
                                                            </p>
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
                                        <div id="phones">
                                            <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                                Phones and Tablets
                                            </h3>
                                            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
                                                {Array.from(Array(4)).map(
                                                    (index) => (
                                                        <div className="card w-fit bg-base-100 shadow-xl m-5">
                                                            <figure>
                                                                <img
                                                                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                                                                    alt="Shoes"
                                                                />
                                                            </figure>
                                                            <div className="card-body">
                                                                <h2 className="card-title">
                                                                    Shoes!
                                                                    <div className="badge badge-primary">
                                                                        NEW
                                                                    </div>
                                                                </h2>
                                                                <p>
                                                                    If a dog
                                                                    chews shoes
                                                                    whose shoes
                                                                    does he
                                                                    choose?
                                                                </p>
                                                                <div className="card-actions justify-end">
                                                                    <div className="badge badge-outline">
                                                                        Fashion
                                                                    </div>
                                                                    <div className="badge badge-outline">
                                                                        Products
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div id="laptops">
                                            <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                                Laptops
                                            </h3>
                                            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
                                                {Array.from(Array(4)).map(
                                                    (index) => (
                                                        <div className="card w-fit bg-base-100 shadow-xl m-5">
                                                            <figure>
                                                                <img
                                                                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                                                                    alt="Shoes"
                                                                />
                                                            </figure>
                                                            <div className="card-body">
                                                                <h2 className="card-title">
                                                                    Shoes!
                                                                    <div className="badge badge-primary">
                                                                        NEW
                                                                    </div>
                                                                </h2>
                                                                <p>
                                                                    If a dog
                                                                    chews shoes
                                                                    whose shoes
                                                                    does he
                                                                    choose?
                                                                </p>
                                                                <div className="card-actions justify-end">
                                                                    <div className="badge badge-outline">
                                                                        Fashion
                                                                    </div>
                                                                    <div className="badge badge-outline">
                                                                        Products
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="drawer-side">
                                    <label
                                        htmlFor="my-drawer"
                                        className="drawer-overlay"
                                    />
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
                                                    {cat.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:hidden sm:block px-6 mx-auto">
                                <h3 className="lg:text-2xl sm:text-xl text-primary mb-6 text-center">
                                    Categories
                                </h3>
                                <div className="carousel carousel-center sm:w-72 md:w-96 lg:max-w-7xl p-4 space-x-4 rounded-box">
                                    {categories.map((cat) => (
                                        <div
                                            className="carousel-item"
                                            key={cat.id}
                                        >
                                            <div className="rounded-box">
                                                <a
                                                    href={`#${cat.id}`}
                                                    className="btn btn-circle border-none text-xs bg-base-100 text-neutral w-fit px-2 hover:border-primary hover:text-primary focus:bg-primary focus:text-base-100"
                                                >
                                                    {cat.name}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-fit">
                                    {categories.map((cat) => (
                                        <div id={cat.id} key={cat.id}>
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
                                                                src={slide.img}
                                                                alt={
                                                                    slide.title
                                                                }
                                                            />
                                                        </figure>
                                                        <div className="card-body">
                                                            <h3 className="card-title">
                                                                {slide.title}
                                                            </h3>
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
                                                            <p>
                                                                {
                                                                    slide.description
                                                                }
                                                            </p>
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
                                    ))}

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
                                                            src={slide.img}
                                                            alt={slide.title}
                                                        />
                                                    </figure>
                                                    <div className="card-body">
                                                        <h3 className="card-title">
                                                            {slide.title}
                                                        </h3>
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
                                                        <p>
                                                            {slide.description}
                                                        </p>
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
                                    <div id="phones">
                                        <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                            Phones and Tablets
                                        </h3>
                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
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
                                                        <h3 className="card-title">
                                                            {slide.title}
                                                        </h3>
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
                                                        <p>
                                                            {slide.description}
                                                        </p>
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
                                    <div id="laptops">
                                        <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                            Laptops
                                        </h3>
                                        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ml-6">
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
                                                        <h3 className="card-title">
                                                            {slide.title}
                                                        </h3>
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
                                                        <p>
                                                            {slide.description}
                                                        </p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;

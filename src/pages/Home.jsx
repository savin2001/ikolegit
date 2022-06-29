import PrimaryNavbar from "../components/navbars/PrimaryNavbar";
import { AiOutlineMenu } from "react-icons/ai";

const slides = [
    {
        id: 0,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/61V49wCBDtL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/71IyteItZhL._AC_SL1500_.jpg",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/61mko8+Uf6L._AC_SL1500_.jpg",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51KCV2cdDsS._AC_SL1500_.jpg",
    },
    {
        id: 6,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_SL1000_.jpg",
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
                                        href={`#slide${slide.id - 1}`}
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
            <main className="w-full py-9 relative">
                <div className="max-w-7xl mx-auto">
                    <div class="divider"></div>
                </div>
                <div className="max-w-7xl mx-auto py-9">
                    <h3 className="lg:text-2xl sm:text-xl text-primary text-center mb-6">
                        Latest Products
                    </h3>
                    <div className="carousel carousel-center sm:max-w-xl md:max-w-4xl lg:max-w-7xl p-4 space-x-4 rounded-box">
                        <div
                            className="carousel-item w-64"
                            // style={{ width: "256px" }}
                        >
                            <img
                                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item  w-64">
                            <img
                                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item  w-64">
                            <img
                                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item  w-64">
                            <img
                                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item  w-64">
                            <img
                                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item  w-64">
                            <img
                                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094"
                                className="rounded-box"
                            />
                        </div>
                        <div className="carousel-item  w-64">
                            <img
                                src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A"
                                className="rounded-box"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full bg-secondary  py-9">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-row w-full px-6">
                            <aside className="flex-auto lg:w-1/4 sm:hidden lg:block">
                                <h3 className="lg:text-2xl sm:text-xl text-primary">
                                    Categories
                                </h3>
                                <div className="flex flex-column mt-6">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing.
                                </div>
                            </aside>
                            <div class="divider lg:divider-horizontal"></div>
                            <article className="flex-auto w-3/4">
                                <h3 className="lg:text-2xl sm:text-xl text-primary sm:hidden lg:block">
                                    Popular products
                                </h3>
                                <div className="flex  mt-6 relative">
                                    <div className="drawer sticky overflow-hidden lg:hidden">
                                        <input
                                            id="my-drawer"
                                            type="checkbox"
                                            className="drawer-toggle"
                                        />
                                        <div className="drawer-content flex justify-start ">
                                            <label
                                                htmlFor="my-drawer"
                                                className="btn btn-outline border-primary text-primary btn-sm  drawer-button mr-6"
                                            >
                                                <AiOutlineMenu className="h-5 w-5" />
                                            </label>
                                            <h3 className="lg:text-2xl sm:text-xl text-primary">
                                                Popular products
                                            </h3>
                                        </div>
                                        <div className="drawer-side">
                                            <label
                                                htmlFor="my-drawer"
                                                className="drawer-overlay"
                                            />
                                            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                                <h3 className="lg:text-2xl sm:text-xl text-primary">
                                                    Categories
                                                </h3>
                                                <li>
                                                    <a>Sidebar Item 1</a>
                                                </li>
                                                <li>
                                                    <a>Sidebar Item 2</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;

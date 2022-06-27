const slides = [
    {
        id: 0,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/61V49wCBDtL._AC_SL1500_.jpg",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex exercitationem, fugiat repellat dicta voluptatibus laboriosam!",
        img: "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg",
    },
];
const Home = () => {
    return (
        <div className="mt-36 w-full ">
            <div className="carousel w-full h-full lg:h-72 max-w-7xl mx-auto">
                {slides.map((slide) => (
                    <div
                        id={`slide${slide.id}`}
                        className="carousel-item relative w-full flex lg:flex-row sm:flex-col-reverse"
                        key={slide.id}
                    >
                        <div className="lg:ml-24 my-auto w-1/2 sm:w-2/3 lg:w-1/2 sm:mx-auto sm:text-center lg:text-left p-4">
                            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl pb-4">
                                {slide.title}
                            </h1>
                            <p>
                                {slide.description}
                            </p>
                        </div>
                        <img
                            src="https://m.media-amazon.com/images/I/51EPd38RHQL._AC_SL1000_.jpg"
                            className="w-fit lg:right-0 lg:mr-24 sm:mx-auto sm:w-2/3 lg:w-1/2 md:max-w-fit "
                        />

                        <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            {slide.id > 0 ? (
                                <a
                                href={`#slide${slide.id - 1}`}
                                className="btn btn-circle bg-primary hover:bg-white hover:text-primary "
                            >
                                ❮
                            </a>
                            ): (
                                <a
                                href={`#slide${slide.id - 1}`}
                                className="btn btn-circle bg-grey btn-disabled"
                            >
                                ❮
                            </a>
                            )}
                            {/* {slide.id } */}
                            <a
                                href={`#slide${slide.id + 1}`}
                                className="btn btn-circle bg-primary hover:bg-white hover:text-primary"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Home;

import { FaSpinner } from "react-icons/fa";

const CarouselLoading = ({sectionTitle}) => {
    return (
        <>
            <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                <span className="flex justify-center">
                    <FaSpinner className="h-8 w-8 animate-spin" />
                    <span className="ml-6">{sectionTitle}</span>
                </span>
            </h3>
            <div className="sm:block md:hidden lg:hidden">
                <div className="carousel relative carousel-center sm:max-w-xl md:max-w-4xl lg:max-w-7xl p-4 space-x-4 rounded-box animate-pulse">
                    {Array.from(Array(3)).map((_, index) => (
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
    );
};

export default CarouselLoading;

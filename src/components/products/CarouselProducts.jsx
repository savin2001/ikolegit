import { Link } from "react-router-dom";

const CarouselProducts = ({ products }) => {
    return (
        <>
            {products.length > 0 && (
                <div>
                    <div className="flex sm:justify-between lg:justify-center">
                        <h3 className="lg:text-2xl sm:text-xl text-primary text-center mb-6">
                            Special for you
                        </h3>
                        <a href="#" className="text-neutral lg:hidden">
                            See more
                        </a>
                    </div>
                    <div className="sm:block md:hidden lg:hidden">
                        <div className="carousel relative carousel-center sm:max-w-xl md:max-w-4xl lg:max-w-7xl p-4 space-x-4 rounded-box">
                            {products.slice(0, 4).map((item) => (
                                <div
                                    className="carousel-item w-64 h-64 flex-shrink-0 overflow-hidden flex justify-center items-center rounded-box "
                                    key={item.id}
                                >
                                    <Link
                                        to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                                    >
                                        <div className="card shadow-xl image-full h-fit w-fit object-cover object-center m-auto">
                                            <figure className="p-2">
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.name}
                                                    className="h-fit w-fit object-cover object-center m-auto"
                                                />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {item.name}
                                                </h2>
                                                <p>$ {item.price}</p>
                                                <div className="card-actions justify-end">
                                                    <button className="btn btn-primary btn-sm text-xs">
                                                        check it out
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarouselProducts;

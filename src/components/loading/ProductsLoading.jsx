import { FaSpinner } from "react-icons/fa";

const ProductsLoading = ({ sectionTitle }) => {
    return (
        <>
            <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                <span className="flex justify-center">
                    <FaSpinner className="h-8 w-8 animate-spin" />
                    <span className="ml-6">{sectionTitle}</span>
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
                                <button className="btn  gap-2 w-full btn-neutral text-sm rounded-xl btn-sm">
                                    Loading...
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductsLoading;

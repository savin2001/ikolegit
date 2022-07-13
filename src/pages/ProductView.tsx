import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import useFetch from "../components/axios-custom-hooks/useFetch.js";
import PrimaryNavbar from "../components/navbars/PrimaryNavbar.jsx";

import { FaSpinner } from "react-icons/fa";

const ProductView = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);

    let { productId, categoryId, productName } = useParams();
    let id = parseInt(productId!);
    let category = parseInt(categoryId!);
    // Fetching the product
    const {
        response: isProduct,
        loading: isLoading,
        error: isError,
    } = useFetch({
        method: "get",
        url: "/product/",
    });

    useEffect(() => {
        if (isProduct !== null) {
            setProducts(isProduct);
        }
    }, [isProduct]);

    // Fetching categories
    const { response, loading, error } = useFetch({
        method: "get",
        url: "/category/list",
    });

    useEffect(() => {
        if (response !== null) {
            setCategories(response);
        }
    }, [response]);
    return (
        <>
            <PrimaryNavbar />
            {isLoading ? (
                <>
                    <div className="w-full relative mt-16 mb-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex justify-center items-center">
                                <div className="mockup-window border bg-base-300 w-2/3 my-4 animate-pulse">
                                    <div className="flex justify-center px-4 py-16 bg-base-200">
                                        <div className="mt-9 lg:text-sm sm:text-xs text-primary pb-6 text-center">
                                            <span className="flex justify-center">
                                                <FaSpinner className="h-8 w-8 animate-spin" />
                                                <span className="ml-6 text-lg font-bold text-neutral">
                                                    Loading {productName}...
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {isError && (
                        <div className="w-full flex justify-center items-center p-5 bg-error rounded-2xl">
                            <p className="text-centertext-base-100">
                                {isError.response}
                            </p>
                        </div>
                    )}
                    <div className="w-full relative mt-16">
                        <div className="max-w-7xl mx-auto">
                            {products.length > 0 && (
                                <>
                                    <div className="pt-6">
                                        <div className="text-sm breadcrumbs">
                                            <ul>
                                                <li>
                                                    <Link to={`/`}>Home</Link>
                                                </li>
                                                <li>
                                                    {loading ? (
                                                        <>Loading category</>
                                                    ) : (
                                                        <>
                                                            {error && (
                                                                <div className="w-full flex justify-center items-center p-5 bg-error rounded-2xl">
                                                                    <p className="text-centertext-base-100">
                                                                        {
                                                                            error.response
                                                                        }
                                                                    </p>
                                                                </div>
                                                            )}
                                                            {categories
                                                                .filter(
                                                                    (c) =>
                                                                        c.id ===
                                                                        category
                                                                )
                                                                .map((cat) => (
                                                                    <Link
                                                                        to={`/`}
                                                                        key={
                                                                            cat.id
                                                                        }
                                                                        className="capitalize"
                                                                    >
                                                                        {
                                                                            cat.categoryName
                                                                        }
                                                                    </Link>
                                                                ))}
                                                        </>
                                                    )}
                                                </li>
                                                <li>
                                                    {products
                                                        .filter(
                                                            (p) => p.id === id
                                                        )
                                                        .map((item) => (
                                                            <div key={item.id}>
                                                                {item.name}
                                                            </div>
                                                        ))}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {products
                                        .filter((p) => p.id === id)
                                        .map((item) => (
                                            <div className="mt-6 flex w-full" key={item.id}>
                                                <div className="w-1/2">

                                                    {item.imageUrl}
                                                </div>
                                                <div className="w-1/2">
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductView;

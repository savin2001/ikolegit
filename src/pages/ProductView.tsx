import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import { useCart } from "react-use-cart";

import Api from "../components/server-api/Api.js";
import useFetch from "../components/axios-custom-hooks/useFetch.js";
import PrimaryNavbar from "../components/navbars/PrimaryNavbar.jsx";

import { FaSpinner } from "react-icons/fa";
import axios from "axios";

const ProductView = () => {
    const user = JSON.parse(localStorage.getItem("accessToken") || "{}");
    const [serverError, setServerError] = useState("");
    const colors = [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ];
    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(" ");
    };
    const [selectedColor, setSelectedColor] = useState(colors[0]);
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

    // Cart functionality
    const {
        addItem,
        inCart,
        updateItemQuantity,
        items,
        isEmpty,
        totalUniqueItems,
    } = useCart();

    useEffect(() => {
        if (response !== null) {
            setCategories(response);
        }
    }, [response]);

    // Adding the product to database cart

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
                                            <span className="flex flex-col justify-center items-center">
                                                <span className="mb-5 text-lg font-bold text-neutral">
                                                    Loading details of{" "}
                                                    {productName}...
                                                </span>
                                                <FaSpinner className="h-16 text-center w-16 animate-spin" />
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
                        <div className="max-w-7xl mx-auto mb-9">
                            {products.length > 0 && (
                                <div className="px-4">
                                    <div className="pt-6 m-3">
                                        <div className=" md:text-sm sm:text-2xs breadcrumbs">
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
                                        .map((item) => {
                                            const alreadyAdded = inCart(
                                                item.id
                                            );
                                            const handleAddToDBCart = (e: {
                                                preventDefault: () => any;
                                            }) => {
                                                e && e.preventDefault();

                                                // Setting the validated values as payload
                                                let payload = {
                                                    productId: item.id,
                                                    quantity: totalUniqueItems,
                                                };
                                                const headers = {
                                                    "content-type":
                                                        "application/json",
                                                    Authorization: `token ${user}`,
                                                };

                                                // posting to database
                                                axios
                                                    .post(
                                                        `${Api}/cart/add`,
                                                        payload,
                                                        {
                                                            headers: {
                                                                "content-type":
                                                                    "application/json",
                                                                Authorization: `token ${user}`,
                                                            },
                                                        }
                                                    )
                                                    .then((response) => {
                                                        console.log(
                                                            response.data
                                                        );
                                                    })
                                                    .catch((error) => {
                                                        console.log(
                                                            error.response
                                                        );
                                                        const errorMessage =
                                                            error.response.data
                                                                .error;
                                                        setServerError(
                                                            errorMessage
                                                        );
                                                    });
                                            };
                                            return (
                                                <>
                                                    <div
                                                        className="mt-6 flex sm:flex-col md:flex-row w-full"
                                                        key={item.id}
                                                    >
                                                        <div className="product-image md:w-1/2 sm:w-full flex flex-col mb-9">
                                                            <div className="mb-5 p-3">
                                                                <img
                                                                    src={
                                                                        item.imageUrl
                                                                    }
                                                                    alt={
                                                                        item.name
                                                                    }
                                                                    className="w-full h-full"
                                                                />
                                                            </div>
                                                            <div className="flex flex-row w-full flex-nowrap">
                                                                {Array.from(
                                                                    Array(4)
                                                                ).map(
                                                                    (
                                                                        _,
                                                                        index
                                                                    ) => (
                                                                        <div className="flex-auto mx-2 border border-primary p-2 rounded-lg hover:cursor-pointer">
                                                                            <img
                                                                                src={
                                                                                    item.imageUrl
                                                                                }
                                                                                alt={
                                                                                    item.name
                                                                                }
                                                                                className="w-full h-full"
                                                                            />
                                                                        </div>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="product-details md:w-1/2 flex flex-col m-3 ">
                                                            <div className="flex flex-wrap mb-2">
                                                                <h1 className="flex-auto md:text-2xl sm:text-xl  font-semibold text-neutral pb-4">
                                                                    {item.name}
                                                                </h1>

                                                                <div className="md:text-xl sm:text-xl font-extrabold tracking-tight text-primary pb-4">
                                                                    ${" "}
                                                                    {item.price}
                                                                </div>
                                                            </div>
                                                            <div className="mb-8">
                                                                <div className="pb-4 w-full flex-none">
                                                                    <div className="flex">
                                                                        <div className="rating md:rating-sm sm:rating-xs mr-8">
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
                                                                        </div>
                                                                        <div className="reviews text-sm text-accent hover:text-primary cursor-pointer">
                                                                            420
                                                                            reviews
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full flex-none text-sm font-medium text-accent">
                                                                    In stock
                                                                </div>
                                                            </div>
                                                            <div className="mb-8">
                                                                <h3 className="text-neutral text-lg font-medium mb-2">
                                                                    Color
                                                                </h3>
                                                                <RadioGroup
                                                                    value={
                                                                        selectedColor
                                                                    }
                                                                    onChange={
                                                                        setSelectedColor
                                                                    }
                                                                    className="mt-4"
                                                                >
                                                                    <RadioGroup.Label className="sr-only">
                                                                        Choose a
                                                                        color
                                                                    </RadioGroup.Label>
                                                                    <div className="flex items-center space-x-3">
                                                                        {colors.map(
                                                                            (
                                                                                color
                                                                            ) => (
                                                                                <RadioGroup.Option
                                                                                    key={
                                                                                        color.name
                                                                                    }
                                                                                    value={
                                                                                        color
                                                                                    }
                                                                                    className={({
                                                                                        active,
                                                                                        checked,
                                                                                    }) =>
                                                                                        classNames(
                                                                                            color.selectedClass,
                                                                                            active &&
                                                                                                checked
                                                                                                ? "ring ring-offset-1"
                                                                                                : "",
                                                                                            !active &&
                                                                                                checked
                                                                                                ? "ring-2"
                                                                                                : "",
                                                                                            "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <RadioGroup.Label
                                                                                        as="span"
                                                                                        className="sr-only"
                                                                                    >
                                                                                        {
                                                                                            color.name
                                                                                        }
                                                                                    </RadioGroup.Label>
                                                                                    <span
                                                                                        aria-hidden="true"
                                                                                        className={classNames(
                                                                                            color.class,
                                                                                            "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                                                                        )}
                                                                                    />
                                                                                </RadioGroup.Option>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </RadioGroup>
                                                            </div>
                                                            <div className="mb-2">
                                                                <div
                                                                    tabIndex={0}
                                                                    className="collapse collapse-arrow md:collapse-open"
                                                                >
                                                                    <div className="collapse-title text-primary pl-0 md:hidden sm:text-lg font-medium">
                                                                        See more
                                                                        details
                                                                    </div>
                                                                    <div className="collapse-content pl-0">
                                                                        <h2 className="mb-2 md:text-xl sm:text-lg text-primary">
                                                                            Product
                                                                            Description
                                                                        </h2>
                                                                        <p className="mb-4">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </p>
                                                                        .
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    tabIndex={0}
                                                                    className="collapse collapse-arrow md:collapse-open"
                                                                >
                                                                    <div className="collapse-title text-primary pl-0 md:text-xl sm:text-lg font-medium">
                                                                        Specifications
                                                                    </div>
                                                                    <div className="collapse-content pl-0">
                                                                        <p className="mb-4">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </p>
                                                                        .
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mb-8">
                                                                <div className="shop">
                                                                    {alreadyAdded ? (
                                                                        <>
                                                                            {serverError.length !==
                                                                                0 && (
                                                                                <div className=" text-sm uppercase p-4 mb-4 text-base-100 bg-error text-center rounded-3xl">
                                                                                    <h4></h4>
                                                                                    <p className="mt-2">
                                                                                        {
                                                                                            serverError
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            )}
                                                                            {items
                                                                                .filter(
                                                                                    (
                                                                                        i
                                                                                    ) =>
                                                                                        i.id ===
                                                                                        item.id
                                                                                )
                                                                                .map(
                                                                                    (
                                                                                        p
                                                                                    ) => (
                                                                                        <div
                                                                                            className="form-control w-full"
                                                                                            key={
                                                                                                p.id
                                                                                            }
                                                                                        >
                                                                                            <label className="input-group input-group-lg md:justify-start sm:justify-center">
                                                                                                <button
                                                                                                    className="md:w-1/6 sm:w-1/4 btn-md  flex justify-center text-xl items-center bg-primary rounded-l-full text-base-100 hover:border-2 shadow-md hover:bg-base-100 hover:text-primary"
                                                                                                    onClick={() =>
                                                                                                        updateItemQuantity(
                                                                                                            p.id,
                                                                                                            p.quantity! -
                                                                                                                1
                                                                                                        )
                                                                                                    }
                                                                                                >
                                                                                                    -
                                                                                                </button>
                                                                                                <span className="md:w-2/6 sm:w-1/2 btn-md flex justify-center text-lg items-center">
                                                                                                    {
                                                                                                        p.quantity
                                                                                                    }
                                                                                                </span>
                                                                                                <button
                                                                                                    className="md:w-1/6 sm:w-1/4 btn-md flex justify-center text-xl items-center bg-primary rounded-r-full text-base-100 hover:border-2 shadow-md hover:bg-base-100 hover:text-primary"
                                                                                                    onClick={() =>
                                                                                                        updateItemQuantity(
                                                                                                            p.id,
                                                                                                            p.quantity! +
                                                                                                                1
                                                                                                        )
                                                                                                    }
                                                                                                >
                                                                                                    +
                                                                                                </button>
                                                                                            </label>
                                                                                            {!isEmpty && (
                                                                                                <Link
                                                                                                    to={`/cart`}
                                                                                                    className="btn sm:w-full md:w-2/3 btn-outline border-primary hover:bg-primary hover:text-base-100 hover:border-none text-primary text-md rounded-2xl mt-6"
                                                                                                >
                                                                                                    Proceed
                                                                                                    to
                                                                                                    checkout
                                                                                                </Link>
                                                                                            )}
                                                                                        </div>
                                                                                    )
                                                                                )}
                                                                        </>
                                                                    ) : (
                                                                        <div className="flex md:justify-start sm:justify-center">
                                                                            <button
                                                                                className="btn sm:w-full md:w-2/3 btn-primary text-md rounded-2xl"
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    {
                                                                                        addItem(
                                                                                            item
                                                                                        );
                                                                                    }
                                                                                }}
                                                                            >
                                                                                Add
                                                                                to
                                                                                cart
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="divider divider-vertical"></div>
                                                    <div className="mt-1 mb-5 bg-secondary p-4 rounded-md">
                                                        <div
                                                            tabIndex={0}
                                                            className="collapse collapse-arrow md:collapse-open"
                                                        >
                                                            <div className="collapse-title text-primary pl-0 md:hidden sm:text-lg font-medium">
                                                                See more details
                                                            </div>
                                                            <div className="collapse-content pl-0">
                                                                <div className="flex sm:flex-col-reverse md:flex-row w-full">
                                                                    <div className="block">
                                                                        <h2 className="mb-2 md:text-xl sm:text-lg text-primary">
                                                                            More
                                                                            from
                                                                            this
                                                                            seller
                                                                        </h2>

                                                                        <div className="product-description w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
                                                                            {products
                                                                                .slice(
                                                                                    0,
                                                                                    4
                                                                                )
                                                                                .map(
                                                                                    (
                                                                                        item
                                                                                    ) => {
                                                                                        const alreadyAdded =
                                                                                            inCart(
                                                                                                item.id
                                                                                            );
                                                                                        return (
                                                                                            <div
                                                                                                className="card w-fit bg-base-100 shadow-xl m-5"
                                                                                                key={
                                                                                                    item.id
                                                                                                }
                                                                                            >
                                                                                                <Link
                                                                                                    to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                                                                                                >
                                                                                                    <figure>
                                                                                                        <img
                                                                                                            src={
                                                                                                                item.imageUrl
                                                                                                            }
                                                                                                            alt={
                                                                                                                item.name
                                                                                                            }
                                                                                                        />
                                                                                                    </figure>
                                                                                                </Link>
                                                                                                <div className="card-body">
                                                                                                    <Link
                                                                                                        to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                                                                                                    >
                                                                                                        <p className="card-title text-base">
                                                                                                            {
                                                                                                                item.name
                                                                                                            }
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
                                                                                                        <p className="mt-2 text-primary font-bold">
                                                                                                            ${" "}
                                                                                                            {
                                                                                                                item.price
                                                                                                            }
                                                                                                        </p>
                                                                                                    </Link>
                                                                                                    <div className="card-actions">
                                                                                                        {alreadyAdded ? (
                                                                                                            <>
                                                                                                                {items
                                                                                                                    .filter(
                                                                                                                        (
                                                                                                                            i
                                                                                                                        ) =>
                                                                                                                            i.id ===
                                                                                                                            item.id
                                                                                                                    )
                                                                                                                    .map(
                                                                                                                        (
                                                                                                                            p
                                                                                                                        ) => (
                                                                                                                            <div
                                                                                                                                className="form-control w-full"
                                                                                                                                key={
                                                                                                                                    p.id
                                                                                                                                }
                                                                                                                            >
                                                                                                                                <label className="input-group input-group-sm">
                                                                                                                                    <span
                                                                                                                                        className=" w-full flex justify-center items-center bg-primary rounded-l-full text-base-100 hover:border-2 shadow-md hover:bg-base-100 hover:text-primary"
                                                                                                                                        onClick={() =>
                                                                                                                                            updateItemQuantity(
                                                                                                                                                p.id,
                                                                                                                                                p.quantity! -
                                                                                                                                                    1
                                                                                                                                            )
                                                                                                                                        }
                                                                                                                                    >
                                                                                                                                        -
                                                                                                                                    </span>
                                                                                                                                    <span className=" w-full flex justify-center items-center">
                                                                                                                                        {
                                                                                                                                            p.quantity
                                                                                                                                        }
                                                                                                                                    </span>
                                                                                                                                    <span
                                                                                                                                        className=" w-full flex justify-center items-center bg-primary rounded-r-full text-base-100 hover:border-2 shadow-md hover:bg-base-100 hover:text-primary"
                                                                                                                                        onClick={() =>
                                                                                                                                            updateItemQuantity(
                                                                                                                                                p.id,
                                                                                                                                                p.quantity! +
                                                                                                                                                    1
                                                                                                                                            )
                                                                                                                                        }
                                                                                                                                    >
                                                                                                                                        +
                                                                                                                                    </span>
                                                                                                                                </label>
                                                                                                                            </div>
                                                                                                                        )
                                                                                                                    )}
                                                                                                            </>
                                                                                                        ) : (
                                                                                                            <button
                                                                                                                className="btn w-full btn-primary text-sm rounded-xl btn-sm"
                                                                                                                onClick={() =>
                                                                                                                    addItem(
                                                                                                                        item
                                                                                                                    )
                                                                                                                }
                                                                                                            >
                                                                                                                Add
                                                                                                                to
                                                                                                                cart
                                                                                                            </button>
                                                                                                        )}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        );
                                                                                    }
                                                                                )}
                                                                        </div>
                                                                    </div>
                                                                    <div className="divider divider-horizontal"></div>

                                                                    <div className="seller-description w-full flex flex-col mb-9">
                                                                        <div className="md:ml-5 mb-4 shadow-xl">
                                                                            <figure className="bg-base-100 rounded-xl p-8">
                                                                                <div className="avatar flex justify-center ">
                                                                                    <div className="w-24 rounded-full border ">
                                                                                        <img src="https://avatars.dicebear.com/api/adventurer/your.svg" />
                                                                                    </div>
                                                                                </div>

                                                                                <div className="pt-6 text-center space-y-4">
                                                                                    <blockquote>
                                                                                        <p className="text-lg font-medium">
                                                                                            Shop
                                                                                            name
                                                                                        </p>
                                                                                    </blockquote>
                                                                                    <figcaption className="font-medium">
                                                                                        <div className="text-primary">
                                                                                            Seller
                                                                                            name
                                                                                        </div>
                                                                                    </figcaption>
                                                                                </div>
                                                                            </figure>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductView;

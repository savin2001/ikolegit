import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import {
    AiOutlineSearch,
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiOutlineBell,
    AiOutlineDelete,
} from "react-icons/ai";

const PrimaryNavbar = () => {

    const user = JSON.parse(localStorage.getItem("accessToken"));
    const navigate = useNavigate();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        cartTotal,
        totalItems,
        removeItem,
        emptyCart,
    } = useCart();

    const [open, setOpen] = useState(false);

    const handleOpenSearch = () => {
        setOpen(true);
    };
    const handleCloseSearch = () => {
        setOpen(false);
    };

    

    // Log out
    const handleLogOut = (e) => {
        e && e.preventDefault();
        localStorage.removeItem("accessToken");
        navigate("/");
    };

    return (
        <div className="flex flex-col justify-center align-middle shadow fixed top-0 left-0  z-40 bg-base-100 w-full">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start flex-auto w-1/3">
                    <Link
                        to={`/`}
                        className="btn btn-ghost normal-case text-2xl"
                    >
                        <img
                            className="mx-auto h-8 w-auto mr-3"
                            src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                            alt="Logo"
                        />
                        <span>Iko</span>
                        <span className="text-primary">Legit</span>
                    </Link>
                </div>
                {open && (
                    <div className="navbar-center sm:hidden md:flex lg:flex flex-auto">
                        <div className="container mx-2 w-full">
                            <div className="max-w-2xl mx-auto">
                                <div className="form-control">
                                    <div className="form-control">
                                        <div className="flex shadow-md rounded-full w-full">
                                            <input
                                                type="text"
                                                placeholder="I am looking for ..."
                                                className="input input-bordered border-primary flex-auto rounded-l-full  focus:ring-2 focus:ring-inset focus:ring-primary"
                                            />
                                            <button className="btn bg-primary text-base-100 border-none  rounded-r-full hover:border">
                                                <AiOutlineSearch className=" h-5 w-5 lg:h-7 lg:w-7" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="navbar-end  flex-auto  w-1/3 ">
                    <label className="btn btn-ghost btn-circle swap swap-rotate">
                        <input type="checkbox" />
                        <div className="swap-on" onClick={handleOpenSearch}>
                            <AiOutlineClose className=" h-5 w-5 lg:h-7 lg:w-7 " />
                        </div>
                        <div className="swap-off" onClick={handleCloseSearch}>
                            <AiOutlineSearch className=" h-5 w-5 lg:h-7 lg:w-7" />
                        </div>
                    </label>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <div className="indicator">
                                <AiOutlineShoppingCart className=" h-5 w-5 lg:h-7 lg:w-7" />
                                <span className="badge badge-sm badge-primary indicator-item">
                                    {isEmpty ? (
                                        <>{totalItems}</>
                                    ) : (
                                        <>{totalItems}</>
                                    )}
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-5  card card-compact dropdown-content mx-auto bg-base-100 shadow-2xl md:w-96 max-h-96 sm:w-72 md:max-w-md overflow-y-auto scroll-smooth hover:scroll-auto -mr-12"
                        >
                            

                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    {totalUniqueItems === 1 ? (
                                        <>{totalUniqueItems} Item</>
                                    ) : (
                                        <>{totalUniqueItems} Items</>
                                    )}
                                </span>
                                <ul
                                    role="list"
                                    className=" divide-y divide-gray-200"
                                >
                                    {user && (
                                        <>
                                            {items.map((item) => (
                                                <li
                                                    key={item.id}
                                                    className="flex py-6"
                                                >
                                                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden flex justify-center items-center rounded-md border">
                                                        <img
                                                            src={item.imageUrl}
                                                            alt={item.name}
                                                            className="h-fit w-fit object-cover object-center m-auto"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-neutral">
                                                                <h3>
                                                                    <a
                                                                        href={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </a>
                                                                </h3>
                                                            </div>
                                                            <div className="flex flex-1 justify-between items-center text-sm mt-2">
                                                                <div className="text-gray-500 flex justify-start">
                                                                    <p className="ml-4 text-primary text-left pr-2">
                                                                        ${" "}
                                                                        {
                                                                            item.price
                                                                        }
                                                                    </p>
                                                                    <span>
                                                                        &times;
                                                                    </span>
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </div>
                                                                <div className="flex">
                                                                    <button
                                                                        onClick={() =>
                                                                            removeItem(
                                                                                item.id
                                                                            )
                                                                        }
                                                                        type="button"
                                                                        className="font-medium bg-error text-base-100 hover:text-error hover:border hover:border-error hover:bg-base-100 p-3 rounded-md"
                                                                    >
                                                                        <AiOutlineDelete className=" h-5 w-5" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </>
                                    )}
                                </ul>
                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <div className="flex justify-between text-base text-primary font-medium">
                                        <p>Subtotal</p>
                                        <p>$ {cartTotal}</p>
                                    </div>
                                </div>

                                {isEmpty ? (
                                    <></>
                                ) : (
                                    <>
                                        <div className="card-actions">
                                            <button
                                                className="btn btn-sm btn-secondary text-neutral btn-block rounded-xl mb-2"
                                                onClick={() => emptyCart()}
                                            >
                                                {" "}
                                                Clear cart
                                            </button>
                                            <Link
                                                to="/cart"
                                                className="btn btn-sm btn-primary btn-block rounded-xl"
                                            >
                                                Checkout
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <AiOutlineBell className=" h-5 w-5 lg:h-7 lg:w-7" />
                            <span className="badge badge-sm badge-primary indicator-item">
                                2
                            </span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar  swap swap-rotate"
                        >
                            <input type="checkbox" />
                            <div className="swap-on">
                                <AiOutlineMenu className=" h-5 w-5 lg:h-7 lg:w-7" />
                            </div>
                            <div className="swap-off">
                                <AiOutlineMenu className="  h-5 w-5 lg:h-7 lg:w-7" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {user ? (
                                <>
                                    <li>
                                        <Link
                                            to={`/my-profile/${user}`}
                                            className="justify-center font-bold uppercase text-xs hover:text-primary"
                                        >
                                            MY account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="justify-center font-bold uppercase text-xs hover:text-primary"
                                        >
                                            wishlist
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="justify-center font-bold uppercase text-xs hover:text-primary">
                                            Become a seller
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="justify-center bg-error font-bold uppercase text-xs hover:text-primary"
                                        >
                                            Log out
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="justify-center font-bold uppercase text-xs hover:text-primary"
                                        >
                                            Sign in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            className="justify-center font-bold uppercase text-xs hover:text-primary"
                                        >
                                            New customer
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="justify-center font-bold uppercase text-xs hover:text-primary">
                                            Become a seller
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            {open && (
                <div className="container sm:flex md:hidden lg:hidden">
                    <div className="max-w-2xl mx-auto">
                        <div className="form-control">
                            <div className="form-control">
                                <div className="flex shadow-md rounded-full w-full">
                                    <input
                                        type="text"
                                        placeholder="I am looking for ..."
                                        className="input input-bordered border-primary flex-auto rounded-l-full  focus:ring-2 focus:ring-inset focus:ring-primary"
                                    />
                                    <button className="btn bg-primary text-base-100 border-none  rounded-r-full">
                                        <AiOutlineSearch className=" h-5 w-5 lg:h-7 lg:w-7" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrimaryNavbar;

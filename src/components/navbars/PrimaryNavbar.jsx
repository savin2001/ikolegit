import { useState } from "react";
import { Link } from "react-router-dom";
import {
    AiOutlineSearch,
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineShoppingCart,
    AiOutlineBell
} from "react-icons/ai";

const PrimaryNavbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpenSearch = () => {
        setOpen(true);
    };
    const handleCloseSearch = () => {
        setOpen(false);
    };

    return (
        <div className="flex flex-col justify-center align-middle shadow fixed top-0 left-0  z-40 bg-base-100 w-full">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start flex-auto w-1/2">
                    <a className="btn btn-ghost normal-case text-2xl">
                        <img
                            className="mx-auto h-8 w-auto mr-3"
                            src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                            alt="Logo"
                        />
                        <span>Iko</span>
                        <span className="text-primary">Legit</span>
                    </a>
                </div>

                <div className="navbar-end  flex-auto  w-1/2">
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
                                    8
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                        >
                            <div className="card-body">
                                <span className="font-bold text-lg">
                                    8 Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $999
                                </span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <AiOutlineBell className=" h-5 w-5 lg:h-7 lg:w-7"/>
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
                            <li>
                                <Link
                                    to="/login"
                                    className="justify-center font-bold uppercase text-xs hover:text-primary"
                                >
                                    Sign in
                                    {/* <span className="badge">New</span> */}
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
                            {/* <li>
                                <a className="justify-center font-bold uppercase text-xs hover:text-primary">
                                    Become a seller
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            {open && (
                <div className="container py-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="I am looking for ..."
                                className="input input-bordered border-primary rounded-full focus:ring-2 focus:ring-inset focus:ring-primary"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrimaryNavbar;

import { useState } from "react";
import { Link } from "react-router-dom";

import { AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";

const Register = () => {
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [password, setPassword] = useState(null);
    const [phone, setPhone] = useState(null);

    return (
        <div className="container mx-auto">
            <div className="min-h-full max-w-7xl flex items-center justify-center py-12 lg:px-8">
                <div className="mx-3 sm:w-full  md:max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                            alt="Logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-base-100">
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-base-100">
                            Or{" "}
                            <Link
                                to="/login"
                                className="font-medium text-primary hover:opacity-90"
                            >
                                you have an account
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm ">
                            <div className="mb-9">
                                <label htmlFor="first_name" className="sr-only">
                                    First name
                                </label>
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="email"
                                    required
                                    placeholder="First name"
                                    className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                />
                            </div>
                            <div className="mb-9">
                                <label
                                    htmlFor="second_name"
                                    className="sr-only"
                                >
                                    Second name
                                </label>
                                <input
                                    id="second_name"
                                    name="second_name"
                                    type="email"
                                    required
                                    placeholder="Second name"
                                    className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                />
                            </div>
                            <div className="mb-9">
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Email address"
                                    className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                />
                            </div>
                            <div className="mb-9">
                                <label htmlFor="phone" className="sr-only">
                                    Phone number
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    required
                                    placeholder="Phone number"
                                    className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center  justify-between md:flex-row sm:flex-col">
                            <div className="flex items-center py-3">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 text-sm text-gray-900 dark:text-base-100 flex flex-row"
                                >
                                    <span className="pr-1">I accept the </span>
                                    <Link
                                        to="#"
                                        className="font-medium text-primary hover:opacity-70 underline"
                                    >
                                        Terms and conditions
                                    </Link>
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link
                                    to="#"
                                    className="font-medium text-primary hover:opacity-70"
                                >
                                    Do you want to sell?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center p-3 border border-transparent text-sm font-medium rounded-full text-base-100 bg-primary hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <AiFillLock
                                        className="h-5 w-5 text-base group-hover:opacity-70"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign up
                            </button>
                        </div>
                        <div>
                            <Link
                                to="/"
                                className="group relative w-full flex justify-center p-3 border border-primary text-sm font-medium rounded-full text-primary bg-base hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <AiOutlineArrowLeft
                                        className="h-5 w-5 text-base group-hover:opacity-70"
                                        aria-hidden="true"
                                    />
                                </span>
                                Back to main page
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

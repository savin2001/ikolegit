import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    AiFillLock,
    AiOutlineArrowLeft,
    AiFillEyeInvisible,
    AiOutlineEye,
    AiOutlinePhone,
    AiOutlineMail,
} from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";

import useForm from "../../components/form-validation/useSignUpForm";
// import usePost from "../../components/axios-custom-hooks/usePost";
import { api } from "../../components/server-api/Api";

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [visibility, setVisibility] = useState(false);
    let errorMessage = null;
    const navigate = useNavigate();

    // Form submission
    const handleSignUp = (e) => {
        e && e.preventDefault();
        setLoading(true);

        // Setting the validated values as payload
        let payload = { contact: values.contact };
        payload["email"] = values.email;
        payload["firstName"] = values.firstName;
        payload["lastName"] = values.lastName;
        payload["password"] = values.password;

        const headers = {
            "Content-Type": "application/json",
        };

        // posting to database
        axios
            .post(`${api}/user/singup`, payload, headers)
            .then((response) => {
                console.log(response.data);
                setLoading(false);
                navigate("/login");
            })
            .catch((error) => {
                setLoading(false);
                console.log(error.response);
                errorMessage = error.response.data;
                setServerError(errorMessage);
            });
    };
    // Adding the input to states
    const { handleChange, values, errors, handleSubmit } =
        useForm(handleSignUp);

    // Password visible
    const checkPassword = () => {
        setVisibility(true);
    };

    // Password hidden
    const hidePassword = () => {
        setVisibility(false);
    };

    return (
        <div className="container mx-auto">
            <div className="min-h-full max-w-7xl flex items-center justify-center py-12 lg:px-8">
                <div className="mx-3 sm:w-full  md:max-w-md w-full space-y-8">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                        alt="Logo"
                    />
                    {loading ? (
                        <div className="shadow-xl p-10 h-96 max-h-screen">
                            <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                Almost there...
                            </h3>

                            <div className="flex justify-center items-center h-3/4">
                                <FaSpinner className="h-1/4 w-1/4 text-primary animate-spin" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div>
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
                            <form
                                className="mt-8 space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="hidden"
                                    name="remember"
                                    defaultValue="true"
                                />
                                <div className="rounded-md shadow-sm ">
                                    <div className="mb-9 ">
                                        <div className="relative">
                                            <label
                                                htmlFor="first_name"
                                                className="sr-only"
                                            >
                                                First name
                                            </label>
                                            <label className="cursor-pointer w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 flex justify-center items-center">
                                                <MdPersonOutline className="w-5 h-5 text-neutral" />
                                            </label>
                                            <input
                                                id="first_name"
                                                name="firstName"
                                                onChange={handleChange}
                                                type="text"
                                                required
                                                onInvalid={(e) =>
                                                    e.target.setCustomValidity(
                                                        "Enter first name Here"
                                                    )
                                                }
                                                onInput={(e) =>
                                                    e.target.setCustomValidity(
                                                        ""
                                                    )
                                                }
                                                placeholder="First name"
                                                className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                            />
                                        </div>
                                        {errors.firstName && (
                                            <p className=" mt-2 ml-3 text-sm p-2 text-error ">
                                                {errors.firstName}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-9">
                                        <div className="relative">
                                            <label
                                                htmlFor="second_name"
                                                className="sr-only"
                                            >
                                                Second name
                                            </label>
                                            <label className="cursor-pointer w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 flex justify-center items-center">
                                                <MdPersonOutline className="w-5 h-5 text-neutral" />
                                            </label>
                                            <input
                                                id="second_name"
                                                name="lastName"
                                                // value={signUp.lastName}
                                                onChange={handleChange}
                                                type="text"
                                                required
                                                onInvalid={(e) =>
                                                    e.target.setCustomValidity(
                                                        "Enter last name Here"
                                                    )
                                                }
                                                onInput={(e) =>
                                                    e.target.setCustomValidity(
                                                        ""
                                                    )
                                                }
                                                placeholder="Last name"
                                                className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                            />
                                        </div>
                                        {errors.lastName && (
                                            <p className=" mt-2 ml-3 text-sm p-2 text-error ">
                                                {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-9 ">
                                        <div className="relative">
                                            <label
                                                htmlFor="email-address"
                                                className="sr-only"
                                            >
                                                Email address
                                            </label>
                                            <label className="cursor-pointer w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 flex justify-center items-center">
                                                <AiOutlineMail className="w-5 h-5 text-neutral" />
                                            </label>
                                            <input
                                                id="email-address"
                                                name="email"
                                                type="email"
                                                // value={signUp.email}
                                                onChange={handleChange}
                                                autoComplete="email"
                                                required
                                                onInvalid={(e) =>
                                                    e.target.setCustomValidity(
                                                        "Enter valid email"
                                                    )
                                                }
                                                onInput={(e) =>
                                                    e.target.setCustomValidity(
                                                        ""
                                                    )
                                                }
                                                placeholder="Email address"
                                                className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-2 ml-3  text-sm p-2 text-error ">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-9">
                                        <div className="relative">
                                            <label
                                                htmlFor="phone"
                                                className="sr-only"
                                            >
                                                Phone number
                                            </label>
                                            <label className="cursor-pointer w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 flex justify-center items-center">
                                                <AiOutlinePhone className="w-5 h-5 text-neutral" />
                                            </label>
                                            <input
                                                id="phone"
                                                name="contact"
                                                // value={signUp.contact}
                                                onChange={handleChange}
                                                type="tel"
                                                required
                                                onInvalid={(e) =>
                                                    e.target.setCustomValidity(
                                                        "Enter valid phone number"
                                                    )
                                                }
                                                onInput={(e) =>
                                                    e.target.setCustomValidity(
                                                        ""
                                                    )
                                                }
                                                placeholder="Phone number"
                                                className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                            />
                                        </div>
                                        {errors.contact && (
                                            <p className="mt-2 ml-3  text-sm p-2 text-error ">
                                                {errors.contact}
                                            </p>
                                        )}
                                    </div>
                                    <div className="relative">
                                        <label
                                            htmlFor="password"
                                            className="sr-only"
                                        >
                                            Password
                                        </label>

                                        <input
                                            id="password"
                                            name="password"
                                            type={
                                                !visibility
                                                    ? "password"
                                                    : "text"
                                            }
                                            // value={signUp.password}
                                            onChange={handleChange}
                                            // autoComplete="current-password"
                                            required
                                            onInvalid={(e) =>
                                                e.target.setCustomValidity(
                                                    "Enter your password"
                                                )
                                            }
                                            onInput={(e) =>
                                                e.target.setCustomValidity("")
                                            }
                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                            placeholder="Password"
                                        />
                                        <label className="swap swap-rotate cursor-pointer w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3 z-50">
                                            <input type="checkbox" />
                                            <div className="swap-on">
                                                <AiFillEyeInvisible
                                                    className="w-5 h-5 text-neutral hover:text-primary"
                                                    onClick={checkPassword}
                                                />
                                            </div>
                                            <div className="swap-off">
                                                <AiOutlineEye
                                                    className="w-5 h-5 text-neutral hover:text-primary"
                                                    onClick={hidePassword}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 ml-3  text-sm p-2 text-error ">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div className="flex items-center  justify-between md:flex-row sm:flex-col">
                                    <div className="flex items-center py-3">
                                        <input
                                            id="terms"
                                            name="terms"
                                            type="checkbox"
                                            required
                                            onInvalid={(e) =>
                                                e.target.setCustomValidity(
                                                    "Accept terms to continue"
                                                )
                                            }
                                            onInput={(e) =>
                                                e.target.setCustomValidity("")
                                            }
                                            className="checkbox checkbox-primary"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-2 text-sm text-gray-900 dark:text-base-100 flex flex-row"
                                        >
                                            <span className="pr-1">
                                                I accept the{" "}
                                            </span>
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
                                {serverError.length !== 0 && (
                                    <div className=" text-sm uppercase p-4 text-base-100 bg-error text-center rounded-3xl">
                                        <h4></h4>
                                        <p className="mt-2">{serverError}</p>
                                    </div>
                                )}
                                {Object.keys(errors).length === 0 ? (
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
                                ) : (
                                    <div>
                                        <button
                                            type="button"
                                            disabled
                                            className="animate-pulse group relative w-full flex justify-center p-3 border border-transparent text-sm font-medium rounded-full text-base-100 bg-neutral"
                                        >
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <AiFillLock
                                                    className="h-5 w-5 text-base group-hover:opacity-70"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            Confirm your details
                                        </button>
                                    </div>
                                )}

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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;

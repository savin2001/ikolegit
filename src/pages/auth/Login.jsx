import { Link } from "react-router-dom";
import { AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import useForm from "../../components/form-validation/useSignUpForm";

const Login = () => {
    return (
        <div className="container mx-auto ">
            <div className="min-h-full flex max-w-7xl items-center justify-center py-12 lg:px-8">
                <div className="mx-3 sm:w-full md:max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                            alt="Logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-base-100">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-base-100">
                            Or{" "}
                            <Link
                                to="/register"
                                className="font-medium text-primary hover:opacity-90"
                            >
                                you don't have an account
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px">
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

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900 dark:text-base-100"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link
                                    to="#"
                                    className="font-medium text-primary hover:opacity-70"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center p-3 border border-transparent text-sm font-medium rounded-full text-base-100 bg-primary hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <AiFillLock
                                        className="h-5 w-5 text-primary group-hover:opacity-70"
                                        aria-hidden="true"
                                    />
                                </span>
                                Sign in
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

export default Login;

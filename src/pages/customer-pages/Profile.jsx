import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import PrimaryNavbar from "../../components/navbars/PrimaryNavbar.jsx";
import Page404 from "../PageNotFound.tsx";
import CustomerMenu from "../../components/menus/CustomerMenu.jsx";

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("accessToken"));
    const handleLogOut = (e) => {
        e && e.preventDefault();
        setLoading(true);
        localStorage.removeItem("accessToken");
        setLoading(false);
        navigate("/login");
    };
    return (
        <>
            {user ? (
                <>
                    {loading ? (
                        <div className="shadow-xl p-10 h-96 max-h-screen">
                            <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                                Logging out user...
                            </h3>

                            <div className="flex justify-center items-center h-3/4">
                                <FaSpinner className="h-1/4 w-1/4 text-primary animate-spin" />
                            </div>
                        </div>
                    ) : (
                        <>
                            <PrimaryNavbar />
                            <div className="w-full relative mt-16">
                                <div className="max-w-7xl mx-auto mb-9 px-4">
                                    <div className="drawer drawer-mobile">
                                        <input
                                            id="my-drawer-2"
                                            type="checkbox"
                                            className="drawer-toggle"
                                        />
                                        <div className="drawer-content flex flex-col relative">
                                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                                <div className="mt-5 md:mt-0 md:col-span-3">
                                                    <form>
                                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                                <div className="grid grid-cols-3 gap-6">
                                                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                                        Profile
                                                                    </h3>
                                                                    <p className="mt-1 text-sm text-gray-600">
                                                                        This
                                                                        information
                                                                        will be
                                                                        displayed
                                                                        publicly
                                                                        so be
                                                                        careful
                                                                        what you
                                                                        share.
                                                                    </p>
                                                                </div>
                                                                <div className="py-5">
                                                                    <div className="border-t border-gray-200" />
                                                                </div>

                                                                <div>
                                                                    <label className="block text-md font-medium text-neutral">
                                                                        Photo
                                                                    </label>
                                                                    <div className="mt-1 flex flex-col items-center">
                                                                        <span className="inline-block h-1/6 w-1/6 rounded-full overflow-hidden bg-secondary">
                                                                            <img
                                                                                src="https://avatars.dicebear.com/api/adventurer/john.svg"
                                                                                alt=""
                                                                            />
                                                                        </span>
                                                                        <button
                                                                            type="button"
                                                                            className="mt-5 btn btn-outline btn-md btn-primary rounded-2xl"
                                                                        >
                                                                            Change
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-700">
                                                                        Cover
                                                                        photo
                                                                    </label>
                                                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                                        <div className="space-y-1 text-center">
                                                                            <svg
                                                                                className="mx-auto h-12 w-12 text-gray-400"
                                                                                stroke="currentColor"
                                                                                fill="none"
                                                                                viewBox="0 0 48 48"
                                                                                aria-hidden="true"
                                                                            >
                                                                                <path
                                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                                    strokeWidth={
                                                                                        2
                                                                                    }
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                            <div className="flex text-sm text-gray-600">
                                                                                <label
                                                                                    htmlFor="file-upload"
                                                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                                >
                                                                                    <span>
                                                                                        Upload
                                                                                        a
                                                                                        file
                                                                                    </span>
                                                                                    <input
                                                                                        id="file-upload"
                                                                                        name="file-upload"
                                                                                        type="file"
                                                                                        className="sr-only"
                                                                                    />
                                                                                </label>
                                                                                <p className="pl-1">
                                                                                    or
                                                                                    drag
                                                                                    and
                                                                                    drop
                                                                                </p>
                                                                            </div>
                                                                            <p className="text-xs text-accent">
                                                                                PNG,
                                                                                JPG,
                                                                                GIF
                                                                                up
                                                                                to
                                                                                10MB
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                                <button
                                                                    type="submit"
                                                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="drawer-side">
                                            <label
                                                htmlFor="my-drawer-2"
                                                className="drawer-overlay"
                                            />
                                            <ul className="menu p-4 overflow-y-auto sm:w-fit md:w-80 bg-secondary text-base-content">
                                                {/* Sidebar content here */}
                                                <CustomerMenu
                                                    fontTransform={"capitalize"}
                                                    user={user}
                                                    textSize={"text-lg"}
                                                    handleLogOut={handleLogOut}
                                                />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <>
                    <Page404 />
                </>
            )}
        </>
    );
};

export default Profile;

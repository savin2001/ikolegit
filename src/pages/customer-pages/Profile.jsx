import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import PrimaryNavbar from "../../components/navbars/PrimaryNavbar.jsx";
import Page404 from "../PageNotFound.tsx";
import CustomerMenu from "../../components/menus/CustomerMenu.jsx";

import { MdOutlineAddPhotoAlternate } from "react-icons/md";

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
                                                        <div className=" sm:rounded-md sm:overflow-hidden">
                                                            <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                                                                <div className="flex flex-wrap">
                                                                    <h3 className="sm:text-lg md:text-xl font-medium leading-6 text-primary mr-5">
                                                                        My Profile
                                                                    </h3>
                                                                    <p className="mt-1 text-sm text-accent italic">
                                                                        (This information will be displayed publicly
                                                                        so be careful what you share)
                                                                    </p>
                                                                </div>
                                                                <div className="py-5">
                                                                    <div className="border-t border-secondary" />
                                                                </div>

                                                                <div>
                                                                    <label className="block text-md font-medium text-neutral">
                                                                        Photo
                                                                    </label>
                                                                    <div className="mt-1 flex flex-col items-center">
                                                                        <span className="inline-block sm:h-1/4 sm:w-1/3 md:h-1/3 md:w-1/6 rounded-full overflow-hidden bg-secondary hover:shadow-xl">
                                                                            <label htmlFor="profile-pic-modal hover:cursor-pointer">
                                                                                <img
                                                                                    src="https://avatars.dicebear.com/api/adventurer/john.svg"
                                                                                    alt=""
                                                                                />
                                                                            </label>
                                                                        </span>
                                                                        <label
                                                                            htmlFor="profile-pic-modal"
                                                                            className="mt-5 btn btn-outline btn-sm btn-primary rounded-2xl"
                                                                        >
                                                                            Change
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="profile-pic-modal"
                                                                        className="modal-toggle"
                                                                    />
                                                                    <div className="modal">
                                                                        <div className="modal-box">
                                                                            <div>
                                                                                <label className="block text-md font-medium text-neutral">
                                                                                    Cover
                                                                                    photo
                                                                                </label>
                                                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                                                    <div className="space-y-1 text-center">
                                                                                        <MdOutlineAddPhotoAlternate className="mx-auto h-12 w-12 text-accent font-thin" />
                                                                                        
                                                                                        <div className="flex text-sm text-gray-600">
                                                                                            <label
                                                                                                htmlFor="file-upload"
                                                                                                className="relative cursor-pointer bg-base-100 rounded-md font-medium text-primary hover:underline"
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
                                                                            <div className="modal-action flex justify-between uppercase">
                                                                                <label
                                                                                    htmlFor="profile-pic-modal"
                                                                                    className="btn btn-sm btn-outline btn-error rounded-2xl"
                                                                                >
                                                                                    cancel
                                                                                </label>
                                                                                <label
                                                                                    htmlFor="profile-pic-modal"
                                                                                    className="btn btn-sm btn-primary flex rounded-2xl"
                                                                                >
                                                                                    update
                                                                                    photo
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            </div>
                                                            <div className="py-3 bg-base-100 text-center sm:px-6">
                                                                <button
                                                                    type="submit"
                                                                    className="inline-flex justify-center btn btn-sm btn-primary rounded-2xl"
                                                                >
                                                                    Save changes
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

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
                            <div className="w-full relative mt-16 bg-secondary">
                                <div className="max-w-7xl mx-auto mb-9">
                                    <div className="drawer drawer-mobile">
                                        <input
                                            id="my-drawer-2"
                                            type="checkbox"
                                            className="drawer-toggle"
                                        />
                                        <div className="drawer-content flex flex-col p-5">
                                            <div className="md:grid md:grid-cols-3 md:gap-6">
                                                <div className="mt-5 md:mt-0 md:col-span-3">
                                                    <form>
                                                        <div className="shadow-lg sm:rounded-lg sm:overflow-hidden pb-4 mb-8 bg-base-100">
                                                            <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                                                                <div className="flex flex-wrap">
                                                                    <h2 className="sm:text-lg md:text-xl font-bold leading-6 text-primary mr-5">
                                                                        My
                                                                        Profile
                                                                    </h2>
                                                                    <p className="mt-1 text-sm text-accent italic">
                                                                        (This
                                                                        information
                                                                        will be
                                                                        displayed
                                                                        publicly
                                                                        so be
                                                                        careful
                                                                        what you
                                                                        share)
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
                                                    <form>
                                                        <div className="shadow-lg overflow-hidden sm:rounded-lg pb-4 mb-8 bg-base-100">
                                                            <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                                                                <div className="flex flex-wrap">
                                                                    <h3 className="sm:text-md md:text-lg font-bold leading-6 text-primary mr-5">
                                                                        Personal
                                                                        Information
                                                                    </h3>
                                                                    <p className="mt-1 text-sm text-accent italic">
                                                                        (Use a
                                                                        permanent
                                                                        address
                                                                        where
                                                                        you can
                                                                        receive
                                                                        mail or
                                                                        you can
                                                                        use a
                                                                        pickup
                                                                        location
                                                                        during
                                                                        checkout)
                                                                    </p>
                                                                </div>
                                                                <div className="py-5">
                                                                    <div className="border-t border-secondary" />
                                                                </div>
                                                                <div className="grid grid-cols-6 gap-8">
                                                                    <div className="col-span-6 md:col-span-3 relative">
                                                                        <label
                                                                            htmlFor="first_name"
                                                                            className="sr-only"
                                                                        >
                                                                            First
                                                                            name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="first_name"
                                                                            name="firstName"
                                                                            autoComplete="given-name"
                                                                            placeholder="First name"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>

                                                                    <div className="col-span-6 md:col-span-3 relative">
                                                                        <label
                                                                            htmlFor="second_name"
                                                                            className="sr-only"
                                                                        >
                                                                            Second
                                                                            name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="second_name"
                                                                            name="lastName"
                                                                            autoComplete="given-name"
                                                                            placeholder="Last name"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>

                                                                    <div className="col-span-6 md:col-span-3 relative">
                                                                        <label
                                                                            htmlFor="email-address"
                                                                            className="sr-only"
                                                                        >
                                                                            Email
                                                                            address
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="email-address"
                                                                            name="email"
                                                                            autoComplete="given-name"
                                                                            placeholder="Email address"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>
                                                                    <div className="col-span-6 md:col-span-3 relative">
                                                                        <label
                                                                            htmlFor="phone"
                                                                            className="sr-only"
                                                                        >
                                                                            Phone
                                                                            number
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="phone"
                                                                            name="contact"
                                                                            autoComplete="given-name"
                                                                            placeholder="Phone number"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>
                                                                    <div className="col-span-6 md:col-span-3">
                                                                        <label
                                                                            htmlFor="country"
                                                                            className="sr-only"
                                                                        >
                                                                            Country
                                                                        </label>
                                                                        <select
                                                                            id="country"
                                                                            name="country"
                                                                            autoComplete="country-name"
                                                                            className="select select-bordered w-full rounded-full focus:select-primary"
                                                                        >
                                                                            <option
                                                                                disabled
                                                                                defaultValue
                                                                                className="text-accent"
                                                                            >
                                                                                Select
                                                                                country
                                                                            </option>
                                                                            <option>
                                                                                Kenya
                                                                            </option>
                                                                            <option>
                                                                                Nigeria
                                                                            </option>
                                                                            <option>
                                                                                Ghana
                                                                            </option>
                                                                            <option>
                                                                                Uganda
                                                                            </option>
                                                                            <option>
                                                                                Tanzania
                                                                            </option>
                                                                            <option>
                                                                                South
                                                                                Africa
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                    <div className="col-span-6  md:col-span-3">
                                                                        <label
                                                                            htmlFor="street-address"
                                                                            className="sr-only"
                                                                        >
                                                                            Street
                                                                            address
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="street-address"
                                                                            id="street-address"
                                                                            autoComplete="street-address"
                                                                            placeholder="Street address"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>
                                                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                                        <label
                                                                            htmlFor="city"
                                                                            className="sr-only"
                                                                        >
                                                                            City
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="city"
                                                                            id="city"
                                                                            autoComplete="address-level2"
                                                                            placeholder="Street address"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                        <label
                                                                            htmlFor="region"
                                                                            className="sr-only"
                                                                        >
                                                                            State
                                                                            /
                                                                            Province
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="region"
                                                                            id="region"
                                                                            autoComplete="address-level1"
                                                                            placeholder="State / Province"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>

                                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                                        <label
                                                                            htmlFor="postal-code"
                                                                            className="sr-only"
                                                                        >
                                                                            ZIP
                                                                            /
                                                                            Postal
                                                                            code
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="postal-code"
                                                                            id="postal-code"
                                                                            placeholder="ZIP / Postal code"
                                                                            className="input input-bordered input-neutral w-full rounded-full focus:input-primary"
                                                                        />
                                                                    </div>
                                                                </div>
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
                                                    <form>
                                                        <div className="shadow-lg sm:rounded-lg sm:overflow-hidden pb-4 mb-8 bg-base-100">
                                                            <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                                                                <div className="flex flex-wrap">
                                                                    <h3 className="sm:text-md md:text-lg font-bold leading-6 text-primary mr-5">
                                                                        Notifications
                                                                    </h3>
                                                                    <p className="mt-1 text-sm text-accent italic">
                                                                        (Decide
                                                                        which
                                                                        communications
                                                                        you'd
                                                                        like to
                                                                        receive
                                                                        and how)
                                                                    </p>
                                                                </div>
                                                                <div className="py-5">
                                                                    <div className="border-t border-secondary" />
                                                                </div>
                                                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                                    <fieldset>
                                                                        <legend className="sr-only">
                                                                            By
                                                                            Email
                                                                        </legend>
                                                                        <div
                                                                            className="text-base font-medium text-gray-900"
                                                                            aria-hidden="true"
                                                                        >
                                                                            By
                                                                            Email
                                                                        </div>
                                                                        <div className="mt-4 space-y-4">
                                                                            <div className="flex items-start">
                                                                                <div className="flex items-center h-5">
                                                                                    <input
                                                                                        id="comments"
                                                                                        name="comments"
                                                                                        type="checkbox"
                                                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                                    />
                                                                                </div>
                                                                                <div className="ml-3 text-sm">
                                                                                    <label
                                                                                        htmlFor="comments"
                                                                                        className="font-medium text-gray-700"
                                                                                    >
                                                                                        Comments
                                                                                    </label>
                                                                                    <p className="text-gray-500">
                                                                                        Get
                                                                                        notified
                                                                                        when
                                                                                        someones
                                                                                        posts
                                                                                        a
                                                                                        comment
                                                                                        on
                                                                                        a
                                                                                        posting.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex items-start">
                                                                                <div className="flex items-center h-5">
                                                                                    <input
                                                                                        id="candidates"
                                                                                        name="candidates"
                                                                                        type="checkbox"
                                                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                                    />
                                                                                </div>
                                                                                <div className="ml-3 text-sm">
                                                                                    <label
                                                                                        htmlFor="candidates"
                                                                                        className="font-medium text-gray-700"
                                                                                    >
                                                                                        Candidates
                                                                                    </label>
                                                                                    <p className="text-gray-500">
                                                                                        Get
                                                                                        notified
                                                                                        when
                                                                                        a
                                                                                        candidate
                                                                                        applies
                                                                                        htmlFor
                                                                                        a
                                                                                        job.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex items-start">
                                                                                <div className="flex items-center h-5">
                                                                                    <input
                                                                                        id="offers"
                                                                                        name="offers"
                                                                                        type="checkbox"
                                                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                                                    />
                                                                                </div>
                                                                                <div className="ml-3 text-sm">
                                                                                    <label
                                                                                        htmlFor="offers"
                                                                                        className="font-medium text-gray-700"
                                                                                    >
                                                                                        Offers
                                                                                    </label>
                                                                                    <p className="text-gray-500">
                                                                                        Get
                                                                                        notified
                                                                                        when
                                                                                        a
                                                                                        candidate
                                                                                        accepts
                                                                                        or
                                                                                        rejects
                                                                                        an
                                                                                        offer.
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </fieldset>
                                                                    <fieldset>
                                                                        <legend className="contents text-base font-medium text-gray-900">
                                                                            Push
                                                                            Notifications
                                                                        </legend>
                                                                        <p className="text-sm text-gray-500">
                                                                            These
                                                                            are
                                                                            delivered
                                                                            via
                                                                            SMS
                                                                            to
                                                                            your
                                                                            mobile
                                                                            phone.
                                                                        </p>
                                                                        <div className="mt-4 space-y-4">
                                                                            <div className="flex items-center">
                                                                                <input
                                                                                    id="push-everything"
                                                                                    name="push-notifications"
                                                                                    type="radio"
                                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                                />
                                                                                <label
                                                                                    htmlFor="push-everything"
                                                                                    className="ml-3 block text-sm font-medium text-gray-700"
                                                                                >
                                                                                    {" "}
                                                                                    Everything{" "}
                                                                                </label>
                                                                            </div>
                                                                            <div className="flex items-center">
                                                                                <input
                                                                                    id="push-email"
                                                                                    name="push-notifications"
                                                                                    type="radio"
                                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                                />
                                                                                <label
                                                                                    htmlFor="push-email"
                                                                                    className="ml-3 block text-sm font-medium text-gray-700"
                                                                                >
                                                                                    {" "}
                                                                                    Same
                                                                                    as
                                                                                    email{" "}
                                                                                </label>
                                                                            </div>
                                                                            <div className="flex items-center">
                                                                                <input
                                                                                    id="push-nothing"
                                                                                    name="push-notifications"
                                                                                    type="radio"
                                                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                                />
                                                                                <label
                                                                                    htmlFor="push-nothing"
                                                                                    className="ml-3 block text-sm font-medium text-gray-700"
                                                                                >
                                                                                    {" "}
                                                                                    No
                                                                                    push
                                                                                    notifications{" "}
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
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
                                            <ul className="menu p-4 overflow-y-auto sm:w-fit md:w-80 text-base-content sticky">
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

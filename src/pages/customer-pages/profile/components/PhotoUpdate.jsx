import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const PhotoUpdate = () => {
    return (
        <form>
            <div className="shadow-lg sm:rounded-lg sm:overflow-hidden pb-4 mb-8 bg-base-100">
                <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                    <div className="flex flex-wrap">
                        <h2 className="sm:text-lg md:text-xl font-bold leading-6 text-primary mr-5">
                            My Profile
                        </h2>
                        <p className="mt-1 text-sm text-accent italic">
                            (This information will be displayed publicly so be
                            careful what you share)
                        </p>
                    </div>
                    <div className="py-3">
                        <div className="border-t border-secondary" />
                    </div>

                    <div>
                        <label className="block text-md font-semibold text-neutral">
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
                                    <label className="block text-md font-semibold text-neutral">
                                        Cover photo
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <MdOutlineAddPhotoAlternate className="mx-auto h-12 w-12 text-accent font-thin" />

                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-base-100 rounded-md font-medium text-primary hover:underline"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag and drop
                                                </p>
                                            </div>
                                            <p className="text-xs text-accent">
                                                PNG, JPG, GIF up to 10MB
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
                                        update photo
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
    );
};

export default PhotoUpdate;

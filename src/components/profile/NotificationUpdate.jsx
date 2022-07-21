const NotificationUpdate = () => {
    return (
        <form>
            <div className="shadow-lg sm:rounded-lg sm:overflow-hidden pb-4 mb-8 bg-base-100">
                <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                    <div className="flex flex-wrap">
                        <h3 className="sm:text-md md:text-lg font-bold leading-6 text-primary mr-5">
                            Notifications
                        </h3>
                        <p className="mt-1 text-sm text-accent italic">
                            (Decide which communications you'd like to receive
                            and how)
                        </p>
                    </div>
                    <div className="py-3">
                        <div className="border-t border-secondary" />
                    </div>
                    <div className="px-4 py-2 bg-base-100 space-y-6 sm:p-6">
                        <fieldset>
                            <legend className="sr-only">By Email</legend>
                            <div
                                className="text-base font-semibold text-neutral"
                                aria-hidden="true"
                            >
                                By Email
                            </div>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="orders"
                                            name="orders"
                                            type="checkbox"
                                            className="checkbox checkbox-primary"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="orders"
                                            className="font-medium text-neutral"
                                        >
                                            Orders
                                        </label>
                                        <p className="text-accent">
                                            Get notified when you complete your
                                            ordering process.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="delivery"
                                            name="delivery"
                                            type="checkbox"
                                            className="checkbox checkbox-primary"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="delivery"
                                            className="font-medium text-neutral"
                                        >
                                            Delivery
                                        </label>
                                        <p className="text-accent">
                                            Get notified when your order is
                                            delivered.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="message"
                                            name="message"
                                            type="checkbox"
                                            className="checkbox checkbox-primary"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="message"
                                            className="font-medium text-neutral"
                                        >
                                            Messages
                                        </label>
                                        <p className="text-accent">
                                            Get notified when you receive a
                                            message.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="contents text-base font-semibold text-neutral">
                                Push Notifications
                            </legend>
                            <p className="text-sm text-accent">
                                These are delivered via SMS to your mobile
                                phone.
                            </p>
                            <div className="mt-4 space-y-4">
                                <div className="flex items-center">
                                    <input
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="radio radio-primary"
                                    />
                                    <label
                                        htmlFor="push-everything"
                                        className="ml-3 block text-sm font-medium text-neutral"
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
                                        className="radio radio-primary"
                                    />
                                    <label
                                        htmlFor="push-email"
                                        className="ml-3 block text-sm font-medium text-neutral"
                                    >
                                        {" "}
                                        Same as email{" "}
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="push-nothing"
                                        name="push-notifications"
                                        type="radio"
                                        className="radio radio-primary"
                                    />
                                    <label
                                        htmlFor="push-nothing"
                                        className="ml-3 block text-sm font-medium text-neutral"
                                    >
                                        {" "}
                                        No push notifications{" "}
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
    );
};

export default NotificationUpdate;

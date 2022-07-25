const DetailsUpdate = () => {
    return (
        <form>
            <div className="shadow-lg overflow-hidden sm:rounded-lg pb-4 mb-8 bg-base-100">
                <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                    <div className="flex flex-wrap">
                        <h3 className="sm:text-md md:text-lg font-bold leading-6 text-primary mr-5">
                            Personal Information
                        </h3>
                        <p className="mt-1 text-sm text-accent italic">
                            (Use a permanent address where you can receive mail
                            or you can use a pickup location during checkout)
                        </p>
                    </div>
                    <div className="py-3">
                        <div className="border-t border-secondary" />
                    </div>
                    <div className="grid grid-cols-6 gap-8">
                        <div className="col-span-6 md:col-span-3 relative">
                            <label htmlFor="first_name" className="sr-only">
                                First name
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
                            <label htmlFor="second_name" className="sr-only">
                                Second name
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
                            <label htmlFor="email-address" className="sr-only">
                                Email address
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
                            <label htmlFor="phone" className="sr-only">
                                Phone number
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
                            <label htmlFor="country" className="sr-only">
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
                                    Select country
                                </option>
                                <option>Kenya</option>
                                <option>Nigeria</option>
                                <option>Ghana</option>
                                <option>Uganda</option>
                                <option>Tanzania</option>
                                <option>South Africa</option>
                            </select>
                        </div>
                        <div className="col-span-6  md:col-span-3">
                            <label htmlFor="street-address" className="sr-only">
                                Street address
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
                            <label htmlFor="city" className="sr-only">
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
                            <label htmlFor="region" className="sr-only">
                                State / Province
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
                            <label htmlFor="postal-code" className="sr-only">
                                ZIP / Postal code
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
                <div className="flex w-full justify-center">
                    <label
                        htmlFor="profile-details-modal"
                        className="mt-5 btn btn-outline btn-sm btn-primary rounded-2xl"
                    >
                        Change
                    </label>
                </div>
                <>
                    <input
                        type="checkbox"
                        id="profile-details-modal"
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box">
                            <div className="details">
                                <div className="grid grid-cols-6 gap-8">
                                    <div className="col-span-6 md:col-span-3 relative">
                                        <label
                                            htmlFor="first_name"
                                            className="sr-only"
                                        >
                                            First name
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
                                            Second name
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
                                            Email address
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
                                            Phone number
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
                                                Select country
                                            </option>
                                            <option>Kenya</option>
                                            <option>Nigeria</option>
                                            <option>Ghana</option>
                                            <option>Uganda</option>
                                            <option>Tanzania</option>
                                            <option>South Africa</option>
                                        </select>
                                    </div>
                                    <div className="col-span-6  md:col-span-3">
                                        <label
                                            htmlFor="street-address"
                                            className="sr-only"
                                        >
                                            Street address
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
                                            State / Province
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
                                            ZIP / Postal code
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
                            <div className="modal-action flex justify-between uppercase">
                                <label
                                    htmlFor="profile-details-modal"
                                    className="btn btn-sm btn-outline btn-error rounded-2xl"
                                >
                                    cancel
                                </label>
                                <label
                                    htmlFor="profile-details-modal"
                                    className="btn btn-sm btn-primary flex rounded-2xl"
                                >
                                    update details
                                </label>
                            </div>
                        </div>
                    </div>
                </>

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

export default DetailsUpdate;

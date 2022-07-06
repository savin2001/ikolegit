import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="container mx-auto pt-36  w-screen">
            <div className="container mx-auto text-center">
                <h1 className="">404 Error Page</h1>
                <p className="zoom-area">
                    <b>Oopsie!</b> seems you are a little lost.
                </p>
                <section className="error-container">
                    <span className="four">
                        <span className="screen-reader-text ">4</span>
                    </span>
                    <span className="zero">
                        <span className="screen-reader-text">0</span>
                    </span>
                    <span className="four">
                        <span className="screen-reader-text">4</span>
                    </span>
                </section>
                <div className="link-container w-screen text-center">
                    <Link to="/" className="more-link btn btn-active border-none bg-primary hover:bg-base-100 hover:border-2 hover:border-primary hover:text-primary p-4 rounded-full text-base-100 animate-pulse">
                        Get back to main page
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;

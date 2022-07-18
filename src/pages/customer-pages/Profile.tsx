import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import PrimaryNavbar from "../../components/navbars/PrimaryNavbar.jsx";

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("accessToken") || "{}");
    const handleLogOut = (e: { preventDefault: () => any }) => {
        e && e.preventDefault();
        setLoading(true);
        localStorage.removeItem("accessToken");
        setLoading(false);
        navigate("/");
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
                            <div>My profile</div>
                            <button onClick={handleLogOut}>Log out</button>
                        </>
                    )}
                </>
            ) : (
                <>user not logged in</>
            )}
        </>
    );
};

export default Profile;

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import PrimaryNavbar from "../../components/navbars/PrimaryNavbar.jsx";
import Page404 from "../PageNotFound.tsx";
import CustomerMenu from "../../components/menus/CustomerMenu.jsx";

const OrderView = () => {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { orderId } = useParams();

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
            <>
              <div className="shadow-xl p-10 h-96 max-h-screen">
                <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center">
                  Logging out user...
                </h3>

                <div className="flex justify-center items-center h-3/4">
                  <FaSpinner className="h-1/4 w-1/4 text-primary animate-spin" />
                </div>
              </div>
            </>
          ) : (
            <>
              <PrimaryNavbar />
              <div className="w-full relative mt-16 bg-secondary">
                <div className="max-w-7xl mx-auto">
                  <div className="drawer drawer-mobile">
                    <input
                      id="my-drawer-2"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content flex flex-col p-5">
                      <div className="shadow-lg sm:rounded-lg sm:overflow-hidden pb-4 mb-8 bg-base-100">
                        <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                          <div className="flex flex-wrap">
                            <h2 className="sm:text-lg md:text-xl font-bold leading-6 text-primary mr-5">
                              Order Details
                            </h2>
                          </div>
                          <div className="py-1">
                            <div className="border-t border-secondary" />
                          </div>
                          <div className="mt-3">
                            <div
                              className="text-base font-semibold text-neutral"
                              aria-hidden="true"
                            >
                              Order number {orderId}
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="drawer-side">
                      <label htmlFor="my-drawer-2" className="drawer-overlay" />
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

export default OrderView;

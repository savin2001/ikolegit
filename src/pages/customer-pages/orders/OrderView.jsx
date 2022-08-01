import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";

import PrimaryNavbar from "../../../components/navbar/PrimaryNavbar.jsx";
import Page404 from "../../PageNotFound.tsx";
import CustomerMenu from "../components/menus/CustomerMenu.jsx";

const OrderView = () => {
  const items = 2;
  const [loading, setLoading] = useState(false);
  const [dateState, setDateState] = useState(new Date());
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
              <main className="w-full relative mt-16 bg-secondary">
                <div className="max-w-7xl mx-auto">
                  <div className="drawer drawer-mobile">
                    <input
                      id="my-drawer-2"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content flex flex-col p-5">
                      <div className="shadow-lg sm:rounded-lg pb-4 mb-8 bg-base-100">
                        <div className="px-4 py-5 bg-base-100 space-y-6 sm:p-6">
                          <div className="flex flex-nowrap items-center">
                            <Link
                              to={`/my-orders/${user}`}
                              className="text-accent hover:text-primary"
                            >
                              <BiArrowBack className="h-5 w-5 mr-5" />
                            </Link>
                            <h2 className="sm:text-lg md:text-xl font-bold leading-6 text-primary mr-5">
                              Order Details
                            </h2>
                          </div>
                          <div className="py-1">
                            <div className="border-t border-secondary" />
                          </div>
                          <div className="mt-3">
                            <div
                              className="text-base font-semibold text-neutral mb-2"
                              aria-hidden="true"
                            >
                              Order nº {orderId}
                            </div>
                            <div className="flex flex-col text-accent justify-between">
                              <p className="mb-2">{items} items</p>
                              <p className="mb-2">
                                {dateState.toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </p>
                              <p className="text-md font-semibold">
                                Total:{" "}
                                <span className="text-primary">$ 500</span>{" "}
                              </p>
                            </div>
                            <div className="py-5">
                              <div className="border-t border-secondary" />
                            </div>
                            <div
                              tabIndex={0}
                              className="block p-2 collapse collapse-arrow md:collapse-open border border-secondary rounded-box mb-3"
                            >
                              <h3 className="collapse-title font-semibold capitalize">
                                Products in your order
                              </h3>
                              <ul
                                role="list"
                                className="collapse-content divide-y divide-gray-200"
                              >
                                {Array.from(Array(items)).map((_, index) => (
                                  <li
                                    key={index}
                                    className="relative flex sm:flex-col justify-between md:flex-row py-6"
                                  >
                                    <div className="flex">
                                      <div className="h-32 w-32 flex-shrink-0 overflow-hidden flex justify-center items-center rounded-md border">
                                        <img
                                          src="https://m.media-amazon.com/images/I/717KHGCJ6eL._AC_SL1500_.jpg"
                                          alt="iPhone XR, 64GB, Black"
                                          className="h-fit w-fit object-cover object-center m-auto"
                                        />
                                      </div>
                                      <div className="ml-4 flex flex-1 flex-col">
                                        <div className="flex justify-between text-base font-medium text-neutral">
                                          <h3 className="text-sm font-medium leading-5">
                                            iPhone XR, 64GB, Black
                                          </h3>
                                        </div>
                                        <div className="flex flex-1 justify-between items-center text-sm mt-2">
                                          <div className="flex flex-col justify-around">
                                            <div className="badge badge-success">
                                              <p>delivered</p>
                                            </div>
                                            <p className="text-xs mt-2 font-thin text-accent">
                                              <span>
                                                on{" "}
                                                {dateState.toLocaleDateString(
                                                  "en-GB",
                                                  {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                  }
                                                )}
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mt-4 flex md:flex-col space-x-1 text-xs font-normal leading-4 justify-around">
                                      <p className="btn btn-sm btn-primary text-right uppercase sm:mb-3">
                                        Buy again
                                      </p>
                                      <p className="btn btn-sm btn-outline btn-primary text-right pr-2 uppercase">
                                        check history
                                      </p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex sm:flex-col md:flex-row justify-around">
                              <div
                                tabIndex={0}
                                className="collapse collapse-arrow md:collapse-open border border-secondary rounded-box sm:mb-3 md:mr-2 flex-1"
                              >
                                <h3 className="collapse-title font-semibold capitalize ">
                                  Delivery details
                                </h3>
                                <div className="collapse-content text-sm">
                                  <div className="mb-3">
                                    <h4 className="text-sm font-bold mb-2 capitalize">
                                      Delivery method
                                    </h4>
                                    <p className="text-neutral">
                                      Delivery at a Pick-up Station
                                    </p>
                                  </div>
                                  <div className="mb-2">
                                    <h4 className="text-sm font-bold mb-2 capitalize">
                                      Pick-up location
                                    </h4>
                                    <div className="text-neutral">
                                      <p>Shell Kenyatta Avenue PUS </p>
                                      <p>
                                        Kenyatta Avenue Shell Petrol Station
                                        Opposite GPO
                                      </p>
                                      <p>
                                        CBD - GPO/City Market/Nation Centre,
                                      </p>
                                      <p>Nairobi</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                tabIndex={0}
                                className="collapse collapse-arrow md:collapse-open border border-secondary rounded-box sm:mb-3 md:ml-2 flex-1"
                              >
                                <h3 className="collapse-title font-semibold capitalize">
                                  Payment details
                                </h3>
                                <div className="collapse-content text-sm">
                                  <div className="mb-2">
                                    <h4 className="text-sm font-bold mb-2 capitalize">
                                      Payment method
                                    </h4>
                                    <p className="text-neutral">Card payment</p>
                                  </div>
                                  <div className="mb-2">
                                    <h4 className="text-sm font-bold mb-2 capitalize">
                                      Payment information
                                    </h4>
                                    <div className="text-neutral capitalize">
                                      <p>Items Total: $ 500</p>
                                      <p>Shipping Fees: $ 20</p>
                                      <p>Promotional Discount: $ 20</p>
                                      <p>
                                        Total:{" "}
                                        <span className="text-primary">
                                          $ 500
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
              </main>
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

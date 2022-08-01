import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const OrdersTabs = ({ user }) => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  let [categories] = useState({
    Open: [
      {
        id: 264357474,
        imgUrl:
          "https://m.media-amazon.com/images/I/717KHGCJ6eL._AC_SL1500_.jpg",
        title: "iPhone XR, 64GB, Black",
        date: "5h ago",
        status: true,
        orderDate: 2,
      },
      {
        id: 256464537,
        imgUrl:
          "https://m.media-amazon.com/images/I/71IyteItZhL._AC_SL1500_.jpg",
        title: "Computer Intel Core-i5",
        date: "2h ago",
        status: true,
        orderDate: 2,
      },
    ],
    Closed: [
      {
        id: 1745676576,
        imgUrl:
          "https://m.media-amazon.com/images/I/81OoaPmgzQL._AC_UL320_.jpg",
        title: "SkyTech Shadow 3.0 Gaming Computer",
        date: "Jan 7",
        status: false,
        orderDate: 16,
      },
      {
        id: 2967456774,
        imgUrl:
          "https://m.media-amazon.com/images/I/61mko8+Uf6L._AC_SL1500_.jpg",
        title: "EVGA Z12 RGB Gaming Keyboard",
        date: "Mar 19",
        status: false,
        orderDate: 12,
      },
    ],
  });

  return (
    <div className="w-full max-w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex w-full max-w-sm space-x-1 rounded-xl bg-base-100 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "flex-auto py-2.5 text-sm font-semibold leading-5 max-w-xs uppercase",
                  selected
                    ? "text-primary border-b-2 border-primary"
                    : "text-neutral hover:text-accent"
                )
              }
            >
              {category} ({Object.values(categories).length})
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl bg-base-100 p-3")}
            >
              <ul role="list" className=" divide-y divide-gray-200">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative flex sm:flex-col justify-between md:flex-row py-6"
                  >
                    <div className="flex">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden flex justify-center items-center rounded-md border">
                        <img
                          src={post.imgUrl}
                          alt={post.title}
                          className="h-fit w-fit object-cover object-center m-auto"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-neutral">
                          <h3 className="text-sm font-medium leading-5">
                            Order nº {post.id}
                          </h3>
                        </div>
                        <div className="flex flex-1 justify-between items-center text-sm mt-2">
                          <div className="flex flex-col justify-around">
                            {post.status ? (
                              <div className="badge badge-success">
                                <p>delivered</p>
                              </div>
                            ) : (
                              <div className="badge badge-error text-base-100">
                                <p>cancelled</p>
                              </div>
                            )}
                            <p className="text-xs mt-2 font-thin text-accent">
                              <span>
                                {dateState.toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/my-orders/${user}/${post.id}`}
                      className="mt-4 flex space-x-1 text-xs font-normal"
                    >
                      <p className="text-primary text-center uppercase hover:text-accent hover:font-bold">
                        view order details
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default OrdersTabs;

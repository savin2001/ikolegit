import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const OrdersTabs = () => {
  let [categories] = useState({
    Open: [
      {
        id: 1,
        imgUrl:
          "https://m.media-amazon.com/images/I/717KHGCJ6eL._AC_SL1500_.jpg",
        title: "iPhone XR, 64GB, Black",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        imgUrl:
          "https://m.media-amazon.com/images/I/71IyteItZhL._AC_SL1500_.jpg",
        title: "Computer Intel Core-i5",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Closed: [
      {
        id: 1,
        imgUrl:
          "https://m.media-amazon.com/images/I/81OoaPmgzQL._AC_UL320_.jpg",
        title: "SkyTech Shadow 3.0 Gaming Computer",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        imgUrl:
          "https://m.media-amazon.com/images/I/61mko8+Uf6L._AC_SL1500_.jpg",
        title: "EVGA Z12 RGB Gaming Keyboard",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full max-w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex w-full space-x-1 rounded-xl bg-secondary p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "flex-1 rounded-lg py-2.5 text-sm font-medium leading-5",
                  selected ? "btn btn-primary" : "btn btn-ghost text-primary"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl bg-white p-3")}
            >
              <ul role="list" className=" divide-y divide-gray-200">
                {posts.map((post) => (
                  <li key={post.id} className="flex py-6">
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
                          {post.title}
                        </h3>
                      </div>
                      <div className="flex flex-1 justify-between items-center text-sm mt-2">
                        <div className="text-accent flex justify-start"></div>
                      </div>
                    </div>

                    <Link to={`/my-orders/${user}/${orderId}`} className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      
                    </Link>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
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

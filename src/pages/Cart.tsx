import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import PrimaryNavbar from "../components/navbars/PrimaryNavbar.jsx";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <PrimaryNavbar />
        <div className="w-full relative mt-16 h-screen flex flex-col justify-center items-center">
          <div className="max-w-7xl mx-auto mb-9  text-center">
            <h1 className="mt-8 mb-4 text-primary sm:text-2xl lg:text-3xl">
              Your cart is empty
            </h1>
            <p className=" mb-5">
              <b>Oopsie!</b> No products found in your cart.
            </p>
            <div className="link-container text-center mb-3">
              <Link
                to="/"
                className="more-link btn btn-active border-none bg-primary hover:bg-base-100 hover:border-2 hover:border-primary hover:text-primary p-4 rounded-full text-base-100 animate-pulse"
              >
                Get back to shopping
              </Link>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <PrimaryNavbar />
      <div className="w-full relative mt-16">
        <div className="max-w-7xl mx-auto mb-9">
          <div className="px-4">
            <div className="pt-6 m-3">
              <div className=" md:text-sm sm:text-2xs breadcrumbs capitalize">
                <ul>
                  <li>
                    <Link to={`/`}>Home</Link>
                  </li>
                  <li>your cart</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-4 mb-4">
            <h1 className="mt-8 mb-4 text-primary sm:text-2xl lg:text-3xl">
              Cart Items ({totalUniqueItems})
            </h1>

            <ul role="list" className=" divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <Link
                    to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                  >
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden flex justify-center items-center rounded-md border">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-fit w-fit object-cover object-center m-auto"
                      />
                    </div>
                  </Link>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-neutral">
                        <Link
                          to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                        >
                          <h3>{item.name}</h3>
                        </Link>
                      </div>
                      <div className="flex flex-1 justify-between items-center text-sm mt-2">
                        <div className="text-accent flex justify-start">
                          <p className="text-primary text-left pr-2">
                            $ {item.price}
                          </p>
                          <span>&times;</span>
                          {item.quantity}
                        </div>
                        <div>
                          {items
                            .filter((i) => i.id === item.id)
                            .map((p) => (
                              <div className="form-control w-full" key={p.id}>
                                <label className="input-group lg:input-group-lg md:justify-start sm:justify-center">
                                  <button
                                    className="btn-sm text-lg btn-outline btn-primary flex justify-center items-center  rounded-l-full text-base-100 hover:border-2  hover:bg-base-100 hover:text-primary"
                                    onClick={() =>
                                      updateItemQuantity(p.id, p.quantity! - 1)
                                    }
                                  >
                                    -
                                  </button>
                                  <span className=" bg-base-100 flex justify-center items-center">
                                    {p.quantity}
                                  </span>
                                  <button
                                    className="btn-sm text-lg btn-outline btn-primary flex justify-center items-center  rounded-r-full text-base-100 hover:border-2  hover:bg-base-100 hover:text-primary"
                                    onClick={() =>
                                      updateItemQuantity(p.id, p.quantity! + 1)
                                    }
                                  >
                                    +
                                  </button>
                                </label>
                              </div>
                            ))}
                        </div>
                        <div className="flex">
                          <button
                            onClick={() => removeItem(item.id)}
                            type="button"
                            className="font-medium btn btn-outline btn-error"
                          >
                            <AiOutlineDelete className=" h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 mb-4">
            <div className="border-t border-base-100 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p className="text-primary">$ {cartTotal}</p>
              </div>
              <p className="mt-0.5 text-sm text-accent">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="mt-6 w-full">
                <label
                  htmlFor="contract-modal"
                  className="flex mx-auto uppercase items-center md:max-w-sm justify-center rounded-2xl border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary"
                >
                  sign contract
                </label>
              </div>
              <>
                <input
                  type="checkbox"
                  id="contract-modal"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box">
                    <h2 className="font-bold sm:text-base md:text-xl">
                      Sign contract with{" "}
                      <i className="text-primary not-italic">
                        Service providers
                      </i>
                    </h2>
                    <p className="py-4 italic">
                      Signing the contract is legally binding between the buyer
                      and the seller upon purchasing products using our
                      platform.
                    </p>
                    <h3 className="font-bold sm:text-base md:text-xl">
                      By clicking sign contract you confirm the following
                    </h3>
                    <ul className="list menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
                      {Array.from(Array(3)).map((_, index) => (
                        <li className="disabled" key={index}>
                          <p className="text-neutral">
                            Rule {index + 1}: Lorem ipsum dolor sit amet
                            consectetur.
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="modal-action flex justify-between uppercase">
                      <label
                        htmlFor="contract-modal"
                        className="btn md:btn-md lg:btn-lg btn-outline btn-primary flex-auto rounded-2xl"
                      >
                        cancel
                      </label>
                      <label
                        htmlFor="contract-modal"
                        className="btn md:btn-md lg:btn-lg btn-primary flex-auto rounded-2xl"
                      >
                        sign contract
                      </label>
                    </div>
                  </div>
                </div>
              </>
              <div className="mt-6 flex justify-center text-center text-sm text-accent">
                <p>
                  or{" "}
                  <Link
                    to="/"
                    className="font-medium text-primary hover:text-primary"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

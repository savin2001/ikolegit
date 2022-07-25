import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const SpecialProducts = ({ products }) => {
  const { addItem, updateItemQuantity, items, inCart } = useCart();
  return (
    <>
      <div className="mx-auto sm:hidden md:block lg:block">
        {products.length > 0 && (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {products.slice(0, 4).map((item) => {
              const alreadyAdded = inCart(item.id);
              return (
                <div
                  className="card w-fit h-fit bg-base-100 shadow-xl m-5"
                  key={item.id}
                >
                  <Link
                    to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                  >
                    <figure>
                      <img src={item.imageUrl} alt="product" />
                    </figure>
                  </Link>
                  <div className="card-body">
                    <Link
                      to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                    >
                      <div className="card-title text-base">
                        {item.name}
                        <div className="badge badge-primary sm:hidden lg:block">
                          NEW
                        </div>
                      </div>

                      <div className="rating md:rating-sm sm:rating-xs ">
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-primary"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-primary"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-primary"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-primary"
                        />
                        <input
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-primary"
                        />
                      </div>
                      <p className="mt-2 text-primary font-bold">
                        $ {item.price}
                      </p>
                    </Link>
                    <div className="card-actions">
                      {alreadyAdded ? (
                        <>
                          {items
                            .filter((i) => i.id === item.id)
                            .map((p) => (
                              <div className="form-control w-full" key={p.id}>
                                <label className="input-group input-group-sm">
                                  <span
                                    className=" w-full flex justify-center items-center bg-primary rounded-l-full text-base-100 hover:border-2 shadow-md hover:bg-base-100 hover:text-primary"
                                    onClick={() =>
                                      updateItemQuantity(p.id, p.quantity - 1)
                                    }
                                  >
                                    -
                                  </span>
                                  <span className=" w-full flex justify-center items-center">
                                    {p.quantity}
                                  </span>
                                  <span
                                    className=" w-full flex justify-center items-center bg-primary rounded-r-full text-base-100 hover:border-2 shadow-md hover:bg-base-100 hover:text-primary"
                                    onClick={() =>
                                      updateItemQuantity(p.id, p.quantity + 1)
                                    }
                                  >
                                    +
                                  </span>
                                </label>
                              </div>
                            ))}
                        </>
                      ) : (
                        <button
                          className="btn w-full btn-primary text-sm rounded-xl btn-sm"
                          onClick={() => addItem(item)}
                        >
                          Add to cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SpecialProducts;

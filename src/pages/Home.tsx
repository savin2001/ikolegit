import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

import useFetch from "../components/axios-custom-hooks/useFetch.js";
import PrimaryNavbar from "../components/navbars/PrimaryNavbar.jsx";
import ProductsLoading from "../components/loading/ProductsLoading.jsx";
import CarouselLoading from "../components/loading/CarouselLoading.jsx";
import HeaderLoading from "../components/loading/HeaderLoading.jsx";
import ProductsError from "../components/error/ProductsError.jsx";
import HeaderProductList from "../components/products/HeaderProductList.jsx";
import CarouselProducts from "../components/products/CarouselProducts.jsx";
import SpecialProducts from "../components/products/SpecialProducts.jsx";
import CategoryProducts from "../components/products/CategoryProducts.jsx";

import { AiOutlineMenu } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { response, loading, error } = useFetch({
    method: "get",
    url: "/category/list",
  });
  const {
    response: isProduct,
    loading: isLoading,
    error: isError,
  } = useFetch({
    method: "get",
    url: "/product/",
  });
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  // Fetching categories from the api

  useEffect(() => {
    if (response !== null) {
      setCategories(response);
    }
  }, [response]);
  useEffect(() => {
    if (isProduct !== null) {
      setProducts(isProduct);
    }
  }, [isProduct]);

  return (
    <>
      <PrimaryNavbar />
      {/* Landing section */}
      <header className="mt-36 w-full mb-9">
        {isLoading ? (
          <>
            <HeaderLoading />
          </>
        ) : (
          <>
            <ProductsError isError={isError} />
            <HeaderProductList products={products} />
          </>
        )}
      </header>

      <main className="w-full relative">
        <div className="max-w-7xl mx-auto">
          <div className="divider"></div>
        </div>
        {/* special for you section */}
        <div className="max-w-7xl mx-auto py-4  px-6">
          {isLoading ? (
            <>
              <CarouselLoading
                sectionTitle={"Caurousel will load in a few..."}
              />
            </>
          ) : (
            <>
              <ProductsError isError={isError} />
              <CarouselProducts products={products} />
            </>
          )}

          {isLoading ? (
            <div>
              <ProductsLoading
                sectionTitle={"Products will load in a few..."}
              />
            </div>
          ) : (
            <>
              <ProductsError isError={error} />
              <SpecialProducts products={products} />
            </>
          )}
        </div>

        {/* products category section */}
        {loading ? (
          <div>
            <ProductsLoading sectionTitle={"Wait a moment..."} />
          </div>
        ) : (
          <>
            <ProductsError isError={error} />
            <div className="w-full bg-secondary  pb-4 pt-2">
              <div className="max-w-7xl mx-auto">
                <div className="flex  mt-6 relative">
                  <div className="drawer lg:grid md:grid sm:hidden">
                    <input
                      id="my-drawer"
                      type="checkbox"
                      className="drawer-toggle"
                    />
                    <div className="drawer-content relative">
                      <div className=" flex justify-start sticky top-6 left-0 z-50 ">
                        <label
                          htmlFor="my-drawer"
                          className="btn btn-primary flex relative justify-between text-white rounded-xl btn-md sm:btn-sm drawer-button"
                        >
                          <AiOutlineMenu className="h-5 w-5 hover rounded-xl" />
                        </label>
                      </div>
                      <div className="">
                        {categories && (
                          <>
                            {categories.map((cat) => (
                              <div id={cat.id} key={cat.id}>
                                <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center capitalize">
                                  {cat.categoryName}
                                </h3>
                                {isLoading ? (
                                  <div className="mt-9 lg:text-sm sm:text-xs text-primary pb-6 text-center">
                                    <span className="flex justify-center">
                                      <FaSpinner className="h-8 w-8 animate-spin" />
                                      <span className="ml-6 text-neutral">
                                        Loading items...
                                      </span>
                                    </span>
                                  </div>
                                ) : (
                                  <>
                                    <ProductsError isError={isError} />
                                    <div className="mx-auto sm:hidden md:block lg:block">
                                      <CategoryProducts
                                        products={products}
                                        cat={cat}
                                      />
                                    </div>
                                  </>
                                )}
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="drawer-side">
                      <label htmlFor="my-drawer" className="drawer-overlay" />
                      {categories && (
                        <ul className="menu p-4 overflow-y-auto lg:w-1/4 sm:w-1/2 bg-base-100 text-base-content">
                          <h3 className="lg:text-2xl sm:text-xl text-primary mb-7">
                            Categories
                          </h3>
                          {categories.map((cat) => (
                            <li className="flex flex-row mb-3" key={cat.id}>
                              <a
                                href={`#${cat.id}`}
                                className="text-neutral capitalize hover:text-primary flex-auto"
                              >
                                <div className="bg-accent shadow-lg p-2 rounded-xl max-w-fit justify-center items-center">
                                  <img
                                    src={cat.imageUrl}
                                    alt=""
                                    className=" h-5 w-6 "
                                  />
                                </div>

                                {cat.categoryName}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="lg:hidden md:hidden sm:block px-6 mx-auto">
                    <h3 className="lg:text-2xl sm:text-xl text-primary mb-6 text-center">
                      Categories
                    </h3>
                    {categories && (
                      <>
                        <div className="carousel carousel-center sm:w-80 sm:max-w-sm p-4 space-x-4 rounded-box">
                          {categories.map((cat) => (
                            <div className="carousel-item" key={cat.id}>
                              <div className="rounded-box">
                                <a
                                  href={`#${cat.id}`}
                                  className="btn btn-circle border-none capitalize text-xs bg-base-100 text-neutral w-fit px-2 hover:bg-primary hover:text-base-100"
                                >
                                  {cat.categoryName}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="w-fit">
                          {categories.map((cat) => (
                            <div id={cat.id} key={cat.id}>
                              <h3 className="mt-9 lg:text-2xl sm:text-xl text-primary pb-6 text-center capitalize">
                                {cat.categoryName}
                              </h3>
                              {isLoading ? (
                                <div>
                                  <ProductsLoading
                                    sectionTitle={
                                      "Products will load in a few..."
                                    }
                                  />
                                </div>
                              ) : (
                                <>
                                  <ProductsError isError={isError} />
                                  <div className="mx-auto sm:block md:hidden lg:hidden">
                                    <CategoryProducts
                                      products={products}
                                      cat={cat}
                                    />
                                  </div>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;

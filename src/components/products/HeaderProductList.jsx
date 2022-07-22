import { Link } from "react-router-dom";
const HeaderProductList = ({ products }) => {
  return (
    <>
      {products.length > 0 && (
        <div className="carousel w-full  max-w-7xl mx-auto">
          {products.map((item) => (
            <div
              id={`slide${item.id}`}
              className="carousel-item relative w-full flex lg:flex-row sm:flex-col-reverse"
              key={item.id}
            >
              <div className="lg:ml-24 my-auto w-1/2 sm:w-2/3 lg:w-full sm:mx-auto sm:text-center lg:text-left p-4">
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl pb-4 text-primary">
                  {item.name}
                </h1>
                <p className="text-neutral my-2">{item.description}</p>
                <button className="btn btn-primary text-sm rounded-xl mt-2">
                  <Link
                    to={`/product/${item.categoryId}/${item.id}/${item.name}`}
                  >
                    Check it out
                  </Link>
                </button>
              </div>
              <Link to={`/product/${item.categoryId}/${item.id}/${item.name}`}>
                <img
                  src={item.imageUrl}
                  className="w-fit lg:right-0 lg:mr-24 sm:mx-auto sm:w-2/3 md:max-w-fit "
                />
              </Link>

              <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                {item.id > 1 ? (
                  <a
                    href={`#slide${item.id - 1}`}
                    className="btn btn-circle bg-primary shadow-lg hover:bg-white hover:text-primary border-none"
                  >
                    ❮
                  </a>
                ) : (
                  <a
                    href={`#slide1`}
                    className="btn btn-circle bg-secondary shadow-lg btn-disabled"
                  >
                    ❮
                  </a>
                )}
                {/* {slide.id } */}
                <a
                  href={`#slide${item.id + 1}`}
                  className="btn btn-circle bg-primary shadow-lg hover:bg-white hover:text-primary border-none"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HeaderProductList;

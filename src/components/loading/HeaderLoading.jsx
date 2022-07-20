import React from 'react'

const HeaderLoading = () => {
  return (
    <div id="loading ">
                            <div className="carousel-item relative w-full flex lg:flex-row sm:flex-col-reverse animate-pulse">
                                <div className="lg:ml-24 my-auto w-1/2 sm:w-2/3 lg:w-1/2 sm:mx-auto sm:text-center lg:text-left p-4">
                                    <h1 className="lg:text-4xl md:text-3xl sm:text-2xl pb-4 text-neutral sm:text-left">
                                        Loading offers...
                                    </h1>
                                    <div className="text-neutral h-4  w-1/2 bg-secondary"></div>
                                    <br />
                                    <div className="text-neutral h-4  w-3/4 bg-secondary"></div>
                                    <br />
                                    <div className="text-neutral h-4  w-full bg-secondary"></div>
                                </div>
                                <figure className="h-60 w-fit lg:right-0 lg:mr-48 sm:mx-auto sm:w-2/3 lg:w-1/2 md:max-w-fit  flex justify-center items-center">
                                    <FaSpinner className="lg:h-24 lg:w-24 sm:h-12 sm:w-12 animate-spin text-neutral" />
                                </figure>

                                <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a
                                        href={`#slide1`}
                                        className="btn btn-circle bg-secondary shadow-lg btn-disabled"
                                    >
                                        ❮
                                    </a>

                                    <a
                                        href="#"
                                        className="btn btn-circle bg-secondary shadow-lg btn-disabled"
                                    >
                                        ❯
                                    </a>
                                </div>
                            </div>
                        </div>
  )
}

export default HeaderLoading
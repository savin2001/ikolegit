import React from "react";

const ProductsError = ({ isError }) => {
    return (
        <>
            {isError && (
                <div className="w-full flex justify-center items-center p-5 bg-error rounded-2xl">
                    <p className="text-centertext-base-100">
                        {isError.response.data}
                    </p>
                </div>
            )}
        </>
    );
};

export default ProductsError;

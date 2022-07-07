
const Cart = () => {
    const cart = localStorage.getItem('cartItems')
    
    return (
        <>
            {cart ? (
                <>
                    <div className="">
                        <p>Cart has items</p>
                        <button>Clear cart</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="">No items in cart</div>
                </>
            )}
        </>
    );
};

export default Cart;

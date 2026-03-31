import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ carts, setCarts }) => {

    // Remove item from cart
    const handleRemove = (id) => {
        setCarts(carts.filter(item => item.id !== id));
    };

    // Total price calculation
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handleCheckOut = () => {
        setCarts([]);
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

            {
                carts.length === 0 ? <div>
                    <div className="flex items-center justify-center">

                        <FaShoppingCart className="w-20 h-20"></FaShoppingCart>

                    </div>

                     <p className="text-center text-4xl font-bold">Cart is empty</p>

                </div> :
                <>
                <div className="space-y-4">
                {carts.map(item => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white rounded-full shadow-md w-12 h-12 flex items-center justify-center">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-8 h-8"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="text-pink-500 font-medium hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                ))}



                <div className="flex justify-between font-bold text-xl w-full bg-gray-100 p-4 rounded-lg">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>

        <button onClick={handleCheckOut} className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300">
          Proceed To Checkout
        </button>
            </div>
                   
                </>
            } 

        </div>
    );
};

export default Cart;
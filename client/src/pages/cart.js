import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function CartPage({ cart, setCart }) {
  const removeFromCart = (id) => {
    toast.error("Removed from cart");
    setCart((prev) => prev.filter((product) => product._id !== id));
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between mt-4">
        <h1 className="text-4xl font-semibold">Cart</h1>

        <div className="flex justify-between gap-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => setCart([])}
          >
            Clear Cart
          </button>

          <Link
            className="bg-violet-500 text-white px-4 py-2 rounded-md"
            to="/order"
          >
            Checkout
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {cart.map((product, index) => (
          <div className="bg-white shadow-md rounded-md p-4" key={index}>
            <div className="w-full h-96 bg-gray-200 rounded-md">
              <img
                src={product.url}
                alt={product.title}
                className="w-full h-full object-fit"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.price}</p>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => removeFromCart(product._id)}
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

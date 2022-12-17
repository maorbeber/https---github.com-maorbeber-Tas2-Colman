import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Home({ setCart }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success("Added to cart");
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div className="bg-white shadow-md rounded-md p-4" key={product._id}>
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
                className="bg-violet-500 text-white px-4 py-2 rounded-md"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

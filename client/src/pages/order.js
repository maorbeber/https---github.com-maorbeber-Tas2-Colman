import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Order({ cart, setCart }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const placeOrder = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/order", {
      orderlist: cart,
      totalprice: cart.reduce((acc, curr) => acc + curr.price, 0),
      user: {
        name,
        email,
        address,
        phone,
      },
    });
    if (res.data.success) {
      console.log(res.data);
      resetForm();
      setCart([]);
      toast.success("Order placed successfully");
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
  };

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center border p-4 rounded">
          <h1 className="text-4xl font-semibold">Order Details</h1>
          <div className="w-full">
            <div className="flex justify-between">
              <h3 className="text-lg font-semibold">Product</h3>
              <h3 className="text-lg font-semibold">Price</h3>
            </div>
            <div className="mt-4">
              {cart.map((product, index) => (
                <div className="flex justify-between" key={index}>
                  <p className="text-lg font-semibold">{product.title}</p>
                  <p className="text-lg font-semibold">{product.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <h3 className="text-lg font-semibold">Total</h3>
              <h3 className="text-lg font-semibold">
                {cart.reduce((acc, curr) => acc + curr.price, 0)}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="text-4xl font-semibold">Personal Details</h1>
          <form
            className="w-[35rem] flex flex-col gap-y-4"
            onSubmit={placeOrder}
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="border p-2 rounded"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="border p-2 rounded"
                placeholder="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="border p-2 rounded"
                placeholder="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="border p-2 rounded"
                placeholder="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-violet-500 text-white px-4 py-2 rounded-md"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

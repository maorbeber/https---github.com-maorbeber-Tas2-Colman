import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import CartPage from "./pages/cart";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";
import Order from "./pages/order";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <main className="w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/order"
          element={<Order cart={cart} setCart={setCart} />}
        />
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;

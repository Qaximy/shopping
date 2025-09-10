import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate =useNavigate()
  const handleCheckout=()=>{
  navigate("/checkout")
  }
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[35rem] h-full bg-white shadow-lg transform transition-all duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart content (items, checkout button etc) */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
        {/* cart components */}
        <CartContents/>
      </div>


      {/* checkout button */}
      <div className="p-4 sticky  bg-white bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        onClick={handleCheckout}>Checkout</button>
        <p className="text-sm  tracking-tighter text-gray-500 mt-2 text-center">Shipping , taxes , and discount code calculated and checkout </p>
      </div>
    </div>
  );
};

export default CartDrawer;

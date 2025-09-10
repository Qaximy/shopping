import React from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    if (onClose) onClose();
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
      : "text-gray-300 hover:bg-gray-700 py-3 px-4 rounded flex items-center space-x-2";

  return (
    <div className="p-6 relative">
      {/* Close button (only mobile) */}
      <button
        className="absolute top-4 right-4 md:hidden text-gray-300 hover:text-white"
        onClick={onClose}
      >
        <FaTimes size={22} />
      </button>

      {/* Logo */}
      <div className="mb-6 text-center md:text-left">
        <Link to="/admin" className="text-2xl font-bold tracking-wide" onClick={onClose}>
          Ecommerce
        </Link>
      </div>

      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2">
        <NavLink to="/admin/users" className={navLinkClass} onClick={onClose}>
          <FaUser />
          <span>Users</span>
        </NavLink>

        <NavLink to="/admin/products" className={navLinkClass} onClick={onClose}>
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink to="/admin/orders" className={navLinkClass} onClick={onClose}>
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/" className={navLinkClass} onClick={onClose}>
          <FaStore />
          <span>Store</span>
        </NavLink>
      </nav>

      {/* Logout Button */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

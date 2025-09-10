import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "./FilterSideBar";
import SortOptions from "./SortOptions";
import ProductGrid from "../components/products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  // ✅ Proper event listener with cleanup
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Mock fetch products
  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "product 1",
          price: 100,
          images: [{ url: "/src/assets/women5.webp" }],
        },
        {
          _id: 2,
          name: "product 2",
          price: 100,
          images: [{ url: "/src/assets/img4.webp" }],
        },
        {
          _id: 3,
          name: "product 3",
          price: 150,
          images: [{ url: "/src/assets/women3.webp" }],
        },
        {
          _id: 4,
          name: "product 4",
          price: 300,
          images: [{ url: "/src/assets/women4.webp" }],
        },
        {
          _id: 5,
          name: "product 5",
          price: 100,
          images: [{ url: "/src/assets/women5.webp" }],
        },
        {
          _id: 6,
          name: "product 6",
          price: 100,
          images: [{ url: "/src/assets/img4.webp" }],
        },
        {
          _id: 7,
          name: "product 7",
          price: 150,
          images: [{ url: "/src/assets/women3.webp" }],
        },
        {
          _id: 8,
          name: "product 8",
          price: 300,
          images: [{ url: "/src/assets/women4.webp" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center m-2 rounded-md"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white overflow-y-auto shadow-md transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase font-bold mb-4">All Collections</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;

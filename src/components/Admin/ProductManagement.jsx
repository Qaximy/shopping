import React from "react";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    { _id: 1234, name: "Printed Resort Shirt", price: 29.99, sku: "PRNT-RES-004" },
    { _id: 1256, name: "Chino Pants", price: 55, sku: "BW-005" },
    { _id: 1278, name: "Cargo Pants", price: 50, sku: "BW-008" },
    { _id: 2342, name: "Long-Sleeve Thermal Tee", price: 27.99, sku: "LST-THR-009" },
    { _id: 2434, name: "Pleated Midi Skirt", price: 55, sku: "BW-W-004" },
   
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      console.log("Deleted product with id:", id);
      // You can add API call here to delete from backend
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Product Management
      </h1>

      {/* Product List Table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full border border-gray-200 text-left text-gray-600">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price.toFixed(2)}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4 text-center space-x-2">
                   <Link
  to={`/admin/products/${product._id}/edit`}
  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition-colors"
>
  Edit
</Link>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-4 text-gray-500 italic"
                >
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;

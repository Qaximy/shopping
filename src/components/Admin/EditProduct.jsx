import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/ProductsData";

const EditProduct = () => {
  const { id } = useParams(); // ✅ URL se product ka id lelo
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);

  // ✅ id ke basis pe product load karna
  useEffect(() => {
    const product = products.find((p) => p._id === id);
    if (product) {
      setFormData({
        productName: product.name,
        description: product.description,
        price: product.price,
        countInStock: product.countInStock,
        sku: product.sku,
        sizes: product.sizes.join(", "),
        colors: product.colors.join(", "),
        images: product.images,
      });
    }
  }, [id]);

  if (!formData) {
    return <p className="text-center text-gray-600 mt-10">Loading product...</p>;
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", formData);
    navigate("/admin/orders"); // ✅ update ke baad list pe wapas bhej do
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input
              id="productName"
              type="text"
              value={formData.productName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              id="price"
              type="text"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Count In Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Count in Stock</label>
            <input
              id="countInStock"
              type="text"
              value={formData.countInStock}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* SKU */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
            <input
              id="sku"
              type="text"
              value={formData.sku}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Sizes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sizes</label>
            <input
              id="sizes"
              type="text"
              value={formData.sizes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Colors */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Colors</label>
            <input
              id="colors"
              type="text"
              value={formData.colors}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Images</label>
            <div className="flex space-x-4 mt-2">
              {formData.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Product ${i}`}
                  className="w-20 h-20 object-cover rounded-md border"
                />
              ))}
            </div>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-green-500 text-white rounded-md font-semibold hover:bg-green-600"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;

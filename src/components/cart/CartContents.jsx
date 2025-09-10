import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
  const CartProduct = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      productId: 2,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      productId: 3,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      productId: 4,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=4",
    },
    {
      productId: 5,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      productId: 6,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200/300?random=6",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      {CartProduct.map((item) => (
        <div
          key={item.productId}
          className="flex items-center justify-between border-b py-4"
        >
          {/* Product Image */}
          <div className="flex items-start">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
          </div>
          {/* Product Info */}
          <div className="flex-1 ml-4">
            <h3 className="text-sm font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">
              Size: {item.size} | Color: {item.color}
            </p>
            <div className="flex items-center mt-2">
              <button className="border rounded px-2 py-1 text-xl font-medium">
                -
              </button>
              <span className="mx-4">{item.quantity}</span>
              <button className="border rounded px-2 py-1 text-xl font-medium">
                +
              </button>
            </div>
          </div>

          {/* Quantity + Price */}
          <div className="text-right">
            <p className="text-sm font-semibold">
              ${item.price.toLocaleString()}
            </p>
            <button>
                <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
            </button>
          </div>
        </div>
      ))}

      {/* Checkout Section */}
    </div>
  );
};

export default CartContents;

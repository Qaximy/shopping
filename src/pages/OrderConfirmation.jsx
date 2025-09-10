import React from "react";

const OrderConfirmation = () => {
  const order = {
    id: "675bf87a85092d3ae729991d",
    date: "13/12/2024",
    estimatedDelivery: "23/12/2024",
    product: {
      name: "Classic Oxford Button-Down Shirt",
      color: "Red",
      size: "S",
      qty: 1,
      price: 39.99,
      image: "https://picsum.photos/200/300?random=10",
    },
    paymentMethod: "PayPal",
    delivery: {
      name: "Test",
      address: "Test, Test",
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen ">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-green-600 text-center mb-8">
        Thank You for Your Order!
      </h1>

      {/* Order Details */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between mb-6">
          <div>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Order ID:</span> {order.id}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Order Date:</span> {order.date}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Estimated Delivery:</span>{" "}
              {order.estimatedDelivery}
            </p>
          </div>
        </div>

        {/* Product Info */}
        <div className="border rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={order.product.image}
              alt={order.product.name}
              className="w-20 h-24 object-cover rounded mr-4"
            />
            <div>
              <h3 className="font-medium">{order.product.name}</h3>
              <p className="text-sm text-gray-600">
                {order.product.color} | {order.product.size}
              </p>
              <p className="text-sm text-gray-600">Qty: {order.product.qty}</p>
            </div>
          </div>
          <p className="font-semibold">
            SAR {(order.product.price * order.product.qty).toFixed(2)}
          </p>
        </div>

        {/* Payment & Delivery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Payment</h4>
            <p className="text-sm text-gray-700">{order.paymentMethod}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Delivery</h4>
            <p className="text-sm text-gray-700">{order.delivery.name}</p>
            <p className="text-sm text-gray-700">{order.delivery.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

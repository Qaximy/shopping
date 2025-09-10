import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
];

const Checkout = () => {
  const navigate = useNavigate();
  const [CheckoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    city: "",
    postalcode: "",
    country: "",
    phone: "",
  });

  const totalPrice = CartProduct.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123); // mock checkout id
  };

  const handlePayment = () => {
    navigate("/orderconfirmation"); // redirect to success page
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-7xl py-10 px-6 tracking-tighter">
      {/* Left Section - Shipping Form */}
      <div className="rounded-lg p-6 ">
        <h2 className="text-2xl uppercase mb-6 font-semibold">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          {/* Contact */}
          <h3 className="text-lg mb-4 font-medium">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value="example@gmail.com"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          {/* Delivery */}
          <h3 className="text-lg mb-4 font-medium">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name:</label>
              <input
                type="text"
                value={shippingAddress.FirstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    FirstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name:</label>
              <input
                type="text"
                value={shippingAddress.LastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    LastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.Address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  Address: e.target.value,
                })
              }
              className="p-2 w-full rounded border"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City:</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code:</label>
              <input
                type="text"
                value={shippingAddress.postalcode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalcode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="p-2 w-full rounded border"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="p-2 w-full rounded border"
              required
            />
          </div>

          {/* Continue or Payment */}
          <div className="mt-6">
            {!CheckoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4 font-medium">Pay with PayPal</h3>
                <button
                  type="button"
                  onClick={handlePayment}
                  className="w-full bg-yellow-500 text-black py-3 rounded hover:bg-yellow-600 transition"
                >
                  Pay ${totalPrice} Now
                </button>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section - Cart Summary */}
      <div className="bg-gray-50 rounded-lg p-6 shadow">
        <h2 className="text-xl mb-4 font-semibold">Order Summary</h2>
        <div className="py-4 mb-4 border-t">
          {CartProduct.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between py-3 border-b"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-24 object-cover mr-4 rounded"
              />
              <div className="flex-1">
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  Size: {item.size}, Color: {item.color}
                </p>
                <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold ml-4">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center text-lg mb-2">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>

        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p className="font-medium">Free</p>
        </div>
        
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
      </div>

    </div>
  );
};

export default Checkout;

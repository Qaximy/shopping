import React from 'react';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
  const orderDetails = {
    id: '#67540ced3376121b361a0ed0',
    date: '07/12/2024',
    status: {
      approved: 'Approved',
      delivery: 'Pending Delivery',
    },
    paymentInfo: {
      method: 'PayPal',
      status: 'Paid',
    },
    shippingInfo: {
      method: '', // Blank in the image
      address: 'New York, USA',
    },
    products: [
      { name: 'Slim-Fit Easy-Iron Shirt', unitPrice: 34.99, quantity: 1, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2572&auto=format&fit=crop' },
      { name: 'Classic Oxford Button-Down Shirt', unitPrice: 39.99, quantity: 1, image: 'https://images.unsplash.com/photo-1591871936314-e28373af89d6?q=80&w=2602&auto=format&fit=crop' },
      { name: 'Slim-Fit Easy-Iron Shirt', unitPrice: 34.99, quantity: 1, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2572&auto=format&fit=crop' },
      { name: 'Slim-Fit Easy-Iron Shirt', unitPrice: 34.99, quantity: 1, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2572&auto=format&fit=crop' },
      { name: 'Chino Pants', unitPrice: 55.00, quantity: 1, image: 'https://images.unsplash.com/photo-1582233470715-433e88768a44?q=80&w=2574&auto=format&fit=crop' },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl w-full max-w-5xl">
        <div className="flex justify-between items-start mb-6 border-b border-gray-200 pb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Order Details</h1>
            <p className="text-sm md:text-base text-gray-500 mt-1">
              Order ID: <span className="font-semibold text-gray-700">{orderDetails.id}</span>
            </p>
            <p className="text-sm md:text-base text-gray-500">
              {orderDetails.date}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
              {orderDetails.status.approved}
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
              {orderDetails.status.delivery}
            </span>
          </div>
        </div>

        {/* --- */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Payment Info</h2>
            <div className="text-gray-600 space-y-1">
              <p><span className="font-medium">Payment Method:</span> {orderDetails.paymentInfo.method}</p>
              <p><span className="font-medium">Status:</span> {orderDetails.paymentInfo.status}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Shipping Info</h2>
            <div className="text-gray-600 space-y-1">
              <p><span className="font-medium">Shipping Method:</span> {orderDetails.shippingInfo.method || 'N/A'}</p>
              <p><span className="font-medium">Address:</span> {orderDetails.shippingInfo.address}</p>
            </div>
          </div>
        </div>
        
        {/* --- */}

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Products</h2>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 py-3 px-2 border-b border-gray-300 font-semibold text-gray-600">
              <div className="col-span-2">Name</div>
              <div>Unit Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            {/* Product List */}
            {orderDetails.products.map((product, index) => (
              <div key={index} className="grid grid-cols-5 items-center gap-4 py-3 px-2 border-b border-gray-200">
                <div className="col-span-2 flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <span className="text-gray-800">{product.name}</span>
                </div>
                <div className="text-gray-600">${product.unitPrice.toFixed(2)}</div>
                <div className="text-gray-600">{product.quantity}</div>
                <div className="text-gray-800 font-medium">${(product.unitPrice * product.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- */}
        
        <div className="mt-8">
      <Link to="/order" className="text-blue-600 hover:underline transition-colors duration-200">
  Back to My Orders
</Link>


        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
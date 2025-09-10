import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Orders = () => {
  const ordersData = [
    {
      id: '#67540ced3376121b361a0ed0',
      customer: 'Admin User',
      totalPrice: 199.96,
      status: 'Delivered',
    },
   
    {
      id: '#675c24b09b88827304bd5cc1',
      customer: 'Admin User',
      totalPrice: 39.99,
      status: 'Processing',
    },
  ];

  // For testing the "No orders found" message, uncomment the line below:
  // const ordersData = [];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Management</h1>

      {/* Orders Table Container */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {ordersData.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              {/* Table Header */}
              <div className="grid grid-cols-[1.25fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-2 border-b border-gray-300 font-semibold text-gray-600 uppercase text-sm">
                <div className="col-span-1">Order ID</div>
                <div className="col-span-1">Customer</div>
                <div className="col-span-1">Total Price</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              {/* Orders List */}
              {ordersData.map((order, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1.25fr_1fr_1fr_1fr_1fr] gap-4 py-3 px-2 items-center text-gray-800 border-b border-gray-200"
                >
                  <div className="col-span-1 font-mono text-sm">{order.id}</div>
                  <div className="col-span-1">{order.customer}</div>
                  <div className="col-span-1">${order.totalPrice.toFixed(2)}</div>
                  <div className="col-span-1 relative">
                    <select
                      defaultValue={order.status}
                      className="w-full border border-gray-300 rounded-md p-1 pr-8 cursor-pointer appearance-none focus:ring-2 focus:ring-green-500"
                    >
                      <option>Processing</option>
                      <option>Delivered</option>
                      <option>Shipped</option>
                      <option>Cancelled</option>
                    </select>
                    {/* Custom arrow */}
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-sm">
                      <FaChevronDown />
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <button className="py-1 px-4 bg-green-500 text-white rounded-md font-medium text-sm hover:bg-green-600 transition-colors duration-200">
                      Mark as Delivered
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-gray-500">
            <p className="text-xl font-medium">No orders found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
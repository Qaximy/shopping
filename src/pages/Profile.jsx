import React from "react";
import MyOrder from "./MyOrder";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left section (Profile Card) */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold text-gray-600 mb-4">
              JD
            </div>
            <h1 className="text-2xl font-bold mb-1">John Doe</h1>
            <p className="text-gray-600 mb-6">john@example.com</p>
            <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition">
              Logout
            </button>
          </div>

          {/* Right section (Orders Table) */}
          <div className="w-full md:w-2/3 lg:w-3/4  p-4">
            <MyOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

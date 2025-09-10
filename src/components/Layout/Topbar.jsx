// import React from "react";
// import {
//   ChevronDown,
//   Search,
//   Instagram,
//   Facebook,
//   Send,
// } from "lucide-react"; // 👈 ye line add ki

// const Topbar = () => {
//   return (
//     <div className="hidden lg:flex justify-between items-center py-3 px-4 md:px-6 text-sm gap-3 md:gap-0">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <svg
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M21 4H2.5C1.67 4 1 4.67 1 5.5S1.67 7 2.5 7H19L17.5 13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H18C18.5304 17 19.0391 16.7893 19.4142 16.4142C19.7893 16.0391 20 15.5304 20 15V13.5L22.25 5.75C22.4279 5.24436 22.4419 4.6908 22.2903 4.17529C22.1387 3.65977 21.8291 3.19771 21.4142 2.85355C21.0701 2.5094 20.6139 2.29958 20.125 2.25752C19.6361 2.21546 19.1432 2.34215 18.75 2.625L17.5 4H21V4.5M6 21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20C5.55228 20 6 20.4477 6 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z"
//             fill="black"
//           />
//         </svg>
//         <span className="text-xl font-bold">LuminaE</span>
//       </div>

//       {/* Search */}
//       <div className="flex items-center border rounded-md px-2 w-full max-w-lg">
//         <input
//           type="text"
//           placeholder="Search Products"
//           className="flex-1 p-2 outline-none text-sm rounded-l-md"
//         />
//         <div className="flex items-center gap-1 cursor-pointer border-l px-2">
//           <span className="text-gray-600">All categories</span>
//           <ChevronDown className="w-4 h-4 text-gray-500" />
//         </div>
//         <Search className="w-5 h-5 ml-2 text-gray-600 cursor-pointer" />
//       </div>

//       {/* Social Icons */}
//       <div className="flex gap-3 text-gray-500">
//         <Instagram className="w-5 h-5" />
//         <Facebook className="w-5 h-5" />
//         <Send className="w-5 h-5" />
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri"; // ✅ correct name

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto justify-between flex items-center py-3 px-4">
        {/* Left: Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        {/* Center: Tagline */}
        <div className="text-sm text-center flex-grow">
          <span>We ship worldwide - Fast and reliable Shipping!</span>
        </div>

        {/* Right: Contact Number */}
        <div className="text-sm hidden md:block">
          <a href="tel:+92344567889" className="hover:text-gray-300">
            +92 344 567 889
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

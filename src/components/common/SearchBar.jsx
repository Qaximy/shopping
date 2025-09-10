import { useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2"; // 👈 Close icon added

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
    setSearchTerm(""); // reset when closing
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      console.log("Searching for:", searchTerm);
      // yahan search API call kar sakti ho
    }
  };

  return (
    <div
      className={`flex items-center justify-center transition-all duration-300 ${
        isOpen
          ? "absolute top-0 left-0 w-full bg-white h-24 z-50 px-4"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pr-10 rounded-lg focus:outline-none w-full placeholder:text-gray-500"
            />
            {/* Search icon inside input */}
            <HiMagnifyingGlass className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>
          {/* Close button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="ml-4 text-gray-700 hover:text-black"
          >
            <HiXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

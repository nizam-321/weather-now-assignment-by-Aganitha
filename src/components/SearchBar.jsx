import { useState } from "react";
import { FiSearch } from "react-icons/fi"; 

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs">
      <div className="relative">
        {/* Input with left padding to fit the icon */}
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none bg-transparent text-gray-300"
        />

        {/* Search icon inside button (React Icon) */}
        <button
          type="submit"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
          aria-label="Search"
        >
          <FiSearch className="h-5 w-5 text-gray-300" />
        </button>
      </div>
    </form>
  );
}

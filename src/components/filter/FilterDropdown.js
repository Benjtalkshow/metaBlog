import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from "react-icons/hi";


const FilterDropdown = ({ categories, onCategoryChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const options = ["Option 1", "Option 2", "Option 3"];
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  

  return (
<div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full whitespace-nowrap rounded-md border py-2 border-gray-300 px-4 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-badge"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedOption || "Categories"}
          {isOpen ? (
            <HiChevronUp className="-mr-1 ml-2 h-5 w-5" />
          ) : (
            <HiChevronDown className="-mr-1 ml-2 h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                role="menuitem"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterDropdown;
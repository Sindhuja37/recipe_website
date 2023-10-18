import React, { useState, useEffect } from "react";

function DropdownWithAutocomplete({ option }) {
  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Lemon",
    "Mango",
    "Orange",
    "Pineapple",
    "Strawberry",
  ];
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);

    // Filter the options based on user input
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setSelectedOption(option);
    setFilteredOptions([]); // Clear the filtered options
  };

  return (
    <div>
      <h2>Dropdown with Autocomplete</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to filter options"
      />
      <ul className="autocomplete-list">
        {filteredOptions.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
}

export default DropdownWithAutocomplete;

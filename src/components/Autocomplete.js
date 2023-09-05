import React, { useState, useEffect } from 'react';
import "../styles/App.css"

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function Autocomplete() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedInput, setDebouncedInput] = useState('');

  useEffect(() => {
    // Debounce the input to prevent excessive filtering while typing
    const timeoutId = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 300); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue]);

  useEffect(() => {
    // Filter the suggestions based on the debounced input value
    const filteredSuggestions = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(debouncedInput.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  }, [debouncedInput]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSuggestionClick = (suggestion) => {
    // Set the input value to the clicked suggestion
    setInputValue(suggestion);
    // Clear the suggestions
    setSuggestions([]);
  };

  return (
    <div>
      <h1>Search Item</h1>
      <input
        type="text"
        placeholder="Type a fruit name"
        className="in"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Autocomplete;

